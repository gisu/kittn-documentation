/**
 * generator-kittn - A Yeoman Generator for the Kittn Toolkit
 * @version v0.6.3
 * @link https://github.com/gisu/generator-kittn
 * @license MIT
 */
!function(e,r){"use strict";e.conditionizr=function(t){function i(e,r){for(var t in r)try{e[t]=r[t].constructor===Object?i(e[t],r[t]):r[t]}catch(s){e[t]=r[t]}return e}function s(){for(var e in v){var t=v[e],i=r.getElementsByTagName("head")[0];if(t)switch(e){case"classes":r.documentElement.className+=" "+u;break;case"scripts":var s=r.createElement("script");s.src=n.scriptSrc+u+".js",i.appendChild(s);break;case"styles":var a=r.createElement("link");a.rel="stylesheet",a.href=n.styleSrc+u+".css",i.appendChild(a);break;case"customScript":for(var c=v.customScript.replace(/\s/g,""),o=c.split(","),l=0;l<o.length;l++){var f=r.createElement("script");f.src=o[l],i.appendChild(f)}}}}var a={scripts:!1,styles:!1,classes:!0,customScript:!1};r.documentElement.id="conditionizr";var n={debug:!1,scriptSrc:"js/conditionizr/",styleSrc:"css/conditionizr/",ieLessThan:{active:!1,version:"9",scripts:!1,styles:!1,classes:!0,customScript:!1},chrome:a[0],safari:a[0],opera:a[0],firefox:a[0],ie10:a[0],ie9:a[0],ie8:a[0],ie7:a[0],ie6:a[0],retina:a[0],mac:!0,win:!0,x11:!0,linux:!0};t&&i(n,t);for(var c="",o=["chrome","safari","firefox","opera"],l=0;l<o.length;l++){var u=o[l];if(navigator.userAgent.toLowerCase().indexOf(u)>-1){var v=n[u];s(),c=u;break}}var f=function(){for(var e=3,t=r.createElement("b"),i=t.all||[];t.innerHTML="<!--[if gt IE "+ ++e+"]><i><![endif]-->",i[0];);return e>4?e:r.documentMode}();if(f<n.ieLessThan.version+".0"){var u="lt-ie"+n.ieLessThan.version,v=n.ieLessThan;s()}for(var l=6;11>l;l++)if(f===l){var u="ie"+l,v=n[u];s(),c=u}var m="";if(e.devicePixelRatio>=1.5){var v=n.retina,u="retina";s(),m+=" "+u,u=c}else r.documentElement.className+=" no-retina";if("ontouchstart"in e||e.navigator.msMaxTouchPoints){var v=n.touch,u="touch";s(),m+=" "+u,u=c}else r.documentElement.className+=" no-touch";for(var d=["Win","Mac","X11","Linux"],l=0;l<d.length;l++){var p=d[l];if(navigator.appVersion.indexOf(p)>-1){var h=n[p.toLowerCase()],g=p;h&&(r.documentElement.className+=" "+p.toLowerCase());break}}n.debug&&console.log("Conditionizr Debug\nScripts: "+n.scriptSrc+"\nStyles: "+n.styleSrc+"\nBrowser: "+u+"\nOS: "+g+"\nExtras: "+m+"\n")}}(window,document);