--- 
layout: post
title: Code smell.
---
So I'm working on a weird defect, and I discover the following buried deep within the bowels of our application:

    /// <summary>
    /// Returns a hashtable that maps price points to stores (keyed by price point)
    /// </summary>
    /// <returns></returns>
    public override Hashtable GetPricePoints()
    {
      throw new ApplicationException("Top ten signs your controller layer could use a refactoring weekend");
    }
