---
title: "Website"
date: 2018-03-11T22:49:40-04:00
draft: false
type: articles
---

This website is auto-generated and statically-served, on a Digital Ocean droplet, using
the Hugo website generator in conjunction with a GitHub webhook and a simple PHP script.
In this article, I'll describe every step toward duplicating my setup. Consider, however,
that this guide was created on {{ .Date }}, and that it may be outdated by now. Also,
consider the versions of all components:

  * hugo 0.37
  * nginx 1.10.3
  * DigitalOcean Ubuntu 16.04 1vcpu-1gb
  * PHP 7.0.25

### A quick note on web development & its tools
I have only ever done as much web development as was necessary to achieve my other technical goals. I'm not particularly fond of webdev or devops, and one of my top reasons for that preference is the frequent waxing and waning popularities of almost every tool, framework, and standard. Let me also admit that I started creating the backend for this site 1.5 years before I finished it. This afforded me a unique view of how the tools I initially chose stood the test of time. [Caddy](https://caddyserver.com/), which I used previously, went from open source to a pay model, angering the collective webdev community. [Hugo](https://gohugo.io/), on the other hand, has made many improving revisions to their free, open source software. Digital Ocean now offers better machines at the same price. Nginx is... well, [Nginx](https://nginx.org/en/).This gives me additional confidence that this guide might last slightly longer than usual.

{{< figure src="https://imgs.xkcd.com/comics/standards.png" >}}

## Create your site, locally


## Deploy server


## Attach domain name


## Setup site deploy script


## Secure your site


_References:_
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04