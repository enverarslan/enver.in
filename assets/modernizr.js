!function(e,n,t){function r(e,n){return typeof e===n}function o(e,n){return!!~(""+e).indexOf(n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function a(e,n,t){var o;for(var s in e)if(e[s]in n)return!1===t?e[s]:(o=n[e[s]],r(o,"function")?l(o,t||n):o);return!1}function u(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var i,l,a,u,f="modernizr",p=s("div"),d=c();if(parseInt(r,10))for(;r--;)a=s("div"),a.id=o?o[r]:f+(r+1),p.appendChild(a);return i=s("style"),i.type="text/css",i.id="s"+f,(d.fake?d:p).appendChild(i),d.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(d)),l=t(p,e),d.fake?(d.parentNode.removeChild(d),S.style.overflow=u,S.offsetHeight):p.parentNode.removeChild(p),!!l}function d(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+f(n[o])+":"+r+")");return s=s.join(" or "),p("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==u(e,null,"position")})}return t}function m(e,n,l,a){function u(){c&&(delete E.style,delete E.modElem)}if(a=!r(a,"undefined")&&a,!r(l,"undefined")){var f=d(e,l);if(!r(f,"undefined"))return f}for(var c,p,m,y,v,h=["modernizr","tspan","samp"];!E.style&&h.length;)c=!0,E.modElem=s(h.shift()),E.style=E.modElem.style;for(m=e.length,p=0;m>p;p++)if(y=e[p],v=E.style[y],o(y,"-")&&(y=i(y)),E.style[y]!==t){if(a||r(l,"undefined"))return u(),"pfx"!=n||y;try{E.style[y]=l}catch(e){}if(E.style[y]!=v)return u(),"pfx"!=n||y}return u(),!1}function y(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+_.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?m(l,n,o,s):(l=(e+" "+P.join(i+" ")+i).split(" "),a(l,n,t))}function v(e,n,r){return y(e,t,t,n,r)}var h=[],g=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},w=function(){};w.prototype=C,w=new w;var S=n.documentElement,x="svg"===S.nodeName.toLowerCase(),b="Moz O ms Webkit",_=C._config.usePrefixes?b.split(" "):[];C._cssomPrefixes=_;var P=C._config.usePrefixes?b.toLowerCase().split(" "):[];C._domPrefixes=P;var z={elem:s("modernizr")};w._q.push(function(){delete z.elem});var E={style:z.elem.style};w._q.unshift(function(){delete E.style}),C.testAllProps=y,C.testAllProps=v,w.addTest("backgroundcliptext",function(){return v("backgroundClip","text")}),function(){var e,n,t,o,s,i,l;for(var a in g)if(g.hasOwnProperty(a)){if(e=[],n=g[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?w[l[0]]=o:(!w[l[0]]||w[l[0]]instanceof Boolean||(w[l[0]]=new Boolean(w[l[0]])),w[l[0]][l[1]]=o),h.push((o?"":"no-")+l.join("-"))}}(),function(e){var n=S.className,t=w._config.classPrefix||"";if(x&&(n=n.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}w._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?S.className.baseVal=n:S.className=n)}(h),delete C.addTest,delete C.addAsyncTest;for(var k=0;k<w._q.length;k++)w._q[k]();e.Modernizr=w}(window,document);