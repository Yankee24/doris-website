"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[45999],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},33421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Get Load State",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/http-actions/fe/get-load-state",id:"version-dev/admin-manual/http-actions/fe/get-load-state",title:"Get Load State",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/http-actions/fe/get-load-state.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/get-load-state",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/get-load-state",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/http-actions/fe/get-load-state.md",tags:[],version:"dev",frontMatter:{title:"Get Load State",language:"zh-CN"},sidebar:"docs",previous:{title:"Cluster Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/manager/cluster-action"},next:{title:"Bootstrap Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/bootstrap-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-load-state"},"Get Load State"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/<db>/get_load_state")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8fd4\u56de\u6307\u5b9alabel\u7684\u5bfc\u5165\u4e8b\u52a1\u7684\u72b6\u6001"),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<db>")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93"))),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"label")),(0,r.kt)("p",{parentName:"li"},"  \u6307\u5b9a\u5bfc\u5165label"))),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": "VISIBLE",\n    "count": 0\n}\n')),(0,r.kt)("p",null,"\u5982label\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": "UNKNOWN",\n    "count": 0\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9alabel\u7684\u5bfc\u5165\u4e8b\u52a1\u7684\u72b6\u6001\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'GET /api/example_db/get_load_state?label=my_label\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": "VISIBLE",\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);