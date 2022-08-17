"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12315],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||l;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-PROCESSLIST",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",id:"version-dev/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",title:"SHOW-PROCESSLIST",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",draft:!1,tags:[],version:"dev",frontMatter:{title:"SHOW-PROCESSLIST",language:"en"},sidebar:"docs",previous:{title:"SHOW-TRIGGERS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TRIGGERS"},next:{title:"SHOW-ENCRYPT-KEY",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY"}},i={},c=[{value:"SHOW-PROCESSLIST",id:"show-processlist",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-processlist"},"SHOW-PROCESSLIST"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW PROCESSLIST"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Display the running threads of the user. It should be noted that except the root user who can see all running threads, other users can only see their own running threads, and cannot see the running threads of other users."),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [FULL] PROCESSLIST\n")),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Id: It is the unique identifier of this thread. When we find that there is a problem with this thread, we can use the kill command to add this Id value to kill this thread. Earlier we said that the information displayed by show processlist comes from the information_schema.processlist table, so this Id is the primary key of this table."),(0,a.kt)("li",{parentName:"ul"},"User: refers to the user who started this thread."),(0,a.kt)("li",{parentName:"ul"},"Host: Records the IP and port number of the client sending the request. Through this information, when troubleshooting the problem, we can locate which client and which process sent the request."),(0,a.kt)("li",{parentName:"ul"},"Cluster: Cluster name"),(0,a.kt)("li",{parentName:"ul"},"DB: which database the currently executed command is on. If no database is specified, the value is NULL ."),(0,a.kt)("li",{parentName:"ul"},"Command: refers to the command that the thread is executing at the moment. This is very complicated, and is explained separately below"),(0,a.kt)("li",{parentName:"ul"},"Time: Indicates the time the thread is in the current state."),(0,a.kt)("li",{parentName:"ul"},"State: The state of the thread, corresponding to Command, explained separately below."),(0,a.kt)("li",{parentName:"ul"},"Info: Generally recorded is the statement executed by the thread. By default, only the first 100 characters are displayed, that is, the statement you see may be truncated. To see all the information, you need to use show full processlist.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"View the threads running by the current user"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"SHOW PROCESSLIST\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, PROCESSLIST\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);