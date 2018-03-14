---
title: "CUDA Laplace Filter"
date: 2018-03-11T21:38:40-04:00
draft: false
type: projects
project_date: 2016-11-14
---

A sample Morphological Laplacian operator ([Laplacian of Gaussian](https://en.wikipedia.org/wiki/Blob_detection#The_Laplacian_of_Gaussian)) applied to an image using CUDA and OpenCV.

It works by accepting a YUV420p image as input, converting it to RGB, forming a 1D Laplacian of Gaussian kernel, and then performing convolution of that kernel, and its transpose, over all three channels of the image. The results of the two different convolutions are added and the result is displayed.

Rather than looping over the channels of the image, all channels are considered side-by-side during convolution (actually, OpenCV stores the channels interlaced). This offers a considerable speedup.

Typically, with Gaussian kernels, you would perform convolution with a 2D kernel over an image by separating the 2D kernel into Nx1 and 1xN vectors (for separate horizontal and vertical passes). You can do this with any kernel which is separable. However, the Laplacian kernel is not separable and the convolution cannot be performed in this manner. Though you can effectively "separate" (it's not a real separation) the 2D kernel by adding the results of the convolution of the 1D kernel and its transpose. Adding these results is possible because the Laplacian kernel is a zero sum operator.

![original image](https://raw.githubusercontent.com/Seanmatthews/laplace_filter/master/tree.jpg)

![filtered image](https://raw.githubusercontent.com/Seanmatthews/laplace_filter/master/allChannels.jpg)

<br><br>
*ref: https://github.com/Seanmatthews/laplace_filter*
