"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[23405],{3905:(e,n,r)=>{r.d(n,{Zo:()=>i,kt:()=>h});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},i=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,f=p["".concat(s,".").concat(h)]||p[h]||m[h]||l;return r?t.createElement(f,o(o({ref:n},i),{},{components:r})):t.createElement(f,o({ref:n},i))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50529:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const l={title:"murmur_hash3_32",language:"zh-CN"},o=void 0,u={unversionedId:"sql-manual/sql-functions/hash-functions/murmur_hash3_32",id:"sql-manual/sql-functions/hash-functions/murmur_hash3_32",title:"murmur_hash3_32",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/hash-functions/murmur_hash3_32.md",sourceDirName:"sql-manual/sql-functions/hash-functions",slug:"/sql-manual/sql-functions/hash-functions/murmur_hash3_32",permalink:"/zh-CN/docs/sql-manual/sql-functions/hash-functions/murmur_hash3_32",draft:!1,tags:[],version:"current",frontMatter:{title:"murmur_hash3_32",language:"zh-CN"},sidebar:"docs",previous:{title:"json_quote",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json_quote"},next:{title:"conv",permalink:"/zh-CN/docs/sql-manual/sql-functions/math-functions/conv"}},s={},c=[{value:"murmur_hash3_32",id:"murmur_hash3_32",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:c};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"murmur_hash3_32"},"murmur_hash3_32"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INT MURMUR_HASH3_32(VARCHAR input, ...)")),(0,a.kt)("p",null,"\u8fd4\u56de\u8f93\u5165\u5b57\u7b26\u4e32\u768432\u4f4dmurmur3 hash\u503c"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select murmur_hash3_32(null);\n+-----------------------+\n| murmur_hash3_32(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nmysql> select murmur_hash3_32(\"hello\");\n+--------------------------+\n| murmur_hash3_32('hello') |\n+--------------------------+\n|               1321743225 |\n+--------------------------+\n\nmysql> select murmur_hash3_32(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_32('hello', 'world') |\n+-----------------------------------+\n|                         984713481 |\n+-----------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MURMUR_HASH3_32,HASH\n")))}m.isMDXComponent=!0}}]);