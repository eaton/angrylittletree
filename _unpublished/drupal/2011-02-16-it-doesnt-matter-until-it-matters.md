--- 
layout: post
title: It doesn't matter until it matters
drupal_path: 11/02/it-doesnt-matter-until-it-matters
drupal_nid: 7
created: 1297890311
---
<a href="http://arstechnica.com/tech-policy/news/2011/02/anonymous-speaks-the-inside-story-of-the-hbgary-hack.ars">This Ars Technica dissection of the Anonymous hack</a> on HGBary is an excellent overview of how really serious exploits happen. Any one of the security holes that the company had would have been bad, but I'd argue that almost every company has them floating around in unrealized corners. It's ridiculously hard to completely avoid all security holes, and for most companies it's just not worth it. You put walls between critical systems and you ensure that your relatively unimportant systems don't have easy entrances into the more important ones.

The real problem was the multi-factor cascade of failures, some technical others human. A SQL injection exposed weak password hashing, which revealed a weak password, which had been foolishly re-used by a user, whose account was used to convince a sysadmin to do something he shouldn't have, which was used to open up another security hole, which the sysadmin noticed but didn't crack down on as quickly as he should have, which...

The problem is that computer security, like physical security, is about obsessively following best practices and tightening down every bolt and screw, even if it makes your daily work really frustrating and cumbersome.

Solid security is hard. Not because it is rocket science, but because it is about constant annoying vigilance against small violations of protocol, few of which ever really matter.

Except when they do.

And then you're fucked.
