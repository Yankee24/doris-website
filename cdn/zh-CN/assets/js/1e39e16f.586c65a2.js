"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[16304],{3905:(t,e,a)=>{a.d(e,{Zo:()=>N,kt:()=>o});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),i=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},N=function(t){var e=i(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,N=k(t,["components","mdxType","originalType","parentName"]),d=i(a),o=l,g=d["".concat(m,".").concat(o)]||d[o]||u[o]||r;return a?n.createElement(g,p(p({ref:e},N),{},{components:a})):n.createElement(g,p({ref:e},N))}));function o(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=d;var k={};for(var m in e)hasOwnProperty.call(e,m)&&(k[m]=e[m]);k.originalType=t,k.mdxType="string"==typeof t?t:l,p[1]=k;for(var i=2;i<r;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10335:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>k,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u5bfc\u5165\u7684\u6570\u636e\u8f6c\u6362\u3001\u5217\u6620\u5c04\u53ca\u8fc7\u6ee4",language:"zh-CN"},p=void 0,k={unversionedId:"data-operate/import/import-scenes/load-data-convert",id:"data-operate/import/import-scenes/load-data-convert",title:"\u5bfc\u5165\u7684\u6570\u636e\u8f6c\u6362\u3001\u5217\u6620\u5c04\u53ca\u8fc7\u6ee4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/import-scenes/load-data-convert.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/load-data-convert",permalink:"/zh-CN/docs/data-operate/import/import-scenes/load-data-convert",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5bfc\u5165\u7684\u6570\u636e\u8f6c\u6362\u3001\u5217\u6620\u5c04\u53ca\u8fc7\u6ee4",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u5bfc\u5165\u4e8b\u52a1\u53ca\u539f\u5b50\u6027",permalink:"/zh-CN/docs/data-operate/import/import-scenes/load-atomicity"},next:{title:"\u5bfc\u5165\u4e25\u683c\u6a21\u5f0f",permalink:"/zh-CN/docs/data-operate/import/import-scenes/load-strict-mode"}},m={},i=[{value:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f",id:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f",level:2},{value:"\u5217\u6620\u5c04",id:"\u5217\u6620\u5c04",level:2},{value:"\u5217\u524d\u7f6e\u8fc7\u6ee4",id:"\u5217\u524d\u7f6e\u8fc7\u6ee4",level:2},{value:"\u5217\u8f6c\u6362",id:"\u5217\u8f6c\u6362",level:2},{value:"\u5217\u8fc7\u6ee4",id:"\u5217\u8fc7\u6ee4",level:2},{value:"\u6570\u636e\u8d28\u91cf\u95ee\u9898\u548c\u8fc7\u6ee4\u9608\u503c",id:"\u6570\u636e\u8d28\u91cf\u95ee\u9898\u548c\u8fc7\u6ee4\u9608\u503c",level:3}],N={toc:i};function u(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5bfc\u5165\u7684\u6570\u636e\u8f6c\u6362\u5217\u6620\u5c04\u53ca\u8fc7\u6ee4"},"\u5bfc\u5165\u7684\u6570\u636e\u8f6c\u6362\u3001\u5217\u6620\u5c04\u53ca\u8fc7\u6ee4"),(0,l.kt)("h2",{id:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f"},"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"BROKER LOAD")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://bucket/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, tmpk3)\n    PRECEDING FILTER k1 = 1\n    SET (\n        k3 = tmpk3 + 1\n    )\n    WHERE k1 > k2\n)\nWITH BROKER bos\n(\n    ...\n);\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"STREAM LOAD")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl\n--location-trusted\n-u user:passwd\n-H "columns: k1, k2, tmpk3, k3 = tmpk3 + 1"\n-H "where: k1 > k2"\n-T file.txt\nhttp://host:port/api/testDb/testTbl/_stream_load\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROUTINE LOAD example_db.label1 ON my_table\nCOLUMNS(k1, k2, tmpk3, k3 = tmpk3 + 1),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > k2\n...\n")))),(0,l.kt)("p",null,"\u4ee5\u4e0a\u5bfc\u5165\u65b9\u5f0f\u90fd\u652f\u6301\u5bf9\u6e90\u6570\u636e\u8fdb\u884c\u5217\u6620\u5c04\u3001\u8f6c\u6362\u548c\u8fc7\u6ee4\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u524d\u7f6e\u8fc7\u6ee4\uff1a\u5bf9\u8bfb\u53d6\u5230\u7684\u539f\u59cb\u6570\u636e\u8fdb\u884c\u4e00\u6b21\u8fc7\u6ee4\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"PRECEDING FILTER k1 = 1\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6620\u5c04\uff1a\u5b9a\u4e49\u6e90\u6570\u636e\u4e2d\u7684\u5217\u3002\u5982\u679c\u5b9a\u4e49\u7684\u5217\u540d\u548c\u8868\u4e2d\u7684\u5217\u76f8\u540c\uff0c\u5219\u76f4\u63a5\u6620\u5c04\u4e3a\u8868\u4e2d\u7684\u5217\u3002\u5982\u679c\u4e0d\u540c\uff0c\u5219\u8fd9\u4e2a\u88ab\u5b9a\u4e49\u7684\u5217\u53ef\u4ee5\u7528\u4e8e\u4e4b\u540e\u7684\u8f6c\u6362\u64cd\u4f5c\u3002\u5982\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"(k1, k2, tmpk3)\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8f6c\u6362\uff1a\u5c06\u7b2c\u4e00\u6b65\u4e2d\u7ecf\u8fc7\u6620\u5c04\u7684\u5217\u8fdb\u884c\u8f6c\u6362\uff0c\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u8868\u8fbe\u5f0f\u3001\u51fd\u6570\u3001\u81ea\u5b9a\u4e49\u51fd\u6570\u8fdb\u884c\u8f6c\u5316\uff0c\u5e76\u91cd\u65b0\u6620\u5c04\u5230\u8868\u4e2d\u5bf9\u5e94\u7684\u5217\u4e0a\u3002\u5982\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"k3 = tmpk3 + 1\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u540e\u7f6e\u8fc7\u6ee4\uff1a\u5bf9\u7ecf\u8fc7\u6620\u5c04\u548c\u8f6c\u6362\u540e\u7684\u5217\uff0c\u901a\u8fc7\u8868\u8fbe\u5f0f\u8fdb\u884c\u8fc7\u6ee4\u3002\u88ab\u8fc7\u6ee4\u7684\u6570\u636e\u884c\u4e0d\u4f1a\u5bfc\u5165\u5230\u7cfb\u7edf\u4e2d\u3002\u5982\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"WHERE k1 > k2\n")))),(0,l.kt)("h2",{id:"\u5217\u6620\u5c04"},"\u5217\u6620\u5c04"),(0,l.kt)("p",null,"\u5217\u6620\u5c04\u7684\u76ee\u7684\u4e3b\u8981\u662f\u63cf\u8ff0\u5bfc\u5165\u6587\u4ef6\u4e2d\u5404\u4e2a\u5217\u7684\u4fe1\u606f\uff0c\u76f8\u5f53\u4e8e\u4e3a\u6e90\u6570\u636e\u4e2d\u7684\u5217\u5b9a\u4e49\u540d\u79f0\u3002\u901a\u8fc7\u63cf\u8ff0\u5217\u6620\u5c04\u5173\u7cfb\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4e8e\u8868\u4e2d\u5217\u987a\u5e8f\u4e0d\u540c\u3001\u5217\u6570\u91cf\u4e0d\u540c\u7684\u6e90\u6587\u4ef6\u5bfc\u5165\u5230 Doris \u4e2d\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u793a\u4f8b\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u5047\u8bbe\u6e90\u6587\u4ef6\u67094\u5217\uff0c\u5185\u5bb9\u5982\u4e0b\uff08\u8868\u5934\u5217\u540d\u4ec5\u4e3a\u65b9\u4fbf\u8868\u8ff0\uff0c\u5b9e\u9645\u5e76\u65e0\u8868\u5934\uff09\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u52171"),(0,l.kt)("th",{parentName:"tr",align:null},"\u52172"),(0,l.kt)("th",{parentName:"tr",align:null},"\u52173"),(0,l.kt)("th",{parentName:"tr",align:null},"\u52174"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"beijing"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"shanghai"),(0,l.kt)("td",{parentName:"tr",align:null},"1.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"\\N"),(0,l.kt)("td",{parentName:"tr",align:null},"chongqing"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"\\N")," \u5728\u6e90\u6587\u4ef6\u4e2d\u8868\u793a null\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8c03\u6574\u6620\u5c04\u987a\u5e8f"),(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4\u5217\u3002\u6211\u4eec\u5e0c\u671b\u7684\u5bfc\u5165\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u52171 -> k1\n\u52172 -> k3\n\u52173 -> k2\n\u52174 -> k4\n")),(0,l.kt)("p",{parentName:"li"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"(k1, k3, k2, k4)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6e90\u6587\u4ef6\u4e2d\u7684\u5217\u6570\u91cf\u591a\u4e8e\u8868\u4e2d\u7684\u5217"),(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1,k2,k3")," 3\u5217\u3002\u6211\u4eec\u5e0c\u671b\u7684\u5bfc\u5165\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u52171 -> k1\n\u52172 -> k3\n\u52173 -> k2\n")),(0,l.kt)("p",{parentName:"li"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"(k1, k3, k2, tmpk4)\n")),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"tmpk4")," \u4e3a\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u3001\u8868\u4e2d\u4e0d\u5b58\u5728\u7684\u5217\u540d\u3002Doris \u4f1a\u5ffd\u7565\u8fd9\u4e2a\u4e0d\u5b58\u5728\u7684\u5217\u540d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6e90\u6587\u4ef6\u4e2d\u7684\u5217\u6570\u91cf\u5c11\u4e8e\u8868\u4e2d\u7684\u5217\uff0c\u4f7f\u7528\u9ed8\u8ba4\u503c\u586b\u5145"),(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1,k2,k3,k4,k5")," 5\u5217\u3002\u6211\u4eec\u5e0c\u671b\u7684\u5bfc\u5165\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u52171 -> k1\n\u52172 -> k3\n\u52173 -> k2\n")),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u6211\u4eec\u4ec5\u4f7f\u7528\u6e90\u6587\u4ef6\u4e2d\u7684\u524d3\u5217\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"k4,k5")," \u4e24\u5217\u5e0c\u671b\u4f7f\u7528\u9ed8\u8ba4\u503c\u586b\u5145\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"(k1, k3, k2)\n")),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"k4,k5")," \u5217\u6709\u9ed8\u8ba4\u503c\uff0c\u5219\u4f1a\u586b\u5145\u9ed8\u8ba4\u503c\u3002\u5426\u5219\u5982\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"nullable")," \u7684\u5217\uff0c\u5219\u4f1a\u586b\u5145 ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," \u503c\u3002\u5426\u5219\uff0c\u5bfc\u5165\u4f5c\u4e1a\u4f1a\u62a5\u9519\u3002"))),(0,l.kt)("h2",{id:"\u5217\u524d\u7f6e\u8fc7\u6ee4"},"\u5217\u524d\u7f6e\u8fc7\u6ee4"),(0,l.kt)("p",null,"\u524d\u7f6e\u8fc7\u6ee4\u662f\u5bf9\u8bfb\u53d6\u5230\u7684\u539f\u59cb\u6570\u636e\u8fdb\u884c\u4e00\u6b21\u8fc7\u6ee4\u3002\u76ee\u524d\u4ec5\u652f\u6301 BROKER LOAD \u548c ROUTINE LOAD\u3002"),(0,l.kt)("p",null,"\u524d\u7f6e\u8fc7\u6ee4\u6709\u4ee5\u4e0b\u5e94\u7528\u573a\u666f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8f6c\u6362\u524d\u505a\u8fc7\u6ee4"),(0,l.kt)("p",{parentName:"li"},"\u5e0c\u671b\u5728\u5217\u6620\u5c04\u548c\u8f6c\u6362\u524d\u505a\u8fc7\u6ee4\u7684\u573a\u666f\u3002\u80fd\u591f\u5148\u884c\u8fc7\u6ee4\u6389\u90e8\u5206\u4e0d\u9700\u8981\u7684\u6570\u636e\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fc7\u6ee4\u5217\u4e0d\u5b58\u5728\u4e8e\u8868\u4e2d\uff0c\u4ec5\u4f5c\u4e3a\u8fc7\u6ee4\u6807\u8bc6"),(0,l.kt)("p",{parentName:"li"},"\u6bd4\u5982\u6e90\u6570\u636e\u4e2d\u5b58\u50a8\u4e86\u591a\u5f20\u8868\u7684\u6570\u636e\uff08\u6216\u8005\u591a\u5f20\u8868\u7684\u6570\u636e\u5199\u5165\u4e86\u540c\u4e00\u4e2a Kafka \u6d88\u606f\u961f\u5217\uff09\u3002\u6570\u636e\u4e2d\u6bcf\u884c\u6709\u4e00\u5217\u8868\u540d\u6765\u6807\u8bc6\u8be5\u884c\u6570\u636e\u5c5e\u4e8e\u54ea\u4e2a\u8868\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u524d\u7f6e\u8fc7\u6ee4\u6761\u4ef6\u6765\u7b5b\u9009\u5bf9\u5e94\u7684\u8868\u6570\u636e\u8fdb\u884c\u5bfc\u5165\u3002"))),(0,l.kt)("h2",{id:"\u5217\u8f6c\u6362"},"\u5217\u8f6c\u6362"),(0,l.kt)("p",null,"\u5217\u8f6c\u6362\u529f\u80fd\u5141\u8bb8\u7528\u6237\u5bf9\u6e90\u6587\u4ef6\u4e2d\u5217\u503c\u8fdb\u884c\u53d8\u6362\u3002\u76ee\u524d Doris \u652f\u6301\u4f7f\u7528\u7edd\u5927\u90e8\u5206\u5185\u7f6e\u51fd\u6570\u3001\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u8fdb\u884c\u8f6c\u6362\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u81ea\u5b9a\u4e49\u51fd\u6570\u96b6\u5c5e\u4e8e\u67d0\u4e00\u6570\u636e\u5e93\u4e0b\uff0c\u5728\u4f7f\u7528\u81ea\u5b9a\u4e49\u51fd\u6570\u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u9700\u8981\u7528\u6237\u5bf9\u8fd9\u4e2a\u6570\u636e\u5e93\u6709\u8bfb\u6743\u9650\u3002")),(0,l.kt)("p",null,"\u8f6c\u6362\u64cd\u4f5c\u901a\u5e38\u662f\u548c\u5217\u6620\u5c04\u4e00\u8d77\u5b9a\u4e49\u7684\u3002\u5373\u5148\u5bf9\u5217\u8fdb\u884c\u6620\u5c04\uff0c\u518d\u8fdb\u884c\u8f6c\u6362\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u793a\u4f8b\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u5047\u8bbe\u6e90\u6587\u4ef6\u67094\u5217\uff0c\u5185\u5bb9\u5982\u4e0b\uff08\u8868\u5934\u5217\u540d\u4ec5\u4e3a\u65b9\u4fbf\u8868\u8ff0\uff0c\u5b9e\u9645\u5e76\u65e0\u8868\u5934\uff09\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u52171"),(0,l.kt)("th",{parentName:"tr",align:null},"\u52172"),(0,l.kt)("th",{parentName:"tr",align:null},"\u52173"),(0,l.kt)("th",{parentName:"tr",align:null},"\u52174"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"beijing"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"shanghai"),(0,l.kt)("td",{parentName:"tr",align:null},"1.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"chongqing"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u6e90\u6587\u4ef6\u4e2d\u7684\u5217\u503c\u7ecf\u8f6c\u6362\u540e\u5bfc\u5165\u8868\u4e2d"),(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4\u5217\u3002\u6211\u4eec\u5e0c\u671b\u7684\u5bfc\u5165\u6620\u5c04\u548c\u8f6c\u6362\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u52171       -> k1\n\u52172 * 100 -> k3\n\u52173       -> k2\n\u52174       -> k4\n")),(0,l.kt)("p",{parentName:"li"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"(k1, tmpk3, k2, k4, k3 = tmpk3 * 100)\n")),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u76f8\u5f53\u4e8e\u6211\u4eec\u5c06\u6e90\u6587\u4ef6\u4e2d\u7684\u7b2c2\u5217\u547d\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tmpk3"),"\uff0c\u540c\u65f6\u6307\u5b9a\u8868\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"k3")," \u5217\u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tmpk3 * 100"),"\u3002\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"k1"),(0,l.kt)("th",{parentName:"tr",align:null},"k2"),(0,l.kt)("th",{parentName:"tr",align:null},"k3"),(0,l.kt)("th",{parentName:"tr",align:null},"k4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"beijing"),(0,l.kt)("td",{parentName:"tr",align:null},"10000"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"shanghai"),(0,l.kt)("td",{parentName:"tr",align:null},"20000"),(0,l.kt)("td",{parentName:"tr",align:null},"1.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"chongqing"),(0,l.kt)("td",{parentName:"tr",align:null},"40000"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7 case when \u51fd\u6570\uff0c\u6709\u6761\u4ef6\u7684\u8fdb\u884c\u5217\u8f6c\u6362\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4\u5217\u3002\u6211\u4eec\u5e0c\u671b\u5bf9\u4e8e\u6e90\u6570\u636e\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"beijing, shanghai, guangzhou, chongqing")," \u5206\u522b\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684\u5730\u533aid\u540e\u5bfc\u5165\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u52171                  -> k1\n\u52172                  -> k2\n\u52173 \u8fdb\u884c\u5730\u533aid\u8f6c\u6362\u540e    -> k3\n\u52174                  -> k4\n")),(0,l.kt)("p",{parentName:"li"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')),(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"k1"),(0,l.kt)("th",{parentName:"tr",align:null},"k2"),(0,l.kt)("th",{parentName:"tr",align:null},"k3"),(0,l.kt)("th",{parentName:"tr",align:null},"k4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u6e90\u6587\u4ef6\u4e2d\u7684 null \u503c\u8f6c\u6362\u6210 0 \u5bfc\u5165\u3002\u540c\u65f6\u4e5f\u8fdb\u884c\u793a\u4f8b2\u4e2d\u7684\u5730\u533aid\u8f6c\u6362\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4\u5217\u3002\u5728\u5bf9\u5730\u533aid\u8f6c\u6362\u7684\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u5e0c\u671b\u5bf9\u4e8e\u6e90\u6570\u636e\u4e2d k1 \u5217\u7684 null \u503c\u8f6c\u6362\u6210 0 \u5bfc\u5165\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u52171 \u5982\u679c\u4e3anull \u5219\u8f6c\u6362\u62100   -> k1\n\u52172                      -> k2\n\u52173                      -> k3\n\u52174                      -> k4\n")),(0,l.kt)("p",{parentName:"li"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},'(tmpk1, k2, tmpk3, k4, k1 = ifnull(tmpk1, 0), k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')),(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"k1"),(0,l.kt)("th",{parentName:"tr",align:null},"k2"),(0,l.kt)("th",{parentName:"tr",align:null},"k3"),(0,l.kt)("th",{parentName:"tr",align:null},"k4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4")))))),(0,l.kt)("h2",{id:"\u5217\u8fc7\u6ee4"},"\u5217\u8fc7\u6ee4"),(0,l.kt)("p",null,"\u7ecf\u8fc7\u5217\u6620\u5c04\u548c\u8f6c\u6362\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5c06\u4e0d\u5e0c\u671b\u5bfc\u5165\u5230Doris\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u793a\u4f8b\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u5047\u8bbe\u6e90\u6587\u4ef6\u67094\u5217\uff0c\u5185\u5bb9\u5982\u4e0b\uff08\u8868\u5934\u5217\u540d\u4ec5\u4e3a\u65b9\u4fbf\u8868\u8ff0\uff0c\u5b9e\u9645\u5e76\u65e0\u8868\u5934\uff09\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u52171"),(0,l.kt)("th",{parentName:"tr",align:null},"\u52172"),(0,l.kt)("th",{parentName:"tr",align:null},"\u52173"),(0,l.kt)("th",{parentName:"tr",align:null},"\u52174"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"beijing"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"shanghai"),(0,l.kt)("td",{parentName:"tr",align:null},"1.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"chongqing"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5217\u6620\u5c04\u548c\u8f6c\u6362\u7f3a\u7701\u7684\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u8fc7\u6ee4"),(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4\u5217\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u7f3a\u7701\u5217\u6620\u5c04\u548c\u8f6c\u6362\u7684\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u5b9a\u4e49\u8fc7\u6ee4\u6761\u4ef6\u3002\u5982\u6211\u4eec\u5e0c\u671b\u53ea\u5bfc\u5165\u6e90\u6587\u4ef6\u4e2d\u7b2c4\u5217\u4e3a\u5927\u4e8e 1.2 \u7684\u6570\u636e\u884c\uff0c\u5219\u8fc7\u6ee4\u6761\u4ef6\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"where k4 > 1.2\n")),(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"k1"),(0,l.kt)("th",{parentName:"tr",align:null},"k2"),(0,l.kt)("th",{parentName:"tr",align:null},"k3"),(0,l.kt)("th",{parentName:"tr",align:null},"k4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"chongqing"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4")))),(0,l.kt)("p",{parentName:"li"},"\u7f3a\u7701\u60c5\u51b5\u4e0b\uff0cDoris \u4f1a\u6309\u7167\u987a\u5e8f\u8fdb\u884c\u5217\u6620\u5c04\uff0c\u56e0\u6b64\u6e90\u6587\u4ef6\u4e2d\u7684\u7b2c4\u5217\u81ea\u52a8\u88ab\u6620\u5c04\u5230\u8868\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"k4")," \u5217\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u7ecf\u8fc7\u5217\u8f6c\u6362\u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4"),(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4\u5217\u3002\u5728 ",(0,l.kt)("strong",{parentName:"p"},"\u5217\u8f6c\u6362")," \u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u7701\u4efd\u540d\u79f0\u8f6c\u6362\u6210\u4e86id\u3002\u8fd9\u91cc\u6211\u4eec\u60f3\u8fc7\u6ee4\u6389 id \u4e3a 3 \u7684\u6570\u636e\u3002\u5219\u8f6c\u6362\u3001\u8fc7\u6ee4\u6761\u4ef6\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\nwhere k3 != 3\n')),(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"k1"),(0,l.kt)("th",{parentName:"tr",align:null},"k2"),(0,l.kt)("th",{parentName:"tr",align:null},"k3"),(0,l.kt)("th",{parentName:"tr",align:null},"k4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4")))),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u6211\u4eec\u770b\u5230\uff0c\u6267\u884c\u8fc7\u6ee4\u65f6\u7684\u5217\u503c\uff0c\u4e3a\u7ecf\u8fc7\u6620\u5c04\u548c\u8f6c\u6362\u540e\u7684\u6700\u7ec8\u5217\u503c\uff0c\u800c\u4e0d\u662f\u539f\u59cb\u6570\u636e\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u591a\u6761\u4ef6\u8fc7\u6ee4"),(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4\u5217\u3002\u6211\u4eec\u60f3\u8fc7\u6ee4\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"k1")," \u5217\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," \u7684\u6570\u636e\uff0c\u540c\u65f6\u8fc7\u6ee4\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"k4")," \u5217\u5c0f\u4e8e 1.2 \u7684\u6570\u636e\uff0c\u5219\u8fc7\u6ee4\u6761\u4ef6\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"where k1 is null and k4 < 1.2\n")),(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"k1"),(0,l.kt)("th",{parentName:"tr",align:null},"k2"),(0,l.kt)("th",{parentName:"tr",align:null},"k3"),(0,l.kt)("th",{parentName:"tr",align:null},"k4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3")))))),(0,l.kt)("h3",{id:"\u6570\u636e\u8d28\u91cf\u95ee\u9898\u548c\u8fc7\u6ee4\u9608\u503c"},"\u6570\u636e\u8d28\u91cf\u95ee\u9898\u548c\u8fc7\u6ee4\u9608\u503c"),(0,l.kt)("p",null,"\u5bfc\u5165\u4f5c\u4e1a\u4e2d\u88ab\u5904\u7406\u7684\u6570\u636e\u884c\u53ef\u4ee5\u5206\u4e3a\u5982\u4e0b\u4e09\u79cd\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Filtered Rows"),(0,l.kt)("p",{parentName:"li"},"\u56e0\u6570\u636e\u8d28\u91cf\u4e0d\u5408\u683c\u800c\u88ab\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u3002\u6570\u636e\u8d28\u91cf\u4e0d\u5408\u683c\u5305\u62ec\u7c7b\u578b\u9519\u8bef\u3001\u7cbe\u5ea6\u9519\u8bef\u3001\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u957f\u3001\u6587\u4ef6\u5217\u6570\u4e0d\u5339\u914d\u7b49\u6570\u636e\u683c\u5f0f\u95ee\u9898\uff0c\u4ee5\u53ca\u56e0\u6ca1\u6709\u5bf9\u5e94\u7684\u5206\u533a\u800c\u88ab\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u884c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Unselected Rows"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u90e8\u5206\u4e3a\u56e0 ",(0,l.kt)("inlineCode",{parentName:"p"},"preceding filter")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"where")," \u5217\u8fc7\u6ee4\u6761\u4ef6\u800c\u88ab\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u884c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Loaded Rows"),(0,l.kt)("p",{parentName:"li"},"\u88ab\u6b63\u786e\u5bfc\u5165\u7684\u6570\u636e\u884c\u3002"))),(0,l.kt)("p",null,"Doris \u7684\u5bfc\u5165\u4efb\u52a1\u5141\u8bb8\u7528\u6237\u8bbe\u7f6e\u6700\u5927\u9519\u8bef\u7387\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"max_filter_ratio"),"\uff09\u3002\u5982\u679c\u5bfc\u5165\u7684\u6570\u636e\u7684\u9519\u8bef\u7387\u4f4e\u4e8e\u9608\u503c\uff0c\u5219\u8fd9\u4e9b\u9519\u8bef\u884c\u5c06\u88ab\u5ffd\u7565\uff0c\u5176\u4ed6\u6b63\u786e\u7684\u6570\u636e\u5c06\u88ab\u5bfc\u5165\u3002"),(0,l.kt)("p",null,"\u9519\u8bef\u7387\u7684\u8ba1\u7b97\u65b9\u5f0f\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"#Filtered Rows / (#Filtered Rows + #Loaded Rows)\n")),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4 ",(0,l.kt)("inlineCode",{parentName:"p"},"Unselected Rows")," \u4e0d\u4f1a\u53c2\u4e0e\u9519\u8bef\u7387\u7684\u8ba1\u7b97\u3002"))}u.isMDXComponent=!0}}]);