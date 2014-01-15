--- 
layout: post
title: At what price, progress?
tags: 
- drupal
drupal_path: at-what-price-progress
drupal_nid: 462
created: 1160629987
---
...Pretty cheap, as it turns out.

Perhaps I'm stretching it, but after porting a handful of modules (VotingAPI, Actions, Links...) to the updated Drupal 5.0 APIs, it doesn't look like things will be too tough for most modules.

Messing around with amazon_tools.module proved more difficult. Its node forms and settings were cake, but the  Amazon Search form is a complicated beast with nested form definition code and a lot of reliance on direct access to $_POST variables. Forms like that will probably require significant retooling to work well under the new Form API 2.0. Most other form building code, however, will work with just a line or two of tweaking.

If you're a Drupal module developer, here are some early warning signs to look for as you contemplate the 5.0 upgrade process:

<ol><li><b>You have a single function that builds a page, builds a form, and processes $_POST variables when the form is submitted.</b><br/>This is old-school workflow from the Drupal 4.6 days, before we had FormAPI. It's <i>possible</i> to make this work under 4.7, but it misses out on a lot of FormAPI's validation and processing functionality. In Drupal 5.0, maintaining this kind of code is more trouble than it's worth. The best practice is to put your form definition code in one function, your form validation code in another, and your processing code in a third function.</li>

<li><b>You have code that checks $_POST['edit'] directly and acts on that data.</b><br/>In Drupal 4.7, checking $_POST['op'] was the only way to see what form button had been clicked -- that value is now stored in $form_values['op'], so you don't need to check $_POST manually. This is important, because Drupal 5.0 allows modules to build form data and submit it programmatically, without ever making a round-trip throug the browser. In those scenerios, $_POST will never be populated and your code will fail. Instead, rely on $form_values in your validation and submit handlers.</li>

<li><b>Your form submits to itself repeatedly, adding new form elements based on user input and dynamically building fields until it's ready for final submission</b><br/>This scenerio is complicated no matter how you cut it, and if you find yourself grappling with it your name is almost certainly Earl. In 4.7, it required extensive use of little-documented functions like form_builder(). In 5.0, however, there's a new #multistep flag you can set on your form that makes this stuff a lot easier. I posted a long-ish overview of how 5.0 handles this scenerio <a href="http://jeff.viapositiva.net/drupal/dynamic-forms">a few weeks ago.</a></li></ol>

There are other pitfalls, obviously, but those three are good indicators that form handling code will need some major retooling for 5.0. The new approaches aren't horribly complicated -- the just make a handful of older hacks obsolete.
