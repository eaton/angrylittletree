--- 
layout: post
title: At long last, love for the multipart forms
tags: 
- drupal
- formapi
drupal_path: at-long-last-love-for-the-multipart-forms
drupal_nid: 453
created: 1156230483
---
<b>UPDATE: The patch has been committed. Check out <a href="http://jeff.viapositiva.net/drupal/dynamic-forms">my latest post</a> for a first draft of the docs on how to use it.</b>



About two weeks ago I posted an epic tome explaining the current state of affairs with Drupal's form workflow, and how it affected attampts to build dynamic multi-step forms.



As we learned in that thrilling chapter of Jeff-Talks-About-Geeky-Stuff, building a form dynamically is no problem -- the tricky bit is making sure that the values from step 1 are validated and submitted with the form array from step 1, rather than the array from step 2.



Well, a lot has changed in the past two weeks. Not the least of which is <a href="http://drupal.org/node/77919">the major FormAPI patch</a> that changed things from a 'push' model to a 'pull' model. That was interesting, and had the nice side benefit of making programmatically-submitted forms a reality. Now, though, we're ready for the real multistep FormAPI meat.



<a href="http://drupal.org/node/79937">A new patch has just been posted</a> that allows Drupal to keep track of the 'which values go with which form' tangle. The details are explained in that issue, but it's the culmination of quite a bit of hacking, troubleshooting, and brainstorming by Adrian, chx, and myself. I've only been along for the ride most of the time, but it's been very exciting to see it come together.
