"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[87041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),N=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=N(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=N(n),s=r,d=c["".concat(o,".").concat(s)]||c[s]||u[s]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var N=2;N<l;N++)i[N]=n[N];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>N});var a=n(87462),r=(n(67294),n(3905));const l={title:"CREATE-FUNCTION",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",title:"CREATE-FUNCTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FUNCTION",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-FUNCTION",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-FILE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"},next:{title:"CREATE-INDEX",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"}},o={},N=[{value:"CREATE-FUNCTION",id:"create-function",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:N};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-function"},"CREATE-FUNCTION"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE FUNCTION"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u6b64\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u3002\u6267\u884c\u6b64\u547d\u4ee4\u9700\u8981\u7528\u6237\u62e5\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN")," \u6743\u9650\u3002"),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"function_name")," \u4e2d\u5305\u542b\u4e86\u6570\u636e\u5e93\u540d\u5b57\uff0c\u90a3\u4e48\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u4f1a\u521b\u5efa\u5728\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u5426\u5219\u8fd9\u4e2a\u51fd\u6570\u5c06\u4f1a\u521b\u5efa\u5728\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u7684\u6570\u636e\u5e93\u3002\u65b0\u51fd\u6570\u7684\u540d\u5b57\u4e0e\u53c2\u6570\u4e0d\u80fd\u591f\u4e0e\u5f53\u524d\u547d\u540d\u7a7a\u95f4\u4e2d\u5df2\u5b58\u5728\u7684\u51fd\u6570\u76f8\u540c\uff0c\u5426\u5219\u4f1a\u521b\u5efa\u5931\u8d25\u3002\u4f46\u662f\u53ea\u6709\u540d\u5b57\u76f8\u540c\uff0c\u53c2\u6570\u4e0d\u540c\u662f\u80fd\u591f\u521b\u5efa\u6210\u529f\u7684\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE [AGGREGATE] [ALIAS] FUNCTION function_name\n    (arg_type [, ...])\n    [RETURNS ret_type]\n    [INTERMEDIATE inter_type]\n    [WITH PARAMETER(param [,...]) AS origin_function]\n    [PROPERTIES ("key" = "value" [, ...]) ]\n')),(0,r.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AGGREGATE"),": \u5982\u679c\u6709\u6b64\u9879\uff0c\u8868\u793a\u7684\u662f\u521b\u5efa\u7684\u51fd\u6570\u662f\u4e00\u4e2a\u805a\u5408\u51fd\u6570\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALIAS"),"\uff1a\u5982\u679c\u6709\u6b64\u9879\uff0c\u8868\u793a\u7684\u662f\u521b\u5efa\u7684\u51fd\u6570\u662f\u4e00\u4e2a\u522b\u540d\u51fd\u6570\u3002")),(0,r.kt)("p",null," \t\t\u5982\u679c\u6ca1\u6709\u4e0a\u8ff0\u4e24\u9879\uff0c\u8868\u793a\u521b\u5efa\u7684\u51fd\u6570\u662f\u4e00\u4e2a\u6807\u91cf\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function_name"),": \u8981\u521b\u5efa\u51fd\u6570\u7684\u540d\u5b57, \u53ef\u4ee5\u5305\u542b\u6570\u636e\u5e93\u7684\u540d\u5b57\u3002\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"db1.my_func"),"\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"arg_type"),": \u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u4e0e\u5efa\u8868\u65f6\u5b9a\u4e49\u7684\u7c7b\u578b\u4e00\u81f4\u3002\u53d8\u957f\u53c2\u6570\u65f6\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},", ..."),"\u6765\u8868\u793a\uff0c\u5982\u679c\u662f\u53d8\u957f\u7c7b\u578b\uff0c\u90a3\u4e48\u53d8\u957f\u90e8\u5206\u53c2\u6570\u7684\u7c7b\u578b\u4e0e\u6700\u540e\u4e00\u4e2a\u975e\u53d8\u957f\u53c2\u6570\u7c7b\u578b\u4e00\u81f4\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"ALIAS FUNCTION")," \u4e0d\u652f\u6301\u53d8\u957f\u53c2\u6570\uff0c\u4e14\u81f3\u5c11\u6709\u4e00\u4e2a\u53c2\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ret_type"),": \u5bf9\u521b\u5efa\u65b0\u7684\u51fd\u6570\u6765\u8bf4\uff0c\u662f\u5fc5\u586b\u9879\u3002\u5982\u679c\u662f\u7ed9\u5df2\u6709\u51fd\u6570\u53d6\u522b\u540d\u5219\u53ef\u4e0d\u7528\u586b\u5199\u8be5\u53c2\u6570\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inter_type"),": \u7528\u4e8e\u8868\u793a\u805a\u5408\u51fd\u6570\u4e2d\u95f4\u9636\u6bb5\u7684\u6570\u636e\u7c7b\u578b\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"param"),"\uff1a\u7528\u4e8e\u8868\u793a\u522b\u540d\u51fd\u6570\u7684\u53c2\u6570\uff0c\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"origin_function"),"\uff1a\u7528\u4e8e\u8868\u793a\u522b\u540d\u51fd\u6570\u5bf9\u5e94\u7684\u539f\u59cb\u51fd\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"properties"),": \u7528\u4e8e\u8bbe\u5b9a\u805a\u5408\u51fd\u6570\u548c\u6807\u91cf\u51fd\u6570\u76f8\u5173\u5c5e\u6027\uff0c\u80fd\u591f\u8bbe\u7f6e\u7684\u5c5e\u6027\u5305\u62ec\uff1a\t"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"object_file"),": \u81ea\u5b9a\u4e49\u51fd\u6570\u52a8\u6001\u5e93\u7684URL\u8def\u5f84\uff0c\u5f53\u524d\u53ea\u652f\u6301 HTTP/HTTPS \u534f\u8bae\uff0c\u6b64\u8def\u5f84\u9700\u8981\u5728\u51fd\u6570\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u4fdd\u6301\u6709\u6548\u3002\u6b64\u9009\u9879\u4e3a\u5fc5\u9009\u9879")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),": \u6807\u91cf\u51fd\u6570\u7684\u51fd\u6570\u7b7e\u540d\uff0c\u7528\u4e8e\u4ece\u52a8\u6001\u5e93\u91cc\u9762\u627e\u5230\u51fd\u6570\u5165\u53e3\u3002\u6b64\u9009\u9879\u5bf9\u4e8e\u6807\u91cf\u51fd\u6570\u662f\u5fc5\u9009\u9879")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"init_fn"),": \u805a\u5408\u51fd\u6570\u7684\u521d\u59cb\u5316\u51fd\u6570\u7b7e\u540d\u3002\u5bf9\u4e8e\u805a\u5408\u51fd\u6570\u662f\u5fc5\u9009\u9879")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"update_fn"),": \u805a\u5408\u51fd\u6570\u7684\u66f4\u65b0\u51fd\u6570\u7b7e\u540d\u3002\u5bf9\u4e8e\u805a\u5408\u51fd\u6570\u662f\u5fc5\u9009\u9879")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"merge_fn"),": \u805a\u5408\u51fd\u6570\u7684\u5408\u5e76\u51fd\u6570\u7b7e\u540d\u3002\u5bf9\u4e8e\u805a\u5408\u51fd\u6570\u662f\u5fc5\u9009\u9879")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"serialize_fn"),": \u805a\u5408\u51fd\u6570\u7684\u5e8f\u5217\u5316\u51fd\u6570\u7b7e\u540d\u3002\u5bf9\u4e8e\u805a\u5408\u51fd\u6570\u662f\u53ef\u9009\u9879\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u90a3\u4e48\u5c06\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u5e8f\u5217\u5316\u51fd\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"finalize_fn"),": \u805a\u5408\u51fd\u6570\u83b7\u53d6\u6700\u540e\u7ed3\u679c\u7684\u51fd\u6570\u7b7e\u540d\u3002\u5bf9\u4e8e\u805a\u5408\u51fd\u6570\u662f\u53ef\u9009\u9879\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5c06\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u83b7\u53d6\u7ed3\u679c\u51fd\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"md5"),": \u51fd\u6570\u52a8\u6001\u94fe\u63a5\u5e93\u7684MD5\u503c\uff0c\u7528\u4e8e\u6821\u9a8c\u4e0b\u8f7d\u7684\u5185\u5bb9\u662f\u5426\u6b63\u786e\u3002\u6b64\u9009\u9879\u662f\u53ef\u9009\u9879")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"prepare_fn"),": \u81ea\u5b9a\u4e49\u51fd\u6570\u7684prepare\u51fd\u6570\u7684\u51fd\u6570\u7b7e\u540d\uff0c\u7528\u4e8e\u4ece\u52a8\u6001\u5e93\u91cc\u9762\u627e\u5230prepare\u51fd\u6570\u5165\u53e3\u3002\u6b64\u9009\u9879\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u51fd\u6570\u662f\u53ef\u9009\u9879")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"close_fn"),": \u81ea\u5b9a\u4e49\u51fd\u6570\u7684close\u51fd\u6570\u7684\u51fd\u6570\u7b7e\u540d\uff0c\u7528\u4e8e\u4ece\u52a8\u6001\u5e93\u91cc\u9762\u627e\u5230close\u51fd\u6570\u5165\u53e3\u3002\u6b64\u9009\u9879\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u51fd\u6570\u662f\u53ef\u9009\u9879     "))))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6807\u91cf\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n    "symbol" = "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n    "object_file" = "http://host:port/libmyadd.so"\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u6709prepare/close\u51fd\u6570\u7684\u81ea\u5b9a\u4e49\u6807\u91cf\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n    "symbol" = "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n    "prepare_fn" =  "_ZN9doris_udf14AddUdf_prepareEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n    "close_fn" = "_ZN9doris_udf12AddUdf_closeEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n    "object_file" = "http://host:port/libmyadd.so"\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u805a\u5408\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION my_count (BIGINT) RETURNS BIGINT PROPERTIES (\n        "init_fn"="_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE",\n        "update_fn"="_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE",\n        "merge_fn"="_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_",\n        "finalize_fn"="_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE",\n        "object_file"="http://host:port/libudasample.so"\n);\n')))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u53d8\u957f\u53c2\u6570\u7684\u6807\u91cf\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION strconcat(varchar, ...) RETURNS varchar properties (\n    "symbol" = "_ZN9doris_udf6StrConcatUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n    "object_file" = "http://host:port/libmyStrConcat.so"\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u522b\u540d\u51fd\u6570"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id)  AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, FUNCTION\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);