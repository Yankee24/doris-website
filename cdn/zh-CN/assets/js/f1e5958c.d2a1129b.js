"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[87046],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var N=n.createContext({}),u=function(e){var t=n.useContext(N),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(N.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,N=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=u(a),k=l,d=c["".concat(N,".").concat(k)]||c[k]||m[k]||r;return a?n.createElement(d,i(i({ref:t},o),{},{components:a})):n.createElement(d,i({ref:t},o))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var N in t)hasOwnProperty.call(t,N)&&(p[N]=t[N]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},33875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={title:"Schema \u53d8\u66f4",language:"zh-CN"},i=void 0,p={unversionedId:"advanced/alter-table/schema-change",id:"advanced/alter-table/schema-change",title:"Schema \u53d8\u66f4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/alter-table/schema-change.md",sourceDirName:"advanced/alter-table",slug:"/advanced/alter-table/schema-change",permalink:"/zh-CN/docs/advanced/alter-table/schema-change",draft:!1,tags:[],version:"current",frontMatter:{title:"Schema \u53d8\u66f4",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u7ba1\u7406\u5668",permalink:"/zh-CN/docs/advanced/small-file-mgr"},next:{title:"\u66ff\u6362\u8868",permalink:"/zh-CN/docs/advanced/alter-table/replace-table"}},N={},u=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u539f\u7406\u4ecb\u7ecd",id:"\u539f\u7406\u4ecb\u7ecd",level:2},{value:"\u521b\u5efa\u4f5c\u4e1a",id:"\u521b\u5efa\u4f5c\u4e1a",level:2},{value:"\u67e5\u770b\u4f5c\u4e1a",id:"\u67e5\u770b\u4f5c\u4e1a",level:2},{value:"\u53d6\u6d88\u4f5c\u4e1a",id:"\u53d6\u6d88\u4f5c\u4e1a",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:2},{value:"FE \u914d\u7f6e",id:"fe-\u914d\u7f6e",level:3},{value:"BE \u914d\u7f6e",id:"be-\u914d\u7f6e",level:3},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],o={toc:u};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"schema-change"},"Schema Change"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Schema Change \u64cd\u4f5c\u6765\u4fee\u6539\u5df2\u5b58\u5728\u8868\u7684 Schema\u3002\u76ee\u524d Doris \u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u4fee\u6539:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u3001\u5220\u9664\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5217\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u6574\u5217\u987a\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u3001\u4fee\u6539 Bloom Filter"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u3001\u5220\u9664 bitmap index")),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa Schema Change \u4f5c\u4e1a\uff0c\u4ee5\u53ca\u8fdb\u884c Schema Change \u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u548c\u5e38\u89c1\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Base Table\uff1a\u57fa\u8868\u3002\u6bcf\u4e00\u4e2a\u8868\u88ab\u521b\u5efa\u65f6\uff0c\u90fd\u5bf9\u5e94\u4e00\u4e2a\u57fa\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"Rollup\uff1a\u57fa\u4e8e\u57fa\u8868\u6216\u8005\u5176\u4ed6 Rollup \u521b\u5efa\u51fa\u6765\u7684\u4e0a\u5377\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"Index\uff1a\u7269\u5316\u7d22\u5f15\u3002Rollup \u6216 Base Table \u90fd\u88ab\u79f0\u4e3a\u7269\u5316\u7d22\u5f15\u3002"),(0,l.kt)("li",{parentName:"ul"},"Transaction\uff1a\u4e8b\u52a1\u3002\u6bcf\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u90fd\u662f\u4e00\u4e2a\u4e8b\u52a1\uff0c\u6bcf\u4e2a\u4e8b\u52a1\u6709\u4e00\u4e2a\u552f\u4e00\u9012\u589e\u7684 Transaction ID\u3002")),(0,l.kt)("h2",{id:"\u539f\u7406\u4ecb\u7ecd"},"\u539f\u7406\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u6267\u884c Schema Change \u7684\u57fa\u672c\u8fc7\u7a0b\uff0c\u662f\u901a\u8fc7\u539f Index \u7684\u6570\u636e\uff0c\u751f\u6210\u4e00\u4efd\u65b0 Schema \u7684 Index \u7684\u6570\u636e\u3002\u5176\u4e2d\u4e3b\u8981\u9700\u8981\u8fdb\u884c\u4e24\u90e8\u5206\u6570\u636e\u8f6c\u6362\uff0c\u4e00\u662f\u5df2\u5b58\u5728\u7684\u5386\u53f2\u6570\u636e\u7684\u8f6c\u6362\uff0c\u4e8c\u662f\u5728 Schema Change \u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u65b0\u5230\u8fbe\u7684\u5bfc\u5165\u6570\u636e\u7684\u8f6c\u6362\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both origin and new index data\n     |\n     |      +------------------+ +---------------+\n     |      | Origin Index     | | Origin Index  |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | New Index        | | New Index     |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n")),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u8f6c\u6362\u5386\u53f2\u6570\u636e\u4e4b\u524d\uff0cDoris \u4f1a\u83b7\u53d6\u4e00\u4e2a\u6700\u65b0\u7684 Transaction ID\u3002\u5e76\u7b49\u5f85\u8fd9\u4e2a Transaction ID \u4e4b\u524d\u7684\u6240\u6709\u5bfc\u5165\u4e8b\u52a1\u5b8c\u6210\u3002\u8fd9\u4e2a Transaction ID \u6210\u4e3a\u5206\u6c34\u5cad\u3002\u610f\u601d\u662f\uff0cDoris \u4fdd\u8bc1\u5728\u5206\u6c34\u5cad\u4e4b\u540e\u7684\u6240\u6709\u5bfc\u5165\u4efb\u52a1\uff0c\u90fd\u4f1a\u540c\u65f6\u4e3a\u539f Index \u548c\u65b0 Index \u751f\u6210\u6570\u636e\u3002\u8fd9\u6837\u5f53\u5386\u53f2\u6570\u636e\u8f6c\u6362\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u65b0\u7684 Index \u4e2d\u7684\u6570\u636e\u662f\u5b8c\u6574\u7684\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa\u4f5c\u4e1a"},"\u521b\u5efa\u4f5c\u4e1a"),(0,l.kt)("p",null,"\u521b\u5efa Schema Change \u7684\u5177\u4f53\u8bed\u6cd5\u53ef\u4ee5\u67e5\u770b\u5e2e\u52a9 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},"ALTER TABLE COLUMN")," \u4e2d Schema Change \u90e8\u5206\u7684\u8bf4\u660e\u3002"),(0,l.kt)("p",null,"Schema Change \u7684\u521b\u5efa\u662f\u4e00\u4e2a\u5f02\u6b65\u8fc7\u7a0b\uff0c\u4f5c\u4e1a\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u7528\u6237\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE COLUMN")," \u547d\u4ee4\u6765\u67e5\u770b\u4f5c\u4e1a\u8fdb\u5ea6\u3002"),(0,l.kt)("h2",{id:"\u67e5\u770b\u4f5c\u4e1a"},"\u67e5\u770b\u4f5c\u4e1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE COLUMN")," \u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u6b63\u5728\u6267\u884c\u6216\u5df2\u7ecf\u5b8c\u6210\u7684 Schema Change \u4f5c\u4e1a\u3002\u5f53\u4e00\u6b21 Schema Change \u4f5c\u4e1a\u6d89\u53ca\u5230\u591a\u4e2a Index \u65f6\uff0c\u8be5\u547d\u4ee4\u4f1a\u663e\u793a\u591a\u884c\uff0c\u6bcf\u884c\u5bf9\u5e94\u4e00\u4e2a Index\u3002\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW ALTER TABLE COLUMN\\G;\n*************************** 1. row ***************************\n        JobId: 20021\n    TableName: tbl1\n   CreateTime: 2019-08-05 23:03:13\n   FinishTime: 2019-08-05 23:03:42\n    IndexName: tbl1\n      IndexId: 20022\nOriginIndexId: 20017\nSchemaVersion: 2:792557838\nTransactionId: 10023\n        State: FINISHED\n          Msg: \n     Progress: NULL\n      Timeout: 86400\n1 row in set (0.00 sec)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JobId\uff1a\u6bcf\u4e2a Schema Change \u4f5c\u4e1a\u7684\u552f\u4e00 ID\u3002"),(0,l.kt)("li",{parentName:"ul"},"TableName\uff1aSchema Change \u5bf9\u5e94\u7684\u57fa\u8868\u7684\u8868\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},"CreateTime\uff1a\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},'FinishedTime\uff1a\u4f5c\u4e1a\u7ed3\u675f\u65f6\u95f4\u3002\u5982\u672a\u7ed3\u675f\uff0c\u5219\u663e\u793a "N/A"\u3002'),(0,l.kt)("li",{parentName:"ul"},"IndexName\uff1a \u672c\u6b21\u4fee\u6539\u6240\u6d89\u53ca\u7684\u67d0\u4e00\u4e2a Index \u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},"IndexId\uff1a\u65b0\u7684 Index \u7684\u552f\u4e00 ID\u3002"),(0,l.kt)("li",{parentName:"ul"},"OriginIndexId\uff1a\u65e7\u7684 Index \u7684\u552f\u4e00 ID\u3002"),(0,l.kt)("li",{parentName:"ul"},"SchemaVersion\uff1a\u4ee5 M:N \u7684\u683c\u5f0f\u5c55\u793a\u3002\u5176\u4e2d M \u8868\u793a\u672c\u6b21 Schema Change \u53d8\u66f4\u7684\u7248\u672c\uff0cN \u8868\u793a\u5bf9\u5e94\u7684 Hash \u503c\u3002\u6bcf\u6b21 Schema Change\uff0c\u7248\u672c\u90fd\u4f1a\u9012\u589e\u3002"),(0,l.kt)("li",{parentName:"ul"},"TransactionId\uff1a\u8f6c\u6362\u5386\u53f2\u6570\u636e\u7684\u5206\u6c34\u5cad transaction ID\u3002"),(0,l.kt)("li",{parentName:"ul"},"State\uff1a\u4f5c\u4e1a\u6240\u5728\u9636\u6bb5\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PENDING\uff1a\u4f5c\u4e1a\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u88ab\u8c03\u5ea6\u3002"),(0,l.kt)("li",{parentName:"ul"},"WAITING_TXN\uff1a\u7b49\u5f85\u5206\u6c34\u5cad transaction ID \u4e4b\u524d\u7684\u5bfc\u5165\u4efb\u52a1\u5b8c\u6210\u3002"),(0,l.kt)("li",{parentName:"ul"},"RUNNING\uff1a\u5386\u53f2\u6570\u636e\u8f6c\u6362\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"FINISHED\uff1a\u4f5c\u4e1a\u6210\u529f\u3002"),(0,l.kt)("li",{parentName:"ul"},"CANCELLED\uff1a\u4f5c\u4e1a\u5931\u8d25\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Msg\uff1a\u5982\u679c\u4f5c\u4e1a\u5931\u8d25\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5931\u8d25\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"Progress\uff1a\u4f5c\u4e1a\u8fdb\u5ea6\u3002\u53ea\u6709\u5728 RUNNING \u72b6\u6001\u624d\u4f1a\u663e\u793a\u8fdb\u5ea6\u3002\u8fdb\u5ea6\u662f\u4ee5 M/N \u7684\u5f62\u5f0f\u663e\u793a\u3002\u5176\u4e2d N \u4e3a Schema Change \u6d89\u53ca\u7684\u603b\u526f\u672c\u6570\u3002M \u4e3a\u5df2\u5b8c\u6210\u5386\u53f2\u6570\u636e\u8f6c\u6362\u7684\u526f\u672c\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"Timeout\uff1a\u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\u79d2\u3002")),(0,l.kt)("h2",{id:"\u53d6\u6d88\u4f5c\u4e1a"},"\u53d6\u6d88\u4f5c\u4e1a"),(0,l.kt)("p",null,"\u5728\u4f5c\u4e1a\u72b6\u6001\u4e0d\u4e3a FINISHED \u6216 CANCELLED \u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53d6\u6d88 Schema Change \u4f5c\u4e1a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE COLUMN FROM tbl_name;\n")),(0,l.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("p",null,"Schema Change \u53ef\u4ee5\u5728\u4e00\u4e2a\u4f5c\u4e1a\u4e2d\uff0c\u5bf9\u591a\u4e2a Index \u8fdb\u884c\u4e0d\u540c\u7684\u4fee\u6539\u3002\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,"\u6e90 Schema\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n+-----------+-------+------+------+------+---------+-------+\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u7ed9 rollup1 \u548c rollup2 \u90fd\u52a0\u5165\u4e00\u5217 k4\uff0c\u5e76\u4e14\u518d\u7ed9 rollup2 \u52a0\u5165\u4e00\u5217 k5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE tbl1\nADD COLUMN k4 INT default "1" to rollup1,\nADD COLUMN k4 INT default "1" to rollup2,\nADD COLUMN k5 INT default "1" to rollup2;\n')),(0,l.kt)("p",null,"\u5b8c\u6210\u540e\uff0cSchema \u53d8\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n+-----------+-------+------+------+------+---------+-------+\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0cBase \u8868 tbl1 \u4e5f\u81ea\u52a8\u52a0\u5165\u4e86 k4, k5 \u5217\u3002\u5373\u7ed9\u4efb\u610f rollup \u589e\u52a0\u7684\u5217\uff0c\u90fd\u4f1a\u81ea\u52a8\u52a0\u5165\u5230 Base \u8868\u4e2d\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u4e0d\u5141\u8bb8\u5411 Rollup \u4e2d\u52a0\u5165 Base \u8868\u5df2\u7ecf\u5b58\u5728\u7684\u5217\u3002\u5982\u679c\u7528\u6237\u9700\u8981\u8fd9\u6837\u505a\uff0c\u53ef\u4ee5\u91cd\u65b0\u5efa\u7acb\u4e00\u4e2a\u5305\u542b\u65b0\u589e\u5217\u7684 Rollup\uff0c\u4e4b\u540e\u518d\u5220\u9664\u539f Rollup\u3002"),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e00\u5f20\u8868\u5728\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u6709\u4e00\u4e2a Schema Change \u4f5c\u4e1a\u5728\u8fd0\u884c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Schema Change \u64cd\u4f5c\u4e0d\u963b\u585e\u5bfc\u5165\u548c\u67e5\u8be2\u64cd\u4f5c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5206\u533a\u5217\u548c\u5206\u6876\u5217\u4e0d\u80fd\u4fee\u6539\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c Schema \u4e2d\u6709 REPLACE \u65b9\u5f0f\u805a\u5408\u7684 value \u5217\uff0c\u5219\u4e0d\u5141\u8bb8\u5220\u9664 Key \u5217\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5220\u9664 Key \u5217\uff0cDoris \u65e0\u6cd5\u51b3\u5b9a REPLACE \u5217\u7684\u53d6\u503c\u3002"),(0,l.kt)("p",{parentName:"li"},"Unique \u6570\u636e\u6a21\u578b\u8868\u7684\u6240\u6709\u975e Key \u5217\u90fd\u662f REPLACE \u805a\u5408\u65b9\u5f0f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u65b0\u589e\u805a\u5408\u7c7b\u578b\u4e3a SUM \u6216\u8005 REPLACE \u7684 value \u5217\u65f6\uff0c\u8be5\u5217\u7684\u9ed8\u8ba4\u503c\u5bf9\u5386\u53f2\u6570\u636e\u6ca1\u6709\u542b\u4e49\u3002"),(0,l.kt)("p",{parentName:"li"},"\u56e0\u4e3a\u5386\u53f2\u6570\u636e\u5df2\u7ecf\u5931\u53bb\u660e\u7ec6\u4fe1\u606f\uff0c\u6240\u4ee5\u9ed8\u8ba4\u503c\u7684\u53d6\u503c\u5e76\u4e0d\u80fd\u5b9e\u9645\u53cd\u6620\u805a\u5408\u540e\u7684\u53d6\u503c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u4fee\u6539\u5217\u7c7b\u578b\u65f6\uff0c\u9664 Type \u4ee5\u5916\u7684\u5b57\u6bb5\u90fd\u9700\u8981\u6309\u539f\u5217\u4e0a\u7684\u4fe1\u606f\u8865\u5168\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5982\u4fee\u6539\u5217 ",(0,l.kt)("inlineCode",{parentName:"p"},'k1 INT SUM NULL DEFAULT "1"')," \u7c7b\u578b\u4e3a BIGINT\uff0c\u5219\u9700\u6267\u884c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE tbl1 MODIFY COLUMN "),"k1",(0,l.kt)("inlineCode",{parentName:"p"},' BIGINT SUM NULL DEFAULT "1";')),(0,l.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff0c\u9664\u65b0\u7684\u5217\u7c7b\u578b\u5916\uff0c\u5982\u805a\u5408\u65b9\u5f0f\uff0cNullable \u5c5e\u6027\uff0c\u4ee5\u53ca\u9ed8\u8ba4\u503c\u90fd\u8981\u6309\u7167\u539f\u4fe1\u606f\u8865\u5168\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u4fee\u6539\u5217\u540d\u79f0\u3001\u805a\u5408\u7c7b\u578b\u3001Nullable \u5c5e\u6027\u3001\u9ed8\u8ba4\u503c\u4ee5\u53ca\u5217\u6ce8\u91ca\u3002"))),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Schema Change \u7684\u6267\u884c\u901f\u5ea6"),(0,l.kt)("p",{parentName:"li"},"\u76ee\u524d Schema Change \u6267\u884c\u901f\u5ea6\u6309\u7167\u6700\u5dee\u6548\u7387\u4f30\u8ba1\u7ea6\u4e3a 10MB/s\u3002\u4fdd\u5b88\u8d77\u89c1\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u8fd9\u4e2a\u901f\u7387\u6765\u8bbe\u7f6e\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u4f5c\u4e1a\u62a5\u9519 ",(0,l.kt)("inlineCode",{parentName:"p"},"Table xxx is not stable. ...")),(0,l.kt)("p",{parentName:"li"},"Schema Change \u53ea\u6709\u5728\u8868\u6570\u636e\u5b8c\u6574\u4e14\u975e\u5747\u8861\u72b6\u6001\u4e0b\u624d\u53ef\u4ee5\u5f00\u59cb\u3002\u5982\u679c\u8868\u7684\u67d0\u4e9b\u6570\u636e\u5206\u7247\u526f\u672c\u4e0d\u5b8c\u6574\uff0c\u6216\u8005\u67d0\u4e9b\u526f\u672c\u6b63\u5728\u8fdb\u884c\u5747\u8861\u64cd\u4f5c\uff0c\u5219\u63d0\u4ea4\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,l.kt)("p",{parentName:"li"},"\u6570\u636e\u5206\u7247\u526f\u672c\u662f\u5426\u5b8c\u6574\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},'ADMIN SHOW REPLICA STATUS FROM tbl WHERE STATUS != "OK";')),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u6709\u8fd4\u56de\u7ed3\u679c\uff0c\u5219\u8bf4\u660e\u6709\u526f\u672c\u6709\u95ee\u9898\u3002\u901a\u5e38\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4fee\u590d\u8fd9\u4e9b\u95ee\u9898\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4f18\u5148\u4fee\u590d\u8fd9\u4e2a\u8868\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ADMIN REPAIR TABLE tbl1;")),(0,l.kt)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u662f\u5426\u6709\u6b63\u5728\u8fd0\u884c\u7684\u5747\u8861\u4efb\u52a1\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},'SHOW PROC "/cluster_balance/pending_tablets";')),(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u7b49\u5f85\u5747\u8861\u4efb\u52a1\u5b8c\u6210\uff0c\u6216\u8005\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4e34\u65f6\u7981\u6b62\u5747\u8861\u64cd\u4f5c\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");')))),(0,l.kt)("h2",{id:"\u76f8\u5173\u914d\u7f6e"},"\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("h3",{id:"fe-\u914d\u7f6e"},"FE \u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alter_table_timeout_second"),"\uff1a\u4f5c\u4e1a\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\uff0c86400 \u79d2\u3002")),(0,l.kt)("h3",{id:"be-\u914d\u7f6e"},"BE \u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alter_tablet_worker_count"),"\uff1a\u5728 BE \u7aef\u7528\u4e8e\u6267\u884c\u5386\u53f2\u6570\u636e\u8f6c\u6362\u7684\u7ebf\u7a0b\u6570\u3002\u9ed8\u8ba4\u4e3a 3\u3002\u5982\u679c\u5e0c\u671b\u52a0\u5feb Schema Change \u4f5c\u4e1a\u7684\u901f\u5ea6\uff0c\u53ef\u4ee5\u9002\u5f53\u8c03\u5927\u8fd9\u4e2a\u53c2\u6570\u540e\u91cd\u542f BE\u3002\u4f46\u8fc7\u591a\u7684\u8f6c\u6362\u7ebf\u7a0b\u53ef\u80fd\u4f1a\u5bfc\u81f4 IO \u538b\u529b\u589e\u52a0\uff0c\u5f71\u54cd\u5176\u4ed6\u64cd\u4f5c\u3002\u8be5\u7ebf\u7a0b\u548c Rollup \u4f5c\u4e1a\u5171\u7528\u3002")),(0,l.kt)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,l.kt)("p",null,"\u5173\u4e8eSchema Change\u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},"ALTER TABLE COLUMN")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP ALTER TABLE COLUMN"),"  \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);