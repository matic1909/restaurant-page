(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"",""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:l,updater:a(m,r),references:1}),i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var u=n(o[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},454:(e,t,n)=>{e.exports=n.p+"394fbb0454c18f582a6d.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),s=n.n(c),d=n(216),u=n.n(d),l=n(589),p=n.n(l),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(454);const v=document.getElementById("content"),b=document.createElement("header"),C=document.createElement("h1");C.classList.add("restaurant-name"),C.textContent="Pizzeria La Mendola";const g=document.createElement("nav");["Home","Menu","Contact"].forEach((e=>{const t=document.createElement("button");t.classList.add("button-nav"),t.textContent=e,g.appendChild(t)})),b.appendChild(C),b.appendChild(g);const y=document.createElement("main");y.id="main";const E=document.createElement("div");E.classList.add("main-content");const x=document.createElement("p");x.textContent="Enjoy authentic Italian Pizza";const w=document.createElement("p");w.textContent="Family owned since 1921";const T=new Image;T.src=h;const M=document.createElement("p");M.textContent="Dine in or order online!",E.appendChild(x),E.appendChild(w),E.appendChild(T),E.appendChild(M),y.appendChild(E);const S=document.createElement("footer"),A=document.createElement("p");A.textContent="Copyright © 2021 matic1909";const j=document.createElement("a");j.setAttribute("href","https://github.com/matic1909"),j.textContent="GitHub",S.appendChild(A),S.appendChild(j),v.appendChild(b),v.appendChild(y),v.appendChild(S)})()})();