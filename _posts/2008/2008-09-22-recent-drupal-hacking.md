--- 
layout: post
title: Recent Drupal hacking
tags: 
- projects
- hacking
- drupal
drupal_path: recent-drupal-hacking
drupal_nid: 611
created: 1222100104
---
Aside from the usual work-related stuff, I've been doing some serious Drupal tinkering over the past couple of weeks while getting the blog back online. (I know, I know -- startling!) A couple of the highlights include:

<strong>Porting a spiffy theme</strong>

I spotted a couple of high-quality Wordpress themes the other week, and decided to take a stab at porting them. Drupal 6's templating system does, indeed, make the task a lot easier. One of my favorites is the Scruffy theme, by the <a href="http://fresh01.co.za/2008/07/23/scruffy/">South African web designer Cobus Bester.</a>

[inline:scruffy.jpg]

I finished up the port over the weekend, and I'm pretty happy with the results. I've contacted him for permission to post it on Drupal.org, or to send him the source of the theme so he can offer it for download on his blog. Further updates when I get his reply.

<strong>Views Cloud</strong>

For those still using gopher, tag clouds are a way of presenting lists of links where the words are displayed larger or smaller depending on how many times they're used. Tag clouds have been popular (maybe cliche?) on Web 2.0 sites for a few years now, particularly when displaying free-tagging terms attached to blog posts.

I wrote a plugin for the Views module that allows any data to be displayed in CSS-styleable cloud form. Lists of authors can be sized according to how many posts they've made, links to monthly archive pages can be sized by how many posts are behind the link, and so on. It's really flexible, and I'm happy with the results.

[inline:author-activity.png]

Drupal's Tagadelic module has generated tag clouds for years, but this level of flexibility is new. I'm hoping that folks find it useful.

<strong>The mirror module!</strong>

Mirror module is a simple chunk of helper code that allows Drupal to grab remote images from sites like Amazon or Flickr, save them in the system's "files" table for safe keeping, and automatically refer to the locally cached version the next time the image is requested. Why bother? Remote images can vanish when network problems crop up, and locally stored images can be scaled, cropped, and manipulated using the ImageCache module. Mirror module is at the heart of the code snippet that auto-retrieves photos from my Flickr account, then crops them and puts them in this blog's header. 

Mirror module probably deserves its own post, so I'll be writing about it separately and posting the code when I get the chance. Since it's only 100 lines of PHP, I'm hesitant to spin up a dedicated project on Drupal.org for it.

<strong>Simple Views</strong>

This one is actually part of the work I'm doing for a Lullabot project, so it doesn't <em>technically</em> belong in this list. But I'm excited about it, and it's very near completion, so what the heck.

Simpleviews is a tool for generating Views with a simple set of choices. It's intended for new site administrators, or clients who might want to add some custom listing pages but aren't up to the full configuration dashboard that Views offers. it's mostly API at this point, but here's the in-progress mockup of the user interface...

[inline:simpleviews-mockup.png]
