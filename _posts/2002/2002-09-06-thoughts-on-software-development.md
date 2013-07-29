--- 
layout: post
lj_post: TRUE
title: Thoughts on software development
tags: []

drupal_path: thoughts-on-software-development
drupal_nid: 1004
created: 1031303400
---
Writing clean, effective, well-commented code makes me happy. It's a pain sometimes, because it takes more time. It also requires thinking through your algorithms enough to explain them to any programmer who might stumble across the code six months down the line.

Thinking things through to that level also requires understanding the code you write. I wonder if it comes as a shock to non-programmers (or confirmation to anyone who's used QuarkXPress) that a heck of a lot of software gets written without the programmer understanding how or why it works. I know I've written code like that, and I'm pretty sure every developer has at one time or another. Sometimes it's the only way to go: when you're dealing with a strange and badly documented API, for example, sometimes waving around a dead chicken is the only thing that makes your function work.

But I think everyone who's written code like that understands the inherent badness of it. That's why you see comments like:

<CODE>// This code is brutally ugly, rewrite it as soon as possible!!!
// Don't know why x must always be 5, but it only works this way...</CODE>

I remember a previous project that had, as best I can guess, almost a hundred man-years of coding invested in it. It was designed to handle the data warehousing, customer interfacing, and back-end invoicing tasks for a multinational chemical conglomerate. It was also one of the ugliest, scariest medusas of code ever. It taught me to loathe Oracle 8i to the very core of my being. (Obligatory Lou Quote: "HAH! It's working! Oracle, she's my bitch!")

One of the things that made it so difficult, though, is that there were huge portions of the system no one understood. It had been designed in an evolutionary fashion, so there were piles of years-old legacy code that had to be there for the system to work. A very small number of people on the project had knowledge dating back to that era, and they were like Ghods Among Men: they had a chance of understanding the *why* behind some of those baffling subsystems.

This leads me to the conclusion that creating efficient, operable code isn't a valuable skill in the long run. Class libraries, APIs, and the relentless march of automated code generation are all changing the ratio of grunt-coding work versus business logic and design. The result is that understanding, and the ability to clearly communicate what you understand to others, is going to become a more and more valuable skill in software development.

Perhaps this will end up changing the long-held (and often true) stereotype of the programmer as a reclusive genius who can't communicate with others.


<img src=http://www.sonystyle.com/images/250x250/shots/pcggrx560.jpg>

Oh, yes. I have a new laptop. Sony GRX560. I 0wnz0rz. w00t!
