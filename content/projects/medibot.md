---
title: "Medibot"
date: 2018-03-18T18:24:55-04:00
draft: true
type: projects
---

The Medibot project used a robot called the Ares, comprised of two welded-together Segway bases. The project had lofty goals of 1) waypoint following, 2) pulling a litter, 3) person following, 4) autonomous manipulation of a backpack strap to drag the soldier wearing it. Being such a multi-faceted project, I worked only on the person-following portion of it. For this task, I employed three Ultrawide-band transceivers to trilaterate the 3D position of the leader relative to the robot. As we were using only two anchors, the trilaeration sees all points along the circle drawn vertically over top and underneath the robot, with radius equal to the detection distance, as the same (imagine the intersection of two spheres). Assuming the robot travels along a 2D map, an that the leader does not jump directly over the robot (we tested this!), the robot localizes the leader relative to itself very well. The robot always turns in the direction of the leader and follows him with speeds proportional to the distance from him.