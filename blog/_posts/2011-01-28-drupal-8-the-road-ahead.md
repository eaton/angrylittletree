--- 
layout: post
title: "Drupal 8: The Road Ahead"
drupal_path: 11/01/drupal-8-road-ahead
drupal_nid: 2
created: 1296237600
---
While the rest of the world kicks the tires on Drupal 7, the mad scientists who work on Core are already breaking out the whiteboards and starting to plan for the next release. It's a tradition: with the current release in the can, the pent-up energy for new stuff can be released.

After Drupal 7's epic three-year development cycle, though, even the most aggressive devs are taking a moment to consider what areas deserve attention. Some want to push forward with major architectural changes that didn't fit into the 7.0 cycle; others are lobbying for a "housekeeping" release that focuses on API cleanup and performance tweaks; and others want to take the User Experience improvements from D7 to the next level.

If there's one thing that the last several years has taught us, though, it's that <span class="pullquote">we can't succeed by focusing on a single slice of Drupal's audience (or a single subset of the Drupal contributor community)</span>. Going nuts with architectural improvements is a recipe for navel-gazing unless it's guided by the felt needs of site builders, day-job developers, and businesses. Pouring our energy into new theming work, new UX widgets, and bold workflow changes will frustrate core hackers who see cracks in the foundation that need repair. And the idea of a pure "fix-it" release, focusing on fixing key frustrations without adding new features, is a non-starter: Drupal has always needed the carrot of new functionality to bait the stick of API changes. If version 8 included nothing but breaking changes, there would be no reason for the majority of users to upgrade. (And if the fixes don't break existing APIs, why not roll them into a 7.1 or 7.2 release?)

Obviously, pitting these different visions against each other is a false dilemma. Drupal's diverse community of contributors can work on multiple projects at a time! Larry Garfield's refactoring of the hook system wouldn't prevent Jen Simmons from adding HTML5 support to Bartik, for example. But as we move forward into the next cycle of Drupal, we need more than "projects that don't collide with each other." We need a vision for what the future of Drupal holds, a path to get there, and a set of realistic priorities for the next release that get us moving down that path. Above all, we need to keep the final goal in mind: making the software called "Drupal" a killer tool for building multi-user, content-driven web sites.

### Three Points of Pain

While everyone in the Drupal universe has their own pet demons (has webchick mentioned support for Signatures lately?) several recurring pain points have emerged over the past couple of years. These issues cause lost sleep, missed deadlines, and endless frustration for people at all levels of the comunity; from businesses switching to Drupal, to shops building distros, to hobbyists bootstrapping online communities.

<img src="/files/d81.png" />

### Missing APIs

The tug-of-war over what should live in core and what should live in contrib is eternal. Some foundational problems, though, are impossible to solve efficiently outside of core. Grafted-on solutions to those problems require duplicating large swaths of core, and risk collisions when multiple teams tackle the same problem separately. Identifying these critical missing links in Drupal's APIs and filling the gaps will allow developers to focus on solving their unique problems rather than wrestling over competing standards. Two APIs that are painfully missing are context and web services.

