"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[918],{2159:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var n=a(7294),l=a(6010),r=a(833),s=a(7524),c=a(5281),o=a(7462),i=a(5999),d=a(9960);function m(e){const{permalink:t,title:a,subLabel:r,isNext:s}=e;return n.createElement(d.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}function u(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(m,(0,o.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(m,(0,o.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var b=a(2263),p=a(143),E=a(373),h=a(4477);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=v[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function _(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,b.Z)(),{pluginId:s}=(0,p.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,E.J)(s),{latestDocSuggestion:i,latestVersionSuggestion:d}=(0,p.Jo)(s),m=null!=i?i:(u=d).docs.find((e=>e.id===u.mainDocId));var u;return n.createElement("div",{className:(0,l.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:d.label,to:m.path,onClick:()=>o(d.name)})))}function N(e){let{className:t}=e;const a=(0,h.E)();return a.banner?n.createElement(_,{className:t,versionMetadata:a}):null}function Z(e){let{className:t}=e;const a=(0,h.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:c.k.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(L,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const U="iconEdit_eYIM";function w(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(U,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function y(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},n.createElement(w,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const C="tag_zVej",A="tagRegular_sFm0",x="tagWithCount_h2kH";function B(e){let{permalink:t,label:a,count:r}=e;return n.createElement(d.Z,{href:t,className:(0,l.Z)(C,r?x:A)},a,r&&n.createElement("span",null,r))}const I="tags_jXut",M="tag_QGVx";function V(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(I,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:M},n.createElement(B,{label:t,permalink:a}))}))))}const H="lastUpdated_vbeJ";function P(e){return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(V,e)))}function D(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(y,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",H)},(a||r)&&n.createElement(T,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function S(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:i,tags:d}=a,m=d.length>0,u=!!(r||s||i);return m||u?n.createElement("footer",{className:(0,l.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(P,{tags:d}),u&&n.createElement(D,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var F=a(9407),z=a(6043),O=a(3743);const R="tocCollapsibleButton_TO0P",j="tocCollapsibleButtonExpanded_MG3E";function G(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,o.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",R,!t&&j,a.className)}),n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const J="tocCollapsible_ETCw",q="tocCollapsibleContent_vkbj",Q="tocCollapsibleExpanded_sAul";function W(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:o}=(0,z.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(J,!c&&Q,a)},n.createElement(G,{collapsed:c,onClick:o}),n.createElement(z.z,{lazy:!0,className:q,collapsed:c},n.createElement(O.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var X=a(2503),Y=a(3438),K=a(8596),$=a(4996);function ee(e){return n.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const te={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function ae(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(d.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function ne(e){let{children:t,active:a,index:r,addMicrodata:s}=e;return n.createElement("li",(0,o.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function le(){const e=(0,$.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",te.breadcrumbsItemLink),href:e},n.createElement(ee,{className:te.breadcrumbHomeIcon})))}function re(){const e=(0,Y.s1)(),t=(0,K.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(c.k.docs.docBreadcrumbs,te.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(le,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(ne,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(ae,{href:t.href,isLast:l},t.label))})))):null}var se=a(3548);const ce="docItemContainer_Adtb",oe="docItemCol_GujU",ie="tocMobile_aoJ5";function de(e){var t;const{content:a}=e,{metadata:l,frontMatter:s,assets:c}=a,{keywords:o}=s,{description:i,title:d}=l,m=null!=(t=c.image)?t:s.image;return n.createElement(r.d,{title:d,description:i,keywords:o,image:m})}function me(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:o,hide_table_of_contents:i,toc_min_heading_level:d,toc_max_heading_level:m}=r,{title:b}=a,p=!o&&void 0===t.contentTitle,E=(0,s.i)(),h=!i&&t.toc&&t.toc.length>0,v=h&&("desktop"===E||"ssr"===E);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&oe)},n.createElement(N,null),n.createElement("div",{className:ce},n.createElement("article",null,n.createElement(re,null),n.createElement(Z,null),h&&n.createElement(W,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:(0,l.Z)(c.k.docs.docTocMobile,ie)}),n.createElement("div",{className:(0,l.Z)(c.k.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(X.Z,{as:"h1"},b)),n.createElement(se.Z,null,n.createElement(t,null))),n.createElement(S,e)),n.createElement(u,{previous:a.previous,next:a.next}))),v&&n.createElement("div",{className:"col col--3"},n.createElement(F.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:m,className:c.k.docs.docTocDesktop})))}function ue(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(r.FG,{className:t},n.createElement(de,e),n.createElement(me,e))}},4477:(e,t,a)=>{a.d(t,{E:()=>c,q:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function c(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);