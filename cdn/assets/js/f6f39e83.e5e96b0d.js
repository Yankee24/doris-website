"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[69221],{3905:(t,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>u});var r=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function m(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var p=r.createContext({}),s=function(t){var n=r.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},c=function(t){var n=s(t.components);return r.createElement(p.Provider,{value:n},t.children)},l={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,c=m(t,["components","mdxType","originalType","parentName"]),_=s(e),u=o,b=_["".concat(p,".").concat(u)]||_[u]||l[u]||i;return e?r.createElement(b,a(a({ref:n},c),{},{components:e})):r.createElement(b,a({ref:n},c))}));function u(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var i=e.length,a=new Array(i);a[0]=_;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=t,m.mdxType="string"==typeof t?t:o,a[1]=m;for(var s=2;s<i;s++)a[s]=e[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}_.displayName="MDXCreateElement"},25854:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var r=e(87462),o=(e(67294),e(3905));const i={title:"bitmap_xor_count",language:"en"},a=void 0,m={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_xor_count",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count",title:"bitmap_xor_count",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count",draft:!1,tags:[],version:"dev",frontMatter:{title:"bitmap_xor_count",language:"en"},sidebar:"docs",previous:{title:"bitmap_union",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_union"},next:{title:"bitmap_and_not",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_and_not"}},p={},s=[{value:"bitmap_xor_count",id:"bitmap_xor_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s};function l(t){let{components:n,...e}=t;return(0,o.kt)("wrapper",(0,r.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bitmap_xor_count"},"bitmap_xor_count"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BIGINT BITMAP_XOR_COUNT(BITMAP lhs, BITMAP rhs, ...)")),(0,o.kt)("p",null,"XOR two or more bitmap sets and return the size of the result set."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select bitmap_xor_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+----------------------------------------------------------------------------+\n|                                                                          4 |\n+----------------------------------------------------------------------------+\n\nmysql> select bitmap_xor_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+----------------------------------------------------------------------------+\n|                                                                          0 |\n+----------------------------------------------------------------------------+\n\nmysql> select bitmap_xor_count(bitmap_from_string('1,2,3'),bitmap_from_string('4,5,6'));\n+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('4,5,6')) |\n+----------------------------------------------------------------------------+\n|                                                                          6 |\n+----------------------------------------------------------------------------+\n\nMySQL> select (bitmap_xor_count(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5')));\n+-----------------------------------------------------------------------------------------------------------+\n| (bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'))) |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         3 |\n+-----------------------------------------------------------------------------------------------------------+\n\nMySQL> select (bitmap_xor_count(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),bitmap_empty()));\n+---------------------------------------------------------------------------------------------------------------------------+\n| (bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty())) |\n+---------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                         3 |\n+---------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select (bitmap_xor_count(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),NULL));\n+-----------------------------------------------------------------------------------------------------------------+\n| (bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL)) |\n+-----------------------------------------------------------------------------------------------------------------+\n|                                                                                                            NULL |\n+-----------------------------------------------------------------------------------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BITMAP_XOR_COUNT,BITMAP\n")))}l.isMDXComponent=!0}}]);