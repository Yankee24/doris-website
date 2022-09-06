"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10697],{3905:(A,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function l(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var i=n.createContext({}),p=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):l(l({},e),A)),t},s=function(A){var e=p(A.components);return n.createElement(i.Provider,{value:e},A.children)},c={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,i=A.parentName,s=o(A,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(i,".").concat(d)]||u[d]||c[d]||r;return t?n.createElement(m,l(l({ref:e},s),{},{components:t})):n.createElement(m,l({ref:e},s))}));function d(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=A,o.mdxType="string"==typeof A?A:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78565:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const r={title:"Table Query Plan Action",language:"en"},l=void 0,o={unversionedId:"admin-manual/http-actions/fe/table-query-plan-action",id:"version-dev/admin-manual/http-actions/fe/table-query-plan-action",title:"Table Query Plan Action",description:"\x3c!--",source:"@site/versioned_docs/version-dev/admin-manual/http-actions/fe/table-query-plan-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/table-query-plan-action",permalink:"/docs/dev/admin-manual/http-actions/fe/table-query-plan-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/admin-manual/http-actions/fe/table-query-plan-action.md",tags:[],version:"dev",frontMatter:{title:"Table Query Plan Action",language:"en"},sidebar:"docs",previous:{title:"Get Small File Action",permalink:"/docs/dev/admin-manual/http-actions/fe/get-small-file"},next:{title:"Set Config Action",permalink:"/docs/dev/admin-manual/http-actions/fe/set-config-action"}},i={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p};function c(A){let{components:e,...t}=A;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table-query-plan-action"},"Table Query Plan Action"),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/<db>/<table>/_query_plan")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Given a SQL, it is used to obtain the query plan corresponding to the SQL."),(0,a.kt)("p",null,"This interface is currently used in Spark-Doris-Connector, Spark obtains Doris' query plan."),(0,a.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<db>")),(0,a.kt)("p",{parentName:"li"},"  Specify database\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<table>")),(0,a.kt)("p",{parentName:"li"},"  Specify table"))),(0,a.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"request-body"},"Request body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "sql": "select * from db1.tbl1;"\n}\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "partitions": {\n            "10039": {\n                "routings": ["10.81.85.89:9062"],\n                "version": 2,\n                "versionHash": 982459448378619656,\n                "schemaHash": 1294206575\n            }\n        },\n        "opaqued_query_plan": "DAABDAACDwABDAAAAAEIAAEAAAAACAACAAAAAAgAAwAAAAAKAAT//////////w8ABQgAAAABAAAAAA8ABgIAAAABAAIACAAMABIIAAEAAAAADwACCwAAAAIAAAACazEAAAACazIPAAMIAAAAAgAAAAUAAAAFAgAEAQAAAA8ABAwAAAACDwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAAACAACAAAAAAAIABT/////CAAX/////wAADwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAABCAACAAAAAAAIABT/////CAAX/////wAADAAFCAABAAAABgwACAAADAAGCAABAAAAAA8AAgwAAAAAAAoABwAAAAAAAAAACgAIAAAAAAAAAAAADQACCgwAAAABAAAAAAAAJzcKAAEAAAAAAAAnNwoAAgAAAAAAAAACCgADDaJlqbrVdwgIAARNJAZvAAwAAw8AAQwAAAACCAABAAAAAAgAAgAAAAAMAAMPAAEMAAAAAQgAAQAAAAAMAAIIAAEAAAAFAAAACAAE/////wgABQAAAAQIAAYAAAAACAAHAAAAAAsACAAAAAJrMQgACQAAAAACAAoBAAgAAQAAAAEIAAIAAAAADAADDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABP////8IAAUAAAAICAAGAAAAAAgABwAAAAELAAgAAAACazIIAAkAAAABAgAKAQAPAAIMAAAAAQgAAQAAAAAIAAIAAAAMCAADAAAAAQoABAAAAAAAACc1CAAFAAAAAgAPAAMMAAAAAQoAAQAAAAAAACc1CAACAAAAAQgAAwAAAAIIAAQAAAAACwAHAAAABHRibDELAAgAAAAADAALCwABAAAABHRibDEAAAAMAAQKAAFfL5rpxl1I4goAArgs6f+h6eMxAAA=",\n        "status": 200\n    },\n    "count": 0\n}\n')),(0,a.kt)("p",null,"Among them, ",(0,a.kt)("inlineCode",{parentName:"p"},"opaqued_query_plan")," is the binary format of the query plan."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get the query plan of the specified SQL"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'POST /api/db1/tbl1/_query_plan\n{\n    "sql": "select * from db1.tbl1;"\n}\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "partitions": {\n            "10039": {\n                "routings": ["192.168.1.1:9060"],\n                "version": 2,\n                "versionHash": 982459448378619656,\n                "schemaHash": 1294206575\n            }\n        },\n        "opaqued_query_plan": "DAABDAACDwABD...",\n        "status": 200\n    },\n    "count": 0\n}\n')))))}c.isMDXComponent=!0}}]);