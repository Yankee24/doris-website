"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48925],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),E=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):N(N({},e),t)),n},o=function(t){var e=E(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=E(n),k=r,O=m["".concat(i,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(O,N(N({ref:e},o),{},{components:n})):a.createElement(O,N({ref:e},o))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,N=new Array(l);N[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,N[1]=p;for(var E=2;E<l;E++)N[E]=n[E];return a.createElement.apply(null,N)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51819:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>N,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>E});var a=n(87462),r=(n(67294),n(3905));const l={title:"Star-Schema-Benchmark \u6d4b\u8bd5",language:"zh-CN"},N=void 0,p={unversionedId:"benchmark/ssb",id:"version-dev/benchmark/ssb",title:"Star-Schema-Benchmark \u6d4b\u8bd5",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/benchmark/ssb.md",sourceDirName:"benchmark",slug:"/benchmark/ssb",permalink:"/zh-CN/docs/dev/benchmark/ssb",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/benchmark/ssb.md",tags:[],version:"dev",frontMatter:{title:"Star-Schema-Benchmark \u6d4b\u8bd5",language:"zh-CN"}},i={},E=[{value:"1. \u786c\u4ef6\u73af\u5883",id:"1-\u786c\u4ef6\u73af\u5883",level:2},{value:"2. \u8f6f\u4ef6\u73af\u5883",id:"2-\u8f6f\u4ef6\u73af\u5883",level:2},{value:"3. \u6d4b\u8bd5\u6570\u636e\u91cf",id:"3-\u6d4b\u8bd5\u6570\u636e\u91cf",level:2},{value:"4. \u6d4b\u8bd5\u7ed3\u679c",id:"4-\u6d4b\u8bd5\u7ed3\u679c",level:2},{value:"5. \u73af\u5883\u51c6\u5907",id:"5-\u73af\u5883\u51c6\u5907",level:2},{value:"6. \u6570\u636e\u51c6\u5907",id:"6-\u6570\u636e\u51c6\u5907",level:2},{value:"6.1 \u4e0b\u8f7d\u5b89\u88c5 SSB \u6570\u636e\u751f\u6210\u5de5\u5177\u3002",id:"61-\u4e0b\u8f7d\u5b89\u88c5-ssb-\u6570\u636e\u751f\u6210\u5de5\u5177",level:3},{value:"6.2 \u751f\u6210 SSB \u6d4b\u8bd5\u96c6",id:"62-\u751f\u6210-ssb-\u6d4b\u8bd5\u96c6",level:3},{value:"6.3 \u5efa\u8868",id:"63-\u5efa\u8868",level:3},{value:"6.3.1 \u51c6\u5907 <code>conf/doris-cluster.conf</code> \u6587\u4ef6\u3002",id:"631-\u51c6\u5907-confdoris-clusterconf-\u6587\u4ef6",level:4},{value:"6.3.2 \u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa SSB \u8868\uff1a",id:"632-\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa-ssb-\u8868",level:4},{value:"6.4 \u5bfc\u5165\u6570\u636e",id:"64-\u5bfc\u5165\u6570\u636e",level:3},{value:"6.5 \u68c0\u67e5\u5bfc\u5165\u6570\u636e",id:"65-\u68c0\u67e5\u5bfc\u5165\u6570\u636e",level:3},{value:"6.6 \u67e5\u8be2\u6d4b\u8bd5",id:"66-\u67e5\u8be2\u6d4b\u8bd5",level:3},{value:"6.6.1 \u6d4b\u8bd5\u811a\u672c",id:"661-\u6d4b\u8bd5\u811a\u672c",level:4},{value:"6.6.2 \u6d4b\u8bd5SQL",id:"662-\u6d4b\u8bd5sql",level:4}],o={toc:E};function d(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"star-schema-benchmark"},"Star Schema Benchmark"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF"},"Star Schema Benchmark(SSB)")," \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u6570\u4ed3\u573a\u666f\u4e0b\u7684\u6027\u80fd\u6d4b\u8bd5\u96c6\u3002SSB\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"http://www.tpc.org/tpch/"},"TPC-H")," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5316\u7248\u7684\u661f\u578b\u6a21\u578b\u6570\u636e\u96c6\uff0c\u4e3b\u8981\u7528\u4e8e\u6d4b\u8bd5\u5728\u661f\u578b\u6a21\u578b\u4e0b\uff0c\u591a\u8868\u5173\u8054\u67e5\u8be2\u7684\u6027\u80fd\u8868\u73b0\u3002\u53e6\u5916\uff0c\u4e1a\u754c\u5185\u901a\u5e38\u4e5f\u4f1a\u5c06SSB\u6253\u5e73\u4e3a\u5bbd\u8868\u6a21\u578b\uff08\u4ee5\u4e0b\u7b80\u79f0\uff1aSSB flat\uff09\uff0c\u6765\u6d4b\u8bd5\u67e5\u8be2\u5f15\u64ce\u7684\u6027\u80fd\uff0c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/getting-started/example-datasets/star-schema"},"Clickhouse"),"\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Doris \u5728 SSB \u6d4b\u8bd5\u96c6\u4e0a\u7684\u6027\u80fd\u8868\u73b0\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce81\uff1a\u5305\u62ec SSB \u5728\u5185\u7684\u6807\u51c6\u6d4b\u8bd5\u96c6\u901a\u5e38\u548c\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u5dee\u8ddd\u8f83\u5927\uff0c\u5e76\u4e14\u90e8\u5206\u6d4b\u8bd5\u4f1a\u9488\u5bf9\u6d4b\u8bd5\u96c6\u8fdb\u884c\u53c2\u6570\u8c03\u4f18\u3002\u6240\u4ee5\u6807\u51c6\u6d4b\u8bd5\u96c6\u7684\u6d4b\u8bd5\u7ed3\u679c\u4ec5\u80fd\u53cd\u6620\u6570\u636e\u5e93\u5728\u7279\u5b9a\u573a\u666f\u4e0b\u7684\u6027\u80fd\u8868\u73b0\u3002\u5efa\u8bae\u7528\u6237\u4f7f\u7528\u5b9e\u9645\u4e1a\u52a1\u6570\u636e\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u6d4b\u8bd5\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6ce82\uff1a\u672c\u6587\u6863\u6d89\u53ca\u7684\u64cd\u4f5c\u90fd\u5728 Ubuntu Server 20.04 \u73af\u5883\u8fdb\u884c\uff0cCentOS 7 \u4e5f\u53ef\u6d4b\u8bd5\u3002")),(0,r.kt)("p",null,"\u5728 SSB \u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6\u4e0a\u7684 13 \u4e2a\u67e5\u8be2\u4e0a\uff0c\u6211\u4eec\u5bf9\u5373\u5c06\u53d1\u5e03\u7684 Doris 1.1 \u7248\u672c\u548c Doris 0.15.0 RC04 \u7248\u672c\u8fdb\u884c\u4e86\u5bf9\u522b\u6d4b\u8bd5\uff0c\u6574\u4f53\u6027\u80fd\u63d0\u5347\u4e86 2-3 \u500d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ssb_v11_v015_compare",src:n(14783).Z,width:"1464",height:"634"})),(0,r.kt)("h2",{id:"1-\u786c\u4ef6\u73af\u5883"},"1. \u786c\u4ef6\u73af\u5883"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u673a\u5668\u6570\u91cf"),(0,r.kt)("th",{parentName:"tr",align:null},"4 \u53f0\u817e\u8baf\u4e91\u4e3b\u673a\uff081\u4e2aFE\uff0c3\u4e2aBE\uff09"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"AMD EPYC\u2122 Milan(2.55GHz/3.5GHz) 16\u6838")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58"),(0,r.kt)("td",{parentName:"tr",align:null},"64G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u5e26\u5bbd"),(0,r.kt)("td",{parentName:"tr",align:null},"7Gbps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u78c1\u76d8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ad8\u6027\u80fd\u4e91\u786c\u76d8")))),(0,r.kt)("h2",{id:"2-\u8f6f\u4ef6\u73af\u5883"},"2. \u8f6f\u4ef6\u73af\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Doris\u90e8\u7f72 3BE 1FE\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u6838\u7248\u672c\uff1aLinux version 5.4.0-96-generic (buildd@lgw01-amd64-051)"),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff1aUbuntu Server 20.04 LTS 64\u4f4d"),(0,r.kt)("li",{parentName:"ul"},"Doris \u8f6f\u4ef6\u7248\u672c\uff1aApache Doris 1.1 \u3001Apache Doris 0.15.0 RC04"),(0,r.kt)("li",{parentName:"ul"},'JDK\uff1aopenjdk version "11.0.14" 2022-01-18')),(0,r.kt)("h2",{id:"3-\u6d4b\u8bd5\u6570\u636e\u91cf"},"3. \u6d4b\u8bd5\u6570\u636e\u91cf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"SSB\u8868\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u884c\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lineorder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"600,037,902"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5546\u54c1\u8ba2\u5355\u660e\u7ec6\u8868\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"customer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3,000,000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u4fe1\u606f\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"part"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1,400,000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u96f6\u4ef6\u4fe1\u606f\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"supplier"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200,000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f9b\u5e94\u5546\u4fe1\u606f\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2,556"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65e5\u671f\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lineorder_flat"),(0,r.kt)("td",{parentName:"tr",align:"left"},"600,037,902"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5c55\u5e73\u540e\u7684\u5bbd\u8868")))),(0,r.kt)("h2",{id:"4-\u6d4b\u8bd5\u7ed3\u679c"},"4. \u6d4b\u8bd5\u7ed3\u679c"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u5373\u5c06\u53d1\u5e03\u7684 Doris-1.1\u7248\u672c\u548c Doris-0.15.0 RC04 \u7248\u672c\u8fdb\u884c\u5bf9\u6bd4\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Query"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris-1.1(ms)"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris-0.15.0 RC04(ms)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"90"),(0,r.kt)("td",{parentName:"tr",align:null},"250")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q1.3"),(0,r.kt)("td",{parentName:"tr",align:null},"70"),(0,r.kt)("td",{parentName:"tr",align:null},"120")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q2.1"),(0,r.kt)("td",{parentName:"tr",align:null},"360"),(0,r.kt)("td",{parentName:"tr",align:null},"900")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q2.2"),(0,r.kt)("td",{parentName:"tr",align:null},"340"),(0,r.kt)("td",{parentName:"tr",align:null},"1020")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q2.3"),(0,r.kt)("td",{parentName:"tr",align:null},"260"),(0,r.kt)("td",{parentName:"tr",align:null},"770")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q3.1"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"1710")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"290"),(0,r.kt)("td",{parentName:"tr",align:null},"670")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q3.3"),(0,r.kt)("td",{parentName:"tr",align:null},"240"),(0,r.kt)("td",{parentName:"tr",align:null},"550")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q3.4"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q4.1"),(0,r.kt)("td",{parentName:"tr",align:null},"480"),(0,r.kt)("td",{parentName:"tr",align:null},"1250")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q4.2"),(0,r.kt)("td",{parentName:"tr",align:null},"240"),(0,r.kt)("td",{parentName:"tr",align:null},"400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q4.3"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"330")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c\u8bf4\u660e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7ed3\u679c\u5bf9\u5e94\u7684\u6570\u636e\u96c6\u4e3ascale 100, \u7ea66\u4ebf\u6761\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u73af\u5883\u914d\u7f6e\u4e3a\u7528\u6237\u5e38\u7528\u914d\u7f6e\uff0c\u4e91\u670d\u52a1\u56684\u53f0\uff0c16\u6838 64G SSD\uff0c1 FE 3 BE \u90e8\u7f72\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9009\u7528\u7528\u6237\u5e38\u89c1\u914d\u7f6e\u6d4b\u8bd5\u4ee5\u964d\u4f4e\u7528\u6237\u9009\u578b\u8bc4\u4f30\u6210\u672c\uff0c\u4f46\u6574\u4e2a\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u6d88\u8017\u5982\u6b64\u591a\u7684\u786c\u4ef6\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7ed3\u679c\u4e3a3\u6b21\u6267\u884c\u53d6\u5e73\u5747\u503c\u3002\u5e76\u4e14\u6570\u636e\u7ecf\u8fc7\u5145\u5206\u7684 compaction\uff08\u5982\u679c\u5728\u521a\u5bfc\u5165\u6570\u636e\u540e\u7acb\u523b\u6d4b\u8bd5\uff0c\u5219\u67e5\u8be2\u5ef6\u8fdf\u53ef\u80fd\u9ad8\u4e8e\u672c\u6d4b\u8bd5\u7ed3\u679c\uff0ccompaction\u7684\u901f\u5ea6\u6b63\u5728\u6301\u7eed\u4f18\u5316\u4e2d\uff0c\u672a\u6765\u4f1a\u663e\u8457\u964d\u4f4e\uff09\u3002")),(0,r.kt)("h2",{id:"5-\u73af\u5883\u51c6\u5907"},"5. \u73af\u5883\u51c6\u5907"),(0,r.kt)("p",null,"\u8bf7\u5148\u53c2\u7167 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/install/install-deploy"},"\u5b98\u65b9\u6587\u6863")," \u8fdb\u884c Doris \u7684\u5b89\u88c5\u90e8\u7f72\uff0c\u4ee5\u83b7\u5f97\u4e00\u4e2a\u6b63\u5e38\u8fd0\u884c\u4e2d\u7684 Doris \u96c6\u7fa4\uff08\u81f3\u5c11\u5305\u542b 1 FE 1 BE\uff0c\u63a8\u8350 1 FE 3 BE\uff09\u3002"),(0,r.kt)("p",null,"\u53ef\u4fee\u6539 BE \u7684\u914d\u7f6e\u6587\u4ef6 be.conf \u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff0c\u91cd\u542fBE\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u67e5\u8be2\u6027\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"enable_storage_vectorization=true\nenable_low_cardinality_optimize=true\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6587\u6863\u4e2d\u6d89\u53ca\u7684\u811a\u672c\u90fd\u5b58\u653e\u5728 Doris \u4ee3\u7801\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tools/ssb-tools/")," \u4e0b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u8fd9\u4e24\u4e2a\u53c2\u6570\u5728 0.15.0 RC04 \u7248\u672c\u91cc\u6ca1\u6709\u8fd9\u4e24\u4e2a\u53c2\u6570\uff0c\u4e0d\u9700\u8981\u914d\u7f6e\u3002")),(0,r.kt)("h2",{id:"6-\u6570\u636e\u51c6\u5907"},"6. \u6570\u636e\u51c6\u5907"),(0,r.kt)("h3",{id:"61-\u4e0b\u8f7d\u5b89\u88c5-ssb-\u6570\u636e\u751f\u6210\u5de5\u5177"},"6.1 \u4e0b\u8f7d\u5b89\u88c5 SSB \u6570\u636e\u751f\u6210\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u4e0b\u8f7d\u5e76\u7f16\u8bd1 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/electrum/ssb-dbgen.git"},"ssb-dbgen")," \u5de5\u5177\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash bin/build-ssb-dbgen.sh\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u5c06\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/ssb-dbgen/")," \u76ee\u5f55\u4e0b\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"dbgen")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.kt)("h3",{id:"62-\u751f\u6210-ssb-\u6d4b\u8bd5\u96c6"},"6.2 \u751f\u6210 SSB \u6d4b\u8bd5\u96c6"),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210 SSB \u6570\u636e\u96c6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash bin/gen-ssb-data.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce81\uff1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"bash bin/gen-ssb-data.sh -h")," \u67e5\u770b\u811a\u672c\u5e2e\u52a9\uff0c\u9ed8\u8ba4 scale factor \u4e3a 100\uff08\u7b80\u79f0sf100\uff09\uff0c\u9ed8\u8ba4\u751f\u6210 10 \u4e2a\u6570\u636e\u6587\u4ef6\uff0c\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"bash bin/gen-ssb-data.sh -s 100 -c 10"),"\uff0c\u8017\u65f6\u6570\u5206\u949f\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6ce82\uff1a\u6570\u636e\u4f1a\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},".tbl")," \u4e3a\u540e\u7f00\u751f\u6210\u5728  ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/ssb-data/")," \u76ee\u5f55\u4e0b\u3002\u6587\u4ef6\u603b\u5927\u5c0f\u7ea660GB\u3002\u751f\u6210\u65f6\u95f4\u53ef\u80fd\u5728\u6570\u5206\u949f\u52301\u5c0f\u65f6\u4e0d\u7b49\uff0c\u751f\u6210\u5b8c\u6210\u540e\u4f1a\u5217\u51fa\u751f\u6210\u6587\u4ef6\u7684\u4fe1\u606f\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6ce83\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"-s 100")," \u8868\u793a\u6d4b\u8bd5\u96c6\u5927\u5c0f\u7cfb\u6570\u4e3a 100\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"-c 10")," \u8868\u793a\u5e76\u53d110\u4e2a\u7ebf\u7a0b\u751f\u6210 lineorder \u8868\u7684\u6570\u636e\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," \u53c2\u6570\u4e5f\u51b3\u5b9a\u4e86\u6700\u7ec8 lineorder \u8868\u7684\u6587\u4ef6\u6570\u91cf\u3002\u53c2\u6570\u8d8a\u5927\uff0c\u6587\u4ef6\u6570\u8d8a\u591a\uff0c\u6bcf\u4e2a\u6587\u4ef6\u8d8a\u5c0f\u3002\u6d4b\u8bd5sf100\u7528\u9ed8\u8ba4\u53c2\u6570\u5373\u53ef\uff0c\u6d4b\u8bd5sf1000\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"-s 1000 -c 100")," \u3002")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"-s 100")," \u53c2\u6570\u4e0b\uff0c\u751f\u6210\u7684\u6570\u636e\u96c6\u5927\u5c0f\u4e3a\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Table"),(0,r.kt)("th",{parentName:"tr",align:null},"Rows"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"File Number"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineorder"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u4ebf\uff08600037902\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"60GB"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer"),(0,r.kt)("td",{parentName:"tr",align:null},"300\u4e07\uff083000000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"277M"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"part"),(0,r.kt)("td",{parentName:"tr",align:null},"140\u4e07\uff081400000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"116M"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supplier"),(0,r.kt)("td",{parentName:"tr",align:null},"20\u4e07\uff08200000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"17M"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dates"),(0,r.kt)("td",{parentName:"tr",align:null},"2556"),(0,r.kt)("td",{parentName:"tr",align:null},"228K"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("h3",{id:"63-\u5efa\u8868"},"6.3 \u5efa\u8868"),(0,r.kt)("h4",{id:"631-\u51c6\u5907-confdoris-clusterconf-\u6587\u4ef6"},"6.3.1 \u51c6\u5907 ",(0,r.kt)("inlineCode",{parentName:"h4"},"conf/doris-cluster.conf")," \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728\u8c03\u7528\u5bfc\u5165\u811a\u672c\u524d\uff0c\u9700\u8981\u5c06 FE \u7684 ip \u7aef\u53e3\u7b49\u4fe1\u606f\u5199\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/doris-cluster.conf")," \u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6\u5185\u5bb9\u5305\u62ec FE \u7684 ip\uff0cHTTP \u7aef\u53e3\uff0c\u7528\u6237\u540d\uff0c\u5bc6\u7801\uff08\u9ed8\u8ba4\u4e3a\u7a7a\uff09\u4ee5\u53ca\u5f85\u5bfc\u5165\u6570\u636e\u7684 DB \u540d\u79f0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export FE_HOST="127.0.0.1"\nexport FE_HTTP_PORT="8030"\nexport FE_QUERY_PORT="9030"\nexport USER="root"\nexport PASSWORD=""\nexport DB="ssb"\n')),(0,r.kt)("h4",{id:"632-\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa-ssb-\u8868"},"6.3.2 \u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa SSB \u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash bin/create-ssb-tables.sh\n")),(0,r.kt)("p",null,"\u6216\u8005\u590d\u5236 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/ddl/create-ssb-tables.sql"},"create-ssb-tables.sql")," \u4e2d\u7684\u5efa\u8868\u8bed\u53e5\uff0c\u5728 Doris \u4e2d\u6267\u884c\u3002\n\u590d\u5236 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/ddl/create-ssb-flat-table.sql"},"create-ssb-flat-table.sql")," \u4e2d\u7684\u5efa\u8868\u8bed\u53e5\uff0c\u5728 Doris \u4e2d\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"lineorder_flat")," \u8868\u5efa\u8868\u8bed\u53e5\u3002\u5728\u4e0a\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/create-ssb-table.sh"),'  \u811a\u672c\u4e2d\u521b\u5efa"lineorder_flat"\u8868\uff0c\u5e76\u8fdb\u884c\u4e86\u9ed8\u8ba4\u5206\u6876\u6570\uff0848\u4e2a\u6876)\u3002\u60a8\u53ef\u4ee5\u5220\u9664\u8be5\u8868\uff0c\u6839\u636e\u60a8\u7684\u96c6\u7fa4\u89c4\u6a21\u8282\u70b9\u914d\u7f6e\u5bf9\u8fd9\u4e2a\u5206\u6876\u6570\u8fdb\u884c\u8c03\u6574\uff0c\u8fd9\u6837\u53ef\u4ee5\u83b7\u53d6\u5230\u66f4\u597d\u7684\u4e00\u4e2a\u6d4b\u8bd5\u6548\u679c\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `lineorder_flat` (\n  `LO_ORDERDATE` date NOT NULL COMMENT "",\n  `LO_ORDERKEY` int(11) NOT NULL COMMENT "",\n  `LO_LINENUMBER` tinyint(4) NOT NULL COMMENT "",\n  `LO_CUSTKEY` int(11) NOT NULL COMMENT "",\n  `LO_PARTKEY` int(11) NOT NULL COMMENT "",\n  `LO_SUPPKEY` int(11) NOT NULL COMMENT "",\n  `LO_ORDERPRIORITY` varchar(100) NOT NULL COMMENT "",\n  `LO_SHIPPRIORITY` tinyint(4) NOT NULL COMMENT "",\n  `LO_QUANTITY` tinyint(4) NOT NULL COMMENT "",\n  `LO_EXTENDEDPRICE` int(11) NOT NULL COMMENT "",\n  `LO_ORDTOTALPRICE` int(11) NOT NULL COMMENT "",\n  `LO_DISCOUNT` tinyint(4) NOT NULL COMMENT "",\n  `LO_REVENUE` int(11) NOT NULL COMMENT "",\n  `LO_SUPPLYCOST` int(11) NOT NULL COMMENT "",\n  `LO_TAX` tinyint(4) NOT NULL COMMENT "",\n  `LO_COMMITDATE` date NOT NULL COMMENT "",\n  `LO_SHIPMODE` varchar(100) NOT NULL COMMENT "",\n  `C_NAME` varchar(100) NOT NULL COMMENT "",\n  `C_ADDRESS` varchar(100) NOT NULL COMMENT "",\n  `C_CITY` varchar(100) NOT NULL COMMENT "",\n  `C_NATION` varchar(100) NOT NULL COMMENT "",\n  `C_REGION` varchar(100) NOT NULL COMMENT "",\n  `C_PHONE` varchar(100) NOT NULL COMMENT "",\n  `C_MKTSEGMENT` varchar(100) NOT NULL COMMENT "",\n  `S_NAME` varchar(100) NOT NULL COMMENT "",\n  `S_ADDRESS` varchar(100) NOT NULL COMMENT "",\n  `S_CITY` varchar(100) NOT NULL COMMENT "",\n  `S_NATION` varchar(100) NOT NULL COMMENT "",\n  `S_REGION` varchar(100) NOT NULL COMMENT "",\n  `S_PHONE` varchar(100) NOT NULL COMMENT "",\n  `P_NAME` varchar(100) NOT NULL COMMENT "",\n  `P_MFGR` varchar(100) NOT NULL COMMENT "",\n  `P_CATEGORY` varchar(100) NOT NULL COMMENT "",\n  `P_BRAND` varchar(100) NOT NULL COMMENT "",\n  `P_COLOR` varchar(100) NOT NULL COMMENT "",\n  `P_TYPE` varchar(100) NOT NULL COMMENT "",\n  `P_SIZE` tinyint(4) NOT NULL COMMENT "",\n  `P_CONTAINER` varchar(100) NOT NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`LO_ORDERDATE`, `LO_ORDERKEY`)\nCOMMENT "OLAP"\nPARTITION BY RANGE(`LO_ORDERDATE`)\n(PARTITION p1 VALUES [(\'0000-01-01\'), (\'1993-01-01\')),\nPARTITION p2 VALUES [(\'1993-01-01\'), (\'1994-01-01\')),\nPARTITION p3 VALUES [(\'1994-01-01\'), (\'1995-01-01\')),\nPARTITION p4 VALUES [(\'1995-01-01\'), (\'1996-01-01\')),\nPARTITION p5 VALUES [(\'1996-01-01\'), (\'1997-01-01\')),\nPARTITION p6 VALUES [(\'1997-01-01\'), (\'1998-01-01\')),\nPARTITION p7 VALUES [(\'1998-01-01\'), (\'1999-01-01\')))\nDISTRIBUTED BY HASH(`LO_ORDERKEY`) BUCKETS 48\nPROPERTIES (\n"replication_num" = "1",\n"colocate_with" = "groupxx1",\n"in_memory" = "false",\n"storage_format" = "DEFAULT"\n);\n')),(0,r.kt)("h3",{id:"64-\u5bfc\u5165\u6570\u636e"},"6.4 \u5bfc\u5165\u6570\u636e"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u811a\u672c\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/doris-cluster.conf")," \u4e2d\u7684\u53c2\u6570\u8fde\u63a5Doirs\u8fdb\u884c\u5bfc\u5165\uff0c\u5355\u7ebf\u7a0b\u5bfc\u5165\u6570\u636e\u91cf\u8f83\u5c0f\u7684 4 \u5f20\u7ef4\u5ea6\u8868\uff08customer, part, supplier and date\uff09\uff0c\u5e76\u53d1\u5bfc\u5165 1 \u5f20\u4e8b\u5b9e\u8868\uff08lineorder\uff09\uff0c\u4ee5\u53ca\u91c7\u7528 'INSERT INTO ... SELECT ... ' \u7684\u65b9\u5f0f\u5bfc\u5165\u5bbd\u8868\uff08lineorder_flat\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash bin/load-ssb-data.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce81\uff1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"bash bin/load-ssb-data.sh -h")," \u67e5\u770b\u811a\u672c\u5e2e\u52a9, \u9ed8\u8ba4 5 \u7ebf\u7a0b\u5e76\u53d1\u5bfc\u5165 lineorder\uff0c\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"-c 5")," \u3002\u5982\u679c\u5f00\u542f\u66f4\u591a\u7ebf\u7a0b\uff0c\u53ef\u4ee5\u52a0\u5feb\u5bfc\u5165\u901f\u5ea6\uff0c\u4f46\u4f1a\u589e\u52a0\u989d\u5916\u7684\u5185\u5b58\u5f00\u9500\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6ce82\uff1a\u4e3a\u83b7\u5f97\u66f4\u5feb\u7684\u5bfc\u5165\u901f\u5ea6\uff0c\u4f60\u53ef\u4ee5\u5728 be.conf \u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_thread_num_per_store=5")," \u540e\u91cd\u542fBE\u3002\u8be5\u914d\u7f6e\u8868\u793a\u6bcf\u4e2a\u6570\u636e\u76ee\u5f55\u7684\u5199\u76d8\u7ebf\u7a0b\u6570\uff0c\u9ed8\u8ba4\u4e3a2\u3002\u8f83\u5927\u7684\u6570\u636e\u53ef\u4ee5\u63d0\u5347\u5199\u6570\u636e\u541e\u5410\uff0c\u4f46\u53ef\u80fd\u4f1a\u589e\u52a0 IO Util\u3002\uff08\u53c2\u8003\u503c\uff1a1\u5757\u673a\u68b0\u78c1\u76d8\uff0c\u5728\u9ed8\u8ba4\u4e3a2\u7684\u60c5\u51b5\u4e0b\uff0c\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u7684 IO Util \u7ea6\u4e3a12%\uff0c\u8bbe\u7f6e\u4e3a5\u65f6\uff0cIO Util \u7ea6\u4e3a26%\u3002\u5982\u679c\u662f SSD \u76d8\uff0c\u5219\u51e0\u4e4e\u4e3a 0\uff09\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6ce83\uff1a\u5bfc\u5165customer, part, supplier, date \u53ca lineorder \u8868\u8017\u65f6389s\uff0c\u6253\u5e73\u5230 lineorder_flat \u8017\u65f6740s.")),(0,r.kt)("h3",{id:"65-\u68c0\u67e5\u5bfc\u5165\u6570\u636e"},"6.5 \u68c0\u67e5\u5bfc\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) from part;\nselect count(*) from customer;\nselect count(*) from supplier;\nselect count(*) from dates;\nselect count(*) from lineorder;\nselect count(*) from lineorder_flat;\n")),(0,r.kt)("p",null,"\u6570\u636e\u91cf\u5e94\u548c\u751f\u6210\u6570\u636e\u7684\u884c\u6570\u4e00\u81f4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Table"),(0,r.kt)("th",{parentName:"tr",align:null},"Rows"),(0,r.kt)("th",{parentName:"tr",align:null},"Origin Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Compacted Size(1 Replica)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineorder_flat"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u4ebf\uff08600037902\uff09"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"59.709 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineorder"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u4ebf\uff08600037902\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"60 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"14.514 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer"),(0,r.kt)("td",{parentName:"tr",align:null},"300\u4e07\uff083000000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"277 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"138.247 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"part"),(0,r.kt)("td",{parentName:"tr",align:null},"140\u4e07\uff081400000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"116 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"12.759 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supplier"),(0,r.kt)("td",{parentName:"tr",align:null},"20\u4e07\uff08200000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"17 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"9.143 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dates"),(0,r.kt)("td",{parentName:"tr",align:null},"2556"),(0,r.kt)("td",{parentName:"tr",align:null},"228 KB"),(0,r.kt)("td",{parentName:"tr",align:null},"34.276 KB")))),(0,r.kt)("h3",{id:"66-\u67e5\u8be2\u6d4b\u8bd5"},"6.6 \u67e5\u8be2\u6d4b\u8bd5"),(0,r.kt)("h4",{id:"661-\u6d4b\u8bd5\u811a\u672c"},"6.6.1 \u6d4b\u8bd5\u811a\u672c"),(0,r.kt)("p",null,"\u4e0b\u9762\u811a\u672c\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/doris-cluster.conf")," \u4e2d\u7684\u53c2\u6570\u8fde\u63a5Doris\uff0c\u6267\u884c\u67e5\u8be2\u524d\u4f1a\u5148\u6253\u5370\u51fa\u5404\u8868\u7684\u6570\u636e\u884c\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash bin/run-ssb-flat-queries.sh\n")),(0,r.kt)("h4",{id:"662-\u6d4b\u8bd5sql"},"6.6.2 \u6d4b\u8bd5SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--Q1.1\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE  LO_ORDERDATE >= 19930101  AND LO_ORDERDATE <= 19931231 AND LO_DISCOUNT BETWEEN 1 AND 3  AND LO_QUANTITY < 25;\n--Q1.2\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE LO_ORDERDATE >= 19940101 AND LO_ORDERDATE <= 19940131  AND LO_DISCOUNT BETWEEN 4 AND 6 AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q1.3\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE  weekofyear(LO_ORDERDATE) = 6 AND LO_ORDERDATE >= 19940101  AND LO_ORDERDATE <= 19941231 AND LO_DISCOUNT BETWEEN 5 AND 7  AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q2.1\nSELECT SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR, P_BRAND\nFROM lineorder_flat WHERE P_CATEGORY = 'MFGR#12' AND S_REGION = 'AMERICA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.2\nSELECT  SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR, P_BRAND\nFROM lineorder_flat\nWHERE P_BRAND >= 'MFGR#2221' AND P_BRAND <= 'MFGR#2228'  AND S_REGION = 'ASIA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.3\nSELECT SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR, P_BRAND\nFROM lineorder_flat\nWHERE P_BRAND = 'MFGR#2239' AND S_REGION = 'EUROPE'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q3.1\nSELECT C_NATION, S_NATION, (LO_ORDERDATE DIV 10000) AS YEAR, SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_REGION = 'ASIA' AND S_REGION = 'ASIA' AND LO_ORDERDATE >= 19920101  AND LO_ORDERDATE <= 19971231\nGROUP BY C_NATION, S_NATION, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.2\nSELECT C_CITY, S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR, SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_NATION = 'UNITED STATES' AND S_NATION = 'UNITED STATES' AND LO_ORDERDATE >= 19920101 AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.3\nSELECT C_CITY, S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR, SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_CITY IN ('UNITED KI1', 'UNITED KI5') AND S_CITY IN ('UNITED KI1', 'UNITED KI5') AND LO_ORDERDATE >= 19920101 AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.4\nSELECT C_CITY, S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR, SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_CITY IN ('UNITED KI1', 'UNITED KI5') AND S_CITY IN ('UNITED KI1', 'UNITED KI5') AND LO_ORDERDATE >= 19971201  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q4.1\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR, C_NATION, SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE C_REGION = 'AMERICA' AND S_REGION = 'AMERICA' AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, C_NATION\nORDER BY YEAR ASC, C_NATION ASC;\n\n--Q4.2\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,S_NATION, P_CATEGORY, SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE C_REGION = 'AMERICA' AND S_REGION = 'AMERICA' AND LO_ORDERDATE >= 19970101 AND LO_ORDERDATE <= 19981231 AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, S_NATION, P_CATEGORY\nORDER BY YEAR ASC, S_NATION ASC, P_CATEGORY ASC;\n\n--Q4.3\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR, S_CITY, P_BRAND, SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE S_NATION = 'UNITED STATES' AND LO_ORDERDATE >= 19970101 AND LO_ORDERDATE <= 19981231 AND P_CATEGORY = 'MFGR#14'\nGROUP BY YEAR, S_CITY, P_BRAND\nORDER BY YEAR ASC, S_CITY ASC, P_BRAND ASC;\n")))}d.isMDXComponent=!0},14783:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ssb_v11_v015_compare-ad777ee879456fadf2a37b2070fb4dda.png"}}]);