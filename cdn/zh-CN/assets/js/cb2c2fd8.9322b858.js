"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},O=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=c(n),d=a,f=O["".concat(s,".").concat(d)]||O[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}O.displayName="MDXCreateElement"},34583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW REPOSITORIES",language:"zh-CN"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-REPOSITORIES",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-REPOSITORIES",title:"SHOW REPOSITORIES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-REPOSITORIES.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-REPOSITORIES",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-REPOSITORIES",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW REPOSITORIES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW PROPERTY",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PROPERTY"},next:{title:"SHOW RESTORE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-RESTORE"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-repositories"},"SHOW REPOSITORIES"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u5f53\u524d\u5df2\u521b\u5efa\u7684\u4ed3\u5e93\u3002\n\u8bed\u6cd5\uff1a\n    SHOW REPOSITORIES;\n    \n\u8bf4\u660e\uff1a\n    1. \u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\n        RepoId\uff1a     \u552f\u4e00\u7684\u4ed3\u5e93ID\n        RepoName\uff1a   \u4ed3\u5e93\u540d\u79f0\n        CreateTime\uff1a \u7b2c\u4e00\u6b21\u521b\u5efa\u8be5\u4ed3\u5e93\u7684\u65f6\u95f4\n        IsReadOnly\uff1a \u662f\u5426\u4e3a\u53ea\u8bfb\u4ed3\u5e93\n        Location\uff1a   \u4ed3\u5e93\u4e2d\u7528\u4e8e\u5907\u4efd\u6570\u636e\u7684\u6839\u76ee\u5f55\n        Broker\uff1a     \u4f9d\u8d56\u7684 Broker\n        ErrMsg\uff1a     Palo \u4f1a\u5b9a\u671f\u68c0\u67e5\u4ed3\u5e93\u7684\u8fde\u901a\u6027\uff0c\u5982\u679c\u51fa\u73b0\u95ee\u9898\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u9519\u8bef\u4fe1\u606f\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u67e5\u770b\u5df2\u521b\u5efa\u7684\u4ed3\u5e93\uff1a\n    SHOW REPOSITORIES;\n    \n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, REPOSITORY, REPOSITORIES\n")))}u.isMDXComponent=!0}}]);