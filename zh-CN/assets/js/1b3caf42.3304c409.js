"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[81322],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Query Profile Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/query-profile-action",id:"version-dev/admin-manual/http-actions/fe/query-profile-action",title:"Query Profile Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/http-actions/fe/query-profile-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/query-profile-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/query-profile-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/http-actions/fe/query-profile-action.md",tags:[],version:"dev",frontMatter:{title:"Query Profile Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Meta Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/meta-action"},next:{title:"Show Data Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/show-data-action"}},p={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-profile-action"},"Query Profile Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /rest/v1/query_profile/<query_id>\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Query Profile Action \u7528\u4e8e\u83b7\u53d6 Query \u7684 profile\u3002"),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<query_id>")),(0,a.kt)("p",{parentName:"li"},"  \u53ef\u9009\u53c2\u6570\u3002\u5f53\u4e0d\u6307\u5b9a\u65f6\uff0c\u8fd4\u56de\u6700\u65b0\u7684 query \u5217\u8868\u3002\u5f53\u6307\u5b9a\u65f6\uff0c\u8fd4\u56de\u6307\u5b9a query \u7684 profile\u3002"))),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"<query_id>")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'GET /rest/v1/query_profile/\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "href_column": ["Query ID"],\n        "column_names": ["Query ID", "User", "Default Db", "Sql Statement", "Query Type", "Start Time", "End Time", "Total", "Query State"],\n        "rows": [{\n            "User": "root",\n            "__hrefPath": ["/query_profile/d73a8a0b004f4b2f-b4829306441913da"],\n            "Query Type": "Query",\n            "Total": "5ms",\n            "Default Db": "default_cluster:db1",\n            "Sql Statement": "select * from tbl1",\n            "Query ID": "d73a8a0b004f4b2f-b4829306441913da",\n            "Start Time": "2020-09-03 10:07:54",\n            "Query State": "EOF",\n            "End Time": "2020-09-03 10:07:54"\n        }, {\n            "User": "root",\n            "__hrefPath": ["/query_profile/fd706dd066824c21-9d1a63af9f5cb50c"],\n            "Query Type": "Query",\n            "Total": "6ms",\n            "Default Db": "default_cluster:db1",\n            "Sql Statement": "select * from tbl1",\n            "Query ID": "fd706dd066824c21-9d1a63af9f5cb50c",\n            "Start Time": "2020-09-03 10:07:54",\n            "Query State": "EOF",\n            "End Time": "2020-09-03 10:07:54"\n        }]\n    },\n    "count": 3\n}\n')),(0,a.kt)("p",{parentName:"li"},"  \u8fd4\u56de\u7ed3\u679c\u540c ",(0,a.kt)("inlineCode",{parentName:"p"},"System Action"),"\uff0c\u662f\u4e00\u4e2a\u8868\u683c\u7684\u63cf\u8ff0\u3002\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"<query_id>")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'GET /rest/v1/query_profile/<query_id>\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": "Query:</br>&nbsp;&nbsp;&nbsp;&nbsp;Summary:</br>...",\n    "count": 0\n}\n')),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," \u4e3a profile \u7684\u6587\u672c\u5185\u5bb9\u3002"))))}s.isMDXComponent=!0}}]);