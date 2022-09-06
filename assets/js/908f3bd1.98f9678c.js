"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,N=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(N,i(i({ref:t},c),{},{components:a})):n.createElement(N,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55815:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"INSTALL-PLUGIN",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN",id:"version-dev/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN",title:"INSTALL-PLUGIN",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN.md",tags:[],version:"dev",frontMatter:{title:"INSTALL-PLUGIN",language:"en"},sidebar:"docs",previous:{title:"ADMIN-SHOW-REPLICA-DISTRIBUTION",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION"},next:{title:"ADMIN-REPAIR-TABLE",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE"}},s={},p=[{value:"INSTALL-PLUGIN",id:"install-plugin",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install-plugin"},"INSTALL-PLUGIN"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"INSTALL PLUGIN"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to install a plugin."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM [source] [PROPERTIES ("key"="value", ...)]\n')),(0,r.kt)("p",null,"source supports three types:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An absolute path to a zip file."),(0,r.kt)("li",{parentName:"ol"},"An absolute path to a plugin directory."),(0,r.kt)("li",{parentName:"ol"},"Point to a zip file download path with http or https protocol")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install a local zip file plugin:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "/home/users/doris/auditdemo.zip";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the plugin in a local directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "/home/users/doris/auditdemo/";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install a plugin:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install a plugin, and set the md5sum value of the zip file at the same time:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip" PROPERTIES("md5sum" = "73877f6029216f4314d712086a146570");\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSTALL, PLUGIN\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);