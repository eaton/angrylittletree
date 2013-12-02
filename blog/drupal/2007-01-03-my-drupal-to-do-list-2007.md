--- 
layout: post
title: "My Drupal To-Do List: 2007"
tags: 
- drupal
- todo
drupal_path: my-drupal-to-do-list-2007
drupal_nid: 466
created: 1167805507
---
Last year I sketched out <a href="http://jeff.viapositiva.net/archives/2005/11/my_drupal_to_do.html">a rough overview of the things I wanted to code for Drupal.</a> A year later, almost all the items on it have been accomplished (a few by me, a few by other enterprising folks in the community). Even the craziest one -- comments as nodes -- snuck in under the wire as Robert Douglas and I hammered out the custom system for <a href="http://www.daughtryofficial.com">Chris Daughtry's</a> new web site.

So. With Drupal 5 in its final birth pains, people are starting to talk about predictions and battle plans for the coming year. I've been sitting on a rough outline of my plans for a week or so, and I might as well get in on the action and post them.

<ol>

  <li><b>FormAPI Improvements:</b> Drupal 5 brings quite q few improvements to the FormAPI. A hacker's work is never done, though. There's more being cooked up.<ul>

    <li>Right now, each form gets one _submit() callback to do its processing. This is fine for most forms, but forms with multiple buttons and multiple actions (save, delete, save-as-draft, etc) get complicated fast. All the handling has to be jammed into that one submit callback. Instead, each button should automatically get its own callback function. Chx put together a great patch for this late in the 5.0 cycle, but it didn't make it in: 6.0 needs it. '</li>

    <li>Drupal's form submission callbacks currently return a path to redirect to when the form processing is complete. Instead, they should return a structured array: this would allow forms to redirect to a new page, display a 'next step' form in a multistep process, and so on. Some ideas for valid return types include 'path', 'stop', and 'callback'.</li>

    <li>The multistep form handling in Drupal 5 is a big improvement, but it's not enough. We need to figure out a clean way to support forms built on the client side using jQuery and other Javascript techniques. Figure out how to cleanly support 'back' and 'forward' paging through multiple steps would be great too, but I'd be thrilled just to support client-side form building.</li>

    <li>Find ways to simplify the API. FormAPI is much better than the old creaky stuff from version 4.6, but the complicated stuff gets confusing very quickly. There are loads of sneaky special-case scenarios, poorly documented internal flags for special states, and subtle gotchas if you venture off the well-lit path. There are opportunities to simplify the developer API, but it'll take careful attention and a whole lotta regression testing.</li>

    </ul>

  </li>

  <li><b>CCK Fields In Core:</b> Drupal 5 brings the ability to define custom content types with a title and a body. The popular CCK module allows admins to add additional fields to those content types -- and Dries wants to see that capability in core. CCK has improved dramatically over the past year -- Lullabot and other pro Drupal shops have used it in quite a few big name sites, and it's proven its usefulness. To be ready for core, though, more work is needed.<ul>

    <li>The APIs are very flexible, but also difficult to hack without grasping the whole kit and kaboodle. And that, friends, is a complicated kitkaboodle. We need to figure out how CCK field plugins can be broken up into bite sized pieces for new developers, and how devs can cleanly build on each others' work.</li>

    <li>Formatters are among the powerful CCK bits that need more love. It's like a self-contained theming function, a user-selectable output style, for any field. I can see lots of users wanting to drop in their own formatters.</li>

    <li>CCK supports both manual handling of CRUD for custom field types, and 'automatic' CRUD, handled by CCK without any custom code. The difference between these two methods is important but confusing. As I write it becomes obvious that most of these CCK tasks are really about documentation. Still, we need to figure out if there's any way to reduce the number of hooks necessary, streamline the amount of code needed to add field types, and so on. Code bloat is a real danger.</li>

    </ul>

  </li>

  <li><b>The Rendering System:</b> Drupal 5 saw the birth of drupal_render(), a general purpose rendering function that takes structured arrays (ala FormAPI) and spits out HTML. We now use it to render nodes, and several patches to move other data types to this system almost made it into 5.0.<ul>

    <li>Nodes still use an outdated binary flag when they're rendered: either it's in teaser mode, or it's not. We need to change that to a textual token that supports many contexts, from 'feed' to 'print' to 'teaser' to 'index'. The changes in 5.0 were intended to be API-compatible with the old node_view() call. This won't be, so quite a bit of additional testing will be needed. The benefits will make it worthwhile.</li>

    <li>Improve the alterability of node content. Establish consistent guidelines, including the use of #prefix and #suffix for titling and wrapping. Provide a mechanism to 'reset' the node content array's 'printed' flags, and render sub-chunks. This will make life a lot easier for themers remixing a node's output.</li>

    <li>CCK currently outputs the same content regardless of what context a node is being rendered in (an overview listing, a single page, an RSS feed, etc.) Allow admins to specify how each field should be output in each of the node viewing contexts mentioned above.</li>

    </ul>

  </li>

  <li><b>PHPTemplate:</b> Drupal's theming system has been evolving slowly with each release, and everyone has big plans for the 6.0 release. For my part, I'd like to:<ul>

    <li>Add support for 'pure' CSS themes. Currently, PHPTemplate requires that every theme implement a custom page.tpl.php file. There's no reason we can't provide a clean, standards-compliant page template. That would allow designers to build new Drupal themes using nothing but CSS, opening the doors to a world of gifted non-programmers.</li>

    <li>Allow modules to provide their own templates. Any module can provide a theme_*() function for its HTML output, allowing custom themes to override their formatting. They should be able to go even farther: modules should be able to provide default tpl.php files for PHPTemplate, to be copied and altered in custom themes. This means supporting template files outside the theme directory in PHPTemplate. So. Patch time!</li>

    </ul>

  </li>

  <li><b>Profiles:</b> Now that Drupal 5 supports cleanly packaged collections of modules and configuration settings into distributable 'profiles', lots of old ideas for specialized Drupal distributions become possible.<ul>

    <li><b>Drupal For Webcomics:</b> This one's been on my radar for almost two years, and the pieces are pretty much in place. File management is still a weak point (and an important one for folks who need to control access to their images, deal with large media libraries, and so on), but a couple other folks are working hard on that side of things.</li>

    <li><b>Drupal for Boggers:</b> Way back in the day, a custom fork of Drupal 4.4 called 'Drupal For Bloggers' added some cool features like trackbacks, a template based theming engine, and more. Maintaining a fork is a huge pain, though, and most of its features were rolled back into Drupal core or became contrib modules. D4B fell into disrepair, and was never updated to stay in sync with new versions of Core. Now, it's time for a packaged Drupal profile that pulls together the same functionality with standard Core and contrib code. Akismet spam checking, Trackback integration, Flickr and del.icio.us integration, and a clean theme engine for non-coders like PHPTal would all be great components.</li>

    <li>Of course, the profile engine itself could use improvements: the installer needs better support for additional configuration steps.</li>

    </ul>

  </li>

</ol>

Wow. That's... quite a list. But it's made of bite-sized chunks. I think all the pieces are doable, and hopefully I won't be the only one passionate enough to work on these projects. Viva la Drupal!
