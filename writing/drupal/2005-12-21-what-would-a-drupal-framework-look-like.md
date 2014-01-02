--- 
layout: post
title: What would a Drupal Framework look like?
tags: 
- drupal
- predictions
- cms
drupal_path: what-would-a-drupal-framework-look-like
drupal_nid: 388
created: 1135228764
---
Over the last year or so Drupal has gone through some growing pains. As more new users have poked their heads into the Drupal-tent to check things out, the long-simmering conflict between 'Drupal as a very customizable CMS' and 'Drupal as a framework for web-CMS developers' has become more apparent.

Developers are frustrated by the addition of features to Drupal Core that only appeal to end-users, and 'bloat' the underlying engine. Site admins looking for a tool to run, say, a forum, are frustrated by the emphasis on APIs and hooks rather than actual solutions in Core.

Ber Kessels is one of the 'inner circle' of Drupal developers by virtue of his contributions to the system and the level of activity and involvement in the system's ongoing development. He's recently <a href="http://www.webschuur.com/node/381">started blogging</a> about his experiences <a href="http://www.webschuur.com/node/382">tinkering with Ruby On Rails</a>, and what Drupal could look like if it transformed into a similar developer-oriented framework. Obviously, the 'core' Drupal build would stop being useful for Joe Schmoe looking to set up a web site. Instead, he'd use task-specific Drupal distribution that rolls together Core, appropriate contrib modules, themes, and whatever glue is necessary to make them work nicely together.

If that approach were taken, what should be part of the Drupal Core? Here's my stab at a list.

block.module

filter.module

node.module

page.module

path.module

search.module

statistics.module

system.module

taxonomy.module

user.module

These modules are a rough approxomation of what Drupal Core has enabled when freshly installed. Modules that cater only to multi-user community sites (blog.module, tracker.module, forum.module, and so on), and modules that cater to bloggy conventions (comment.module ping.module, and archive.module) have also gone poof. Throttle.module? Better to put it in a collection of modules and tools for high-traffic sites. Aggregator module? It's cool, but core doesn't need it. Same with Blogapi, Book.module, and so on. Page.module stays because (I suppose) it would be nice to have SOME default node-type, and the standard 'page' concept is pretty universal. It might be tossed, though.

Themes? Bluemarine, with its CSS file stripped down to remove the reams and reams of cruft necessary to support all the older core modules. Other modules would be responsible for including their own CSS, rather than depending on core. For developers, it might make sense to bundle dba.module and devel.module with the core distribution. Those are already must-haves for anyone working on the development side of a Drupal site, though most application-specific distributions wouldn't include them.

What's the end result? A relatively vanilla-looking web site engine with a lot of APIs and not a lot of UI. In my next post, I'll toss around ideas on how the rest of the modules currently in core would find a home, and what third-party contrib modules would complement them in various application-specific Drupal Distributions.
