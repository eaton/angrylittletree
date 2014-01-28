---
title: while($issue)
summary: Noticing endless loops in conversations about patriarchy. Shouldn't automated tests be catching these?
layout: post
---
Has anyone else noticed the number of endless loops in the latest build of society? Going back to read the docs on previous builds, it looks like they've been around for quite a few releases. The value of `$issue` can vary, but if it's in `array('patriarchy', 'sexism', 'privilege')`, the problem trigers pretty reliably. 


    while ($issue) {
      print "Hey, $issue is important!";
      print "You're just being emotional, I won't talk about $issue you're calm.";
      print "OK, I've calmed down. Let's talk about $issue.";
      print "No one's angry about $issue, so it's not important.";
    }


    while ($issue) {
      "I think $issue is terrible, and I'm going to say so."
      "There's nothing illegal about $issue, you can't stop it!"
      "OK, I'll try to change the laws about $issue."
      "You're trying to legislate morality insted of winning the war of ideas!"
    }


Has anyone else been able to reproduce this issue? Anyone know which subsystem I should log it against?