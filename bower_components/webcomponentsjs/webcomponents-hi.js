(function(){"use strict";(function(o){function s(ea,fa){if("function"==typeof window.CustomEvent)return new CustomEvent(ea,fa);var ga=document.createEvent("CustomEvent");return ga.initCustomEvent(ea,!!fa.bubbles,!!fa.cancelable,fa.detail),ga}function L(ea){if(S)return ea.ownerDocument===document?null:ea.ownerDocument;var fa=ea.__importDoc;if(!fa&&ea.parentNode){if(fa=ea.parentNode,"function"==typeof fa.closest)fa=fa.closest("link[rel=import]");else for(;!Q(fa)&&(fa=fa.parentNode););ea.__importDoc=fa}return fa}function M(ea){var fa=document.querySelectorAll("link[rel=import]:not(import-dependency)"),ga=fa.length;if(ga)for(var ja,ha=0,ia=fa.length;ha<ia&&(ja=fa[ha]);ha++)P(ja,function(){--ga||ea()});else ea()}function N(ea){function fa(){"loading"!==document.readyState&&document.body&&(document.removeEventListener("readystatechange",fa),ea())}document.addEventListener("readystatechange",fa),fa()}function O(ea){N(function(){return M(function(){return ea&&ea()})})}function P(ea,fa){if(ea.__loaded)fa&&fa();else if("script"!==ea.localName||ea.src){var ga=function(ha){ea.removeEventListener(ha.type,ga),ea.__loaded=!0,fa&&fa()};ea.addEventListener("load",ga),$&&"style"===ea.localName||ea.addEventListener("error",ga)}else ea.__loaded=!0,fa&&fa()}function Q(ea){return ea.nodeType===Node.ELEMENT_NODE&&"link"===ea.localName&&"import"===ea.rel}function R(){var ea=this;this.b={},this.c=0,this.h=new MutationObserver(function(fa){return ea.C(fa)}),this.h.observe(document.head,{childList:!0,subtree:!0}),this.f(document)}var S="import"in document.createElement("link"),T=null;!1=="currentScript"in document&&Object.defineProperty(document,"currentScript",{get:function(){return T||("complete"===document.readyState?null:document.scripts[document.scripts.length-1])},configurable:!0});var U=/(^\/)|(^#)|(^[\w-\d]*:)/,V=/(url\()([^)]*)(\))/g,W=/(@import[\s]+(?!url\())([^;]*)(;)/g,X=/(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,Y={A:function(ea,fa){if(ea.href&&ea.setAttribute("href",Y.i(ea.getAttribute("href"),fa)),ea.src&&ea.setAttribute("src",Y.i(ea.getAttribute("src"),fa)),"style"===ea.localName){var ga=Y.u(ea.textContent,fa,V);ea.textContent=Y.u(ga,fa,W)}},u:function(ea,fa,ga){return ea.replace(ga,function(ha,ia,ja,ka){return ha=ja.replace(/["']/g,""),fa&&(ha=Y.v(ha,fa)),ia+"'"+ha+"'"+ka})},i:function(ea,fa){return ea&&U.test(ea)?ea:Y.v(ea,fa)},v:function(ea,fa){if(void 0===Y.g){Y.g=!1;try{var ga=new URL("b","http://a");ga.pathname="c%20d",Y.g="http://a/c%20d"===ga.href}catch(ha){}}return Y.g?new URL(ea,fa).href:(ga=Y.w,ga||(ga=document.implementation.createHTMLDocument("temp"),Y.w=ga,ga.l=ga.createElement("base"),ga.head.appendChild(ga.l),ga.j=ga.createElement("a")),ga.l.href=fa,ga.j.href=ea,ga.j.href||ea)}},Z={async:!0,load:function(ea,fa,ga){if(!ea)ga("error: href must be specified");else if(ea.match(/^data:/)){ea=ea.split(",");var ha=ea[1],ha=-1<ea[0].indexOf(";base64")?atob(ha):decodeURIComponent(ha);fa(ha)}else{var ia=new XMLHttpRequest;ia.open("GET",ea,Z.async),ia.onload=function(){var ja=ia.getResponseHeader("Location");ja&&!ja.indexOf("/")&&(ja=(location.origin||location.protocol+"//"+location.host)+ja);var ka=ia.response||ia.responseText;304===ia.status||!ia.status||200<=ia.status&&300>ia.status?fa(ka,ja):ga(ka)},ia.send()}}},$=/Trident/.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent);if(R.prototype.f=function(ea){ea=ea.querySelectorAll("link[rel=import]");for(var fa=0,ga=ea.length;fa<ga;fa++)this.o(ea[fa])},R.prototype.o=function(ea){var fa=this,ga=ea.href;if(void 0!==this.b[ga]){var ha=this.b[ga];ha&&ha.__loaded&&(ea.import=ha,this.m(ea))}else this.c++,this.b[ga]="pending",Z.load(ga,function(ia,ja){ia=fa.D(ia,ja||ga),fa.b[ga]=ia,fa.c--,fa.f(ia),fa.s()},function(){fa.b[ga]=null,fa.c--,fa.s()})},R.prototype.D=function(ea,fa){if(!ea)return document.createDocumentFragment();$&&(ea=ea.replace(X,function(la,ma,na){return-1===la.indexOf("type=")?ma+" type=import-disable "+na:la}));var ga=document.createElement("template");if(ga.innerHTML=ea,ga.content)ea=ga.content;else for(ea=document.createDocumentFragment();ga.firstChild;)ea.appendChild(ga.firstChild);(ga=ea.querySelector("base"))&&(fa=Y.i(ga.getAttribute("href"),fa),ga.removeAttribute("href"));for(var ka,ga=ea.querySelectorAll("link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type=\"application/javascript\"],\n    script[type=\"text/javascript\"]"),ha=0,ia=0,ja=ga.length;ia<ja&&(ka=ga[ia]);ia++)P(ka),Y.A(ka,fa),ka.setAttribute("import-dependency",""),"script"===ka.localName&&!ka.src&&ka.textContent&&(ka.setAttribute("src","data:text/javascript;charset=utf-8,"+encodeURIComponent(ka.textContent+("\n//# sourceURL="+fa+(ha?"-"+ha:"")+".js\n"))),ka.textContent="",ha++);return ea},R.prototype.s=function(){var ea=this;if(!this.c){this.h.disconnect(),this.flatten(document);var fa=!1,ga=!1,ha=function(){ga&&fa&&(ea.f(document),ea.c||(ea.h.observe(document.head,{childList:!0,subtree:!0}),ea.B()))};this.G(function(){ga=!0,ha()}),this.F(function(){fa=!0,ha()})}},R.prototype.flatten=function(ea){ea=ea.querySelectorAll("link[rel=import]");for(var ha,ia,fa=0,ga=ea.length;fa<ga&&(ha=ea[fa]);fa++)ia=this.b[ha.href],(ha.import=ia)&&ia.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(this.b[ha.href]=ha,ha.readyState="loading",ha.import=ha,this.flatten(ia),ha.appendChild(ia))},R.prototype.F=function(ea){function fa(ia){if(ia<ha){var ja=ga[ia],ka=document.createElement("script");ja.removeAttribute("import-dependency");for(var la=0,ma=ja.attributes.length;la<ma;la++)ka.setAttribute(ja.attributes[la].name,ja.attributes[la].value);T=ka,ja.parentNode.replaceChild(ka,ja),P(ka,function(){T=null,fa(ia+1)})}else ea()}var ga=document.querySelectorAll("script[import-dependency]"),ha=ga.length;fa(0)},R.prototype.G=function(ea){var fa=document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),ga=fa.length;if(ga){for(var ha=$&&!!document.querySelector("link[rel=stylesheet][href][type=import-disable]"),ia={},ja=0,ka=fa.length;ja<ka&&(ia.a=fa[ja]);ia={a:ia.a},ja++)if(P(ia.a,function(ma){return function(){ma.a.removeAttribute("import-dependency"),--ga||ea()}}(ia)),ha&&ia.a.parentNode!==document.head){var la=document.createElement(ia.a.localName);for(la.__appliedElement=ia.a,la.setAttribute("type","import-placeholder"),ia.a.parentNode.insertBefore(la,ia.a.nextSibling),la=L(ia.a);la&&L(la);)la=L(la);la.parentNode!==document.head&&(la=null),document.head.insertBefore(ia.a,la),ia.a.removeAttribute("type")}}else ea()},R.prototype.B=function(){for(var ga,ea=document.querySelectorAll("link[rel=import]"),fa=ea.length-1;0<=fa&&(ga=ea[fa]);fa--)this.m(ga)},R.prototype.m=function(ea){ea.__loaded||(ea.__loaded=!0,ea.import&&(ea.import.readyState="complete"),ea.dispatchEvent(s(ea.import?"load":"error",{bubbles:!1,cancelable:!1,detail:void 0})))},R.prototype.C=function(ea){for(var ga,fa=0;fa<ea.length;fa++)if(ga=ea[fa],ga.addedNodes)for(var ia,ha=0;ha<ga.addedNodes.length;ha++)ia=ga.addedNodes[ha],ia&&ia.nodeType===Node.ELEMENT_NODE&&(Q(ia)?this.o(ia):this.f(ia))},S){for(var ca,_=document.querySelectorAll("link[rel=import]"),aa=0,ba=_.length;aa<ba&&(ca=_[aa]);aa++)ca.import&&"loading"===ca.import.readyState||(ca.__loaded=!0);_=function(ea){ea=ea.target,Q(ea)&&(ea.__loaded=!0)},document.addEventListener("load",_,!0),document.addEventListener("error",_,!0)}else{var da=Object.getOwnPropertyDescriptor(Node.prototype,"baseURI");Object.defineProperty((!da||da.configurable?Node:Element).prototype,"baseURI",{get:function(){var ea=Q(this)?this:L(this);return ea?ea.href:da&&da.get?da.get.call(this):(document.querySelector("base")||window.location).href},configurable:!0,enumerable:!0}),N(function(){return new R})}O(function(){return document.dispatchEvent(s("HTMLImportsLoaded",{cancelable:!0,bubbles:!0,detail:void 0}))}),o.useNative=S,o.whenReady=O,o.importForElement=L})(window.HTMLImports=window.HTMLImports||{}),function(){var o=window.customElements,s=window.HTMLImports;if(window.WebComponents=window.WebComponents||{},o&&o.polyfillWrapFlushCallback){var L,M=function(){if(L){var O=L;return L=null,O(),!0}},N=s.whenReady;o.polyfillWrapFlushCallback(function(O){L=O,N(M)}),s.whenReady=function(O){N(function(){M()?s.whenReady(O):O()})}}s.whenReady(function(){requestAnimationFrame(function(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})})}();var i=document.createElement("style");i.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var j=document.querySelector("head");j.insertBefore(i,j.firstChild)}).call(self);