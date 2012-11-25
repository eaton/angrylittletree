---
layout: post
title: The Great Inline Editing Debate
---

Setup: Drupal Spark, Create.js, PHPCR, etc. I'm not so bullish.
- http://drupal.org/project/spark
- http://createjs.org/
- http://phpcr.github.com/
- http://pooteeweet.org/blog/2088

The problems with inline editing that must be solved:

Pure UX issues like plone's - accidental edits. Also, hides metadata and privileges desktop. Closely related to the problem of wysiwyg.

Doesn't scale to complex multi-channel sites and sticks content editors into the designers seat.

How will it look on the front page? On mobile? In email or in social? Workflow etc. our clients need that flexibility. 

What's promising? Lots of work going into decoupling Drupal's storage, editing, and presentation. As long as we preserve that it should be a net win -- but the flashy curbside appeal of online editing is difficult to scale beyond brochureware.

A different way? Client by client, node form improvements, etc

Interface sends a message: making inline the emphasis says, "this stuff you see right here IS your content" sometimes, that works. But more frequently, it's a lie - what you're seeing is one view of a content element, tailored for a particular page or channel etc.

Not a UI panacea, can be tricky to get right. Learn from Plone
Hides metadata and state information, greatly privileges desktop web
Sends a message: This is what is part of the content. What you see is what matters. This is where it "lives."

Absolutely privileges the desktop web, and the current visual design

I'm a big proponent of contextually-aware administrative tools. On the WWE project, this was a huge boon.

Links: Ev's medium post, Joel Spolsky's post on "leaky abstractions", the Plone thread about removing inline editing

- http://www.joelonsoftware.com/articles/LeakyAbstractions.html
- http://processwire.com/talk/topic/1365-inline-editing-the-drupal-spark-way/
- https://medium.com/about/df8eac9f4a5e
- http://plone.org/products/plone/roadmap/238 and http://plone.293351.n2.nabble.com/RFC-re-inline-editing-td7560809.html