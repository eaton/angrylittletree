--- 
layout: post
title: Voting API thoughts
tags: 
- Software Development
- drupal
- apis
- brainstorming
drupal_path: voting-api-thoughts
drupal_nid: 371
created: 1132687779
---
Well, my <a href="http://jeff.viapositiva.net/archives/2005/11/my_drupal_to_do.html">previous post</a> outlined a laundry list of stuff I'd like to do in Drupal. Last night, while waiting for a data import to finish at work, I started thinking again about the schema that's necessary for voting to work cleanly. Originally, the idea was to include all sorts of cool aggregation and averaging features for free, so that modules could drop a vote in the box and get back the 'average rating' for a node with no effort.

After <a href="http://drupal.org/node/36041">talking things over</a> with the authors of various voting modules, though, I think that might be a mistake. There are too many ways to figure out what a vote 'means', and too many possibly conflicting methods for producing a final valuation, to centralize that process. An example is a poetry critique site in which every conceptual 'vote' is really three discrete votes on meter, imagery, and originality. Or a commentary site where each vote isn't a 1-5 quality rating, but a thumbs up or thumbs down rating with an implicit 'reason'.

How to map the 'simple' voting scenerios to the same API as the complicated multicriteria ones? How, oh how? What we really need is a way of identifying not only what is being voted on, who is voting, and what the value of the vote is... but also <i>what kind of vote it is</i>. With that in mind, I'm working on the following:

<pre>

#

# Table structure for table 'votingapi'

#

CREATE TABLE votes (

  voting_id int(10) unsigned NOT NULL auto_increment,

  content_type varchar(20) default NULL,

  content_id int(10) unsigned default NULL,

  vote int(10) unsigned default NULL,

  vote_type varchar(128) default NULL,

  uid int(10) unsigned default '0',

  timestamp int(11) default NULL,

  hostname varchar(128) default '0',

  PRIMARY KEY  (voting_id)

) TYPE=MyISAM;

</pre>

As with the present votingapi implementation, votes will be cast by calling a simple votingapi_cast_vote() function with content information, and the vote_type parameter. The votingapi_get_votes() function will pull back votes data <i>grouped by vote_type</i> and <i>grouped by aggregation function</i>. Instead of a single 'vote' property, a nested set of arrays will contain the slice-and-dice data necessary for proper display.

In addition, it allows multi-criteria votes to be stored as discrete votes but retrieved as a group. In the poetry site above, for example, three actual votes would be cast. The vote_types would be set to 'poetry-meter', 'poetry-imagery', and 'poetry-originality', respectively. On retrieval, the raw vote objects for a given piece of content would be pulled from the DB, and assembled into a vote object. Individual vote_types would become keys. In addition, a votingapi hook would allow other modules to add their own custom calculations into the mix (for example, a median vote value). Some examples:

<pre>

$content-type = 'node-' . $node->type;

$content-id = $node->nid;

$votes = votingapi_get_votes($content-type, $content-id);

// a particular user's rating of the poem's meter

// inserted by votingapi automatically, from the raw

// entry in the votes table

$votes[$uid]['poetry-meter'] 

// the median rating of the poetry's imagery

// calculated by poetry.module

$votes['median']['poetry-imagery']

// the highest rating cast for the poem's originality

// calculated by poetry.module

$votes['highest']['poetry-originality']

// the total number of users who voted to promote

// the poem to the front page, calculated by queue.module

$votes['sum']['promote'] 

</pre>

There are still some hitches to work out, but I'm pondering and I think it has some potential. Code to come shortly.
