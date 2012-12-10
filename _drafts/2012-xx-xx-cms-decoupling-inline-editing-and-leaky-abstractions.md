---
layout: post
summary:Inline WYSIWYG editing can improve life for some content managers, but brings new problems for content-rich sites.
title: Inline Editing and the Cost of Leaky Abstractions
---

For several years, core Drupal contributors have been working on ways to improve the user experience for content editors. Since May of 2012, project lead Dries Buytaert and his company Acquia have been funding the [Spark Project](http://buytaert.net/announcing-spark-authoring-improvements-for-drupal-7-and-drupal-8), an ambitious set of improvements to Drupal's core editing experience. One of the most eye-popping features they've demonstrated is [Inline WYSIWYG editing](http://buytaert.net/spark-update-in-line-editing-in-drupal), the ability to click on a page element, edit it in place, and persist the changes without visiting a separate page or opening a popup window.

Chances are good that [inline editing functionality could make it into Drupal 8](http://drupal.org/node/1824500) -- specifically, an implementation that's powered by [Create.js](http://createjs.org/) and the closely associated [Aloha](http://aloha-editor.org/) WYSIWYG editor. Fans of decoupled Drupal code definitely have something to cheer for! The work to modernize Drupal 8's codebase is making it much easier to reuse the great front-end and back-end work from open source projects like Symfony and Create.js.

With that good news, though, there's a potential raincloud on the horizon. Inline editing, as useful as it is, could easily be the next WYSIWYG markup: [a tool that simplifies certain tasks but sabotages others](http://www.rachelandrew.co.uk/archives/2011/07/27/your-wysiwyg-editor-sucks/) in unexpected ways.

## A brief interlude, with semantics

With that provocative statement out of the way, I'll take a step back and define some terminology. Because Drupal's administrative interface, the improvements added by the Spark project, and the nature of web UX are all pretty complicated, there's a lot of potential for confusion when a term like "Inline Editing" gets thrown around. There are four kinds of editing behaviors that we'll touch on, and clarifying how they differ and overlap will (hopefully) prevent some confusion.

### Contextual editing
When a content editor is on a particular portion of the web site or is viewing a particular kind of content, they should have access to options and tools that are *contextually relevant*. If an editor visits an article on their web site, give them access to an "Edit" link for that article. If it's unpublished, they should see a "Publish" link, and so on. Contextual editing also means hiding options from users when they're inappropriate. If you don't have permission to modify an article, you shouldn't see the "Edit" link.

Well-designed contextual editing is a great thing! It puts the right tools in the users' hands when they're needed, and helps prevent "option overload"."

### API-based editing
Rather than rendering an HTML form, API-based editing means bundling up a copy of the content object itself -- usually in a format like XML or JSON -- and sending it to another program for editing. That "Client" could be Javascript code running on a user's browser, a native mobile app, or another CMS entirely. The client presents an editing interface to the user, makes changes to the object, and sends it back to the CMS they're done.

API-based editing is cool, too! It's not a specific user-visible widget or workflow. In fact, it could be used to deliver the very same HTML forms users are used to -- but it provides a foundation for many other kinds of novel editing interfaces.

### Inline editing
Inline editing takes contextual editing a step farther. When you see data on the page, you don't just have a link to edit it at your beck and call: you can edit it *right there* without going to another page or popup window. One common scenario is tabular data: click in a cell, edit the cell. Click outside of the cell, and your changes are saved. A more complex example might include [clicking on the headline of an article](http://patternry.com/p=inline-edit/) and editing it while viewing it on the front page, or clicking on the body text and adding a new paragraph then and there. The emphasis here is on eliminating context switches and unecessary steps for the editor.

Inline editing can dramatically simplify life for users by replacing cluttered forms, fields, and buttons with direct content manipulation. However, when direct manipulation the primary means of editing content, it can easily hide critical information from those same users. We'll get to that later.

### WYSIWYG editing
"What You See Is What You Get" editing is all about allowing users to manipulate things *as they will appear in the finished product* rather than using special codes, weird markup, or separate preview modes. Desktop publishing flourished on 1980s Macintosh computers because they let would-be Hearsts and Pulitzers lay out pages and set type visually. WYSIWYG HTML editors have been popular with web content editors for similar reasons: finessing the appearance of content via clicks and drags is easier than encoding semantic instructions for web browsers using raw HTML.

WYSIWYG editing tools can help reduce markup errors and streamline the work of content managers who don't know HTML. Without careful restrictions, though, it can easily sabotage attempts to reuse content effectively. If a restaraunt's menu is posted as a giant HTML table in the "Menu" page's Body field, for example, there's no way to highlight the latest dishes or list gluten-free recipes. Similarly, if the key photo for a news story is dropped into that Body field with a WYSIWYG editor, reformatting it for display on a mobile phone is all but impossible.

### Everything in-between
Often, these four different approaches overlap. Inline editing can be thought of as a particularly advanced form of contextual editing, and it's often built on top of API-based editing. In addition, when inline editing is enabled on the visitor-visible "presentation" layout of a web site, it functions as a sort of WYSWIWG editing for the entire page -- not just a particular article or field.

That combined approach -- using inline editing on a site's front end to edit content as it will appear to visitors -- is what I'll be focusing on. It's "Inline WYSIWYG."


---


## Inline WYSIWYG! Can anything good come from there[?](http://bible.cc/john/1-46.htm)
Of course! Over the past year or so, anything with the word 'WYSIWYG' in it has taken a bit of a beating in web circles. None of the approaches to content editing listed above are inherently good or bad, though. Like all tools, there are situations they're well-suited for and others that make an awkward fit.

Ev Williams, the co-founder of Blogger and Twitter, recently wrote about [why his team has made inline editing and WYSIWYG the native editing interface for their blogging tool, Medium.](https://medium.com/about/df8eac9f4a5e)

> As I’m writing this, I see not just a WYSIWYG editor, I see the page I’m going to publish, which looks just like the version you’re reading. In fact, it is the version you’re reading. There’s no layer of abstraction. This is a simple (and old) concept… and it makes a big difference. Having to go back and forth between your creation tool and your creation is like sculpting by talking.

That's an incredibly compelling argument for the power of WYSIWYG and inline editing. I've seen it in action on Medium, and it really does feel different than the click-edit-save, click-edit-save cycle that most web based tools require. However, and this is a big however, it's also critical to remember the key restrictions Ev and his team have put in place to make that simplicity work.

> One of the reasons its possible to have this *really* WYSIWYG experience is because we’ve stripped out a lot of the power that other online editors give you. Here are things you can’t do: change fonts, font color, font size. You can’t insert tables or use strikethrough or even underline. Here’s what you can do: bold, italics, subheads (two levels), blockquote, and links.

In addition, the underlying structure of an article on Medium is very simple. Each post can have a title, a single optional header image, and the body text of the article itself. No meta tags, no related links, no attached files or summary text for the front page. What you see is what you get here, too: when you are viewing an article, you are viewing the whole article and editing it inline on the page leaves nothing to the imagination.

This kind of relentless focus -- a single streamlined way of presenting each piece of content, a mercilessly stripped down list of formatting options, and a vigilant focus on the written word -- ensure that there really is no gap between what users are manipulating via inline editing and what everyone else sees.

That's an amazing, awesome thing and other kinds of focused web sites can benefit from it, too. Many small-business brochureware sites, for example, have straightfoward, easily-modeled content. Many of those sites' users would kill for the simplicity of a "click here to enter text" approach to content entry.



## The other side(s) of the coin

Even the best tool, however, can't be right for every job. The inline WYSIWYG approach that's used by Create.js and the Spark Project can pose serious problems, too. The [Decoupled CMS Project](http://decoupledcms.org/) in particular proposes that Inline WYSIWYG could be a useful general editing paradigm for content-rich web˙sites, but that requires looking at the weaknesses clearly and honestly.

### Invisible data is inaccessible
Inline editing, by definition, is tied to the page's visible design. Various cues can separate editable and non-editable portions of the page, but there's no place for content elements that *aren't part of the visible page at all*.

Metadata tags, relationships between content that drive other page elements, fields intended for display in *other* views of the content, and flags that control a content element's appearance but aren't inherently visible, are all awkward bystanders. This is particularly important in multichannel publishing environments: often, multiple versions of key fields are created for use in different device and display contexts.

### It encourages visual hacks
Well-structured content models need the right data in the right fields. We've learned the hard way that WYSIWYG markup editors inevitably lead to ugly HTML hacks. Users naturally assume that "it looks right" means "everything is working correctly." Similarly, inline WYSIWYG emphasizes each field's visual appearance and placement on the page over its semantic meaning. That sets up another cycle of "I put it there because it looked right" editing snafus.

The problem is even more serious for Inline WYSIWYG. Markup editors can be configured to use a restricted set of tags, but no code is smart enough to know that a user misused an important text field to achieve a desired visual result.


### It privileges the editor's device

In her book *[Content Strategy for Mobile](http://www.abookapart.com/products/content-strategy-for-mobile)*, author Karen McGrane explains the dangers of the web-based "preview" button. 

> …There's no way to show [desktop] content creators how their content might appear on a mobile website or in an app. The existence of the preview button reinforces the notion that the dekstop website is the "real" website  and [anything else] is an afterthought.

Inline WYSIWG amplifies this problem, turning the entire editing experience into an extended preview of what the content will look like on the editor's current browser, platform, screen size, and user context. The danger lies in the hidden ripple effects for *other* devices, views, publishing channels, and even other pages where the same content is reused.


### It complicates the creation of new items
Create.js and the Spark Project also allow editors to create new content items in place on any listing page. This is a valuable feature, especially for sites dominated by simple chronological lists or explicit content hierarchies.

On sites with more complex rule-based listing pages, however, the picture becomes fuzzier. If an editor inserts a new piece of content on another author's page, does the content become owned by that author? On listing pages goverened by complex selection rules, will the newly-inserted item receive default values sufficient to ensure that it will appear on the page? If the editor inserts new content on a listing page, but alters its fields such that the content no longer matches the listing page's selection rules, does the content vanish and re-appear in a different, unknown part of the web site?

In addition, multi-step workflows accompany the creation of content on many sites. Translating a single piece of content into several legally mandated languages before publication is necessary in some countries, even for small web sites. Approval and scheduling workflows pose similar problems, moving documents through important but invisible states before they can be displayed accurately on the site.


### Complexity quickly reasserts itself
Many of the problems described above can be worked around by adding additional visual cues, exposing normally hidden fields in floating toolbars, and providing other normally hidden information when editors have activated Inline WYSIWYG. Additional secondary editing interfaces can also be provided for "full access" to a content item's full list of fields, metadata, and workflow states.

However, the addition of these extra widgets, toolbars, hover-tips, popups, and so on compromise the radical simplicity that justified
Inline Editing in the first place. On many sites, a sufficiently functional Inline WYSIWYG interface -- one that captures the important state, metadata, and relational information for a piece of content -- will be no simpler or faster than well-designed, task-focused modal editing forms. [Members of the Plone team discovered that was often true](http://plone.org/products/plone/roadmap/238) after adding Inline WYSIWYG to their CMS. After several versions maintaining the feature, [they removed it from the core CMS product](http://plone.293351.n2.nabble.com/RFC-re-inline-editing-td7560809.html).

To reiterate Ev William's vision for Medium,

> There’s no layer of abstraction. This is a simple (and old) concept… and it makes a big difference. Having to go back and forth between your creation tool and your creation is like sculpting by talking.

In situations where Inline WYSIWIG can't live up to that ideal, it paradoxically results in even *more* complexity for users.


---


## Direct manipulation: A leaky abstraction

Over a decade ago, software developer Joel Spolsky wrote a critically important blog post about user experience: [The Law of Leaky Abstractions](http://www.joelonsoftware.com/articles/LeakyAbstractions.html). He explained that many software APIs are convenient lies about more complex processes they hide to simplify day-to-day work. Often these abstractions work, but just as often the underlying complexity "leaks through."

> One reason the law of leaky abstractions is problematic is that it means that abstractions do not really simplify our lives as much as they were meant to.
> 
> The law of leaky abstractions means that whenever somebody comes up with a wizzy new code-generation tool that is supposed to make us all ever-so-efficient, you hear a lot of people saying "learn how to do it manually first, then use the wizzy tool to save time." Code generation tools which pretend to abstract out something, like all abstractions, leak, and the only way to deal with the leaks competently is to learn about how the abstractions work and what they are abstracting. So the abstractions save us time working, but they don't save us time learning.
> 
> And all this means that paradoxically, even as we have higher and higher level programming tools with better and better abstractions, becoming a proficient programmer is getting harder and harder.

Those words were written about APIs and software development tools, but they're familiar to anyone who's tried to build an humane interface for a modern content management system.

At one extreme, a CMS can be treated as a tool for editing a relational database. The user interface exposed by a CMS in that sense is just a way of giving users access to every table and column that must be inserted or updated. Completeness is the name of the game, because users are directly manipulating the underlying storage model. Any data they don't see is probably unnecessary and should be exorcised from the data model. For those of us who come from a software development background this is a familiar approach, and it's dominated the UX decisions of many open source projects and business-focused proprietary systems.

At the other extreme, a CMS can be treated as an artifact of visual web design. We begin with a vision of the end product: a photography portfolio, an online magazine, a school's class schedule. We decide how visitors should interact with it, we extrapolate the kinds of tasks administrators will need to perform to keep it updated, and the CMS is used to fill those dynamic gaps. The underlying structure of its data is abstracted away as WYSIWYG editors, drag-and-drop editing, and other tools that allow users to feel they're directly manipulating the final product rather than markup codes.

The editing interfaces we offer to users send them important messages, whether we intend it or not. They are affordances, like knobs on doors and buttons on telephones. If the primary editing interface we present is also the visual design seen by site visitors, we are saying: "This *page* is what you manage! The things you see on it are the true form of your content." With Ev William's Medium, that message is true. But for many sites, it's a lie: what you're seeing is simply one view of a more complex content element, tailored for a particular page or channel.

In those situations, Inline WYSIWYG editing is one of Joel Spolsky's leaky abstractions. It simplifies a user's initial experience exploring the system, but breaks down when they push forward -- causing even more confusion and frustration than the initial learning would have.


## In conclusion, Inline WYSIWYG is [a land of contrasts](http://www.globejotting.com/the-most-overused-cliche-in-travel-writing/)
So, where does this leave us? Despite my complaints, both Inline and WYSIWYG editing are valuable tools for building an effective editorial experience. The combined Inline WYSIWYG approach *can* radically improve sites that pair an extremely focused presentation with simple content. But despite the impressive splash it makes during demos, Inline WYSIWYG as a primary editing interface is difficult to scale beyond brochureware and blogs. On sites with more complex content and publishing workflows, those training wheels will have to come off eventually.

Is Inline WYSIWYG right for Drupal core? While it can be very useful, it's not a silver bullet for Drupal's UX werewolves. Worse, it can actively confuse users and mask critical information on the kinds of data-rich sites Drupal is best suited for. Enhanced content modeling tools and the much-loved Views module are both built into Drupal 8; even new developers and builders will easily assemble sites whose complexity confounds Inline WYSIWYG. 

At the same time, the underlying architectural changes that make the approach possible are incredibly valuable. If Drupal 8 ships with client-side editing APIs as complete as its existing server-side edit forms, the foundation will be laid for many other innovative editing tools. Even if complex sites can't benefit from Inline WYSIWYG, they'll be able to implement their own appropriate, tailored interfaces with far less work because of it.

Like WYSIWYG markup editors, design-integrated Inline WYSIWYG editing is an idea that's here to stay. Deciding when to use it appropriately, and learning how to sidestep its pitfalls, will be an important task for site builders and UX professionals in the coming years. Our essential task is still the same: giving people tools to accomplish the tasks that matter to them!

-Placeholder for paragraph about Views and Panels-