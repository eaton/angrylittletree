--- 
layout: post
title: State of the Drupal
tags: 
- drupal
- geekery
drupal_path: state-of-the-drupal
drupal_nid: 448
created: 1153866648
---
<i>UPDATE: RobRoy from #drupal has been chewing on some of the same problems outlined in the post below. There's <a href="http://drupal.org/node/74326">an issue on drupal.org</a> for anyone interested in helping tackle the building-nodes-cleanly problem.</i>

It seems like the dust has only just settled on Drupal 4.7, and already things are gearing up for major improvements in version 4.8/5.0. In addition to <a href="http://drupal.org/node/74660">some subtle but important improvements to FormAPI</a>, <a href="http://drupal.org/node/68926">a new installer</a>, a <a href="http://drupal.org/node/72079">much improved administration interface</a>, and assorted other goodies, there's a great patch will give site admins <a href="http://drupal.org/node/62340">the ability to define their own content types</a>. They'll do this right from thae admin page, without writing a single line of code or hacking any existing modules.

Custom content types have been around for ages in the form of FlexiNode, and the Content Creation Kit project has been in gestation for (at least?) a year now. Both FlexiNode and CCK are designed for very complex cases, though. A content type can have text fields, images, file upload fields, multi-select number fields, checkboxes, and all sorts of niftiness. CCK promises major flexibility and performance advanatages over the relatively brittle FlexiNode, but it's still quite a ways from the finish line. In particular, it doesn't yet support the same variety of custom fields that FlexiNode does, due to its relative youth. It's made a lot of progress, but isn't ready for prime time on most sites. 

For many sites, though, that's not a problem. They don't need to create wild and crazy content types with five URLs, two pictures, five select boxes and three text fields. They just need to make an 'article' content type, or an 'interview' content type, that's separate from the 'story' and 'blog' types Drupal ships with. They want to make simple content types, and both CCK and Flexinode are like swatting a fly with a Buick.

That's where the patch called '<a href="http://drupal.org/node/62340">Prepare the way for CCK</a>' comes in. Rather than focusing on arbitrarily complex content types with custom fields, esoteric data, and so on, it just allows admins to define 'simple' content types with a title, a teaser, and a body. Most content is like that -- blog entries, stories, book pages, and so on all use that simple approach. In addition, those fields are the ones that Drupal automatically maintains for <i>every</i> node in the system, so everything already knows how to work with the new content types. It's a Good Thimg.

In fact, this new feature will do a good chunk of the work that FlexiNode and CCK have had to carry themselves. In fact, it originally descends from the code that CCK uses to handle its basic content-type management. Although FlexiNode's codebase is probably too old to benefit from this, CCK is still 'wet paint' so to speak, and is in a good position to take advantage of it. Once it goes into core, all CCK needs to worry about is <i>adding its own special and spiffy fields</i> to custom content types -- core code will handle managing the types themselves.

This is very cool. Very, very cool in fact. The only problem, though, is that both CCK and Flexinode expose a fundamental problem in the way that Drupal deals with content. In the database, every node has a 'title', a 'teaser', and a 'body'. It makes sense and everything's happy. When other modules add custom data onto a node, they store it in their own database fields and use the 'view' or 'load' hooks to add it onto $node->body and $node->teaser as needed. One example is the 'Upload' module, which tacks its list of file attachments onto $node->body during the 'view' operation. Unfortunately, this means that the body and teaser fields have to do double-duty. Sometimes, they're user-entered data. Other times, they're a mix of user-entered and module-added data.

Some modules, like CCK and Flexinode in particular, hide the 'body' field from the user entirely. They just let administrators choose which custom fields will be glomped together into the teaser, which will be glomped into the body, and assemble $node->body programmatically. This usually works OK, until you start trying to override the theming for a CCK node by rebuilding $body yourself using the assorted component fields.

Because all the other modules have already done their work, dutifully modifying the $node->body field and getting their additions 'just so,' attempting to change it in your theme will wipe out all the additions they tack on. Using inline.module to put images into the body? They vanish. Using upload.module to attach files? They vanish. It's possible to recreate this stuff in your theming layer by manually triggering each add-on module's hooks, prompting it to do its work a second time, but each time you enable a new module you'll have to add code to handle it in your theme.

This issue has recently bitten a number of people using the excellent Contemplate module. It allows users to use php snippets to control the rendering of CCK nodes. It's terribly useful, but it runs smack into this issue and results in confusion for everyone who encounters it.

The long-term solution to this is straightforward but involves a lot of work for Drupal modules: instead of shoving their content into $node->body as HTML, they should add their additions onto the $node object itself, and allow the node theming code to assemble the final results. That's how CCK manages each of its individual fields, and it works pretty well as long as no other modules are involved. It keeps the original data intact, but provides a 'default' 

Moving to that model would require a non-trivial (but not horrible) rewrite of almost every content-oriented module. It was brought up a few months ago on the Drupal devel mailing list, but at the time 4.7 was in labor and no one had time to dedicate to pie-in-the-sky thinking. I'm beginning to think it might be one of the critical parts of the system to look at before the September code freeze that's coming up.
