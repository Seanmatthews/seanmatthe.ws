---
date: "2016-09-04T20:44:21-04:00"
draft: false
title: "MAARS"
type: projects
project_date: 2011-02-01
---


The MAARS is a military "escalation of force" robot, outfitted with a loudspeaker, a laser "dazzler", a launcher (for beanbags, smoke, teargas, etc), and an assault rifle. Alternatively, that payload may be exchagned for a large arm. I added some minor autonomous behaviors to this vehicle, including waypoint following, obstacle detection, and person following. In order to follow waypoints, the robot estimated its position by fusing local high-precision IMU estimates with global GPS estimates. It employed a standard position PID controller. Front-facing obstacle detection assumed a largely open path and used only sonar sensors to pause the path when encountering an obstacle. Ultrawide-band radio signals aided in person following by trilaterating the distance to the person, and then adjusting velocity.

{{< youtube cn0WwLZ20Q4 >}}

And just for fun, I made a remote iPhone control for this beast of a vehicle...

{{< youtube 6nyPdgDmuo8 >}}
