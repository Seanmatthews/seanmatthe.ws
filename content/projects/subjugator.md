---
title: "Subjugator"
date: 2018-03-11T21:24:23-04:00
draft: false
type: projects
project_date: 2006-08-02
---

[Subjugator](http://subjugator.org/) is a long-standing autonomous underwater vehicle
(alongside the similarly named team). Working with a small group of fantastic people
at University of Florida, this was my first foray into "real" robotics. This project
stoked the embers of my interest in robotics as a lifelong career.

{{< figure src="img/SubjuGator5a-300x225.jpg" >}}

That 2006 AUVSI competition challenged competitors to create a fully-autonomous
underwater robot that:

1. Travels through a gate (the weed-out task)
1. Finds a blinking LED array, noting the color and frequency of the blink sequence
1. Follows a "pipeline" toward three bins, differentiated by rim thatching patterns
1. Drops a ball bearing into the bin specified by the aforementioned LED sequence
1. Surfaces within a floating ring directly overtop an acoustic pinger

My ongoing study of computer vision lent itself to the detection of the pipeline
and its orientation, as well as to distinguishing between the three distinct thatching
patterns that adorned the bins. After some amount of preprocessing to sharpen, remove
artifacts, and binarize the incoming video feed (webcams in 2006 did not perform
spectacularly), I applied a Canny edge detector followed by a Hough transform to
detect prevalent lines in each frame. A final filtering step on the lines yielded
either the orientation of the pipeline, a bin and its descriptor, or nothing. My
feature detection approach worked reasonably well, though it temporarily strayed
when it caught a linear discoloration at the bottom of the basin. With all of the
team's tremendous contributions, we placed [first in the world](http://www.auvsifoundation.org/node/386).

{{< youtube JBdq1TijfQE >}}