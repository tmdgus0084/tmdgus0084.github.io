(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[4],[,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r,o,i,u=n(20),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function a(){i=!1}function c(t){if(t){if(t!==r){if(t.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,a()}}else r!==s&&(r=s,a())}function f(){return i||(i=function(){r||c(s);for(var t,e=r.split(""),n=[],o=u.nextValue();e.length>0;)o=u.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||s},characters:function(t){return c(t),r},seed:function(t){u.seed(t),o!==t&&(a(),o=t)},lookup:function(t){return f()[t]},shuffled:f}},function(t,e,n){"use strict";t.exports=n(19)},function(t,e,n){"use strict";var r=n(17),o=n(21),i=n(25),u=n(26)||0;function s(){return o(u)}t.exports=s,t.exports.generate=s,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return u=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=i},function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},function(t,e,n){"use strict";var r,o,i=n(22);n(17);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=i(7),e+=i(t),r>0&&(e+=i(r)),e+=i(n)}},function(t,e,n){"use strict";var r=n(17),o=n(23),i=n(24);t.exports=function(t){for(var e,n=0,u="";!e;)u+=i(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return u}},function(t,e,n){"use strict";var r,o="object"===typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),i="";;)for(var u=t(o),s=o;s--;)if((i+=e[u[s]&r]||"").length===+n)return i}},function(t,e,n){"use strict";var r=n(17);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},function(t,e,n){"use strict";t.exports=0},,,,,,,function(t,e,n){t.exports={wrapper:"BlinkView_wrapper__2DYeT"}},,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),i=n.n(o),u=n(18),s=n.n(u),a=n(33),c=n.n(a);e.default=function(t){var e=t.title,n=Object(o.useState)(s.a.generate()+Date.now()),u=Object(r.a)(n,1)[0],a=Object(o.useState)(0),f=Object(r.a)(a,2),l=f[0],p=f[1];return Object(o.useEffect)((function(){function t(){var t=document.getElementById(u).getBoundingClientRect(),e=window.innerHeight,n=t.top;n/e>=-.5&&p(+Math.min(1,Math.pow(1-n/e,10)).toFixed(5))}return t(),window.addEventListener("scroll",t),window.addEventListener("resize",t),function(){window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),i.a.createElement("div",{className:c.a.wrapper,style:{opacity:l},id:u},i.a.createElement("h2",null,e))}}]]);
//# sourceMappingURL=4.5c6470c9.chunk.js.map