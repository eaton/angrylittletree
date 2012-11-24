--- 
layout: post
title: Voting API (now with actual code)
tags: 
- Software Development
- drupal
- voting
- karma
drupal_path: voting-api-now-with-actual-code
drupal_nid: 376
created: 1133162750
---
Well, it certainly has been an interesting weekend. After some turkey, some excellent casserole, and a relaxing several days with Catherine, I hammered out a new revision of the <a href="http://drupal.org/node/36041">VotingAPI module</a> that matches the brainstorming from <a href="http://jeff.viapositiva.net/archives/2005/11/voting_api_thou.html">an earlier post.</a> The idea is NOT to provide a UI for voting, or to provide an infrastructure for 'comparing' one piece of content to another. Rather, it's an attempt to unify how various voting systems record and tabulate votes so they can be combined in cleaner ways.



Next steps include converting latestgreatest.module over to it, and looking at the feasibility of converting other voting modules over to it. I'm pretty sure that the aggregate retrieval functions will need a lot of work to streamline them, but so I'm happy with where it's at so far.
