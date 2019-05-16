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

_This might be one of my most frustrating posts to date because I suffered the classic mistake of not backing up my code. So here's your perennial reminder to **ALWAYS BACKUP YOUR WORK**._

---

In this post, I want to:

* Explain the separating axis theorem to you
* Demonstrate its use with lidar data through C++ code

# What Is The Separating Axis Theorem?
The Separating Axis Theorem (SAT) is an application of the [Hyperplane Separation Theorem](https://en.wikipedia.org/wiki/Hyperplane_separation_theorem) for the purpose of determining whether two convex polygons overlap (i.e. collision detection). In my own plain English, the HST theorem states:

> **Given two disjoint, nonempty, convex sets of points, there exists a hyperplane that separates them.**

> _(Note that the "points" may be any subset of n-dimensional reals.)_

Following from HST, SAT simply exacts the application of this theorem on convex polygons, whose vertices are sets of points in n-dimensional cases. Here's what that looks like in 2D, courtesy of Wikipedia:

{{< figure src="../img/sat-wiki.png" width="400" height="400" >}}

<br/>
# Using Lidar Scan Points
Rather than start with polygons, we'll start with lidar scan points. In robotics, [lidar](https://en.wikipedia.org/wiki/Lidar) is a very common sensor. You may have seen videos of some company's autonmous car mapping its environment with the use of a multi-scan lidar mounted to the top of the vehicle. 

{{< figure src="../img/lidaronastick.png" caption="\"I map myself with a lidar on a stick.\"" >}}

In these and other contexts, lidar is often used for detecting objects in the environment by segmenting ([a whole subject unto itself](https://velodynelidar.com/lidar/hdlpressroom/pdf/Articles/LIDAR-based%203D%20Object%20Perception.pdf), by the way) the various sets of scan points that have been placed in a common reference frame.

{{< figure src="store-points.png" caption="A fully-mapped indoor area" >}}

Once our objects are segmented into sets of points, if were to stretch a rubber band around those points, it would form a convex polgon whose vertices are the outermost points in the set. Now, say we want to translate our autonomous mobile vehicle along a path in the lidar-mapped scene. At discrete steps along that path, we can compare the known polygon formed by our vehicle to the polygons formed by all the segmented sets of points in the world. A little *deus ex lidar*...


# A Bare-Bones Implementation



---
*References:*
* https://github.com/Seanmatthews/separating-axis-theorem
* http://www.dyn4j.org/2010/01/sat/
* https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