The first one -- context -- is about keeping track of the essentials when responding to a web request. "What page am I on? Who asked for it? Am I in someone's blog, or in a forum?" and so on. These are all simple contextual questions that must be asked before a page can be rendered. In Drupal core and contrib, there are literally dozens of separate functions dedicated to answering these questions. Two competing mechanisms (CTools's Context, and the standalone Context module) have emerged and found an enthusiastic user-base, but neither can reach its full potential as a bolted-on solution in contrib. The Butler project is a first stab at providing a central context mechanism in Drupal core, and getting its skeleton in place should be one of our top priorities.

The second missing API is a built-in foundation for web services. Drupal's early automatic support for standards like RSS and BlogAPI helped push it ahead of competition that required grafted-on solutions. As next generation standards for data exchange emerge, though, we risk falling behind. In Drupal 8, we can build on the foundation of the Entity API: automatically exposing all Drupal entities in a RESTful fashion would dramatically simplify the work of building desktop and mobile apps, complex cross-site publishing tools, and more.

### Deployment

Today, most Drupal site-building consists of clicking small pieces together to assemble complex functionality, and storing the settings in the database. <span class="pullquote">The line between site structure, configuration, and user-generated content has never been blurrier; separating the wheat from the chaff to reuse that configuration work is a huge challenge.</span> In addition, the work of content staging -- creating content on one Drupal site and deploying it to another -- is truly difficult. With more large sites moving to Drupal, and the line between configuration and content blurring, these shortcomings are huge.

The first part of the solution is universally unique identifiers -- UUIDs. Today, quite a bit of our content is identified only by serial IDs generated in the database. Taxonomy term 5, node 92, menu item 103, and user 8 can't be migrated from one site to another, because their IDs are only unique to the site they were created on. Adding "machine names" to many entities like roles and input formats has eased some of the pain in Drupal 7, but we need to take it all the way: things we save to the database need UUIDs or machine names instead of a serial IDs.

The second piece of the deployment puzzle is a built-in mechanism for importing and exporting our configuration. The Views module pioneered this approach, allowing users to build out a complex screen, export the resulting View definition, import it on another site, and embed it into a module as PHP code for manageable reuse. This workflow is now leveraged by Panels, the Features module, and even several APIs in Drupal 7. By leveraging UUIDs and machine names to avoid collisions, and allowing the same import/export/override mechanism to be used with all data, we can take eliminate a huge chunk of the deployment problem. 

### User Experience

Creating a single user experience that works for everyone is an impossible task. The Drupal 7 User Experience team tried, and generated amazing results: a new administrative interface, streamlined tools for content posting, a fantastic new core theme, and more. The essential nature of Drupal, though, is still the same: it's a box of LEGO bricks for building web sites. To continue improving, we need to ensure that UX work focuses on bite-sized solutions that can be leveraged throughout the Drupal ecosystem.

Drupal's toolbox of UI elements conventions has been growing since the day it was first released: we need to document it and expand it. In the 1980s, Apple demonstrated the value of providing clear guidelines to developers on solving common UX problems. Module developers need to know when to use Vertical Tabs instead of collapsed fieldsets, why they should utilize drag and drop tables, and how to hide unecessary information from novice users. In addition, UX tools that are unecessarily tied to specific use cases, like Color module's color picker, need to be broken out for cleaner reuse. <span class="pullquote">Enhancing and documenting UX Pattern Library for Drupal will pay off in greater consistency throughout core and contrib.</span>

Finally, the addition of Bartik as a core theme has proven that Drupal is much more than a sidebar-content-sidebar cookie cutter. We need a complimentary "minimalist" theme in core for sites that require a no-nonsense, nothing-but-the-content approach. Customizable typography, color schemes, and imagery would take priority over lots of regions: we've proven that Drupal can handle complexity, and shipping with a "zero-cruft" theme would help us balance things out with zen simplicity.

<img src="/files/d82.png" />

### The goal: A better Drupal product

So far, the ideas I've proposed aren't very revolutionary. Context and web services, better deployment and export tools, an enhanced UX toolbox and a minimalist theme for core... Several of these initiatives are already in the works, and the rest have generated considerable excitement among developers and designers looking to contribute. They would provide a compelling bullet-list of enhancements for the next version of Drupal, but they feel disconnected. At the end of the day, what greater goal are we working towards?

The flexibility of Drupal has always been biggest selling point: endless expansion hooks, a huge library of modules, and powerful tools for code-free construction. However, Drupal as a standalone download -- a tool that does something useful the moment you install it -- has been stuck in a holding pattern for years. We're trapped between a desire to add functionality and the need to make it as generic as possible. <span class="pullquote">With the emergence of the "Minimal Install Profile" in Drupal 7, we have a safe starting point for the build-from-scratch folks. In Drupal 8, we can free the Standard Profile from its chains.</span>

Drupal's default installation profile should be treated as a genuine product. It should be unashamed to focus on the target audience that already benefits the most from it: small groups of collaborators who want to share their work with the world, and convince their audience to participate as well. This covers a broad mix of users -- open source software projects, online news teams, community organizers, and more. The tools that come with core are already well suited to this use case: multi-user blogging for the team, RSS feeds and aggregation for collection and distributing news, forums and polls for getting the audience involved, contact forms for soliciting direct feedback, and so on.

For the purposes of this post and my subsequent discussions, I'm going to call this focused "Product" install profile... Tsunami. I think it combines the idea of an unstoppable force with Drupal's water theme, and it's easy to work into jokes about drupal.org's issue queue.

Many of the challenges that have plagued the D7UX team can be simplified by embracing Tsunami's focus. Features and workflow enhancements that are controversial for use across all Drupal sites can be implemented in the Tsunami profile -- perhaps even in modules restricted to the Tsunami profile, rather than the framework-wide modules directory. Allowing both developers and UX team to roll out features in Tsunami even if they aren't perfect for every site will make the default experience better, and free us from the impossible task of building an "Everything interface."

What's the most important principle? Drupal's need for ultimate flexibility shouldn't hold back the evolution of the default Drupal "product," and the default "product" shouldn't force its own requirements onto every other Drupal site. If we're willing to draw the line between the two, we can let them grow in tandem.

<img src="/files/d83.png" />

### Who will fill the gaps?

The idea of making Drupal's out-of-box experience rock always sounds good on paper. But If we start tailoring it to a specific use case, what happens to everyone else? Single-user blogs, enterprise intranets, virtual stores, and online magazines all ues Drupal. Would their needs be overlooked?

For the past five years, the Drupal community has gone through waves of enthusiasm and disappointment over Installation Profiles and Distributions. The promise of downloading a copy of Drupal pre-tailored to your use case is hard to ignore, but today's reality is that building and maintaining a purpose-built distribution is hard work. I believe that the priorities outlined in this document will make that process much easier: improved context management and web services reduce the overhead of building great web apps; unique IDs and a reliable import/export framework will make capturing essential configuration in an Install Profile far less problematic; and a good library of UX patterns will help ensure that core tools can be effectively reused.

Finally, I believe that our long-time insistence on keeping Drupal's default download as generic as possible has actually made the difficulty of customizing it far far worse. Useful reusable tools are often left out of core because the "default profile" has no good use for them, and what assumptions are made about Drupal's out-of-box use case must be overridden with complex workarounds for other applications.

If we accept the idea that the default install profile is a product worthy of attention in and of itself; if we begin to implement features in that profile that can't baked into every other Drupal web site; if we commit to using our own core APIs the way other Install Profile and Distribution developers must use them... Then the process of enhancing Drupal's default product will actually clear the way for other products and other markets. <a href="http://phpadvent.org/2010/first-class-apis-by-helgi-%C3%9Eormar-%C3%9Eorbj%C3%B6rnsson">That's what Twitter discovered when they built their API</a>: until they treated Twitter.com as a web application built on top of their API, other users of their API would always be second-class citizens.

### I Love It When A Plan Comes Together

That was a mighty wall of text. After all that, where are we? Is there a plan to be found? I say yes. In Drupal 8, we should prioritize:

1. Missing APIs: Some of Drupal's most pressing blind spots could be filled by providing a unified "Context" system and exposing all Drupal entities via a RESTful interface.

2. Deployment: The pain of managing, deploying, and sharing Drupal solutions can be dramatically reduced with universally unique IDs for all Drupal data, and a standard system for importing, exporting, and overriding those items in code.

3. User Experience: The work in D7UX can be extended by documenting and simplifying the use of common UX patterns like color pickers and draggable blocks, while a streamlined "Focus on the post" theme would act as a compliment to Bartik's swiss army knife.

4. A Real Use Case -- Tailored to an actual audience, Drupal's default install could empower users with no site-building experience, free the drupal UX team from the tyranny of one-size-fits-all workflows, and reveal areas where our assumptions are crippling other solutions.

None of these items are simple -- each one would be a huge undertaking for any development team. Over the past decade, though, our community has proven that it can do amazing things. Teams of passionate developers, designers, and UX experts have already been working on many of these tasks: working with this plan would simply highlight and prioritize the work that's already going on.

In addition, coordinating efforts between these three major areas will help bring balance and a compelling narrative to the Drupal 8 development cycle: outside observers will know what we're shooting for, why it matters, and what the promise is for those outside the Drupal development club.

This is where I'll be focusing. How about you?
