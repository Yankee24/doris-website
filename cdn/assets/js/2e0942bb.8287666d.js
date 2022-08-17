"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[60854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"TRUNCATE TABLES",language:"en"},l=void 0,o={unversionedId:"sql-reference/sql-statements/Data-Definition/TRUNCATE-TABLE",id:"version-0.15/sql-reference/sql-statements/Data-Definition/TRUNCATE-TABLE",title:"TRUNCATE TABLES",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Definition/TRUNCATE-TABLE.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/TRUNCATE-TABLE",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/TRUNCATE-TABLE",draft:!1,tags:[],version:"0.15",frontMatter:{title:"TRUNCATE TABLES",language:"en"},sidebar:"docs",previous:{title:"SHOW ENCRYPTKEYS",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/SHOW-ENCRYPTKEYS"},next:{title:"CREATE FUNCTION",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/create-function"}},s={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"truncate-tables"},"TRUNCATE TABLES"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to empty the data of the specified table and partition\nGrammar:"),(0,a.kt)("p",null,"TRUNCATE TABLE ","[db.]","tbl","[ PARTITION(p1, p2, ...)]",";"),(0,a.kt)("p",null,"Explain:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The statement empties the data, but retains the table or partition."),(0,a.kt)("li",{parentName:"ol"},"Unlike DELETE, this statement can only empty the specified tables or partitions as a whole, without adding filtering conditions."),(0,a.kt)("li",{parentName:"ol"},"Unlike DELETE, using this method to clear data will not affect query performance."),(0,a.kt)("li",{parentName:"ol"},"The data deleted by this operation is not recoverable."),(0,a.kt)("li",{parentName:"ol"},"When using this command, the table state should be NORMAL, i.e. SCHEMA CHANGE operations are not allowed.")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clear the table TBL under example_db")),(0,a.kt)("p",null,"TRUNCATE TABLE example_db.tbl;"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"P1 and P2 partitions of clearing TABLE tbl")),(0,a.kt)("p",null,"TRUNCATE TABLE tbl PARTITION(p1, p2);"),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"TRUNCATE,TABLE"))}u.isMDXComponent=!0}}]);