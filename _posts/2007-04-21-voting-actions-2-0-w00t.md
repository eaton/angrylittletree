--- 
layout: post
title: Voting Actions 2.0 -- w00t
tags: 
- drupal
- votingapi
drupal_path: voting-actions-2-0-w00t
drupal_nid: 497
created: 1177161023
---
A bit over a year ago, I wrote a Drupal module called 'Voting Actions' for a client. It allowed modules that used VotingAPI for their rating/voting backend to kick off arbitrary actions whenever votes were cast and certain criteria were met. For example, if someone voted on a news story, and the average vote for that story was 75% or higher, it could be promoted to the front page.



The concept was pure gold, but unfortunately the module was relatively inflexible. Lots of people needed more flexible conditional criteria, and there were lingering bugs I never got around to fixing. I took a stab at rolling a more flexible version of the core functionality directly into VotingAPI, but didn't have time to polish that work up or complete a working UI for it.



Well, I've finally been able to revisit Voting Actions, and <a href="http://www.drupal.org/project/voting_actions">version 2.0b2 (for Drupal 5) is finally available</a>. If you're interested in testing it out, or taking a look, download it and install it on a sandbox site and see what you think.



It has a bunch of improvements over the old 4.7 version, including but not limited to:

<ol>

<li>Support for a much wider range of conditional checks. Does the author of the node have a particular permission? Is the node being voted on a story, or a page? Did ALL the voters give it at least two stars? Is the average vote at least three stars?</li>

<li>Modules can expose their own custom conditional checks to be used with Voting Actions. Does a node appear in a particular view? Is the word count of the node high enough? Was the vote cast on a Wednesday? Sure, that's cool.</li>

<li>Importing and exporting of defined action sets. Like Views module, Voting Actions lets you swap complex action sets by just exporting them as text. Wayyyyy simpler than describing each step when sharing a 'recipe' for a particular setup.</li>

<li>Modules can define their own action sets. The old version of Voting Actions forced site admins to manually set up every action set. Modules like Vote Up/Down, which provided Digg-like functionality, had no way of providing 'default' conditions and actions. Now, they can. Like views, they just need to implement hook_voting_actions_sets() and return an array structure like the one you get when exporting a manually-built set.</li>

<li>A UI that doesn't completely suck. The old Voting Actions was... passable. The new one? I'm actually proud of its editing screen, though it can still use some polishing.</li>

<li>More secret cool bits under the surface. Though the UI for it isn't yet exposed, the ability to have nested sub-sets of conditionals -- actual branching trees of conditions and actions to execute if they're true -- is all there. 

</ol>



I grabbed a quick screenshot of the user interface for the main Action Set editing screen, and hopefully it demonstrates how things have improved:



<img src="/files/Firefox002.png" />



For those interested in taking a quick peek at it in action, I recorded a super-off-the-cuff videocast on my testing site and posted it to google video. Embedded video after the cut.



<!--break-->

<embed style="width:400px; height:326px;" id="VideoPlayback" type="application/x-shockwave-flash" src="http://video.google.com/googleplayer.swf?docId=-2852461557256809891&hl=en" flashvars=""> </embed>
