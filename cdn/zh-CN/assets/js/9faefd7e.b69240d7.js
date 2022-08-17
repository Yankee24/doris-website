"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[76357],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,c=m["".concat(p,".").concat(d)]||m[d]||k[d]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47747:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Seatunnel Connector Flink Doris",language:"zh-CN"},i=void 0,o={unversionedId:"ecosystem/seatunnel/flink-sink",id:"ecosystem/seatunnel/flink-sink",title:"Seatunnel Connector Flink Doris",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/seatunnel/flink-sink.md",sourceDirName:"ecosystem/seatunnel",slug:"/ecosystem/seatunnel/flink-sink",permalink:"/zh-CN/docs/ecosystem/seatunnel/flink-sink",draft:!1,tags:[],version:"current",frontMatter:{title:"Seatunnel Connector Flink Doris",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7cfb\u7edf\u8bbe\u7f6e",permalink:"/zh-CN/docs/ecosystem/doris-manager/system-settings"},next:{title:"Seatunnel Connector Spark Doris",permalink:"/zh-CN/docs/ecosystem/seatunnel/spark-sink"}},p={},s=[{value:"Flink Sink Doris(2.x)",id:"flink-sink-doris2x",level:2},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:3},{value:"Examples",id:"examples",level:3},{value:"\u542f\u52a8\u547d\u4ee4",id:"\u542f\u52a8\u547d\u4ee4",level:3}],u={toc:s};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seatunnel"},"Seatunnel"),(0,r.kt)("p",null,"\u6700\u65b0\u7248\u672c\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/zh-CN/"},"Apache SeaTunnel (\u539f waterdrop )")," \u5df2\u7ecf\u652f\u6301 Doris \u7684\u8fde\u63a5\u5668, SeaTunnel \u53ef\u4ee5\u7528\u8fc7 Spark \u5f15\u64ce\u548c Flink \u5f15\u64ce\u540c\u6b65\u6570\u636e\u81f3 Doris \u4e2d."),(0,r.kt)("h2",{id:"flink-sink-doris2x"},"Flink Sink Doris(2.x)"),(0,r.kt)("p",null,"Seatunnel Flink Sink Doris ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/seatunnel-connectors/seatunnel-connectors-flink/seatunnel-connector-flink-doris"},"\u63d2\u4ef6\u4ee3\u7801")),(0,r.kt)("h3",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u5f15\u64ce"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fenodes"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.*"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fenodes [string]")),(0,r.kt)("p",null,"Doris Fe Http\u8bbf\u95ee\u5730\u5740, eg: 127.0.01:8030"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"database [string]")),(0,r.kt)("p",null,"\u5199\u5165 Doris \u7684\u5e93\u540d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"table [string]")),(0,r.kt)("p",null,"\u5199\u5165 Doris \u7684\u8868\u540d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"user [string]")),(0,r.kt)("p",null,"Doris \u8bbf\u95ee\u7528\u6237"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"password [string]")),(0,r.kt)("p",null,"Doris \u8bbf\u95ee\u7528\u6237\u5bc6\u7801"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"batch_size [int]")),(0,r.kt)("p",null,"\u5355\u6b21\u5199Doris\u7684\u6700\u5927\u884c\u6570,\u9ed8\u8ba4\u503c100"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"interval [int]")),(0,r.kt)("p",null,"flush \u95f4\u9694\u65f6\u95f4(\u6beb\u79d2)\uff0c\u8d85\u8fc7\u8be5\u65f6\u95f4\u540e\u5f02\u6b65\u7ebf\u7a0b\u5c06 \u7f13\u5b58\u4e2d\u6570\u636e\u5199\u5165Doris\u3002\u8bbe\u7f6e\u4e3a0\u8868\u793a\u5173\u95ed\u5b9a\u671f\u5199\u5165\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_retries [int]")),(0,r.kt)("p",null,"\u5199Doris\u5931\u8d25\u4e4b\u540e\u7684\u91cd\u8bd5\u6b21\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"doris.* [string]")),(0,r.kt)("p",null,"Stream load \u7684\u5bfc\u5165\u53c2\u6570\u3002\u4f8b\u5982:'doris.column_separator' = ', '\u7b49"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/stream-load-manual"},"\u66f4\u591a Stream Load \u53c2\u6570\u914d\u7f6e")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Socket \u6570\u636e\u5199\u5165 Doris"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'env {\n  execution.parallelism = 1\n}\nsource {\n    SocketStream {\n      host = 127.0.0.1\n      port = 9999\n      result_table_name = "socket"\n      field_name = "info"\n    }\n}\ntransform {\n}\nsink {\n  DorisSink {\n      fenodes = "127.0.0.1:8030"\n      user = root\n      password = 123456\n      database = test\n      table = test_tbl\n      batch_size = 5\n      max_retries = 1\n      interval = 5000\n    }\n}\n\n')),(0,r.kt)("h3",{id:"\u542f\u52a8\u547d\u4ee4"},"\u542f\u52a8\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sh bin/start-seatunnel-flink.sh --config config/flink.streaming.conf\n")))}k.isMDXComponent=!0}}]);