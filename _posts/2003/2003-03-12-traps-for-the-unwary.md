--- 
layout: post
lj_post: TRUE
title: Traps For the Unwary
tags: []

drupal_path: traps-for-the-unwary
drupal_nid: 1180
created: 1047480600
---
Geek Alert. If the words 'proxy chaches,' 'load balancing,' and 'ISP of the Beast' mean nothing to you, read no further.
<!--break-->
So at work we've been experiencing huge numbers of bizarre, random errors on the client's web site. Object references disappearing, critical session data vanishing, etc. It only occurs when load balancing between the two web servers, and it only appears when the user is on AOL. Clearly, something is afoot.

<a href="http://www.mcpmag.com/reviews/products/article.asp?EditorialsID=132">The problem, as it turns out, is frustrating but well documented.</a> AOL uses a maze of internal proxy servers to load balance its network traffic, ensuring that hojillions of users reading the latest news about J-Lo and Ben won't unduly impact Jimmy downloading cheat codes from GameSpot.com. Each time a user makes a connection to a remote server (to play Quake III, download software, view an image, read a web page, etc), the request first hits AOL's internal proxy server farm, then is spit into the outside world. As far as the AOL user is concerned, it's all fine and dandy. As far as the web server out on the Internet is concerned, however, every one of those requests is coming from a different IP address -- whichever AOL proxy server the user's request happened to be handled by.

This usually isn't a problem, since most games make a single connection and keep it open for the duration of the game. And most simple web sites could care less where a request is coming from as long as slashdot isn't linking to them. Even on more complex web servers that track session information between requests (say, the current contents of your shopping cart), it's generally not a problem since cookies are used to associate a user's request with the session it should tie into on the web server.

The problem arises when the web site is large enough that it needs to use multiple web servers and balance the load of incoming requests between them. The idea is, you share web traffic between multiple servers by looking at an incoming request and shuttling it off to the least-busy server. It's easier than buying infinitely faster and bigger and beefier machines every time your traffic spikes. Eventually, one machine just isn't enough. Of course, in some cases -- such as that shopping cart scenerio mentioned above -- you need to make sure that once a user hits the 'farm' of web servers, all of their subsequent requests go to the same server. This is very, very important. I can't stress how important this part is.

Most load balancing servers decide that a request is comingfrom an existing user by looking at the source IP address of the request. It's a natural assumption -- if a request comes in from 127.0.0.1 asking for your home page, and a minute later, another comes in from 127.0.0.1 asking for your product catalog page. Clearly, you'll assume that the requests are from the same user and assign them to the same server so that the user's shopping cart information will be preserved.

Now, remember that important bit about AOL and its maze of proxy servers?

Har. Har har. That's right. AOL uses an all-but-random source IP address every time a new request comes in. So there's no way for a simple load balancing box to understand that the request should be assigned to an existing session. End result? Random crashes, disappearing user logins, and friggin' weeks of troubleshooting. I feel dumb now, after Tony made the connection and we dug up the MSDN article explaining the problem, but geeeeeze.

What a mess.
