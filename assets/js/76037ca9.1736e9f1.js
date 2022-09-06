"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[55940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"PAUSE-SYNC-JOB",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",id:"version-dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",title:"PAUSE-SYNC-JOB",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB.md",tags:[],version:"dev",frontMatter:{title:"PAUSE-SYNC-JOB",language:"en"},sidebar:"docs",previous:{title:"STOP-SYNC-JOB",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB"},next:{title:"BROKER-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"}},s={},c=[{value:"PAUSE-SYNC-JOB",id:"pause-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pause-sync-job"},"PAUSE-SYNC-JOB"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"PAUSE SYNC JOB"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Pause a running resident data synchronization job in a database via ",(0,r.kt)("inlineCode",{parentName:"p"},"job_name"),". The suspended job will stop synchronizing data and keep the latest position of consumption until it is resumed by the user."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"PAUSE SYNC JOB [db.]job_name\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pause the data sync job named ",(0,r.kt)("inlineCode",{parentName:"p"},"job_name"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"PAUSE SYNC JOB `job_name`;\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PAUSE, SYNC, JOB\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);