---
layout:post
summary:
title:Building Beyond Our Means
---

## I.

I work for a distributed company. We have no central office, our infrastructure is almost entirely digital, and we log a _lot_ of time in Google Hangouts. There are lots of upsides to this approach, but the downside is familiar to anyone who’s ever worked from home for a week: staying in touch with distant co-workers and team members takes real work. When everyone is camped out in a home office or a coffee shop, you can’t count on casual walks down the hallway to reveal morale problems or frustration.

We have a lot of ways to keep those lines of communication open, from IRC to daily status updates to one-on-ones and more. But the “ambient mood” of the company is still tough to gauge without a lot of legwork. Even worse, the times when you most _need_ that information are the crunch times that make the extra effort most difficult.

A few years back we started a skunkworks project to solve that problem. Using a couple of simple inputs (a mobile-optimized site and a bot listening in our IRC channel), we’d let everyone in the company record their mood on a scale from “Crappy” to “Awesome” whenever they liked. With the sharing-barrier reduced to a single button-press or a one-line shout in the company chat room, we figured, we’d get a lot more useful data. And given that data, we’d be able to expose a simple-but-effective “mood board” for the company’s directors.

Perhaps, we thought, we’d even be able to _anticipate_ problems. If Frank’s mood always plummeted during migration projects, but Suzanne’s always skyrocketed, we could take it into account for future assignments. And if Edward’s mood began to steadily slide over time, we could check in to make sure he wasn’t stranded without a listening ear. Science! Statistics! Utopia!

An enterprising co-worker jumped in with another idea. Instead of requiring everyone to manually post a mood announcement, why not go the next step? Sentiment analysis of our existing IRC and Yammer streams could intuit the level of negativity, cheeriness, or depression inherent in their existing communication. Furious whiteboarding ensued, culminating in a proposed plugin architecture and some research assignments. It wouldn’t be perfect, obviously, but if we counted on people to generate their own updates, they might stay quiet instead of sharing when they were down. If the sentiment analysis angle worked, we thought, our tool might even be useful to _other companies_ navigating the challenges of distributed teams.

The technical side of things was humming along nicely. One of our devs had a few days of slack between assignments and was building out the backend and evaluating natural language parsing libraries, a designer was throwing together working wireframes, and I was taking a quick refresher on basic statistics. One of our PMs started nailing down the functional spec, and conducted some research into possible markets and competitors.

And that’s when we killed it.

## II.

It turns out that there _was_ a real market for those kinds of tools. Unfortunately, some of the use cases weren’t as cheerily benign as we’d imagined. It’s [already reality in the world of retail](http://www.newrepublic.com/article/112204/pret-manger-when-corporations-enforce-happiness), where adjectives like “engaged,” “friendly,” “helpful,” and “enthusiastic” are non-negotiable requirements for every customer interaction. Modern technology allows businesses to build the data driven, optimized endgame of Office Space’s infamous “[fifteen pieces of flare](https://www.youtube.com/watch?v=-74Jo85ji9Q).” 

We took a stab at brainstorming ways to horror-proof the tool: scaling back the automatic monitoring of conversations, anonomyzing the data, and so on. At the end of the day, though, all we could say was that _we_ wanted to use the tools _responsibly._ For the _good_ of the team, and all of its members. If it was released as an open source project or a monetized product, we couldn’t deny that it would enable, well… soul-crushing dehumanization.

And so, we stopped working on it.

This sort of dilemma isn’t a new one. Open Source developers have grappled with the fact that [their creations can be weaponized](http://archive09.linux.com/articles/56426), and the fantastic potential of the social web also [facilitates troubling government surveilance](http://www.nytimes.com/2006/12/03/magazine/03intelligence.html?pagewanted=all&_r=0). Questions abound, and answers are few.

## III.

In the years since our skunkworks project was shelved, other startups have rolled out fully-developed tools that serve similar needs. They launched and found funding and integrated privacy controls and held webinars. They did the hard work of building and iterating and shipping and selling, and they deserve the rewards.

Telling this story isn’t an attempt to imply that _those_ teams were immoral or unethical. We didn’t kill our mood-tracker because we felt that doing it right was _impossible_. We killed it because we knew we didn’t have the time or resources to do it responsibly. It was a skunkworks side project, something we started to scratch an itch and learn a new framework. Tackling the kinds of problems we unearthed would have stolen time and resources from our successful client work. And _that_ would’ve made pulling the plug even harder if we couldn’t come up with a good solution. It seemed better, at the time, to make the call early and leave the problem to those who could dedicate their energies to it.

Tools and data may aspire to technopian neutrality, but it’s extremely difficult to draw _technical_ lines around morally and ethically problematic _applications_ of them. Those of us who cut our teeth on programming and web development in less hyper-connected times can have trouble remembering that. For many of us, these technologies are all about freedom, exploratory tinkering, the thrill of discovery and creation.

Those creations, though, don’t stay locked on the family computer or a 5.25" floppy the way they did in the old days. The tools we build and the prodcuts we create and the projects we work on are used by billions of people around the world. Together, we affect their lives whether we want to or not—whether we intend to or not. Facebook recently stumbled into a hornet’s nest when it revealed [mood-altering experiments](http://www.theguardian.com/technology/2014/jul/04/privacy-watchdog-files-complaint-over-facebook-emotion-experiment) it had conducted on its users, and smaller-scale [experiments by the OK Cupid dating site drew fire for similar reasons](http://www.huffingtonpost.com/joseph-farrell/why-okcupids-experiments-_b_5655217.html).

I think both projects were terrible, but looking at my own experiences, I understand how easy it is to get the ball rolling. Often, the hardest part of preventing unethical projects isn’t waving a red flag. Rather, it’s realizing that we’re in over our heads—that we don’t have the resources to examine the issues thoroughly enough or spot the possible problems before the deadline arrives.

That capacity to grapple honestly with the ripple effects of our creations is difficult to quantify, but profoundly important. I like to think of it as a sort of ethical budget, and that metaphor can help me account for the ebb and flow of my own time and energy. I might be able to weigh the impact of a new “block user” button, for example, but this month I’m just too swamped to give updated privacy controls the attention they deserve.

I don’t have a crystal ball, and I’m no better than anyone else at predicting the problems my work can cause. I know how difficult it is to say “no” to compelling projects, or put the kibosh on demo-friendly features. Sometimes, though, it’s necessary. Pushing ahead, assuming someone else will sort it out after launch, is a way of blowing through that ethical budget. We owe it to ourselves, to our users, and to our world to stop living beyond our means.