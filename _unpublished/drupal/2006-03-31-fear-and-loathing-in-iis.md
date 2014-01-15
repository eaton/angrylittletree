--- 
layout: post
title: Fear and Loathing in IIS
tags: 
- Geekery
- drupal
- iis
- windows
- php
drupal_path: fear-and-loathing-in-iis
drupal_nid: 425
created: 1143819720
---
So, yesterday I had a lull at work and I took it upon myself to update our much-neglected internal knowledgebase (Drupal, naturally). It's an odd configuration -- PHP/MySQL running on IIS alongside a python timesheet program and an ASP application -- but it was working until a server crash a few months ago.

What I thought would be a quick job turned into eight hours of pain thanks to what I eventually realized was an obscure bug in IIS 4.0 and higher. If you're ever trying to install Drupal on IIS, save yourself the pain and <i>do not run PHP in CGI mode</i>. <a href="http://drupal.org/node/56654">I posted a handbook entry</a> on Drupal.org to share the pain. In a nutshell, IIS plus PHP in CGI mode means that server redirects on a web app's login page trash the session data. Converting to ISAPI mode solves it. After getting that sorted out, things seem to be humming along nicely. Hooray!
