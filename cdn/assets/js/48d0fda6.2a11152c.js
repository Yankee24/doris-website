"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,b=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"SQL MODE",language:"en"},i=void 0,s={unversionedId:"administrator-guide/sql-mode",id:"version-0.15/administrator-guide/sql-mode",title:"SQL MODE",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/sql-mode.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/sql-mode",permalink:"/docs/0.15/administrator-guide/sql-mode",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SQL MODE",language:"en"},sidebar:"docs",previous:{title:"File Manager",permalink:"/docs/0.15/administrator-guide/small-file-mgr"},next:{title:"Time zone",permalink:"/docs/0.15/administrator-guide/time-zone"}},l={},d=[{value:"Sql mode introduction",id:"sql-mode-introduction",level:2},{value:"Theory",id:"theory",level:2},{value:"Operation",id:"operation",level:2},{value:"supported mode",id:"supported-mode",level:2},{value:"combine mode",id:"combine-mode",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sql-mode"},"SQL MODE"),(0,r.kt)("p",null,"The SQL MODE supported by Doris refers to the sql mode management mechanism of MySQL. Each client can set its own sql mode, and the database administrator with admin permission can set the global sql mode."),(0,r.kt)("h2",{id:"sql-mode-introduction"},"Sql mode introduction"),(0,r.kt)("p",null,"SQL MODE enables users to switch between different styles of SQL syntax and data verification strictness, making Doris more compatible with other databases. For example, in some databases, the '||' symbol is a string connector, but in Doris it is equivalent to 'or'. At this time, users only need to use SQL mode to switch to the style they want. Each client can set sql mode, which is valid in the current conversation. Only users with admin permission can set global SQL mode."),(0,r.kt)("h2",{id:"theory"},"Theory"),(0,r.kt)("p",null,"SQL MODE is stored in session variables with a 64 bit long type. Each bit of this address represents the on / off (1 for on, 0 for off) state of a mode. As long as we know the specific bit of each mode, we can easily and quickly verify and operate SQL mode through bit operation."),(0,r.kt)("p",null,"Every time you query sql mode, the long type will be parsed into a user-readable string. Similarly, the sql mode string sent by the user to the server will be parsed into a long type that can be stored in session variables."),(0,r.kt)("p",null,"The set global sql mode will be persisted, so the operation on the global sql mode is always only once, even after the program is restarted, the last global sql mode can be recovered."),(0,r.kt)("h2",{id:"operation"},"Operation"),(0,r.kt)("p",null,"1\u3001set sql mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'set global sql_mode = "DEFAULT"\nset session sql_mode = "DEFAULT"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At present, Doris's default sql mode is DEFAULT (but it will be changed in the future modification).\nSetting global sql mode requires admin permission and affects all clients that connect later.\nSetting session sql mode will only affect the current conversation client. The default setting way is session.")),(0,r.kt)("p",null,"2\u3001select sql mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select @@global.sql_mode\nselect @@session.sql_mode\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In addition to this method, you can also view the current sql mode by returning all session variables as follows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"show global variables\nshow session variables\n")),(0,r.kt)("h2",{id:"supported-mode"},"supported mode"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PIPES_AS_CONCAT")),(0,r.kt)("p",{parentName:"li"},"Treat '||' as a string concatenation operator (same as CONCAT()) rather than as a synonym for OR. (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"'a'||'b' = 'ab'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1||0 = '10'"),")"))),(0,r.kt)("h2",{id:"combine-mode"},"combine mode"),(0,r.kt)("p",null,"(Work in progress)"))}m.isMDXComponent=!0}}]);