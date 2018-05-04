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
Hugo is great, and here's why. Create a directory somewhere, change into that directory, and then run `hugo new site . `. That directory now contains the entire infrastruture for your static website, which we only need fill in. The hugo website provides some [quick start instructions](https://gohugo.io/getting-started/quick-start/) for loading themes and adding content. Check it out for a quick overview on adding content and running a debug server, but it's safe to ignore everything theme-related.

The part of hugo's architecture that most confused me is how the layout subdirectory works for slightly-less-than-simple cases. Hugo maintains the general idea that pages must be either single entities (a page dedicated to a single piece of content) or list entities (a page dedicated to a list of entities). Different levels of default to directory-specific single or list layout definitions dictate the visible page layout. With this in mind, there exist a slew of [precendence rules](https://gohugo.io/templates/lookup-order/) for which of the defined layouts the server uses. Let's go through the layout for my site.

First, inside `/layout`, I have a `/_default` directory that houses the default sitewide templates. All I put in here is [`baseof.html`](https://github.com/Seanmatthews/seanmatthe.ws/blob/master/layouts/_default/baseof.html). It acts as the html base of every page on my entire site (unless overridden by a more specific `baseof.html`, which I don't do). You can see that it simply fills in the common header, body, and footer elements while leaving hooks for the more specific contents of those sections. Notice in the template the phrase `{{ block "main" . }}`. As you'll see, pages that wish to use the template will _define_ a main block in their layout html.

Next, inside `/layout`, I have a `/partials` directory that houses html bits. In my case, the one relevant bit is [`nav.html`](https://github.com/Seanmatthews/seanmatthe.ws/blob/master/layouts/partials/nav.html), the navigation links plugged into `index.html`. My use of this partial doesn't add any real value to my setup, but you can imagine it would be useful for placing the same navigation links on different locations of different pages.



## Deploy server


## Attach domain name


## Setup site deploy script


## Secure your site


_References:_
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04