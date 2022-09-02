"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[29514,4972],{22034:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(67294),l=n(86010),o=n(52802),r=n(43320),c=n(1944),i=n(35281),s=n(74477),d=n(1116),m=n(62443),u=n(95999),b=n(12466),p=n(85936);const h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",i.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var v=n(76775),g=n(87524),k=n(86668),_=n(21327),C=n(52868),I=n(87462);function N(e){return a.createElement("svg",(0,I.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S="collapseSidebarButton_PEFL",Z="collapseSidebarButtonIcon_kv0_";function y(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",S),onClick:t},a.createElement(N,{className:Z}))}var T=n(59689),x=n(902);const w=Symbol("EmptyContext"),L=a.createContext(w);function A(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:o},t)}var B=n(48596),F=n(86043),M=n(39960),P=n(72389);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function D(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),f=function(e){const t=(0,P.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0),[e,t])}(t),v=(0,o._F)(t,r),g=(0,B.Mg)(h,r),{collapsed:_,setCollapsed:C}=(0,F.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:N,setExpandedItem:S}=function(){const e=(0,a.useContext)(L);if(e===w)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!_),S(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,x.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:v,collapsed:_,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&N&&N!==s&&E&&C(!0)}),[b,N,s,C,E]),a.createElement("li",{className:(0,l.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":_},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(M.Z,(0,I.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!_:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(F.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(j,{items:m,tabIndex:_?-1:0,onItemClick:n,activePath:r,level:c+1})))}var W=n(13919),R=n(38483);const z="menuExternalLink_NmtK";function V(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{href:m,label:u,className:b}=t,p=(0,o._F)(t,r),h=(0,W.Z)(m);return a.createElement("li",{className:(0,l.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(M.Z,(0,I.Z)({className:(0,l.Z)("menu__link",!h&&z,{"menu__link--active":p}),"aria-current":p?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(R.Z,null)))}const G="menuHtmlItem_M9Kj";function K(e){let{item:t,level:n,index:o}=e;const{value:r,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(n),c&&[G,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:r}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(D,(0,I.Z)({item:t},n));case"html":return a.createElement(K,(0,I.Z)({item:t},n));default:return a.createElement(V,(0,I.Z)({item:t},n))}}function Y(e){let{items:t,...n}=e;return a.createElement(A,null,t.map(((e,t)=>a.createElement(U,(0,I.Z)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(Y),q="menu_SIkG",O="menuWithAnnouncementBar_GW3s";function X(e){let{path:t,sidebar:n,className:o}=e;const r=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",q,r&&O,o)},a.createElement("ul",{className:(0,l.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}function J(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,k.L)();return a.createElement("div",{className:(0,l.Z)("sidebar",c&&"sidebar-with-hideable-navbar",r&&"sidebar-hidden")},c&&a.createElement(_.Z,{tabIndex:-1,className:"sidebar-logo"}),a.createElement("div",{className:"doc-search"},a.createElement(C.Z,null)),a.createElement(X,{path:t,sidebar:n}),i&&a.createElement(y,{onClick:o}))}const Q=a.memo(J);var $=n(72961),ee=n(13102);const te=e=>{let{sidebar:t,path:n}=e;const o=(0,$.e)();return a.createElement("ul",{className:(0,l.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ne(e){return a.createElement(ee.Zo,{component:te,props:e})}const ae=a.memo(ne);function le(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Q,e),l&&a.createElement(ae,e))}const oe="expandButton_m80_",re="expandButtonIcon_BlDH";function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:oe,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(N,{className:re}))}const ie="docSidebarContainer_b6E3",se="docSidebarContainerHidden_b3ry";function de(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function me(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:r}=(0,v.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),o((e=>!e))}),[o,c]);return a.createElement("aside",{className:(0,l.Z)(i.k.docs.docSidebarContainer,ie,n&&se),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie)&&n&&s(!0)}},a.createElement(de,null,a.createElement(le,{sidebar:t,path:r,onCollapse:d,isHidden:c})),c&&a.createElement(ce,{toggleSidebar:d}))}const ue={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function be(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(ue.docMainContainer,(t||!o)&&ue.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,t&&ue.docItemWrapperEnhanced)},n))}const pe="docPage__5DB",he="docsWrapper_BCFX";function Ee(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:he},a.createElement(f,null),a.createElement("div",{className:pe},n&&a.createElement(me,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(be,{hiddenSidebarContainer:l},t)))}var fe=n(4972),ve=n(90197);function ge(e){const{versionMetadata:t}=e,n=(0,o.hI)(e);if(!n)return a.createElement(fe.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=n;return a.createElement(a.Fragment,null,a.createElement(ve.Z,{version:t.version,tag:(0,r.os)(t.pluginId,t.version)}),a.createElement(c.FG,{className:(0,l.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:b},a.createElement(Ee,null,m)))))}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),l=n(95999),o=n(1944),r=n(62443);function c(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},74477:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(67294),l=n(902);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);