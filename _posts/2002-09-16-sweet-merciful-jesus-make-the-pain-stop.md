--- 
layout: post
lj_post: TRUE
title: Sweet Merciful Jesus, Make The Pain Stop
tags: []

drupal_path: sweet-merciful-jesus-make-the-pain-stop
drupal_nid: 1010
created: 1032180300
---
OK, it's not quite that bad, but converting a networked IO function to a threaded helper class is downright PAINFUL. Ow, ow, ow, ow. Trying to pare it down to see what can go in the single-thread loop and what can be shudffled off to the helper threads... trying to keep things as simple as possible but still realize the performance benefits...

I've never worked with threading before, and all this concurrency stuff is freaking me out. What if both threads try to modify the results array? They SHOULD play nicely together, since they all know the box they're allowed to modify, but the whole system seems like a one way trip to troubleshooting hell...
