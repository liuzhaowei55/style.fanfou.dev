"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[83],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),l=n(6010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),l=n(7294),a=n(6010),o=n(2389),s=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:f,groupId:y,className:b}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,s.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:j,setTabGroupChoices:E}=(0,i.U)(),[O,w]=(0,l.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=y){const e=j[y];null!=e&&e!==O&&h.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==O&&(T(t),w(r),null!=y&&E(y,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=N.indexOf(e.currentTarget)+1;n=null!=(r=N[t])?r:N[0];break}case"ArrowLeft":{var l;const t=N.indexOf(e.currentTarget)-1;n=null!=(l=N[t])?l:N[N.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:P,onFocus:x,onClick:x},o,{className:(0,a.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return l.createElement(d,(0,r.Z)({key:String(t)},e))}},725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(7462),l=(n(7294),n(3905)),a=n(5488),o=n(5162);const s={},i="Stylelint",u={unversionedId:"js/stylelint",id:"js/stylelint",title:"Stylelint",description:"- Stylelint Homepage",source:"@site/docs/js/stylelint.md",sourceDirName:"js",slug:"/js/stylelint",permalink:"/docs/js/stylelint",draft:!1,editUrl:"https://github.com/liuzhaowei55/style.fanfou.dev/tree/main/docs/js/stylelint.md",tags:[],version:"current",lastUpdatedAt:1656387800,formattedLastUpdatedAt:"2022/6/28",frontMatter:{},sidebar:"docs",previous:{title:"prettier",permalink:"/docs/js/prettier"},next:{title:"PHP CS Fixer",permalink:"/docs/php/php-cs-fixer"}},c={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stylelint"},"Stylelint"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stylelint.io/"},"Stylelint Homepage"))),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev stylelint @umijs/fabric\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev stylelint @umijs/fabric\n")))),(0,l.kt)("p",null,"\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EEE > .stylelintrc.js\nmodule.exports = {\n  extends: [require.resolve('@umijs/fabric/dist/stylelint')],\n  rules: {\n    // your rules\n  },\n};\nEEE\n")),(0,l.kt)("p",null,".lintstagedrc.json \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "*.{css}": ["npx stylelint"]\n}\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'npx stylelint "**/*.{css}"\n')))}m.isMDXComponent=!0}}]);