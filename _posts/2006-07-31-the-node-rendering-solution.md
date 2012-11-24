--- 
layout: post
title: The node rendering solution
tags: 
- drupal
- geekery
- patches
drupal_path: the-node-rendering-solution
drupal_nid: 449
created: 1154326947
---
To those who aren't drupal geeks, I apologize. The last run of blog posts has been... well... Terribly Drupally. And unfortunately, that's not going to change for a bit. There's lots of fun stuff to blog about, and Catherine and I are having adventures, but right now it's getting close to Drupal's autumn code freeze and it's time to get geekier. So without further ado, the solution to the node rendering connundrum presented in my last post.



In it, I outlined the problems with the current node_view() system and nodeapi's 'view' operation. Like the old pre-Drupal-4.7 form building functions, it slaps together HTML chunks and spits out a big one. Dealing with things on a more granular level just isn't possible. This makes things a hassle for themers, and completely breaks certain modules (like the popular inline) when themers try to work around it.



Fortunately, the solution that we built for form rendering in version 4.7 is <i>also</i> the solution for node content. It might not be obvious, but our form rendering infrastructure is really designed to operate on <i>any</i> kind of content stored in nested structured arrays. The bits of data can describe file attachments and recipe ingredients just as easily as radio buttons and dropdown boxes, our core rendering function just eats the arrays up, calls the specified theming functions, and spits them out. Adrian and the other FormAPI gurus designed it with generalized content-rendering in mind, but weren't able to get those features into core in time for 4.7.



<a href="http://drupal.org/node/74326">Well, now it's time: there's a patch available for review that changes the node module to use intelligently structured arrays for its content rendering.</a>



How does it work? Moshe from #drupal asked me to blog a bit about it, so... here goes. <!--break-->The first step is sidestepping the much-abused $body and $teaser attributes of the node object. This patch uses $node->content to store the structured array. (Later in the process, its data will be rendered into $body and $teaser.)



Today, modules that expose their own node types can implement hook_view() to construct a custom $body and $teaser. If they don't, the default node_prepare() function is called. With this patch, instead they start putting new elements into $node->content. For example:

<pre>

function mymodule_view($node, $teaser) {

  if ($teaser) {

    $node->body .= $my_custom_stuff;

  }

}

</pre>

...Becomes the following:

<pre>

function mymodule_view($node, $teaser) {

  if (!$teaser) {

    $additions['mystuff'] = array(

      '#type' => 'markup',

      '#value' => $my_custom_stuff,

    );

    return $additions;

  }

}

</pre>

And... voila. It's a little bit more complicated, mostly because the original example is an artificially simple one-line function. But the style of the new approach should be obvious to anyone who's used Drupal's FormAPI. A keyed array with a #type element indicating what the content is, and #value content indicating its contents.



The same changes apply to hook_nodeapi's view operation. Rather than modifying $node directly, modules will return a structured array with the additions they want to make. If they want to over-write existing parts of the $content data, they can just name their own data with the same key.



That's it, really.



What does it gain for us? Quite a bit, thanks to the huge amount of work that's already gone into the rendering work for FormAPI.  In addition to #type and #value, other famliar FormAPI element tags apply, as well: #weight allows you to change a chunk's position in the node's content array, #theme allows you to specify what function should be used to render it into HTML, and so on. Like FormAPI, this system supports nesting of elements. The Recipe module, for example, could do this:

<pre>

function recipe_view($node, $teaser) {

  $content = array();

  $content['cook_time'] = array(

    '#type' => 'markup',

    '#value' => $node->cooktime,

    '#weight' => -1,

  );

  $content['main'] = array(

    '#type' => 'markup',

    '#value' => $teaser ? $node->teaser : $node->body,

  );



  if (!$teaser) {

    $content['recipe']['instructions'] = array(

      '#type' => '#markup',

      '#value' => $node->instructions,

    );

    $content['recipe']['ingredients'] = array(

      '#type' => '#recipe_ingredients',

      '#value' => recipe_get_ingredients_array($node->nid),

    );

    $content['recipe']['#weight'] = 10;

  }

  return $content;

}

</pre>

Thanks to the magic of formAPI, the above snippet would produce a structured array that includes the node's body (or teaser, depending on how it's being viewed) with the cooking time *above* it. Below the node's main body would be the recipe instructions, and the recipe ingredients. Because the recipe's ingredients specify a type of #recipe_ingredients rather than #markup, that chunk of the array will be passed off to theme('recipe_ingredients') when it comes time to render.



Modules that implement nodeapi's view operation can then insert their own elements into the mix -- using #weight proprties to control where they want things to appear, rather than simply jamming them onto $body.



Modules that want to muck with things <i>after</i> the entire content array has been built can then implement hook_node_content_alter() and rearrange, alter, remove, or edit things however they'd like. Because the recipe module defined its 'instructions' and 'ingredients' elements as children of the 'recipe' element, they won't be accidentally separated from each other if a different module messes around with ordering. It's like FormAPI -- but for nodes.



Finally, (again, here's where it's spiffy) themers that want very fine-grain control over the appearance of nodes can still dip into the data in $node->content[] to print individual chunks wherever they'd like in the final HTML output. 



One of the benefits that FormAPI brings to form rendering is the ability to use custom flags and elements in the structured arrays to trigger special behavior and control rendering, etc. #after_build is one such flag for the Forms system -- it's used to automatically expand a single 'radios' widget into multiple discrete radio buttons before rendering. This patch opens up the same opportunities for node building and rendering: there's now an easy and well-tested subsystem for hooking in custom behaviours.



Dopry and I were chatting on #drupal about the possibilities for an #after_render flag that would allow modules like inline to post-process the fully rendered body of the node for key substitution, etc. That's not in the present version of the patch, but it's coming shortly. In addition, it makes it pretty straightforward for themers to say, "I'll print out the normal contents of the node *except for this particular item,* and put that in a sidebar block," without thrashing through multiple calls to node_view, preg_matching on node contents, and so on and so forth.



Performance also needs some attention -- although my very quick tests on a sample site with a few hundred nodes didn't reveal any show stoppers, it needs more benchmarking. The biggest opportunities for optimization, though, lie in the central rendering functions. And any improvements we make there give us benefits for the entire form system, as well.



It's a great opportunitiy to leverage the previous work that was done in 4.7, and extend it to open up huge new opportunities. If you're interested, please drop by <a href="http://drupal.org/node/74326">http://drupal.org/node/74326</a> and join the fun.
