--- 
layout: post
lj_post: TRUE
title: Bahahahah.
tags: []

drupal_path: bahahahah
drupal_nid: 1744
created: 1072206240
---
So I'm pounding through a weird defect, and I discover the following buried deep within the bowels of our application:

<pre>
/// <summary>
/// Returns a hashtable that maps price points to stores (keyed by price point)
/// </summary>
/// <returns></returns>
public override Hashtable GetPricePoints()
{
	throw new ApplicationException("Top ten signs your controller layer could use a refactoring weekend");
}
</pre>
