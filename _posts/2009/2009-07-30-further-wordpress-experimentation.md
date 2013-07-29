--- 
layout: post
title: Further WordPress experimentation
tags: 
- wordpress
- geekery
drupal_path: further-wordpress-experimentation
drupal_nid: 1999
created: 1248967453
---
Internet-centuries ago I said that I would be migrating my blog to Wordpress. Coincidentally (cough cough) I wrote the post on April 1st; the result was a great deal of laughter and elbowing about the good joke.



I actually was serious at the time, though -- <em>time</em> being the operative word. For better or worse, personal blogging isn't really the best match for Drupal's flexibility. And the streamlined administration UI that Wordpress brings to the table is tweaked and polished specifically for blogging. Drupal's, in contrast, is a one-size-fits-all CMS backend that often requires customization when it's deployed for clients.



I, of course, am just me -- not a client. And taking the time to refine and tweak the administrative tools that Drupal brings to the table, just so posting on my blog feels a bit smoother, is a tough thing to justify when I'm already swimming in hobbies and side projects. I've worked with Wordpress in the past and -- from an end user's perspective -- I'm impressed. One of my short-lived sideblogs, <a href="http://processliberation.org/">The Process Liberation Front</a>, took 15 minutes to set up and works (worked?) nicely.



I've continued tinkering with Wordpress since then, porting my wife's blog <a href="http://restlessviolet.com">Restless Violet</a> to it, customizing a nice theme, installing extensions, and so on. I'm simultaneously pleasantly surprised by the smooth experience and absolutely <em>horrified</em> at the quality of the code and architecture. Wordpress is big on 'throw some PHP scripts at the problem and hope for the best,' and in areas where Drupal has evolved more robust (albeit more complex) solutions, it's like going from a BMW to a scooter. The number of popular, highly-rated plugins I installed that instructed me to go in and hack core Wordpress files <em>frightened</em> me, and themes do the bulk of the real work on the site.



Inspecting the source for one of the admin pages, I found PHP and HTML jumbled together and hundreds of lines of switch statements wrapped around raw $_POST data. Standard practice for oldschool PHP scripts, sure. But coming from a Drupal background it was like asking your doctor for a prescription and getting a bottle full of leeches. Later, I was horrified to find a page where I could edit the raw PHP code of arbitrary theme files. I'd locked permissions on my server down, though, so it didn't work -- the admin page helpfully suggested that I make the directory world-writable. In Drupal, that kind of trick is considered slightly less safe than juggling chainsaws while shooting heroin into your eyes.



That said, <em>I was able to roll out a tweaked, customized theme and a new blog in a couple of evenings.</em> The experience reminded me a lot of the old days of throwing together scripts and tinkering with a hand-rolled site or a message board. It's terrifying from a process and long term maintenance standpoint, but, you know... does every site I throw together really need its own source control repository, deploy scripts, and a rigorous separation between logic and presentation?



More recently I've been working with Wordpress MU, the multi-user version of Wordpress that allows a single, central site to spin off smaller blogs for each user who registers. It's an interesting model, and in theory it could be used to build something like Wordpress.com, where users arrive at the site, create their account, and start blogging in their own private workspace. In Drupal terms, it's a bit like Adrian's <a href="http://groups.drupal.org/aegir-hosting-system">Ægir</a> project: from a central site you can create new sites. It falls down in a lot of other areas, though: all sites are jammed into a single central database, there's no way to allow <em>only a few</em> sites access to certain themes or plugins, and many plugins encounter oddball problems in the 'MU' environment even though they work fine on a single-user copy of Wordpress. In addition, the hack-some-PHP-to-customize-your-site ethic that rules in the WP community breaks down on a multi-user installation: if you hack the PHP code, you're hacking it for <em>all of the sites,</em> not just one.



Those complaints aside, I'm liking it. It lets me spin up a new blog, invite a couple of co-contributors, and let the thing run with minimal fuss. For some of my quick one-off sites, that's all I need -- maybe even more than I need.



So where does that leave <em>this</em> blog? That's complicated. Over time, I've realized that what exists here is not really <em>blogging</em> so much as aggregation. Between Twitter, Delicious, old archives of past sites, and so on, this site is more "Jeff Portal" than "Jeff Blog," and my ideas for it take it even further. I'd like to stop writing book reviews here and post them on GoodReads, where many of my bookish buddies hang out. I'd like to pull in my Last.FM tracks as a playlist, turn the "Links Sideblog" into something more permanent, and pull in posts I write in other places around the net, like the Lullabot.com site.



While I like Wordpress <em>for the blogging</em>, doing that kind of stuff in it is about as complicated as setting up all the necessary custom modules in Drupal. over the long term, I think I may be migrating my actual <em>writing</em> to Wordpress, but continuing to work with Drupal as a way to pull together lots of disparate content feeds. The quest for a perfect nerd-site continues, I suppose...
