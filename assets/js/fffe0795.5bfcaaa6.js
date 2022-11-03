"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var i=2;i<l;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7462),n=r(7294),l=r(6010),s=r(2389),o=r(7392),u=r(7094),i=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:s,defaultValue:d,values:m,groupId:h,className:y}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),k=(0,o.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:O}=(0,u.U)(),[N,w]=(0,n.useState)(b),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=h){const e=g[h];null!=e&&e!==N&&f.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,r=j.indexOf(t),a=f[r].value;a!==N&&(T(t),w(a),null!=h&&O(h,String(a)))},x=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;r=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;r=j[t]??j[j.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},y)},f.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:x,onClick:E},s,{className:(0,l.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},1511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),l=r(5488),s=r(5162);const o={description:"husky"},u="husky",i={unversionedId:"javascript/husky",id:"javascript/husky",title:"husky",description:"husky",source:"@site/docs/javascript/husky.md",sourceDirName:"javascript",slug:"/javascript/husky",permalink:"/docs/javascript/husky",draft:!1,editUrl:"https://github.com/liuzhaowei55/style.fanfou.dev/tree/main/docs/javascript/husky.md",tags:[],version:"current",lastUpdatedAt:1663685609,formattedLastUpdatedAt:"2022\u5e749\u670820\u65e5",frontMatter:{description:"husky"},sidebar:"docs",previous:{title:"JavaScript Code Style",permalink:"/docs/javascript/"},next:{title:"lint-staged",permalink:"/docs/javascript/lint-staged"}},c={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8bbe\u7f6e prepare",id:"\u8bbe\u7f6e-prepare",level:2},{value:"\u8bbe\u7f6e hooks",id:"\u8bbe\u7f6e-hooks",level:2},{value:"\u63d0\u4ea4 .husky \u6587\u4ef6\u53d8\u5316",id:"\u63d0\u4ea4-husky-\u6587\u4ef6\u53d8\u5316",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"husky"},"husky"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/typicode/husky"},"typicode/husky")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://typicode.github.io/husky"},"husky docs"))),(0,n.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install husky --save-dev\n"))),(0,n.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add husky --dev\n")))),(0,n.kt)("h2",{id:"\u8bbe\u7f6e-prepare"},"\u8bbe\u7f6e prepare"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'npm set-script prepare "husky install" && npm run prepare\n')),(0,n.kt)("h2",{id:"\u8bbe\u7f6e-hooks"},"\u8bbe\u7f6e hooks"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'npx husky add .husky/pre-commit "npm test"\n')),(0,n.kt)("h2",{id:"\u63d0\u4ea4-husky-\u6587\u4ef6\u53d8\u5316"},"\u63d0\u4ea4 .husky \u6587\u4ef6\u53d8\u5316"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git add .husky/pre-commit\n")))}m.isMDXComponent=!0}}]);