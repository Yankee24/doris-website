"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[86549],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=l,k=d["".concat(o,".").concat(m)]||d[m]||s[m]||r;return a?n.createElement(k,c(c({ref:t},p),{},{components:a})):n.createElement(k,c({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,c=new Array(r);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,c[1]=i;for(var u=2;u<r;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u5206\u533a\u7f13\u5b58",language:"zh-CN"},c=void 0,i={unversionedId:"advanced/cache/partition-cache",id:"version-dev/advanced/cache/partition-cache",title:"\u5206\u533a\u7f13\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/advanced/cache/partition-cache.md",sourceDirName:"advanced/cache",slug:"/advanced/cache/partition-cache",permalink:"/zh-CN/docs/dev/advanced/cache/partition-cache",draft:!1,tags:[],version:"dev",frontMatter:{title:"\u5206\u533a\u7f13\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"Bucket Shuffle Join",permalink:"/zh-CN/docs/dev/advanced/join-optimization/bucket-shuffle-join"},next:{title:"Query Cache",permalink:"/zh-CN/docs/dev/advanced/cache/query-cache"}},o={},u=[{value:"\u9700\u6c42\u573a\u666f",id:"\u9700\u6c42\u573a\u666f",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"SQLCache",id:"sqlcache",level:2},{value:"PartitionCache",id:"partitioncache",level:2},{value:"\u8bbe\u8ba1\u539f\u7406",id:"\u8bbe\u8ba1\u539f\u7406",level:3},{value:"\u4e00\u4e9b\u9650\u5236",id:"\u4e00\u4e9b\u9650\u5236",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u5f00\u542fSQLCache",id:"\u5f00\u542fsqlcache",level:3},{value:"\u5f00\u542fPartitionCache",id:"\u5f00\u542fpartitioncache",level:3},{value:"\u76d1\u63a7",id:"\u76d1\u63a7",level:3},{value:"\u4f18\u5316\u53c2\u6570",id:"\u4f18\u5316\u53c2\u6570",level:3},{value:"\u672a\u5c3d\u4e8b\u9879",id:"\u672a\u5c3d\u4e8b\u9879",level:2}],p={toc:u};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5206\u533a\u7f13\u5b58"},"\u5206\u533a\u7f13\u5b58"),(0,l.kt)("h2",{id:"\u9700\u6c42\u573a\u666f"},"\u9700\u6c42\u573a\u666f"),(0,l.kt)("p",null,"\u5927\u90e8\u5206\u6570\u636e\u5206\u6790\u573a\u666f\u662f\u5199\u5c11\u8bfb\u591a\uff0c\u6570\u636e\u5199\u5165\u4e00\u6b21\uff0c\u591a\u6b21\u9891\u7e41\u8bfb\u53d6\uff0c\u6bd4\u5982\u4e00\u5f20\u62a5\u8868\u6d89\u53ca\u7684\u7ef4\u5ea6\u548c\u6307\u6807\uff0c\u6570\u636e\u5728\u51cc\u6668\u4e00\u6b21\u6027\u8ba1\u7b97\u597d\uff0c\u4f46\u6bcf\u5929\u6709\u6570\u767e\u751a\u81f3\u6570\u5343\u6b21\u7684\u9875\u9762\u8bbf\u95ee\uff0c\u56e0\u6b64\u975e\u5e38\u9002\u5408\u628a\u7ed3\u679c\u96c6\u7f13\u5b58\u8d77\u6765\u3002\u5728\u6570\u636e\u5206\u6790\u6216BI\u5e94\u7528\u4e2d\uff0c\u5b58\u5728\u4e0b\u9762\u7684\u4e1a\u52a1\u573a\u666f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u9ad8\u5e76\u53d1\u573a\u666f"),"\uff0cDoris\u53ef\u4ee5\u8f83\u597d\u7684\u652f\u6301\u9ad8\u5e76\u53d1\uff0c\u4f46\u5355\u53f0\u670d\u52a1\u5668\u65e0\u6cd5\u627f\u8f7d\u592a\u9ad8\u7684QPS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u590d\u6742\u56fe\u8868\u7684\u770b\u677f"),"\uff0c\u590d\u6742\u7684Dashboard\u6216\u8005\u5927\u5c4f\u7c7b\u5e94\u7528\uff0c\u6570\u636e\u6765\u81ea\u591a\u5f20\u8868\uff0c\u6bcf\u4e2a\u9875\u9762\u6709\u6570\u5341\u4e2a\u67e5\u8be2\uff0c\u867d\u7136\u6bcf\u4e2a\u67e5\u8be2\u53ea\u6709\u6570\u5341\u6beb\u79d2\uff0c\u4f46\u662f\u603b\u4f53\u67e5\u8be2\u65f6\u95f4\u4f1a\u5728\u6570\u79d2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8d8b\u52bf\u5206\u6790"),"\uff0c\u7ed9\u5b9a\u65e5\u671f\u8303\u56f4\u7684\u67e5\u8be2\uff0c\u6307\u6807\u6309\u65e5\u663e\u793a\uff0c\u6bd4\u5982\u67e5\u8be2\u6700\u8fd17\u5929\u5185\u7684\u7528\u6237\u6570\u7684\u8d8b\u52bf\uff0c\u8fd9\u7c7b\u67e5\u8be2\u6570\u636e\u91cf\u5927\uff0c\u67e5\u8be2\u8303\u56f4\u5e7f\uff0c\u67e5\u8be2\u65f6\u95f4\u5f80\u5f80\u9700\u8981\u6570\u5341\u79d2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7528\u6237\u91cd\u590d\u67e5\u8be2"),"\uff0c\u5982\u679c\u4ea7\u54c1\u6ca1\u6709\u9632\u91cd\u5237\u673a\u5236\uff0c\u7528\u6237\u56e0\u624b\u8bef\u6216\u5176\u4ed6\u539f\u56e0\u91cd\u590d\u5237\u65b0\u9875\u9762\uff0c\u5bfc\u81f4\u63d0\u4ea4\u5927\u91cf\u7684\u91cd\u590d\u7684SQL")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u56db\u79cd\u573a\u666f\uff0c\u5728\u5e94\u7528\u5c42\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u628a\u67e5\u8be2\u7ed3\u679c\u653e\u5230Redis\u4e2d\uff0c\u5468\u671f\u6027\u7684\u66f4\u65b0\u7f13\u5b58\u6216\u8005\u7528\u6237\u624b\u5de5\u5237\u65b0\u7f13\u5b58\uff0c\u4f46\u662f\u8fd9\u4e2a\u65b9\u6848\u6709\u5982\u4e0b\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6570\u636e\u4e0d\u4e00\u81f4"),"\uff0c\u65e0\u6cd5\u611f\u77e5\u6570\u636e\u7684\u66f4\u65b0\uff0c\u5bfc\u81f4\u7528\u6237\u7ecf\u5e38\u770b\u5230\u65e7\u7684\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u547d\u4e2d\u7387\u4f4e"),"\uff0c\u7f13\u5b58\u6574\u4e2a\u67e5\u8be2\u7ed3\u679c\uff0c\u5982\u679c\u6570\u636e\u5b9e\u65f6\u5199\u5165\uff0c\u7f13\u5b58\u9891\u7e41\u5931\u6548\uff0c\u547d\u4e2d\u7387\u4f4e\u4e14\u7cfb\u7edf\u8d1f\u8f7d\u8f83\u91cd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u989d\u5916\u6210\u672c"),"\uff0c\u5f15\u5165\u5916\u90e8\u7f13\u5b58\u7ec4\u4ef6\uff0c\u4f1a\u5e26\u6765\u7cfb\u7edf\u590d\u6742\u5ea6\uff0c\u589e\u52a0\u989d\u5916\u6210\u672c")),(0,l.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"\u672c\u5206\u533a\u7f13\u5b58\u7b56\u7565\u53ef\u4ee5\u89e3\u51b3\u4e0a\u9762\u7684\u95ee\u9898\uff0c\u4f18\u5148\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u7ec6\u5316\u7f13\u5b58\u7c92\u5ea6\uff0c\u63d0\u5347\u547d\u4e2d\u7387\uff0c\u56e0\u6b64\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u65e0\u9700\u62c5\u5fc3\u6570\u636e\u4e00\u81f4\u6027\uff0c\u901a\u8fc7\u7248\u672c\u6765\u63a7\u5236\u7f13\u5b58\u5931\u6548\uff0c\u7f13\u5b58\u7684\u6570\u636e\u548c\u4eceBE\u4e2d\u67e5\u8be2\u7684\u6570\u636e\u662f\u4e00\u81f4\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u989d\u5916\u7684\u7ec4\u4ef6\u548c\u6210\u672c\uff0c\u7f13\u5b58\u7ed3\u679c\u5b58\u50a8\u5728BE\u7684\u5185\u5b58\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8c03\u6574\u7f13\u5b58\u5185\u5b58\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u4e24\u79cd\u7f13\u5b58\u7b56\u7565\uff0cSQLCache\u548cPartitionCache\uff0c\u540e\u8005\u7f13\u5b58\u7c92\u5ea6\u66f4\u7ec6"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e00\u81f4\u6027\u54c8\u5e0c\u89e3\u51b3BE\u8282\u70b9\u4e0a\u4e0b\u7ebf\u7684\u95ee\u9898\uff0cBE\u4e2d\u7684\u7f13\u5b58\u7b97\u6cd5\u662f\u6539\u8fdb\u7684LRU")),(0,l.kt)("h2",{id:"sqlcache"},"SQLCache"),(0,l.kt)("p",null,"SQLCache\u6309SQL\u7684\u7b7e\u540d\u3001\u67e5\u8be2\u7684\u8868\u7684\u5206\u533aID\u3001\u5206\u533a\u6700\u65b0\u7248\u672c\u6765\u5b58\u50a8\u548c\u83b7\u53d6\u7f13\u5b58\u3002\u4e09\u8005\u7ec4\u5408\u786e\u5b9a\u4e00\u4e2a\u7f13\u5b58\u6570\u636e\u96c6\uff0c\u4efb\u4f55\u4e00\u4e2a\u53d8\u5316\u4e86\uff0c\u5982SQL\u6709\u53d8\u5316\uff0c\u5982\u67e5\u8be2\u5b57\u6bb5\u6216\u6761\u4ef6\u4e0d\u4e00\u6837\uff0c\u6216\u6570\u636e\u66f4\u65b0\u540e\u7248\u672c\u53d8\u5316\u4e86\uff0c\u4f1a\u5bfc\u81f4\u547d\u4e2d\u4e0d\u4e86\u7f13\u5b58\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u591a\u5f20\u8868Join\uff0c\u4f7f\u7528\u6700\u8fd1\u66f4\u65b0\u7684\u5206\u533aID\u548c\u6700\u65b0\u7684\u7248\u672c\u53f7\uff0c\u5982\u679c\u5176\u4e2d\u4e00\u5f20\u8868\u66f4\u65b0\u4e86\uff0c\u4f1a\u5bfc\u81f4\u5206\u533aID\u6216\u7248\u672c\u53f7\u4e0d\u4e00\u6837\uff0c\u4e5f\u4e00\u6837\u547d\u4e2d\u4e0d\u4e86\u7f13\u5b58\u3002"),(0,l.kt)("p",null,"SQLCache\uff0c\u66f4\u9002\u5408T+1\u66f4\u65b0\u7684\u573a\u666f\uff0c\u51cc\u6668\u6570\u636e\u66f4\u65b0\uff0c\u9996\u6b21\u67e5\u8be2\u4eceBE\u4e2d\u83b7\u53d6\u7ed3\u679c\u653e\u5165\u5230\u7f13\u5b58\u4e2d\uff0c\u540e\u7eed\u76f8\u540c\u67e5\u8be2\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u3002\u5b9e\u65f6\u66f4\u65b0\u6570\u636e\u4e5f\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f46\u662f\u53ef\u80fd\u5b58\u5728\u547d\u4e2d\u7387\u4f4e\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0bPartitionCache\u3002"),(0,l.kt)("h2",{id:"partitioncache"},"PartitionCache"),(0,l.kt)("h3",{id:"\u8bbe\u8ba1\u539f\u7406"},"\u8bbe\u8ba1\u539f\u7406"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"SQL\u53ef\u4ee5\u5e76\u884c\u62c6\u5206\uff0cQ = Q1 \u222a Q2 ... \u222a Qn\uff0cR= R1 \u222a R2 ... \u222a Rn\uff0cQ\u4e3a\u67e5\u8be2\u8bed\u53e5\uff0cR\u4e3a\u7ed3\u679c\u96c6"),(0,l.kt)("li",{parentName:"ol"},"\u62c6\u5206\u4e3a\u53ea\u8bfb\u5206\u533a\u548c\u53ef\u66f4\u65b0\u5206\u533a\uff0c\u53ea\u8bfb\u5206\u533a\u7f13\u5b58\uff0c\u66f4\u65b0\u5206\u533a\u4e0d\u7f13\u5b58")),(0,l.kt)("p",null,"\u5982\u4e0a\uff0c\u67e5\u8be2\u6700\u8fd17\u5929\u7684\u6bcf\u5929\u7528\u6237\u6570\uff0c\u5982\u6309\u65e5\u671f\u5206\u533a\uff0c\u6570\u636e\u53ea\u5199\u5f53\u5929\u5206\u533a\uff0c\u5f53\u5929\u4e4b\u5916\u7684\u5176\u4ed6\u5206\u533a\u7684\u6570\u636e\uff0c\u90fd\u662f\u56fa\u5b9a\u4e0d\u53d8\u7684\uff0c\u5728\u76f8\u540c\u7684\u67e5\u8be2SQL\u4e0b\uff0c\u67e5\u8be2\u67d0\u4e2a\u4e0d\u66f4\u65b0\u5206\u533a\u7684\u6307\u6807\u90fd\u662f\u56fa\u5b9a\u7684\u3002\u5982\u4e0b\uff0c\u57282020-03-09\u5f53\u5929\u67e5\u8be2\u524d7\u5929\u7684\u7528\u6237\u6570\uff0c2020-03-03\u81f32020-03-07\u7684\u6570\u636e\u6765\u81ea\u7f13\u5b58\uff0c2020-03-08\u7b2c\u4e00\u6b21\u67e5\u8be2\u6765\u81ea\u5206\u533a\uff0c\u540e\u7eed\u7684\u67e5\u8be2\u6765\u81ea\u7f13\u5b58\uff0c2020-03-09\u56e0\u4e3a\u5f53\u5929\u5728\u4e0d\u505c\u5199\u5165\uff0c\u6240\u4ee5\u6765\u81ea\u5206\u533a\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u67e5\u8be2N\u5929\u7684\u6570\u636e\uff0c\u6570\u636e\u66f4\u65b0\u6700\u8fd1\u7684D\u5929\uff0c\u6bcf\u5929\u53ea\u662f\u65e5\u671f\u8303\u56f4\u4e0d\u4e00\u6837\u76f8\u4f3c\u7684\u67e5\u8be2\uff0c\u53ea\u9700\u8981\u67e5\u8be2D\u4e2a\u5206\u533a\u5373\u53ef\uff0c\u5176\u4ed6\u90e8\u5206\u90fd\u6765\u81ea\u7f13\u5b58\uff0c\u53ef\u4ee5\u6709\u6548\u964d\u4f4e\u96c6\u7fa4\u8d1f\u8f7d\uff0c\u51cf\u5c11\u67e5\u8be2\u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> SELECT eventdate,count(userid) FROM testdb.appevent WHERE eventdate>="2020-03-03" AND eventdate<="2020-03-09" GROUP BY eventdate ORDER BY eventdate;\n+------------+-----------------+\n| eventdate  | count(`userid`) |\n+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n| 2020-03-08 |              40 | //\u7b2c\u4e00\u6b21\u6765\u81ea\u5206\u533a\uff0c\u540e\u7eed\u6765\u81ea\u7f13\u5b58\n| 2020-03-09 |              25 | //\u6765\u81ea\u5206\u533a\n+------------+-----------------+\n7 rows in set (0.02 sec)\n')),(0,l.kt)("p",null,"\u5728PartitionCache\u4e2d\uff0c\u7f13\u5b58\u7b2c\u4e00\u7ea7Key\u662f\u53bb\u6389\u4e86\u5206\u533a\u6761\u4ef6\u540e\u7684SQL\u7684128\u4f4dMD5\u7b7e\u540d\uff0c\u4e0b\u9762\u662f\u6539\u5199\u540e\u7684\u5f85\u7b7e\u540d\u7684SQL\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT eventdate,count(userid) FROM testdb.appevent GROUP BY eventdate ORDER BY eventdate;\n")),(0,l.kt)("p",null,"\u7f13\u5b58\u7684\u7b2c\u4e8c\u7ea7Key\u662f\u67e5\u8be2\u7ed3\u679c\u96c6\u7684\u5206\u533a\u5b57\u6bb5\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u4e0a\u9762\u67e5\u8be2\u7ed3\u679c\u7684eventdate\u5217\u7684\u5185\u5bb9\uff0c\u4e8c\u7ea7Key\u7684\u9644\u5c5e\u4fe1\u606f\u662f\u5206\u533a\u7684\u7248\u672c\u53f7\u548c\u7248\u672c\u66f4\u65b0\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u6f14\u793a\u4e0a\u9762SQL\u57282020-03-09\u5f53\u5929\u7b2c\u4e00\u6b21\u6267\u884c\u7684\u6d41\u7a0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u6570\u636e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n+------------+-----------------+\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4eceBE\u4e2d\u83b7\u53d6\u6570\u636e\u7684SQL\u548c\u6570\u636e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT eventdate,count(userid) FROM testdb.appevent WHERE eventdate>="2020-03-08" AND eventdate<="2020-03-09" GROUP BY eventdate ORDER BY eventdate;\n\n+------------+-----------------+\n| 2020-03-08 |              40 |\n+------------+-----------------+\n| 2020-03-09 |              25 | \n+------------+-----------------+\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6700\u540e\u53d1\u9001\u7ed9\u7ec8\u7aef\u7684\u6570\u636e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+------------+-----------------+\n| eventdate  | count(`userid`) |\n+------------+-----------------+\n| 2020-03-03 |              15 |\n| 2020-03-04 |              20 |\n| 2020-03-05 |              25 |\n| 2020-03-06 |              30 |\n| 2020-03-07 |              35 |\n| 2020-03-08 |              40 |\n| 2020-03-09 |              25 |\n+------------+-----------------+\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53d1\u9001\u7ed9\u7f13\u5b58\u7684\u6570\u636e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+------------+-----------------+\n| 2020-03-08 |              40 |\n+------------+-----------------+\n")),(0,l.kt)("p",null,"Partition\u7f13\u5b58\uff0c\u9002\u5408\u6309\u65e5\u671f\u5206\u533a\uff0c\u90e8\u5206\u5206\u533a\u5b9e\u65f6\u66f4\u65b0\uff0c\u67e5\u8be2SQL\u8f83\u4e3a\u56fa\u5b9a\u3002"),(0,l.kt)("p",null,"\u5206\u533a\u5b57\u6bb5\u4e5f\u53ef\u4ee5\u662f\u5176\u4ed6\u5b57\u6bb5\uff0c\u4f46\u662f\u9700\u8981\u4fdd\u8bc1\u53ea\u6709\u5c11\u91cf\u5206\u533a\u66f4\u65b0\u3002"),(0,l.kt)("h3",{id:"\u4e00\u4e9b\u9650\u5236"},"\u4e00\u4e9b\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301OlapTable\uff0c\u5176\u4ed6\u5b58\u50a8\u5982MySQL\u7684\u8868\u6ca1\u6709\u7248\u672c\u4fe1\u606f\uff0c\u65e0\u6cd5\u611f\u77e5\u6570\u636e\u662f\u5426\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u6309\u5206\u533a\u5b57\u6bb5\u5206\u7ec4\uff0c\u4e0d\u652f\u6301\u6309\u5176\u4ed6\u5b57\u6bb5\u5206\u7ec4\uff0c\u6309\u5176\u4ed6\u5b57\u6bb5\u5206\u7ec4\uff0c\u8be5\u5206\u7ec4\u6570\u636e\u90fd\u6709\u53ef\u80fd\u88ab\u66f4\u65b0\uff0c\u4f1a\u5bfc\u81f4\u7f13\u5b58\u90fd\u5931\u6548"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u7ed3\u679c\u96c6\u7684\u524d\u534a\u90e8\u5206\u3001\u540e\u534a\u90e8\u5206\u4ee5\u53ca\u5168\u90e8\u547d\u4e2d\u7f13\u5b58\uff0c\u4e0d\u652f\u6301\u7ed3\u679c\u96c6\u88ab\u7f13\u5b58\u6570\u636e\u5206\u5272\u6210\u51e0\u4e2a\u90e8\u5206")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("h3",{id:"\u5f00\u542fsqlcache"},"\u5f00\u542fSQLCache"),(0,l.kt)("p",null,"\u786e\u4fddfe.conf\u7684cache_enable_sql_mode=true\uff08\u9ed8\u8ba4\u662ftrue\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_enable_sql_mode=true\n")),(0,l.kt)("p",null,"\u5728MySQL\u547d\u4ee4\u884c\u4e2d\u8bbe\u7f6e\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> set [global] enable_sql_cache=true;\n")),(0,l.kt)("p",null,"\u6ce8\uff1aglobal\u662f\u5168\u5c40\u53d8\u91cf\uff0c\u4e0d\u52a0\u6307\u5f53\u524d\u4f1a\u8bdd\u53d8\u91cf"),(0,l.kt)("h3",{id:"\u5f00\u542fpartitioncache"},"\u5f00\u542fPartitionCache"),(0,l.kt)("p",null,"\u786e\u4fddfe.conf\u7684cache_enable_partition_mode=true(\u9ed8\u8ba4\u662ftrue)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_enable_partition_mode=true\n")),(0,l.kt)("p",null,"\u5728MySQL\u547d\u4ee4\u884c\u4e2d\u8bbe\u7f6e\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> set [global] enable_partition_cache=true;\n")),(0,l.kt)("p",null,"\u5982\u679c\u540c\u65f6\u5f00\u542f\u4e86\u4e24\u4e2a\u7f13\u5b58\u7b56\u7565\uff0c\u4e0b\u9762\u7684\u53c2\u6570\uff0c\u9700\u8981\u6ce8\u610f\u4e00\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"cache_last_version_interval_second=900\n")),(0,l.kt)("p",null,"\u5982\u679c\u5206\u533a\u7684\u6700\u65b0\u7248\u672c\u7684\u65f6\u95f4\u79bb\u73b0\u5728\u7684\u95f4\u9694\uff0c\u5927\u4e8ecache_last_version_interval_second\uff0c\u5219\u4f1a\u4f18\u5148\u628a\u6574\u4e2a\u67e5\u8be2\u7ed3\u679c\u7f13\u5b58\u3002\u5982\u679c\u5c0f\u4e8e\u8fd9\u4e2a\u95f4\u9694\uff0c\u5982\u679c\u7b26\u5408PartitionCache\u7684\u6761\u4ef6\uff0c\u5219\u6309PartitionCache\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"\u76d1\u63a7"},"\u76d1\u63a7"),(0,l.kt)("p",null,"FE\u7684\u76d1\u63a7\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"query_table            //Query\u4e2d\u6709\u8868\u7684\u6570\u91cf\nquery_olap_table       //Query\u4e2d\u6709Olap\u8868\u7684\u6570\u91cf\ncache_mode_sql         //\u8bc6\u522b\u7f13\u5b58\u6a21\u5f0f\u4e3asql\u7684Query\u6570\u91cf\ncache_hit_sql          //\u6a21\u5f0f\u4e3asql\u7684Query\u547d\u4e2dCache\u7684\u6570\u91cf\nquery_mode_partition   //\u8bc6\u522b\u7f13\u5b58\u6a21\u5f0f\u4e3aPartition\u7684Query\u6570\u91cf\ncache_hit_partition    //\u901a\u8fc7Partition\u547d\u4e2d\u7684Query\u6570\u91cf\npartition_all          //Query\u4e2d\u626b\u63cf\u7684\u6240\u6709\u5206\u533a\npartition_hit          //\u901a\u8fc7Cache\u547d\u4e2d\u7684\u5206\u533a\u6570\u91cf\n\nCache\u547d\u4e2d\u7387     = \uff08cache_hit_sql + cache_hit_partition) / query_olap_table\nPartition\u547d\u4e2d\u7387 = partition_hit / partition_all\n")),(0,l.kt)("p",null,"BE\u7684\u76d1\u63a7\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"query_cache_memory_total_byte       //Cache\u5185\u5b58\u5927\u5c0f\nquery_query_cache_sql_total_count   //Cache\u7684SQL\u7684\u6570\u91cf\nquery_cache_partition_total_count   //Cache\u5206\u533a\u6570\u91cf\n\nSQL\u5e73\u5747\u6570\u636e\u5927\u5c0f       = cache_memory_total / cache_sql_total\nPartition\u5e73\u5747\u6570\u636e\u5927\u5c0f = cache_memory_total / cache_partition_total\n")),(0,l.kt)("p",null,"\u5176\u4ed6\u76d1\u63a7\uff1a \u53ef\u4ee5\u4eceGrafana\u4e2d\u67e5\u770bBE\u8282\u70b9\u7684CPU\u548c\u5185\u5b58\u6307\u6807\uff0cQuery\u7edf\u8ba1\u4e2d\u7684Query Percentile\u7b49\u6307\u6807\uff0c\u914d\u5408Cache\u53c2\u6570\u7684\u8c03\u6574\u6765\u8fbe\u6210\u4e1a\u52a1\u76ee\u6807\u3002"),(0,l.kt)("h3",{id:"\u4f18\u5316\u53c2\u6570"},"\u4f18\u5316\u53c2\u6570"),(0,l.kt)("p",null,"FE\u7684\u914d\u7f6e\u9879cache_result_max_row_count\uff0c\u67e5\u8be2\u7ed3\u679c\u96c6\u653e\u5165\u7f13\u5b58\u7684\u6700\u5927\u884c\u6570\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\uff0c\u4f46\u5efa\u8bae\u4e0d\u8981\u8bbe\u7f6e\u8fc7\u5927\uff0c\u907f\u514d\u8fc7\u591a\u5360\u7528\u5185\u5b58\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u5927\u5c0f\u7684\u7ed3\u679c\u96c6\u4e0d\u4f1a\u88ab\u7f13\u5b58\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_result_max_row_count=3000\n")),(0,l.kt)("p",null,"BE\u6700\u5927\u5206\u533a\u6570\u91cfcache_max_partition_count\uff0c\u6307\u6bcf\u4e2aSQL\u5bf9\u5e94\u7684\u6700\u5927\u5206\u533a\u6570\uff0c\u5982\u679c\u662f\u6309\u65e5\u671f\u5206\u533a\uff0c\u80fd\u7f13\u5b582\u5e74\u591a\u7684\u6570\u636e\uff0c\u5047\u5982\u60f3\u4fdd\u7559\u66f4\u957f\u65f6\u95f4\u7684\u7f13\u5b58\uff0c\u8bf7\u628a\u8fd9\u4e2a\u53c2\u6570\u8bbe\u7f6e\u5f97\u66f4\u5927\uff0c\u540c\u65f6\u4fee\u6539cache_result_max_row_count\u7684\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"vim be/conf/be.conf\ncache_max_partition_count=1024\n")),(0,l.kt)("p",null,"BE\u4e2d\u7f13\u5b58\u5185\u5b58\u8bbe\u7f6e\uff0c\u6709\u4e24\u4e2a\u53c2\u6570query_cache_max_size\u548cquery_cache_elasticity_size\u4e24\u90e8\u5206\u7ec4\u6210\uff08\u5355\u4f4dMB\uff09\uff0c\u5185\u5b58\u8d85\u8fc7query_cache_max_size + cache_elasticity_size\u4f1a\u5f00\u59cb\u6e05\u7406\uff0c\u5e76\u628a\u5185\u5b58\u63a7\u5236\u5230query_cache_max_size\u4ee5\u4e0b\u3002\u53ef\u4ee5\u6839\u636eBE\u8282\u70b9\u6570\u91cf\uff0c\u8282\u70b9\u5185\u5b58\u5927\u5c0f\uff0c\u548c\u7f13\u5b58\u547d\u4e2d\u7387\u6765\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"query_cache_max_size_mb=256\nquery_cache_elasticity_size_mb=128\n")),(0,l.kt)("p",null,"\u8ba1\u7b97\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,"\u5047\u5982\u7f13\u5b5810000\u4e2aQuery\uff0c\u6bcf\u4e2aQuery\u7f13\u5b581000\u884c\uff0c\u6bcf\u884c\u662f128\u4e2a\u5b57\u8282\uff0c\u5206\u5e03\u572810\u53f0BE\u4e0a\uff0c\u5219\u6bcf\u4e2aBE\u9700\u8981\u7ea6128M\u5185\u5b58\n\uff0810000 ",(0,l.kt)("em",{parentName:"p"}," 1000 ")," 128/10\uff09\u3002"),(0,l.kt)("h2",{id:"\u672a\u5c3d\u4e8b\u9879"},"\u672a\u5c3d\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"T+1\u7684\u6570\u636e\uff0c\u662f\u5426\u4e5f\u53ef\u4ee5\u7528Partition\u7f13\u5b58? \u76ee\u524d\u4e0d\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u7684SQL\uff0c\u4e4b\u524d\u67e5\u8be2\u4e862\u4e2a\u6307\u6807\uff0c\u73b0\u5728\u67e5\u8be23\u4e2a\u6307\u6807\uff0c\u662f\u5426\u53ef\u4ee5\u5229\u75282\u4e2a\u6307\u6807\u7684\u7f13\u5b58\uff1f \u76ee\u524d\u4e0d\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u65e5\u671f\u5206\u533a\uff0c\u4f46\u662f\u9700\u8981\u6309\u5468\u7ef4\u5ea6\u6c47\u603b\u6570\u636e\uff0c\u662f\u5426\u53ef\u7528PartitionCache\uff1f \u76ee\u524d\u4e0d\u652f\u6301")))}s.isMDXComponent=!0}}]);