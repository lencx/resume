import{c as e,r as t,a as n,b as r}from"./vendor.a876d4ed.js";
/*! For license information please see index.js.LICENSE.txt */var o=e((function(e,r){var o,i;"undefined"!=typeof self&&self,e.exports=(o=t,i=n,function(){var e={655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return a},__decorate:function(){return s},__param:function(){return u},__metadata:function(){return c},__awaiter:function(){return l},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return h},__values:function(){return p},__read:function(){return m},__spread:function(){return y},__spreadArrays:function(){return v},__spreadArray:function(){return b},__await:function(){return g},__asyncGenerator:function(){return w},__asyncDelegator:function(){return _},__asyncValues:function(){return S},__makeTemplateObject:function(){return $},__importStar:function(){return E},__importDefault:function(){return O},__classPrivateFieldGet:function(){return P},__classPrivateFieldSet:function(){return M}});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function h(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function b(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=o[e](t)).value instanceof g?Promise.resolve(n.value.v).then(u,c):l(i[0][2],n)}catch(r){l(i[0][3],r)}var n}function u(e){s("next",e)}function c(e){s("throw",e)}function l(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:g(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){var i,a,s,u;i=r,a=o,s=(t=e[n](t)).done,u=t.value,Promise.resolve(u).then((function(e){i({value:e,done:s})}),a)}))}}}function $(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var x=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return x(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function P(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function M(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}},297:function(e){e.exports=o},268:function(e){e.exports=i}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.useReactToPrint=e.PrintContextConsumer=void 0;var t=n(655),o=n(297),i=n(268),a=Object.prototype.hasOwnProperty.call(o,"createContext"),s=Object.prototype.hasOwnProperty.call(o,"useMemo")&&Object.prototype.hasOwnProperty.call(o,"useCallback"),u=a?o.createContext({}):null;e.PrintContextConsumer=u?u.Consumer:function(){return null};var c={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},l=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.startPrint=function(e){var t=n.props,r=t.onAfterPrint,o=t.onPrintError,i=t.print,a=t.suppressErrors,s=t.documentTitle;setTimeout((function(){if(e.contentWindow){if(e.contentWindow.focus(),i)i(e).then(n.handleRemoveIframe).catch((function(e){o?o("print",e):a||console.error("An error was thrown by the specified `print` function",e)}));else if(e.contentWindow.print){var t=document.title;s&&(document.title=s),e.contentWindow.print(),s&&(document.title=t),r&&r()}else a||console.error("Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes.");n.handleRemoveIframe()}else a||console.error("Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/")}),500)},n.triggerPrint=function(e){var t=n.props,r=t.onBeforePrint,o=t.onPrintError;if(r){var i=r();i&&"function"==typeof i.then?i.then((function(){n.startPrint(e)})).catch((function(e){o&&o("onBeforePrint",e)})):n.startPrint(e)}else n.startPrint(e)},n.handleClick=function(){var e=n.props,t=e.onBeforeGetContent,r=e.onPrintError;if(t){var o=t();o&&"function"==typeof o.then?o.then(n.handlePrint).catch((function(e){r&&r("onBeforeGetContent",e)})):n.handlePrint()}else n.handlePrint()},n.handlePrint=function(){var e=n.props,r=e.bodyClass,o=e.content,a=e.copyStyles,s=e.fonts,u=e.pageStyle,c=e.suppressErrors,l=o();if(void 0!==l)if(null!==l){var f=document.createElement("iframe");f.style.position="absolute",f.style.top="-1000px",f.style.left="-1000px",f.id="printWindow",f.title="Print Window";var d=i.findDOMNode(l);if(d){var h=d instanceof Text,p=document.querySelectorAll("link[rel='stylesheet']"),m=h?[]:d.querySelectorAll("img");n.linkTotal=p.length+m.length,n.linksLoaded=[],n.linksErrored=[],n.fontsLoaded=[],n.fontsErrored=[];var y=function(e,t){t?n.linksLoaded.push(e):(c||console.error('"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',e),n.linksErrored.push(e)),n.linksLoaded.length+n.linksErrored.length+n.fontsLoaded.length+n.fontsErrored.length===n.linkTotal&&n.triggerPrint(f)};f.onload=function(){var e,o,i,l;f.onload=null;var p=f.contentDocument||(null===(o=f.contentWindow)||void 0===o?void 0:o.document);if(p){p.body.appendChild(d.cloneNode(!0)),s&&((null===(i=f.contentDocument)||void 0===i?void 0:i.fonts)&&(null===(l=f.contentWindow)||void 0===l?void 0:l.FontFace)?s.forEach((function(e){var t=new FontFace(e.family,e.source);f.contentDocument.fonts.add(t),t.loaded.then((function(e){n.fontsLoaded.push(e)})).catch((function(e){n.fontsErrored.push(t),c||console.error('"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',t,"The error from loading the font is:",e)}))})):c||console.error('"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API'));var v="function"==typeof u?u():u;if("string"!=typeof v)c||console.error('"react-to-print" expected a "string" from `pageStyle` but received "'+typeof v+'". Styles from `pageStyle` will not be applied.');else{var b=p.createElement("style");b.appendChild(p.createTextNode(v)),p.head.appendChild(b)}if(r&&(e=p.body.classList).add.apply(e,t.__spreadArray([],t.__read(r.split(" ")))),!h){for(var g=p.querySelectorAll("canvas"),w=d.querySelectorAll("canvas"),_=0,S=g.length;_<S;++_){var $=(W=g[_]).getContext("2d");$&&$.drawImage(w[_],0,0)}for(_=0;_<m.length;_++){var x=m[_],E=x.getAttribute("src");if(E){var O=new Image;O.onload=y.bind(null,x,!0),O.onerror=y.bind(null,x,!1),O.src=E}else c||console.warn('"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',x)}var P="input",M=d.querySelectorAll(P),D=p.querySelectorAll(P);for(_=0;_<M.length;_++)D[_].value=M[_].value;var T="input[type=checkbox],input[type=radio]",k=d.querySelectorAll(T),C=p.querySelectorAll(T);for(_=0;_<k.length;_++)C[_].checked=k[_].checked;var j="select",A=d.querySelectorAll(j),N=p.querySelectorAll(j);for(_=0;_<A.length;_++)N[_].value=A[_].value}if(a)for(var I=document.querySelectorAll("style, link[rel='stylesheet']"),R=(_=0,I.length);_<R;++_){var W;if("STYLE"===(W=I[_]).tagName){var L=p.createElement(W.tagName),q=W.sheet;if(q){for(var H="",F=0,Y=q.cssRules.length;F<Y;++F)"string"==typeof q.cssRules[F].cssText&&(H+=q.cssRules[F].cssText+"\r\n");L.setAttribute("id","react-to-print-"+_),L.appendChild(p.createTextNode(H)),p.head.appendChild(L)}}else if(W.getAttribute("href")){L=p.createElement(W.tagName),F=0;for(var B=W.attributes.length;F<B;++F){var G=W.attributes[F];G&&L.setAttribute(G.nodeName,G.nodeValue||"")}L.onload=y.bind(null,L,!0),L.onerror=y.bind(null,L,!1),p.head.appendChild(L)}else c||console.warn('"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',W),y(W,!0)}}0!==n.linkTotal&&a||n.triggerPrint(f)},n.handleRemoveIframe(!0),document.body.appendChild(f)}else c||console.error('"react-to-print" could not locate the DOM node corresponding with the `content` prop')}else c||console.error('There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.');else c||console.error('For "react-to-print" to work only Class based components can be printed.')},n.handleRemoveIframe=function(e){var t=n.props.removeAfterPrint;if(e||t){var r=document.getElementById("printWindow");r&&document.body.removeChild(r)}},n}return t.__extends(n,e),n.prototype.render=function(){var e=this.props,t=e.children,n=e.suppressErrors,r=e.trigger;if(r)return o.cloneElement(r(),{onClick:this.handleClick});if(!u)return n||console.error('"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"'),null;var i={handlePrint:this.handleClick};return o.createElement(u.Provider,{value:i},t)},n.defaultProps=c,n}(o.Component);e.default=l,e.useReactToPrint=s?function(e){var n=o.useMemo((function(){return new l(t.__assign(t.__assign({},c),e))}),[e]);return o.useCallback((function(){return n.handleClick()}),[n])}:function(e){e.suppressErrors||console.warn('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')}}(),r}())})),i=e((function(e,t){e.exports=function(){var e="millisecond",t="second",n="minute",r="hour",o="day",i="week",a="month",s="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},p={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+h(r,2,"0")+":"+h(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,a),i=n-o<0,s=t.clone().add(r+(i?-1:1),a);return+(-(r+(n-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return{M:a,y:u,w:i,d:o,D:c,h:r,m:n,s:t,ms:e,Q:s}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},m="en",y={};y[m]=d;var v=function(e){return e instanceof _},b=function(e,t,n){var r;if(!e)return m;if("string"==typeof e)y[e]&&(r=e),t&&(y[e]=t,r=e);else{var o=e.name;y[o]=e,r=o}return!n&&r&&(m=r),r||!n&&m},g=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new _(n)},w=p;w.l=b,w.i=v,w.w=function(e,t){return g(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function d(e){this.$L=b(e.locale,null,!0),this.parse(e)}var h=d.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(l);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return w},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(e,t){var n=g(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return g(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<g(e)},h.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,s){var l=this,f=!!w.u(s)||s,d=w.p(e),h=function(e,t){var n=w.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return f?n:n.endOf(o)},p=function(e,t){return w.w(l.toDate()[e].apply(l.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,y=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return f?h(1,0):h(31,11);case a:return f?h(1,y):h(0,y+1);case i:var g=this.$locale().weekStart||0,_=(m<g?m+7:m)-g;return h(f?v-_:v+(6-_),y);case o:case c:return p(b+"Hours",0);case r:return p(b+"Minutes",1);case n:return p(b+"Seconds",2);case t:return p(b+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(i,s){var l,f=w.p(i),d="set"+(this.$u?"UTC":""),h=(l={},l[o]=d+"Date",l[c]=d+"Date",l[a]=d+"Month",l[u]=d+"FullYear",l[r]=d+"Hours",l[n]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[f],p=f===o?this.$D+(s-this.$W):s;if(f===a||f===u){var m=this.clone().set(c,1);m.$d[h](p),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[w.p(e)]()},h.add=function(e,s){var c,l=this;e=Number(e);var f=w.p(s),d=function(t){var n=g(l);return w.w(n.date(n.date()+Math.round(t*e)),l)};if(f===a)return this.set(a,this.$M+e);if(f===u)return this.set(u,this.$y+e);if(f===o)return d(1);if(f===i)return d(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[t]=1e3,c)[f]||1,p=this.$d.getTime()+e*h;return w.w(p,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),o=this.$locale(),i=this.$H,a=this.$m,s=this.$M,u=o.weekdays,c=o.months,l=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].substr(0,i)},d=function(e){return w.s(i%12||12,e,"0")},h=o.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:w.s(s+1,2,"0"),MMM:l(o.monthsShort,s,c,3),MMMM:l(c,s),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(o.weekdaysMin,this.$W,u,2),ddd:l(o.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:w.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,a,!0),A:h(i,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(e,t){return t||p[e]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(e,c,l){var f,d=w.p(c),h=g(e),p=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,y=w.m(this,h);return y=(f={},f[u]=y/12,f[a]=y,f[s]=y/3,f[i]=(m-p)/6048e5,f[o]=(m-p)/864e5,f[r]=m/36e5,f[n]=m/6e4,f[t]=m/1e3,f)[d]||m,l?y:w.a(y)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return y[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=b(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return w.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}(),S=_.prototype;return g.prototype=S,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W",o],["$M",a],["$y",u],["$D",c]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),g.extend=function(e,t){return e.$i||(e(t,_,g),e.$i=!0),g},g.locale=b,g.isDayjs=v,g.unix=function(e){return g(1e3*e)},g.en=y[m],g.Ls=y,g.p={},g}()}));function a(e,...t){return t.length>0?function e(n){return t.length>0?e(n[t.shift()]):n||""}(e):function(t){return e[t]||""}}function s(e,t){const n=i(t||new Date).diff(i(e),"year");return n<0||isNaN(n)?0:n}const u=({dataSource:e})=>{const n=a(e);return t.createElement("div",{className:"resume-head"},t.createElement("div",null,t.createElement("img",{className:"avatar",src:n("头像")||("男"===n("性别")?"/resume/assets/male.5e2041e2.png":"/resume/assets/female.df8fb0e5.png"),alt:"头像"}),t.createElement("span",{className:"name"},n("姓名")),t.createElement("span",null,n("公司名称"))," | ",t.createElement("span",null,n("职位名称"))),t.createElement("div",{className:"work"},t.createElement("span",null,s(n("工作时间")),"年工作经验")," | ",t.createElement("span",null,n("最高学历"))," | ",t.createElement("span",null,s(n("出生日期")),"岁")),t.createElement("div",null,t.createElement("span",null,n("所在城市"))," | ",t.createElement("span",null,n("手机号码"))," | ",t.createElement("span",null,n("联系邮箱"))))};const c=()=>t.createElement("div",{className:"resume-content"},"Conetent");const l=({dataSource:e})=>{const n=a(e);return t.createElement("div",{className:"resume-card-content"},t.createElement(u,{dataSource:n("个人信息")}),t.createElement(c,null))};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/var f=e((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&e.push(a)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var s in o)t.call(o,s)&&o[s]&&e.push(s);else e.push(o.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}));const d=({className:e})=>t.createElement("svg",{className:f("spinner",e),width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},t.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}));var h={"最后更新时间":"2021.05.05","个人信息":{"头像":"","头像2":"https://static.nofwl.com/lencx.png","姓名":"搬砖酱","性别":"男","出生日期":"1990.01","工作时间":"2010.06","公司名称":"跨国搬砖集团","职位名称":"搬砖攻城师","最高学历":"无学历","所在城市":"上海","手机号码":"12345678910","联系邮箱":"banzhuan@example.com"},"个人优势":"优势太多了，一下子不知从何说起，比如搬砖力气大，搬一次顶几次，一个能顶俩","工作经历":[{"公司名称":"公司1号","公司行业":"金融业","所属部门":"技术部","职位名称":"前端搬砖","在职时间":["2000.01.01","2020.01.01"],"技能标签":["HTML","JS","CSS"],"工作内容":["每天生产一些bug","不怎么会写代码","各种框架统统不会用","希望抱大腿，迎娶白富美"]}],"教育经历":[{"学校名称":"","在校时间":["",""],"学历":"","专业名称":""}],"社交主页":[{name:"GitHub",link:"xxx"},{name:"Blog",link:"xxx"},{name:"掘金",link:"xxx"}]};export default()=>{const e=t.useRef(null),n=t.useRef(null),r=o.useReactToPrint({content:()=>e.current}),{resumeData:i,loading:s,reqResume:u}=function(){const[e,n]=t.useState(),[r,o]=t.useState(!1);return{resumeData:e,loading:r,reqResume:async e=>{if(e){o(!0);try{const e=await fetch("https://raw.githubusercontent.com/lencx/resume/main/template/me.json").then((e=>e.json()));n(e),o(!1)}catch(t){console.error(t)}}else n(h)}}}();t.useEffect((()=>{u()}),[]),t.useEffect((()=>{if(i){let e=a(i);n.current=e,document.title=`${a(i,"个人信息","姓名")}的简历`}}),[i]);return!i||s?t.createElement("div",{className:"status-container"},s?t.createElement(d,null):t.createElement("div",null,"获取简历数据失败")):t.createElement("div",{className:"resume-page"},t.createElement("div",{className:"op-status-bar"},t.createElement("div",null,t.createElement("span",{className:"pdf-btn",onClick:r},"下载PDF"),t.createElement("span",{className:"share-btn",onClick:()=>{!function(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(window.location.href),alert("已复制到剪贴板，去分享")}},"分享简历")),t.createElement("span",{className:"lasttime"},"最后更新时间: ",n.current&&n.current("最后更新时间"))),t.createElement("div",{className:"resume-card"},t.createElement("div",{ref:e},t.createElement(l,{dataSource:i}))))};
