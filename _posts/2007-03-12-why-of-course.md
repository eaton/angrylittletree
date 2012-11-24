--- 
layout: post
title: Why, of course...
tags: 
- drupal
- expose
drupal_path: why-of-course
drupal_nid: 488
created: 1173744478
---
Asking a craftsman what his tools are capable of can be a bit deceptive. The answer is likely to be very impressive -- and not terribly useful. Why? Oftentimes, the unspoken question is really "What can <i>I,</i> a relative newcomer, hope to accomplish with the set of tools that you are familiar with?" Unless you're willing to spent a large chunk of time becoming just as proficient with those tools, the answer to <i>that</i> question is often dramatically different.



When it comes to assessing the capabilities of a particular piece of software, this problem comes up quite a bit. A computer program, or a web app, or (deep breath, now) a CMS is rarely as straightforward as a hammer or a table saw or a chisel. So the insights of resident experts is often essential when evaluating the capabilities of a product. We've all met folks who make their favorite app jump up, roll over, make coffee, and cure cancer. But just because someone who spends 8 hours a day in MS Word can use it as a spreadsheet doesn't mean that it <i>should</i> be used that way. More importantly, it doesn't mean that <i>a person who doesn't spend 8 hours a day immersed in that app</i> would be comfortable doing the same thing.



I see this up close every day when working with Drupal. Don't get me wrong -- I <i>love</i> Drupal, and the folks I hang out with and work with can make it do some incredibly crazy things. Drupal's flexible APIs make this problem particularly seductive. In many web apps, adding major new functionality requires patching the core package, threatening forward compatibility. In Drupal, it's almost always possible to leverage intimate knowledge of the APIs to create a clean plugin module that alters the system's behavior. Matt Westgate of Lullabot once made a Drupal site that completely bypassed the entire 'node' system (one of Drupal's core conceptual building blocks, about as central as 'paragraphs' in a word processor). Steven Wittens recently spent a <i>long weekend</i> writing the Drupal-powered web app <a href="http://www.comicjuice.com">ComicJuice</a>. A long weekend. He came up with the idea, lost a night of sleep hacking, and finished it up within a few days.



Tools like CCK, Views, and Workflow make it possible for beginners to build really complex and powerful systems in a very short amount of time. There's no denying it. But once you wander off the beaten path of 'what another developer built a friendly UI for,' it will always stop being simple. For the hardcore devs who spend their time immersed in Drupal every day, that distinction is less visible. We're in there <i>building</i> those tools, and in most cases making them user friendly is actually more work. From that perspective, writing a quick hook_form_alter() implementation or whipping up a quick CCK formatter is 'totally simple.'



Is there an easy solution to this problem? I'm not sure, to be honest. It's certainly not Drupal specific. I've seen the same thing in other OSS communities (and obviously in proprietary software) where the 'checked off feature on the comparison table' doesn't necessarily mean that anyone without a PhD can actually USE a particular piece of functionality. It's possible to use Wordpress as a full-fledged content management system. It's possible to build a turn-based strategy game in Drupal. It's possible to run a community collaboration site with Movable Type, and a personal blog in Typo3. But just because the experts in those fields <i>can</i> do it doesn't mean that the newcomers can, too. And it definitely doesn't mean that the newcomers will be able to build those systems in ways that will scale well or grow in the future.



What's the solution to this problem? I'm not sure, to be honest. More self-awareness? Less defensiveness? A one-to-five level difficulty rating that we can assign to answers? Often, it's hard to judge how experienced someone is when asking a question.



Does anyone have any thoughts on this?
