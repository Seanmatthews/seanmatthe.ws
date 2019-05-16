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

This might be one of my most frustrating posts to date because I suffered the classic mistake of not backing up my code. So here's your perennial reminder to **ALWAYS BACKUP YOUR WORK**.

---

In this post, I want to:

* Explain the separating axis theorem to you 
* Demonstrate its use through C++ code

# What Is The Separating Axis Theorem?
The Separating Axis Theorem (SAT) is an application of the [Hyperplane Separation Theorem](https://en.wikipedia.org/wiki/Hyperplane_separation_theorem) for the purpose of determining whether two convex polygons overlap (i.e. collision detection). In my own plain English, the HST theorem states:

`Given two disjoint, nonempty, convex sets of points, there exists a hyperplane that separates them.`

(The "points" may be any subset of n-dimensional reals.) 

Following from HST, SAT simply exacts the application of this theorem on convex polygons, whose vertices are sets of points in n-dimensional cases. Here's what that looks like in 2D, courtesy of Wikipedia:

{{< figure rc="sat.png" >}}

# A Bare Bones Implementation
In robotics, [lidar](https://en.wikipedia.org/wiki/Lidar) is a very common sensor. You may have seen videos of some company's autonmous car mapping its environment with the use of a multi-scan lidar. In these and other contexts, lidar is often used for detecting objects in the environment by segmenting the various sets of scan points that have been placed in a common reference frame. 

---
*References:*
* https://github.com/Seanmatthews/separating-axis-theorem
* http://www.dyn4j.org/2010/01/sat/
* https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
