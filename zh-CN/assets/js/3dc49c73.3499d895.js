"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[19421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),k=n,d=h["".concat(s,".").concat(k)]||h[k]||c[k]||o;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},57217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Apache Doris \u5728\u4eac\u4e1c\u5ba2\u670d OLAP \u4e2d\u7684\u5e94\u7528\u5b9e\u8df5",summary:"\u672c\u6587\u4e3b\u8981\u8ba8\u8bba\u4eac\u4e1c\u5ba2\u670d\u5728\u4eba\u5de5\u54a8\u8be2\u3001\u5ba2\u6237\u4e8b\u4ef6\u5355\u3001\u552e\u540e\u670d\u52a1\u5355\u7b49\u4e13\u9898\u7684\u5b9e\u65f6\u5927\u5c4f\uff0c\u5728\u5b9e\u65f6\u548c\u79bb\u7ebf\u6570\u636e\u591a\u7ef4\u5206\u6790\u65b9\u9762\uff0c\u5982\u4f55\u5229\u7528 Doris \u8fdb\u884c\u4e1a\u52a1\u63a2\u7d22\u4e0e\u5b9e\u8df5\u3002\u8fd1\u4e9b\u5e74\u6765\uff0c\u968f\u7740\u6570\u636e\u91cf\u7206\u70b8\u5f0f\u7684\u589e\u957f\uff0c\u4ee5\u53ca\u6d77\u91cf\u6570\u636e\u8054\u673a\u5206\u6790\u9700\u6c42\u7684\u51fa\u73b0\uff0cMySQL\u3001Oracle \u7b49\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5728\u5927\u6570\u636e\u91cf\u4e0b\u9047\u5230\u74f6\u9888\uff0c\u800c Hive\u3001Kylin \u7b49\u6570\u636e\u5e93\u7f3a\u4e4f\u65f6\u6548\u6027\u3002\u4e8e\u662f Apache Doris\u3001Apache Druid\u3001ClickHouse \u7b49\u5b9e\u65f6\u5206\u6790\u578b\u6570\u636e\u5e93\u5f00\u59cb\u51fa\u73b0\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u7684\u79d2\u7ea7\u67e5\u8be2\uff0c\u66f4\u6ee1\u8db3\u5b9e\u65f6\u3001\u51c6\u5b9e\u65f6\u7684\u5206\u6790\u9700\u6c42\u3002\u79bb\u7ebf\u3001\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u767e\u82b1\u9f50\u653e\u3002\u4f46\u662f\u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\uff0c\u9762\u4e34\u4e0d\u540c\u7684\u95ee\u9898\uff0c\u6ca1\u6709\u54ea\u4e00\u79cd\u5f15\u64ce\u662f\u4e07\u80fd\u7684\u3002\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u672c\u6587\uff0c\u5bf9\u4eac\u4e1c\u5ba2\u670d\u4e1a\u52a1\u5728\u79bb\u7ebf\u4e0e\u5b9e\u65f6\u5206\u6790\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\uff0c\u80fd\u591f\u7ed9\u5230\u5927\u5bb6\u4e00\u4e9b\u542f\u53d1\uff0c\u4e5f\u5e0c\u671b\u5927\u5bb6\u591a\u591a\u4ea4\u6d41\uff0c\u7ed9\u6211\u4eec\u63d0\u51fa\u5b9d\u8d35\u7684\u5efa\u8bae",date:"2022-07-20",author:"Apache Doris",tags:["\u6700\u4f73\u5b9e\u8df5"]},l=void 0,i={permalink:"/zh-CN/blog/jd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/jd.md",title:"Apache Doris \u5728\u4eac\u4e1c\u5ba2\u670d OLAP \u4e2d\u7684\u5e94\u7528\u5b9e\u8df5",description:"\x3c!--",date:"2022-07-20T00:00:00.000Z",formattedDate:"2022\u5e747\u670820\u65e5",tags:[{label:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u6700\u4f73\u5b9e\u8df5"}],truncated:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris \u5728\u4eac\u4e1c\u5ba2\u670d OLAP \u4e2d\u7684\u5e94\u7528\u5b9e\u8df5",summary:"\u672c\u6587\u4e3b\u8981\u8ba8\u8bba\u4eac\u4e1c\u5ba2\u670d\u5728\u4eba\u5de5\u54a8\u8be2\u3001\u5ba2\u6237\u4e8b\u4ef6\u5355\u3001\u552e\u540e\u670d\u52a1\u5355\u7b49\u4e13\u9898\u7684\u5b9e\u65f6\u5927\u5c4f\uff0c\u5728\u5b9e\u65f6\u548c\u79bb\u7ebf\u6570\u636e\u591a\u7ef4\u5206\u6790\u65b9\u9762\uff0c\u5982\u4f55\u5229\u7528 Doris \u8fdb\u884c\u4e1a\u52a1\u63a2\u7d22\u4e0e\u5b9e\u8df5\u3002\u8fd1\u4e9b\u5e74\u6765\uff0c\u968f\u7740\u6570\u636e\u91cf\u7206\u70b8\u5f0f\u7684\u589e\u957f\uff0c\u4ee5\u53ca\u6d77\u91cf\u6570\u636e\u8054\u673a\u5206\u6790\u9700\u6c42\u7684\u51fa\u73b0\uff0cMySQL\u3001Oracle \u7b49\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5728\u5927\u6570\u636e\u91cf\u4e0b\u9047\u5230\u74f6\u9888\uff0c\u800c Hive\u3001Kylin \u7b49\u6570\u636e\u5e93\u7f3a\u4e4f\u65f6\u6548\u6027\u3002\u4e8e\u662f Apache Doris\u3001Apache Druid\u3001ClickHouse \u7b49\u5b9e\u65f6\u5206\u6790\u578b\u6570\u636e\u5e93\u5f00\u59cb\u51fa\u73b0\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u7684\u79d2\u7ea7\u67e5\u8be2\uff0c\u66f4\u6ee1\u8db3\u5b9e\u65f6\u3001\u51c6\u5b9e\u65f6\u7684\u5206\u6790\u9700\u6c42\u3002\u79bb\u7ebf\u3001\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u767e\u82b1\u9f50\u653e\u3002\u4f46\u662f\u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\uff0c\u9762\u4e34\u4e0d\u540c\u7684\u95ee\u9898\uff0c\u6ca1\u6709\u54ea\u4e00\u79cd\u5f15\u64ce\u662f\u4e07\u80fd\u7684\u3002\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u672c\u6587\uff0c\u5bf9\u4eac\u4e1c\u5ba2\u670d\u4e1a\u52a1\u5728\u79bb\u7ebf\u4e0e\u5b9e\u65f6\u5206\u6790\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\uff0c\u80fd\u591f\u7ed9\u5230\u5927\u5bb6\u4e00\u4e9b\u542f\u53d1\uff0c\u4e5f\u5e0c\u671b\u5927\u5bb6\u591a\u591a\u4ea4\u6d41\uff0c\u7ed9\u6211\u4eec\u63d0\u51fa\u5b9d\u8d35\u7684\u5efa\u8bae",date:"2022-07-20",author:"Apache Doris",tags:["\u6700\u4f73\u5b9e\u8df5"]},prevItem:{title:"Apache Doris 1.1 \u7279\u6027\u63ed\u79d8\uff1aFlink \u5b9e\u65f6\u5199\u5165\u5982\u4f55\u517c\u987e\u9ad8\u541e\u5410\u548c\u4f4e\u5ef6\u65f6",permalink:"/zh-CN/blog/Flink-realtime-write"},nextItem:{title:"Apache Doris \u5728\u7f8e\u56e2\u5916\u5356\u5b9e\u65f6\u6570\u4ed3\u5efa\u8bbe\u4e2d\u7684\u5b9e\u8df5",permalink:"/zh-CN/blog/meituan"}},s={authorsImageUrls:[void 0]},p=[{value:"<strong>01 EasyOLAP Doris \u6570\u636e\u5bfc\u5165\u94fe\u8def</strong>",id:"01-easyolap-doris-\u6570\u636e\u5bfc\u5165\u94fe\u8def",level:3},{value:"<strong>02 EasyOLAP Doris \u5168\u94fe\u8def\u76d1\u63a7</strong>",id:"02-easyolap-doris-\u5168\u94fe\u8def\u76d1\u63a7",level:3},{value:"<strong>03 EasyOLAP Doris \u4e3b\u5907\u53cc\u6d41\u8bbe\u8ba1</strong>",id:"03-easyolap-doris-\u4e3b\u5907\u53cc\u6d41\u8bbe\u8ba1",level:3},{value:"<strong>04 EasyOLAP Doris \u52a8\u6001\u5206\u533a\u7ba1\u7406</strong>",id:"04-easyolap-doris-\u52a8\u6001\u5206\u533a\u7ba1\u7406",level:3},{value:"<strong>01 \u9700\u6c42\u573a\u666f</strong>",id:"01-\u9700\u6c42\u573a\u666f",level:3},{value:"<strong>02 \u7f13\u5b58\u673a\u5236\u7b80\u4ecb</strong>",id:"02-\u7f13\u5b58\u673a\u5236\u7b80\u4ecb",level:3},{value:"<strong>03 \u7f13\u5b58\u673a\u5236\u6548\u679c</strong>",id:"03-\u7f13\u5b58\u673a\u5236\u6548\u679c",level:3},{value:"<strong>01 \u5bfc\u5165\u4efb\u52a1\u4f18\u5316</strong>",id:"01-\u5bfc\u5165\u4efb\u52a1\u4f18\u5316",level:3},{value:"<strong>02 \u76d1\u63a7\u6307\u6807\u4f18\u5316</strong>",id:"02-\u76d1\u63a7\u6307\u6807\u4f18\u5316",level:3},{value:"<strong>03 \u5468\u8fb9\u5de5\u5177\u652f\u6301</strong>",id:"03-\u5468\u8fb9\u5de5\u5177\u652f\u6301",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5f15\u8a00"},(0,n.kt)("strong",{parentName:"h1"},"\u5f15\u8a00")),(0,n.kt)("p",null,"Apache Doris \u662f\u4e00\u6b3e\u5f00\u6e90\u7684 MPP \u5206\u6790\u578b\u6570\u636e\u5e93\u4ea7\u54c1\uff0c\u4e0d\u4ec5\u80fd\u591f\u5728\u4e9a\u79d2\u7ea7\u54cd\u5e94\u65f6\u95f4\u5373\u53ef\u83b7\u5f97\u67e5\u8be2\u7ed3\u679c\uff0c\u6709\u6548\u7684\u652f\u6301\u5b9e\u65f6\u6570\u636e\u5206\u6790\uff0c\u800c\u4e14\u652f\u6301 10PB \u4ee5\u4e0a\u7684\u8d85\u5927\u7684\u6570\u636e\u96c6\u3002\u76f8\u8f83\u4e8e\u5176\u4ed6\u4e1a\u754c\u6bd4\u8f83\u706b\u7684 OLAP \u6570\u636e\u5e93\u7cfb\u7edf\uff0cDoris \u7684\u5206\u5e03\u5f0f\u67b6\u6784\u975e\u5e38\u7b80\u6d01\uff0c\u652f\u6301\u5f39\u6027\u4f38\u7f29\uff0c\u6613\u4e8e\u8fd0\u7ef4\uff0c\u8282\u7701\u5927\u91cf\u4eba\u529b\u548c\u65f6\u95f4\u6210\u672c\u3002\u76ee\u524d\u56fd\u5185\u793e\u533a\u706b\u70ed\uff0c\u4e5f\u6709\u7f8e\u56e2\u3001\u5c0f\u7c73\u7b49\u5927\u5382\u5728\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u8ba8\u8bba\u4eac\u4e1c\u5ba2\u670d\u5728\u4eba\u5de5\u54a8\u8be2\u3001\u5ba2\u6237\u4e8b\u4ef6\u5355\u3001\u552e\u540e\u670d\u52a1\u5355\u7b49\u4e13\u9898\u7684\u5b9e\u65f6\u5927\u5c4f\uff0c\u5728\u5b9e\u65f6\u548c\u79bb\u7ebf\u6570\u636e\u591a\u7ef4\u5206\u6790\u65b9\u9762\uff0c\u5982\u4f55\u5229\u7528 Doris \u8fdb\u884c\u4e1a\u52a1\u63a2\u7d22\u4e0e\u5b9e\u8df5\u3002\u8fd1\u4e9b\u5e74\u6765\uff0c\u968f\u7740\u6570\u636e\u91cf\u7206\u70b8\u5f0f\u7684\u589e\u957f\uff0c\u4ee5\u53ca\u6d77\u91cf\u6570\u636e\u8054\u673a\u5206\u6790\u9700\u6c42\u7684\u51fa\u73b0\uff0cMySQL\u3001Oracle \u7b49\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5728\u5927\u6570\u636e\u91cf\u4e0b\u9047\u5230\u74f6\u9888\uff0c\u800c Hive\u3001Kylin \u7b49\u6570\u636e\u5e93\u7f3a\u4e4f\u65f6\u6548\u6027\u3002\u4e8e\u662f Apache Doris\u3001Apache Druid\u3001ClickHouse \u7b49\u5b9e\u65f6\u5206\u6790\u578b\u6570\u636e\u5e93\u5f00\u59cb\u51fa\u73b0\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u7684\u79d2\u7ea7\u67e5\u8be2\uff0c\u66f4\u6ee1\u8db3\u5b9e\u65f6\u3001\u51c6\u5b9e\u65f6\u7684\u5206\u6790\u9700\u6c42\u3002\u79bb\u7ebf\u3001\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\u767e\u82b1\u9f50\u653e\u3002\u4f46\u662f\u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\uff0c\u9762\u4e34\u4e0d\u540c\u7684\u95ee\u9898\uff0c\u6ca1\u6709\u54ea\u4e00\u79cd\u5f15\u64ce\u662f\u4e07\u80fd\u7684\u3002\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u672c\u6587\uff0c\u5bf9\u4eac\u4e1c\u5ba2\u670d\u4e1a\u52a1\u5728\u79bb\u7ebf\u4e0e\u5b9e\u65f6\u5206\u6790\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\uff0c\u80fd\u591f\u7ed9\u5230\u5927\u5bb6\u4e00\u4e9b\u542f\u53d1\uff0c\u4e5f\u5e0c\u671b\u5927\u5bb6\u591a\u591a\u4ea4\u6d41\uff0c\u7ed9\u6211\u4eec\u63d0\u51fa\u5b9d\u8d35\u7684\u5efa\u8bae\u3002"),(0,n.kt)("h1",{id:"\u4eac\u4e1c\u5ba2\u670d\u4e1a\u52a1\u5f62\u6001"},(0,n.kt)("strong",{parentName:"h1"},"\u4eac\u4e1c\u5ba2\u670d\u4e1a\u52a1\u5f62\u6001")),(0,n.kt)("p",null,"\u4eac\u4e1c\u5ba2\u670d\u4f5c\u4e3a\u96c6\u56e2\u670d\u52a1\u7684\u5165\u53e3\uff0c\u4e3a\u7528\u6237\u548c\u5546\u5bb6\u63d0\u4f9b\u4e86\u9ad8\u6548\u3001\u53ef\u9760\u7684\u4fdd\u969c\u3002\u4eac\u4e1c\u5ba2\u670d\u80a9\u8d1f\u7740\u53ca\u65f6\u89e3\u51b3\u7528\u6237\u95ee\u9898\u7684\u91cd\u4efb\uff0c\u7ed9\u7528\u6237\u63d0\u4f9b\u8be6\u7ec6\u6613\u61c2\u7684\u8bf4\u660e\u4e0e\u89e3\u91ca\uff1b\u4e3a\u66f4\u597d\u7684\u4e86\u89e3\u7528\u6237\u7684\u53cd\u9988\u4ee5\u53ca\u4ea7\u54c1\u7684\u72b6\u51b5\uff0c\u9700\u8981\u5b9e\u65f6\u7684\u76d1\u63a7\u54a8\u8be2\u91cf\u3001\u63a5\u8d77\u7387\u3001\u6295\u8bc9\u91cf\u7b49\u4e00\u7cfb\u5217\u6307\u6807\uff0c\u901a\u8fc7\u73af\u6bd4\u548c\u540c\u6bd4\uff0c\u53ca\u65f6\u53d1\u73b0\u5b58\u5728\u7684\u95ee\u9898\uff0c\u4ee5\u66f4\u597d\u7684\u9002\u5e94\u7528\u6237\u7684\u8d2d\u7269\u65b9\u5f0f\uff0c\u63d0\u9ad8\u670d\u52a1\u8d28\u91cf\u4e0e\u6548\u7387\uff0c\u8fdb\u800c\u63d0\u9ad8\u4eac\u4e1c\u54c1\u724c\u7684\u5f71\u54cd\u529b\u3002"),(0,n.kt)("h1",{id:"easy-olap-\u8bbe\u8ba1"},(0,n.kt)("strong",{parentName:"h1"},"Easy OLAP \u8bbe\u8ba1")),(0,n.kt)("h3",{id:"01-easyolap-doris-\u6570\u636e\u5bfc\u5165\u94fe\u8def"},(0,n.kt)("strong",{parentName:"h3"},"01 EasyOLAP Doris \u6570\u636e\u5bfc\u5165\u94fe\u8def")),(0,n.kt)("p",null,"EasyOLAP Doris \u6570\u636e\u6e90\u4e3b\u8981\u662f\u5b9e\u65f6 Kafka \u548c\u79bb\u7ebf HDFS \u6587\u4ef6\u3002\u5b9e\u65f6\u6570\u636e\u7684\u5bfc\u5165\u4f9d\u8d56\u4e8e Routine Load \u7684\u65b9\u5f0f\uff1b\u79bb\u7ebf\u6570\u636e\u4e3b\u8981\u4f7f\u7528 Broker Load \u548c Stream Load \u7684\u65b9\u5f0f\u5bfc\u5165\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"EasyOLAP Doris \u6570\u636e\u5bfc\u5165\u94fe\u8def",src:r(31156).Z,width:"1080",height:"604"})),(0,n.kt)("p",null,"EasyOLAP Doris \u6570\u636e\u5bfc\u5165\u94fe\u8def"),(0,n.kt)("h3",{id:"02-easyolap-doris-\u5168\u94fe\u8def\u76d1\u63a7"},(0,n.kt)("strong",{parentName:"h3"},"02 EasyOLAP Doris \u5168\u94fe\u8def\u76d1\u63a7")),(0,n.kt)("p",null,"\u76ee\u524d EasyOLAP Doris \u9879\u76ee\u7684\u76d1\u63a7\uff0c\u4f7f\u7528\u7684\u662f Prometheus + Grafana \u6846\u67b6\u3002\u5176\u4e2d node_exporter \u8d1f\u8d23\u91c7\u96c6\u673a\u5668\u5c42\u9762\u7684\u6307\u6807\uff0cDoris \u4e5f\u4f1a\u81ea\u52a8\u4ee5 Prometheus \u683c\u5f0f\u5410\u51fa FE\u3001BE \u7684\u670d\u52a1\u5c42\u9762\u7684\u6307\u6807\u3002\u53e6\u5916\uff0c\u90e8\u7f72\u4e86 OLAP Exporter \u670d\u52a1\u7528\u4e8e\u91c7\u96c6 Routine Load \u76f8\u5173\u7684\u6307\u6807\uff0c\u65e8\u5728\u7b2c\u4e00\u65f6\u95f4\u53d1\u73b0\u5b9e\u65f6\u6570\u636e\u6d41\u5bfc\u5165\u7684\u60c5\u51b5\uff0c\u786e\u4fdd\u5b9e\u65f6\u6570\u636e\u7684\u65f6\u6548\u6027\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"EasyOLAP Doris monitoring link",src:r(96572).Z,width:"1080",height:"594"})),(0,n.kt)("p",null,"EasyOLAP Doris \u76d1\u63a7\u94fe\u8def"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"640",src:r(8550).Z,width:"871",height:"600"})),(0,n.kt)("p",null,"EasyOLAP Doris \u76d1\u63a7\u9762\u677f\u5c55\u793a"),(0,n.kt)("h3",{id:"03-easyolap-doris-\u4e3b\u5907\u53cc\u6d41\u8bbe\u8ba1"},(0,n.kt)("strong",{parentName:"h3"},"03 EasyOLAP Doris \u4e3b\u5907\u53cc\u6d41\u8bbe\u8ba1")),(0,n.kt)("p",null,"EasyOLAP Doris \u4e3a\u4e86\u4fdd\u969c 0 \u7ea7\u4e1a\u52a1\u5728\u5927\u4fc3\u671f\u95f4\u670d\u52a1\u7684\u7a33\u5b9a\u6027\uff0c\u91c7\u53d6\u4e86\u4e3b\u5907\u96c6\u7fa4\u53cc\u5199\u7684\u65b9\u5f0f\u3002\u5f53\u5176\u4e2d\u4e00\u4e2a\u96c6\u7fa4\u51fa\u73b0\u6296\u52a8\u6216\u8005\u6570\u636e\u5b58\u5728\u5ef6\u8fdf\u7684\u60c5\u51b5\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u4e3b\u5730\u5feb\u901f\u5207\u6362\u5230\u53e6\u4e00\u4e2a\u96c6\u7fa4\uff0c\u5c3d\u53ef\u80fd\u7684\u51cf\u5c11\u96c6\u7fa4\u6296\u52a8\u7ed9\u4e1a\u52a1\u5e26\u6765\u7684\u5f71\u54cd\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03 EasyOLAP Doris Primary-Secondary Dual Stream Design",src:r(53587).Z,width:"1080",height:"669"})),(0,n.kt)("p",null,"EasyOLAP Doris \u4e3b\u5907\u53cc\u6d41\u8bbe\u8ba1"),(0,n.kt)("h3",{id:"04-easyolap-doris-\u52a8\u6001\u5206\u533a\u7ba1\u7406"},(0,n.kt)("strong",{parentName:"h3"},"04 EasyOLAP Doris \u52a8\u6001\u5206\u533a\u7ba1\u7406")),(0,n.kt)("p",null,"\u4eac\u4e1c OLAP \u56e2\u961f\u5206\u6790\u9700\u6c42\u4e4b\u540e\uff0c\u5bf9 Doris \u505a\u4e86\u4e00\u5b9a\u7684\u5b9a\u5236\u5316\u5f00\u53d1\uff0c\u5176\u4e2d\u5c31\u6d89\u53ca\u5230\u52a8\u6001\u5206\u533a\u7ba1\u7406\u529f\u80fd\u3002\u5c3d\u7ba1\u793e\u533a\u7248\u672c\u5df2\u7ecf\u62e5\u6709\u52a8\u6001\u5206\u533a\u7684\u529f\u80fd\uff0c\u4f46\u662f\u8be5\u529f\u80fd\u65e0\u6cd5\u4fdd\u7559\u6307\u5b9a\u65f6\u95f4\u7684\u5206\u533a\u3002\u9488\u5bf9\u4eac\u4e1c\u96c6\u56e2\u7684\u7279\u70b9\uff0c\u6211\u4eec\u5bf9\u6307\u5b9a\u65f6\u95f4\u7684\u5386\u53f2\u6570\u636e\u8fdb\u884c\u4e86\u7559\u5b58\uff0c\u6bd4\u5982 618 \u548c 11.11 \u671f\u95f4\u7684\u6570\u636e\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u52a8\u6001\u5206\u533a\u800c\u88ab\u5220\u9664\u3002"),(0,n.kt)("p",null,"\u52a8\u6001\u5206\u533a\u7ba1\u7406\u529f\u80fd\u80fd\u591f\u63a7\u5236\u96c6\u7fa4\u4e2d\u5b58\u50a8\u7684\u6570\u636e\u91cf\uff0c\u800c\u4e14\u65b9\u4fbf\u4e86\u4e1a\u52a1\u65b9\u7684\u4f7f\u7528\uff0c\u65e0\u9700\u624b\u52a8\u6216\u4f7f\u7528\u989d\u5916\u4ee3\u7801\u6765\u7ba1\u7406\u5206\u533a\u4fe1\u606f\u3002"),(0,n.kt)("h1",{id:"doris-\u7f13\u5b58\u673a\u5236"},(0,n.kt)("strong",{parentName:"h1"},"Doris \u7f13\u5b58\u673a\u5236")),(0,n.kt)("h3",{id:"01-\u9700\u6c42\u573a\u666f"},(0,n.kt)("strong",{parentName:"h3"},"01 \u9700\u6c42\u573a\u666f")),(0,n.kt)("p",null,"\u81f4\u529b\u4e8e\u4e0d\u65ad\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u4eac\u4e1c\u5ba2\u670d\u7684\u6570\u636e\u5206\u6790\u8ffd\u6c42\u6781\u81f4\u7684\u65f6\u6548\u6027\u3002\u79bb\u7ebf\u6570\u636e\u5206\u6790\u573a\u666f\u662f\u5199\u5c11\u8bfb\u591a\uff0c\u6570\u636e\u5199\u5165\u4e00\u6b21\uff0c\u591a\u6b21\u9891\u7e41\u8bfb\u53d6\uff1b\u5b9e\u65f6\u6570\u636e\u5206\u6790\u573a\u666f\uff0c\u4e00\u90e8\u5206\u6570\u636e\u662f\u4e0d\u66f4\u65b0\u7684\u5386\u53f2\u5206\u533a\uff0c\u4e00\u90e8\u5206\u6570\u636e\u662f\u5904\u4e8e\u66f4\u65b0\u7684\u5206\u533a\u3002\u5728\u5927\u90e8\u5206\u7684\u5206\u6790\u5e94\u7528\u4e2d\uff0c\u5b58\u5728\u4e0b\u8ff0\u51e0\u79cd\u573a\u666f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u5e76\u53d1\u573a\u666f\uff1aDoris \u8f83\u597d\u7684\u652f\u6301\u9ad8\u5e76\u53d1\uff0c\u4f46\u662f\u8fc7\u9ad8\u7684 QPS \u4f1a\u5f15\u8d77\u96c6\u7fa4\u6296\u52a8\uff0c\u4e14\u5355\u4e2a\u8282\u70b9\u65e0\u6cd5\u627f\u8f7d\u592a\u9ad8\u7684 QPS \uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u590d\u6742\u67e5\u8be2\uff1a\u4eac\u4e1c\u5ba2\u670d\u5b9e\u65f6\u8fd0\u8425\u5e73\u53f0\u76d1\u63a7\u6839\u636e\u4e1a\u52a1\u573a\u666f\u9700\u5c55\u793a\u591a\u7ef4\u590d\u6742\u6307\u6807\uff0c\u4e30\u5bcc\u6307\u6807\u5c55\u793a\u5bf9\u5e94\u591a\u79cd\u4e0d\u540c\u7684\u67e5\u8be2\uff0c\u4e14\u6570\u636e\u6e90\u6765\u81ea\u4e8e\u591a\u5f20\u8868\uff0c\u867d\u7136\u5355\u4e2a\u67e5\u8be2\u7684\u54cd\u5e94\u65f6\u95f4\u5728\u6beb\u79d2\u7ea7\u522b\uff0c\u4f46\u662f\u6574\u4f53\u7684\u54cd\u5e94\u65f6\u95f4\u53ef\u80fd\u4f1a\u5230\u79d2\u7ea7\u522b\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u590d\u67e5\u8be2\uff1a\u5982\u679c\u6ca1\u6709\u9632\u91cd\u5237\u673a\u5236\uff0c\u7531\u4e8e\u5ef6\u8fdf\u6216\u624b\u8bef\uff0c\u91cd\u590d\u5237\u65b0\u9875\u9762\u4f1a\u5bfc\u81f4\u63d0\u4ea4\u5927\u91cf\u91cd\u590d\u7684\u67e5\u8be2\uff1b")),(0,n.kt)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u573a\u666f\uff0c\u5728\u5e94\u7528\u5c42\u6709\u89e3\u51b3\u65b9\u6848\u2014\u2014\u5c06\u67e5\u8be2\u7ed3\u679c\u653e\u5165\u5230 Redis \u4e2d\uff0c\u7f13\u5b58\u4f1a\u5468\u671f\u6027\u7684\u5237\u65b0\u6216\u8005\u7531\u7528\u6237\u624b\u52a8\u5237\u65b0\uff0c\u4f46\u662f\u4e5f\u4f1a\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u4e0d\u4e00\u81f4\uff1a\u65e0\u6cd5\u7acb\u5373\u5bf9\u6570\u636e\u7684\u66f4\u65b0\u4f5c\u51fa\u54cd\u5e94\uff0c\u7528\u6237\u63a5\u6536\u5230\u7684\u7ed3\u679c\u53ef\u80fd\u662f\u65e7\u6570\u636e\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u547d\u4e2d\u7387\u4f4e\uff1a\u5982\u679c\u6570\u636e\u5b9e\u65f6\u6027\u5f3a\uff0c\u7f13\u5b58\u9891\u7e41\u5931\u6548\uff0c\u5219\u7f13\u5b58\u7684\u547d\u4e2d\u7387\u4f4e\u4e14\u7cfb\u7edf\u7684\u8d1f\u8f7d\u65e0\u6cd5\u5f97\u7f13\u89e3\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u989d\u5916\u6210\u672c\uff1a\u5f15\u5165\u5916\u90e8\u7ec4\u4ef6\uff0c\u589e\u52a0\u7cfb\u7edf\u590d\u6742\u5ea6\uff0c\u589e\u52a0\u989d\u5916\u6210\u672c\u3002")),(0,n.kt)("h3",{id:"02-\u7f13\u5b58\u673a\u5236\u7b80\u4ecb"},(0,n.kt)("strong",{parentName:"h3"},"02 \u7f13\u5b58\u673a\u5236\u7b80\u4ecb")),(0,n.kt)("p",null,"\u5728 EasyOLAP Doris \u4e2d\uff0c\u4e00\u5171\u6709\u4e09\u79cd\u4e0d\u540c\u7c7b\u578b Cache\u3002\u6839\u636e\u9002\u7528\u573a\u666f\u7684\u4e0d\u540c\uff0c\u5206\u522b\u4e3a Result Cache\u3001SQL Cache \u548c Partition Cache \u3002\u4e09\u79cd\u7f13\u5b58\u90fd\u53ef\u4ee5\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u6307\u4ee4\u63a7\u5236\u5f00\u5173\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e09\u79cd\u7f13\u5b58\u673a\u5236\u662f\u53ef\u4ee5\u5171\u5b58\u7684\uff0c\u5373\u53ef\u4ee5\u540c\u65f6\u5f00\u542f\u3002\u67e5\u8be2\u65f6\uff0c\u67e5\u8be2\u5206\u6790\u5668\u9996\u5148\u4f1a\u5224\u65ad\u662f\u5426\u5f00\u542f\u4e86 Result Cache \uff0c\u5728 Result Cache \u5f00\u542f\u7684\u60c5\u51b5\u4e0b\u5148\u4ece Result Cache \u4e2d\u67e5\u627e\u8be5\u67e5\u8be2\u662f\u5426\u5b58\u5728\u7f13\u5b58\uff0c\u5982\u679c\u5b58\u5728\u7f13\u5b58\uff0c\u76f4\u63a5\u53d6\u7f13\u5b58\u7684\u503c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff1b\u5982\u679c\u7f13\u5b58\u5931\u6548\u6216\u8005\u4e0d\u5b58\u5728\uff0c\u5219\u76f4\u63a5\u8fdb\u884c\u67e5\u8be2\u5e76\u5c06\u7ed3\u679c\u5199\u5165\u5230\u7f13\u5b58\u3002\u7f13\u5b58\u653e\u5728\u5404\u4e2a FE \u8282\u70b9\u7684\u5185\u5b58\u4e2d\uff0c\u4ee5\u4fbf\u5feb\u901f\u8bfb\u53d6\u3002"),(0,n.kt)("p",null,"SQL Cache \u6309\u7167 SQL \u7684\u7b7e\u540d\u3001\u67e5\u8be2\u7684\u8868\u7684\u5206\u533a\u7684 ID \u548c\u5206\u533a\u6700\u65b0\u7248\u672c\u53f7\u6765\u5b58\u50a8\u548c\u83b7\u53d6\u7f13\u5b58\u3002\u8fd9\u4e09\u8005\u4e00\u8d77\u4f5c\u4e3a\u7f13\u5b58\u7684\u6761\u4ef6\uff0c\u5176\u4e2d\u4e00\u8005\u53d1\u751f\u53d8\u5316\uff0c\u5982 SQL \u8bed\u53e5\u53d8\u5316\u3001\u6570\u636e\u66f4\u65b0\u4e4b\u540e\u5206\u533a\u7248\u672c\u53f7\u53d8\u5316\uff0c\u90fd\u4f1a\u65e0\u6cd5\u547d\u4e2d\u7f13\u5b58\u3002\u5728\u591a\u8868 Join \u7684\u60c5\u51b5\u4e0b\uff0c\u5176\u4e2d\u4e00\u5f20\u8868\u7684\u5206\u533a\u66f4\u65b0\uff0c\u4e5f\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u547d\u4e2d\u7f13\u5b58\u3002SQL Cache \u66f4\u9002\u5408 T+1 \u66f4\u65b0\u7684\u573a\u666f\u3002"),(0,n.kt)("p",null,"Partition Cache \u662f\u66f4\u7ec6\u7c92\u5ea6\u7684\u7f13\u5b58\u673a\u5236\u3002Partition Cache \u4e3b\u8981\u662f\u5c06\u4e00\u4e2a\u67e5\u8be2\u6839\u636e\u5206\u533a\u5e76\u884c\u62c6\u5206\uff0c\u62c6\u5206\u4e3a\u53ea\u8bfb\u5206\u533a\u548c\u53ef\u66f4\u65b0\u5206\u533a\uff0c\u53ea\u8bfb\u5206\u533a\u7f13\u5b58\uff0c\u66f4\u65b0\u5206\u533a\u4e0d\u7f13\u5b58\uff0c\u76f8\u5e94\u7684\u7ed3\u679c\u96c6\u4e5f\u4f1a\u751f\u6210 n \u4e2a\uff0c\u7136\u540e\u518d\u5c06\u5404\u4e2a\u62c6\u5206\u540e\u7684\u5b50\u67e5\u8be2\u7684\u7ed3\u679c\u5408\u5e76\u3002\u56e0\u6b64\uff0c\u5982\u679c\u67e5\u8be2 N \u5929\u7684\u6570\u636e\uff0c\u6570\u636e\u66f4\u65b0\u6700\u8fd1\u7684 D \u5929\uff0c\u6bcf\u5929\u53ea\u662f\u65e5\u671f\u8303\u56f4\u4e0d\u4e00\u6837\u4f46\u76f8\u4f3c\u7684\u67e5\u8be2\uff0c\u5c31\u53ef\u4ee5\u5229\u7528 Partition Cache \uff0c\u53ea\u9700\u8981\u67e5\u8be2 D \u4e2a\u5206\u533a\u5373\u53ef\uff0c\u5176\u4ed6\u90e8\u5206\u90fd\u6765\u81ea\u7f13\u5b58\uff0c\u53ef\u4ee5\u6709\u6548\u964d\u4f4e\u96c6\u7fa4\u8d1f\u8f7d\uff0c\u7f29\u77ed\u67e5\u8be2\u54cd\u5e94\u65f6\u95f4\u3002"),(0,n.kt)("p",null,"\u4e00\u4e2a\u67e5\u8be2\u8fdb\u5165\u5230 Doris\uff0c\u7cfb\u7edf\u5148\u4f1a\u5904\u7406\u67e5\u8be2\u8bed\u53e5\uff0c\u5e76\u5c06\u8be5\u67e5\u8be2\u8bed\u53e5\u4f5c\u4e3a Key\uff0c\u5728\u6267\u884c\u67e5\u8be2\u8bed\u53e5\u4e4b\u524d\uff0c\u67e5\u8be2\u5206\u6790\u5668\u80fd\u591f\u81ea\u52a8\u9009\u62e9\u6700\u9002\u5408\u7684\u7f13\u5b58\u673a\u5236\uff0c\u4ee5\u786e\u4fdd\u5728\u6700\u4f18\u7684\u60c5\u51b5\u4e0b\uff0c\u5229\u7528\u7f13\u5b58\u673a\u5236\u6765\u7f29\u77ed\u67e5\u8be2\u76f8\u5e94\u65f6\u95f4\u3002\u7136\u540e\u68c0\u67e5 Cache \u4e2d\u662f\u5426\u5b58\u5728\u8be5\u67e5\u8be2\u7ed3\u679c\uff0c\u5982\u679c\u5b58\u5728\u5c31\u83b7\u53d6\u7f13\u5b58\u4e2d\u7684\u6570\u636e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff1b\u5982\u679c\u6ca1\u6709\u7f13\u5b58\uff0c\u5219\u6b63\u5e38\u67e5\u8be2\uff0c\u5e76\u5c06\u8be5\u67e5\u8be2\u7ed3\u679c\u4ee5 Value \u7684\u5f62\u5f0f\u548c\u8be5\u67e5\u8be2\u8bed\u53e5 Key \u5b58\u50a8\u5230\u7f13\u5b58\u4e2d\u3002Result Cache \u53ef\u4ee5\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u53d1\u6325\u5176\u4f5c\u7528\uff0c\u4e5f\u53ef\u4ee5\u4fdd\u62a4\u96c6\u7fa4\u8d44\u6e90\u4e0d\u53d7\u91cd\u590d\u7684\u5927\u67e5\u8be2\u7684\u4fb5\u5360\u3002SQL Cache \u66f4\u52a0\u9002\u5408 T+1 \u7684\u573a\u666f\uff0c\u5728\u5206\u533a\u66f4\u65b0\u4e0d\u9891\u7e41\u4ee5\u53ca SQL \u8bed\u53e5\u91cd\u590d\u7684\u60c5\u51b5\u4e0b\uff0c\u6548\u679c\u5f88\u597d\u3002Partition Cache \u662f\u7c92\u5ea6\u6700\u5c0f\u7684\u7f13\u5b58\u3002\u5728\u67e5\u8be2\u8bed\u53e5\u67e5\u8be2\u4e00\u4e2a\u65f6\u95f4\u6bb5\u7684\u6570\u636e\u65f6\uff0c\u67e5\u8be2\u8bed\u53e5\u4f1a\u88ab\u62c6\u5206\u6210\u591a\u4e2a\u5b50\u67e5\u8be2\u3002\u5728\u6570\u636e\u53ea\u5199\u4e00\u4e2a\u5206\u533a\u6216\u8005\u90e8\u5206\u5206\u533a\u7684\u60c5\u51b5\u4e0b\uff0c\u80fd\u591f\u7f29\u77ed\u67e5\u8be2\u65f6\u95f4\uff0c\u8282\u7701\u96c6\u7fa4\u8d44\u6e90\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u89c2\u5bdf\u7f13\u5b58\u7684\u6548\u679c\uff0c\u76f8\u5173\u6307\u6807\u5df2\u7ecf\u52a0\u5165\u5230 Doris \u7684\u670d\u52a1\u6307\u6807\u4e2d\uff0c\u901a\u8fc7 Prometheus \u548c Grafana \u76d1\u63a7\u7cfb\u7edf\u83b7\u53d6\u76f4\u89c2\u7684\u76d1\u63a7\u6570\u636e\u3002\u6307\u6807\u6709\u4e0d\u540c\u79cd\u7c7b\u7684 Cache \u7684\u547d\u4e2d\u6570\u91cf\u3001\u4e0d\u540c\u79cd\u7c7b\u7684 Cache \u547d\u4e2d\u7387\u3001 Cache \u7684\u5185\u5b58\u5927\u5c0f\u7b49\u6307\u6807\u3002"),(0,n.kt)("h3",{id:"03-\u7f13\u5b58\u673a\u5236\u6548\u679c"},(0,n.kt)("strong",{parentName:"h3"},"03 \u7f13\u5b58\u673a\u5236\u6548\u679c")),(0,n.kt)("p",null,"\u4eac\u4e1c\u5ba2\u670d Doris \u4e3b\u96c6\u7fa4\uff0c11.11 \u671f\u95f4\u5728\u6ca1\u6709\u5f00\u542f\u7f13\u5b58\u65f6\uff0c\u90e8\u5206\u4e1a\u52a1\u5c31\u5bfc\u81f4 CPU \u7684\u4f7f\u7528\u7387\u8fbe\u5230 100% \uff1b\u5728\u5f00\u542f Result Cache \u7684\u60c5\u51b5\u4e0b\uff0cCPU \u4f7f\u7528\u7387\u5728 30%-40% \u4e4b\u95f4\u3002\u7f13\u5b58\u673a\u5236\u786e\u4fdd\u4e1a\u52a1\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\uff0c\u80fd\u591f\u5feb\u901f\u7684\u5f97\u5230\u67e5\u8be2\u7ed3\u679c\uff0c\u5e76\u5f88\u597d\u7684\u4fdd\u62a4\u4e86\u96c6\u7fa4\u8d44\u6e90\u3002"),(0,n.kt)("h1",{id:"doris-\u5728-2020-\u5e74-1111-\u5927\u4fc3\u671f\u95f4\u7684\u4f18\u5316"},(0,n.kt)("strong",{parentName:"h1"},"Doris \u5728 2020 \u5e74 11.11 \u5927\u4fc3\u671f\u95f4\u7684\u4f18\u5316")),(0,n.kt)("h3",{id:"01-\u5bfc\u5165\u4efb\u52a1\u4f18\u5316"},(0,n.kt)("strong",{parentName:"h3"},"01 \u5bfc\u5165\u4efb\u52a1\u4f18\u5316")),(0,n.kt)("p",null,"\u5b9e\u65f6\u6570\u636e\u7684\u5bfc\u5165\u4e00\u76f4\u662f\u4e00\u4e2a\u6311\u6218\u3002\u5176\u4e2d\uff0c\u4fdd\u8bc1\u6570\u636e\u5b9e\u65f6\u6027\u548c\u5bfc\u5165\u7a33\u5b9a\u6027\u662f\u6700\u91cd\u8981\u7684\u3002\u4e3a\u4e86\u80fd\u591f\u66f4\u52a0\u76f4\u89c2\u7684\u89c2\u5bdf\u5b9e\u65f6\u6570\u636e\u5bfc\u5165\u7684\u60c5\u51b5\uff0c\u4eac\u4e1c OLAP \u56e2\u961f\u81ea\u4e3b\u5f00\u53d1\u4e86 OLAP Exporter \uff0c\u7528\u4e8e\u91c7\u96c6\u5b9e\u65f6\u6570\u636e\u5bfc\u5165\u76f8\u5173\u7684\u6307\u6807\uff0c\u5982\u5bfc\u5165\u901f\u5ea6\u3001\u5bfc\u5165\u79ef\u538b\u548c\u6682\u505c\u7684\u4efb\u52a1\u7b49\u3002\u901a\u8fc7\u5bfc\u5165\u901f\u5ea6\u548c\u5bfc\u5165\u79ef\u538b\uff0c\u53ef\u4ee5\u5224\u65ad\u4e00\u4e2a\u5b9e\u65f6\u5bfc\u5165\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u5982\u53d1\u73b0\u4efb\u52a1\u6709\u79ef\u538b\u7684\u8d8b\u52bf\uff0c\u53ef\u4ee5\u4f7f\u7528\u81ea\u4e3b\u5f00\u53d1\u7684\u91c7\u6837\u5de5\u5177\uff0c\u5bf9\u5b9e\u65f6\u4efb\u52a1\u8fdb\u884c\u91c7\u6837\u5206\u6790\u3002\u5b9e\u65f6\u4efb\u52a1\u4e3b\u8981\u6709\u4e09\u4e2a\u9608\u503c\u6765\u63a7\u5236\u4efb\u52a1\u7684\u63d0\u4ea4\uff0c\u5206\u522b\u662f\u6bcf\u6279\u6b21\u6700\u5927\u5904\u7406\u65f6\u95f4\u95f4\u9694\u3001\u6bcf\u6279\u6b21\u6700\u5927\u5904\u7406\u6761\u6570\u548c\u6bcf\u6279\u6b21\u6700\u5927\u5904\u7406\u6570\u636e\u91cf\uff0c\u4e00\u4e2a\u4efb\u52a1\u53ea\u8981\u8fbe\u5230\u5176\u4e2d\u4e00\u4e2a\u9608\u503c\uff0c\u8be5\u4efb\u52a1\u5c31\u4f1a\u88ab\u63d0\u4ea4\u3002\u901a\u8fc7\u589e\u52a0\u65e5\u5fd7\uff0c\u53d1\u73b0 FE \u4e2d\u7684\u4efb\u52a1\u961f\u5217\u6bd4\u8f83\u7e41\u5fd9\uff0c\u6240\u4ee5\uff0c\u53c2\u6570\u7684\u8c03\u6574\u4e3b\u8981\u90fd\u662f\u5c06\u6bcf\u6279\u6b21\u6700\u5927\u5904\u7406\u6761\u6570\u548c\u6bcf\u6279\u6b21\u6700\u5927\u5904\u7406\u6570\u636e\u91cf\u8c03\u5927\uff0c\u7136\u540e\u6839\u636e\u4e1a\u52a1\u7684\u9700\u6c42\uff0c\u8c03\u6574\u6bcf\u6279\u6b21\u6700\u5927\u5904\u7406\u65f6\u95f4\u95f4\u9694\uff0c\u4ee5\u4fdd\u8bc1\u6570\u636e\u7684\u5ef6\u8fdf\u5728\u6bcf\u6279\u6b21\u6700\u5927\u5904\u7406\u65f6\u95f4\u95f4\u9694\u7684\u4e24\u500d\u4e4b\u5185\u3002\u901a\u8fc7\u91c7\u6837\u5de5\u5177\uff0c\u5206\u6790\u4efb\u52a1\uff0c\u4e0d\u4ec5\u4fdd\u8bc1\u4e86\u6570\u636e\u7684\u5b9e\u65f6\u6027\uff0c\u4e5f\u4fdd\u8bc1\u4e86\u5bfc\u5165\u7684\u7a33\u5b9a\u6027\u3002\u53e6\u5916\uff0c\u6211\u4eec\u4e5f\u8bbe\u7f6e\u4e86\u544a\u8b66\uff0c\u53ef\u4ee5\u53ca\u65f6\u53d1\u73b0\u5b9e\u65f6\u5bfc\u5165\u4efb\u52a1\u7684\u79ef\u538b\u4ee5\u53ca\u5bfc\u5165\u4efb\u52a1\u7684\u6682\u505c\u7b49\u5f02\u5e38\u60c5\u51b5\u3002"),(0,n.kt)("h3",{id:"02-\u76d1\u63a7\u6307\u6807\u4f18\u5316"},(0,n.kt)("strong",{parentName:"h3"},"02 \u76d1\u63a7\u6307\u6807\u4f18\u5316")),(0,n.kt)("p",null,"\u76d1\u63a7\u6307\u6807\u4e3b\u8981\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff0c\u4e00\u4e2a\u662f\u673a\u5668\u5c42\u9762\u6307\u6807\u90e8\u5206\uff0c\u4e00\u4e2a\u662f\u4e1a\u52a1\u5c42\u9762\u6307\u6807\u90e8\u5206\u3002\u5728\u6574\u4e2a\u76d1\u63a7\u9762\u677f\u91cc\uff0c\u8be6\u7ec6\u7684\u6307\u6807\u5e26\u6765\u4e86\u5168\u9762\u7684\u6570\u636e\u7684\u540c\u65f6\uff0c\u4e5f\u589e\u52a0\u4e86\u83b7\u53d6\u91cd\u8981\u6307\u6807\u7684\u96be\u5ea6\u3002\u6240\u4ee5\uff0c\u4e3a\u4e86\u66f4\u597d\u7684\u89c2\u5bdf\u6240\u6709\u96c6\u7fa4\u7684\u91cd\u8981\u6307\u6807\uff0c\u5355\u72ec\u8bbe\u7acb\u4e00\u4e2a\u677f\u5757\u2014\u2014 11.11 \u91cd\u8981\u6307\u6807\u6c47\u603b\u677f\u5757\u3002\u677f\u5757\u4e2d\u6709 BE CPU \u4f7f\u7528\u7387\u3001\u5b9e\u65f6\u4efb\u52a1\u6d88\u8d39\u79ef\u538b\u884c\u6570\u3001TP99\u3001QPS \u7b49\u6307\u6807\u3002\u6307\u6807\u6570\u91cf\u4e0d\u591a\uff0c\u4f46\u662f\u53ef\u4ee5\u89c2\u6d4b\u5230\u6240\u6709\u96c6\u7fa4\u7684\u60c5\u51b5\uff0c\u8fd9\u6837\u53ef\u4ee5\u514d\u53bb\u5728\u76d1\u63a7\u4e2d\u9891\u7e41\u5207\u6362\u7684\u9ebb\u70e6\u3002"),(0,n.kt)("h3",{id:"03-\u5468\u8fb9\u5de5\u5177\u652f\u6301"},(0,n.kt)("strong",{parentName:"h3"},"03 \u5468\u8fb9\u5de5\u5177\u652f\u6301")),(0,n.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u8bf4\u5230\u7684\u91c7\u6837\u5de5\u5177\u548c OLAP Exporter \uff0c\u4eac\u4e1c OLAP \u56e2\u961f\u8fd8\u5f00\u53d1\u4e86\u4e00\u7cfb\u5217\u7684 Doris \u7ef4\u62a4\u5de5\u5177\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5bfc\u5165\u91c7\u6837\u5de5\u5177\uff1a\u5bfc\u5165\u91c7\u6837\u5de5\u5177\u4e0d\u4ec5\u53ef\u4ee5\u91c7\u96c6\u5b9e\u65f6\u5bfc\u5165\u7684\u6570\u636e\uff0c\u800c\u4e14\u8fd8\u652f\u6301\u8c03\u6574\u5b9e\u65f6\u5bfc\u5165\u4efb\u52a1\u7684\u53c2\u6570\uff0c\u6216\u8005\u5728\u5b9e\u65f6\u5bfc\u5165\u4efb\u52a1\u6682\u505c\u72b6\u6001\u4e0b\uff0c\u751f\u6210\u521b\u5efa\u8bed\u53e5\uff08\u5305\u62ec\u6700\u65b0\u7684\u4f4d\u70b9\u7b49\u4fe1\u606f\uff09\u7528\u4e8e\u4efb\u52a1\u7684\u8fc1\u79fb\u7b49\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5927\u67e5\u8be2\u5de5\u5177\uff1a\u5927\u67e5\u8be2\u4e0d\u4ec5\u4f1a\u9020\u6210\u96c6\u7fa4 BE CPU \u4f7f\u7528\u7387\u7684\u6296\u52a8\uff0c\u8fd8\u4f1a\u5bfc\u81f4\u5176\u4ed6\u67e5\u8be2\u54cd\u5e94\u65f6\u95f4\u53d8\u957f\u3002\u5728\u6709\u5927\u67e5\u8be2\u5de5\u5177\u4e4b\u524d\uff0c\u53d1\u73b0\u96c6\u7fa4 CPU \u51fa\u73b0\u6296\u52a8\uff0c\u9700\u8981\u53bb\u68c0\u67e5\u6240\u6709 FE \u4e0a\u7684\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u7136\u540e\u518d\u505a\u7edf\u8ba1\uff0c\u4e0d\u4ec5\u6d6a\u8d39\u65f6\u95f4\uff0c\u800c\u4e14\u4e0d\u591f\u76f4\u89c2\u3002\u5927\u67e5\u8be2\u5de5\u5177\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u7684\u95ee\u9898\u3002\u5f53\u76d1\u63a7\u4fa7\u53d1\u73b0\u96c6\u7fa4\u6709\u6296\u52a8\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u5927\u67e5\u8be2\u5de5\u5177\uff0c\u8f93\u5165\u96c6\u7fa4\u540d\u548c\u65f6\u95f4\u70b9\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230\u8be5\u65f6\u95f4\u70b9\u4e0b\uff0c\u4e0d\u540c\u4e1a\u52a1\u7684\u67e5\u8be2\u603b\u6570\uff0c\u65f6\u95f4\u8d85\u8fc7 5 \u79d2\u3001 10 \u79d2\u3001 20 \u79d2\u7684\u67e5\u8be2\u4e2a\u6570\uff0c\u626b\u63cf\u91cf\u5de8\u5927\u7684\u67e5\u8be2\u4e2a\u6570\u7b49\uff0c\u65b9\u4fbf\u6211\u4eec\u4ece\u4e0d\u540c\u7684\u7ef4\u5ea6\u5206\u6790\u5927\u67e5\u8be2\u3002\u5927\u67e5\u8be2\u7684\u8be6\u7ec6\u60c5\u51b5\u4e5f\u5c06\u88ab\u4fdd\u5b58\u5728\u4e2d\u95f4\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u4e0d\u540c\u4e1a\u52a1\u7684\u5927\u67e5\u8be2\u3002\u6574\u4e2a\u8fc7\u7a0b\u53ea\u9700\u8981\u51e0\u5341\u79d2\u5230\u4e00\u5206\u949f\u5c31\u53ef\u4ee5\u5b9a\u4f4d\u5230\u6b63\u5728\u53d1\u751f\u7684\u5927\u67e5\u8be2\u5e76\u83b7\u53d6\u76f8\u5e94\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u5927\u5927\u8282\u7ea6\u4e86\u65f6\u95f4\u548c\u8fd0\u7ef4\u6210\u672c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u964d\u7ea7\u4e0e\u6062\u590d\u5de5\u5177\uff1a\u4e3a\u4e86\u786e\u4fdd 11.11 \u5927\u4fc3\u671f\u95f4\uff0c 0 \u7ea7\u4e1a\u52a1\u7684\u7a33\u5b9a\u6027\uff0c\u5728\u96c6\u7fa4\u538b\u529b\u8d85\u8fc7\u5b89\u5168\u4f4d\u7684\u65f6\u5019\uff0c\u9700\u8981\u5bf9\u5176\u4ed6\u975e 0 \u7ea7\u4e1a\u52a1\u505a\u964d\u7ea7\u5904\u7406\uff0c\u5f85\u5ea6\u8fc7\u9ad8\u5cf0\u671f\u540e\uff0c\u518d\u4e00\u952e\u6062\u590d\u5230\u964d\u7ea7\u524d\u7684\u8bbe\u7f6e\u3002\u964d\u7ea7\u4e3b\u8981\u662f\u964d\u4f4e\u4e1a\u52a1\u7684\u6700\u5927\u8fde\u63a5\u6570\u3001\u6682\u505c\u975e 0 \u7ea7\u7684\u5b9e\u65f6\u5bfc\u5165\u4efb\u52a1\u7b49\u3002\u8fd9\u5927\u5927\u589e\u52a0\u4e86\u64cd\u4f5c\u7684\u4fbf\u6377\u6027\uff0c\u63d0\u9ad8\u4e86\u6548\u7387\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u5de1\u68c0\u5de5\u5177\uff1a\u5728 11.11 \u671f\u95f4\uff0c\u96c6\u7fa4\u7684\u5065\u5eb7\u5de1\u68c0\u662f\u6781\u5176\u91cd\u8981\u7684\u3002\u5e38\u89c4\u5de1\u68c0\u5305\u62ec\u53cc\u6d41\u4e1a\u52a1\u7684\u4e3b\u5907\u96c6\u7fa4\u4e00\u81f4\u6027\u68c0\u67e5\uff0c\u4e3a\u4e86\u786e\u4fdd\u4e1a\u52a1\u5728\u4e00\u4e2a\u96c6\u7fa4\u51fa\u73b0\u95ee\u9898\u7684\u65f6\u5019\u53ef\u4ee5\u5feb\u901f\u5207\u6362\u5230\u53e6\u4e00\u4e2a\u96c6\u7fa4\uff0c\u5c31\u9700\u8981\u4fdd\u8bc1\u4e24\u4e2a\u96c6\u7fa4\u4e0a\u7684\u5e93\u8868\u4e00\u81f4\u3001\u6570\u636e\u91cf\u5dee\u5f02\u4e0d\u5927\u7b49\uff1b\u68c0\u67e5\u5e93\u8868\u7684\u526f\u672c\u6570\u662f\u5426\u4e3a 3 \u4e14\u68c0\u67e5\u96c6\u7fa4\u662f\u5426\u5b58\u5728\u4e0d\u5065\u5eb7\u7684 Tablet \uff1b\u68c0\u67e5\u673a\u5668\u78c1\u76d8\u4f7f\u7528\u7387\u3001\u5185\u5b58\u7b49\u673a\u5668\u5c42\u9762\u7684\u6307\u6807\u7b49\u3002"))),(0,n.kt)("h1",{id:"\u603b\u7ed3\u4e0e\u5c55\u671b"},(0,n.kt)("strong",{parentName:"h1"},"\u603b\u7ed3\u4e0e\u5c55\u671b")),(0,n.kt)("p",null,"\u4eac\u4e1c\u5ba2\u670d\u662f\u5728 2020 \u5e74\u5e74\u521d\u5f00\u59cb\u5f15\u5165 Doris \u7684\uff0c\u76ee\u524d\u62e5\u6709\u4e00\u4e2a\u72ec\u7acb\u96c6\u7fa4\uff0c\u4e00\u4e2a\u5171\u4eab\u96c6\u7fa4\uff0c\u662f\u4eac\u4e1c OLAP \u7684\u8d44\u6df1\u7528\u6237\u3002"),(0,n.kt)("p",null,"\u5728\u4e1a\u52a1\u4f7f\u7528\u4e2d\u4e5f\u9047\u5230\u4e86\u4f8b\u5982\u4efb\u52a1\u8c03\u5ea6\u76f8\u5173\u7684\u3001\u5bfc\u5165\u4efb\u52a1\u914d\u7f6e\u76f8\u5173\u7684\u548c\u67e5\u8be2\u76f8\u5173\u7b49\u95ee\u9898\uff0c\u8fd9\u4e5f\u5728\u63a8\u52a8\u4eac\u4e1c OLAP \u56e2\u961f\u66f4\u6df1\u5165\u7684\u4e86\u89e3 Doris \u3002\u6211\u4eec\u8ba1\u5212\u63a8\u5e7f\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u6765\u8fdb\u4e00\u6b65\u63d0\u5347\u67e5\u8be2\u7684\u6548\u7387\uff1b\u4f7f\u7528 Bitmap \u6765\u652f\u6301 UV \u7b49\u6307\u6807\u7684\u7cbe\u786e\u53bb\u91cd\u64cd\u4f5c\uff1b\u4f7f\u7528\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u66f4\u65b9\u4fbf\u7684\u7edf\u8ba1\u5927\u67e5\u8be2\u3001\u6162\u67e5\u8be2\uff1b\u89e3\u51b3\u5b9e\u65f6\u5bfc\u5165\u4efb\u52a1\u7684\u8c03\u5ea6\u95ee\u9898\uff0c\u4f7f\u5bfc\u5165\u4efb\u52a1\u66f4\u52a0\u9ad8\u6548\u7a33\u5b9a\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u4eec\u4e5f\u8ba1\u5212\u4f18\u5316\u5efa\u8868\u3001\u521b\u5efa\u4f18\u8d28 Rollup \u6216\u7269\u5316\u89c6\u56fe\u4ee5\u63d0\u5347\u5e94\u7528\u7684\u6d41\u7545\u6027\uff0c\u52a0\u901f\u66f4\u591a\u4e1a\u52a1\u5411 OLAP \u5e73\u53f0\u9760\u62e2\uff0c\u4ee5\u63d0\u5347\u5e94\u7528\u7684\u5f71\u54cd\u529b\u3002"))}c.isMDXComponent=!0},8550:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/jd01-47257e8bb0b14785f854db959cdfd931.png"},53587:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/jd02-a6a4279c0c33a25862e89b56e7c986a7.png"},31156:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/jd03-00bd471f0fab2d98798f5e3148b35fce.png"},96572:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/jd04-8770adfb04ffe977f931d9eaff4cb534.png"}}]);