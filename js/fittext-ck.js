/*!	
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/(function(){var e=function(e,t){return window.getComputedStyle?getComputedStyle(e).getPropertyValue(t):e.currentStyle[t]},t=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},n=function(e,t){for(key in t)t.hasOwnProperty(key)&&(e[key]=t[key]);return e};window.fitText=function(e,r,i){var s=n({minFontSize:-1/0,maxFontSize:1/0},i),o=function(e){var n=r||1,i=function(){e.style.fontSize=Math.max(Math.min(e.clientWidth/(n*10),parseFloat(s.maxFontSize)),parseFloat(s.minFontSize))+"px"};i();t(window,"resize",i)};if(e.length)for(var u=0;u<e.length;u++)o(e[u]);else o(e);return e}})();