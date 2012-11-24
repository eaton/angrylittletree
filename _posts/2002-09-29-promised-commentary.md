--- 
layout: post
lj_post: TRUE
title: promised commentary
tags: []

drupal_path: promised-commentary
drupal_nid: 1014
created: 1033299780
---
<lj-cut text="run away! run away!">

<a href="http://jennafish.livejournal.com">jennafish</a> this one's for you: A french dwarf has <A HREF="http://news.bbc.co.uk/2/hi/europe/2285348.stm">protested the country's ban on the sport of dwarf-tossing</A>. apparently he made his living being thrown around disco's and nightclubs... sadly, the un human rights commission has intervened and upheld the ban. according to the article, "she stuntman wears a crash helmet and padded clothing which has handles on the back." the bit that comes to me now is, "someone has to manufacture those articles of clothing." what must the market be like for padded-clothes-with-tossing-handles?

regarding the mail order filipino brides business. no, things aren't that bad. i may be single and depressed, but it would take a lot more than that to make me turn to importing strangers. now, if amazon.com offered brides with free shipping, i'd have to think about it. their recommendation service just emailed me to mention a new thievery corporation cd that's coming out in october. if it's smart enough to realize that i like thievery corporation without me explicitly saying so, then by golly... let's get that puppy setting up some dates!

mental note: tired and exhausted, baaaad time to see people that you have emotional issues with. mental note two: ani double discs... baaaaaaad idea when you're depressed. mental note three: one hour photo. baaaaad movie to watch when you're already contemplating the fucked up future of your life.

mmmmm. fun.

on the plus side, the software architecture that i'm always rambling about is nearing its first alpha release. the idea for spring (name of said architecture) started about a year or two ago when i was trying to put together a message board system for my web site. the problem i encountered was threefold:

<ul>
<li>building my own message board system was time consuming</li>
<li>existing message board systems were too basic (more of a student exercise than a working system)</li>
<li>robust message board systems were too brittle. i.e., they forced a certain layout or structure, and changing them required hacking the system to the point that starting from scratch looked easy.
</ul>

so i came up with a plan. create a framework for interactive web sites that provided a flexible foundation for development, but made as few assumptions as possible about the final system that it would be used in. provide the midleware skeleton for account management, content administration, and so on, but divorce it completely from the ui and provide lots of hooks for developers to enhance the system or build their own custom implementations. the dersign goal would be to make that customization as painless as possible.

thus, spring was born.

when microsoft's .net tools hit the streets, i started working seriously on it and it's starting to come to fruition. an alpha release of the framework is almost ready, with database access, user account handling, role and identity based permissions for content, message moderation... all sorts of niftiness. still, it's made with the assumption that end-users will build onto it to implement the system that fits their needs.

so yeah. i'm stoked.

whee!
