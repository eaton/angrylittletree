--- 
layout: post
title: On the complexity of Drupal theming
tags: 
- Software Development
- drupal
- css
- themes
drupal_path: on-the-complexity-of-drupal-theming
drupal_nid: 369
created: 1132112458
---
Those who know me know that I am official consumer of the kool-aid when it comes to Drupal. It is, after all, <a href="http://www.drupal.org">the best CMS on the market.</a> There have been quite a few threads on the Drupal site, though, discussing the dearth of good themes available for folks who want a swanky looking site. Those who dive in and try to build their own without considerable experience tend to run screaming. Or, if they persevere, end up with a slightly modified version of one of the core themes like Grey_Box. (For this blog, I just grabbed one of the more attractive themes and haven't bothered customizing it. Rolling my own theme is on the to-do list, but what a loooong list it is...) Anyhow, I spent some time looking around at some of the highly visible "showcase" themes for blogging software like WordPress and Movable Type.

What I started to notice was a trend: the themes that got lots of attention, the ones that rise above the crowd, fall into two rough categories. Either they're highly customized for a particular approach (a photo-blog organized by photographer, for example), and thus unsuitable for general use, or they focus on flexibility and compatability with third-party plugins. In the world of Movable Type and WordPress, it's a foregone conclusion that connecting your blog to your de.licio.us favorites or adding a 'quote of the day' in the sidebar will involve wading deep into templating languages and perhaps Perl or PHP.

One of the snappier WordPress themes, <a href="http://binarybonsai.com/wordpress/k2/features-and-plugins/">K2,</a> boasts features like "compatability with multiple authors" and "Showing the latest comments." A lot of work has gone into making K2 flexible enough to deal with more than one or two configuration scenerios, and the work shows.

What really struck me, though, was that any Drupal theme released <i>without</i> that sort of flexibility would be sent back to the drawing board as broken. New modules are released almost daily, shoving new content types and new presentation paradigms and new tools and options into the Drupal framework. <a href="http://drupal.org/project/Themes">The Drupal themes one can download from the main site</a> take them in stride thanks to the tremendously flexible PHPTemplate system that (almost) everyone now uses.

I've thrown together <a href="http://www.onehundredwords.com">quickie themes</a> for Drupal that make all sorts of assumptions (we'll never had sidebars, we don't need to display comments, only Module X and Module Y will ever be installed...) and it's as easy as any other system. Easier, in some cases. In about twenty minutes , I whipped up a very rough <a href="http://cvs.drupal.org/viewcvs/drupal/contributions/themes/mt/">'compatability theme'</a> that lets a Drupal site use CSS skins originally designed for Movable Type blogs. But making a theme that's visually stunning, cleanly designed, AND flexible enough to handle anything J. Random User installs into their Drupal build can be a pretty daunting task.

I suppose this post is both a defense of Drupal's relative deart of themes and a challenge. Should we simply resign ourselves to the fact that Drupal installs will either use simple CSS skins, or <a href="http://progressive.org/">elaborate</a> <a href="http://www.theonion.com/content/index">site-specific</a> layouts? How can we, the Drupal die-hards, figure out ways to make the 'middle ground' more approachable?
