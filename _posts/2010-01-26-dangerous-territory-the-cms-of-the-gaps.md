--- 
layout: post
title: "Dangerous Territory: The CMS of the Gaps"
tags: []

drupal_path: dangerous-territory-the-cms-of-the-gaps
drupal_nid: 2028
created: 1264571990
---
One of the recurring discussions in the Drupal community these days revolves around the issue of specialization. Today, Drupal's core download ships as a sort of generic "anything-builder."



What does that mean? Drupal has tools to create things like multi-user blogs, discussion forums, documentation archives, and so on. Thousands of additional plugins can add additional features, but by default the user experience of Drupal is pretty generic. On one level, that's a real strength: the flexibility that the 'generic' approach forces on the developer community means that lots of solutions can be built on top of Drupal. The downside is that those solutions <em>have to be built on top of Drupal.</em>

<!--break-->

<h3>The alternatives</h3>

Contrast that with specialized, focused tools that are tailored for a particular use case. <a href="http://opentape.fm/">OpenTape</a> is a turnkey tool for setting up web-streamable music playlists. That's all it does, and it does it really really well. <a href="http://wordpress.org">WordPress?</a> Its biggest strength lies in the relentless focus on improving the blogging experience, baking in specific features that single and multi-user blogs require, and leaving the rest as an exercise for the tinkerers. <a href="http://moodle.org">Moodle</a> is an educational tool that inspires wails of pain from my developer friends. But it's successful because it delivers tailored functionality for classrooms that would otherwise take a <em>pile</em> of work in more generic tools.



On the opposite side of the spectrum lie dedicated frameworks like Django, Rails, Cake PHP, and so on. These are tools for individuals or teams that don't want assumptions about <em>workflow</em> and <em>database schemas</em> -- they want control, and they don't want to worry about working around someone else's crap ideas. For those teams, choosing an existing piece of software is about maximizing the amount of work that is already done, while minimizing the work-arounds they'll have to perform to circumvent a framework's assumptions.



<h3>Enter the heretic</h3>

I've made waves in the Drupal community for pointing people to those different tools, recommending them in favor of Drupal when I think it's appropriate. To me, it's an indication of a troubling blind spot in the community.



For the first category of software (specialized tools) the argument is often made that they lack Drupal's flexibility, scalability, or robustness. That may be true, but for someone who needs <em>a blog</em> or <em>a playlist streaming tool</em> and so on and so forth, the hypothetical benefits of Drupal are vastly outweighed by the work they would put into assembling the tailored tool they desire out of Drupal's building blocks. If I have to spend two months of my life learning Drupal, and the big payoff is being able to sort my blog posts in <em>reverse</em> chronological order, why not just use Wordpress?



For the second category of software (low level frameworks) the argument is inverted: why spend all the time implementing features on top of a framework when Views is there? (Insert Organic Groups, UberCart, FormAPI, CCK, or any other popular Drupal tool.) The answer is obvious if we're willing to look at things from the other side. While Drupal is more flexible than a tool like Wordpress, it's <em>less</em> flexible than something like Django. It offers more functionality out of the box, but also bakes in a laundry list of assumptions that don't exist in pure frameworks. If building your web app in Drupal means working around the assumptions of Drupal core, implementing dozens of custom modules and sidestepping common patterns... why not just write it in straight PHP, or some other lower-level framework?



Today, the answer for Drupal is easy. If you're trying to roll some new and novel combination of functionality into a custom site, and the assumptions inherent in Drupal core are a reasonable match your workflow and requirements... go for it! If you have to do <em>too much</em> customization, though... you might as well use a dedicated framework that will give you more flexibility. And if a dedicated, use-case tailored tool emerges to do what you're trying to accomplish? Odds are, it will meet your needs better. That spells danger.



<h3>And now, let's talk religion</h3>

In arguments between Christians and Atheists (always a popular staple on the Internet), there's a catch phrase that gets tossed around: <em>The God Of The Gaps.</em>



It's shorthand for a complicated idea, and the rebuttals that go along with it. God, some might say, is evidenced by all of the things we don't understand in the world. It's a quick, tempting answer to the challenges of unbelievers: after all, <em>their</em> beliefs can't explain how geckos stick to ceilings, or where love comes from! But the increasing reach of human knowledge, others argue, shrinks that pool of mystery every day. New mysteries may emerge, but relegating God to those "gaps" in human knowledge is a losing game. Over the long term the domain of His influence in human affairs will shrink and shrink to exotic, esoteric subjects that few even care about.



That's the danger of The God of the Gaps: it is a tempting rhetorical escape that works in the short term. Over time, though, as knowledge expands, (or in the case of software, as new specialized tools emerge...) the argument undercuts itself. Now, a skeptic says, we <em>do</em> understand that mystery, so there's no need for hand-waving. Extending the analogy, imagine that a specialized tool <em>does</em> emerge for some use case that previously required a custom solution! Why bother with the mystery of faith (or the generic nature of Drupal)?



A fine question indeed. Solving the issues of faith, mystery, and belief are above my pay grade. When it comes to Drupal, though, I see a profound danger in assuming that the software will always thrive as "The CMS of the Gaps."



<h3>Another way forward</h3>

For quite a few months I've been talking enthusiastically about a couple of initiatives in the Drupal community. One is <a href="http://smallcore.org">SmallCore</a>, a loose affiliation of developers working to ensure Drupal makes fewer assumptions, and offloads more of the user-facing workflow and presentation decisions to custom-tailored tools. Other fun projects like Features allow developers to bundle up configuration and code into packages that can be easily re-used by site builders. Nerd toys like Aegir and Drush  allow devs to manage their projects better. And advances like pre-packaged Drupal Install Profiles allow tailored tools to be built with Drupal -- <em>then distributed as turnkey solutions</em> rather than long series of blog posts on "How to build X in Drupal."



On the flip side, I've also expressed deep concern about certain aspects of Drupal 7 and the #d7ux project, intended to make Drupal's user interface slicker and more polished. Why? A lot of the attention went towards making Drupal a better <em>generic tool</em> for <em>generic users</em>. It's easy to arrive at the worst of all worlds with that approach, baking in lots of assumptions but refusing to commit to a single kind of problem to solve.



The common thread connecting all of those interests and concerns is concern about <em>the gaps.</em> By working towards a world where Drupal's useful framework chunks (like FormAPI, session management, URL routing, localization, and so on) can be re-used cleanly, we allow teams that would otherwise jump to a framework to take what they want from Drupal and ignore the unecessary stuff. By separating the underlying nerd-tools from the tailored stuff on top, we ensure that the focus on one use case doesn't screw over every <em>other</em> use case. And finally, by providing tools for packaging, distributing, and maintaining pre-customized distributions of Drupal, we ensure that end users can <em>treat it</em> like a specialized tool, rather than a box of parts with cryptic assembly instructions.



<h3>Not all puppies and ponies</h3>

There are dangers, of course. It's possible that Drupal developers could just nerd out, and the hoped-for "focused solutions" remain vaporware. Tools like Open Atrium and Managing News (an intranet management tool, and a news feed monitoring tool) are both built in Drupal, but they took lots of work. It remains to be seen whether smaller teams and less focused will be able to deliver equivalent results.



But the alternative is (in my eyes) just as dangerous: Drupal as "the tool you use when a better tool doesn't exist"... AKA, the CMS of the Gaps. Today, Drupal is thriving. Tomorrow, as the reach of the web publishing continues to grow, specialized tools could easily undercut its advantages. Are we, as a community, ready to tackle challenges more subtle than feature lists? I think we are -- and I hope others agree.
