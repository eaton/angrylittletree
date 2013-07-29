--- 
layout: post
title: Amazon fail, Internet fail
tags: 
- twitter
- outrage
- nerdrage
- amazonfail
- amazon
drupal_path: amazon-fail-internet-fail
drupal_nid: 1990
created: 1239768626
---
This weekend, <a href="http://search.twitter.com/search?q=%23amazonfail">social networks</a> and <a href="http://community.livejournal.com/meta_writer/11992.html">blogs</a> started buzzing with news that <a href="http://markprobst.livejournal.com/15293.html">Amazon.com had removed all books for and about gays and lesbians</a> from its web site. <a href="http://twitter.com/neilhimself/status/1503707181">Neil Gaiman tweeted about it,</a> bloggers <a href="http://www.smartbitchestrashybooks.com/index.php/weblog/comments/amazon-rank/">organized google-bombing campaigns</a>, pitchforks were lifted, and torches lit. On Easter weekend, #amazonfail was a more popular topic on Twitter than Easter, Jesus, or Bacon. That says a lot.



Details were messier than 140 character chain-tweets implied, though. The titles hadn't been removed, they'd just been marked as "adult" -- a designation that hides a book's sales rank and hides it from normal site-wide searches. Results were inconsistent: some gay-positive childrens books showed up on searches, E-books versions of the hidden titles were still visible, and international sites like Amazon.co.uk seemed unaffected.



The shocking part was that books like Ellen Degeneres' biography and Augusten Burroughs' <em>Running With Scissors</em> had been classified as porn while Playboy's Centerfold Collection hadn't. Even more galling, evangelical books with titles like "How to Protect Your Kids From Turning Gay" were showing up as top results for product searches on 'Homosexuality.' Some people speculated that it was <a href="http://tehdely.livejournal.com/88823.html">a massive troll</a>, and one <a href="http://community.livejournal.com/brutal_honesty/3168992.html">notorious griefer claimed credit</a> for it. During the chaotic weekend, email inquiries to Amazon were met with form mail about its "Adult Content" policy. That just fanned the fires and implied that 'Gay Author == Porn' was Amazon's official policy.



Some folks said they were "hoping it was just a technical error," but lots of arguments quickly circulated about how it <em>couldn't possibly be.</em> Lots of people argued that there was <em>no way</em> that such a targeted hiding of books could be accidental.



I was ready to forward the boycott call to friends, but as I was about to hit return I noticed someone on MeFi talking about the Kindle versions of hidden books still being visible. That started a domino-chain of memories in my nerd hindbrain: as the developer of <a href="http://drupal.org/project/amazon">Drupal's Amazon Ecommerce API</a> module, I spent a stupid amount of time mucking around with Amazon product metadata, and remembered that Kindle items are stored in a separate index. They're easy to get at if you're trying, but separate enough that some kinds of bulk operations have to be done twice: once for books and once for Kindle products. Operations like, say, bulk searching. Or perhaps internal bulk updates. Hmmmmm... That, in turn, brought back terrible memories of the times I worked on giant grocery chain data management applications. On occasion subtle bugs had resulted in, say, bottles of champagne ringing up $100 cheaper than they should have on New Years Eve. Such strange, targeted discounts seemed implausible, but frantic midnight debugging almost always revealed a combination of old, inconsistent data and new, assumption-riddled code. Hmmmmmmm...



As it turned out, it <a href="http://slog.thestranger.com/slog/archives/2009/04/13/re-amazon-and-the-gay-french-glitch-mike-daisey-responds"><em>was</em> a programming error.</a> On top of that, it was a massive, monumental, profound PR clusterfuck: by the time Amazon had a <a href="http://blog.seattlepi.com/amazon/archives/166329.asp">half-baked statement</a> ready to hand to a Seattle area newspaper, the <a href="http://latimesblogs.latimes.com/jacketcopy/2009/04/amazon-deranks-gayfriendly-books-the-twitterverse-notices.html">LA Times</a> and the <a href="http://news.yahoo.com/s/ap/20090413/ap_on_en_ot/books_amazon">Associated Press</a> were covering it, <a href="http://gawker.com/5209136/these-books-too-gay-for-amazon?skyline=true&s=x">gossip blogs were dishing</a>, and <a href="http://blogout.justout.com/?p=7412">mass boycotts had been organized.</a> Online <a href="http://www.metafilter.com/80791/AmazonFAIL">discussions about rumors about the cause</a> were being <a href="http://www.dailykos.com/storyonly/2009/4/13/125529/842">cited on other news sites</a>. Even now, a lot of people are insisting that the 'glitch' story is just a cover-up for a failed attempt at censorship.



As the dust settles it's becoming clearer that the "Easter Fail" was a perfect storm. A months-old Amazon policy about adult content, a terrible customer service system, a massively tangled 14 year old database of products metadata, and a culture of small isolated programming teams all collided. The result? Someone mistakenly flagged about 50,000 products in various gender and sexuality categories as 'adult' and no one at Amazon noticed the firestorm until it was too late. Worse, they didn't communicate clearly what was going on while the Internet speculated. The data problems are being fixed, but the reputation damage is done and #amazonfail is now a cautionary tale for PR people everywhere. Don't take vacations, don't sleep, and for the love of God, have a trusted public channel that you can use to say, "Whoops! Don't know what happened, we're fixing it" the minute something bad happens.



There's a lesson in it for the Internet pitchfork crowd, too. Like the #savejon hoax that hit the fan a couple of weeks ago, #amazonfail was about a fundamental lack of information blossoming into speculation and outrage in the blink of an eye. Even worse, when new information came in, a lot of people actively argued against it because it didn't fit the original frame they'd accepted for the story.



Even more frustrating for me was the elaborate speculation about Amazon's technical setup by people who admitted they no idea how Amazon's data and infrastructure worked. Suspicion and anger is understandable, but if you don't know anything about the technical details of a system, <em>making up stories about how it works</em> and using those stories to confirm your worst suspicions is a recipe for fail. I saw people do just that -- deciding that LGBT content had been "filtered," and explaining to others how "filters" work without any understanding of Amazon's tremendously complex and chaotic product meta data.



Twitter and other social networks can disseminate information <em>fast.</em> We've seen social networks break news about disasters and revolutions. Now, we're seeing the first large-scale Twitter Rumors turn into instant public controversies. If distributed, digital media is to evolve into a replacement for slower "traditional" journalism, something needs to change. Social standards for differentiating 'rumor' and 'leads' from 'researched speculation' and 'established fact' will have to emerge. Without those standards we'll be slaves to the latest outrage, real or manufactured.



<em>Update: @dylanw has an excellent summary of the issues involved in <a href="http://www.metafilter.com/80791/AmazonFAIL#2527842">this MeFi comment.</a></em>
