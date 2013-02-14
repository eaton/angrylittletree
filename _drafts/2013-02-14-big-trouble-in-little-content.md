title:Big trouble in little content
summary:Writing engaging, reusable microcontent is tricky business. Whether you need titles, tweets, or summaries, consider the destination channels and the workflow.
layout:post
destination:Probablty lullabot.com, I need to figure out what I blog about versus what I write about professionally. First world problems.
---
Writing short bits of user-facing text -- [microcontent](http://www.nngroup.com/articles/microcontent-how-to-write-headlines-page-titles-and-subject-lines/) -- is no picnic. Coming up with a punchy, attention-grabbing tweet is tough enough; writing a memorable 50 character title for a breaking news story can stress out even a creative wordsmith. It's like the writer's equivalent of [Fitts's Law](http://en.wikipedia.org/wiki/Fitts's_law): the smaller the target, the narrower the margin for error. In heavy-duty, reuse-oriented publishing systems, it's common practice to save several variations of an article's title and summary text. That gives writers some breathing room in more forgiving display contexts, but ensures they don't blow past hard limits for the short stuff.

We're currently working with a client on the nitty-gritty details of their new content model, and we're trying to iron out the best mix of fields to provide flexibility without overloading content authors. How many variations are enough? Karen McGrane's advice is simple and to the point: "As many as the writers will fill out, but no more." We plan to do some experiments with simple prototype interfaces to see what they're comfortable with, but before proceeding I did a quick review of the microcontent landscape to better understand the constraints of popular formats and channels.

From longest to shortest, here's the rundown:

- App.net post: **256** chars
- Twitter card summary text: **200** chars
- Facebook og:description text: **160** chars
- Google page description: **155** chars
- Tweet: **140** chars
- Tweet with link: **116** chars
- Subject line in iOS Mail.app: **45** chars

Other than the sharp 70 character dropoff between a tweet and and email subject line, there's no easy boundary line between short and middlin', but we can defintely see where we'll run into some constraints We need *something* that won't be cut off when sending out email alerts, we want to be able to fit *some* kind of descriptive text into a tweet along with a link, and we need to squeeze extra text in for stuff like Google search results and Facebook link sharing.

### So, how's NPR do it?
When analyzing how organizations currently handle this stuff, NPR's [COPE API](http://www.npr.org/api/index.php) is usually the first place to go. Their internal content model is well-documented and available to the public, so it's a good choice.

[Seamus](http://www.npr.org/blogs/ombudsman/2009/11/birthdays_at_npr.html), NPR's CMS, exposes three variations of every story's title, as well as two teasers. There's a primary headline, a subtitle that's supposed to be a one-sentence description of the article, a 30 character short title, a teaser and miniTeaser. Their API doesn't list any specific length limits for the teasers, but it looks like standard ones run around 400-500 characters while miniTeasers weigh in at 100-120 characters. (Interestingly enough, they use 'Slug' to capture the name of the regular show or feature that a story came from, rather than the unique identifier/name for the story itself, but that's a tangent.) What WordPress and many other CMSs call a slug appears to be generated from an article's Short Title, but depending on how much of a stickler you are you might conside that a fourth variation of the title.

With those different building blocks in mind, we can take a look at the best matched channels for each story's microcontent. Short Titles, as the teeniest unique bit of information an article possesses, are the best (perhaps only) option for email subject lines and URL slug generation. The distinction between headline and subtitle is a tricky one: it looks like a lot of stories don't have subtitles, though, so I'd be nervous depending on them.

The uncomfortable part comes when you get into the slightly longer microformat scenarios. Twitter cards give you a full 200 characters to work with, for example, but standard NPR teasers are almost always too long. The best bet is probably to use the standard title and URL as the standard social media post, then include the full title and microTeaser in the the Twitter Card and Facebook-leveraged Open Graph meta tags. (When squeezed for space, say when the date or a show/feature's name must go along with the social post, Category + Short Title + URL is probably a good bet for Tweet text.)

It's worth remembering that the summary and title meta tags used by Twitter Cards and Facebook OpenGraph support aren't just for *an organization's own social media posts*. They'll get pulled in automatically whenever a user shares the link themselves; it's a way of ensuring that some well-crafted editorial content gets carried along for the ride even if the user writes their own tweet or post text to go with the link itself. With Twitter Card support, a well-crafted, metadata rich story could easily squeeze in the name of the show/feature, the short title, a link, as well as the full title and miniteaser. Photos and video players can even be worked in, but that's another ball of worms.

### Anyone else?
There isn't much public documentation around it, but I've heard from well-connected friends that the New York Times maintains four variations of each article's title: Long and short, with 'colloquial' and 'keyword-optimized' versions of each. URL slugs can be generated from the short-keyword-optimized version, the short colloquial version can be shown in small sidebar lists, and the full colloquial version can be shown as the actual page headline. I can see the value, but I'm curious how many teaser/summary variations they produce as well.

Another client of ours has developed a lightweight COPE-style API for content reuse, and decided to go minimalist. They support only *one* standard title; auto-generate their URLs from a combination of topical tags and post IDs; and treat social media posts as a separate writing task, with no pre-written article summaries. It allows their writers to fire off new stories with little time spent on extensive metadata and microcontent, but it also requires more manual labor by their social team: as weith most systems, it's all about the tradeoffs that work for a given organization.

### Preliminary conclusions

Beyond the actual character limitations and the need for smooth editorial workflow, clarity is a real concern. Lots of distinct fields doesn't just mean lots of copywriting work, it also increases the potential for accidental misuse of a field. It's easy, for example, to put a catchy tease instead of a factual description in the short summary field and assume that it will only be displayed on its own (rather than with a full title). However, that could make a social media post automatically "assembled" from several short fields feel awkward. Making sure there are clear distinctions in purpose between the different fields is a key.

After talking to the editorial team and reviewing a few of the existing options, I'm leaning towards the following recommendation:

- A 40-50 character Title field that serves as the short title, and the source text for an auto-generated URL slug.
- A 100 character Colloquial title that's used when the article is displayed on its own page, and is also included in the OpenGraph/Twitter Card meta tags. This can default to the standard (short) title if a longer one isn't entered, but editors should get the chance if they want to write a longer one. If it's available, it would also be short enough to squeeze into a tweet.
- A 155 character summary field that's short enough to include in most of the standard description and summary metadata fields for search engines, social networks, and so on.
- A longer 200-400 character teaser that's auto-generated from the first paragraph of the article's text, but can be overridden by editors if they want extra control.
- An optional "excerpt" field that's an actual quote from the meat of the article, intended for use as a pull quote on the full article page. It can also be used as a supplement to the teaser on certain landing pages when a high-profile article is being promoted.

Titles and summaries should work in combination *or* independently, but the optional excerpt would always be used *with* some explanatory text like the summary or full body of the article. That setup would give them just two *required* fields -- the short title and the 155-character summary -- and allow everything else to be automatically generated or hidden by default. We'll see how it goes.

It's nitpicky business, these titles and summaries, but with microcontent the margin for error is slim. In the meantime, I'm curious to hear how other content modeling teams are handling these challenges. Any other examples of interesting breakdowns and how they're working for the teams that use them?