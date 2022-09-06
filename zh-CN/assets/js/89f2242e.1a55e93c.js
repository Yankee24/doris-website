"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[3340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Check Decommission Action",language:"zh-CN"},i=void 0,c={unversionedId:"admin-manual/http-actions/fe/check-decommission-action",id:"version-dev/admin-manual/http-actions/fe/check-decommission-action",title:"Check Decommission Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/http-actions/fe/check-decommission-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/check-decommission-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/check-decommission-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/http-actions/fe/check-decommission-action.md",tags:[],version:"dev",frontMatter:{title:"Check Decommission Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Show Proc Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/show-proc-action"},next:{title:"Health Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/health-action"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"check-decommission-action"},"Check Decommission Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/check_decommission")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u7528\u4e8e\u5224\u65ad\u6307\u5b9a\u7684BE\u662f\u5426\u80fd\u591f\u88ab\u4e0b\u7ebf\u3002\u6bd4\u5982\u5224\u65ad\u8282\u70b9\u4e0b\u7ebf\u540e\uff0c\u5269\u4f59\u7684\u8282\u70b9\u662f\u5426\u80fd\u591f\u6ee1\u8db3\u7a7a\u95f4\u8981\u6c42\u548c\u526f\u672c\u6570\u8981\u6c42\u7b49\u3002"),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"host_ports")),(0,a.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u4e00\u4e2a\u591a\u4e2aBE\uff0c\u7531\u9017\u53f7\u5206\u9694\u3002\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"ip1:port1,ip2:port2,..."),"\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u5176\u4e2d port \u4e3a BE \u7684 heartbeat port\u3002"))),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,"\u8fd4\u56de\u53ef\u4ee5\u88ab\u4e0b\u7ebf\u7684\u8282\u70b9\u5217\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": ["192.168.10.11:9050", "192.168.10.11:9050"],\n    "count": 0\n}\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u6307\u5b9aBE\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u4e0b\u7ebf"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'GET /api/check_decommission?host_ports=192.168.10.11:9050,192.168.10.11:9050\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": ["192.168.10.11:9050"],\n    "count": 0\n}\n')))))}m.isMDXComponent=!0}}]);