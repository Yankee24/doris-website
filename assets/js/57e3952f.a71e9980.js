"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[66409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,y=d["".concat(i,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"DATE",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Types/DATE",id:"version-dev/sql-manual/sql-reference/Data-Types/DATE",title:"DATE",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Types/DATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DATE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/DATE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Data-Types/DATE.md",tags:[],version:"dev",frontMatter:{title:"DATE",language:"en"},sidebar:"docs",previous:{title:"INT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/INT"},next:{title:"BITMAP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/BITMAP"}},i={},c=[{value:"DATE",id:"date",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"date"},"DATE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"DATE function"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"Date\nConvert input type to DATE type\ndate\nDate type, the current range of values is ","['0000-01-01','9999-12-31']",", and the default print form is 'YYYYY-MM-DD'."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT DATE('2003-12-31 01:02:03');\n+-----------------------------+\n| date('2003-12-31 01:02:03') |\n+-----------------------------+\n| 2003-12-31                  |\n+-----------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"DATE"))}u.isMDXComponent=!0}}]);