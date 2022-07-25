"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[16715],{3905:(e,n,t)=>{t.d(n,{Zo:()=>N,kt:()=>T});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),o=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},N=function(e){var n=o(e.components);return a.createElement(m.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},E=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,N=p(e,["components","mdxType","originalType","parentName"]),E=o(t),T=i,c=E["".concat(m,".").concat(T)]||E[T]||k[T]||r;return t?a.createElement(c,l(l({ref:n},N),{},{components:t})):a.createElement(c,l({ref:n},N))}));function T(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=E;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}E.displayName="MDXCreateElement"},57988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));const r={title:"CREATE-TABLE",language:"zh-CN"},l=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",title:"CREATE-TABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-TABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-TABLE-AS-SELECT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT"},next:{title:"CREATE-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW"}},m={},o=[{value:"CREATE-TABLE",id:"create-table",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3},{value:"<strong>1. \u5206\u533a\u548c\u5206\u6876</strong>",id:"1-\u5206\u533a\u548c\u5206\u6876",level:4},{value:"<strong>2. \u52a8\u6001\u5206\u533a</strong>",id:"2-\u52a8\u6001\u5206\u533a",level:4},{value:"<strong>3. \u7269\u5316\u89c6\u56fe</strong>",id:"3-\u7269\u5316\u89c6\u56fe",level:4},{value:"<strong>4. \u7d22\u5f15</strong>",id:"4-\u7d22\u5f15",level:4},{value:"<strong>5. in_memory \u5c5e\u6027</strong>",id:"5-in_memory-\u5c5e\u6027",level:4}],N={toc:o};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-table"},"CREATE-TABLE"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"\u8be5\u547d\u4ee4\u7528\u4e8e\u521b\u5efa\u4e00\u5f20\u8868\u3002\u672c\u6587\u6863\u4e3b\u8bed\u4ecb\u7ecd\u521b\u5efa Doris \u81ea\u7ef4\u62a4\u7684\u8868\u7684\u8bed\u6cd5\u3002\u5916\u90e8\u8868\u8bed\u6cd5\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE"},"CREATE-EXTERNAL-TABLE"),"\u6587\u6863\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [database.]table\n(\n    column_definition_list,\n    [index_definition_list]\n)\n[engine_type]\n[keys_type]\n[table_comment]\n[partition_info]\ndistribution_info\n[rollup_list]\n[properties]\n[extra_properties]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_definition_list")),(0,i.kt)("p",{parentName:"li"},"  \u5217\u5b9a\u4e49\u5217\u8868\uff1a"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"column_definition[, column_definition]")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_definition")),(0,i.kt)("p",{parentName:"li"},"  \u5217\u5b9a\u4e49\uff1a"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"column_name column_type [KEY] [aggr_type] [NULL] [default_value] [column_comment]")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"column_type")),(0,i.kt)("p",{parentName:"li"},"  \u5217\u7c7b\u578b\uff0c\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"TINYINT\uff081\u5b57\u8282\uff09\n    \u8303\u56f4\uff1a-2^7 + 1 ~ 2^7 - 1\nSMALLINT\uff082\u5b57\u8282\uff09\n    \u8303\u56f4\uff1a-2^15 + 1 ~ 2^15 - 1\nINT\uff084\u5b57\u8282\uff09\n    \u8303\u56f4\uff1a-2^31 + 1 ~ 2^31 - 1\nBIGINT\uff088\u5b57\u8282\uff09\n    \u8303\u56f4\uff1a-2^63 + 1 ~ 2^63 - 1\nLARGEINT\uff0816\u5b57\u8282\uff09\n    \u8303\u56f4\uff1a-2^127 + 1 ~ 2^127 - 1\nFLOAT\uff084\u5b57\u8282\uff09\n    \u652f\u6301\u79d1\u5b66\u8ba1\u6570\u6cd5\nDOUBLE\uff0812\u5b57\u8282\uff09\n    \u652f\u6301\u79d1\u5b66\u8ba1\u6570\u6cd5\nDECIMAL[(precision, scale)] (16\u5b57\u8282)\n    \u4fdd\u8bc1\u7cbe\u5ea6\u7684\u5c0f\u6570\u7c7b\u578b\u3002\u9ed8\u8ba4\u662f DECIMAL(10, 0)\n    precision: 1 ~ 27\n    scale: 0 ~ 9\n    \u5176\u4e2d\u6574\u6570\u90e8\u5206\u4e3a 1 ~ 18\n    \u4e0d\u652f\u6301\u79d1\u5b66\u8ba1\u6570\u6cd5\nDATE\uff083\u5b57\u8282\uff09\n    \u8303\u56f4\uff1a0000-01-01 ~ 9999-12-31\nDATETIME\uff088\u5b57\u8282\uff09\n    \u8303\u56f4\uff1a0000-01-01 00:00:00 ~ 9999-12-31 23:59:59\nCHAR[(length)]\n    \u5b9a\u957f\u5b57\u7b26\u4e32\u3002\u957f\u5ea6\u8303\u56f4\uff1a1 ~ 255\u3002\u9ed8\u8ba4\u4e3a1\nVARCHAR[(length)]\n    \u53d8\u957f\u5b57\u7b26\u4e32\u3002\u957f\u5ea6\u8303\u56f4\uff1a1 ~ 65533\u3002\u9ed8\u8ba4\u4e3a1\nHLL (1~16385\u4e2a\u5b57\u8282)\n    HyperLogLog \u5217\u7c7b\u578b\uff0c\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002\n    \u5fc5\u987b\u914d\u5408 HLL_UNION \u805a\u5408\u7c7b\u578b\u4f7f\u7528\u3002\nBITMAP\n    bitmap \u5217\u7c7b\u578b\uff0c\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u8868\u793a\u6574\u578b\u7684\u96c6\u5408\uff0c\u5143\u7d20\u6700\u5927\u652f\u6301\u52302^64 - 1\u3002\n    \u5fc5\u987b\u914d\u5408 BITMAP_UNION \u805a\u5408\u7c7b\u578b\u4f7f\u7528\u3002\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"aggr_type")),(0,i.kt)("p",{parentName:"li"},"  \u805a\u5408\u7c7b\u578b\uff0c\u652f\u6301\u4ee5\u4e0b\u805a\u5408\u7c7b\u578b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"SUM\uff1a\u6c42\u548c\u3002\u9002\u7528\u6570\u503c\u7c7b\u578b\u3002\nMIN\uff1a\u6c42\u6700\u5c0f\u503c\u3002\u9002\u5408\u6570\u503c\u7c7b\u578b\u3002\nMAX\uff1a\u6c42\u6700\u5927\u503c\u3002\u9002\u5408\u6570\u503c\u7c7b\u578b\u3002\nREPLACE\uff1a\u66ff\u6362\u3002\u5bf9\u4e8e\u7ef4\u5ea6\u5217\u76f8\u540c\u7684\u884c\uff0c\u6307\u6807\u5217\u4f1a\u6309\u7167\u5bfc\u5165\u7684\u5148\u540e\u987a\u5e8f\uff0c\u540e\u5012\u5165\u7684\u66ff\u6362\u5148\u5bfc\u5165\u7684\u3002\nREPLACE_IF_NOT_NULL\uff1a\u975e\u7a7a\u503c\u66ff\u6362\u3002\u548c REPLACE \u7684\u533a\u522b\u5728\u4e8e\u5bf9\u4e8enull\u503c\uff0c\u4e0d\u505a\u66ff\u6362\u3002\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u662f\u5b57\u6bb5\u9ed8\u8ba4\u503c\u8981\u7ed9NULL\uff0c\u800c\u4e0d\u80fd\u662f\u7a7a\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u662f\u7a7a\u5b57\u7b26\u4e32\uff0c\u4f1a\u7ed9\u4f60\u66ff\u6362\u6210\u7a7a\u5b57\u7b26\u4e32\u3002\nHLL_UNION\uff1aHLL \u7c7b\u578b\u7684\u5217\u7684\u805a\u5408\u65b9\u5f0f\uff0c\u901a\u8fc7 HyperLogLog \u7b97\u6cd5\u805a\u5408\u3002\nBITMAP_UNION\uff1aBIMTAP \u7c7b\u578b\u7684\u5217\u7684\u805a\u5408\u65b9\u5f0f\uff0c\u8fdb\u884c\u4f4d\u56fe\u7684\u5e76\u96c6\u805a\u5408\u3002\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default_value")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u5217\u9ed8\u8ba4\u503c\uff0c\u5f53\u5bfc\u5165\u6570\u636e\u672a\u6307\u5b9a\u8be5\u5217\u7684\u503c\u65f6\uff0c\u7cfb\u7edf\u5c06\u8d4b\u4e88\u8be5\u5217default_value\u3002\n\n\u8bed\u6cd5\u4e3a`default default_value`\u3002\n\n\u5f53\u524ddefault_value\u652f\u6301\u4e24\u79cd\u5f62\u5f0f\uff1a\n\n1. \u7528\u6237\u6307\u5b9a\u56fa\u5b9a\u503c\uff0c\u5982\uff1a\n\n```SQL\nk1 INT DEFAULT '1',\nk2 CHAR(10) DEFAULT 'aaaa'\n```\n2. \u7cfb\u7edf\u63d0\u4f9b\u7684\u5173\u952e\u5b57\uff0c\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5173\u952e\u5b57\uff1a\n\n```SQL\n// \u53ea\u7528\u4e8eDATETIME\u7c7b\u578b\uff0c\u5bfc\u5165\u6570\u636e\u7f3a\u5931\u8be5\u503c\u65f6\u7cfb\u7edf\u5c06\u8d4b\u4e88\u5f53\u524d\u65f6\u95f4\ndt DATETIME DEFAULT CURRENT_TIMESTAMP\n```\n")),(0,i.kt)("p",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},'k1 TINYINT,\nk2 DECIMAL(10,2) DEFAULT "10.5",\nk4 BIGINT NULL DEFAULT "1000" COMMENT "This is column k4",\nv1 VARCHAR(10) REPLACE NOT NULL,\nv2 BITMAP BITMAP_UNION,\nv3 HLL HLL_UNION,\nv4 INT SUM NOT NULL DEFAULT "1" COMMENT "This is column v4"\n'))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"index_definition_list")),(0,i.kt)("p",{parentName:"li"}," \u7d22\u5f15\u5217\u8868\u5b9a\u4e49\uff1a"),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("inlineCode",{parentName:"p"},"index_definition[, index_definition]")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"index_definition")),(0,i.kt)("p",{parentName:"li"},"  \u7d22\u5f15\u5b9a\u4e49\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INDEX index_name (col_name) [USING BITMAP] COMMENT 'xxxxxx'\n")),(0,i.kt)("p",{parentName:"li"},"  \u793a\u4f8b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'INDEX idx1 (k1) USING BITMAP COMMENT "This is a bitmap index1",\nINDEX idx2 (k2) USING BITMAP COMMENT "This is a bitmap index2",\n...\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"engine_type")),(0,i.kt)("p",{parentName:"li"},"  \u8868\u5f15\u64ce\u7c7b\u578b\u3002\u672c\u6587\u6863\u4e2d\u7c7b\u578b\u7686\u4e3a OLAP\u3002\u5176\u4ed6\u5916\u90e8\u8868\u5f15\u64ce\u7c7b\u578b\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE"},"CREATE EXTERNAL TABLE")," \u6587\u6863\u3002\u793a\u4f8b\uff1a"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"ENGINE=olap"),"\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"key_desc")),(0,i.kt)("p",{parentName:"li"},"  \u6570\u636e\u6a21\u578b\u3002"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"key_type(col1, col2, ...)")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"key_type")," \u652f\u6301\u4ee5\u4e0b\u6a21\u578b\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"DUPLICATE KEY\uff08\u9ed8\u8ba4\uff09\uff1a\u5176\u540e\u6307\u5b9a\u7684\u5217\u4e3a\u6392\u5e8f\u5217\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AGGREGATE KEY\uff1a\u5176\u540e\u6307\u5b9a\u7684\u5217\u4e3a\u7ef4\u5ea6\u5217\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UNIQUE KEY\uff1a\u5176\u540e\u6307\u5b9a\u7684\u5217\u4e3a\u4e3b\u952e\u5217\u3002"),(0,i.kt)("p",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"DUPLICATE KEY(col1, col2),\nAGGREGATE KEY(k1, k2, k3),\nUNIQUE KEY(k1, k2)\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table_comment")),(0,i.kt)("p",{parentName:"li"},"  \u8868\u6ce8\u91ca\u3002\u793a\u4f8b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'COMMENT "This is my first DORIS table"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"partition_desc")),(0,i.kt)("p",{parentName:"li"},"  \u5206\u533a\u4fe1\u606f\uff0c\u652f\u6301\u4e24\u79cd\u5199\u6cd5\uff1a"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"LESS THAN\uff1a\u4ec5\u5b9a\u4e49\u5206\u533a\u4e0a\u754c\u3002\u4e0b\u754c\u7531\u4e0a\u4e00\u4e2a\u5206\u533a\u7684\u4e0a\u754c\u51b3\u5b9a\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'PARTITION BY RANGE(col1[, col2, ...])\n(\n    PARTITION partition_name1 VALUES LESS THAN MAXVALUE|("value1", "value2", ...),\n    PARTITION partition_name2 VALUES LESS THAN MAXVALUE|("value1", "value2", ...)\n)\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"FIXED RANGE\uff1a\u5b9a\u4e49\u5206\u533a\u7684\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'PARTITION BY RANGE(col1[, col2, ...])\n(\n    PARTITION partition_name1 VALUES [("k1-lower1", "k2-lower1", "k3-lower1",...), ("k1-upper1", "k2-upper1", "k3-upper1", ...)),\n    PARTITION partition_name2 VALUES [("k1-lower1-2", "k2-lower1-2", ...), ("k1-upper1-2", MAXVALUE, ))\n)\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"distribution_desc")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hash \u5206\u6876 \u8bed\u6cd5\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]")," "),(0,i.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a \u4f7f\u7528\u6307\u5b9a\u7684 key \u5217\u8fdb\u884c\u54c8\u5e0c\u5206\u6876\u3002 ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Random \u5206\u6876 \u8bed\u6cd5\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"DISTRIBUTED BY RANDOM [BUCKETS num]")," "),(0,i.kt)("p",{parentName:"li"},"\u200b       \u8bf4\u660e\uff1a \u4f7f\u7528\u968f\u673a\u6570\u8fdb\u884c\u5206\u6876"),(0,i.kt)("p",{parentName:"li"},"\u5efa\u8bae: \u5f53\u6ca1\u6709\u5408\u9002\u7684key\u505a\u54c8\u5e0c\u5206\u6876\u4f7f\u5f97\u8868\u7684\u6570\u636e\u5747\u5300\u5206\u5e03\u7684\u65f6\u5019\uff0c\u5efa\u8bae\u4f7f\u7528RANDOM\u5206\u6876\u65b9\u5f0f\u3002")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rollup_list")),(0,i.kt)("p",{parentName:"li"},"  \u5efa\u8868\u7684\u540c\u65f6\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u7269\u5316\u89c6\u56fe\uff08ROLLUP\uff09\u3002"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLLUP (rollup_definition[, rollup_definition, ...])")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rollup_definition")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'rollup_name (col1[, col2, ...]) [DUPLICATE KEY(col1[, col2, ...])] [PROPERTIES("key" = "value")]')),(0,i.kt)("p",{parentName:"li"},"  \u793a\u4f8b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"ROLLUP (\n    r1 (k1, k3, v1, v2),\n    r2 (k1, v1)\n)\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"properties")),(0,i.kt)("p",{parentName:"li"},"  \u8bbe\u7f6e\u8868\u5c5e\u6027\u3002\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"replication_num")),(0,i.kt)("p",{parentName:"li"},"  \u526f\u672c\u6570\u3002\u9ed8\u8ba4\u526f\u672c\u6570\u4e3a3\u3002\u5982\u679c BE \u8282\u70b9\u6570\u91cf\u5c0f\u4e8e3\uff0c\u5219\u9700\u6307\u5b9a\u526f\u672c\u6570\u5c0f\u4e8e\u7b49\u4e8e BE \u8282\u70b9\u6570\u91cf\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u5728 0.15 \u7248\u672c\u540e\uff0c\u8be5\u5c5e\u6027\u5c06\u81ea\u52a8\u8f6c\u6362\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_allocation")," \u5c5e\u6027\uff0c\u5982\uff1a"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"replication_num" = "3"')," \u4f1a\u81ea\u52a8\u8f6c\u6362\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},'"replication_allocation" = "tag.location.default:3"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"replication_allocation")),(0,i.kt)("p",{parentName:"li"},"  \u6839\u636e Tag \u8bbe\u7f6e\u526f\u672c\u5206\u5e03\u60c5\u51b5\u3002\u8be5\u5c5e\u6027\u53ef\u4ee5\u5b8c\u5168\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_num")," \u5c5e\u6027\u7684\u529f\u80fd\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"storage_medium/storage_cooldown_time")),(0,i.kt)("p",{parentName:"li"},"  \u6570\u636e\u5b58\u50a8\u4ecb\u8d28\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"storage_medium")," \u7528\u4e8e\u58f0\u660e\u8868\u6570\u636e\u7684\u521d\u59cb\u5b58\u50a8\u4ecb\u8d28\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_cooldown_time")," \u7528\u4e8e\u8bbe\u5b9a\u5230\u671f\u65f6\u95f4\u3002\u793a\u4f8b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'"storage_medium" = "SSD",\n"storage_cooldown_time" = "2020-11-20 00:00:00"\n')),(0,i.kt)("p",{parentName:"li"},"  \u8fd9\u4e2a\u793a\u4f8b\u8868\u793a\u6570\u636e\u5b58\u653e\u5728 SSD \u4e2d\uff0c\u5e76\u4e14\u5728 2020-11-20 00:00:00 \u5230\u671f\u540e\uff0c\u4f1a\u81ea\u52a8\u8fc1\u79fb\u5230 HDD \u5b58\u50a8\u4e0a\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"colocate_with")),(0,i.kt)("p",{parentName:"li"},"  \u5f53\u9700\u8981\u4f7f\u7528 Colocation Join \u529f\u80fd\u65f6\uff0c\u4f7f\u7528\u8fd9\u4e2a\u53c2\u6570\u8bbe\u7f6e Colocation Group\u3002"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"colocate_with" = "group1"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bloom_filter_columns")),(0,i.kt)("p",{parentName:"li"},"  \u7528\u6237\u6307\u5b9a\u9700\u8981\u6dfb\u52a0 Bloom Filter \u7d22\u5f15\u7684\u5217\u540d\u79f0\u5217\u8868\u3002\u5404\u4e2a\u5217\u7684 Bloom Filter \u7d22\u5f15\u662f\u72ec\u7acb\u7684\uff0c\u5e76\u4e0d\u662f\u7ec4\u5408\u7d22\u5f15\u3002"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"bloom_filter_columns" = "k1, k2, k3"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"in_memory")," "),(0,i.kt)("p",{parentName:"li"},"  Doris \u662f\u6ca1\u6709\u5185\u5b58\u8868\u7684\u6982\u5ff5\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u8fd9\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", Doris \u4f1a\u5c3d\u91cf\u5c06\u8be5\u8868\u7684\u6570\u636e\u5757\u7f13\u5b58\u5728\u5b58\u50a8\u5f15\u64ce\u7684 PageCache \u4e2d\uff0c\u5df2\u51cf\u5c11\u78c1\u76d8IO\u3002\u4f46\u8fd9\u4e2a\u5c5e\u6027\u4e0d\u4f1a\u4fdd\u8bc1\u6570\u636e\u5757\u5e38\u9a7b\u5728\u5185\u5b58\u4e2d\uff0c\u4ec5\u4f5c\u4e3a\u4e00\u79cd\u5c3d\u529b\u800c\u4e3a\u7684\u6807\u8bc6\u3002"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},'"in_memory" = "true"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"compression")),(0,i.kt)("p",{parentName:"li"}," Doris \u8868\u7684\u9ed8\u8ba4\u538b\u7f29\u65b9\u5f0f\u662f LZ4\u30021.1\u7248\u672c\u540e\uff0c\u652f\u6301\u5c06\u538b\u7f29\u65b9\u5f0f\u6307\u5b9a\u4e3aZSTD\u4ee5\u83b7\u5f97\u66f4\u9ad8\u7684\u538b\u7f29\u6bd4\u3002"),(0,i.kt)("p",{parentName:"li"},' "compression"="zstd"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"function_column.sequence_type")),(0,i.kt)("p",{parentName:"li"},"  \u5f53\u4f7f\u7528 UNIQUE KEY \u6a21\u578b\u65f6\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2asequence\u5217\uff0c\u5f53KEY\u5217\u76f8\u540c\u65f6\uff0c\u5c06\u6309\u7167 sequence \u5217\u8fdb\u884c REPLACE(\u8f83\u5927\u503c\u66ff\u6362\u8f83\u5c0f\u503c\uff0c\u5426\u5219\u65e0\u6cd5\u66ff\u6362)"),(0,i.kt)("p",{parentName:"li"},"  \u8fd9\u91cc\u6211\u4eec\u4ec5\u9700\u6307\u5b9a\u987a\u5e8f\u5217\u7684\u7c7b\u578b\uff0c\u652f\u6301\u65f6\u95f4\u7c7b\u578b\u6216\u6574\u578b\u3002Doris \u4f1a\u521b\u5efa\u4e00\u4e2a\u9690\u85cf\u7684\u987a\u5e8f\u5217\u3002"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"\"function_column.sequence_type\" = 'Date'"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u52a8\u6001\u5206\u533a\u76f8\u5173"),(0,i.kt)("p",{parentName:"li"},"  \u52a8\u6001\u5206\u533a\u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.enable"),": \u7528\u4e8e\u6307\u5b9a\u8868\u7ea7\u522b\u7684\u52a8\u6001\u5206\u533a\u529f\u80fd\u662f\u5426\u5f00\u542f\u3002\u9ed8\u8ba4\u4e3a true\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.time_unit:")," \u7528\u4e8e\u6307\u5b9a\u52a8\u6001\u6dfb\u52a0\u5206\u533a\u7684\u65f6\u95f4\u5355\u4f4d\uff0c\u53ef\u9009\u62e9\u4e3aDAY\uff08\u5929\uff09\uff0cWEEK(\u5468)\uff0cMONTH\uff08\u6708\uff09\uff0cHOUR\uff08\u65f6\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.start"),": \u7528\u4e8e\u6307\u5b9a\u5411\u524d\u5220\u9664\u591a\u5c11\u4e2a\u5206\u533a\u3002\u503c\u5fc5\u987b\u5c0f\u4e8e0\u3002\u9ed8\u8ba4\u4e3a Integer.MIN_VALUE\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.end"),": \u7528\u4e8e\u6307\u5b9a\u63d0\u524d\u521b\u5efa\u7684\u5206\u533a\u6570\u91cf\u3002\u503c\u5fc5\u987b\u5927\u4e8e0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.prefix"),": \u7528\u4e8e\u6307\u5b9a\u521b\u5efa\u7684\u5206\u533a\u540d\u524d\u7f00\uff0c\u4f8b\u5982\u5206\u533a\u540d\u524d\u7f00\u4e3ap\uff0c\u5219\u81ea\u52a8\u521b\u5efa\u5206\u533a\u540d\u4e3ap20200108\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.buckets"),": \u7528\u4e8e\u6307\u5b9a\u81ea\u52a8\u521b\u5efa\u7684\u5206\u533a\u5206\u6876\u6570\u91cf\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.create_history_partition"),": \u662f\u5426\u521b\u5efa\u5386\u53f2\u5206\u533a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.history_partition_num"),": \u6307\u5b9a\u521b\u5efa\u5386\u53f2\u5206\u533a\u7684\u6570\u91cf\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_partition.reserved_history_periods"),": \u7528\u4e8e\u6307\u5b9a\u4fdd\u7559\u7684\u5386\u53f2\u5206\u533a\u7684\u65f6\u95f4\u6bb5\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6570\u636e\u6392\u5e8f\u76f8\u5173"),(0,i.kt)("p",{parentName:"li"},"  \u6570\u636e\u6392\u5e8f\u76f8\u5173\u53c2\u6570\u5982\u4e0b:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_sort.sort_type"),": \u6570\u636e\u6392\u5e8f\u4f7f\u7528\u7684\u65b9\u6cd5\uff0c\u76ee\u524d\u652f\u6301\u4e24\u79cd\uff1alexical/z-order\uff0c\u9ed8\u8ba4\u662flexical"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_sort.col_num"),": \u6570\u636e\u6392\u5e8f\u4f7f\u7528\u7684\u5217\u6570\uff0c\u53d6\u6700\u524d\u9762\u51e0\u5217\uff0c\u4e0d\u80fd\u8d85\u8fc7\u603b\u7684key \u5217\u6570")))))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u660e\u7ec6\u6a21\u578b\u7684\u8868"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    k3 CHAR(10) COMMENT "string column",\n    k4 INT NOT NULL DEFAULT "1" COMMENT "int column"\n)\nCOMMENT "my first table"\nDISTRIBUTED BY HASH(k1) BUCKETS 32\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u660e\u7ec6\u6a21\u578b\u7684\u8868\uff0c\u5206\u533a\uff0c\u6307\u5b9a\u6392\u5e8f\u5217\uff0c\u8bbe\u7f6e\u526f\u672c\u6570\u4e3a1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n    k1 DATE,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    k3 CHAR(10) COMMENT "string column",\n    k4 INT NOT NULL DEFAULT "1" COMMENT "int column"\n)\nDUPLICATE KEY(k1, k2)\nCOMMENT "my first table"\nPARTITION BY RANGE(k1)\n(\n    PARTITION p1 VALUES LESS THAN ("2020-02-01"),\n    PARTITION p1 VALUES LESS THAN ("2020-03-01"),\n    PARTITION p1 VALUES LESS THAN ("2020-04-01")\n)\nDISTRIBUTED BY HASH(k1) BUCKETS 32\nPROPERTIES (\n    "replication_num" = "1"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4e3b\u952e\u552f\u4e00\u6a21\u578b\u7684\u8868\uff0c\u8bbe\u7f6e\u521d\u59cb\u5b58\u50a8\u4ecb\u8d28\u548c\u51b7\u5374\u65f6\u95f4"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048),\n    v2 SMALLINT DEFAULT "10"\n)\nUNIQUE KEY(k1, k2)\nDISTRIBUTED BY HASH (k1, k2) BUCKETS 32\nPROPERTIES(\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2015-06-04 00:00:00"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u805a\u5408\u6a21\u578b\u8868\uff0c\u4f7f\u7528\u56fa\u5b9a\u8303\u56f4\u5206\u533a\u63cf\u8ff0"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE table_range\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048) REPLACE,\n    v2 INT SUM DEFAULT "1"\n)\nAGGREGATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1, k2, k3)\n(\n    PARTITION p1 VALUES [("2014-01-01", "10", "200"), ("2014-01-01", "20", "300")),\n    PARTITION p2 VALUES [("2014-06-01", "100", "200"), ("2014-07-01", "100", "300"))\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 32\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5305\u542b HLL \u548c BITMAP \u5217\u7c7b\u578b\u7684\u805a\u5408\u6a21\u578b\u8868"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.example_table\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 HLL HLL_UNION,\n    v2 BITMAP BITMAP_UNION\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1) BUCKETS 32\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e24\u5f20\u540c\u4e00\u4e2a Colocation Group \u81ea\u7ef4\u62a4\u7684\u8868\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE t1 (\n    id int(11) COMMENT "",\n    value varchar(8) COMMENT ""\n)\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 10\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n\nCREATE TABLE t2 (\n    id int(11) COMMENT "",\n    value1 varchar(8) COMMENT "",\n    value2 varchar(8) COMMENT ""\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5e26\u6709 bitmap \u7d22\u5f15\u4ee5\u53ca bloom filter \u7d22\u5f15\u7684\u5185\u5b58\u8868"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM,\n    INDEX k1_idx (k1) USING BITMAP COMMENT \'my first index\'\n)\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1) BUCKETS 32\nPROPERTIES (\n    "bloom_filter_columns" = "k2",\n    "in_memory" = "true"\n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u52a8\u6001\u5206\u533a\u8868\u3002"),(0,i.kt)("p",{parentName:"li"},"\u8be5\u8868\u6bcf\u5929\u63d0\u524d\u521b\u5efa3\u5929\u7684\u5206\u533a\uff0c\u5e76\u5220\u96643\u5929\u524d\u7684\u5206\u533a\u3002\u4f8b\u5982\u4eca\u5929\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"2020-01-08"),"\uff0c\u5219\u4f1a\u521b\u5efa\u5206\u533a\u540d\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"p20200108"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p20200109"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p20200110"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"p20200111"),"\u7684\u5206\u533a. \u5206\u533a\u8303\u56f4\u5206\u522b\u4e3a:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"[types: [DATE]; keys: [2020-01-08]; \u2025types: [DATE]; keys: [2020-01-09]; )\n[types: [DATE]; keys: [2020-01-09]; \u2025types: [DATE]; keys: [2020-01-10]; )\n[types: [DATE]; keys: [2020-01-10]; \u2025types: [DATE]; keys: [2020-01-11]; )\n[types: [DATE]; keys: [2020-01-11]; \u2025types: [DATE]; keys: [2020-01-12]; )\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.dynamic_partition\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1) ()\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-3",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32" \n);\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u7269\u5316\u89c6\u56fe\uff08ROLLUP\uff09\u7684\u8868\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example_db.rolup_index_table\n(\n    event_day DATE,\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_day, siteid, citycode, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nROLLUP (\n    r1(event_day,siteid),\n    r2(event_day,citycode),\n    r3(event_day)\n)\nPROPERTIES(\"replication_num\" = \"3\");\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_allocation")," \u5c5e\u6027\u8bbe\u7f6e\u8868\u7684\u526f\u672c\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE example_db.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5"\n)\nDISTRIBUTED BY HASH(k1) BUCKETS 32\nPROPERTIES (\n    "replication_allocation"="tag.location.group_a:1, tag.location.group_b:2"\n);\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CREATE TABLE example_db.dynamic_partition\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nPARTITION BY RANGE (k1) ()\nDISTRIBUTED BY HASH(k2) BUCKETS 32\nPROPERTIES(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-3",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32",\n    "dynamic_partition."replication_allocation" = "tag.location.group_a:3"\n );\n```\n')),(0,i.kt)("h3",{id:"keywords"},"Keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE, TABLE\n")),(0,i.kt)("h3",{id:"best-practice"},"Best Practice"),(0,i.kt)("h4",{id:"1-\u5206\u533a\u548c\u5206\u6876"},(0,i.kt)("strong",{parentName:"h4"},"1. \u5206\u533a\u548c\u5206\u6876")),(0,i.kt)("p",null,"\u4e00\u4e2a\u8868\u5fc5\u987b\u6307\u5b9a\u5206\u6876\u5217\uff0c\u4f46\u53ef\u4ee5\u4e0d\u6307\u5b9a\u5206\u533a\u3002\u5173\u4e8e\u5206\u533a\u548c\u5206\u6876\u7684\u5177\u4f53\u4ecb\u7ecd\uff0c\u53ef\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/data-table/data-partition"},"\u6570\u636e\u5212\u5206")," \u6587\u6863\u3002"),(0,i.kt)("p",null,"Doris \u4e2d\u7684\u8868\u53ef\u4ee5\u5206\u4e3a\u5206\u533a\u8868\u548c\u65e0\u5206\u533a\u7684\u8868\u3002\u8fd9\u4e2a\u5c5e\u6027\u5728\u5efa\u8868\u65f6\u786e\u5b9a\uff0c\u4e4b\u540e\u4e0d\u53ef\u66f4\u6539\u3002\u5373\u5bf9\u4e8e\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u5728\u4e4b\u540e\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5bf9\u5206\u533a\u8fdb\u884c\u589e\u5220\u64cd\u4f5c\uff0c\u800c\u5bf9\u4e8e\u65e0\u5206\u533a\u7684\u8868\uff0c\u4e4b\u540e\u4e0d\u80fd\u518d\u8fdb\u884c\u589e\u52a0\u5206\u533a\u7b49\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u5206\u533a\u5217\u548c\u5206\u6876\u5217\u5728\u8868\u521b\u5efa\u4e4b\u540e\u4e0d\u53ef\u66f4\u6539\uff0c\u65e2\u4e0d\u80fd\u66f4\u6539\u5206\u533a\u548c\u5206\u6876\u5217\u7684\u7c7b\u578b\uff0c\u4e5f\u4e0d\u80fd\u5bf9\u8fd9\u4e9b\u5217\u8fdb\u884c\u4efb\u4f55\u589e\u5220\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u5efa\u8bae\u5728\u5efa\u8868\u524d\uff0c\u5148\u786e\u8ba4\u4f7f\u7528\u65b9\u5f0f\u6765\u8fdb\u884c\u5408\u7406\u7684\u5efa\u8868\u3002"),(0,i.kt)("h4",{id:"2-\u52a8\u6001\u5206\u533a"},(0,i.kt)("strong",{parentName:"h4"},"2. \u52a8\u6001\u5206\u533a")),(0,i.kt)("p",null,"\u52a8\u6001\u5206\u533a\u529f\u80fd\u4e3b\u8981\u7528\u4e8e\u5e2e\u52a9\u7528\u6237\u81ea\u52a8\u7684\u7ba1\u7406\u5206\u533a\u3002\u901a\u8fc7\u8bbe\u5b9a\u4e00\u5b9a\u7684\u89c4\u5219\uff0cDoris \u7cfb\u7edf\u5b9a\u671f\u589e\u52a0\u65b0\u7684\u5206\u533a\u6216\u5220\u9664\u5386\u53f2\u5206\u533a\u3002\u53ef\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/advanced/partition/dynamic-partition"},"\u52a8\u6001\u5206\u533a")," \u6587\u6863\u67e5\u770b\u66f4\u591a\u5e2e\u52a9\u3002"),(0,i.kt)("h4",{id:"3-\u7269\u5316\u89c6\u56fe"},(0,i.kt)("strong",{parentName:"h4"},"3. \u7269\u5316\u89c6\u56fe")),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u5efa\u8868\u7684\u540c\u65f6\u521b\u5efa\u591a\u4e2a\u7269\u5316\u89c6\u56fe\uff08ROLLUP\uff09\u3002\u7269\u5316\u89c6\u56fe\u4e5f\u53ef\u4ee5\u5728\u5efa\u8868\u4e4b\u540e\u6dfb\u52a0\u3002\u5199\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\u53ef\u4ee5\u65b9\u4fbf\u7528\u6237\u4e00\u6b21\u6027\u521b\u5efa\u6240\u6709\u7269\u5316\u89c6\u56fe\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5728\u5efa\u8868\u65f6\u521b\u5efa\u597d\u7269\u5316\u89c6\u56fe\uff0c\u5219\u540e\u7eed\u7684\u6240\u6709\u6570\u636e\u5bfc\u5165\u64cd\u4f5c\u90fd\u4f1a\u540c\u6b65\u751f\u6210\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u3002\u7269\u5316\u89c6\u56fe\u7684\u6570\u91cf\u53ef\u80fd\u4f1a\u5f71\u54cd\u6570\u636e\u5bfc\u5165\u7684\u6548\u7387\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5728\u4e4b\u540e\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u6dfb\u52a0\u7269\u5316\u89c6\u56fe\uff0c\u5982\u679c\u8868\u4e2d\u5df2\u6709\u6570\u636e\uff0c\u5219\u7269\u5316\u89c6\u56fe\u7684\u521b\u5efa\u65f6\u95f4\u53d6\u51b3\u4e8e\u5f53\u524d\u6570\u636e\u91cf\u5927\u5c0f\u3002"),(0,i.kt)("p",null,"\u5173\u4e8e\u7269\u5316\u89c6\u56fe\u7684\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u9605\u6587\u6863 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/advanced/materialized-view"},"\u7269\u5316\u89c6\u56fe"),"\u3002"),(0,i.kt)("h4",{id:"4-\u7d22\u5f15"},(0,i.kt)("strong",{parentName:"h4"},"4. \u7d22\u5f15")),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u5efa\u8868\u7684\u540c\u65f6\u521b\u5efa\u591a\u4e2a\u5217\u7684\u7d22\u5f15\u3002\u7d22\u5f15\u4e5f\u53ef\u4ee5\u5728\u5efa\u8868\u4e4b\u540e\u518d\u6dfb\u52a0\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5728\u4e4b\u540e\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u6dfb\u52a0\u7d22\u5f15\uff0c\u5982\u679c\u8868\u4e2d\u5df2\u6709\u6570\u636e\uff0c\u5219\u9700\u8981\u91cd\u5199\u6240\u6709\u6570\u636e\uff0c\u56e0\u6b64\u7d22\u5f15\u7684\u521b\u5efa\u65f6\u95f4\u53d6\u51b3\u4e8e\u5f53\u524d\u6570\u636e\u91cf\u3002"),(0,i.kt)("h4",{id:"5-in_memory-\u5c5e\u6027"},(0,i.kt)("strong",{parentName:"h4"},"5. in_memory \u5c5e\u6027")),(0,i.kt)("p",null,"\u5f53\u5efa\u8868\u65f6\u6307\u5b9a\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},'"in_memory" = "true"')," \u5c5e\u6027\u3002\u5219 Doris \u4f1a\u5c3d\u91cf\u5c06\u8be5\u8868\u7684\u6570\u636e\u5757\u7f13\u5b58\u5728\u5b58\u50a8\u5f15\u64ce\u7684 PageCache \u4e2d\uff0c\u5df2\u51cf\u5c11\u78c1\u76d8IO\u3002\u4f46\u8fd9\u4e2a\u5c5e\u6027\u4e0d\u4f1a\u4fdd\u8bc1\u6570\u636e\u5757\u5e38\u9a7b\u5728\u5185\u5b58\u4e2d\uff0c\u4ec5\u4f5c\u4e3a\u4e00\u79cd\u5c3d\u529b\u800c\u4e3a\u7684\u6807\u8bc6\u3002"))}k.isMDXComponent=!0}}]);