---
published: false
title: Keynote 6 Reviewed
summary: "After four years of languishing, Keynote gets a major rewrite. Are the new changes worth it?"
layout: post
---

I'll cut to the chase: After four years of minor tweaks and iOS compatibility updates, Apple finally shipped a major new version of its presentation software, Keynote. Hooray, rejoicing!

And also, boooo, lamentation.

There's a new interface, a few new additions, and one-to-one feature parity with the iOS version... but beloved features have also gone missing, and workflows that some Keynote aficionados relied on are gone. After a week of nervous deliberation, I took the plunge, upgraded to Keynote '06, and I'm writing up my thoughts. Should *you* take the leap? It depends on how you use it, but for me it's a mostly-positive upgrade.

## My workflow
First, some background. The way I use Keynote may not be the way you use Keynote, and the changes in '06 are highly dependent on what subtle bits in the old version made you happy.

Though I'm not a *professional speaker,* I spend quite a bit of time presenting at industry conferences, pitching to and educating clients, and teaching technical workshops. For quite a few years, I also helped build the re-usable presentation materials that my company used in its public training workshops.

About half of my Keynote decks are hour-long "tentpole" presentations that I refine and reuse at many events over the course of a year. The other half tend to be decks that I put together on short notice to communicate a particular message to a client, to act as a supporting backdrop for a more conversational session, or to fill a gap in an event schedule organized by a friend.

### The Biggies
I tend to build those "Tentpole" decks -- the ones that I'll be delivering at conferences throughout the year, the ones that  outline first. I work on the key points and the general progression of ideas until I'm comfortable with it, then pull in lots of supporting materials to flesh out the deck. I refine them, take them through practice runs, work on a loose script for myself, and then go through a couple rounds of revisions.

Eventually I start working on the visuals: custom graphics to illustrate key points, animations, decisions about slide transitions, and so on. I winnow out material that doesn't help, and I run short recorded versions past colleagues and co-workers for feedback.

By the time it's all done, I've usually put anywhere from 50-100 hours of research, writing, asset creation, slide wrangling, and practice delivery. My big pain point with this workflow is the difficulty of keeping everything looking consistent while the deck is in a state of flux.

### The ad-hoc presentations
When I need to put together a deck on short notice, my workflow shifts dramatically. Sometimes, I have a week or two advanced warning but I’m swamped by other work and can’t invest as much time in polishing things. Other times, I only have a few hours notice — I’m filling in for someone who got sick, or an opportunity to talk to a key client has come up. I tend to invest almost *all* of my time on the outline and any supporting materials I'll need (graphs of cited data, screenshots of UX patterns I'll be discussing, and so on).

When I’m working on *these* kinds of presentations, I lean heavily on a custom Keynote theme that I lovingly maintain. It’s streamlined, features masters for the kinds of slides I tend to use when making my points, and its whole purpose is to ensure that my deck looks Good Enough To Share even if I only have time to capture key ideas, a handful of quotes, and some code snippets or screenshots. If I spend any time customizing the visuals of the presentation, it has to be fast, consistent, and impossible to screw up.

### Preparing for the worst
Fortune favors the prepared. I don’t use iCloud to store my presentations, because I don’t trust conference wifi. I only use OSX system fonts, because I never know when I’ll need to transfer my deck over to someone else’s laptop (or, God forbid, an iPad). I try to use a high-contrast palette, but keep screenshots as neutral as possible, because event projectors are *never* gamma-adjusted properly and anything too dark or light is bound to disappear into the background. I almost never use audio because many venues don’t have good hookups for it, and I favor recorded video clips over live demos because I work primarily with the web and (repeat after me) I don’t trust conference wifi.

These lessons were learned the hard way. They aren’t rules anyone else should follow, but they help reduce the number of variables when I’m going into an unknown room.

## Keynote '09 frustrations
Keynote ‘09 was my mainstay for four years, and while I learned to make the most of it there were some rough edges that *seriously* chafed. Because I invest a lot of time in building my own reusable theme, many of my biggest frustrations have revolved around master slides:

1. Guides created on master slides were only visible *when editing the master slides,* making the creation of consistent design grids a huge pain.
2. Minor changes to a slide could easily disconnect it from the master slide it was based on: if the master was updated, it was often easier to recreate the slide entirely. 
3. Making sweeping changes to typography, image styling, photo formatting, and so on was a *huge pain*. Like, I had to manually change the formatting options on every item on every master slide individually. And if any child slides had overridden the styles? Well, see item 2...
4. Keynote’s Master Slide implementation combined visual presentation decisions (“this text box should be bold”) with structural decisions (“this slide should contain a quotation”). I’m a structured content guy, and that annoyed me.

