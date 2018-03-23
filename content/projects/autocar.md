---
date: "2016-09-04T20:44:14-04:00"
draft: true
title: "Autonomous Car Perception"
type: projects
project_date: 2016-08-01
---

At the height of the autonomous car craze, I developed a proof-of-concept system to detect and track moving vehicles on the road, using a single Velodyne-16. The algorithm first performs a planar segmentation and selects the most frequently occurring largest plane as the ground. Then, using specific geometric knowledge about on-road environments, I bound the point cloud, through "curb" detection and the filtering of objects too tall for the road, to reduce the size of the operating point cloud.

