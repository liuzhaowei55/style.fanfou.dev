"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[4787],{1590:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});a(758);var s=a(3526),l=a(4136),r=a(6548),n=a(383);const c=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(1722),o=a(4628);const g={tag:"tag_CYSc"};var u=a(6070);function d(t){let{letterEntry:e}=t;return(0,u.jsxs)("article",{children:[(0,u.jsx)(o.A,{as:"h2",id:e.letter,children:e.letter}),(0,u.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,u.jsx)("li",{className:g.tag,children:(0,u.jsx)(i.A,{...t})},t.permalink)))}),(0,u.jsx)("hr",{})]})}function h(t){let{tags:e}=t;const a=function(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}(e);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,u.jsx)(d,{letterEntry:t},t.letter)))})}var j=a(2194);function m(t){let{title:e}=t;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.be,{title:e}),(0,u.jsx)(j.A,{tag:"doc_tags_list"})]})}function x(t){let{tags:e,title:a}=t;return(0,u.jsx)(l.e3,{className:(0,s.A)(r.G.page.docsTagsListPage),children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,u.jsx)(o.A,{as:"h1",children:a}),(0,u.jsx)(h,{tags:e})]})})})})}function f(t){const e=c();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{...t,title:e}),(0,u.jsx)(x,{...t,title:e})]})}},1722:(t,e,a)=>{a.d(e,{A:()=>c});a(758);var s=a(3526),l=a(7452);const r={tag:"tag_gwVv",tagRegular:"tagRegular_oJpE",tagWithCount:"tagWithCount_ZT2b"};var n=a(6070);function c(t){let{permalink:e,label:a,count:c,description:i}=t;return(0,n.jsxs)(l.A,{href:e,title:i,className:(0,s.A)(r.tag,c?r.tagWithCount:r.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}}}]);