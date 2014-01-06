--- 
layout: post
title: Dynamic and Multi-Step With Drupal's Form API
tags: 
- drupal
- formapi
- tutorial
drupal_path: dynamic-and-multi-step-with-drupals-form-api
drupal_nid: 454
created: 1156513867
---
The release of Drupal 4.7 introduced the Form API, a framework for building, displaying, validating, and processing HTML forms. With it, forms are defined as structured arrays, and those structured arrays contain all the information necessary to properly handle the form throughout its life cycle. This approach also makes it possible for modules to customize other forms (adding additional fields to a signup page, for example), and allows designers to customize the on-screen display of forms using overridable theming functions. It also makes validating form input, and avoiding form tampering, much easier. That's great!

The tradeoff of those enhancements was the loss of flexibility in certain complex scenerios -- in particular dynamic forms that change based on user input, and multi-step 'wizard' style forms. With the introduction of Form API 2.0 in version 4.8/5.0 of Drupal, though, we've eliminated the limitations that made those cases so difficult.

<H4>Dynamic Forms: Three Different Scenerios</H4>

For the purposes of this article, we'll be looking at three specific kinds of dynamic forms:

<ol>

<li>The Long Form, a large form divided into multiple steps for ease of use</li>

<li>The Wizard, a form where a user's answers in each step determine the options available in the next</li>

<li>The Form That Builds Itself, a page where some options (clicking 'add more choices' when setting up a poll, for example) add more fields until the user chooses to submit the 'finished product.'</li>

</ol>

While the first scenerio isn't really <i>dynamic</i> (it simply presents different subsets of options to the user at each step along the way), all of these scenerios work by changing the form depending on the data that the user has just submitted. And that means that all three scenerios encounter the same options in the current Form API. Why is that? Read on...<!--break-->

<H4>Form API 1.0</H4>

Now that we have a handle on the different kinds of forms we're dealing with, let's take a look at the current state of affairs with Drupal's form-building. It will help us understand where the problem lies.

<ol>

<li>Your page-building function is called.</li>

<li>It builds a form definition array.</li>

<li>It calls drupal_get_form($form_id, $form), passing in a unique ID for the form and the form's definition array.</li>

<li>drupal_get_form() first checks to see if there is incoming POST data. If there is, and the form_id in that POST data matches the $form_id you passed in, it knows that the user is submitting the form and begins the 'processing' stage.

<ol>

<li>In the processing stage, drupal_get_form() passes the form array to drupal_validate_form(). Any validation handlers added to specific fields are processed there.</li>

<li>If the validation stage completes and no errors are found, drupal_get_form() hands the form off to drupal_submit_form(). In that stage, data is processed, database changes are made, and so on.</li>

<li>drupal_submit_form() can return a URL to redirect the user to when form processing is done. If it does, drupal_get_form() redirects to that page and the Form API is finished.</li>

</ol></li>

<li>If there is no incoming POST data. the processing stage returned validation errors, or no redirect URL was returned by drupal_submit_form(), the form array is passed to drupal_render_form() and the actual HTML is generated.</li>

<li>Your page building function receives the generated HTML from drupal_get_form(), complete with hilighted errors if appropriate, and displays it to the user.</li>

<li>If the user enters in values (either filling them in for the first time, or correcting errors) and clicks the Submit button, the form submits to itself, triggering the page building function in step 1... And the cycle repeats.</li>

</ol>

<H4>The Problem With Dynamic Forms</H4>

That system works well for static forms: build the array, check for incoming POST values, validate, submit, and optionally render for display. Since a Form API form always submits to itself, the same definition array is used when first displaying the form, and validating it. Unless, that is, you need to display forms that change...

In that case, you run into the following problem:

<ol>

<li>Your page building function generates the 'starting point' for your dynamic form.</li>

<li>drupal_get_form() renders it, and displays it.</li>

<li>The user enters their choices and clicks submit.</li>

