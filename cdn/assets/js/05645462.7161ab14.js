"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[62130],{3905:(n,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var t=r(67294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var c=t.createContext({}),i=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},u=function(n){var e=i(n.components);return t.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},y=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),y=i(r),f=a,d=y["".concat(c,".").concat(f)]||y[f]||p[f]||o;return r?t.createElement(d,s(s({ref:e},u),{},{components:r})):t.createElement(d,s({ref:e},u))}));function f(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,s=new Array(o);s[0]=y;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},50732:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=r(87462),a=(r(67294),r(3905));const o={title:"json_array",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/json_array",id:"sql-manual/sql-functions/json-functions/json_array",title:"json_array",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/json-functions/json_array.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_array",permalink:"/docs/sql-manual/sql-functions/json-functions/json_array",draft:!1,tags:[],version:"current",frontMatter:{title:"json_array",language:"en"},sidebar:"docs",previous:{title:"get_json_string",permalink:"/docs/sql-manual/sql-functions/json-functions/get_json_string"},next:{title:"json_object",permalink:"/docs/sql-manual/sql-functions/json-functions/json_object"}},c={},i=[{value:"json_array",id:"json_array",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i};function p(n){let{components:e,...r}=n;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"json_array"},"json_array"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR json_array(VARCHAR,...)")),(0,a.kt)("p",null,"Generate a json array containing the specified values, return empty if no values"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'MySQL> select json_array();\n+--------------+\n| json_array() |\n+--------------+\n| []           |\n+--------------+\n\nMySQL> select json_array(null);\n+--------------------+\n| json_array(\'NULL\') |\n+--------------------+\n| [NULL]             |\n+--------------------+\n\n\nMySQL> SELECT json_array(1, "abc", NULL, TRUE, CURTIME());\n+-----------------------------------------------+\n| json_array(1, \'abc\', \'NULL\', TRUE, curtime()) |\n+-----------------------------------------------+\n| [1, "abc", NULL, TRUE, "10:41:15"]            |\n+-----------------------------------------------+\n\n\nMySQL> select json_array("a", null, "c");\n+------------------------------+\n| json_array(\'a\', \'NULL\', \'c\') |\n+------------------------------+\n| ["a", NULL, "c"]             |\n+------------------------------+\n')),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"json_array"))}p.isMDXComponent=!0}}]);