The master guides issue in particular annoyed me so much that I wrote to Steve Jobs every six months — and Tim Cook after him — to request a change. I also wanted a spinning Batman logo as a slide transition, but that would just be icing on the cake.

## The presenter display
This is where the controversy started.

- BOO: Can no longer resize and rearrange items: when all items are on screen, presenter notes is squeezed to two lines. Needs customization, or a “slides on the side” layout that gives more note space.
- YAY: Switching screens, editing presenter notes, can be done WHILE presenting. No more “Displays Dance”
- YAY: Font size for presenter notes is consistent across slides, controllable while presenting.
- YAY: With 3 monitors, notes can go on one, preview on another, projected slides on a third. Meh for traveling presenters, great for installations like churches that have a fixed, reliable setup.

Conclusion: If you consistently use lots of presenter notes, and want to preview the current or next slide while you’re speaking, you’re probably out of luck. Otherwise, it’s a a great set of enhancements.

## Working with master slides and styles
Few of the improvements are big, obvious new features but everything works just a bit better and lots of old annoyances have been eliminated.

- YAY: Master guides are visible on child slides, can be locked and hidden independent of the slide-specific guides.
- YAY: It’s easy to reapply a master to the slide you’re working on, resetting any formatting tweaks you’ve made to it.
- YAY: Strange bugs — like the inability to reliably position a master-slide text on top of a master slide object placeholder — have been fixed.
- BOO? It’s no longer possible to have multiple sets of master slides per deck. If you copy a slide from one deck and paste it into another one that uses a different theme, the slide *no longer* moves its master slide into the destination deck. I’m okay with this: for me, it often resulted in duplicate master slides from different versions of a deck littering up my workspace. Others have expressed frustration, though, saying that they relied on it. Your mileage may vary.

The addition of reusable styles for text, objects, and images isn’t *technically* part of the Theme and Master Slide functionality, but it’s a significant enough addition that it’s worth mentioning here.

- Lets you name and reuse any formatting decisions: text size, bullet styles, colors, fonts; object stroke, fill, and shadow; image size, border, shadow settings...
- Quick visual indication when you’ve overridden a style. Should be super-familiar to anyone who’s used Pages. 
- No easy way to browse the styles that have been defined, but easy to tweak them and ripple changes back to other elements using the same style.

It may not seem like much, but it’s tons easier to enforce visual consistency across a presentation. In addition, it makes it much easier to tweak the canned themes that Keynote ships with. The underlying *styles* for text and images only need to be changed once, and they’re reflected across the entire theme’s master slides.  

## Objects and animation
In addition to simple grouping, you can now use boolean operations to combine objects into shapes. Better for making masks, and much easier to whip up simple illustrations.

Still impossible to import SVG files, or to edit imported vector art. Tools like SVGtoKeynote and IAtoKeynote still work, though: they’re lifesavers.

New action effects can be used to highlight objects: bouncing, wiggling, pulsating, and so on. It’s good for calling attention to an element on a crowded slide, and it makes a nice addition. None are gaudy.

Managing build orders is smoother — felt like an afterthought before, but now there are more visual cues, it’s easier to rearrange and reshuffle objects, and items that rely on each other’s transitions are easier to treat as a single unit. Animations and transitions can be previewed before they’re applied.

Smart builds have been axed, but Magic Move works better: text objects transition instead of just fading in and out. Can rearrange words anagram-style. Watch for that to be abused in the future.

## iOS and iCloud compatibility

*In progress*

## The new UI
Takes some getting used to, and at first it’s terrifying: lots of options seem to just be GONE.

In fact they’ve been relocated to contextual sidebars, or they appear subtly on the screens where they’re needed. Presenter display preferences are gone, for example, but now you can do most of the same stuff *while you’re on the presenter display*.

More integrated preview options, makes better use of widescreen monitors. Much nicer on an Air. Tons of little touches that make it feel smoother... unless one of the features you depended on is missing. Doh.

## Conclusion
I like it. There are frustrating missing features, but a lot to love. Hopefully, it’ll be like Final Cut: A massive rewrite to knock the cobwebs off, with the missing features reappearing over time. Even if it’s not, though, I find it’s worth making the move.