"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[92221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return n?i.createElement(c,o(o({ref:t},s),{},{components:n})):i.createElement(c,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var u=2;u<l;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const l={title:"Doris Join \u4f18\u5316\u539f\u7406",language:"zh-CN"},o=void 0,r={unversionedId:"advanced/join-optimization/doris-join-optimization",id:"version-dev/advanced/join-optimization/doris-join-optimization",title:"Doris Join \u4f18\u5316\u539f\u7406",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/advanced/join-optimization/doris-join-optimization.md",sourceDirName:"advanced/join-optimization",slug:"/advanced/join-optimization/doris-join-optimization",permalink:"/zh-CN/docs/dev/advanced/join-optimization/doris-join-optimization",draft:!1,tags:[],version:"dev",frontMatter:{title:"Doris Join \u4f18\u5316\u539f\u7406",language:"zh-CN"},sidebar:"docs",previous:{title:"Runtime Filter",permalink:"/zh-CN/docs/dev/advanced/join-optimization/runtime-filter"},next:{title:"Colocation Join",permalink:"/zh-CN/docs/dev/advanced/join-optimization/colocation-join"}},p={},u=[{value:"Doris Shuffle \u65b9\u5f0f",id:"doris-shuffle-\u65b9\u5f0f",level:2},{value:"\u56db\u79cd Shuffle \u65b9\u5f0f\u5bf9\u6bd4",id:"\u56db\u79cd-shuffle-\u65b9\u5f0f\u5bf9\u6bd4",level:3},{value:"Runtime Filter  Join \u4f18\u5316",id:"runtime-filter--join-\u4f18\u5316",level:2},{value:"Runtime Filter \u7c7b\u578b",id:"runtime-filter-\u7c7b\u578b",level:3},{value:"Join Reorder",id:"join-reorder",level:2},{value:"Doris Join \u8c03\u4f18\u65b9\u6cd5",id:"doris-join-\u8c03\u4f18\u65b9\u6cd5",level:2},{value:"\u8c03\u4f18\u6848\u4f8b\u5b9e\u6218",id:"\u8c03\u4f18\u6848\u4f8b\u5b9e\u6218",level:2},{value:"\u6848\u4f8b\u4e00",id:"\u6848\u4f8b\u4e00",level:3},{value:"\u6848\u4f8b\u4e8c",id:"\u6848\u4f8b\u4e8c",level:3},{value:"\u6848\u4f8b\u4e09",id:"\u6848\u4f8b\u4e09",level:3},{value:"Doris Join \u8c03\u4f18\u5efa\u8bae",id:"doris-join-\u8c03\u4f18\u5efa\u8bae",level:2}],s={toc:u};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"doris-join-\u4f18\u5316\u539f\u7406"},"Doris Join \u4f18\u5316\u539f\u7406"),(0,a.kt)("p",null,"Doris \u652f\u6301\u4e24\u79cd\u7269\u7406\u7b97\u5b50\uff0c\u4e00\u7c7b\u662f ",(0,a.kt)("strong",{parentName:"p"},"Hash Join"),"\uff0c\u53e6\u4e00\u7c7b\u662f ",(0,a.kt)("strong",{parentName:"p"},"Nest Loop Join"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hash Join\uff1a\u5728\u53f3\u8868\u4e0a\u6839\u636e\u7b49\u503c Join \u5217\u5efa\u7acb\u54c8\u5e0c\u8868\uff0c\u5de6\u8868\u6d41\u5f0f\u7684\u5229\u7528\u54c8\u5e0c\u8868\u8fdb\u884c Join \u8ba1\u7b97\uff0c\u5b83\u7684\u9650\u5236\u662f\u53ea\u80fd\u9002\u7528\u4e8e\u7b49\u503c Join\u3002"),(0,a.kt)("li",{parentName:"ul"},"Nest Loop Join\uff1a\u901a\u8fc7\u4e24\u4e2a for \u5faa\u73af\uff0c\u5f88\u76f4\u89c2\u3002\u7136\u540e\u5b83\u9002\u7528\u7684\u573a\u666f\u5c31\u662f\u4e0d\u7b49\u503c\u7684 Join\uff0c\u4f8b\u5982\uff1a\u5927\u4e8e\u5c0f\u4e8e\u6216\u8005\u662f\u9700\u8981\u6c42\u7b1b\u5361\u5c14\u79ef\u7684\u573a\u666f\u3002\u5b83\u662f\u4e00\u4e2a\u901a\u7528\u7684 Join \u7b97\u5b50\uff0c\u4f46\u662f\u6027\u80fd\u8868\u73b0\u5dee\u3002")),(0,a.kt)("p",null,"\u4f5c\u4e3a\u5206\u5e03\u5f0f\u7684 MPP \u6570\u636e\u5e93\uff0c \u5728 Join \u7684\u8fc7\u7a0b\u4e2d\u662f\u9700\u8981\u8fdb\u884c\u6570\u636e\u7684 Shuffle\u3002\u6570\u636e\u9700\u8981\u8fdb\u884c\u62c6\u5206\u8c03\u5ea6\uff0c\u624d\u80fd\u4fdd\u8bc1\u6700\u7ec8\u7684 Join \u7ed3\u679c\u662f\u6b63\u786e\u7684\u3002\u4e3e\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u5047\u8bbe\u5173\u7cfbS \u548c R \u8fdb\u884cJoin\uff0cN \u8868\u793a\u53c2\u4e0e Join \u8ba1\u7b97\u7684\u8282\u70b9\u7684\u6570\u91cf\uff1bT \u5219\u8868\u793a\u5173\u7cfb\u7684 Tuple \u6570\u76ee\u3002"),(0,a.kt)("h2",{id:"doris-shuffle-\u65b9\u5f0f"},"Doris Shuffle \u65b9\u5f0f"),(0,a.kt)("p",null,"Doris \u652f\u6301 4 \u79cd Shuffle \u65b9\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Broadcast Join"),(0,a.kt)("p",{parentName:"li"},"\u5b83\u8981\u6c42\u628a\u53f3\u8868\u5168\u91cf\u7684\u6570\u636e\u90fd\u53d1\u9001\u5230\u5de6\u8868\u4e0a\uff0c\u5373\u6bcf\u4e00\u4e2a\u53c2\u4e0e Join \u7684\u8282\u70b9\uff0c\u5b83\u90fd\u62e5\u6709\u53f3\u8868\u5168\u91cf\u7684\u6570\u636e\uff0c\u4e5f\u5c31\u662f T(R)\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5b83\u9002\u7528\u7684\u573a\u666f\u662f\u6bd4\u8f83\u901a\u7528\u7684\uff0c\u540c\u65f6\u80fd\u591f\u652f\u6301 Hash Join \u548c Nest loop Join\uff0c\u5b83\u7684\u7f51\u7edc\u5f00\u9500 N * T(R)\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image-20220523152004731",src:n(94981).Z,width:"678",height:"316"})),(0,a.kt)("p",{parentName:"li"},"\u5de6\u8868\u6570\u636e\u4e0d\u79fb\u52a8\uff0c\u53f3\u8868\u6570\u636e\u53d1\u9001\u5230\u5de6\u8868\u6570\u636e\u7684\u626b\u63cf\u8282\u70b9\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shuffle Join"),(0,a.kt)("p",{parentName:"li"},"\u5f53\u8fdb\u884c Hash Join \u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7 Join \u5217\u8ba1\u7b97\u5bf9\u5e94\u7684 Hash \u503c\uff0c\u5e76\u8fdb\u884c Hash \u5206\u6876\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5b83\u7684\u7f51\u7edc\u5f00\u9500\u5219\u662f\uff1aT\uff08R\uff09 + T\uff08N\uff09\uff0c\u4f46\u5b83\u53ea\u80fd\u652f\u6301 Hash Join\uff0c\u56e0\u4e3a\u5b83\u662f\u6839\u636e Join \u7684\u6761\u4ef6\u4e5f\u53bb\u505a\u8ba1\u7b97\u5206\u6876\u7684\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image-20220523151902368",src:n(31639).Z,width:"678",height:"250"})),(0,a.kt)("p",{parentName:"li"},"\u5de6\u53f3\u8868\u6570\u636e\u6839\u636e\u5206\u533a\uff0c\u8ba1\u7b97\u7684\u8bb0\u8fc7\u53d1\u9001\u5230\u4e0d\u540c\u7684\u5206\u533a\u8282\u70b9\u4e0a\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Bucket Shuffle Join"),(0,a.kt)("p",{parentName:"li"},"Doris \u7684\u8868\u6570\u636e\u672c\u8eab\u662f\u901a\u8fc7 Hash \u8ba1\u7b97\u5206\u6876\u7684\uff0c\u6240\u4ee5\u5c31\u53ef\u4ee5\u5229\u7528\u8868\u672c\u8eab\u7684\u5206\u6876\u5217\u7684\u6027\u8d28\u6765\u8fdb\u884c Join \u6570\u636e\u7684 Shuffle\u3002\u5047\u5982\u4e24\u5f20\u8868\u9700\u8981\u505a Join\uff0c\u5e76\u4e14 Join \u5217\u662f\u5de6\u8868\u7684\u5206\u6876\u5217\uff0c\u90a3\u4e48\u5de6\u8868\u7684\u6570\u636e\u5176\u5b9e\u53ef\u4ee5\u4e0d\u7528\u53bb\u79fb\u52a8\u53f3\u8868\u901a\u8fc7\u5de6\u8868\u7684\u6570\u636e\u5206\u6876\u53d1\u9001\u6570\u636e\u5c31\u53ef\u4ee5\u5b8c\u6210  Join  \u7684\u8ba1\u7b97\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5b83\u7684\u7f51\u7edc\u5f00\u9500\u5219\u662f\uff1aT\uff08R\uff09\u76f8\u5f53\u4e8e\u53ea Shuffle \u53f3\u8868\u7684\u6570\u636e\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image-20220523151653562",src:n(64064).Z,width:"812",height:"302"})),(0,a.kt)("p",{parentName:"li"},"\u5de6\u8868\u6570\u636e\u4e0d\u79fb\u52a8\uff0c\u53f3\u8868\u6570\u636e\u6839\u636e\u5206\u533a\u8ba1\u7b97\u7684\u7ed3\u679c\u53d1\u9001\u5230\u5de6\u8868\u626b\u8868\u7684\u8282\u70b9")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Colocate"),(0,a.kt)("p",{parentName:"li"},"\u5b83\u4e0e Bucket Shuffle Join \u76f8\u4f3c\uff0c\u76f8\u5f53\u4e8e\u5728\u6570\u636e\u5bfc\u5165\u7684\u65f6\u5019\uff0c\u6839\u636e\u9884\u8bbe\u7684 Join \u5217\u7684\u573a\u666f\u5df2\u7ecf\u505a\u597d\u4e86\u6570\u636e\u7684 Shuffle\u3002\u90a3\u4e48\u5b9e\u9645\u67e5\u8be2\u7684\u65f6\u5019\u5c31\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c Join \u8ba1\u7b97\u800c\u4e0d\u9700\u8981\u8003\u8651\u6570\u636e\u7684 Shuffle \u95ee\u9898\u4e86\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image-20220523151619754",src:n(21195).Z,width:"812",height:"186"})),(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u5df2\u7ecf\u9884\u5148\u5206\u533a\uff0c\u76f4\u63a5\u5728\u672c\u5730\u8fdb\u884c Join \u8ba1\u7b97"))),(0,a.kt)("h3",{id:"\u56db\u79cd-shuffle-\u65b9\u5f0f\u5bf9\u6bd4"},"\u56db\u79cd Shuffle \u65b9\u5f0f\u5bf9\u6bd4"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Shuffle\u65b9\u5f0f"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7f51\u7edc\u5f00\u9500"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7269\u7406\u7b97\u5b50"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9002\u7528\u573a\u666f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BroadCast"),(0,a.kt)("td",{parentName:"tr",align:null},"N * T(R)"),(0,a.kt)("td",{parentName:"tr",align:null},"Hash Join / Nest Loop Join"),(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Shuffle"),(0,a.kt)("td",{parentName:"tr",align:null},"T(S) + T(R)"),(0,a.kt)("td",{parentName:"tr",align:null},"Hash Join"),(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bucket Shuffle"),(0,a.kt)("td",{parentName:"tr",align:null},"T(R)"),(0,a.kt)("td",{parentName:"tr",align:null},"Hash Join"),(0,a.kt)("td",{parentName:"tr",align:null},"Join\u6761\u4ef6\u4e2d\u5b58\u5728\u5de6\u8868\u7684\u5206\u5e03\u5f0f\u5217\uff0c\u4e14\u5de6\u8868\u6267\u884c\u65f6\u4e3a\u5355\u5206\u533a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Colocate"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Hash Join"),(0,a.kt)("td",{parentName:"tr",align:null},"Join\u6761\u4ef6\u4e2d\u5b58\u5728\u5de6\u8868\u7684\u5206\u5e03\u5f0f\u5217\uff0c\u5207\u5de6\u53f3\u8868\u540c\u5c5e\u4e8e\u4e00\u4e2aColocate Group")))),(0,a.kt)("p",null,"N \uff1a \u53c2\u4e0e Join \u8ba1\u7b97\u7684 Instance \u4e2a\u6570"),(0,a.kt)("p",null,"T(\u5173\u7cfb) : \u5173\u7cfb\u7684 Tuple \u6570\u76ee"),(0,a.kt)("p",null,"\u4e0a\u9762\u8fd9 4 \u79cd\u65b9\u5f0f\u7075\u6d3b\u5ea6\u662f\u4ece\u9ad8\u5230\u4f4e\u7684\uff0c\u5b83\u5bf9\u8fd9\u4e2a\u6570\u636e\u5206\u5e03\u7684\u8981\u6c42\u662f\u8d8a\u6765\u8d8a\u4e25\u683c\uff0c\u4f46 Join \u8ba1\u7b97\u7684\u6027\u80fd\u4e5f\u662f\u8d8a\u6765\u8d8a\u597d\u7684\u3002"),(0,a.kt)("h2",{id:"runtime-filter--join-\u4f18\u5316"},"Runtime Filter  Join \u4f18\u5316"),(0,a.kt)("p",null,"Doris \u5728\u8fdb\u884c Hash Join \u8ba1\u7b97\u65f6\u4f1a\u5728\u53f3\u8868\u6784\u5efa\u4e00\u4e2a\u54c8\u5e0c\u8868\uff0c\u5de6\u8868\u6d41\u5f0f\u7684\u901a\u8fc7\u53f3\u8868\u7684\u54c8\u5e0c\u8868\u4ece\u800c\u5f97\u51fa Join \u7ed3\u679c\u3002\u800c RuntimeFilter \u5c31\u662f\u5145\u5206\u5229\u7528\u4e86\u53f3\u8868\u7684 Hash \u8868\uff0c\u5728\u53f3\u8868\u751f\u6210\u54c8\u5e0c\u8868\u7684\u65f6\uff0c\u540c\u65f6\u751f\u6210\u4e00\u4e2a\u57fa\u4e8e\u54c8\u5e0c\u8868\u6570\u636e\u7684\u4e00\u4e2a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u7136\u540e\u4e0b\u63a8\u5230\u5de6\u8868\u7684\u6570\u636e\u626b\u63cf\u8282\u70b9\u3002\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\uff0cDoris \u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u6570\u636e\u8fc7\u6ee4\u3002"),(0,a.kt)("p",null,"\u5047\u5982\u5de6\u8868\u662f\u4e00\u5f20\u5927\u8868\uff0c\u53f3\u8868\u662f\u4e00\u5f20\u5c0f\u8868\uff0c\u90a3\u4e48\u5229\u7528\u53f3\u8868\u751f\u6210\u7684\u8fc7\u6ee4\u6761\u4ef6\u5c31\u53ef\u4ee5\u628a\u7edd\u5927\u591a\u6570\u5728 Join \u5c42\u8981\u8fc7\u6ee4\u7684\u6570\u636e\u5728\u6570\u636e\u8bfb\u53d6\u65f6\u5c31\u63d0\u524d\u8fc7\u6ee4\uff0c\u8fd9\u6837\u5c31\u80fd\u5927\u5e45\u5ea6\u7684\u63d0\u5347 Join \u67e5\u8be2\u7684\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u5f53\u524d Doris \u652f\u6301\u4e09\u79cd\u7c7b\u578b RuntimeFilter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u79cd\u662f IN\uff0c\u5f88\u597d\u7406\u89e3\uff0c\u5c06\u4e00\u4e2a hashset \u4e0b\u63a8\u5230\u6570\u636e\u626b\u63cf\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u79cd\u5c31\u662f BloomFilter\uff0c\u5c31\u662f\u5229\u7528\u54c8\u5e0c\u8868\u7684\u6570\u636e\u6784\u9020\u4e00\u4e2a BloomFilter\uff0c\u7136\u540e\u628a\u8fd9\u4e2a BloomFilter \u4e0b\u63a8\u5230\u67e5\u8be2\u6570\u636e\u7684\u626b\u63cf\u8282\u70b9\u3002\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\u4e00\u79cd\u5c31\u662f MinMax\uff0c\u5c31\u662f\u4e2a Range \u8303\u56f4\uff0c\u901a\u8fc7\u53f3\u8868\u6570\u636e\u786e\u5b9a Range \u8303\u56f4\u4e4b\u540e\uff0c\u4e0b\u63a8\u7ed9\u6570\u636e\u626b\u63cf\u8282\u70b9\u3002")),(0,a.kt)("p",null,"Runtime Filter \u9002\u7528\u7684\u573a\u666f\u6709\u4e24\u4e2a\u8981\u6c42\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u8981\u6c42\u5c31\u662f\u5de6\u8868\u5927\u53f3\u8868\u5c0f\uff0c\u56e0\u4e3a\u6784\u5efa Runtime Filter\u662f\u9700\u8981\u627f\u62c5\u8ba1\u7b97\u6210\u672c\u7684\uff0c\u5305\u62ec\u4e00\u4e9b\u5185\u5b58\u7684\u5f00\u9500\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u8981\u6c42\u5c31\u662f\u5de6\u53f3\u8868 Join \u51fa\u6765\u7684\u7ed3\u679c\u5f88\u5c11\uff0c\u8bf4\u660e\u8fd9\u4e2a Join \u53ef\u4ee5\u8fc7\u6ee4\u6389\u5de6\u8868\u7684\u7edd\u5927\u90e8\u5206\u6570\u636e\u3002")),(0,a.kt)("p",null,"\u5f53\u7b26\u5408\u4e0a\u9762\u4e24\u4e2a\u6761\u4ef6\u7684\u60c5\u51b5\u4e0b\uff0c\u5f00\u542f Runtime Filter \u5c31\u80fd\u6536\u83b7\u6bd4\u8f83\u597d\u7684\u6548\u679c"),(0,a.kt)("p",null,"\u5f53 Join \u5217\u4e3a\u5de6\u8868\u7684 Key \u5217\u65f6\uff0cRuntimeFilter \u4f1a\u4e0b\u63a8\u5230\u5b58\u50a8\u5f15\u64ce\u3002Doris \u672c\u8eab\u652f\u6301\u5ef6\u8fdf\u7269\u5316\uff0c"),(0,a.kt)("p",null,"\u5ef6\u8fdf\u7269\u5316\u7b80\u5355\u6765\u8bf4\u662f\u8fd9\u6837\u7684\uff1a\u5047\u5982\u9700\u8981\u626b\u63cf A\u3001B\u3001C \u4e09\u5217\uff0c\u5728 A \u5217\u4e0a\u6709\u4e00\u4e2a\u8fc7\u6ee4\u6761\u4ef6: A \u7b49\u4e8e 2\uff0c\u8981\u626b\u63cf 100 \u884c\u7684\u8bdd\uff0c\u53ef\u4ee5\u5148\u628a A \u5217\u7684 100 \u884c\u626b\u63cf\u51fa\u6765\uff0c\u518d\u901a\u8fc7 A = 2 \u8fd9\u4e2a\u8fc7\u6ee4\u6761\u4ef6\u8fc7\u6ee4\u3002\u4e4b\u540e\u901a\u8fc7\u8fc7\u6ee4\u5b8c\u6210\u540e\u7684\u7ed3\u679c\uff0c\u518d\u53bb\u8bfb\u53d6 B\u3001C \u5217\uff0c\u8fd9\u6837\u5c31\u80fd\u6781\u5927\u7684\u964d\u4f4e\u6570\u636e\u7684\u8bfb\u53d6 IO\u3002\u6240\u4ee5\u8bf4 Runtime Filter \u5982\u679c\u5728 Key \u5217\u4e0a\u751f\u6210\uff0c\u540c\u65f6\u5229\u7528 Doris \u672c\u8eab\u7684\u5ef6\u8fdf\u7269\u5316\u6765\u8fdb\u4e00\u6b65\u63d0\u5347\u67e5\u8be2\u7684\u6027\u80fd\u3002"),(0,a.kt)("h3",{id:"runtime-filter-\u7c7b\u578b"},"Runtime Filter \u7c7b\u578b"),(0,a.kt)("p",null,"Doris \u63d0\u4f9b\u4e86\u4e09\u79cd\u4e0d\u540c\u7684 Runtime Filter \u7c7b\u578b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IN")," \u7684\u4f18\u70b9\u5c31\u662f\u6548\u679c\u8fc7\u6ee4\u6548\u679c\u660e\u663e\uff0c\u4e14\u5feb\u901f\u3002\u5b83\u7684\u7f3a\u70b9\u9996\u5148\u7b2c\u4e00\u4e2a\u5b83\u53ea\u9002\u7528\u4e8e BroadCast\uff0c\u7b2c\u4e8c\uff0c\u5b83\u53f3\u8868\u8d85\u8fc7\u4e00\u5b9a\u6570\u636e\u91cf\u7684\u65f6\u5019\u5c31\u5931\u6548\u4e86\uff0c\u5f53\u524d Doris \u76ee\u524d\u914d\u7f6e\u7684\u662f1024\uff0c\u5373\u53f3\u8868\u5982\u679c\u5927\u4e8e 1024\uff0cIN \u7684 Runtime Filter \u5c31\u76f4\u63a5\u5931\u6548\u4e86\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MinMax")," \u7684\u4f18\u70b9\u662f\u5f00\u9500\u6bd4\u8f83\u5c0f\u3002\u5b83\u7684\u7f3a\u70b9\u5c31\u662f\u5bf9\u6570\u503c\u5217\u8fd8\u6709\u6bd4\u8f83\u597d\u7684\u6548\u679c\uff0c\u4f46\u5bf9\u4e8e\u975e\u6570\u503c\u5217\uff0c\u57fa\u672c\u4e0a\u5c31\u6ca1\u4ec0\u4e48\u6548\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bloom Filter")," \u7684\u7279\u70b9\u5c31\u662f\u901a\u7528\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u7c7b\u578b\u3001\u6548\u679c\u4e5f\u6bd4\u8f83\u597d\u3002\u7f3a\u70b9\u5c31\u662f\u5b83\u7684\u914d\u7f6e\u6bd4\u8f83\u590d\u6742\u5e76\u4e14\u8ba1\u7b97\u8f83\u9ad8\u3002")),(0,a.kt)("h2",{id:"join-reorder"},"Join Reorder"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u4e00\u65e6\u6d89\u53ca\u5230\u591a\u8868 Join\uff0cJoin \u7684\u987a\u5e8f\u5bf9\u6574\u4e2a Join \u67e5\u8be2\u7684\u6027\u80fd\u662f\u5f71\u54cd\u5f88\u5927\u7684\u3002\u5047\u8bbe\u6709\u4e09\u5f20\u8868 Join\uff0c\u53c2\u8003\u4e0b\u9762\u8fd9\u5f20\u56fe\uff0c\u5de6\u8fb9\u662f a \u8868\u8ddf b \u5f20\u8868\u5148\u505a Join\uff0c\u4e2d\u95f4\u7ed3\u679c\u7684\u6709 2000 \u884c\uff0c\u7136\u540e\u4e0e c \u8868\u518d\u8fdb\u884c Join \u8ba1\u7b97\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u770b\u53f3\u56fe\uff0c\u628a Join \u7684\u987a\u5e8f\u8c03\u6574\u4e86\u4e00\u4e0b\u3002\u628a a \u8868\u5148\u4e0e c \u8868 Join\uff0c\u751f\u6210\u7684\u4e2d\u95f4\u7ed3\u679c\u53ea\u6709 100\uff0c\u7136\u540e\u6700\u7ec8\u518d\u4e0e b \u8868 Join \u8ba1\u7b97\u3002\u6700\u7ec8\u7684 Join \u7ed3\u679c\u662f\u4e00\u6837\u7684\uff0c\u4f46\u662f\u5b83\u751f\u6210\u7684\u4e2d\u95f4\u7ed3\u679c\u6709 20 \u500d\u7684\u5dee\u8ddd\uff0c\u8fd9\u5c31\u4f1a\u4ea7\u751f\u4e00\u4e2a\u5f88\u5927\u7684\u6027\u80fd Diff \u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220523152639123",src:n(27119).Z,width:"1200",height:"422"})),(0,a.kt)("p",null,"Doris \u76ee\u524d\u652f\u6301\u57fa\u4e8e\u89c4\u5219\u7684 Join Reorder \u7b97\u6cd5\u3002\u5b83\u7684\u903b\u8f91\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8ba9\u5927\u8868\u3001\u8ddf\u5c0f\u8868\u5c3d\u91cf\u505a Join\uff0c\u5b83\u751f\u6210\u7684\u4e2d\u95f4\u7ed3\u679c\u662f\u5c3d\u53ef\u80fd\u5c0f\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u628a\u6709\u6761\u4ef6\u7684 Join \u8868\u5f80\u524d\u653e\uff0c\u4e5f\u5c31\u662f\u8bf4\u5c3d\u91cf\u8ba9\u6709\u6761\u4ef6\u7684 Join \u8868\u8fdb\u884c\u8fc7\u6ee4"),(0,a.kt)("li",{parentName:"ul"},"Hash Join \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e Nest Loop Join\uff0c\u56e0\u4e3a Hash join \u672c\u8eab\u662f\u6bd4 Nest Loop Join \u5feb\u5f88\u591a\u7684\u3002")),(0,a.kt)("h2",{id:"doris-join-\u8c03\u4f18\u65b9\u6cd5"},"Doris Join \u8c03\u4f18\u65b9\u6cd5"),(0,a.kt)("p",null,"Doris Join \u8c03\u4f18\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5229\u7528 Doris \u672c\u8eab\u63d0\u4f9b\u7684 Profile\uff0c\u53bb\u5b9a\u4f4d\u67e5\u8be2\u7684\u74f6\u9888\u3002Profile \u4f1a\u8bb0\u5f55 Doris \u6574\u4e2a\u67e5\u8be2\u5f53\u4e2d\u5404\u79cd\u4fe1\u606f\uff0c\u8fd9\u662f\u8fdb\u884c\u6027\u80fd\u8c03\u4f18\u7684\u4e00\u624b\u8d44\u6599\u3002\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e86\u89e3 Doris \u7684 Join \u673a\u5236\uff0c\u8fd9\u4e5f\u662f\u7b2c\u4e8c\u90e8\u5206\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u5185\u5bb9\u3002\u77e5\u5176\u7136\u77e5\u5176\u6240\u4ee5\u7136\u3001\u4e86\u89e3\u5b83\u7684\u673a\u5236\uff0c\u624d\u80fd\u5206\u6790\u5b83\u4e3a\u4ec0\u4e48\u6bd4\u8f83\u6162\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5229\u7528 Session \u53d8\u91cf\u53bb\u6539\u53d8 Join \u7684\u4e00\u4e9b\u884c\u4e3a\uff0c\u4ece\u800c\u5b9e\u73b0 Join \u7684\u8c03\u4f18\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b Query Plan \u53bb\u5206\u6790\u8fd9\u4e2a\u8c03\u4f18\u662f\u5426\u751f\u6548\u3002")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684 4 \u6b65\u57fa\u672c\u4e0a\u5b8c\u6210\u4e86\u4e00\u4e2a\u6807\u51c6\u7684 Join \u8c03\u4f18\u6d41\u7a0b\uff0c\u63a5\u7740\u5c31\u662f\u5b9e\u9645\u53bb\u67e5\u8be2\u9a8c\u8bc1\u5b83\uff0c\u770b\u770b\u6548\u679c\u5230\u5e95\u600e\u4e48\u6837\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u524d\u9762 4 \u79cd\u65b9\u5f0f\u4e32\u8054\u8d77\u6765\u4e4b\u540e\uff0c\u8fd8\u662f\u4e0d\u594f\u6548\u3002\u8fd9\u65f6\u5019\u53ef\u80fd\u5c31\u9700\u8981\u53bb\u505a Join \u8bed\u53e5\u7684\u6539\u5199\uff0c\u6216\u8005\u662f\u6570\u636e\u5206\u5e03\u7684\u8c03\u6574\u3001\u9700\u8981\u91cd\u65b0\u53bb Recheck \u6574\u4e2a\u6570\u636e\u5206\u5e03\u662f\u5426\u5408\u7406\uff0c\u5305\u62ec\u67e5\u8be2 Join \u8bed\u53e5\uff0c\u53ef\u80fd\u9700\u8981\u505a\u4e00\u4e9b\u624b\u52a8\u7684\u8c03\u6574\u3002\u5f53\u7136\u8fd9\u79cd\u65b9\u5f0f\u662f\u5fc3\u667a\u6210\u672c\u662f\u6bd4\u8f83\u9ad8\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u8981\u5728\u5c1d\u8bd5\u524d\u9762\u65b9\u5f0f\u4e0d\u594f\u6548\u7684\u60c5\u51b5\u4e0b\uff0c\u624d\u9700\u8981\u53bb\u505a\u8fdb\u4e00\u6b65\u7684\u5206\u6790\u3002"),(0,a.kt)("h2",{id:"\u8c03\u4f18\u6848\u4f8b\u5b9e\u6218"},"\u8c03\u4f18\u6848\u4f8b\u5b9e\u6218"),(0,a.kt)("h3",{id:"\u6848\u4f8b\u4e00"},"\u6848\u4f8b\u4e00"),(0,a.kt)("p",null,"\u4e00\u4e2a\u56db\u5f20\u8868 Join \u7684\u67e5\u8be2\uff0c\u901a\u8fc7 Profile \u7684\u65f6\u5019\u53d1\u73b0\u7b2c\u4e8c\u4e2a Join \u8017\u65f6\u5f88\u9ad8\uff0c\u8017\u65f6 14 \u79d2\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220523153600797",src:n(47375).Z,width:"852",height:"514"})),(0,a.kt)("p",null,"\u8fdb\u4e00\u6b65\u5206\u6790 Profile \u4e4b\u540e\uff0c\u53d1\u73b0 BuildRows\uff0c\u5c31\u662f\u53f3\u8868\u7684\u6570\u636e\u91cf\u662f\u5927\u6982 2500 \u4e07\u3002\u800c ProbeRows \uff08 ProbeRows \u662f\u5de6\u8868\u7684\u6570\u636e\u91cf\uff09\u53ea\u6709 1 \u4e07\u591a\u3002\u8fd9\u79cd\u573a\u666f\u4e0b\u53f3\u8868\u662f\u8fdc\u8fdc\u5927\u4e8e\u5de6\u8868\uff0c\u8fd9\u663e\u7136\u662f\u4e2a\u4e0d\u5408\u7406\u7684\u60c5\u51b5\u3002\u8fd9\u663e\u7136\u8bf4\u660e Join \u7684\u987a\u5e8f\u51fa\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898\u3002\u8fd9\u65f6\u5019\u5c1d\u8bd5\u6539\u53d8 Session \u53d8\u91cf\uff0c\u5f00\u542f Join Reorder\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set enable_cost_based_join_reorder = true\n")),(0,a.kt)("p",null,"\u8fd9\u6b21\u8017\u65f6\u4ece 14 \u79d2\u964d\u5230\u4e86 4 \u79d2\uff0c\u6027\u80fd\u63d0\u5347\u4e86 3 \u500d\u591a\u3002"),(0,a.kt)("p",null,"\u6b64\u65f6\u518d Check Profile \u7684\u65f6\u5019\uff0c\u5de6\u53f3\u8868\u7684\u987a\u5e8f\u5df2\u7ecf\u8c03\u6574\u6b63\u786e\uff0c\u5373\u53f3\u8868\u662f\u5927\u8868\uff0c\u5de6\u8868\u662f\u5c0f\u8868\u3002\u57fa\u4e8e\u5c0f\u8868\u53bb\u6784\u5efa\u54c8\u5e0c\u8868\uff0c\u5f00\u9500\u662f\u5f88\u5c0f\u7684\uff0c\u8fd9\u5c31\u662f\u5178\u578b\u7684\u4e00\u4e2a\u5229\u7528 Join Reorder \u53bb\u63d0\u5347 Join \u6027\u80fd\u7684\u4e00\u4e2a\u573a\u666f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220523153757607",src:n(92428).Z,width:"848",height:"508"})),(0,a.kt)("h3",{id:"\u6848\u4f8b\u4e8c"},"\u6848\u4f8b\u4e8c"),(0,a.kt)("p",null,"\u5b58\u5728\u4e00\u4e2a\u6162\u67e5\u8be2\uff0c\u67e5\u770b Profile \u4e4b\u540e\uff0c\u6574\u4e2a Join \u8282\u70b9\u8017\u65f6\u5927\u698244\u79d2\u3002\u5b83\u7684\u53f3\u8868\u6709 1000 \u4e07\uff0c\u5de6\u8868\u6709 6000 \u4e07\uff0c\u6700\u7ec8\u8fd4\u56de\u7684\u7ed3\u679c\u4e5f\u53ea\u6709 6000 \u4e07\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220523153913059",src:n(36991).Z,width:"914",height:"558"})),(0,a.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u5927\u81f4\u7684\u4f30\u7b97\u51fa\u8fc7\u6ee4\u7387\u662f\u5f88\u9ad8\u7684\uff0c\u90a3\u4e3a\u4ec0\u4e48 Runtime Filter \u6ca1\u6709\u751f\u6548\u5462\uff1f\u901a\u8fc7 Query Plan \u53bb\u67e5\u770b\u5b83\uff0c\u53d1\u73b0\u5b83\u53ea\u5f00\u542f\u4e86 IN \u7684 Runtime Filter\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220523153958828",src:n(88577).Z,width:"1004",height:"442"})),(0,a.kt)("p",null,"\u5f53\u53f3\u8868\u8d85\u8fc71024\u884c\u7684\u8bdd\uff0c IN \u662f\u4e0d\u751f\u6548\u7684\uff0c\u6240\u4ee5\u6839\u672c\u8d77\u4e0d\u5230\u4ec0\u4e48\u8fc7\u6ee4\u7684\u6548\u679c\uff0c\u6240\u4ee5\u5c1d\u8bd5\u8c03\u6574 RuntimeFilter \u7684\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6539\u4e3a\u4e86 BloomFilter\uff0c\u5de6\u8868\u7684 6000 \u4e07\u6761\u6570\u636e\u8fc7\u6ee4\u4e86 5900 \u4e07\u6761\u3002\u57fa\u672c\u4e0a 99% \u7684\u6570\u636e\u90fd\u88ab\u8fc7\u6ee4\u6389\u4e86\uff0c\u8fd9\u4e2a\u6548\u679c\u662f\u5f88\u663e\u8457\u7684\u3002\u67e5\u8be2\u4e5f\u4ece\u539f\u6765\u7684 44 \u79d2\u964d\u5230\u4e86 13 \u79d2\uff0c\u6027\u80fd\u63d0\u5347\u4e86\u5927\u6982\u4e5f\u662f\u4e09\u500d\u591a\u3002"),(0,a.kt)("h3",{id:"\u6848\u4f8b\u4e09"},"\u6848\u4f8b\u4e09"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u6bd4\u8f83\u6781\u7aef\u7684 Case\uff0c\u901a\u8fc7\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\u8c03\u4f18\u4e5f\u6ca1\u6709\u529e\u6cd5\u89e3\u51b3\uff0c\u56e0\u4e3a\u5b83\u6d89\u53ca\u5230 SQL Rewrite\uff0c\u6240\u4ee5\u8fd9\u91cc\u5217\u51fa\u6765\u4e86\u539f\u59cb\u7684 SQL \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select 100.00 * sum (case\n        when P_type like 'PROMOS'\n        then 1 extendedprice * (1 - 1 discount)\n        else 0\n        end ) / sum(1 extendedprice * (1 - 1 discount)) as promo revenue\nfrom lineitem, part\nwhere\n    1_partkey = p_partkey\n    and 1_shipdate >= date '1997-06-01'\n    and 1 shipdate < date '1997-06-01' + interval '1' month\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a Join \u67e5\u8be2\u662f\u5f88\u7b80\u5355\u7684\uff0c\u5355\u7eaf\u7684\u4e00\u4e2a\u5de6\u53f3\u8868\u7684 Join \u3002\u5f53\u7136\u5b83\u4e0a\u9762\u6709\u4e00\u4e9b\u8fc7\u6ee4\u6761\u4ef6\uff0c\u6253\u5f00 Profile \u7684\u65f6\u5019\uff0c\u53d1\u73b0\u6574\u4e2a\u67e5\u8be2 Hash Join \u6267\u884c\u4e86\u4e09\u5206\u591a\u949f\uff0c\u5b83\u662f\u4e00\u4e2a BroadCast \u7684 Join\uff0c\u5b83\u7684\u53f3\u8868\u6709 2 \u4ebf\u6761\uff0c\u5de6\u8868\u53ea\u6709 70 \u4e07\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u9009\u62e9\u4e86 Broadcast Join \u662f\u4e0d\u5408\u7406\u7684\uff0c\u8fd9\u76f8\u5f53\u4e8e\u8981\u628a 2 \u4ebf\u6761\u505a\u4e00\u4e2a Hash Table\uff0c\u7136\u540e\u7528 70 \u4e07\u6761\u904d\u5386\u4e24\u4ebf\u6761\u7684 Hash Table \uff0c\u8fd9\u663e\u7136\u662f\u4e0d\u5408\u7406\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220523154712519",src:n(5827).Z,width:"556",height:"454"})),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48\u4f1a\u4ea7\u751f\u4e0d\u5408\u7406\u7684 Join \u987a\u5e8f\u5462\uff1f\u5176\u5b9e\u8fd9\u4e2a\u5de6\u8868\u662f\u4e00\u4e2a 10 \u4ebf\u6761\u7ea7\u522b\u7684\u5927\u8868\uff0c\u5b83\u4e0a\u9762\u52a0\u4e86\u4e24\u4e2a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u52a0\u5b8c\u8fd9\u4e24\u4e2a\u8fc7\u6ee4\u6761\u4ef6\u4e4b\u540e\uff0c 10 \u4ebf\u6761\u7684\u6570\u636e\u5c31\u5269 70 \u4e07\u6761\u4e86\u3002\u4f46 Doris \u76ee\u524d\u6ca1\u6709\u4e00\u4e2a\u597d\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7684\u6846\u67b6\uff0c\u6240\u4ee5\u5b83\u4e0d\u77e5\u9053\u8fd9\u4e2a\u8fc7\u6ee4\u6761\u4ef6\u7684\u8fc7\u6ee4\u7387\u5230\u5e95\u600e\u4e48\u6837\u3002\u6240\u4ee5\u8fd9\u4e2a Join \u987a\u5e8f\u5b89\u6392\u7684\u65f6\u5019\uff0c\u5c31\u9009\u62e9\u4e86\u9519\u8bef\u7684 Join \u7684\u5de6\u53f3\u8868\u987a\u5e8f\uff0c\u5bfc\u81f4\u5b83\u7684\u6027\u80fd\u662f\u6781\u5176\u4f4e\u4e0b\u7684\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u662f\u6539\u5199\u5b8c\u6210\u4e4b\u540e\u7684\u4e00\u4e2a SQL \u8bed\u53e5\uff0c\u5728 Join \u540e\u9762\u6dfb\u52a0\u4e86\u4e00\u4e2aJoin Hint\uff0c\u5728Join \u540e\u9762\u52a0\u4e00\u4e2a\u65b9\u62ec\u53f7\uff0c\u7136\u540e\u628a\u9700\u8981\u7684 Join \u65b9\u5f0f\u5199\u5165\u3002\u8fd9\u91cc\u9009\u62e9\u4e86 Shuffle Join\uff0c\u53ef\u4ee5\u770b\u5230\u53f3\u8fb9\u5b83\u5b9e\u9645\u67e5\u8be2\u8ba1\u5212\u91cc\u9762\u770b\u5230\u8fd9\u4e2a\u6570\u636e\u786e\u5b9e\u662f\u505a\u4e86 Partition \uff0c\u539f\u5148 3 \u5206\u949f\u7684\u8017\u65f6\u901a\u8fc7\u8fd9\u6837\u7684\u6539\u5199\u5b8c\u4e4b\u540e\u53ea\u5269\u4e0b 7 \u79d2\uff0c\u6027\u80fd\u63d0\u5347\u660e\u663e"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220523160915229",src:n(454).Z,width:"572",height:"674"})),(0,a.kt)("h2",{id:"doris-join-\u8c03\u4f18\u5efa\u8bae"},"Doris Join \u8c03\u4f18\u5efa\u8bae"),(0,a.kt)("p",null,"\u6700\u540e\u6211\u4eec\u603b\u7ed3 Doris Join \u4f18\u5316\u8c03\u4f18\u7684\u56db\u70b9\u5efa\u8bae\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u70b9\uff1a\u5728\u505a Join \u7684\u65f6\u5019\uff0c\u8981\u5c3d\u91cf\u9009\u62e9\u540c\u7c7b\u578b\u6216\u8005\u7b80\u5355\u7c7b\u578b\u7684\u5217\uff0c\u540c\u7c7b\u578b\u7684\u8bdd\u5c31\u51cf\u5c11\u5b83\u7684\u6570\u636e Cast\uff0c\u7b80\u5355\u7c7b\u578b\u672c\u8eab Join \u8ba1\u7b97\u5c31\u5f88\u5feb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u70b9\uff1a\u5c3d\u91cf\u9009\u62e9 Key \u5217\u8fdb\u884c Join\uff0c \u539f\u56e0\u524d\u9762\u5728 Runtime Filter \u7684\u65f6\u5019\u4e5f\u4ecb\u7ecd\u4e86\uff0cKey \u5217\u5728\u5ef6\u8fdf\u7269\u5316\u4e0a\u80fd\u8d77\u5230\u4e00\u4e2a\u6bd4\u8f83\u597d\u7684\u6548\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u70b9\uff1a\u5927\u8868\u4e4b\u95f4\u7684 Join \uff0c\u5c3d\u91cf\u8ba9\u5b83 Co-location \uff0c\u56e0\u4e3a\u5927\u8868\u4e4b\u95f4\u7684\u7f51\u7edc\u5f00\u9500\u662f\u5f88\u5927\u7684\uff0c\u5982\u679c\u9700\u8981\u53bb\u505a Shuffle \u7684\u8bdd\uff0c\u4ee3\u4ef7\u662f\u5f88\u9ad8\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u70b9\uff1a\u5408\u7406\u7684\u4f7f\u7528 Runtime Filter\uff0c\u5b83\u5728 Join \u8fc7\u6ee4\u7387\u9ad8\u7684\u573a\u666f\u4e0b\u6548\u679c\u662f\u975e\u5e38\u663e\u8457\u7684\u3002\u4f46\u662f\u5b83\u5e76\u4e0d\u662f\u4e07\u7075\u836f\uff0c\u800c\u662f\u6709\u4e00\u5b9a\u526f\u4f5c\u7528\u7684\uff0c\u6240\u4ee5\u9700\u8981\u6839\u636e\u5177\u4f53\u7684 SQL \u7684\u7c92\u5ea6\u505a\u5f00\u5173\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\uff1a\u8981\u6d89\u53ca\u5230\u591a\u8868 Join \u7684\u65f6\u5019\uff0c\u9700\u8981\u53bb\u5224\u65ad Join \u7684\u5408\u7406\u6027\u3002\u5c3d\u91cf\u4fdd\u8bc1\u5de6\u8868\u4e3a\u5927\u8868\uff0c\u53f3\u8868\u4e3a\u5c0f\u8868\uff0c\u7136\u540e Hash Join \u4f1a\u4f18\u4e8e Nest Loop Join\u3002\u5fc5\u8981\u7684\u65f6\u53ef\u4ee5\u901a\u8fc7 SQL Rewrite\uff0c\u5229\u7528 Hint \u53bb\u8c03\u6574 Join \u7684\u987a\u5e8f\u3002")))}m.isMDXComponent=!0},21195:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523151619754-3bea8f49aed07cd8707f03d7aeccb57a.png"},64064:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523151653562-fd271b904ccbcb92772d20859c4f911c.png"},31639:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523151902368-0d9eb00032651d13327e8f892c900d5d.png"},94981:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523152004731-75f68720dea2695d7041d74458cd9971.png"},27119:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523152639123-ccc02aa26d7cfa769f09024ebd8395e1.png"},47375:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523153600797-8c0110f8498c2b6b54fe9dfa6b6f89bf.png"},92428:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523153757607-aced93bcd65de383a68aca075909885c.png"},36991:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523153913059-c430baf5eae63c272d3e1355636ccad8.png"},88577:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523153958828-1e0aaf5df637b5db23a27c9f97c22bea.png"},5827:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523154712519-ff90fd895d5eed317bcc989f77b5b8bb.png"},454:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-20220523160915229-e2e523c3e6e9e79d17e9849c1d8aa8f1.png"}}]);