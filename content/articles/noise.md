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

<br>
{{< highlight cpp >}}
{{< / highlight >}}
<br>

## Pink Noise (or Fractal Noise)
_Note: If you're coming from a deep internet dive on Perlin Noise, you probably came across "fractal noise". Fractal noise is another name for pink noise, the former of which is commonly used by the computer graphics crowd (most likely because several pieces of popular software have fractal noise tools)._

Pink noise is a signal or process with a frequency spectrum such that the power spectral density is inversely proportional to the frequency of the signal. As with Perlin noise, there exist a number of articles on pink noise, and in the spirit of brevity, the important takeaway for my purpose is that pink noise Beyond the perception of pink noise happens to represent statistical fluctuations in a vastly diverse number of physical and biological systems. It often describes patterns in human speech loudness fluctuations, tidal wave heights, heart beat rhythms, neural activity, statistics of DNA sequences, mental states, and so much more!


Once we're capable of generating Perlin noise, creating pink noise is a simple matter of rescaling that Perlin noise and adding it to itself.

<br>
{{< highlight cpp >}}
{{< / highlight >}}
<br>

## Simulating Obstacles With Noise
The task of creating noise for testing path planning algorithms is the same as the task of creating terrain for lifelike CGI. Much research has been dedicated to noise generation for the purposes of the latter. With this article, I don't present anything here that's.. groundbreaking ..but rather I offer you some of the easily-implementable bases of noise generation for creating naturally distributed obstacles across either 2D or 3D terrains for the purpose of testing your own path planning algorithms. As a generalized pattern generator, we can rely on pink noise, or Perlin noise, to create 2D or 3D terrain with an occurence of structure and obstacles very much like what we'd come across on the ocean floor, for example.

While pink noise is supposedly more representative of natural processes, Perlin noise might be good enough for your purposes. See examples of each in both 2D and 3D for your own comparison:






*References*
* [Perlin Noise](https://en.wikipedia.org/wiki/Perlin_noise)
* [Pink Noise](https://en.wikipedia.org/wiki/Pink_noise)
* [Noise Functions and Map Generation](https://www.redblobgames.com/articles/noise/introduction.html)