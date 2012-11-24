--- 
layout: post
lj_post: TRUE
title: The Verb's Top Ten Random ASP.Net Lessons Learned The Hard Way
tags: []

drupal_path: the-verbs-top-ten-random-asp-net-lessons-learned-the-hard-way
drupal_nid: 1103
created: 1042114920
---
<ol>
<li>ASP.Net is not 'Code in HTML.' It's code with an HTML presentation layer. If you confuse the two, you're in for a world of hurt.</li>
<li>Learn the page event model. Love it. Know it. You'll thank yourself later.</li>
<li>Don't reinvent the wheel. The .Net framework is there for a reason, and chances are they've already written a good chunk of your code for you.</li>
<li>Learn about OOP. If you don't understand inheritance and basic design patterns, you'll be baffled by some of the design decisions inherent in ASP.Net.</li>
<li>User Controls are not include files. Period. If you treat them as such, you <b>will</b> regret it.</li>
<li>Don't code controls that depend on custom page classes. Sure, you <b>can</b>. But your code will be riddled with stuff like:  CType(Page, MyCustomPageClass).MyCustomFunction(). If you really, really need to? Make a custom control class that overrides the Page property. That's what inheritance is about, remember?</li>
<li>If you're building your page contents dynamically every time it loads, be very, very, very careful about viewstate and postback. It might be worth it to kill the Viewstate and manage it yourself.</li>
<li>Learn ADO.Net. Really, really learn it. Pick up a good book and dedicate a weekend or two to it. ADO.Net is more flexible, but very scary if you're used to Connection->Recordset->Html hacking.</li>
<li>Use Tracing.</li>
<li>Did I mention that you should use tracing?</li>
</ol>
