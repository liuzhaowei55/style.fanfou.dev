"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[7002],{3437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var r=n(5893),l=n(1151),a=n(4866),s=n(5162);const u={},o="ShellCheck",c={id:"shell/shellcheck",title:"ShellCheck",description:"- https://www.shellcheck.net",source:"@site/docs/shell/shellcheck.md",sourceDirName:"shell",slug:"/shell/shellcheck",permalink:"/docs/shell/shellcheck",draft:!1,unlisted:!1,editUrl:"https://github.com/liuzhaowei55/style.fanfou.dev/tree/main/docs/shell/shellcheck.md",tags:[],version:"current",lastUpdatedAt:1665133425e3,frontMatter:{},sidebar:"docs",previous:{title:"PHPStan",permalink:"/docs/php/phpstan"}},i={},h=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Editor plugins",id:"editor-plugins",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"shellcheck",children:"ShellCheck"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.shellcheck.net",children:"https://www.shellcheck.net"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/koalaman/shellcheck",children:"https://github.com/koalaman/shellcheck"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n","\n",(0,r.jsx)(a.Z,{children:(0,r.jsx)(s.Z,{value:"macOS",label:"macOS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"brew install shellcheck\n"})})})}),"\n",(0,r.jsx)(t.h2,{id:"editor-plugins",children:"Editor plugins"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["VSCode\uff1a",(0,r.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck",children:"ShellCheck"})]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(512);const l={tabItem:"tabItem_Ymn6"};var a=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(7294),l=n(512),a=n(2466),s=n(6550),u=n(469),o=n(1980),c=n(7392),i=n(12);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,h]=f({queryString:n,groupId:l}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,i.Nk)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),v=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,u.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function k(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),i=e=>{const t=e.currentTarget,n=o.indexOf(t),l=u[n].value;l!==r&&(c(t),s(l))},h=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:h,onClick:i,...a,className:(0,l.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,l.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>s});var r=n(7294);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);