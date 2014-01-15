--- 
layout: post
title: Bing like a bee
drupal_path: 11/02/bing-bee
drupal_nid: 4
created: 1296626856
---
So, the gauntlet has been thrown down. <a href="http://searchengineland.com/google-bing-is-cheating-copying-our-search-results-62914">According to Google</a>, Microsoft's Bing search engine is secretly copying their search results. <a href="http://www.bing.com/community/site_blogs/b/search/archive/2011/02/01/thoughts-on-search-quality.aspx">According to Microsoft</a>, Google is totally paranoid and they were just <em>talking</em> to that chick at the bar, and it didn't mean anything.

In fact, Microsoft seems a bit testy about Google's approach to the issue: setting up honeypot search terms, "trapping" Bing mirroring the results, and so on. They say it was a cheap stunt worthy of a bad spy novel, but Google's not amused. I think they've got a good reason to be pissy, not because Microsoft violated some gentleman's agreement, but because the OS giant has finally figured out how to leverage its position in the OS and browser market to boost their in-house search engine.

According to Microsoft, Google's search results are mirrored in Bing's because Internet Explorer and the Bing search toolbar "collect information to improve their computing experience." That data includes the sites they visit, the links they click, and so on -- all sent back to Microsoft for analysis, all with Users' permission when they check the 'collect data' checkbox as they install the software. For those who need coffee, Google is <em>a site that those users visit,</em> and the search results they get on Google.com are <em>links that they click.</em> When IE and/or Bing Toolbar users run searches on Google and follow one of the resulting links, it becomes a data stream for Bing -- one of many, of course, but definitely a data stream.

Internally, Google has used tools like <a href="http://googleblog.blogspot.com/2008/11/searchwiki-make-search-your-own.html">SearchWiki</a> to let users customize <em>their own results</em>, and I believe that they've used their <em>own</em> clickthrough data in ways similar to Bing. If search users frequently click a particular link after searching for a subject, that link can get more weight for the search term. Google can track this information on its own searches using simple clickthrough scripts, just like any other site tracks metrics as users surf around the site hierarchy and follow links to leave. Microsoft, though, can watch the same clickstream via IE and/or the Bing toolbar, and they've admitted that they use the data in their index weighting.

At least in theory, for search terms with no good matches (like the gibberish text Google was using), any information gathered via this clickstream data mechanism would become the hottest source of ranking data for a particular gibberish phrase.

Collapsing down a lot of the details from the Google post and correlating it with what various Microsoft responses have said, the mechanism by which the "honeypot sting" worked is pretty straightforward.

1. Google notices that Bing "trails" Google search engine tweaks by a couple of weeks.
2. Google sets up the honeytraps by inserting false search results for a handful of gibberish phrases.
3. Google engineers then search on them and click through to the bad-match pages on machines running IE. By doing so, "user data" is gathered by Bing, associating the gibberish words with the badly matched results pages.
4. Because those gibberish phrases have no good matches on the Internet already, the incoming 'user behavior' data weights high in Bing's algorithm.
5. After a couple of weeks those gibberish phrases start generating the same matches on Bing that they do on Google.

The most interesting part of the whole affair is Microsoft's argument that they're not "spying on Google" at all -- they're just watching what IE and Bing Toolbar users do on the Internet, and using it to weight results. In doing so, yes, they're piggybacking on Google's clickstream data. In fact, they're able to piggyback on clickstream data for <en>any</em> search engine that IE or Bing Toolbar users try.

Think this through: it means that every search engine out there is feeding data to Bing as well. Google complains that Microsoft is cheating instead of competing on the algorithm front, but this process <em>is</em> Microsoft building an algorithm: an algorithm that pits search engines against each other and watches what results get the most clickthroughs. In that context, Google's heated response makes a lot of sense: they've realized that there is no way to avoid simply becoming input for Bing's meta-algorithm. There's no way for anyone to.

It'll be fuel for a few rounds of editorials, blog posts, and arguments, naturally. But there's another wrinkle that the snark in me finds intriguing. Presumably, Bing doesn't use clickthrough data on just any web site -- the results mattered more because they saw the clickthroughs occurring when people visited google.com. Google engineers made that happen by inserting the bogus results into their own index, and searching for them on their own machines using IE. Couldn't someone else do the same thing on a small scale using Firebug? Search on Google, use Firebug to add a bogus result to the search page, click on it in IE, and bam: you've seeded Bing's meta-algorithm with fake information. From there, it would be cake for a dedicated group of people to automate the process, using proxy servers to insert bogus links into Google results pages, and telling a group of volunteers to click the hell out of the bogus links.

Google might be annoyed that Microsoft is piggybacking on their clickstream, but with this set of accusations and the careful analysis it's triggering, they might have just handed 4chan the keys to Bing...
