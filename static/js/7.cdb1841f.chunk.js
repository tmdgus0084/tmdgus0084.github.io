(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[7],{27:function(e,t,n){"use strict";var i=n(1),a=n(0);t.a=function(e,t){var n=Object(a.useState)(0),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){function n(n){var i=document.getElementById(e),a=document.getElementById(t),r=i.getBoundingClientRect().top;if(!n||Math.abs(r)<100){var c=a.getBoundingClientRect(),u=c.height,d=c.y,s=window.innerHeight,f=(u+d-s)/(2*s),l=1-Math.max(0,Math.min(1,f));o(l)}}n(null),window.addEventListener("scroll",n),window.addEventListener("resize",n),setInterval(n,30)}),[]),c}},36:function(e,t,n){var i;window,i=function(){return function(e,t,n,i,a,r){var c,o,u=e/t;return u>n/i?(c=i,o=i*u):(o=n,c=n/u),{width:o,height:c,offsetLeft:(n-o)*(a="undefined"===typeof a?.5:a),offsetTop:(i-c)*(r="undefined"===typeof r?.5:r)}}},e.exports=i()},37:function(e,t,n){e.exports={wrapper:"CRIPage_wrapper__1_qhZ"}},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frames",(function(){return f}));var i=n(1),a=n(0),r=n.n(a),c=n(36),o=n.n(c),u=n(37),d=n.n(u),s=n(27),f=Array(101).fill(null).map((function(e,t){var n=new Image;return n.src="/image/cri-frames/"+((t+1)/1e4).toFixed(4).split(".")[1]+".jpg",{image:n,promise:new Promise((function(e){n.onload=function(){return e(n)}}))}}));t.default=function(){var e=Object(s.a)("cri-animatin-section","cri-wrapper"),t=Object(a.useState)(window.innerWidth),n=Object(i.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)(window.innerHeight),h=Object(i.a)(l,2),w=h[0],m=h[1],p=Object(a.useState)(0),g=Object(i.a)(p,2),v=g[0],b=g[1];return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){u(window.innerWidth),m(window.innerHeight)}))}),[]),Object(a.useEffect)((function(){var t=document.getElementById("cri-animatin-section"),n=t.getContext("2d"),i=t.width,a=t.height,r=f[Math.floor((f.length-1)*Math.min(1,1.3*e))].image,c=o()(r.naturalWidth,r.naturalHeight,t.width,t.height);n.globalAlpha=5*e,n.clearRect(0,0,i,a),n.drawImage(r,c.offsetLeft,c.offsetTop,c.width,c.height),b(e>.5?1:0)}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.a.wrapper,id:"cri-wrapper"},r.a.createElement("canvas",{id:"cri-animatin-section",width:c,height:w}),r.a.createElement("div",{style:{opacity:v}},r.a.createElement("h1",null,"Cultural Resources"))))}}}]);
//# sourceMappingURL=7.cdb1841f.chunk.js.map