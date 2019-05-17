---
title: "Separating Axis Theorem"
date: 2019-01-20T01:04:27-05:00
draft: true
type: articles
tags: 
- spatial-math
- obstacle-collision
- parallel-programming
---

The **Separating Axis Theorem (SAT)** is an application of the **[Hyperplane Separation Theorem](https://en.wikipedia.org/wiki/Hyperplane_separation_theorem)** for the purpose of determining whether two convex polygons overlap (i.e. collision detection). In my own plain English, the HST theorem states:

> <span style="font-size:15px;">
***Given two disjoint, nonempty, convex sets of points, there exists a hyperplane that separates them.***
</span>

> _(Note that the "points" may be any subset of n-dimensional reals.)_

Following from HST, SAT simply exacts the application of this theorem on convex polygons, whose vertices are sets of points in n-dimensional cases. Here's what that looks like in 2D, courtesy of Wikipedia:

{{< figure src="../img/sat-wiki.png" width="400" height="400" >}}

<br/>
# Using Lidar Scan Points
Rather than start with polygons, we'll start with lidar scan points. In robotics, [lidar](https://en.wikipedia.org/wiki/Lidar) is a very common sensor. You may have seen videos of some company's autonmous car mapping its environment with the use of a multi-scan lidar mounted to the top of the vehicle. 

{{< figure src="../img/lidaronastick.png" caption="\"I map myself with a lidar on a stick.\"" >}}

In these and other contexts, lidar is often used for detecting objects in the environment by segmenting ([a whole subject unto itself](https://velodynelidar.com/lidar/hdlpressroom/pdf/Articles/LIDAR-based%203D%20Object%20Perception.pdf), by the way) the various sets of scan points that have been placed in a common reference frame.

{{< figure src="../img/office-ptcloud.png" caption="A fully-mapped indoor area" >}}

Once our objects are segmented into sets of points, if were to stretch a rubber band around those points, it would form a convex polgon whose vertices are the outermost points in the set. Now, say we want to translate our autonomous mobile vehicle along a path in the lidar-mapped scene. At discrete steps along that path, we can compare the known polygon formed by our vehicle to the polygons formed by all the segmented sets of points in the world. A little *deus ex lidar*...


# A Bare-Bones Implementation

<br/>
{{< highlight cpp >}}
void SeparatingAxisTheorem::getProjectionAxes(const std::vector<EigenPt>& verts, 
                                              std::vector<EigenPt>& axes)
{
    for (int i=0; i<verts.size(); ++i) 
	{
        int j = (i+1)%(verts.size());
        auto pt1 = verts[i];
        auto pt2 = verts[j];
        EigenPt edgeNormal { pt2[1] - pt1[1], -(pt2[0] - pt1[0]) };
        axes.push_back(edgeNormal);
    }
}
{{< / highlight >}}
This function simply finds all the normals of each edge described by the list of in-order vertices fed to it. It returns those normals as a set of axes. We'll project our polygons onto these axes when testing for collision.

<br/>
{{< highlight cpp >}}
void SeparatingAxisTheorem::projectOntoAxis(const std::vector<EigenPt>& hullPts, 
                                            const EigenPt axis, 
                                            std::vector<EigenPt>& projPts)
{
    for (auto p : hullPts)
    {
        EigenPt pp = (p.dot(axis) / axis.dot(axis)) * axis;
        projPts.push_back(pp);
    }
}
{{< / highlight >}}
Another simple function, this one takes a list of points, which represent a convex polygon, and project them onto the supplied axis. It returns the projected points for that polygon.

<br/>
{{< highlight cpp >}}
bool SeparatingAxisTheorem::pointsOverlap(std::vector<EigenPt>& ptsA, 
                                          std::vector<EigenPt>& ptsB)
{
    // Find endpoints by sorting points
    auto sortFunc = [](const EigenPt a, const EigenPt b) 
		{ return a[0] == b[0] ? a[1] < b[1] : a[0] < b[0]; };
    sort(ptsA.begin(), ptsA.end(), sortFunc);
    sort(ptsB.begin(), ptsB.end(), sortFunc);
    
    // Determine overlap via: A--B, C--D, B >= C 0 && D >= A
    return !sortFunc(ptsB[ptsB.size()-1], ptsA[0]) &&
           !sortFunc(ptsA[ptsA.size()-1], ptsB[0]);
}
{{< / highlight >}}
This function provides the meat of the overlap determination with a little added spice-- it takes two sets of convex polygon vertices and sorts them, first by X coordnate then by Y coordinate. Remember that all these vertices exist on a line, having been projected. The function orders the vertices such that the first in the list will be the furthest point in one direction along the line, and the last in the list will be the furthest point in the other direction. Then the return statement checks that no overlap exists between the first point of polygon A and the last point of polygon B, and vice versa (since the polygons could live on either wide of each other).

<br/>
{{< highlight cpp >}}
bool SeparatingAxisTheorem::projectionOverlap(const std::vector<EigenPt>& ptsA,
                                              const std::vector<EigenPt>& ptsB,
                                              const std::vector<EigenPt>& axes)
{
    std::vector<EigenPt> projA, projB;
    
    for (auto axis : axes)
    {
        // Project onto axis
        projectOntoAxis(ptsA, axis, projA);
        projectOntoAxis(ptsB, axis, projB);
        
        // If no overlap, return false
        if (!pointsOverlap(projA, projB)) return false;
        
        projA.clear();
        projB.clear();
    }
    return true;
}
{{< / highlight >}}
This function collates the results of our previous functions, looping over all polygon normals (axes), projecting polygons onto those axes, and determining overlap. If one projection of the polygons onto one axis exists such that there's no overlap, then there exists a hyperplane that separates those two polygons. 

<br/>
{{< highlight cpp >}}
bool SeparatingAxisTheorem::overlap(HullPtr a, HullPtr b) 
{
    int dimension = a->getDimension();
    assert(b->getDimension() == dimension);
    assert(2 == dimension); // Currently only support 2D
    
    std::vector<EigenPt> axesA, axesB;
    std::vector<EigenPt> pointsA, pointsB;

    // Reconstruct with PointXYZ point cloud, regardless of how the hull was formed
    CloudPtr vertsA { new Cloud };
    CloudPtr vertsB { new Cloud };
    a->reconstruct(*vertsA);
    b->reconstruct(*vertsB);

    // if no vertices, cloud is empty
    assert(vertsA->points.size() > 0 && vertsB->points.size() > 0);

    // Get the points from cloud
    std::for_each(vertsA->points.begin(), vertsA->points.end(), [&pointsA](pcl::PointXYZ p) {
            pointsA.emplace_back(p.data);
        });
    std::for_each(vertsB->points.begin(), vertsB->points.end(), [&pointsB](pcl::PointXYZ p) {
            pointsB.emplace_back(p.data);
        });

    // Find the axes onto which we'll project the hulls
    getProjectionAxes(pointsA, axesA);
    getProjectionAxes(pointsB, axesB);
        
    return (projectionOverlap(pointsA, pointsB, axesA) && 
            projectionOverlap(pointsA, pointsB, axesB));
}
{{< / highlight >}}
This function is the high-level interface for determining whether two convex polygons overlap. It checks that we're dealign with 2D polygons, transforms our randomly generated sample polygons into point clouds, forms a list of points from those clouds, creates a list of projection axes for each list of points, and determines if the two overlap.

<br/>
Finally, **main.cpp** creates random point clouds within a visualization for testing and displaying the results of our SAT implementation. Find the full code with installation & operation instructions [here](https://github.com/Seanmatthews/separating-axis-theorem).
{{< gist Seanmatthews 2a7920ca1a58e84014d161a4f79b623d "main.cpp" >}}

<br/><br/>

---
*References:*

* https://github.com/Seanmatthews/separating-axis-theorem
* http://www.dyn4j.org/2010/01/sat/
* https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
