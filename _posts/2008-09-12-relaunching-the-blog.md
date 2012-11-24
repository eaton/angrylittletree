--- 
layout: post
title: Relaunching the blog
tags: 
- geekery
- blogging
- drupal
drupal_path: relaunching-the-blog
drupal_nid: 564
created: 1221237689
---
Almost a year ago, I took down my blog and replaced it with a photoshopped Judge Parker cartoon. The plan was to tidy things up and cull out some old Drupal 4.7 code that I still had lying around, but Murphy's Law intervened. After quite a bit of hacking, I'm happy with where it's at -- not perfect, but much nicer than it was. For the Drupal geeks in the house, I thought I'd give a quick tour of the pieces that I'm using and what I'll be adding in the near future.
<!--break-->

One of the biggest changes is invisible: I'm migrating my cloud of personal sites away from Site5 onto a new <a href="http://www.slicehost.com">Slicehost VPS</a>. Taking on the responsibility of maintaining my own server is a bit more work, but with careful attention to security and configuration it looks like things are going well.  The ability to integrate tools like memcached and APC is great! I may not need them for my blog, but it's great having a sandbox to tinker with them that's a bit more permanent than localhost testing. If anyone's considering a VPS solution, <em>check out Slicehost.</em> They treat you right. (If I get hacked, blame my newb firewall configuration skills, not Drupal.)

Visually, the big change is a new theme. I hunted around on various CSS template sites and settled on <a href="http://www.styleshout.com/templates/preview/Unbound1-0/index.html?PHPSESSID=dd174ca9d7b273d84aa36206e32e28d5">Unbound</a> from StyleShout.com. It's a CC 3.0 licensed design, so it can't be checked into the Drupal.org's GPL-only CVS repository, but I think it's a great example on how third-party designs can be rolled into Drupal. I'm definitely not a designer, but I can poke and prod at CSS when I need to, so starting with a great foundation is a big help.

I originally launched my blog using Drupal 4.6; there was a lot of cruft from older modules like Links, Quotes, and so on that made upgrading difficult. I wrote up a few one-off PHP scripts to migrate data from those modules to standard Drupal content types, and I'm using Views 2 to do most of the little bits like the rotating quotes block in the footer. The extra control is nice, and I've exported my custom views to a site-specific module so I won't lose them in future database migrations.

I've hacked my local copy of Drupal's core BlogAPI module to add support for free tagging and path aliasing -- I can now use MarsEdit to post blog entries with full taxonomy tagging, and custom paths without visiting the site to update my posts through the web UI. I'm looking at a more generalized solution to contribute back as a core patch; it's a shame that we don't support more of the extended MT data that the MetaWebLog standard passes along, but AtomPub is a much more flexible format in the long term.

I'm relying on native Drupal modules for integration with external APIs like Twitter and Delicious, rather than pulling in the JS-driven widgets offered by those services. Instead of sticking a JS widget in a sidebar block and retrieving data from Twitter/Delicious/etc on every page load, these modules us web services APIs to retrieve new bookmarks and messages at cron time, storing them locally in my Drupal database. That allows me to build custom Views, filter based on keywords, and control the formatting with a lot more precision than I'd be able to otherwise. The Delicious module that's currently available for Drupal 6 doesn't have Views integration, but the changes I've made are <a href="http://drupal.org/node/290830">posted as a patch</a>. Hopefully they can be rolled in soon.

I <a href="http://www.flickr.com/photos/jeffeaton/"> post new photos to Flickr</a> frequently, and tend to change the header image on my blog when I find a photo I like. To simplify the process, I wired up a simple module that checks my Flickr account for new images tagged with 'blogheader' at cron-time. If it finds a new one, it downloads the high-res version to the files directory, then uses <a href="http://drupal.org/project/imagecache">Imagecache to crop and scale it to the correct dimensions.</a> Later, when it comes time to render a page, it uses hook_preprocess_page() to insert the image in place of the theme's default one. I'm working on adding some local caching and Views support to the <a href="http://druapl.org/project/flickr">Flickr</a> module for Drupal, allowing that kind of system to be set up easier, but for the time being it's only 40-50 lines of custom PHP -- easy enough to maintain.

Finally, I'm working on adding sections for some of my older (MUCH older) content. Back in the scary days of Netscape 0.9, I built quite a few sites that survived on various Zip disks and FTP sites. I have them all in a local directory on the server now, and I'm using a custom content type with a Link field to create a node for each archived site; using WebSnapr and a custom Link Field formatter for CCK, I get auto-generated thumbnails on <a href="http://jeff.viapositiva.net/old-sites">the overview page.</a>

Where does this leave me? My big goals -- to integrate my blog with other stuff I'm doing around the web and automatically populate it even if I don't have time to post new content manually -- is coming along nicely. Next steps include weaving in the Amazon module to keep track of my reading lists, and pulling in automatic links to stuff that I'm posting on other sites, like <a href="http://www.lullabot.com">Lullabot.com</a>. Someday, I'll realize me dream of a markov chainer that posts for me. Until then...
