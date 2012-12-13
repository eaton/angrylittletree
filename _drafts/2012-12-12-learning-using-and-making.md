---
layout: post
summary: Thoughts on the differences between tool-learners and tool-users, and the difficulty of discovering real users' needs. 
title: Learning, Using, and Making
---

Over the past several years I've been watching the Drupal community bootstrap a UX culture. Outside experts have arrived and become a part of the circle of trust, home-grown specialists have emerged and grown into leadership roles, and the broader developer community has learned to respect the UX team's insights in a way that seemed unlikely back in '07 or '08. It's been really exciting to see this take shape, especially for a scrappy open source project that started as a dorm-room experiment and rose to prominence *despite* its notoriously complicated interface.

Live usability testing ([first started back in 2008](http://drupal.org/node/204667)) was one of the practices that helped the  Drupal developer community swallow the difficult pill of UX feedback. After years of "scratch your own itch" prioritization and "if you don't like it, go write a patch" responses to complaints about user interface issues, watching 30 minute videos of people struggling with basic navigation and site-building tasks was a real eye opener. In the years that followed, that test and a number of others helped identify tons of low hanging fruit that hardcore Drupal users and developers had been blind to, thanks to their familiarity with the software.


## If only it were that easy
One of the subtle challenges that's emerged, though, is the difficulty of separating problems *learning* a complex system like Drupal from problems *using it regularly.* Presenting Drupal configuration and management tasks to a new user -- someone who's never used it before but has some basic familiarity with other CMSs -- tells us a lot about how easy Drupal is to discover and learn. Figuring out how to streamline and simplify construction and administration tasks for users who know what they're doing but still find it frustrating and cumbersome? That's another challenge entirely.

This kind of challenge is all over the place in UX work. Microsoft's love affair with Wizards, for example, angered many experienced users. *[Designing Interfaces](http://designinginterfaces.com/patterns/wizard/)* by Jenifer Tidwell nails the problem:

> Expert users often find wizards frustratingly rigid and limiting. This is particularly true for software that supports creative processes such as writing, art, or coding. It’s also true for users who actually do want to learn the software; wizards don’t show users what their actions really do, or what application state gets changed as choices are made. That can be infuriating to some people. Know your users well!

The challenge, of course, is figuring out how to recognize which kind of user you're dealing with, and figuring out where the boundaries between them are. Over on Twitter, [@transition](https://twitter.com/Transition/status/278286072599957504) mentioned that he'd been pondering similar issues, mentioning the [Dreyfus model of skill acquisition,](http://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition).

What's interesting is that the Dreyfus model doesn't *just* collapse learning into expert and novice -- it breaks out multiple levels of mastery, each with different needs. In updated versions of the Dreyfus model, there's even an 'Innovation' level for the users who understand something so deeply they explore new ways to approach it. File that thought away for later, because it's important.

## The productization of Drupal
For many years, optimizing tasks important to experienced site builders and maintainers was straightforward. Many of them were the very same open source developers who were building Drupal itself, and when they ran into frustrations they griped, wrote patches, released modules to fill the gaps, and generally made their voices known. For the "expert Drupal builder," problems tended to solve themselves.

The days when almost all site builders and maintainers were also active developers is over, however. Over time, tools like CCK, Views, Panels, and Rules have replaced more and more custom development work in the Drupal world. Project lead Dries Buytaert was telling the community as early as 2007 that he wanted Drupal to "eliminate the web developer," just as the old-school webmaster had been eliminated by better tools. In his keynote session at the 2012 DrupalCamp Toronto, James Walkah [talked about his early history with the project and how significant that shift has been.](http://2012.drupalcamptoronto.org/keynote-james-walker)

Sometimes that quest has paid off, sometimes it's resulted in frustration, but it's undeniable that pushing deep customization features downstream to non-coders has been a huge part of Drupal's rapid growth. However, it *has* accelerated the separation between the developers who create Drupal itself, and the "expert users" who build and administer Drupal sites regularly. Drupal *programming* community have become tool-makers for the Drupal *configuration and administration* community.

## Back to the innovation
This brings us back to the danger of extrapolating lessons from one type of user (say, newbs learning a system) to another type (say, experienced users who've internalized a system's workflow). In the olden days, the high overlap between the development and site-building communities meant that some of the problems took care of themselves. Now, however, we're tool-makers and we need to *work* to discover the needs of those experienced tool-users.

This kind of problem is discussed extensively in Eric von Hippel's fantastic 2005 book, *[Democratizing Innovation](http://web.mit.edu/evhippel/www/democ.htm)*. (Remember that bit about 'innovation' in the Dreyfus model? In te comdey business, this is what's known as a *callback*.) In his book, Eric talks about the rich history of user-generated innovation in manufacturing processes, sporting equipment, open source software, and so on. He also articulates one of the fundamental challenges when the *producers* of a product are distant from its *users*.

> An exploration of the basic processes of product and service development show that users and manufacturers tend to develop different *types* of innovations. This is due in part to information asymmetries: users and manufacturers tend to know different things… Bringing these two types of information together is not easy. Both need information and solution information are often very “sticky…” As a result, users generally have a more accurate and more detailed model of their needs than manufacturers have, while manufacturers have a better model of the solution approach in which they specialize than the user has.
> 
> When information is sticky, innovators tend to rely largely on information they already have in stock. One consequence of the information asymmetry between users and manufacturers is that users tend to develop innovations that are functionally novel, requiring a great deal of user-need information and use-context information for their development. In contrast, manufacturers tend to develop innovations that are improvements on well-known needs and that require a rich understanding of solution information for their development.

This is a nontrivial challenge. I think that it's also one of the reasons Drupal's "UX culture" took so many years to emerge, and why the experience was contentious for many in the development community. Admitting that we needed to *learn about* site builders' needs meant admitting that we were no longer the solitary (or even primary) audience for our own software.

There are still quite a few developer/site builders, of course: only a handful of Drupal developers *only* hack on core code without getting their hands dirty, and the needs of users who write code against Drupal's APIs and contribute to the project itself are critical, too. But increasingly, it's important for us to distinguish between those different roles and their different needs. What smooths the process of skill acquisition for *learners* might make life a living hell for *users*, and features that are appealing to the *makers* who build the system may not interest the *users* or *learners*.

Nobody ever said UX was easy.