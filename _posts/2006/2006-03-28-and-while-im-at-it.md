--- 
layout: post
title: ...And while I'm at it
tags: 
- Software Development
- drupal
- coding
- quixotic
drupal_path: and-while-im-at-it
drupal_nid: 423
created: 1143601834
---
One of the topics that comes up occasionally on Drupal.org is the idea of <i>comments as nodes</i>. For those who haven't dug into the system's innards, almost all content on a Drupal site is stored as a 'node.' Different kinds of nodes (images, quotations, blog entries, weblinks, etc.) can have additional data fields and different presentaiton, but they all get to leverage the same core infrastructure of the node api. Comments, on the other hand, are a special kind of content that sits in its own separate table. Adding features to the commenting system is, by nature, a lot more difficult and only really possible with Drupal 4.7's enhanced form building API.

A good case can be made for keeping comments separate. On sites with huge numbers of comments, it speeds up queries for the code nodes table. It's also relatively join-friendly, as making comments into a type of node would still require an auxiliary 'comment_data' table, or somesuch. On really high-traffic sites, that's a pain and a half: pulling data from the node table and joining to it is already one of the things Drupal does most often, and anything that slows it down unecessarily is <i>bad</i>.

That said, though, I think that it could still be a noble goal. Certain core functions (say, file attachments, saving edits in revisions, and so on) would come 'for free' if nodes were used for commenting. Three specific cases come to mind where wthis would be useful. The first is the 'microfiction' content type I created a while back for Drupal 4.6. The name was a misnomer -- in reality it was a microfiction <i>contest</i> -- the comments on the node were the actual stories. I would've much rather seen each response be treated as an actual node. Another is Something Awful style photoshop contests. Instead of simply posting images inline in comments, each comment could be an actual image node -- automatically added to the appropriate gallery. And finally, the forum module that works well but gets so many complaints. With comments as nodes, the ability to split a discussion thread -- taking one comment and its children and promoting it to a full-fledged new topic -- would be rather more straightforward. Promoting great comments to the front page -- just as one would a node -- would also be simple.

If the system were flexible enough to utilize <i>different kinds</i> of nodes as comments, things like photoshop image contests, audio remixing contests, etc would all be much easier. In addition to turning comments on or off for a given node type, one could choose between the 'default' comment type, images, audio, etc. A while back, javanaut's interesting relativity module supported something kind of like that. Administrators could configure parent/child relationships between different kinds of nodes, even enforcing cardinality in some cases. That might be going a bit far, but it would be cool -- very cool -- to support that sort of relationship in commenting.

Naturally, ideas like this get little interest with Drupal 4.7's release around the corner and much bug-hunting still going on. But the groundwork that 4.7 lays make this feature a lot more feasible. The Forms API makes 'remixing' content creation forms a piece of cake, for example. The more I think about it, the higher this rises on my list of personal projects for 2006.
