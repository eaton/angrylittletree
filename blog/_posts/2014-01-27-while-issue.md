---
title: while($issue)
summary: Noticing endless loops in conversations about patriarchy. Shouldn't automated tests be catching these?
layout: post
---
Has anyone else noticed the number of endless loops in the latest build of society? Going back to read the docs on previous builds, it looks like they've been around for quite a few releases. The value of `$issue` can vary, but if it's in `array('patriarchy', 'sexism', 'privilege')`, the problem triggers pretty reliably. 

    while ($issue) {
      print "Hey, $issue is important!";
      print "You're being emotional! I refuse to discuss $issue.";
      print "OK, I've calmed down. Let's talk about $issue.";
      print "No one's angry about $issue; it's not important.";
    }

    while ($issue) {
      print "I think $issue is terrible, and I'm going to say so.";
      print "$issue isn't illegal; you have no right to say that!";
      print "OK, I'll try to change the laws about $issue.";
      print "Legislating morality is terrible and never works!";
    }

    while ($issue) {
      print "$issue is immoral and wrong!";
      print "$issue is just how people are. Too bad if it hurts you.";
      print "OK, I'll work to change peoples' minds.";
      print "This sucks, people hate me for supporting $issue now!";
    }

    while ($issue) {
      print "$issue is a serious problem that needs attention.";
      print "I don't think $issue is serious: show me examples!";
      print "Here's an exhaustive list of times when...";
      print "Why are you so obsessed with $issue?";
    }

Has anyone else been able to reproduce this? Anyone know which subsystem I should log it against?
