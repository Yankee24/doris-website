"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[75329],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,i(i({ref:e},c),{},{components:n})):a.createElement(f,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69162:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"bitmap_has_all",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_has_all",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_has_all",title:"bitmap_has_all",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_has_all.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_has_all",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_has_all",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_has_all.md",tags:[],version:"dev",frontMatter:{title:"bitmap_has_all",language:"zh-CN"},sidebar:"docs",previous:{title:"orthogonal_bitmap_union_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count"},next:{title:"orthogonal_bitmap_intersect",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect"}},s={},p=[{value:"bitmap_has_all",id:"bitmap_has_all",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bitmap_has_all"},"bitmap_has_all"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BOOLEAN BITMAP_HAS_ALL(BITMAP lhs, BITMAP rhs)")),(0,r.kt)("p",null,"\u5982\u679c\u7b2c\u4e00\u4e2abitmap\u5305\u542b\u7b2c\u4e8c\u4e2abitmap\u7684\u5168\u90e8\u5143\u7d20\uff0c\u5219\u8fd4\u56detrue\u3002\n\u5982\u679c\u7b2c\u4e8c\u4e2abitmap\u5305\u542b\u7684\u5143\u7d20\u4e3a\u7a7a\uff0c\u8fd4\u56detrue\u3002"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> select bitmap_has_all(bitmap_from_string("0, 1, 2"), bitmap_from_string("1, 2")) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nmysql> select bitmap_has_all(bitmap_empty(), bitmap_from_string("1, 2")) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n')),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BITMAP_HAS_ALL,BITMAP\n")))}u.isMDXComponent=!0}}]);