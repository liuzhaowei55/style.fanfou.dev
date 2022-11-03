"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>E,default:()=>P,frontMatter:()=>O,metadata:()=>w,toc:()=>x});var n=r(7462),a=r(7294),c=r(3905),i=r(6010),o=r(3438),s=r(9960),l=r(3919),p=r(5999);const u="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return a.createElement(s.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},r)}function y(e){let{href:t,icon:r,title:n,description:c}=e;return a.createElement(f,{href:t},a.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:n},r," ",n),c&&a.createElement("p",{className:(0,i.Z)("text--truncate",d),title:c},c))}function v(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?a.createElement(y,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.xz)(t.docId??void 0);return a.createElement(y,{href:t.href,icon:r,title:t.label,description:null==n?void 0:n.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,o.jA)();return a.createElement(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return a.createElement(b,e);const n=(0,o.MN)(t);return a.createElement("section",{className:(0,i.Z)("row",r)},n.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}const O={},E="JavaScript Code Style",w={unversionedId:"javascript/index",id:"javascript/index",title:"JavaScript Code Style",description:"",source:"@site/docs/javascript/index.md",sourceDirName:"javascript",slug:"/javascript/",permalink:"/docs/javascript/",draft:!1,editUrl:"https://github.com/liuzhaowei55/style.fanfou.dev/tree/main/docs/javascript/index.md",tags:[],version:"current",lastUpdatedAt:1656645590,formattedLastUpdatedAt:"2022\u5e747\u67081\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Spotless",permalink:"/docs/java/spotless"},next:{title:"husky",permalink:"/docs/javascript/husky"}},k={},x=[],N={toc:x};function P(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"javascript-code-style"},"JavaScript Code Style"),(0,c.kt)(j,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}P.isMDXComponent=!0}}]);