(function(){'use strict';window.WebComponents=window.WebComponents||{};var a='webcomponents-loader.js',b=[];if('import'in document.createElement('link')||b.push('hi'),(!('attachShadow'in Element.prototype&&'getRootNode'in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&b.push('sd'),(!window.customElements||window.customElements.forcePolyfill)&&b.push('ce'),'content'in document.createElement('template')&&window.Promise&&Array.from&&document.createDocumentFragment().cloneNode()instanceof DocumentFragment||(b=['lite']),b.length){var c=document.querySelector('script[src*="'+a+'"]'),d=document.createElement('script'),e='webcomponents-'+b.join('-')+'.js',f=c.src.replace(a,e);d.src=f,'loading'===document.readyState&&'import'in document.createElement('link')?document.write(d.outerHTML):document.head.appendChild(d)}else{var g=function(){requestAnimationFrame(function(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent('WebComponentsReady',{bubbles:!0}))})};'loading'===document.readyState?document.addEventListener('readystatechange',function h(){g(),document.removeEventListener('readystatechange',h)}):g()}})();