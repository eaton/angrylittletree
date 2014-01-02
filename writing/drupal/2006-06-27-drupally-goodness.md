--- 
layout: post
title: Drupally goodness
tags: 
- drupal
- votingapi
- sparklines
drupal_path: drupally-goodness
drupal_nid: 443
created: 1151423264
---
Quite a while ago I posted a <a href="http://jeff.viapositiva.net/archives/2005/11/my_drupal_to_do.html">To-Do List</a> of my Drupal ideas for 2006. The biggest one -- an abstracted Voting API -- is in place. There are a number of modules built on top of it already, including one that I'm just finishing up for <a href="http://www.lullabot.com">Lullabot.</a> Rather than rating nodes or comments, it lets users vote on what taxonomy terms they love or hate. At present, it only uses the information to build lists of popular terms and user '<a href="http://drupal.org/project/lovehate">loves and hates.</a>' <strike>The same data could be used to rank nodes, though, baesd on how interested users are in its taxonomy terms. Further updates as events warrant.</strike> The latest version can also score each node based on the popularity of its taxonomy terms. Hooray!

One of the other ideas I kicked around was a module to generate <a href="http://www.sparkline.org">sparklines,</a> small invormation-rich icons for use in text. (This, for example: [sparkline style=bar 116,104,96,109,107,118,167,106,107,77,71,66,91,55,102,82,64,91,98]  is a sparkline representing the ebb and flow of incoming traffic to various blog posts on my site over time.)

There's already an excellent PHP library available for it, this was just a matter of wrapping it in a Drupal module. After a little tinkering, a very early version is working and has been checked into <a href="http://cvs.drupal.org/viewcvs/drupal/contributions/sandbox/eaton/modules/sparklines/">my sandbox</a>. It's still got quirks (the regex needs serious help), but I've scratched my own itch, and chrisxj from #drupal is interested in grabbing the code and <a href="http://drupal.org/project/sparkline">enhancing it</a>. Hooray for open source!
