--- 
layout: post
title: Rasmus is a scary man
tags: 
- drupal
- security
- oscms2007
drupal_path: rasmus-is-a-scary-man
drupal_nid: 492
created: 1174581075
---
Rasmus is explaining how someone made a javascript trojan horse for  webmail services that is capable of compromising your home firewall and turn your computer into a zombie. By reading email. It's been closed by Yahoo Mail, but I think I just heard everyone in the room gasp and shudder.

Rasmus' summary: "What this means is that you should never, ever click on a link."

Everyone laughed, but it was a nervous laugh.

He's going on to explain the essential nature of <i>checking user input before you display it</i>. The Drupal community has internalized the importance of that kind of filtering for a while, but there's still a large pool of folks that aren't familiar with the 'why' behind a lot of Drupal's more restrictive output management. It's good to see a speaker instilling some serious fear around the whole "Just whip out some code that does X..." approach.

Rasmus: "We should try to build software that, when it's badly configured, fails rather than exposing important information."

After explaining the huge frightening array of secholes that can be exploited, he popped up a "CMS Report Card" on all the CMS packages that are represented at the summit. Every single project had some sort of security hole. Drupal's was a bit esoteric, requiring Flash 8 and a copy of Internet Explorer.

Rasmus: "It's really hard to find a commercial CMS vendor whose site actually uses their product."

Interesting random bits: a bug in Flash 8, combined with IE, allows a flash author to inject arbitrary stuff into the HTTP header -- which doesn't <i>seem</i> like a problem, but the headers are often implicitly trusted, used for retrieving cookies, and even mapping requests to virtualhosts. What does that mean? An attacker, with a malicious Flash file, can grab arbitrary cookies, jump over to other virtualhosts on the same machine, etc.

Acrobat also has similar holes -- I didn't realize that Yahoo had <i>ripped out pdfs from their site entirely</i> in order to avoid that sechole.

Rasmus: "When I'm surfing around to find hackable sites, I love to find hand-rolled CMS systems. I know I can hack them in a heartbeat. If I see a site is running on Drupal, or Joomla!, or another CMS? I know there may be a hole, but as soon as they fix that hole, everyone using them is safe."

The lesson? Don't write your own CMS. You have better things to do with your life.
