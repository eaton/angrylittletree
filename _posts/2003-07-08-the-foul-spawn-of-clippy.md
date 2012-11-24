--- 
layout: post
lj_post: TRUE
title: The Foul Spawn of Clippy
tags: []

drupal_path: the-foul-spawn-of-clippy
drupal_nid: 1332
created: 1057685640
---
<lj-cut text="Warning! Terrible Geekery Lies Within!">So I spent a couple hours yesterday troubleshooting a particularly wacky user interface widget for the program I'm working on.

Basically, I've written the code to display a list of all the grocery stores authorized to carry a particular product. The user can click on various pieces of information displayed in the list and edit them (for example, changing an item's status to <i>discontinued</i> rather than <i>active</i>). To speed up the development, we're using a pre-built user interface tool called XtraGrid. It handles lots and lots of the work for us -- things like automatically sorting the information in a list, letting the user rearrange the columns to suit their preferences, filtering the information, etc. etc. It's swanky.

However, it can be positively <i>baffling</i> sometimes. For example, the aforementioned changing-an-item's-status-to-discontinued scenerio. Normally, we just slap a combo box on the window and let the use pick the new status from a dropdown list of options. That's normally difficult to do in a list of information like the screen I'm designing, but XtraGrid supports all kinds of nifty stuff like inline combo boxes, etc. So it should be simple.

Ha-ha! Not quite.

When I populated said combo box with a list of options, it refused to draw as an actual combo box. It simply displayed the name of the default option, and nothing else. *click* Nothing. *click* Nothing. And so on. After hours of troubleshooting, I looked closer at the list of properties on the custom combo box class they use in their grid. Halfway down the list of dozens of properties I see:  "NeverDrawPopupList." It defaults to <i>true.</i>

I set it to false.

It works.

Is it just me, or... is that like having a "Doesn't Work" option that defaults to TRUE?
