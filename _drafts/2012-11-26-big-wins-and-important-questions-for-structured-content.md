---
layout: post
title: Big Wins and Important Questions for Structured Content
---

Last week, [NPR announced the release of a free WordPress plugin](http://www.digitalservices.npr.org/post/announcing-wordpress-npr-api-plugin) -- one that allows their affiliates to syndicate stories *and* contribute local content back to NPR using their much-discussed COPE API. The news may not dominate the holiday headlines, but it's a huge step forward for the structured content camp.

Most importantly, it demonstrates that up-front investments in channel-independent content models can pay off. They allow organizations to leverage new and niche platforms *without* gutting, rebuilding, jury-rigging their publishing infrastructure.

###Mobile opportunities and pitfalls
Almost two years ago, Karen McGrane and I started brainstorming for an upcoming talk at the Web Content Conference in Chicago: [*Making the Most of Mobile*](http://www.slideshare.net/duoconsulting/making-the-most-of-mobile). At the time, it felt difficult to speak confidently about the host of challenges surrounding the mobile transition. While Ethan Marcotte's ideas were gaining a lot of traction, his influential book [*Reponsive Web Design*](http://www.abookapart.com/products/responsive-web-design) had yet to be published. The dominance of iOS in web traffic had convinced many that a dektop site and a separately-managed iOS app would be the best way forward for content rich projects. Finally, many of the successful multi-channel publishing projects like NPR were young enough that drawing broad conclusions felt chancy.

Over Skype, rambly emails, and innumerable link-dumps, Karen and I started pooling lessons that we had been learning while working with clients, talking to peers, and philosophizing over drinks. The conclusions we came to felt tenative at the time, but most of them have borne out:

####The emergence of mobile and the shift in consumer/visitor usage patterns is only the latest in a long line of changes.
The rise of CD-ROMs, the emergence of consumer-oriented online services, the subsequent rise of the Internet, the browser wars, the emergence of social media, and other shifts have all presented similar choices to publishers and businesses. The important conclusion is that the transition to mobile is not the end of the line: **things won't stop changing,** and strategies that don't account for that ensure that today's expensive scramble will be repeated tomorrow.

####Unstructured blobs of content are a seductive trap.
Hand-written or WYSIWYG-generate HTML dumped into an ostensibly "flexible" CMS can undo the best-planned strategies. Carefully planning and structuring your content at the CMS level, with an eye towards future reuse rather than a particular year's visual refresh, is an important enabling step for techniques like responsive design.

####Leveraging new platforms and trends is prohibitively expensive without a centralized content repository.
Maintaining separate mobile and desktop versions of a web site is hard enough; publishing companies that develop completely separate print and tablet versions of their magazines are feeling a quadruple-crunch. Conde Naste has maintained separate creative and production pipelines for each channel since diving into the iPad magazine world, and they've recently [had to scale back](http://www.onemanandhisblog.com/archives/2012/11/magazines_on_tablets_publishers_painful.html). Their tablet magazines no longer support landscape mode due to the cost of the additional design work, and other publishers are questioning the feasibility of device-tailored publishing unless the numbers improve dramatically.

###Looking ahead
For the most part, these ideas turned out to be pretty solid. Karen McGrane pushed many of the ideas forward, and produced a much more comprehensive teaching session called [Adapting Ourselves to Adaptive Content](http://www.slideshare.net/KMcGrane/adapting-ourselves-to-adaptive-content-12133365) that's been delivered at a number of conferences. Karen's excellent new book, [*Content Strategy for Mobile*](http://www.abookapart.com/products/content-strategy-for-mobile), also provides a deeper, more nuanced argument for the shift away from device myopia towards structured content. Many current media, publishing, and accessibility success stories on the web revolve around these principles.

It's not all a celebration, though. More and more of us in the digital world are agreeing on these basic principles, but a number of key questions are still outstanding questions and new challenges are on the horizon.

####Will these techniques scale down to smaller organizations?
As William Gibson says, the future is already here -- it's just not very evenly distributed. Small local businesses, nonprofits facing budget pressure, and so on face different problems than the big publishing conglomerates that have helped clear the path for these new techniques. Better hobbyist-grade tools for modeling structured content, better starting points for domain-specific content models, and clear wins for businesses with less content *volume* are all necessary. If you're running a small restaraunt, mobile is important -- but ensuring Google knows your business hours and making sure that your menu doesn't fall out of sync on Yelp are far more pressing problems than making sure you're ready for set-top devices.

####Will web publishing tools 'grow up' into decoupled CMS's?
The vast majority of small to midsized organizations aren't using high-powered channel-agnostic CMSs; they're using web systems that have accumulated CMS functionality as they evolved. Over on his Gadgetopia blog, Deane Barker has [written extensively](http://gadgetopia.com/post/7119) [about the subtle pitfalls](http://gadgetopia.com/post/7206) that come with such systems; despite their flexibility, they were designed around the desktop web and privilege the desktop experience.

Some web tools are already bolting on APIs so that content creators can post and moderate via smartphone apps, but it remains to be seen whether that approach will make its way to the display and publishing side. If enough of today's the-web-is-good-enough businesses start thinking multichannel, a shakeout will come. Web-centric tools will either become decoupled hubs, or publishing endpoints for agnostic content repositories.

####Will breakpoint-oriented visual design collapse under its own weight?
[Device and screen-size proliferation](http://opensignal.com/reports/fragmentation.php) is already putting breakpoint-centric design under pressure; many of the designers I talk to say it's already hit the wall. We know that a host of silo'd, device-tailored designs can't be the answer, but maintaining dozens of subtly different visual designs in a cluster of CSS files isn't *that* much of an improvement.

API-oriented content systems like NPR's can ease the pain, but someone still has to build the endpoints. The skew towards iOS among mobile and tablet web visitors has led many large sites to focus on the iOS experience and hope for the best with everyone else, but history tells us that won't be a solution forever.

####How will we cope with the collapse of online ad rates?
The move to mobile isn't just difficult for technologists, designers, and content teams. It's giving the beancounters fits, as mobile ad rates have collapsed. Even Google's quarterly results have suffered as more and more traffic goes where it's harder to monetize. Deep integration of sponsored content, and a press towards richer advertising experiences on large sites, are likely. How will we avoid *that* turning into a rehash of the WYSIWYG tarpit?

###We live in interesting times
It's easy to feel overwhelmed looking at some of these questions, especially when advising a client on the right path forward. I think a lot of the conversations around these questions are already happening in small pockets and on forward-thinking projects; good, reusable answers just haven't filtered into many public conversations yet.

I'm looking forward to 2013 and beyond: it feels like we've hit a critical mass of people in our industry who understand the risks of status-quo responses to new devices and content channels. As my work at [Lullabot](http://lullabot.com) has begun to include more and more strategic planning with clients, rather than just development architecture, I've had a chance to focus more explicitly on some of these questions. It's a fascinating time to do digital work, and I'm extremely curious to see what kinds of answers our industry comes up with.