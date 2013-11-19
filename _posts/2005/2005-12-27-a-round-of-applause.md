--- 
layout: post
title: A round of applause
tags: 
- Geekery
- drupal
- kudos
drupal_path: a-round-of-applause
drupal_nid: 391
created: 1135749278
---
Over the last couple of weeks, I've noticed that merlinofchaos' work on key Drupal modules has cut <i>weeks</i> of development time off of a couple projects I'm working on. Three of them in particular -- <a href="http://drupal.org/node/35094">dashboard</a>, <a href="http://drupal.org/node/38878">views</a>, and <a href="http://drupal.org/node/38678">node queue</a> -- solve problems that almost every Drupal site encounters. Dashboard is a quick bit of work that simplifies the common 'header, two columns, footer' page template and allows dynamic content to be piped into each section. While the same effect can be achieved with custom PHP pages, Dashboard makes managing it cake for newer users. Views is a mind-bogglingly flexible API for generating, filtering, and displaying dynamic lists of site content. Filled with hooks for other modules to exploit, it makes slicing and dicing the contents of a huge information soup really, really easy. Node Queue handles the management interface for rolling lists of content -- a submission queue, a 'weekly new content' backlog, and so on. Again, it's full of hooks for other modules to exploit and doesn't go too far, avoiding the sin of reimplementing other mature modules.

These modules are huge. None of them are flashy features, none of them are obvious to end users, but all of them give a huge boost to those trying to develop real CMS solutions. If you work with Drupal for anything more complex than a personal blog, check them out. You really won't regret them.
