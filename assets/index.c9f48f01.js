import{c as e,r as t,a as n,b as r,u as o,t as a}from"./vendor.dd933207.js";import{g as l,d as i,f as c,c as s}from"./tools.7d9a5e73.js";
/*! For license information please see index.js.LICENSE.txt */var u=e((function(e,r){var o,a;"undefined"!=typeof self&&self,e.exports=(o=t,a=n,function(){var e={655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return a},__rest:function(){return l},__decorate:function(){return i},__param:function(){return c},__metadata:function(){return s},__awaiter:function(){return u},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return m},__read:function(){return h},__spread:function(){return v},__spreadArrays:function(){return y},__spreadArray:function(){return b},__await:function(){return g},__asyncGenerator:function(){return w},__asyncDelegator:function(){return E},__asyncValues:function(){return _},__makeTemplateObject:function(){return P},__importStar:function(){return x},__importDefault:function(){return O},__classPrivateFieldGet:function(){return k},__classPrivateFieldSet:function(){return j}});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function i(e,t,n,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(o,a){function l(e){try{c(r.next(e))}catch(t){a(t)}}function i(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(i){a=[6,i],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)l.push(r.value)}catch(i){o={error:i}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return l}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}function y(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],l=0,i=a.length;l<i;l++,o++)r[o]=a[l];return r}function b(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},l("next"),l("throw"),l("return"),r[Symbol.asyncIterator]=function(){return this},r;function l(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||i(e,t)}))})}function i(e,t){try{(n=o[e](t)).value instanceof g?Promise.resolve(n.value.v).then(c,s):u(a[0][2],n)}catch(r){u(a[0][3],r)}var n}function c(e){i("next",e)}function s(e){i("throw",e)}function u(e,t){e(t),a.shift(),a.length&&i(a[0][0],a[0][1])}}function E(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:g(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){var a,l,i,c;a=r,l=o,i=(t=e[n](t)).done,c=t.value,Promise.resolve(c).then((function(e){a({value:e,done:i})}),l)}))}}}function P(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var S=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return S(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function k(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function j(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}},297:function(e){e.exports=o},268:function(e){e.exports=a}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.useReactToPrint=e.PrintContextConsumer=void 0;var t=n(655),o=n(297),a=n(268),l=Object.prototype.hasOwnProperty.call(o,"createContext"),i=Object.prototype.hasOwnProperty.call(o,"useMemo")&&Object.prototype.hasOwnProperty.call(o,"useCallback"),c=l?o.createContext({}):null;e.PrintContextConsumer=c?c.Consumer:function(){return null};var s={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},u=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.startPrint=function(e){var t=n.props,r=t.onAfterPrint,o=t.onPrintError,a=t.print,l=t.suppressErrors,i=t.documentTitle;setTimeout((function(){if(e.contentWindow){if(e.contentWindow.focus(),a)a(e).then(n.handleRemoveIframe).catch((function(e){o?o("print",e):l||console.error("An error was thrown by the specified `print` function",e)}));else if(e.contentWindow.print){var t=document.title;i&&(document.title=i),e.contentWindow.print(),i&&(document.title=t),r&&r()}else l||console.error("Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes.");n.handleRemoveIframe()}else l||console.error("Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/")}),500)},n.triggerPrint=function(e){var t=n.props,r=t.onBeforePrint,o=t.onPrintError;if(r){var a=r();a&&"function"==typeof a.then?a.then((function(){n.startPrint(e)})).catch((function(e){o&&o("onBeforePrint",e)})):n.startPrint(e)}else n.startPrint(e)},n.handleClick=function(){var e=n.props,t=e.onBeforeGetContent,r=e.onPrintError;if(t){var o=t();o&&"function"==typeof o.then?o.then(n.handlePrint).catch((function(e){r&&r("onBeforeGetContent",e)})):n.handlePrint()}else n.handlePrint()},n.handlePrint=function(){var e=n.props,r=e.bodyClass,o=e.content,l=e.copyStyles,i=e.fonts,c=e.pageStyle,s=e.suppressErrors,u=o();if(void 0!==u)if(null!==u){var f=document.createElement("iframe");f.style.position="absolute",f.style.top="-1000px",f.style.left="-1000px",f.id="printWindow",f.title="Print Window";var d=a.findDOMNode(u);if(d){var p=d instanceof Text,m=document.querySelectorAll("link[rel='stylesheet']"),h=p?[]:d.querySelectorAll("img");n.linkTotal=m.length+h.length,n.linksLoaded=[],n.linksErrored=[],n.fontsLoaded=[],n.fontsErrored=[];var v=function(e,t){t?n.linksLoaded.push(e):(s||console.error('"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',e),n.linksErrored.push(e)),n.linksLoaded.length+n.linksErrored.length+n.fontsLoaded.length+n.fontsErrored.length===n.linkTotal&&n.triggerPrint(f)};f.onload=function(){var e,o,a,u;f.onload=null;var m=f.contentDocument||(null===(o=f.contentWindow)||void 0===o?void 0:o.document);if(m){m.body.appendChild(d.cloneNode(!0)),i&&((null===(a=f.contentDocument)||void 0===a?void 0:a.fonts)&&(null===(u=f.contentWindow)||void 0===u?void 0:u.FontFace)?i.forEach((function(e){var t=new FontFace(e.family,e.source);f.contentDocument.fonts.add(t),t.loaded.then((function(e){n.fontsLoaded.push(e)})).catch((function(e){n.fontsErrored.push(t),s||console.error('"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',t,"The error from loading the font is:",e)}))})):s||console.error('"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API'));var y="function"==typeof c?c():c;if("string"!=typeof y)s||console.error('"react-to-print" expected a "string" from `pageStyle` but received "'+typeof y+'". Styles from `pageStyle` will not be applied.');else{var b=m.createElement("style");b.appendChild(m.createTextNode(y)),m.head.appendChild(b)}if(r&&(e=m.body.classList).add.apply(e,t.__spreadArray([],t.__read(r.split(" ")))),!p){for(var g=m.querySelectorAll("canvas"),w=d.querySelectorAll("canvas"),E=0,_=g.length;E<_;++E){var P=(D=g[E]).getContext("2d");P&&P.drawImage(w[E],0,0)}for(E=0;E<h.length;E++){var S=h[E],x=S.getAttribute("src");if(x){var O=new Image;O.onload=v.bind(null,S,!0),O.onerror=v.bind(null,S,!1),O.src=x}else s||console.warn('"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',S)}var k="input",j=d.querySelectorAll(k),T=m.querySelectorAll(k);for(E=0;E<j.length;E++)T[E].value=j[E].value;var C="input[type=checkbox],input[type=radio]",N=d.querySelectorAll(C),A=m.querySelectorAll(C);for(E=0;E<N.length;E++)A[E].checked=N[E].checked;var R="select",I=d.querySelectorAll(R),q=m.querySelectorAll(R);for(E=0;E<I.length;E++)q[E].value=I[E].value}if(l)for(var L=document.querySelectorAll("style, link[rel='stylesheet']"),M=(E=0,L.length);E<M;++E){var D;if("STYLE"===(D=L[E]).tagName){var W=m.createElement(D.tagName),F=D.sheet;if(F){for(var $="",B=0,G=F.cssRules.length;B<G;++B)"string"==typeof F.cssRules[B].cssText&&($+=F.cssRules[B].cssText+"\r\n");W.setAttribute("id","react-to-print-"+E),W.appendChild(m.createTextNode($)),m.head.appendChild(W)}}else if(D.getAttribute("href")){W=m.createElement(D.tagName),B=0;for(var z=D.attributes.length;B<z;++B){var H=D.attributes[B];H&&W.setAttribute(H.nodeName,H.nodeValue||"")}W.onload=v.bind(null,W,!0),W.onerror=v.bind(null,W,!1),m.head.appendChild(W)}else s||console.warn('"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',D),v(D,!0)}}0!==n.linkTotal&&l||n.triggerPrint(f)},n.handleRemoveIframe(!0),document.body.appendChild(f)}else s||console.error('"react-to-print" could not locate the DOM node corresponding with the `content` prop')}else s||console.error('There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.');else s||console.error('For "react-to-print" to work only Class based components can be printed.')},n.handleRemoveIframe=function(e){var t=n.props.removeAfterPrint;if(e||t){var r=document.getElementById("printWindow");r&&document.body.removeChild(r)}},n}return t.__extends(n,e),n.prototype.render=function(){var e=this.props,t=e.children,n=e.suppressErrors,r=e.trigger;if(r)return o.cloneElement(r(),{onClick:this.handleClick});if(!c)return n||console.error('"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"'),null;var a={handlePrint:this.handleClick};return o.createElement(c.Provider,{value:a},t)},n.defaultProps=s,n}(o.Component);e.default=u,e.useReactToPrint=i?function(e){var n=o.useMemo((function(){return new u(t.__assign(t.__assign({},s),e))}),[e]);return o.useCallback((function(){return n.handleClick()}),[n])}:function(e){e.suppressErrors||console.warn('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')}}(),r}())})),f=e((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&e.push(l)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var i in o)t.call(o,i)&&o[i]&&e.push(i);else e.push(o.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}));
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/const d=({dataSource:e})=>{const n=l(e),r="男"===n("性别");return t.createElement("div",{className:"resume-head"},t.createElement("div",{className:"flex"},t.createElement("img",{className:"avatar",src:n("头像")||(r?"/assets/male.5e2041e2.png":"/assets/female.df8fb0e5.png"),alt:"头像"}),t.createElement("div",{className:"info flex"},t.createElement("span",{className:"name flex"},n("姓名"),t.createElement("i",{className:f({male:r})},r?"♂":"♀")),t.createElement("div",null,t.createElement("span",null,n("公司名称")),"/",t.createElement("span",null,n("职位名称"))))),t.createElement("div",{className:"work"},t.createElement("span",null,i(n("工作时间")),"年工作经验"),"/",t.createElement("span",null,n("最高学历")),"/",t.createElement("span",null,i(n("出生日期")),"岁")),t.createElement("div",null,t.createElement("span",null,n("所在城市")),"/",t.createElement("span",null,n("手机号码")),"/",t.createElement("span",null,n("联系邮箱"))))};const p=()=>t.createElement("div",{className:"resume-content-edu"},t.createElement("h3",null,"教育经历"));const m=({avatar:e,size:n,title:r,desc:o})=>t.createElement("div",{className:"picinfo"},t.createElement("img",{className:`${n}`,src:e}),t.createElement("div",null,t.createElement("span",null,r),t.createElement("span",null,o)));m.defaultProps={size:"lg"};const h=({dataSource:e})=>t.createElement("div",{className:"resume-content-company"},t.createElement("h3",null,"工作经历"),t.createElement("ul",null,e.map(((e,n)=>{const r=l(e);return t.createElement("li",{key:n,className:"company-item"},t.createElement(m,{size:"sm",avatar:"/assets/company.3e637a4e.svg",title:r("公司名称"),desc:r("公司行业")}),t.createElement("span",null,r("公司名称")),"/",t.createElement("span",null,r("公司行业")),"/",t.createElement("span",null,r("所属部门")),"/",t.createElement("span",null,r("职位名称")),t.createElement("div",null,r("技能标签")),t.createElement("div",null,r("工作内容")))}))));h.defaultProps={dataSource:[]};const v=({dataSource:e})=>t.createElement("div",{className:"resume-content-advantage"},t.createElement("h3",null,"个人优势"),t.createElement("p",null,e));const y=()=>t.createElement("div",{className:"resume-content-community"},t.createElement("h3",null,"社区网站"));const b=({dataSource:e})=>{const n=l(e);return t.createElement("div",{className:"resume-card-content"},t.createElement(d,{dataSource:n("个人信息")}),t.createElement("div",null,t.createElement(v,{dataSource:n("个人优势")}),t.createElement(h,{dataSource:n("工作经历")}),t.createElement(y,{dataSource:n("社区网站")}),t.createElement(p,{dataSource:n("教育经历")})))};const g=({className:e})=>t.createElement("svg",{className:f("spinner",e),width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},t.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}));var w={"最后更新时间":"2021.05.05","个人信息":{"头像":"","头像2":"https://static.nofwl.com/lencx.png","姓名":"搬砖酱","性别":"女","出生日期":"2003.01","工作时间":"2015.06","公司名称":"跨国搬砖集团","职位名称":"搬砖攻城师","最高学历":"无学历","所在城市":"上海","手机号码":"12345678910","联系邮箱":"banzhuan@example.com","微信":"weixin001"},"社区网站":[{name:"GitHub",link:"xxx"},{name:"Blog",link:"xxx"},{name:"掘金",link:"xxx"}],"个人优势":"优势太多了，一下子不知从何说起，比如搬砖力气大，搬一次顶几次，一个能顶俩","工作经历":[{"公司名称":"公司1号","公司行业":"金融业","所属部门":"技术部","职位名称":"前端搬砖","在职时间":["2000.01.01","2020.01.01"],"技能标签":["HTML","JS","CSS"],"工作内容":["每天坚持多搬几块砖","多造轮子，多挖坑","各种框架统统不会用","希望抱大腿，迎娶白富美","不想努力了"]},{"公司名称":"公司2号","公司行业":"金融业","所属部门":"技术部","职位名称":"前端搬砖","在职时间":["2000.01.01","2020.01.01"],"技能标签":["HTML","JS","CSS"],"工作内容":["每天坚持多搬几块砖","多造轮子，多挖坑","各种框架统统不会用","希望抱大腿，迎娶白富美","不想努力了"]}],"教育经历":[{"学校名称":"","在校时间":["",""],"学历":"","专业名称":""}]};export default()=>{const e=t.useRef(null),n=o(),r=u.useReactToPrint({content:()=>e.current}),{resumeData:i,loading:f,reqResume:d,msg:p}=function(){const[e,n]=t.useState(),[r,o]=t.useState(!1),[a,l]=t.useState("");return{resumeData:e,loading:r,reqResume:async e=>{if(!e)return void n(w);if(e.msg)return void l(e.msg);o(!0);let t="";switch(e.type){case"github":t=`https://raw.githubusercontent.com/${e.username}/${e.repo}/${e.branch}/${e.path}`;break;case"gitee":t=`https://gitee.com/${e.username}/${e.repo}/raw/${e.branch}/${e.path}`;break;case"url":t=e.link}try{const e=await fetch(t).then((e=>e.json()));n(e)}catch(r){l("简历数据请求失败")}o(!1)},msg:a}}();t.useEffect((()=>{(null==n?void 0:n.resume)&&(c(atob((null==n?void 0:n.resume)||"")),d())}),[]),t.useEffect((()=>{i&&(document.title=`${l(i,"个人信息","姓名")}的简历`)}),[i]);return!i||f||p?t.createElement("div",{className:"status-container"},f?t.createElement(g,null):t.createElement("div",null,p||"获取简历数据失败")):t.createElement("div",{className:"resume-page"},t.createElement("div",{className:"op-status-bar"},t.createElement("div",null,t.createElement("span",{className:"pdf-btn",onClick:r},"下载PDF"),t.createElement("span",{className:"share-btn",onClick:()=>{s(window.location.href),a("已复制到剪贴板，去分享")}},"分享简历")),t.createElement("span",{className:"lasttime"},"最后更新时间: ",l(i,"最后更新时间"))),t.createElement("div",{className:"resume-card"},t.createElement("div",{ref:e},t.createElement(b,{dataSource:i}))))};