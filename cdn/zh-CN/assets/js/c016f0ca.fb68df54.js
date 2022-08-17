"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[45882],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),i=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=i(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},j=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),j=i(t),f=r,m=j["".concat(l,".").concat(f)]||j[f]||p[f]||s;return t?o.createElement(m,c(c({ref:n},u),{},{components:t})):o.createElement(m,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=j;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var i=2;i<s;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}j.displayName="MDXCreateElement"},43962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var o=t(87462),r=(t(67294),t(3905));const s={title:"json_object",language:"zh-CN"},c=void 0,a={unversionedId:"sql-manual/sql-functions/json-functions/json_object",id:"sql-manual/sql-functions/json-functions/json_object",title:"json_object",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json_object.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_object",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json_object",draft:!1,tags:[],version:"current",frontMatter:{title:"json_object",language:"zh-CN"},sidebar:"docs",previous:{title:"json_array",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json_array"},next:{title:"json_quote",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json_quote"}},l={},i=[{value:"json_object",id:"json_object",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"json_object"},"json_object"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VARCHAR json_object(VARCHAR,...)")),(0,r.kt)("p",null,"\u751f\u6210\u4e00\u4e2a\u5305\u542b\u6307\u5b9aKey-Value\u5bf9\u7684json object, \u5f53Key\u503c\u4e3aNULL\u6216\u8005\u4f20\u5165\u53c2\u6570\u4e3a\u5947\u6570\u4e2a\u65f6\uff0c\u8fd4\u56de\u5f02\u5e38\u9519\u8bef"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MySQL> select json_object();\n+---------------+\n| json_object() |\n+---------------+\n| {}            |\n+---------------+\n\nMySQL> select json_object('time',curtime());\n+--------------------------------+\n| json_object('time', curtime()) |\n+--------------------------------+\n| {\"time\": \"10:49:18\"}           |\n+--------------------------------+\n\n\nMySQL> SELECT json_object('id', 87, 'name', 'carrot');\n+-----------------------------------------+\n| json_object('id', 87, 'name', 'carrot') |\n+-----------------------------------------+\n| {\"id\": 87, \"name\": \"carrot\"}            |\n+-----------------------------------------+\n\n\nMySQL> select json_object('username',null);\n+---------------------------------+\n| json_object('username', 'NULL') |\n+---------------------------------+\n| {\"username\": NULL}              |\n+---------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"json_object"))}p.isMDXComponent=!0}}]);