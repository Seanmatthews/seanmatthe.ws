---
title: "Pink Noise for Obstacle Simulation in Path Planning"
date: 2018-07-26T11:06:13-04:00
draft: true
type: articles
---

Path & motion planning is a particular interest of mine, and, recently, I've been experimenting with a number of 2D and 3D path planners for purposes of both subsea navigation and navigation around manmade structures. After implementing some of these algorithms, I needed a way to test them thoroughly. For that, I wanted a map generator capable of fabricating maps that comprise some pseudo-random clusters of pixels (in 2D), and some natural-ish terrain (in 3D). Nothing fancy, something pragmatic.


## Perlin Noise
Not being from the computer graphics world, I had never heard of Ken Perlin. This guy, in the early 1980s, while indirectly working on the movie Tron (1982), formulated an algorithm for generating gradient noise to produce better CGI effects for object surfaces, fire, smoke, and more! Later, in 2002, after winning a frikkin Academy Award for Technical Achievement, he improved on his algorithm by correcting a couple minor defects. That's some back story, and let's face it-- as a roboticist *not* working in movies, the best I can hope for is inheriting my wife's 78 year-old aunt's Emmy. 

Perlin Noise is a type of gradient noise that is typically used for increasing the appearance of realism in computer graphics. But at its core, the algorithm is a pseudo-random noise generator whose visual details are all the same size, allowing it to be easily scaled and used as a procedural texture primitive in other such generators (or mathematical expressions with other purposes). Without going into too much detail (there are a weath of articles already), the algorithm works as follows:

* Create a randomized permutation table for determining gradient vectors
* For each point/pixel
  1) Place the point in a unit square (or cube for 3D)
  1) Calculate the distance vectors to that point from each corner of the box
  1) Use the permutation table to hash a gradient vector for each corner
  1) Calculate the dot product of each gradient and distance vector pair
  1) Linearly interpolate between each of the computed dot products, using a fade function (easing curve) as the smoothing parameter


## Pink Noise (or Fractal Noise)
_Note: If you're coming from a deep internet dive on Perlin Noise, you probably came across "fractal noise". Fractal noise is another name for pink noise, the former of which is commonly used by the computer graphics crowd (most likely because several pieces of popular software have fractal noise tools)._

blah blah


## Simulating Obstacles


*References*
* https://en.wikipedia.org/wiki/Perlin_noise