--- 
layout: post
title: Drupal gets an installer!
tags: 
- drupal
- nirvana
drupal_path: drupal-gets-an-installer
drupal_nid: 447
created: 1152798361
---
Let's be honest: I drank the Drupal Kool-Aid a long time ago. I don't have to tell people I think it's awesome; they assume that from the way I won't shut up about taxonomies and hooks and... well. You know.

One of Drupal's main shortcomings, though, has always been its lack of an easy to use installer for those uncomfortable with command-line twiddling, manual editing of config files, and so on. It's no big deal for the hardcore hackers and consultants, but for Joe Blogger, it's a real issue.

Well.

It <i>was.</i> After a year or so of slow-cooking, a month or so of serious rewriting, and a few days of scrambling, a monster patch by a host of developers finally hit core: <a href="http://drupal.org/node/68926">The Drupal Installer.</a> 

There are lots of subtle implications -- targeted customized versions of Drupal can now be packaged up as installable 'profiles', for example. Individual modules, like profile and aggregator, won't bother installing their database tables until you actually ENABLE the modules -- putting them on equal footing with third-party drupal modules and simplifying the task of creating a stripped-down Drupal installation for development. The installer itself is very bare-bones: it concentrates on <i>getting the database working</i>, then hands off responsibility for any usr-friendly wizard screens to the normal Drupal system, a decision that makes a lot of sense IMO.

But the technical details are just geekery. Right now, it's time to bask in the joy of good code. The installer! It lives! Chx wears a Druplicon t-shirt! Children laugh and play! Cats and dogs live together in harmony! The world is good!
