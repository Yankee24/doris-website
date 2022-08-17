"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[42214],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var m=r.createContext({}),l=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,m=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),b=l(n),u=i,_=b["".concat(m,".").concat(u)]||b[u]||c[u]||a;return n?r.createElement(_,o(o({ref:e},s),{},{components:n})):r.createElement(_,o({ref:e},s))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=b;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},65045:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"bitmap_or",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_or",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_or",title:"bitmap_or",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_or.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_or",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_or",draft:!1,tags:[],version:"dev",frontMatter:{title:"bitmap_or",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_from_string",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_from_string"},next:{title:"bitmap_and",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_and"}},m={},l=[{value:"bitmap_or",id:"bitmap_or",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:l};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bitmap_or"},"bitmap_or"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_OR(BITMAP lhs, BITMAP rhs, ...)")),(0,i.kt)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u7684\u8f93\u5165bitmap\u7684\u5e76\u96c6\uff0c\u8fd4\u56de\u65b0\u7684bitmap."),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nmysql> select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nMySQL> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL));\n+--------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL)) |\n+--------------------------------------------------------------------------------------------+\n| NULL                                                                                       |\n+--------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty()));\n+------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty())) |\n+------------------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n+--------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+--------------------------------------------------------------------------------------------------------+\n| 1,2,3,4,5,10                                                                                           |\n+--------------------------------------------------------------------------------------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITMAP_OR,BITMAP\n")))}c.isMDXComponent=!0}}]);