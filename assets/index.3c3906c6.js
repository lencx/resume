var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,r=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,n=(e,n)=>{for(var o in n||(n={}))a.call(n,o)&&r(e,o,n[o]);if(t)for(var o of t(n))l.call(n,o)&&r(e,o,n[o]);return e};import{r as o,d as m}from"./vendor.dd933207.js";import{r as s,a as p}from"./tools.7d9a5e73.js";const c=({name:e,label:a,value:t,onChange:l})=>{const r=a+e;return o.createElement("div",{className:"radio"},o.createElement("input",{type:"radio",id:r,name:e,onChange:e=>{l&&l(e.target.value)},value:t}),o.createElement("label",{htmlFor:r},a))},i=({name:e,options:a,onChange:t})=>o.createElement("div",{className:"radio-group"},a.map((a=>o.createElement(c,n(n({key:a.value},a),{name:e,onChange:t})))));const u=({label:e,title:a,value:t,onChange:l,placeholder:r})=>o.createElement("div",{className:"form-item"},a&&o.createElement("span",null,a),o.createElement("input",{type:"text",onChange:a=>{l&&l(a.target.value||"",e)},placeholder:r,value:t}));u.defaultProps={label:"",placeholder:""};export default()=>{const[e,a]=o.useReducer(((e,a)=>n(n({},e),a)),{}),t=m();return o.createElement("div",{className:"home-page"},o.createElement(i,{name:"resumeType",options:s,onChange:t=>{t!==e.resumeType&&a({resumeType:t,link:""}),a({resumeType:t,link:""})}}),e.resumeType?o.createElement(u,{label:e.resumeType,placeholder:p(e.resumeType,"placeholder"),onChange:e=>{a({link:e})},value:e.link}):o.createElement("div",{className:"tip"},"请选择加载简历数据方式"),o.createElement("button",{disabled:!e.link,className:"preview-btn",onClick:()=>{t.push(`/${btoa(e.resumeType+"|"+e.link)}`)}},"预览"))};