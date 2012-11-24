--- 
layout: post
lj_post: TRUE
title: Random thoughts and observations.
tags: []

drupal_path: random-thoughts-and-observations
drupal_nid: 948
created: 1022329740
---
<ol>
<li> <A HREF="http://www.freestateproject.org/">Libertarians</A> amuse me. Apologies to any libertarians out there. I like Chomsky <A HREF="http://www.chomsky.com/noflash/">as much as the next guy</A>, and <A HREF="http://www.zmag.org/chomsky/index.cfm">he's fascinating</A>. But I mean, c'mon. When the entire movement is cited as a corollary to <A HREF="http://www.godwinslaw.com/">Godwin's Law</A>, it's time to take a long, hard look... </li>

<li>It's shocking how traumatic and wrenching it can be relating past experiences and relationships to a friend who actually truly listens. Especially when they aren't distracted by my sneaky habit of turning emotionally <A HREF="http://www.somethingpositive.net/sp02112002.html">traumatic</A> <A HREF="http://www.somethingpositive.net/sp01312002.html">stories</A> into <A HREF="http://www.goats.com/archive/010110.html">amusing</A> <A HREF="http://www.somethingpositive.net/sp01182002.html">anecdotes</A>. Many many moons ago, someone once told me that I was one of the best 'dodgers' they had ever known. That I was able to deftly sidestep questions abot my own emotions and heart, such that most people would not realize it had happened. I'm not sure if it was flattery or insight. And on second consideration, even if untrue it probably wasn't very flattering. Perhaps I should reconsider <A HREF="http://www.somethingpositive.net/sp05132002.html">my approach to relating.</A></li>

<li>SELECT dbo.m_product_variations.product, dbo.variations.type, dbo.m_product_variations.isDefault, dbo.variations.code, dbo.variation_types.affects_sku FROM dbo.variations INNER JOIN dbo.variation_types ON dbo.variations.type = dbo.variation_types.id INNER JOIN dbo.m_product_variations ON dbo.variations.id = dbo.m_product_variations.variation WHERE (dbo.variations.type = 1) AND (dbo.variation_types.affects_sku = - 1) AND (dbo.m_product_variations.product = [ID]) OR (dbo.variation_types.affects_sku = - 1) AND (dbo.m_product_variations.product = [ID]) AND (dbo.m_product_variations.isDefault = - 1) ORDER BY dbo.variations.type</li>

<li><A HREF="http://www.sql-server-performance.com/mb_sql_server_joins.asp">I love SQL.</A></li>

<li><A HREF="http://www.comics.com/comics/getfuzzy/index.html">I also love Get Fuzzy.
<IMG BORDER=0 SRC="http://www.comics.com/comics/getfuzzy/archive/images/getfuzzy2002052437825.gif"></A></li>
</ol>
