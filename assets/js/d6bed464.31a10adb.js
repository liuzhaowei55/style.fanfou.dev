"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[89],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(m,a(a({ref:t},f),{},{components:n})):r.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a="EditorConfig",c={unversionedId:"basic/editorconfig",id:"basic/editorconfig",title:"EditorConfig",description:"- EditorConfig Homepage",source:"@site/docs/basic/editorconfig.md",sourceDirName:"basic",slug:"/basic/editorconfig",permalink:"/docs/basic/editorconfig",draft:!1,editUrl:"https://github.com/liuzhaowei55/style.fanfou.dev/tree/main/docs/basic/editorconfig.md",tags:[],version:"current",lastUpdatedAt:1667485340,formattedLastUpdatedAt:"2022\u5e7411\u67083\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Basic",permalink:"/docs/basic/"},next:{title:"SonarQube",permalink:"/docs/basic/sonarqube"}},s={},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],f={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"editorconfig"},"EditorConfig"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://editorconfig.org/"},"EditorConfig Homepage"))),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".editorconfig"',title:'".editorconfig"'},"# EditorConfig is awesome: https://EditorConfig.org\n\n# top-most EditorConfig file\nroot = true\n\n# Unix-style newlines with a newline ending every file\n[*]\nend_of_line = lf\ninsert_final_newline = true\n\n# Matches multiple files with brace expansion notation\n# Set default charset\n[*.{js,py}]\ncharset = utf-8\n\n# 4 space indentation\n[*.py]\nindent_style = space\nindent_size = 4\n\n# Tab indentation (no size specified)\n[Makefile]\nindent_style = tab\n\n# Indentation override for all JS under lib directory\n[lib/**.js]\nindent_style = space\nindent_size = 2\n\n# Matches the exact files either package.json or .travis.yml\n[{package.json,.travis.yml}]\nindent_style = space\nindent_size = 2\n")))}p.isMDXComponent=!0}}]);