<li>Your page building function looks at the incoming POST values, and creates a form with new or additional options based on the user's choices.</li>

<li>Your page building function hands the form off to drupal_get_form()... but the fields it contains no longer match the values coming in from the user! Validation functions throw errors, and everything grinds to a halt.</li>

</ol>

What we really need to do is build <i>two</i> form definition arrays. The first should be a duplicate of the form from step 1, to use during the processing of incoming form values. The second should be the 'new' form from step 4, to display to the user if the first one passes validation.

<H4>Form API 2.0: The Solution</H4>

In Drupal 4.8/5.0, the freshly retooled Form API adds just that: the ability to process incoming values with one form array, while displaying a new form array for user input. Three changes make this possible.

<ol>

<li>Forms are now built by dedicated functions, and only the form's ID needs to be submitted to drupal_get_form().</li>

<li>These form building functions can accept parameters, like the node object to be edited or a collection of values representing the user's submitted data.</li>

<li>When a form submits to itself, drupal_get_form() can save the parameters used to build the form array. The next time it submits, it will re-use the stored parameters to recreate the first form for processing, <i>then</i> display the newly built form to the user.</li>

</ol>

The third item in that list is one of the most important: all you need to do is create your form building function, and drupal_get_form() will handle pulling up the right version of the form (one for processing, one for display) during each phase. Because this behavior is only necessary for some forms, drupal_get_form() only stores that information if the #multistep property is set to TRUE in your form definition array.

<H4>How to Handle the Three Scenerios</H4>

Let's step back for a moment. We now understand the cause of the problem in Form API 1.0: a mismatch between the user's submitted input, and the form array that's build based on it. We also understand how Form API 2.0 fixes that, allowing one form array to be used for processing and another for display. With that in mind, how can your module handle the three dynamic form scenerios outlined at the beginning of the article?

<H4>The Long Form</H4>

As with all of these scenerios, the real action will happen in your form building function. It will use hidden fields to indicate what 'stage' is currently being displayed, and to store the user input from previous stages. While this was theoretically possible using Form API 1.0, the new features make it much simpler. Here's an example of how your form-building code would look:

<pre>

function my_form($param1, $param2, $form_values = NULL) {

  // In a multistep form, drupal_get_form() will always

  // pass the incoming form values to you after any other

  // parameters that you specify manually. Do this instead

  // of looking at the incoming $_POST variable manually.

  if (!isset($form_values)) {

    $step = 1;

  }

  else {

    $step = $form_values['step'] + 1;

  }

  

  $form['step'] = array(

    '#type' => 'hidden',

    '#value' => $step,

  );

  switch ($step) {

    case 1:

      // Create the fields for the first step of your form here

      break;

    case 2:

      // First, add a hidden field for each of the incoming

      // form values.

      // Then, add the fields regular form fields that the user

      // will see in this second step.

      break;

    

    case 3:

      // And so on and so forth, until you've reached the final

      // step.

      break;

  }

  

  // This part is important!

  $form['#multistep'] = TRUE;

  $form['#redirect'] = FALSE;

  

  $form['submit'] = array(

    '#type' => 'submit',

  );

  return $form;

}

</pre>

In the validation code for your form, you can check the 'step' field to see which set of fields you need to check, and display any errors. The function will keep accumulating hidden values and displaying a new set of fields until it reaches the final step. You'll probably want to prevent your form submission handler from processing the form data until all the steps have been completed. To do that, something like this would be effective:

<pre>

function my_form_submit($form_id, $form_values) {

  $final_step = 10;

  

  if ($form_values['step'] == $final_step) {

    // Process the form here!

  }

}

</pre>

<H4>The Wizard</H4>

This scenerio, from a code perspective, is almost exactly the same as The Long Form. Depending on how your Wizard works, though, you may want to have your form submission handler actually process each step's data, rather than storing it as hidden fields in the next step. Or, you may want to process 'batches' of steps together before proceeding. For example:

<pre>

