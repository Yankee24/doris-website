"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[76620],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95310:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"MINI LOAD",language:"zh-CN"},o=void 0,s={unversionedId:"sql-reference/sql-statements/Data-Manipulation/MINI-LOAD",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/MINI-LOAD",title:"MINI LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/MINI-LOAD.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/MINI-LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/MINI-LOAD",draft:!1,tags:[],version:"0.15",frontMatter:{title:"MINI LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/LOAD"},next:{title:"MULTI LOAD",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/MULTI-LOAD"}},i={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mini-load"},"MINI LOAD"),(0,l.kt)("h2",{id:"description"},"description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MINI LOAD \u548c STREAM LOAD \u7684\u5bfc\u5165\u5b9e\u73b0\u65b9\u5f0f\u5b8c\u5168\u4e00\u81f4\u3002\u5728\u5bfc\u5165\u529f\u80fd\u652f\u6301\u4e0a\uff0cMINI LOAD \u7684\u529f\u80fd\u662f STREAM LOAD \u7684\u5b50\u96c6\u3002\n\u540e\u7eed\u7684\u5bfc\u5165\u65b0\u529f\u80fd\u53ea\u4f1a\u5728 STREAM LOAD \u4e2d\u652f\u6301\uff0cMINI LOAD \u5c06\u4e0d\u518d\u65b0\u589e\u529f\u80fd\u3002\u5efa\u8bae\u6539\u7528 STREAM LOAD\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u8bf7 HELP STREAM LOAD\u3002\n\nMINI LOAD \u662f \u901a\u8fc7 http \u534f\u8bae\u5b8c\u6210\u7684\u5bfc\u5165\u65b9\u5f0f\u3002\u7528\u6237\u53ef\u4ee5\u4e0d\u4f9d\u8d56 Hadoop\uff0c\u4e5f\u65e0\u9700\u901a\u8fc7 Mysql \u5ba2\u6237\u7aef\uff0c\u5373\u53ef\u5b8c\u6210\u5bfc\u5165\u3002\n\u7528\u6237\u901a\u8fc7 http \u534f\u8bae\u63cf\u8ff0\u5bfc\u5165\uff0c\u6570\u636e\u5728\u63a5\u53d7 http \u8bf7\u6c42\u7684\u8fc7\u7a0b\u4e2d\u88ab\u6d41\u5f0f\u7684\u5bfc\u5165 Doris , **\u5bfc\u5165\u4f5c\u4e1a\u5b8c\u6210\u540e** \u8fd4\u56de\u7ed9\u7528\u6237\u5bfc\u5165\u7684\u7ed3\u679c\u3002\n\n* \u6ce8\uff1a\u4e3a\u517c\u5bb9\u65e7\u7248\u672c mini load \u4f7f\u7528\u4e60\u60ef\uff0c\u7528\u6237\u4f9d\u65e7\u53ef\u4ee5\u901a\u8fc7 'SHOW LOAD' \u547d\u4ee4\u6765\u67e5\u770b\u5bfc\u5165\u7ed3\u679c\u3002\n\n\u8bed\u6cd5\uff1a\n\u5bfc\u5165\uff1a\n\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table}/_load?label=xxx\n\n\u67e5\u770b\u5bfc\u5165\u4fe1\u606f\n\n    curl -u user:passwd http://host:port/api/{db}/_load_info?label=xxx\n\nHTTP\u534f\u8bae\u76f8\u5173\u8bf4\u660e\n\n    \u6743\u9650\u8ba4\u8bc1            \u5f53\u524d Doris \u4f7f\u7528 http \u7684 Basic \u65b9\u5f0f\u6743\u9650\u8ba4\u8bc1\u3002\u6240\u4ee5\u5728\u5bfc\u5165\u7684\u65f6\u5019\u9700\u8981\u6307\u5b9a\u7528\u6237\u540d\u5bc6\u7801\n                        \u8fd9\u79cd\u65b9\u5f0f\u662f\u660e\u6587\u4f20\u9012\u5bc6\u7801\u7684\uff0c\u6682\u4e0d\u652f\u6301\u52a0\u5bc6\u4f20\u8f93\u3002\n\n    Expect              Doris \u9700\u8981\u53d1\u9001\u8fc7\u6765\u7684 http \u8bf7\u6c42\u5e26\u6709 'Expect' \u5934\u90e8\u4fe1\u606f\uff0c\u5185\u5bb9\u4e3a '100-continue'\u3002\n                        \u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u5c06\u8bf7\u6c42\u8fdb\u884c redirect\uff0c\u90a3\u4e48\u5fc5\u987b\u5728\u4f20\u8f93\u6570\u636e\u5185\u5bb9\u4e4b\u524d\uff0c\n                        \u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u9020\u6210\u6570\u636e\u7684\u591a\u6b21\u4f20\u8f93\uff0c\u4ece\u800c\u63d0\u9ad8\u6548\u7387\u3002\n\n    Content-Length      Doris \u9700\u8981\u5728\u53d1\u9001\u8bf7\u6c42\u65f6\u5e26\u6709 'Content-Length' \u8fd9\u4e2a\u5934\u90e8\u4fe1\u606f\u3002\u5982\u679c\u53d1\u9001\u7684\u5185\u5bb9\u6bd4\n                        'Content-Length' \u8981\u5c11\uff0c\u90a3\u4e48 Doris \u8ba4\u4e3a\u4f20\u8f93\u51fa\u73b0\u95ee\u9898\uff0c\u5219\u63d0\u4ea4\u6b64\u6b21\u4efb\u52a1\u5931\u8d25\u3002\n                        NOTE: \u5982\u679c\uff0c\u53d1\u9001\u7684\u6570\u636e\u6bd4 'Content-Length' \u8981\u591a\uff0c\u90a3\u4e48 Doris \u53ea\u8bfb\u53d6 'Content-Length'\n                        \u957f\u5ea6\u7684\u5185\u5bb9\uff0c\u5e76\u8fdb\u884c\u5bfc\u5165\n\n\n\u53c2\u6570\u8bf4\u660e\uff1a\n\n    user:               \u7528\u6237\u5982\u679c\u662f\u5728default_cluster\u4e2d\u7684\uff0cuser\u5373\u4e3auser_name\u3002\u5426\u5219\u4e3auser_name@cluster_name\u3002\n\n    label:              \u7528\u4e8e\u6307\u5b9a\u8fd9\u4e00\u6279\u6b21\u5bfc\u5165\u7684 label\uff0c\u7528\u4e8e\u540e\u671f\u8fdb\u884c\u4f5c\u4e1a\u67e5\u8be2\u7b49\u3002\n                        \u8fd9\u4e2a\u53c2\u6570\u662f\u5fc5\u987b\u4f20\u5165\u7684\u3002\n\n    columns:            \u7528\u4e8e\u63cf\u8ff0\u5bfc\u5165\u6587\u4ef6\u4e2d\u5bf9\u5e94\u7684\u5217\u540d\u5b57\u3002\n                        \u5982\u679c\u4e0d\u4f20\u5165\uff0c\u90a3\u4e48\u8ba4\u4e3a\u6587\u4ef6\u4e2d\u7684\u5217\u987a\u5e8f\u4e0e\u5efa\u8868\u7684\u987a\u5e8f\u4e00\u81f4\uff0c\n                        \u6307\u5b9a\u7684\u65b9\u5f0f\u4e3a\u9017\u53f7\u5206\u9694\uff0c\u4f8b\u5982\uff1acolumns=k1,k2,k3,k4\n\n    column_separator:   \u7528\u4e8e\u6307\u5b9a\u5217\u4e0e\u5217\u4e4b\u95f4\u7684\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u7684\u4e3a'\\t'\n                        NOTE: \u9700\u8981\u8fdb\u884curl\u7f16\u7801\uff0c\u8b6c\u5982\n                        \u9700\u8981\u6307\u5b9a'\\t'\u4e3a\u5206\u9694\u7b26\uff0c\u90a3\u4e48\u5e94\u8be5\u4f20\u5165'column_separator=%09'\n                        \u9700\u8981\u6307\u5b9a'\\x01'\u4e3a\u5206\u9694\u7b26\uff0c\u90a3\u4e48\u5e94\u8be5\u4f20\u5165'column_separator=%01'\n                        \u9700\u8981\u6307\u5b9a','\u4e3a\u5206\u9694\u7b26\uff0c\u90a3\u4e48\u5e94\u8be5\u4f20\u5165'column_separator=%2c'\n\n\n    max_filter_ratio:   \u7528\u4e8e\u6307\u5b9a\u5141\u8bb8\u8fc7\u6ee4\u4e0d\u89c4\u8303\u6570\u636e\u7684\u6700\u5927\u6bd4\u4f8b\uff0c\u9ed8\u8ba4\u662f0\uff0c\u4e0d\u5141\u8bb8\u8fc7\u6ee4\n                        \u81ea\u5b9a\u4e49\u6307\u5b9a\u5e94\u8be5\u5982\u4e0b\uff1a'max_filter_ratio=0.2'\uff0c\u542b\u4e49\u662f\u5141\u8bb820%\u7684\u9519\u8bef\u7387\n\n    timeout:            \u6307\u5b9a load \u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002\u5f53load\u6267\u884c\u65f6\u95f4\u8d85\u8fc7\u8be5\u9608\u503c\u65f6\uff0c\u4f1a\u81ea\u52a8\u53d6\u6d88\u3002\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u662f 600 \u79d2\u3002\n                        \u5efa\u8bae\u6307\u5b9a timeout \u65f6\u95f4\u5c0f\u4e8e 86400 \u79d2\u3002\n                        \n    hll:                \u7528\u4e8e\u6307\u5b9a\u6570\u636e\u91cc\u9762\u548c\u8868\u91cc\u9762\u7684HLL\u5217\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u8868\u4e2d\u7684\u5217\u548c\u6570\u636e\u91cc\u9762\u6307\u5b9a\u7684\u5217\n                        \uff08\u5982\u679c\u4e0d\u6307\u5b9acolumns\uff0c\u5219\u6570\u636e\u5217\u9762\u7684\u5217\u4e5f\u53ef\u4ee5\u662f\u8868\u91cc\u9762\u7684\u5176\u5b83\u975eHLL\u5217\uff09\u901a\u8fc7\",\"\u5206\u5272\n                        \u6307\u5b9a\u591a\u4e2ahll\u5217\u4f7f\u7528\u201c:\u201d\u5206\u5272\uff0c\u4f8b\u5982: 'hll1,cuid:hll2,device'\n\n    strict_mode:        \u6307\u5b9a\u5f53\u524d\u5bfc\u5165\u662f\u5426\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a false\u3002\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u975e\u7a7a\u539f\u59cb\u6570\u636e\u5728\u5217\u7c7b\u578b\u8f6c\u5316\u540e\u7ed3\u679c\u4e3a NULL \u7684\u4f1a\u88ab\u8fc7\u6ee4\u3002\n                        \u6307\u5b9a\u65b9\u5f0f\u4e3a 'strict_mode=true'\n\nNOTE: \n    1. \u6b64\u79cd\u5bfc\u5165\u65b9\u5f0f\u5f53\u524d\u662f\u5728\u4e00\u53f0\u673a\u5668\u4e0a\u5b8c\u6210\u5bfc\u5165\u5de5\u4f5c\uff0c\u56e0\u800c\u4e0d\u5b9c\u8fdb\u884c\u6570\u636e\u91cf\u8f83\u5927\u7684\u5bfc\u5165\u5de5\u4f5c\u3002\n    \u5efa\u8bae\u5bfc\u5165\u6570\u636e\u91cf\u4e0d\u8981\u8d85\u8fc7 1 GB\n\n    2. \u5f53\u524d\u65e0\u6cd5\u4f7f\u7528 `curl -T \"{file1, file2}\"` \u8fd9\u6837\u7684\u65b9\u5f0f\u63d0\u4ea4\u591a\u4e2a\u6587\u4ef6\uff0c\u56e0\u4e3acurl\u662f\u5c06\u5176\u62c6\u6210\u591a\u4e2a\n    \u8bf7\u6c42\u53d1\u9001\u7684\uff0c\u591a\u4e2a\u8bf7\u6c42\u4e0d\u80fd\u5171\u7528\u4e00\u4e2alabel\u53f7\uff0c\u6240\u4ee5\u65e0\u6cd5\u4f7f\u7528\n\n    3. mini load \u7684\u5bfc\u5165\u65b9\u5f0f\u548c streaming \u5b8c\u5168\u4e00\u81f4\uff0c\u90fd\u662f\u5728\u6d41\u5f0f\u7684\u5b8c\u6210\u5bfc\u5165\u540e\uff0c\u540c\u6b65\u7684\u8fd4\u56de\u7ed3\u679c\u7ed9\u7528\u6237\u3002\n    \u540e\u7eed\u67e5\u8be2\u867d\u53ef\u4ee5\u67e5\u5230 mini load \u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u80fd\u5bf9\u5176\u8fdb\u884c\u64cd\u4f5c\uff0c\u67e5\u8be2\u53ea\u4e3a\u517c\u5bb9\u65e7\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\n\n    4. \u5f53\u4f7f\u7528 curl \u547d\u4ee4\u884c\u5bfc\u5165\u65f6\uff0c\u9700\u8981\u5728 & \u524d\u52a0\u5165 \\ \u8f6c\u4e49\uff0c\u5426\u5219\u53c2\u6570\u4fe1\u606f\u4f1a\u4e22\u5931\u3002\n")),(0,l.kt)("h2",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. \u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\uff08\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684\uff09\n    curl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123\n\n2. \u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\uff08\u7528\u6237\u662ftest_cluster\u4e2d\u7684\uff09\u3002\u8d85\u65f6\u65f6\u95f4\u662f 3600 \u79d2\n    curl --location-trusted -u root@test_cluster:root -T testData http://fe.host:port/api/testDb/testTbl/_load?label=123\\&timeout=3600\n\n3. \u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868, \u5141\u8bb820%\u7684\u9519\u8bef\u7387\uff08\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684\uff09\n    curl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123\\&max_filter_ratio=0.2\n\n4. \u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868, \u5141\u8bb820%\u7684\u9519\u8bef\u7387\uff0c\u5e76\u4e14\u6307\u5b9a\u6587\u4ef6\u7684\u5217\u540d\uff08\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684\uff09\n    curl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123\\&max_filter_ratio=0.2\\&columns=k1,k2,k3\n\n5. \u4f7f\u7528streaming\u65b9\u5f0f\u5bfc\u5165\uff08\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684\uff09\n    seq 1 10 | awk '{OFS=\"\\t\"}{print $1, $1 * 10}' | curl --location-trusted -u root -T - http://host:port/api/testDb/testTbl/_load?label=123\n\n6. \u5bfc\u5165\u542b\u6709HLL\u5217\u7684\u8868\uff0c\u53ef\u4ee5\u662f\u8868\u4e2d\u7684\u5217\u6216\u8005\u6570\u636e\u4e2d\u7684\u5217\u7528\u4e8e\u751f\u6210HLL\u5217\uff08\u7528\u6237\u662fdefalut_cluster\u4e2d\u7684\n\n    curl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123\\&max_filter_ratio=0.2\n          \\&columns=k1,k2,k3\\&hll=hll_column1,k1:hll_column2,k2\n\n    curl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123\\&max_filter_ratio=0.2\n          \\&hll=hll_column1,tmp_k4:hll_column2,tmp_k5\\&columns=k1,k2,k3,tmp_k4,tmp_k5\n\n7. \u67e5\u770b\u63d0\u4ea4\u540e\u7684\u5bfc\u5165\u60c5\u51b5\n\n    curl -u root http://host:port/api/testDb/_load_info?label=123\n\n8. \u6307\u5b9a\u975e\u4e25\u683c\u6a21\u5f0f\u5bfc\u5165\n    curl --location-trusted -u root -T testData http://host:port/api/testDb/testTbl/_load?label=123\\&strict_mode=false\n")),(0,l.kt)("h2",{id:"keyword"},"keyword"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MINI, LOAD\n")))}p.isMDXComponent=!0}}]);