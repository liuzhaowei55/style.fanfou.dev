"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[8425],{4892:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>y,default:()=>w,frontMatter:()=>g,metadata:()=>b,toc:()=>C});var i=n(5893),r=n(1151),s=(n(7294),n(6010)),c=n(3438),a=n(9960),o=n(3919),d=n(5999),l=n(2503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(t){let{href:e,children:n}=t;return(0,i.jsx)(a.Z,{href:e,className:(0,s.Z)("card padding--lg",u.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:r,description:c}=t;return(0,i.jsxs)(p,{href:e,children:[(0,i.jsxs)(l.Z,{as:"h2",className:(0,s.Z)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),c&&(0,i.jsx)("p",{className:(0,s.Z)("text--truncate",u.cardDescription),title:c,children:c})]})}function f(t){let{item:e}=t;const n=(0,c.LM)(e);return n?(0,i.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h(t){let{item:e}=t;const n=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(e.docId??void 0);return(0,i.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function j(t){let{item:e}=t;switch(e.type){case"link":return(0,i.jsx)(h,{item:e});case"category":return(0,i.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,c.jA)();return(0,i.jsx)(v,{items:n.items,className:e})}function v(t){const{items:e,className:n}=t;if(!e)return(0,i.jsx)(x,{...t});const r=(0,c.MN)(e);return(0,i.jsx)("section",{className:(0,s.Z)("row",n),children:r.map(((t,e)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(j,{item:t})},e)))})}const g={},y="JavaScript Code Style",b={unversionedId:"javascript/index",id:"javascript/index",title:"JavaScript Code Style",description:"",source:"@site/docs/javascript/index.md",sourceDirName:"javascript",slug:"/javascript/",permalink:"/docs/javascript/",draft:!1,unlisted:!1,editUrl:"https://github.com/liuzhaowei55/style.fanfou.dev/tree/main/docs/javascript/index.md",tags:[],version:"current",lastUpdatedAt:1656645590,formattedLastUpdatedAt:"2022\u5e747\u67081\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Spring Java Format",permalink:"/docs/java/spring-javaformat"},next:{title:"husky",permalink:"/docs/javascript/husky"}},k={},C=[];function N(t){const e=Object.assign({h1:"h1"},(0,r.ah)(),t.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"javascript-code-style",children:"JavaScript Code Style"}),"\n","\n","\n",(0,i.jsx)(v,{items:(0,c.jA)().items})]})}const w=function(t={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),t.components);return e?(0,i.jsx)(e,Object.assign({},t,{children:(0,i.jsx)(N,t)})):N(t)}},1151:(t,e,n)=>{n.d(e,{Zo:()=>a,ah:()=>s});var i=n(7294);const r=i.createContext({});function s(t){const e=i.useContext(r);return i.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const c={};function a({components:t,children:e,disableParentContext:n}){let a;return a=n?"function"==typeof t?t({}):t||c:s(t),i.createElement(r.Provider,{value:a},e)}}}]);