function my_form_submit($form_id, $form_values) {

  switch ($form_values['step']) {

    case 3:

      // Process the form data from steps 1, 2, and 3

      break;

    case 9:

      // Process the form data from steps 4 through 9

      break;

    case 10:

      // Process the form data from step 10, 

      break;

  }

}

</pre>

For very complex wizards, you may also want to split out individual steps as helper functions, but you'll still need to use the 'core' function as the central dispatcher. It's the one that the Form API knows to call automatically during the building and processing stages.

<H4>The Form That Builds Itself</H4>

The final scenerio is a bit trickier. Rather than dividing the form submission process into discrete steps, it involves a user making choices that continue to change the form (by adding new fields, in most cases) until they're happy with the results. How would we handle it?

In the example below, our hypothetical module is displaying a form that allows a user to create a quiz. Some fields, like the title and description of the quiz, will always be present. The first three slots for 'quiz questions' will always be available, too. But if the user selects the 'Give me more questions' checkbox, it will build the form with five more boxes.

<pre>

function my_form($param1, $param2, $form_values = NULL) {

  // Build the fields that stay the same from form to form...

  // And populate the default_values for each field with the

  // corresponding entry from $form_values

  $form['title'] = array(

    '#type' => 'textfield',

    '#title' => t('Quiz title'),

    '#default_value' => isset($form_values) ? $form_values['title'] : '',

  );

  // The current number of questions, plus three more if

  // the user requested them.

  if (isset($form_values)) {

    $question_count = $form_values['question_count'];

    

    if ($form_values['more_questions'] == 1) {

      $question_count = $question_count + 3;

    }

  }

  else {

    $question_count = 3;

  }

  

  $form['question_count'] = array(

    '#type' => 'hidden',

    '#value' => $question_count,

  );

  // We'll loop from 1 to n, where n is the current number of questions to

  // be displayed. We'll automatically populate each question with any data

  // that was entered in the previous trip through the form.

  for ($i = 1; $i <= $question_count; $i++) {

    $form['question_' . $i] = array(

      '#type' => 'textfield',

      '#title' => t('Question !count', array('!count' => $i)),

      '#default_value' => isset($form_values) ? $form_values['question_' . $i] : '',

    );

  }

  $form['more_questions'] = array(

    '#type' => 'checkbox',

    '#title' => t('Give me more questions'),

    '#return_value' => 1,

  );

  // This part is important!

  $form['#multistep'] = TRUE;

  $form['#redirect'] = FALSE;

  

  $form['submit'] = array(

    '#type' => 'submit',

  );

}

function myform_submit($form_id, $form_values) {

  if ($form_values['more_questions'] == 1) {

    // Don't process the form. We're rebuilding it with more question fields.

  }

  else {

    // Loop through all of the questions

    for ($i = 1; $i <= $form_values['question_count']; $i++) {

      $current_question = $form_values['question_' . $i];

      // Process $current_question

    }

  }

}

</pre>

The above code is a bit more complicated than the previous scenerios, but what it's trying to accomplish is pretty simple. When it first displays, it presents the user with a Title field and three empty question fields. It also has a hidden field storing the current number of questions, and a checkbox indicating that the user wants more options.

The form submission function checks to make sure that the user isn't in the process of adding more options before trying to process anything. When they finally submit <i>without</i> that checkbox selected, it loops through the list of question fields and saves each one individually.

<H4>The Wrapup</H4>

What have we learned? With the new features in Form API 2.0, it's possible to create forms that change each time a user submits them, validating as they go, and processing the results at arbitrary points along the way. There are different approaches to this task, depending on what kind of user interface your form requires, but most depend on storing information about the form in hidden fields, and using it to control how the next step is built.

Large, complex forms can lead to large, complex code. If you run into challenges, or can't get something working, remember to break it down into pieces and trace your way through the Form API workflow. Make sure you're doing the right thing at the right time, and that the values you expect to be getting in your builder function are arriving properly.

Happy coding!
