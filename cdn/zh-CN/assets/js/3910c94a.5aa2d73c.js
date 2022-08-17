"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[51868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u96c6\u7fa4\u5347\u7ea7",language:"zh-CN"},o=void 0,i={unversionedId:"installing/upgrade",id:"version-0.15/installing/upgrade",title:"\u96c6\u7fa4\u5347\u7ea7",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/installing/upgrade.md",sourceDirName:"installing",slug:"/installing/upgrade",permalink:"/zh-CN/docs/0.15/installing/upgrade",draft:!1,tags:[],version:"0.15",frontMatter:{title:"\u96c6\u7fa4\u5347\u7ea7",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5b89\u88c5\u4e0e\u90e8\u7f72",permalink:"/zh-CN/docs/0.15/installing/install-deploy"},next:{title:"\u57fa\u7840\u4f7f\u7528\u6307\u5357",permalink:"/zh-CN/docs/0.15/getting-started/basic-usage"}},p={},c=[{value:"\u524d\u7f6e\u5de5\u4f5c",id:"\u524d\u7f6e\u5de5\u4f5c",level:2},{value:"\u6d4b\u8bd5 BE \u5347\u7ea7\u6b63\u786e\u6027",id:"\u6d4b\u8bd5-be-\u5347\u7ea7\u6b63\u786e\u6027",level:2},{value:"\u6d4b\u8bd5 FE \u5143\u6570\u636e\u517c\u5bb9\u6027",id:"\u6d4b\u8bd5-fe-\u5143\u6570\u636e\u517c\u5bb9\u6027",level:2},{value:"\u5347\u7ea7\u51c6\u5907",id:"\u5347\u7ea7\u51c6\u5907",level:2},{value:"\u6eda\u52a8\u5347\u7ea7",id:"\u6eda\u52a8\u5347\u7ea7",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u96c6\u7fa4\u5347\u7ea7"},"\u96c6\u7fa4\u5347\u7ea7"),(0,a.kt)("p",null,"Doris \u53ef\u4ee5\u901a\u8fc7\u6eda\u52a8\u5347\u7ea7\u7684\u65b9\u5f0f\uff0c\u5e73\u6ed1\u8fdb\u884c\u5347\u7ea7\u3002\u5efa\u8bae\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u5b89\u5168\u5347\u7ea7\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a  "),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u4ee5\u4e0b\u65b9\u5f0f\u5747\u5efa\u7acb\u5728\u9ad8\u53ef\u7528\u90e8\u7f72\u7684\u60c5\u51b5\u4e0b\u3002\u5373\u6570\u636e 3 \u526f\u672c\uff0cFE \u9ad8\u53ef\u7528\u60c5\u51b5\u4e0b\u3002  "))),(0,a.kt)("h2",{id:"\u524d\u7f6e\u5de5\u4f5c"},"\u524d\u7f6e\u5de5\u4f5c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5173\u95ed\u96c6\u7fa4\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u529f\u80fd"),(0,a.kt)("p",{parentName:"li"},"\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u8282\u70b9\u91cd\u542f\uff0c\u6240\u4ee5\u53ef\u80fd\u4f1a\u89e6\u53d1\u4e0d\u5fc5\u8981\u7684\u96c6\u7fa4\u5747\u8861\u548c\u526f\u672c\u4fee\u590d\u903b\u8f91\u3002\u53ef\u4ee5\u5148\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5173\u95ed\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'# \u5173\u95ed\u526f\u672c\u5747\u8861\u903b\u8f91\u3002\u5173\u95ed\u540e\uff0c\u4e0d\u4f1a\u518d\u89e6\u53d1\u666e\u901a\u8868\u526f\u672c\u7684\u5747\u8861\u64cd\u4f5c\u3002\n$ mysql-client > admin set frontend config("disable_balance" = "true");\n\n# \u5173\u95ed colocation \u8868\u7684\u526f\u672c\u5747\u8861\u903b\u8f91\u3002\u5173\u95ed\u540e\uff0c\u4e0d\u4f1a\u518d\u51fa\u53d1 colocation \u8868\u7684\u526f\u672c\u91cd\u5206\u5e03\u64cd\u4f5c\u3002\n$ mysql-client > admin set frontend config("disable_colocate_balance");\n\n# \u5173\u95ed\u526f\u672c\u8c03\u5ea6\u903b\u8f91\u3002\u5173\u95ed\u540e\uff0c\u6240\u6709\u5df2\u4ea7\u751f\u7684\u526f\u672c\u4fee\u590d\u548c\u5747\u8861\u4efb\u52a1\u4e0d\u4f1a\u518d\u88ab\u8c03\u5ea6\u3002\n$ mysql-client > admin set frontend config("disable_tablet_scheduler" = "true");\n')),(0,a.kt)("p",{parentName:"li"},"\u5f53\u96c6\u7fa4\u5347\u7ea7\u5b8c\u6bd5\u540e\uff0c\u5728\u901a\u8fc7\u4ee5\u4e0a\u547d\u4ee4\u5c06\u5bf9\u5e94\u914d\u7f6e\u8bbe\u4e3a\u539f\u503c\u5373\u53ef\u3002"))),(0,a.kt)("h2",{id:"\u6d4b\u8bd5-be-\u5347\u7ea7\u6b63\u786e\u6027"},"\u6d4b\u8bd5 BE \u5347\u7ea7\u6b63\u786e\u6027"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4efb\u610f\u9009\u62e9\u4e00\u4e2a BE \u8282\u70b9\uff0c\u90e8\u7f72\u6700\u65b0\u7684 palo_be \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u542f BE \u8282\u70b9\uff0c\u901a\u8fc7 BE \u65e5\u5fd7 be.INFO\uff0c\u67e5\u770b\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u542f\u52a8\u5931\u8d25\uff0c\u53ef\u4ee5\u5148\u6392\u67e5\u539f\u56e0\u3002\u5982\u679c\u9519\u8bef\u4e0d\u53ef\u6062\u590d\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 DROP BACKEND \u5220\u9664\u8be5 BE\u3001\u6e05\u7406\u6570\u636e\u540e\uff0c\u4f7f\u7528\u4e0a\u4e00\u4e2a\u7248\u672c\u7684 palo_be \u91cd\u65b0\u542f\u52a8 BE\u3002\u7136\u540e\u91cd\u65b0 ADD BACKEND\u3002\uff08",(0,a.kt)("strong",{parentName:"li"},"\u8be5\u65b9\u6cd5\u4f1a\u5bfc\u81f4\u4e22\u5931\u4e00\u4e2a\u6570\u636e\u526f\u672c\uff0c\u8bf7\u52a1\u5fc5\u786e\u4fdd3\u526f\u672c\u5b8c\u6574\u7684\u60c5\u51b5\u4e0b\uff0c\u6267\u884c\u8fd9\u4e2a\u64cd\u4f5c\uff01\uff01\uff01"),"\uff09")),(0,a.kt)("h2",{id:"\u6d4b\u8bd5-fe-\u5143\u6570\u636e\u517c\u5bb9\u6027"},"\u6d4b\u8bd5 FE \u5143\u6570\u636e\u517c\u5bb9\u6027"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u91cd\u8981\uff01!\u5143\u6570\u636e\u517c\u5bb9\u6027\u5f02\u5e38\u5f88\u53ef\u80fd\u5bfc\u81f4\u6570\u636e\u65e0\u6cd5\u6062\u590d\uff01\uff01")),(0,a.kt)("li",{parentName:"ol"},"\u5355\u72ec\u4f7f\u7528\u65b0\u7248\u672c\u90e8\u7f72\u4e00\u4e2a\u6d4b\u8bd5\u7528\u7684 FE \u8fdb\u7a0b\uff08\u6bd4\u5982\u81ea\u5df1\u672c\u5730\u7684\u5f00\u53d1\u673a\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u6d4b\u8bd5\u7528\u7684 FE \u7684\u914d\u7f6e\u6587\u4ef6 fe.conf\uff0c\u5c06\u6240\u6709\u7aef\u53e3\u8bbe\u7f6e\u4e3a",(0,a.kt)("strong",{parentName:"li"},"\u4e0e\u7ebf\u4e0a\u4e0d\u540c"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 fe.conf \u6dfb\u52a0\u914d\u7f6e\uff1acluster_id=123456"),(0,a.kt)("li",{parentName:"ol"},"\u5728 fe.conf \u6dfb\u52a0\u914d\u7f6e\uff1ametadata","_","failure_recovery=true"),(0,a.kt)("li",{parentName:"ol"},"\u62f7\u8d1d\u7ebf\u4e0a\u73af\u5883 Master FE \u7684\u5143\u6570\u636e\u76ee\u5f55 palo-meta \u5230\u6d4b\u8bd5\u73af\u5883"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u62f7\u8d1d\u5230\u6d4b\u8bd5\u73af\u5883\u4e2d\u7684 palo-meta/image/VERSION \u6587\u4ef6\u4e2d\u7684 cluster_id \u4fee\u6539\u4e3a 123456\uff08\u5373\u4e0e\u7b2c3\u6b65\u4e2d\u76f8\u540c\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u8fd0\u884c sh bin/start_fe.sh \u542f\u52a8 FE"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7 FE \u65e5\u5fd7 fe.log \u89c2\u5bdf\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u542f\u52a8\u6210\u529f\uff0c\u8fd0\u884c sh bin/stop_fe.sh \u505c\u6b62\u6d4b\u8bd5\u73af\u5883\u7684 FE \u8fdb\u7a0b\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u4ee5\u4e0a 2-6 \u6b65\u7684\u76ee\u7684\u662f\u9632\u6b62\u6d4b\u8bd5\u73af\u5883\u7684FE\u542f\u52a8\u540e\uff0c\u9519\u8bef\u8fde\u63a5\u5230\u7ebf\u4e0a\u73af\u5883\u4e2d\u3002"))),(0,a.kt)("h2",{id:"\u5347\u7ea7\u51c6\u5907"},"\u5347\u7ea7\u51c6\u5907"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5b8c\u6210\u6570\u636e\u6b63\u786e\u6027\u9a8c\u8bc1\u540e\uff0c\u5c06 BE \u548c FE \u65b0\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5206\u53d1\u5230\u5404\u81ea\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u5e38\u5c0f\u7248\u672c\u5347\u7ea7\uff0cBE \u53ea\u9700\u5347\u7ea7 palo_be\uff1b\u800c FE \u53ea\u9700\u5347\u7ea7 palo-fe.jar\u3002\u5982\u679c\u662f\u5927\u7248\u672c\u5347\u7ea7\uff0c\u5219\u53ef\u80fd\u9700\u8981\u5347\u7ea7\u5176\u4ed6\u6587\u4ef6\uff08\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e bin/ lib/ \u7b49\u7b49\uff09\u5982\u679c\u4f60\u4e0d\u6e05\u695a\u662f\u5426\u9700\u8981\u66ff\u6362\u5176\u4ed6\u6587\u4ef6\uff0c\u5efa\u8bae\u5168\u90e8\u66ff\u6362\u3002")),(0,a.kt)("h2",{id:"\u6eda\u52a8\u5347\u7ea7"},"\u6eda\u52a8\u5347\u7ea7"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u786e\u8ba4\u65b0\u7248\u672c\u7684\u6587\u4ef6\u90e8\u7f72\u5b8c\u6210\u540e\u3002\u9010\u53f0\u91cd\u542f FE \u548c BE \u5b9e\u4f8b\u5373\u53ef\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u8bae\u9010\u53f0\u91cd\u542f BE \u540e\uff0c\u518d\u9010\u53f0\u91cd\u542f FE\u3002\u56e0\u4e3a\u901a\u5e38 Doris \u4fdd\u8bc1 FE \u5230 BE \u7684\u5411\u540e\u517c\u5bb9\u6027\uff0c\u5373\u8001\u7248\u672c\u7684 FE \u53ef\u4ee5\u8bbf\u95ee\u65b0\u7248\u672c\u7684 BE\u3002\u4f46\u53ef\u80fd\u4e0d\u652f\u6301\u8001\u7248\u672c\u7684 BE \u8bbf\u95ee\u65b0\u7248\u672c\u7684 FE\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u8bae\u786e\u8ba4\u524d\u4e00\u4e2a\u5b9e\u4f8b\u542f\u52a8\u6210\u529f\u540e\uff0c\u5728\u91cd\u542f\u4e0b\u4e00\u4e2a\u5b9e\u4f8b\u3002\u5b9e\u4f8b\u542f\u52a8\u6210\u529f\u7684\u6807\u8bc6\uff0c\u8bf7\u53c2\u9605\u5b89\u88c5\u90e8\u7f72\u6587\u6863\u3002")))}u.isMDXComponent=!0}}]);