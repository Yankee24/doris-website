"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[52901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Cancel Load Action",language:"en"},i=void 0,l={unversionedId:"administrator-guide/http-actions/fe/cancel-load-action",id:"version-0.15/administrator-guide/http-actions/fe/cancel-load-action",title:"Cancel Load Action",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/http-actions/fe/cancel-load-action.md",sourceDirName:"administrator-guide/http-actions/fe",slug:"/administrator-guide/http-actions/fe/cancel-load-action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/cancel-load-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Cancel Load Action",language:"en"},sidebar:"docs",previous:{title:"Bootstrap Action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/bootstrap-action"},next:{title:"Check Decommission Action",permalink:"/docs/0.15/administrator-guide/http-actions/fe/check-decommission-action"}},c={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cancel-load-action"},"Cancel Load Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/<db>/_cancel")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to cancel the load transaction of the specified label."),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<db>")),(0,r.kt)("p",{parentName:"li"},"  Specify the database name"))),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<label>")),(0,r.kt)("p",{parentName:"li"},"  Specify the load label"))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cancel success"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cancel failed"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "Error msg...",\n    "code": 1,\n    "data": null,\n    "count": 0\n}\n')))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cancel the load transaction of the specified label"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'POST /api/example_db/_cancel?label=my_label1\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);