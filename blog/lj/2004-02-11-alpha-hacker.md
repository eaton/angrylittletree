--- 
layout: post
lj_post: TRUE
title: Alpha Hacker
tags: []

drupal_path: alpha-hacker
drupal_nid: 1773
created: 1076512740
---
In other news, the big stress-point this week has been work. For the past couple of months, we've been putting the final touches on software that will handle product and price management for hundreds of grocery stores on the east coast. It's a big deal, with a lot on the line and a Large Company taking a risk on The New Guys (read, us).

The final step in the project has been writing the utilities that integrate our products with their existing infrastructure. Grocery store Point of Sale systems and cash registers, shelf label printing systems, and so on. That's been a hurculean task, a kind of work I've never done before. One utility, for example, takes all the price changes made during a given week and generates a 50 megabyte text file for use in their label printing warehouse. You know those little tags on the store shelves that say, "Only $1.59 Through Saturday! 10% off with a Frequent Shopper Card?" My program makes those puppies. 200,000 of them each week, in fact. It's been both challenging and rewarding and insomnia-inducing, and this week we were putting the final build in their hands after weeks of testing, on their side and ours.

Monday afternoon at 4:00, we were informed that, oh, by the way, those automated utilities need to be <i>ten times faster</i> or the software will be unusable.

Um.

Admittedly, the interface software is slow -- on an average run, processing the aforementioned 200,000 labels took upwards of 10 hours. There's room for improvement. But with only <i>hours</i> to spare before we were expecting to roll out the final version, we were left slack-jawed. Would've been nice to know a few weeks ago, eh?

No matter. Nothing's more exciting to me than a completely impossible challenge -- after a few minutes of shellshock, <a href="http://blaster151.livejournal.com">blaster151</a> and I dove in and started hunting for areas to be optimized. I googled for a few minutes, hunting for a tool to help the process, and found <a href="http://www.compuware.com/products/devpartner/profiler/" target="_blank">DevPartner Profiler</a>, a <i>free</i> utility that integrates with Visual Studio and adds all sorts of useful profiling tools to spot performance traps  in your code. 48 hours later, I <i>cannot</i> say enough good things about this product. Using it, <a href="http://blaster151.livejournal.com">blaster151</a> and I shaved no less than 65% off the execution times of the apps, fixing inefficiencies that had been present for over a year in our core code. In some cases, code that took almost a day to run is now doing its processing in two hours. Our entire suite of products -- not just the slow utilities in question -- now runs faster and The Day Has Been Saved.

I feel unspeakably badass at the moment, like Neo after dodging lots and lots of bullets.

Bring it <i>on,</i> baby.
