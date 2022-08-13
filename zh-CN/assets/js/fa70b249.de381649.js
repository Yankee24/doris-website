"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[15774],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>N});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),s=u(t),N=a,d=s["".concat(p,".").concat(N)]||s[N]||k[N]||o;return t?l.createElement(d,i(i({ref:n},c),{},{components:t})):l.createElement(d,i({ref:n},c))}));function N(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var u=2;u<o;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},41490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var l=t(87462),a=(t(67294),t(3905));const o={title:"Colocation Join",language:"zh-CN"},i=void 0,r={unversionedId:"advanced/join-optimization/colocation-join",id:"version-dev/advanced/join-optimization/colocation-join",title:"Colocation Join",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/advanced/join-optimization/colocation-join.md",sourceDirName:"advanced/join-optimization",slug:"/advanced/join-optimization/colocation-join",permalink:"/zh-CN/docs/dev/advanced/join-optimization/colocation-join",draft:!1,tags:[],version:"dev",frontMatter:{title:"Colocation Join",language:"zh-CN"},sidebar:"docs",previous:{title:"Doris Join \u4f18\u5316\u539f\u7406",permalink:"/zh-CN/docs/dev/advanced/join-optimization/doris-join-optimization"},next:{title:"Bucket Shuffle Join",permalink:"/zh-CN/docs/dev/advanced/join-optimization/bucket-shuffle-join"}},p={},u=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u5efa\u8868",id:"\u5efa\u8868",level:3},{value:"\u5220\u8868",id:"\u5220\u8868",level:3},{value:"\u67e5\u770b Group",id:"\u67e5\u770b-group",level:3},{value:"\u4fee\u6539\u8868 Colocate Group \u5c5e\u6027",id:"\u4fee\u6539\u8868-colocate-group-\u5c5e\u6027",level:3},{value:"\u5176\u4ed6\u76f8\u5173\u64cd\u4f5c",id:"\u5176\u4ed6\u76f8\u5173\u64cd\u4f5c",level:3},{value:"Colocation \u526f\u672c\u5747\u8861\u548c\u4fee\u590d",id:"colocation-\u526f\u672c\u5747\u8861\u548c\u4fee\u590d",level:2},{value:"\u526f\u672c\u4fee\u590d",id:"\u526f\u672c\u4fee\u590d",level:3},{value:"\u526f\u672c\u5747\u8861",id:"\u526f\u672c\u5747\u8861",level:3},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2},{value:"\u9ad8\u7ea7\u64cd\u4f5c",id:"\u9ad8\u7ea7\u64cd\u4f5c",level:2},{value:"FE \u914d\u7f6e\u9879",id:"fe-\u914d\u7f6e\u9879",level:3},{value:"HTTP Restful API",id:"http-restful-api",level:3}],c={toc:u};function k(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colocation-join"},"Colocation Join"),(0,a.kt)("p",null,"Colocation Join \u662f\u5728 Doris 0.9 \u7248\u672c\u4e2d\u5f15\u5165\u7684\u65b0\u529f\u80fd\u3002\u65e8\u5728\u4e3a\u67d0\u4e9b Join \u67e5\u8be2\u63d0\u4f9b\u672c\u5730\u6027\u4f18\u5316\uff0c\u6765\u51cf\u5c11\u6570\u636e\u5728\u8282\u70b9\u95f4\u7684\u4f20\u8f93\u8017\u65f6\uff0c\u52a0\u901f\u67e5\u8be2\u3002"),(0,a.kt)("p",null,"\u6700\u521d\u7684\u8bbe\u8ba1\u3001\u5b9e\u73b0\u548c\u6548\u679c\u53ef\u4ee5\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/issues/245"},"ISSUE 245"),"\u3002"),(0,a.kt)("p",null,"Colocation Join \u529f\u80fd\u7ecf\u8fc7\u4e00\u6b21\u6539\u7248\uff0c\u8bbe\u8ba1\u548c\u4f7f\u7528\u65b9\u5f0f\u548c\u6700\u521d\u8bbe\u8ba1\u7a0d\u6709\u4e0d\u540c\u3002\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Colocation Join \u7684\u539f\u7406\u3001\u5b9e\u73b0\u3001\u4f7f\u7528\u65b9\u5f0f\u548c\u6ce8\u610f\u4e8b\u9879\u3002"),(0,a.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Colocation Group\uff08CG\uff09\uff1a\u4e00\u4e2a CG \u4e2d\u4f1a\u5305\u542b\u4e00\u5f20\u53ca\u4ee5\u4e0a\u7684 Table\u3002\u5728\u540c\u4e00\u4e2a Group \u5185\u7684 Table \u6709\u7740\u76f8\u540c\u7684 Colocation Group Schema\uff0c\u5e76\u4e14\u6709\u7740\u76f8\u540c\u7684\u6570\u636e\u5206\u7247\u5206\u5e03\u3002"),(0,a.kt)("li",{parentName:"ul"},"Colocation Group Schema\uff08CGS\uff09\uff1a\u7528\u4e8e\u63cf\u8ff0\u4e00\u4e2a CG \u4e2d\u7684 Table\uff0c\u548c Colocation \u76f8\u5173\u7684\u901a\u7528 Schema \u4fe1\u606f\u3002\u5305\u62ec\u5206\u6876\u5217\u7c7b\u578b\uff0c\u5206\u6876\u6570\u4ee5\u53ca\u526f\u672c\u6570\u7b49\u3002")),(0,a.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,a.kt)("p",null,"Colocation Join \u529f\u80fd\uff0c\u662f\u5c06\u4e00\u7ec4\u62e5\u6709\u76f8\u540c CGS \u7684 Table \u7ec4\u6210\u4e00\u4e2a CG\u3002\u5e76\u4fdd\u8bc1\u8fd9\u4e9b Table \u5bf9\u5e94\u7684\u6570\u636e\u5206\u7247\u4f1a\u843d\u5728\u540c\u4e00\u4e2a BE \u8282\u70b9\u4e0a\u3002\u4f7f\u5f97\u5f53 CG \u5185\u7684\u8868\u8fdb\u884c\u5206\u6876\u5217\u4e0a\u7684 Join \u64cd\u4f5c\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u8fdb\u884c\u672c\u5730\u6570\u636e Join\uff0c\u51cf\u5c11\u6570\u636e\u5728\u8282\u70b9\u95f4\u7684\u4f20\u8f93\u8017\u65f6\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u8868\u7684\u6570\u636e\uff0c\u6700\u7ec8\u4f1a\u6839\u636e\u5206\u6876\u5217\u503c Hash\u3001\u5bf9\u6876\u6570\u53d6\u6a21\u7684\u540e\u843d\u5728\u67d0\u4e00\u4e2a\u5206\u6876\u5185\u3002\u5047\u8bbe\u4e00\u4e2a Table \u7684\u5206\u6876\u6570\u4e3a 8\uff0c\u5219\u5171\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"[0, 1, 2, 3, 4, 5, 6, 7]")," 8 \u4e2a\u5206\u6876\uff08Bucket\uff09\uff0c\u6211\u4eec\u79f0\u8fd9\u6837\u4e00\u4e2a\u5e8f\u5217\u4e3a\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"BucketsSequence"),"\u3002\u6bcf\u4e2a Bucket \u5185\u4f1a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u636e\u5206\u7247\uff08Tablet\uff09\u3002\u5f53\u8868\u4e3a\u5355\u5206\u533a\u8868\u65f6\uff0c\u4e00\u4e2a Bucket \u5185\u4ec5\u6709\u4e00\u4e2a Tablet\u3002\u5982\u679c\u662f\u591a\u5206\u533a\u8868\uff0c\u5219\u4f1a\u6709\u591a\u4e2a\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4f7f\u5f97 Table \u80fd\u591f\u6709\u76f8\u540c\u7684\u6570\u636e\u5206\u5e03\uff0c\u540c\u4e00 CG \u5185\u7684 Table \u5fc5\u987b\u4fdd\u8bc1\u4ee5\u4e0b\u5c5e\u6027\u76f8\u540c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5206\u6876\u5217\u548c\u5206\u6876\u6570"),(0,a.kt)("p",{parentName:"li"},"\u5206\u6876\u5217\uff0c\u5373\u5728\u5efa\u8868\u8bed\u53e5\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTRIBUTED BY HASH(col1, col2, ...)")," \u4e2d\u6307\u5b9a\u7684\u5217\u3002\u5206\u6876\u5217\u51b3\u5b9a\u4e86\u4e00\u5f20\u8868\u7684\u6570\u636e\u901a\u8fc7\u54ea\u4e9b\u5217\u7684\u503c\u8fdb\u884c Hash \u5212\u5206\u5230\u4e0d\u540c\u7684 Tablet \u4e2d\u3002\u540c\u4e00 CG \u5185\u7684 Table \u5fc5\u987b\u4fdd\u8bc1\u5206\u6876\u5217\u7684\u7c7b\u578b\u548c\u6570\u91cf\u5b8c\u5168\u4e00\u81f4\uff0c\u5e76\u4e14\u6876\u6570\u4e00\u81f4\uff0c\u624d\u80fd\u4fdd\u8bc1\u591a\u5f20\u8868\u7684\u6570\u636e\u5206\u7247\u80fd\u591f\u4e00\u4e00\u5bf9\u5e94\u7684\u8fdb\u884c\u5206\u5e03\u63a7\u5236\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u526f\u672c\u6570"),(0,a.kt)("p",{parentName:"li"},"\u540c\u4e00\u4e2a CG \u5185\u6240\u6709\u8868\u7684\u6240\u6709\u5206\u533a\uff08Partition\uff09\u7684\u526f\u672c\u6570\u5fc5\u987b\u4e00\u81f4\u3002\u5982\u679c\u4e0d\u4e00\u81f4\uff0c\u53ef\u80fd\u51fa\u73b0\u67d0\u4e00\u4e2a Tablet \u7684\u67d0\u4e00\u4e2a\u526f\u672c\uff0c\u5728\u540c\u4e00\u4e2a BE \u4e0a\u6ca1\u6709\u5176\u4ed6\u7684\u8868\u5206\u7247\u7684\u526f\u672c\u5bf9\u5e94\u3002"))),(0,a.kt)("p",null,"\u540c\u4e00\u4e2a CG \u5185\u7684\u8868\uff0c\u5206\u533a\u7684\u4e2a\u6570\u3001\u8303\u56f4\u4ee5\u53ca\u5206\u533a\u5217\u7684\u7c7b\u578b\u4e0d\u8981\u6c42\u4e00\u81f4\u3002"),(0,a.kt)("p",null,"\u5728\u56fa\u5b9a\u4e86\u5206\u6876\u5217\u548c\u5206\u6876\u6570\u540e\uff0c\u540c\u4e00\u4e2a CG \u5185\u7684\u8868\u4f1a\u62e5\u6709\u76f8\u540c\u7684 BucketsSequence\u3002\u800c\u526f\u672c\u6570\u51b3\u5b9a\u4e86\u6bcf\u4e2a\u5206\u6876\u5185\u7684 Tablet \u7684\u591a\u4e2a\u526f\u672c\uff0c\u5b58\u653e\u5728\u54ea\u4e9b BE \u4e0a\u3002\u5047\u8bbe BucketsSequence \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"[0, 1, 2, 3, 4, 5, 6, 7]"),"\uff0cBE \u8282\u70b9\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"[A, B, C, D]")," 4\u4e2a\u3002\u5219\u4e00\u4e2a\u53ef\u80fd\u7684\u6570\u636e\u5206\u5e03\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| 0 | | 1 | | 2 | | 3 | | 4 | | 5 | | 6 | | 7 |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| A | | B | | C | | D | | A | | B | | C | | D |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| B | | C | | D | | A | | B | | C | | D | | A |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| C | | D | | A | | B | | C | | D | | A | | B |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n")),(0,a.kt)("p",null,"CG \u5185\u6240\u6709\u8868\u7684\u6570\u636e\u90fd\u4f1a\u6309\u7167\u4e0a\u9762\u7684\u89c4\u5219\u8fdb\u884c\u7edf\u4e00\u5206\u5e03\uff0c\u8fd9\u6837\u5c31\u4fdd\u8bc1\u4e86\uff0c\u5206\u6876\u5217\u503c\u76f8\u540c\u7684\u6570\u636e\u90fd\u5728\u540c\u4e00\u4e2a BE \u8282\u70b9\u4e0a\uff0c\u53ef\u4ee5\u8fdb\u884c\u672c\u5730\u6570\u636e Join\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("h3",{id:"\u5efa\u8868"},"\u5efa\u8868"),(0,a.kt)("p",null,"\u5efa\u8868\u65f6\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"PROPERTIES")," \u4e2d\u6307\u5b9a\u5c5e\u6027 ",(0,a.kt)("inlineCode",{parentName:"p"},'"colocate_with" = "group_name"'),"\uff0c\u8868\u793a\u8fd9\u4e2a\u8868\u662f\u4e00\u4e2a Colocation Join \u8868\uff0c\u5e76\u4e14\u5f52\u5c5e\u4e8e\u4e00\u4e2a\u6307\u5b9a\u7684 Colocation Group\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n    "colocate_with" = "group1"\n);\n')),(0,a.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u7684 Group \u4e0d\u5b58\u5728\uff0c\u5219 Doris \u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u53ea\u5305\u542b\u5f53\u524d\u8fd9\u5f20\u8868\u7684 Group\u3002\u5982\u679c Group \u5df2\u5b58\u5728\uff0c\u5219 Doris \u4f1a\u68c0\u67e5\u5f53\u524d\u8868\u662f\u5426\u6ee1\u8db3 Colocation Group Schema\u3002\u5982\u679c\u6ee1\u8db3\uff0c\u5219\u4f1a\u521b\u5efa\u8be5\u8868\uff0c\u5e76\u5c06\u8be5\u8868\u52a0\u5165 Group\u3002\u540c\u65f6\uff0c\u8868\u4f1a\u6839\u636e\u5df2\u5b58\u5728\u7684 Group \u4e2d\u7684\u6570\u636e\u5206\u5e03\u89c4\u5219\u521b\u5efa\u5206\u7247\u548c\u526f\u672c\u3002 Group \u5f52\u5c5e\u4e8e\u4e00\u4e2a Database\uff0cGroup \u7684\u540d\u5b57\u5728\u4e00\u4e2a Database \u5185\u552f\u4e00\u3002\u5728\u5185\u90e8\u5b58\u50a8\u662f Group \u7684\u5168\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"dbId_groupName"),"\uff0c\u4f46\u7528\u6237\u53ea\u611f\u77e5 groupName\u3002"),(0,a.kt)("h3",{id:"\u5220\u8868"},"\u5220\u8868"),(0,a.kt)("p",null,"\u5f53 Group \u4e2d\u6700\u540e\u4e00\u5f20\u8868\u5f7b\u5e95\u5220\u9664\u540e\uff08\u5f7b\u5e95\u5220\u9664\u662f\u6307\u4ece\u56de\u6536\u7ad9\u4e2d\u5220\u9664\u3002\u901a\u5e38\uff0c\u4e00\u5f20\u8868\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," \u547d\u4ee4\u5220\u9664\u540e\uff0c\u4f1a\u5728\u56de\u6536\u7ad9\u9ed8\u8ba4\u505c\u7559\u4e00\u5929\u7684\u65f6\u95f4\u540e\uff0c\u518d\u5220\u9664\uff09\uff0c\u8be5 Group \u4e5f\u4f1a\u88ab\u81ea\u52a8\u5220\u9664\u3002"),(0,a.kt)("h3",{id:"\u67e5\u770b-group"},"\u67e5\u770b Group"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u96c6\u7fa4\u5185\u5df2\u5b58\u5728\u7684 Group \u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GroupId\uff1a \u4e00\u4e2a Group \u7684\u5168\u96c6\u7fa4\u552f\u4e00\u6807\u8bc6\uff0c\u524d\u534a\u90e8\u5206\u4e3a db id\uff0c\u540e\u534a\u90e8\u5206\u4e3a group id\u3002"),(0,a.kt)("li",{parentName:"ul"},"GroupName\uff1a Group \u7684\u5168\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"TabletIds\uff1a \u8be5 Group \u5305\u542b\u7684 Table \u7684 id \u5217\u8868\u3002"),(0,a.kt)("li",{parentName:"ul"},"BucketsNum\uff1a \u5206\u6876\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"ReplicationNum\uff1a \u526f\u672c\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"DistCols\uff1a Distribution columns\uff0c\u5373\u5206\u6876\u5217\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"IsStable\uff1a \u8be5 Group \u662f\u5426\u7a33\u5b9a\uff08\u7a33\u5b9a\u7684\u5b9a\u4e49\uff0c\u89c1 ",(0,a.kt)("inlineCode",{parentName:"li"},"Colocation \u526f\u672c\u5747\u8861\u548c\u4fee\u590d")," \u4e00\u8282\uff09\u3002")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u8fdb\u4e00\u6b65\u67e5\u770b\u4e00\u4e2a Group \u7684\u6570\u636e\u5206\u5e03\u60c5\u51b5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BucketIndex\uff1a \u5206\u6876\u5e8f\u5217\u7684\u4e0b\u6807\u3002"),(0,a.kt)("li",{parentName:"ul"},"BackendIds\uff1a \u5206\u6876\u4e2d\u6570\u636e\u5206\u7247\u6240\u5728\u7684 BE \u8282\u70b9 id \u5217\u8868\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0a\u547d\u4ee4\u9700\u8981 ADMIN \u6743\u9650\u3002\u6682\u4e0d\u652f\u6301\u666e\u901a\u7528\u6237\u67e5\u770b\u3002")),(0,a.kt)("h3",{id:"\u4fee\u6539\u8868-colocate-group-\u5c5e\u6027"},"\u4fee\u6539\u8868 Colocate Group \u5c5e\u6027"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u5df2\u7ecf\u521b\u5efa\u7684\u8868\uff0c\u4fee\u6539\u5176 Colocation Group \u5c5e\u6027\u3002\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE tbl SET ("colocate_with" = "group2");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8be5\u8868\u4e4b\u524d\u6ca1\u6709\u6307\u5b9a\u8fc7 Group\uff0c\u5219\u8be5\u547d\u4ee4\u68c0\u67e5 Schema\uff0c\u5e76\u5c06\u8be5\u8868\u52a0\u5165\u5230\u8be5 Group\uff08Group \u4e0d\u5b58\u5728\u5219\u4f1a\u521b\u5efa\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8be5\u8868\u4e4b\u524d\u6709\u6307\u5b9a\u5176\u4ed6 Group\uff0c\u5219\u8be5\u547d\u4ee4\u4f1a\u5148\u5c06\u8be5\u8868\u4ece\u539f\u6709 Group \u4e2d\u79fb\u9664\uff0c\u5e76\u52a0\u5165\u65b0 Group\uff08Group \u4e0d\u5b58\u5728\u5219\u4f1a\u521b\u5efa\uff09\u3002")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5220\u9664\u4e00\u4e2a\u8868\u7684 Colocation \u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE tbl SET ("colocate_with" = "");\n')),(0,a.kt)("h3",{id:"\u5176\u4ed6\u76f8\u5173\u64cd\u4f5c"},"\u5176\u4ed6\u76f8\u5173\u64cd\u4f5c"),(0,a.kt)("p",null,"\u5f53\u5bf9\u4e00\u4e2a\u5177\u6709 Colocation \u5c5e\u6027\u7684\u8868\u8fdb\u884c\u589e\u52a0\u5206\u533a\uff08ADD PARTITION\uff09\u3001\u4fee\u6539\u526f\u672c\u6570\u65f6\uff0cDoris \u4f1a\u68c0\u67e5\u4fee\u6539\u662f\u5426\u4f1a\u8fdd\u53cd Colocation Group Schema\uff0c\u5982\u679c\u8fdd\u53cd\u5219\u4f1a\u62d2\u7edd\u3002"),(0,a.kt)("h2",{id:"colocation-\u526f\u672c\u5747\u8861\u548c\u4fee\u590d"},"Colocation \u526f\u672c\u5747\u8861\u548c\u4fee\u590d"),(0,a.kt)("p",null,"Colocation \u8868\u7684\u526f\u672c\u5206\u5e03\u9700\u8981\u9075\u5faa Group \u4e2d\u6307\u5b9a\u7684\u5206\u5e03\uff0c\u6240\u4ee5\u5728\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u65b9\u9762\u548c\u666e\u901a\u5206\u7247\u6709\u6240\u533a\u522b\u3002"),(0,a.kt)("p",null,"Group \u81ea\u8eab\u6709\u4e00\u4e2a Stable \u5c5e\u6027\uff0c\u5f53 Stable \u4e3a true \u65f6\uff0c\u8868\u793a\u5f53\u524d Group \u5185\u7684\u8868\u7684\u6240\u6709\u5206\u7247\u6ca1\u6709\u6b63\u5728\u8fdb\u884c\u53d8\u52a8\uff0cColocation \u7279\u6027\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u3002\u5f53 Stable \u4e3a false \u65f6\uff08Unstable\uff09\uff0c\u8868\u793a\u5f53\u524d Group \u5185\u6709\u90e8\u5206\u8868\u7684\u5206\u7247\u6b63\u5728\u505a\u4fee\u590d\u6216\u8fc1\u79fb\uff0c\u6b64\u65f6\uff0c\u76f8\u5173\u8868\u7684 Colocation Join \u5c06\u9000\u5316\u4e3a\u666e\u901a Join\u3002"),(0,a.kt)("h3",{id:"\u526f\u672c\u4fee\u590d"},"\u526f\u672c\u4fee\u590d"),(0,a.kt)("p",null,"\u526f\u672c\u53ea\u80fd\u5b58\u50a8\u5728\u6307\u5b9a\u7684 BE \u8282\u70b9\u4e0a\u3002\u6240\u4ee5\u5f53\u67d0\u4e2a BE \u4e0d\u53ef\u7528\u65f6\uff08\u5b95\u673a\u3001Decommission \u7b49\uff09\uff0c\u9700\u8981\u5bfb\u627e\u4e00\u4e2a\u65b0\u7684 BE \u8fdb\u884c\u66ff\u6362\u3002Doris \u4f1a\u4f18\u5148\u5bfb\u627e\u8d1f\u8f7d\u6700\u4f4e\u7684 BE \u8fdb\u884c\u66ff\u6362\u3002\u66ff\u6362\u540e\uff0c\u8be5 Bucket \u5185\u7684\u6240\u6709\u5728\u65e7 BE \u4e0a\u7684\u6570\u636e\u5206\u7247\u90fd\u8981\u505a\u4fee\u590d\u3002\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0cGroup \u88ab\u6807\u8bb0\u4e3a Unstable\u3002"),(0,a.kt)("h3",{id:"\u526f\u672c\u5747\u8861"},"\u526f\u672c\u5747\u8861"),(0,a.kt)("p",null,"Doris \u4f1a\u5c3d\u529b\u5c06 Colocation \u8868\u7684\u5206\u7247\u5747\u5300\u5206\u5e03\u5728\u6240\u6709 BE \u8282\u70b9\u4e0a\u3002\u5bf9\u4e8e\u666e\u901a\u8868\u7684\u526f\u672c\u5747\u8861\uff0c\u662f\u4ee5\u5355\u526f\u672c\u4e3a\u7c92\u5ea6\u7684\uff0c\u5373\u5355\u72ec\u4e3a\u6bcf\u4e00\u4e2a\u526f\u672c\u5bfb\u627e\u8d1f\u8f7d\u8f83\u4f4e\u7684 BE \u8282\u70b9\u5373\u53ef\u3002\u800c Colocation \u8868\u7684\u5747\u8861\u662f Bucket \u7ea7\u522b\u7684\uff0c\u5373\u4e00\u4e2a Bucket \u5185\u7684\u6240\u6709\u526f\u672c\u90fd\u4f1a\u4e00\u8d77\u8fc1\u79fb\u3002\u6211\u4eec\u91c7\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u5747\u8861\u7b97\u6cd5\uff0c\u5373\u5728\u4e0d\u8003\u8651\u526f\u672c\u5b9e\u9645\u5927\u5c0f\uff0c\u800c\u53ea\u6839\u636e\u526f\u672c\u6570\u91cf\uff0c\u5c06 BucketsSequence \u5747\u5300\u7684\u5206\u5e03\u5728\u6240\u6709 BE \u4e0a\u3002\u5177\u4f53\u7b97\u6cd5\u53ef\u4ee5\u53c2\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},"ColocateTableBalancer.java")," \u4e2d\u7684\u4ee3\u7801\u6ce8\u91ca\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce81\uff1a\u5f53\u524d\u7684 Colocation \u526f\u672c\u5747\u8861\u548c\u4fee\u590d\u7b97\u6cd5\uff0c\u5bf9\u4e8e\u5f02\u6784\u90e8\u7f72\u7684 Doris \u96c6\u7fa4\u6548\u679c\u53ef\u80fd\u4e0d\u4f73\u3002\u6240\u8c13\u5f02\u6784\u90e8\u7f72\uff0c\u5373 BE \u8282\u70b9\u7684\u78c1\u76d8\u5bb9\u91cf\u3001\u6570\u91cf\u3001\u78c1\u76d8\u7c7b\u578b\uff08SSD \u548c HDD\uff09\u4e0d\u4e00\u81f4\u3002\u5728\u5f02\u6784\u90e8\u7f72\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u51fa\u73b0\u5c0f\u5bb9\u91cf\u7684 BE \u8282\u70b9\u548c\u5927\u5bb9\u91cf\u7684 BE \u8282\u70b9\u5b58\u50a8\u4e86\u76f8\u540c\u7684\u526f\u672c\u6570\u91cf\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u6ce82\uff1a\u5f53\u4e00\u4e2a Group \u5904\u4e8e Unstable \u72b6\u6001\u65f6\uff0c\u5176\u4e2d\u7684\u8868\u7684 Join \u5c06\u9000\u5316\u4e3a\u666e\u901a Join\u3002\u6b64\u65f6\u53ef\u80fd\u4f1a\u6781\u5927\u964d\u4f4e\u96c6\u7fa4\u7684\u67e5\u8be2\u6027\u80fd\u3002\u5982\u679c\u4e0d\u5e0c\u671b\u7cfb\u7edf\u81ea\u52a8\u5747\u8861\uff0c\u53ef\u4ee5\u8bbe\u7f6e FE \u7684\u914d\u7f6e\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"disable_colocate_balance")," \u6765\u7981\u6b62\u81ea\u52a8\u5747\u8861\u3002\u7136\u540e\u5728\u5408\u9002\u7684\u65f6\u95f4\u6253\u5f00\u5373\u53ef\u3002\uff08\u5177\u4f53\u53c2\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u9ad8\u7ea7\u64cd\u4f5c")," \u4e00\u8282\uff09")),(0,a.kt)("h2",{id:"\u67e5\u8be2"},"\u67e5\u8be2"),(0,a.kt)("p",null,"\u5bf9 Colocation \u8868\u7684\u67e5\u8be2\u65b9\u5f0f\u548c\u666e\u901a\u8868\u4e00\u6837\uff0c\u7528\u6237\u65e0\u9700\u611f\u77e5 Colocation \u5c5e\u6027\u3002\u5982\u679c Colocation \u8868\u6240\u5728\u7684 Group \u5904\u4e8e Unstable \u72b6\u6001\uff0c\u5c06\u81ea\u52a8\u9000\u5316\u4e3a\u666e\u901a Join\u3002"),(0,a.kt)("p",null,"\u4e3e\u4f8b\u8bf4\u660e\uff1a"),(0,a.kt)("p",null,"\u88681\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `tbl1` (\n    `k1` date NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` int(11) SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nPARTITION BY RANGE(`k1`)\n(\n    PARTITION p1 VALUES LESS THAN (\'2019-05-31\'),\n    PARTITION p2 VALUES LESS THAN (\'2019-06-30\')\n)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n')),(0,a.kt)("p",null,"\u88682\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `tbl2` (\n    `k1` datetime NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` double SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n')),(0,a.kt)("p",null,"\u67e5\u770b\u67e5\u8be2\u8ba1\u5212\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DESC SELECT * FROM tbl1 INNER JOIN tbl2 ON (tbl1.k2 = tbl2.k2);\n\n+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN                           |\n|   |  hash predicates:                              |\n|   |  colocate: true                                |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----1:OlapScanNode                              |\n|   |       TABLE: tbl2                              |\n|   |       PREAGGREGATION: OFF. Reason: null        |\n|   |       partitions=0/1                           |\n|   |       rollup: null                             |\n|   |       buckets=0/0                              |\n|   |       cardinality=-1                           |\n|   |       avgRowSize=0.0                           |\n|   |       numNodes=0                               |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n+----------------------------------------------------+\n")),(0,a.kt)("p",null,"\u5982\u679c Colocation Join \u751f\u6548\uff0c\u5219 Hash Join \u8282\u70b9\u4f1a\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"colocate: true"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u751f\u6548\uff0c\u5219\u67e5\u8be2\u8ba1\u5212\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN (BROADCAST)               |\n|   |  hash predicates:                              |\n|   |  colocate: false, reason: group is not stable  |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----3:EXCHANGE                                  |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n|                                                    |\n| PLAN FRAGMENT 1                                    |\n|  OUTPUT EXPRS:                                     |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   STREAM DATA SINK                                 |\n|     EXCHANGE ID: 03                                |\n|     UNPARTITIONED                                  |\n|                                                    |\n|   1:OlapScanNode                                   |\n|      TABLE: tbl2                                   |\n|      PREAGGREGATION: OFF. Reason: null             |\n|      partitions=0/1                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 1                                  |\n+----------------------------------------------------+\n")),(0,a.kt)("p",null,"HASH JOIN \u8282\u70b9\u4f1a\u663e\u793a\u5bf9\u5e94\u539f\u56e0\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"colocate: false, reason: group is not stable"),"\u3002\u540c\u65f6\u4f1a\u6709\u4e00\u4e2a EXCHANGE \u8282\u70b9\u751f\u6210\u3002"),(0,a.kt)("h2",{id:"\u9ad8\u7ea7\u64cd\u4f5c"},"\u9ad8\u7ea7\u64cd\u4f5c"),(0,a.kt)("h3",{id:"fe-\u914d\u7f6e\u9879"},"FE \u914d\u7f6e\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"disable_colocate_relocate"),(0,a.kt)("p",{parentName:"li"},"\u662f\u5426\u5173\u95ed Doris \u7684\u81ea\u52a8 Colocation \u526f\u672c\u4fee\u590d\u3002\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u4e0d\u5173\u95ed\u3002\u8be5\u53c2\u6570\u53ea\u5f71\u54cd Colocation \u8868\u7684\u526f\u672c\u4fee\u590d\uff0c\u4e0d\u5f71\u54cd\u666e\u901a\u8868\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"disable_colocate_balance"),(0,a.kt)("p",{parentName:"li"},"\u662f\u5426\u5173\u95ed Doris \u7684\u81ea\u52a8 Colocation \u526f\u672c\u5747\u8861\u3002\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u4e0d\u5173\u95ed\u3002\u8be5\u53c2\u6570\u53ea\u5f71\u54cd Colocation \u8868\u7684\u526f\u672c\u5747\u8861\uff0c\u4e0d\u5f71\u54cd\u666e\u901a\u8868\u3002"))),(0,a.kt)("p",null,"\u4ee5\u4e0a\u53c2\u6570\u53ef\u4ee5\u52a8\u6001\u4fee\u6539\uff0c\u8bbe\u7f6e\u65b9\u5f0f\u8bf7\u53c2\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},"HELP ADMIN SHOW CONFIG;")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"HELP ADMIN SET CONFIG;"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"disable_colocate_join"),(0,a.kt)("p",{parentName:"li"},"\u662f\u5426\u5173\u95ed Colocation Join \u529f\u80fd\u3002\u5728 0.10 \u53ca\u4e4b\u524d\u7684\u7248\u672c\uff0c\u9ed8\u8ba4\u4e3a true\uff0c\u5373\u5173\u95ed\u3002\u5728\u4e4b\u540e\u7684\u67d0\u4e2a\u7248\u672c\u4e2d\u5c06\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u5f00\u542f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"use_new_tablet_scheduler"),(0,a.kt)("p",{parentName:"li"},"\u5728 0.10 \u53ca\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u65b0\u7684\u526f\u672c\u8c03\u5ea6\u903b\u8f91\u4e0e Colocation Join \u529f\u80fd\u4e0d\u517c\u5bb9\uff0c\u6240\u4ee5\u5728 0.10 \u53ca\u4e4b\u524d\u7248\u672c\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"disable_colocate_join = false"),"\uff0c\u5219\u9700\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"use_new_tablet_scheduler = false"),"\uff0c\u5373\u5173\u95ed\u65b0\u7684\u526f\u672c\u8c03\u5ea6\u5668\u3002\u4e4b\u540e\u7684\u7248\u672c\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"use_new_tablet_scheduler")," \u5c06\u8861\u4e3a true\u3002"))),(0,a.kt)("h3",{id:"http-restful-api"},"HTTP Restful API"),(0,a.kt)("p",null,"Doris \u63d0\u4f9b\u4e86\u51e0\u4e2a\u548c Colocation Join \u6709\u5173\u7684 HTTP Restful API\uff0c\u7528\u4e8e\u67e5\u770b\u548c\u4fee\u6539 Colocation Group\u3002"),(0,a.kt)("p",null,"\u8be5 API \u5b9e\u73b0\u5728 FE \u7aef\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"fe_host:fe_http_port")," \u8fdb\u884c\u8bbf\u95ee\u3002\u9700\u8981 ADMIN \u6743\u9650\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u96c6\u7fa4\u7684\u5168\u90e8 Colocation \u4fe1\u606f"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},'GET /api/colocate\n\n\u8fd4\u56de\u4ee5 Json \u683c\u5f0f\u8868\u793a\u5185\u90e8 Colocation \u4fe1\u606f\u3002\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "infos": [\n            ["10003.12002", "10003_group1", "10037, 10043", "1", "1", "int(11)", "true"]\n        ],\n        "unstableGroupIds": [],\n        "allGroupIds": [{\n            "dbId": 10003,\n            "grpId": 12002\n        }]\n    },\n    "count": 0\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06 Group \u6807\u8bb0\u4e3a Stable \u6216 Unstable"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6807\u8bb0\u4e3a Stable"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"POST /api/colocate/group_stable?db_id=10005&group_id=10008\n\n\u8fd4\u56de\uff1a200\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6807\u8bb0\u4e3a Unstable"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"DELETE /api/colocate/group_stable?db_id=10005&group_id=10008\n\n\u8fd4\u56de\uff1a200\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bbe\u7f6e Group \u7684\u6570\u636e\u5206\u5e03"),(0,a.kt)("p",{parentName:"li"},"\u8be5\u63a5\u53e3\u53ef\u4ee5\u5f3a\u5236\u8bbe\u7f6e\u67d0\u4e00 Group \u7684\u6570\u5206\u5e03\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"POST /api/colocate/bucketseq?db_id=10005&group_id=10008\n\nBody:\n[[10004,10002],[10003,10002],[10002,10004],[10003,10002],[10002,10004],[10003,10002],[10003,10004],[10003,10004],[10003,10004],[10002,10004]]\n\n\u8fd4\u56de 200\n")),(0,a.kt)("p",{parentName:"li"},"\u5176\u4e2d Body \u662f\u4ee5\u5d4c\u5957\u6570\u7ec4\u8868\u793a\u7684 BucketsSequence \u4ee5\u53ca\u6bcf\u4e2a Bucket \u4e2d\u5206\u7247\u5206\u5e03\u6240\u5728 BE \u7684 id\u3002"),(0,a.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff0c\u4f7f\u7528\u8be5\u547d\u4ee4\uff0c\u53ef\u80fd\u9700\u8981\u5c06 FE \u7684\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"disable_colocate_relocate")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"disable_colocate_balance")," \u8bbe\u4e3a true\u3002\u5373\u5173\u95ed\u7cfb\u7edf\u81ea\u52a8\u7684 Colocation \u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u3002\u5426\u5219\u53ef\u80fd\u5728\u4fee\u6539\u540e\uff0c\u4f1a\u88ab\u7cfb\u7edf\u81ea\u52a8\u91cd\u7f6e\u3002"))))}k.isMDXComponent=!0}}]);