﻿function recentPosts(e){if(document.getElementById("recent-posts")){for(var t,s,r=e.feed.entry,n="",a=document.getElementById("recent-posts"),l=0;l<numPosts;l++){for(var c=0;c<numPosts;c++)if("alternate"==r[l].link[c].rel){s=r[l].link[c].href;break}"media$thumbnail"in r[l]?u=r[l].media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+\-c/g,"/s90"):u="https://1.bp.blogspot.com/-jHWwEwTEwQ4/WJJ4k71QSYI/AAAAAAAApVc/XO_OitR_VGQS_Wquq1pv1h1D-dgiejSuQCLcB/s90/nothumb_large.png";var t=r[l].title.$t;n+='<li class="recent-posts"><img src="'+u+'" alt="'+t+'"><div class="title_post"><a href="'+s+'" title="'+t+'" target="_blank">'+t+"</a></div></li>"}a.innerHTML=n}}var rcp=document.createElement("script");rcp.src=homePage+"/feeds/posts/summary?alt=json-in-script&orderby=published&max-results="+numPosts+"&callback=recentPosts",document.getElementsByTagName("head")[0].appendChild(rcp);