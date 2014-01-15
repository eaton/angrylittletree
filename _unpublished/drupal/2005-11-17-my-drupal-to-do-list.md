--- 
layout: post
title: My Drupal To-Do List
tags: 
- Software Development
- drupal
- optimism
- projects
drupal_path: my-drupal-to-do-list
drupal_nid: 370
created: 1132209646
---
I've spent the last couple of months working seriously with Drupal, pushing through a few pet patches and trying to help out with others that came down the pipe. I'm already looking forward to 2006, though, and the projects I'd like to tackle. In no particular order, my list of Stuff I Want To Implement Or See Implemented In Drupal.

<h3>Generalized voting infrastructure</h3>

I've already put <a href="http://cvs.drupal.org/viewcvs/drupal/contributions/modules/votingapi/">a bit of work into this</a>, but I'm hoping to hammer out ideas <a href="http://drupal.org/node/33629">with the developers of other node voting modules before moving much more</a>. There seems to be consensus around the idea that we need flexible multicriteria voting, but I'm trying to figure out what the data footprint would be in a system with lots of nodes, lots of votes, and multiple modules all trying to implement different kinds of voting data in the same tablespace. Perhaps the answer is that it's impossible -- like the node security system currently in place, only ONE voting implementation could be active at a given time.

<h3>Reading List module</h3>

This one would let every user on a Drupal site maintain a list of Amazon ASINs in various states: Want, Waiting To Read, Reading, Finished, Discarded. They'd be able to keep notes on their thoughts on the book in its current state ("Really looking forward to starting this one, as I've enjoyed previous books by the author..." and so on) or create a full Amazon node as a review upon completion. User-specific or site-wide reading lists, and "currently reading" sidebar blocks, would be easy to generate from this data. It's a must-have for quite a few bloggers. The excellent <a href="http://drupal.org/node/18842">Amazon Tools module</a> already handles a lot of the backend work for this.

<h3>Relationship management system</h3>

Druapl's built-in taxonomy system handles classification of information pretty well, but it manages <i>implicit</i> relationships between pieces of content, not <i>explicit</i> ones, and that's  very important distinction. Image.module's gallery functions and the inherent limitations of Forum.module demonstrate the drawbacks, I think. It's a testament to Taxonomy's strengths that it can be made to do those things, but solid relationship management infrastructure would be much, much better. I don't think I'm the person to design this system (OK, I KNOW I'm not), so it's exciting to see <a href="http://drupal.org/node/37556">other smarter people tackling the problem.</a>

<h3>Sparklines Filter</h3>

<a href="http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001Eb&topic_id=1">Sparklines</a> are a cool concept in data presentation. They imbed a tiny, tiny micro-graph of  small data set right in the text that you're writing. The idea is to take a small set of points and (United States yearly unemployment over the past decade, for example, is just 10 numbers) and turn the set into an instantly grokable icon. Ideally, they should be no taller than the line of text in which they're imbedded. There's already <a href="http://sparkline.org/">a PHP library</a> for generating them, and <a href="http://drupal.org/node/30027">someone discussed the possbility of Druapl integration</a> months ago. Clean syntax for generating and imbedding a Sparkline is the real need -- perhaps something like [barchart:1.3,2.1,3,1.9] for a simple example? I don't know. There's enough flexibility in the Sparklines library that exposing all the options could result in option overload.

<h3>Comic.module rewrite</h3>

Ah, Comic.module. The first project I really tackled for Drupal. The idea was great -- create a module for posting and navigating strips in a webcomic. The implementation, sadly, was lacking. I broke more coding conventions than I followed and never implemented the features I really wanted: clean organization of issues, storylines, and so on. Once a generalized relationship API solidifies, I'd like to use it as the basis of Comic Module 2.0. Support for multiple comic strips per drupal site would be a nice bonus.

<h3>Node-based comments</h3>

This one's controversial in the Drupal community, mostly because comments have been around in their current form for quite a while. Changing the system raises important questions about performance and compatability. I think the benefits of a well-implemented shift would be considerable, though. All features available to nodes -- revisions, file attachments, path aliasing, etc -- would be immediately available. It'd be a huge project, but it's soooooo tempting.

<h3>Microfiction.module rewrite</h3>

Eons ago, when I started http://www.ferretshock.com, I ran a weekly microfiction contest. All entries had to be exactly 100 words long. Unfortunately, that meant people had to hand-count their entries before posting them on a PHPBB message board. When I started reimplimenting things in Drupal recently, I decided to add that validation automatically. This, of course, led to the realization that no hooks existed in comment.module for validation. Which led to my pushing <a href="http://drupal.org/node/28255">a core patch</a>. Which led to my getting involved in the first wave of the great FormAPI migration. Years from now, old men will sings songs of <i>that</i> adventure. Anyhow. 

The new version of Microfiction would be generalized as a 'contest' module, with optional rules for each type of contest. Photo contests would require an image file attachment. Writing contests would have variable wordcount requirements. Caption-the-photo contests would hide only allow a single line of text to be entered. And so on. A ratings system and 'winner hilighting' would be built in.

<h3>Timeline.module</h3>

This one's a bit of a holy grail. Way back in the day, I set up http://www.havana-mod.com as a place to organize thoughts on the graphic novel and RPG setting I was trying to assemble. What I really needed was a soup of interconnected data -- a Who's Who list, an encyclopedia, and a timeline combined into a big soup of data. I have some ideas about how this would be implemented, but it too relies on the generalized relationship module that I mentioned above.

<h3>Holy Cow, That's A Long List</h3>

Yikes. it's a little unsettling looking at how much work is involved in those ideas. Still, it's a gameplan for my personal hacking in 2006... hopefully I'll be able to accomplish some of it.
