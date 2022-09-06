"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[57396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Check Decommission Action",language:"en"},i=void 0,c={unversionedId:"admin-manual/http-actions/fe/check-decommission-action",id:"version-dev/admin-manual/http-actions/fe/check-decommission-action",title:"Check Decommission Action",description:"\x3c!--",source:"@site/versioned_docs/version-dev/admin-manual/http-actions/fe/check-decommission-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/check-decommission-action",permalink:"/docs/dev/admin-manual/http-actions/fe/check-decommission-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/admin-manual/http-actions/fe/check-decommission-action.md",tags:[],version:"dev",frontMatter:{title:"Check Decommission Action",language:"en"},sidebar:"docs",previous:{title:"Show Proc Action",permalink:"/docs/dev/admin-manual/http-actions/fe/show-proc-action"},next:{title:"Health Action",permalink:"/docs/dev/admin-manual/http-actions/fe/health-action"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-decommission-action"},"Check Decommission Action"),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/check_decommission")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Used to determine whether the specified BE can be decommissioned. For example, after the node being decommissioned, whether the remaining nodes can meet the space requirements and the number of replicas."),(0,o.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"host_ports")),(0,o.kt)("p",{parentName:"li"},"  Specify one or more BEs, separated by commas. Such as: ",(0,o.kt)("inlineCode",{parentName:"p"},"ip1:port1,ip2:port2,..."),"."),(0,o.kt)("p",{parentName:"li"},"  Where port is the heartbeat port of BE."))),(0,o.kt)("h2",{id:"request-body"},"Request body"),(0,o.kt)("p",null,"None"),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"Return a list of nodes that can be decommissioned"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": ["192.168.10.11:9050", "192.168.10.11:9050"],\n    "count": 0\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check whether the specified BE node can be decommissioned"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'GET /api/check_decommission?host_ports=192.168.10.11:9050,192.168.10.11:9050\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": ["192.168.10.11:9050"],\n    "count": 0\n}\n')))))}m.isMDXComponent=!0}}]);