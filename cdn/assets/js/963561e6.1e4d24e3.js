"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[64777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Connection Action",language:"en"},i=void 0,c={unversionedId:"admin-manual/http-actions/fe/connection-action",id:"version-dev/admin-manual/http-actions/fe/connection-action",title:"Connection Action",description:"\x3c!--",source:"@site/versioned_docs/version-dev/admin-manual/http-actions/fe/connection-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/connection-action",permalink:"/docs/dev/admin-manual/http-actions/fe/connection-action",draft:!1,tags:[],version:"dev",frontMatter:{title:"Connection Action",language:"en"},sidebar:"docs",previous:{title:"Get FE log file",permalink:"/docs/dev/admin-manual/http-actions/fe/get-log-file-action"},next:{title:"System Action",permalink:"/docs/dev/admin-manual/http-actions/fe/system-action"}},l={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connection-action"},"Connection Action"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/connection")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Given a connection id, return the query id that is currently being executed for this connection or the last execution completed."),(0,o.kt)("p",null,"The connection id can be viewed through the id column in the MySQL command ",(0,o.kt)("inlineCode",{parentName:"p"},"show processlist;"),"."),(0,o.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"connection_id")),(0,o.kt)("p",{parentName:"li"},"  Specified connection id"))),(0,o.kt)("h2",{id:"request-body"},"Request body"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n    },\n    "count": 0\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the query id of the specified connection id"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'GET /api/connection?connection_id=101\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);