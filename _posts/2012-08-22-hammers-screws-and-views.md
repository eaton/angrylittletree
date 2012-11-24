--- 
layout: post
title: Hammers, Screws, and Views
---
Shocking though it may be, there's *controversy* brewing in Drupal-land. A couple of months ago, news broke that the popular third-party module [Views](http://drupal.org/project/views) may be absorbed into the next version of Drupal itself. Some people were excited, some people were nervous, other people shook their fists at the heavens. A pretty normal day in Drupal-land.

For those not immersed in the Drupal world, Views is a tool to build and display *lists of stuff* in Drupal using a point-and-click interface -- a task that's obviously quite common on most web sites. River of news on the front page? That's a list. RSS feed? That's a list, formatted differently. Sidebar of related stories? Also a list.

Programmers can (and historically did) write their own custom Drupal modules with custom SQL queries and custom HTML-building functions to manage those kinds of tasks. Views, however, made it possible to build the query and choose your display options with a point and click interface. There are some tradeoffs in flexibility and the potential for optimization, as with any framework or automation tool, but the popularity of that approach for meat and potatoes site building tasks is undeniable. While some people vigorously dislike the idea of using a tool instead of writing bespoke SQL and HTML, roughly 75% of all Drupal sites now use Views. The Joomla! and Wordpress communities are working on building equivalent tools.

### Back to the drama.

This week, a Drupal developer [fired a shot across the bow of the SMS Views-In-Core](http://groups.drupal.org/node/249068), declared the effort a terrible idea and (even more drama!) asserted that using Views is an *antipattern*. Views is so commonly used, he said, that it essentially a [Golden Hammer](http://en.wikipedia.org/wiki/Law_of_the_instrument): a tool that people use because it's easy even when it's a terrible fit for the job at hand. When all you have is a copy of Views, one might say, every problem looks like a list of content.

There are a couple of serious flaws with that argument, though. Some of the flaws are technical, and boil down to misconceptions about what Views is and what work it does for developers. Even more troubling is the rhetorical tap-dance that occurs as the discussion thread wears on: "Golden Hammer" is tossed around like an architectural accusation of Communist tendencies, and the popularity of the tool is treated as a priori evidence of its misuse.

### A different take

More than anything, it's important for developers discussing its fitness to remember that there are four main things that Views does.

1. Provides a central hub for third-party modules to consistently expose data fields (not *just* DB columns)
2. Allows site builders to create, store, and manage sets of data (basically, 'queries')
3. Allows query results to be integrated into a drupal site using standard best-practice display and navigation techniques. Templated theming, consistent overridable styling, caching of results, etc. -- without the creation of boilerplate code
4. Provides a consistent plugin interface for edge case display scenarios, presentation styles, and interaction models to be implemented without reinventing the first three items.

The common misconception about Views (one that's been around since it first came on the scene) is that it's for "people who don't want to write SQL." In fact, the SQL portion of most views is the simplest part of the whole affair.

Cleanly piping everything through Drupal's theming layers is one example. Displaying a list of query results in a sortable paged table, then using AJAX to swap in new result-sets without full page reloads, requires no custom coding. That's not about "knowing SQL," it's about writing huge swaths of boilerplate code to interact with Drupal's templating APIs, AJAX APIs, and so on.

Drupal's robust but complex content localization system and  granular access control system can both trip up experienced developers who are used to writing "standard" queries. Views handles the interaction with those subsystems, though, ensuring that its queries play nicely even when additional features like access control and localization are rolled out on a site. Caching the results of complex queries, or pushing the work of executing the queries off to a slave database server? They're reduced to a few configuration options.

Why harp on this stuff? Simple: Comparing Views to hand-written SQL queries is like comparing an IDE to a text editor. You may not need the extra functionality, but it's absurd to say that one is simply a "less efficient" version of the other.  

### Is this hammer golden?

Back to the essential question: is Views, as the author of the original post says, an example of the Golden Hammer antipattern? I say no.

Every experienced Drupal developer has encountered sites where Views was used and abused by people who pounded a lot of screws, paperclips, staples, and lawn jarts into place with their shiny point-and-click hammer. I've seen a *single link* in a sidebar block generated using two nested Views that queried the site's search index. If that's not terrifying, I'm not sure what *is*. Misuse of tools, whether it's an API or a RAD framework or the ability to embed animated GIFs in a Data URL, will always be with us. 

Suggesting that Views is the problem, in and of itself, is rather odd: the existence of Golden Hammers does not mean that *hammers* are bad. The problem with the original poster's Golden Hammer analogy is subtle: in order to explain his frustration with Views, he doesn't describe cases where other tools would be a better fit. Instead, he expresses a preference for writing his own custom code to do the same thing without the "overhead" of Views' configurability.

The problems he describes are not "screws" that lazier developers "hammer" with views. They're simply nails that he just wants to pound using a smaller, more specialized hammer of his own creation. There's nothing wrong with that, and I think it's essential that we maintain the ability to write raw queries, and even EntityFieldQueries, if Views goes into core. Just as our theming system doesn't prevent modules from printing raw text to the HTTP stream.

### In conclusion…

If you're concerned about the overhead of Views' large codebase being included in Drupal core, talk about the manpower problems that we may face. If you're concerned about the general trend away from bespoke code towards assembly of reusable components, that's a general issue across all of Drupal -- and should be dealt with at the community and leadership level. But if you want to keep Views from going into core, don't try to slap the 'Golden Hammer Antipattern' label on it: that just won't stick.