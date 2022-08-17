"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[27918],{37965:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ie});var n=a(67294),l=a(86010),r=a(1944),s=a(87524),c=a(35281),o=a(87462),i=a(95999),d=a(32244);function m(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(d.Z,(0,o.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(d.Z,(0,o.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=a(52263),b=a(39960),p=a(94104),h=a(60373),E=a(74477);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=v[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(b.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Z(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,u.Z)(),{pluginId:s}=(0,p.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,h.J)(s),{latestDocSuggestion:i,latestVersionSuggestion:d}=(0,p.Jo)(s),m=null!=i?i:(b=d).docs.find((e=>e.id===b.mainDocId));var b;return n.createElement("div",{className:(0,l.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:d.label,to:m.path,onClick:()=>o(d.name)})))}function L(e){let{className:t}=e;const a=(0,E.E)();return a.banner?n.createElement(Z,{className:t,versionMetadata:a}):null}function N(e){let{className:t}=e;const a=(0,E.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:c.k.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const U="iconEdit_eYIM";function w(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(U,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function C(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},n.createElement(w,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=a(13008);const A="tags_jXut",x="tag_QGVx";function B(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(A,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:x},n.createElement(y.Z,{label:t,permalink:a}))}))))}const I="lastUpdated_vbeJ";function M(e){return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function V(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(C,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",I)},(a||r)&&n.createElement(T,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function H(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:i,tags:d}=a,m=d.length>0,u=!!(r||s||i);return m||u?n.createElement("footer",{className:(0,l.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(M,{tags:d}),u&&n.createElement(V,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var P=a(39407),D=a(86043),S=a(93743);const F="tocCollapsibleButton_TO0P",z="tocCollapsibleButtonExpanded_MG3E";function O(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,o.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",F,!t&&z,a.className)}),n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const R="tocCollapsible_ETCw",j="tocCollapsibleContent_vkbj",G="tocCollapsibleExpanded_sAul";function J(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:o}=(0,D.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(R,!c&&G,a)},n.createElement(O,{collapsed:c,onClick:o}),n.createElement(D.z,{lazy:!0,className:j,collapsed:c},n.createElement(S.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var q=a(92503),Q=a(52802),W=a(48596),X=a(44996);function Y(e){return n.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const K={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function $(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(b.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function ee(e){let{children:t,active:a,index:r,addMicrodata:s}=e;return n.createElement("li",(0,o.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function te(){const e=(0,X.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(b.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",K.breadcrumbsItemLink),href:e},n.createElement(Y,{className:K.breadcrumbHomeIcon})))}function ae(){const e=(0,Q.s1)(),t=(0,W.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(c.k.docs.docBreadcrumbs,K.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(te,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(ee,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement($,{href:t.href,isLast:l},t.label))})))):null}var ne=a(40076);const le="docItemContainer_Adtb",re="docItemCol_GujU",se="tocMobile_aoJ5";function ce(e){var t;const{content:a}=e,{metadata:l,frontMatter:s,assets:c}=a,{keywords:o}=s,{description:i,title:d}=l,m=null!=(t=c.image)?t:s.image;return n.createElement(r.d,{title:d,description:i,keywords:o,image:m})}function oe(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:o,hide_table_of_contents:i,toc_min_heading_level:d,toc_max_heading_level:u}=r,{title:b}=a,p=!o&&void 0===t.contentTitle,h=(0,s.i)(),E=!i&&t.toc&&t.toc.length>0,v=E&&("desktop"===h||"ssr"===h);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&re)},n.createElement(L,null),n.createElement("div",{className:le},n.createElement("article",null,n.createElement(ae,null),n.createElement(N,null),E&&n.createElement(J,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:(0,l.Z)(c.k.docs.docTocMobile,se)}),n.createElement("div",{className:(0,l.Z)(c.k.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(q.Z,{as:"h1"},b)),n.createElement(ne.Z,null,n.createElement(t,null))),n.createElement(H,e)),n.createElement(m,{previous:a.previous,next:a.next}))),v&&n.createElement("div",{className:"col col--3"},n.createElement(P.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:c.k.docs.docTocDesktop})))}function ie(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(r.FG,{className:t},n.createElement(ce,e),n.createElement(oe,e))}},13008:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010),r=a(39960);const s="tag_zVej",c="tagRegular_sFm0",o="tagWithCount_h2kH";function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,i?o:c)},a,i&&n.createElement("span",null,i))}},74477:(e,t,a)=>{a.d(t,{E:()=>c,q:()=>s});var n=a(67294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function c(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);