---
date: "2016-09-04T20:42:34-04:00"
draft: false
title: "ARM (Autonomous Robotic Manipulation)"
type: projects
project_date: 2012-05-14
---

The [DARPA ARM project](https://www.darpa.mil/program/autonomous-robotic-manipulation) was a logical extension to the
DARPA LAGR project. Where LAGR aimed to push the envelope on autonomous ground navigation,
ARM aimed to advance the field in autonomous robotic manipulation, both in hardware
and in software. The program was architected as a competition between a number of commerical
and educational institutions.

I led two follow-on projects to this program that saw "Robbie the Robot" installed as an
interactive exhibit in both the [National Museum of American History](https://www.smithsonianmag.com/smithsonian-institution/robots-get-some-curatorial-respect-at-the-american-history-museum-177226931/) and the [National Air and Space Museum](https://airandspace.si.edu/newsroom/press-releases/national-air-and-space-museum-hosts-robotics-program).

{{< figure src="img/robbie-history-museum.jpg" >}}

In the first museum, the robot played a light-up memory game, the name of which
will go unmentioned for legal purposes. After letting visitors control its arm, by moving around an orange ball
in its view, to play the game themselves, the robot attempted to beat the visitor's time. The robot used stereo
vision to initially extract the surface of the table from the objects resting on top of it. Image color data,
along with a model of the game hardware, allowed the robot to localize the game among those objects. Regional
saturation disparities in the image signaled to the robot that a button had been lit. Once the game and its
buttons were reconciled within a reference frame common to the robot and all its joints, our motion planner
formed a joint trajectory that placed the robots hand above the button to be pressed. Force sensors in the
finger joints, coupled with visual data, determined when a button had been pressed. In the interactive version
of the game, the robot used its stereo vision to calculate the distance to the orange ball, which it detected
with simple color thresholding and ellipse detection.

{{< figure src="img/robbie-air-and-space.jpg" >}}

In the second museum, the robot demonstrated its autonomous perception of the position and orientation of a
cylindrical plug, which it then pciked up and inserted into a receptacle on an adjacent wall. Similar methods
as above were employed to sense and manipulate the cylindrical plug. Additions to that previous design included:

  * Improved fault detection-- the installation required the robot to operate without human intervention for upwards of 8 hours per day
  * Adequate grasp detection-- a statistical model of forces for each hand and finger joint determined the confidence of the grasp on the plug

<br><br>

{{< youtube UWJX4LvUfFA >}}