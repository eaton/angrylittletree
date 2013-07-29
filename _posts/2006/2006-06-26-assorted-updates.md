--- 
layout: post
title: Assorted Updates
tags: 
- drupal
- blogging
- photography
drupal_path: assorted-updates
drupal_nid: 441
created: 1151302021
---
A hectic weekend with lots of scrambling, alas. At work, I've been trying to get a long-running series of strange build problems resolved. They seem to trace back to Visual Studio misplacing a few GUIDs during the creation of a project; for reasons unknown, it chose last week to start exploding and complaining about it. I spent several hours this weekend recreating half of our projects form scratch and test-building them one by one, in various combinations, to make sure that everything was working properly.



On the Drupal front, <a href="http://www.angrydonuts.com/views_very_close">Earl Miles checked in a huge number of patches</a> to the <a href="http://drupal.org/project/views">Views</a> project over the weekend. Lots of subtle but important features have been ironed out. For example, the way the module builds argument-based page titles and breadcrumbs has been vastly simplified. I chipped in this afternoon and whipped up a patch that added title-subtsitution in blocks, and the use of arbitrary wildcards in path-based args.



After looking over al of the changes and additions, I started getting the itch and remembered a few of the conversations Earl and I have had about how Views could be used to replace Drupal's current blog module. It can (easily) do all the work of building filtered lists and so on -- it's just a matter of wrapping it all up in a package that smooths the rough edges and does the configuration for users automatically. To that end, I've started tinkering on a new 'blogging' module for Drupal. Rather than providing a specific <i>content type</i> for blogging, it will use Views to create blogs as <i>collections</i> of arbitrary content. It will also leverage Views' existing features to make both single-user and group blogging cleaner. In addition, I'm aiming to enable more complex multi-blogging systems. Letting one users maintain two separate blogs on one site, each with a different emphasis, should be easy once the module's in place. It's geeky but terribly fun.



<img src="http://jeff.viapositiva.net/files/contented7_logo.png" align="left" hspace="5">And speaking of geeky, I changed the icon for my blog from the theme default to... An icon of Goldbug. Goldbug, of course, is the Transformer originally known as Bumblebee. Any fellow children of the eighties should hum the theme song at this point. <i>More than meets the eye,</i> and all that. Thanks.



Catherine and I finished off the weekend with a nice leisurely walk down to the river. When we first moved here, I was uncertain about the area. Catherine said she thought I would love it here, but I'm a creature of habit, and... well... it was new! But over the past almost-year I've grown to really enjoy the neighborhood we're in. My wife, she knows what she's talkin' about.



<img class="flickrsitckr_image" src="http://static.flickr.com/77/175007083_05de48e77c.jpg"/>
