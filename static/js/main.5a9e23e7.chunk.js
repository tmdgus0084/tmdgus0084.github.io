(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],[,,,function(e,t,n){e.exports={profileImage:"IntroducePage_profileImage__29Rak",introducePage:"IntroducePage_introducePage__2c8PG"}},,,,function(e,t,n){e.exports=n(16)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(5),r=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(2),i=n.n(o),u=n(6),m=n(1),s=n(3),d=n.n(s),f=new Image;f.src="/image/profile-image.jpg";var g=new Promise((function(e){f.onload=function(){e(f)}})),h=function(){return Object(a.useEffect)((function(){g.then((function(e){var t=document.getElementById("profile-image-canvas");t.getContext("2d").drawImage(e,0,0,t.width,t.height)}))}),[]),l.a.createElement("canvas",{width:500,height:500,id:"profile-image-canvas",className:d.a.profileImage})},E=function(e){var t=e.message,n=void 0===t?"":t,c=Object(a.useState)(1),r=Object(m.a)(c,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window,t=e.scrollY,n=e.innerHeight;i(Math.max(0,1-2*t/n))}))}),[]),l.a.createElement("div",{className:d.a.introducePage,style:{opacity:o}},l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("h1",null,"Hwang Seung-hyun"),l.a.createElement("p",null,n),l.a.createElement("br",null),l.a.createElement("div",{className:"fb-like","data-href":"http://dev.hsh.kr","data-width":"","data-layout":"button_count","data-action":"like","data-size":"large","data-share":"false"})))},p=function(){var e=Object(a.useState)("Loading... Please wait."),t=Object(m.a)(e,2),c=t[0],r=t[1],o=Object(a.useState)(l.a.createElement(l.a.Fragment,null)),s=Object(m.a)(o,2),d=s[0],f=s[1];return Object(a.useEffect)((function(){g.then(Object(u.a)(i.a.mark((function e(){var t,a,c,o,u,s,d,g,h,E,p,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,a=[n.e(4).then(n.bind(null,46)),n.e(2).then(n.bind(null,47)),n.e(8).then(n.bind(null,48)),n.e(7).then(n.bind(null,49)),n.e(3).then(n.bind(null,50)),n.e(5).then(n.bind(null,51))],r("Loading components... 0/".concat(a.length)),a.forEach((function(e){Promise.all([e]).then((function(){t++,r("Loading components... ".concat(t,"/").concat(a.length))}))})),e.next=6,Promise.all(a);case 6:return c=e.sent,o=Object(m.a)(c,6),u=o[0].default,s=o[1].default,d=o[2].default,g=o[3],h=g.default,E=g.frames,p=o[4].default,v=o[5].default,r("Loading images... ".concat(t=0,"/").concat(E.length)),e.next=20,Promise.all(E.map((function(e){return e.promise.then((function(){t++,r("Loading images... ".concat(t,"/").concat(E.length))}))})));case 20:f(l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{title:"I am a Game Developer."}),l.a.createElement(s,null),l.a.createElement(d,null),l.a.createElement(u,{title:"I am a Web Developer."}),l.a.createElement(h,null),l.a.createElement(p,null),l.a.createElement("hr",null),l.a.createElement(v,null))),r("The loading is done! Scroll down for more information.");case 22:case"end":return e.stop()}}),e)}))))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{message:c}),d)},v=function(){return l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))};n(13),n(14),n(15);r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,6]]]);
//# sourceMappingURL=main.5a9e23e7.chunk.js.map