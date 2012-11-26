---
notes: Yeah, this one will almost certainly hit Lullabot.com as well. Keeping it here just in case, though.
layout: post
title: The Great Inline Editing Debate
---


###Editorial UX is on the agenda!
BADCamp had Spark, sessions on decoupling, and live UX tests. DC Toronto had back-to-back sessions on UX for site builders and content admins. Excellent stuff by @useradvocate! Identification of tasks and workflows, emphasis on improving the overal experience of completing relevant tasks rather than *just* streamlining individual forms, etc. Inline is getting a lot of attention -- in fact, it's possible that it could be included in D8 core. [issue](http://drupal.org/node/1824500) on the surface it seems like a huge win. But "on the surface" suggests concern.

###Unpacking inline editing
First, some definitions.

- Contextual editing
- Client-side editing
- Inline editing
- WYSIWYG editing

Contextual editing is critical; client-side editing is plumbing, and it's extremely valuable. WYSIWYG is problematic but has a place inside of well structured content. Inline is trickier.

###Understanding the pitfalls
- Privileges the desktop web experience & the current design: makes anticipating impact elsewhere on the site and in other channels VERY hard
- Only gives access to what is visible: masks unprinted metadata, state, etc.
- Like WYSIWYG, encourages hack-the-fields ("The box that goes there")
- Attempts to expose richer metadata result in "The node form on the client side," good but not Inline.
- Closely-related Create In Place assumes very restricted set of options, and accentuates the problems. tough match for metadata driven sites. for views pages, will the metadata that causes a piece of content to appear there be auto-created? will creating it in a place, then overriding the metadata cause it to pop into existence somewhere else?

###Direct manipulation: A leaky abstraction
Leaky Abstraction: 'The page is where your content lives.' Joel Spolsky's writing.

###When it works, when it doesn't

###Warnings and opportunities

---

__Notes__

Setup: Drupal Spark, Create.js, PHPCR, etc. I'm not so bullish.

The problems we want to solve:

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

- http://drupal.org/node/1824500
- http://www.joelonsoftware.com/articles/LeakyAbstractions.html
- http://processwire.com/talk/topic/1365-inline-editing-the-drupal-spark-way/
- https://medium.com/about/df8eac9f4a5e
- http://plone.org/products/plone/roadmap/238 and http://plone.293351.n2.nabble.com/RFC-re-inline-editing-td7560809.html