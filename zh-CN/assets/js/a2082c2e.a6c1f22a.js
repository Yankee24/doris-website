"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[99393],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>c});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,d=u["".concat(i,".").concat(c)]||u[c]||k[c]||l;return t?n.createElement(d,p(p({ref:a},m),{},{components:t})):n.createElement(d,p({ref:a},m))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=u;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97938:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const l={title:"JSON\u683c\u5f0f\u6570\u636e\u5bfc\u5165",language:"zh-CN"},p=void 0,o={unversionedId:"data-operate/import/import-way/load-json-format",id:"data-operate/import/import-way/load-json-format",title:"JSON\u683c\u5f0f\u6570\u636e\u5bfc\u5165",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/import-way/load-json-format.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/load-json-format",permalink:"/zh-CN/docs/data-operate/import/import-way/load-json-format",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON\u683c\u5f0f\u6570\u636e\u5bfc\u5165",language:"zh-CN"},sidebar:"docs",previous:{title:"Insert Into",permalink:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual"},next:{title:"\u6570\u636e\u5bfc\u51fa",permalink:"/zh-CN/docs/data-operate/export/export-manual"}},i={},s=[{value:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f",id:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f",level:2},{value:"\u652f\u6301\u7684 Json \u683c\u5f0f",id:"\u652f\u6301\u7684-json-\u683c\u5f0f",level:2},{value:"streaming_load_json_max_mb \u53c2\u6570",id:"streaming_load_json_max_mb-\u53c2\u6570",level:3},{value:"fuzzy_parse \u53c2\u6570",id:"fuzzy_parse-\u53c2\u6570",level:3},{value:"Json Path",id:"json-path",level:2},{value:"Json Path \u548c Columns",id:"json-path-\u548c-columns",level:2},{value:"Json root",id:"json-root",level:2},{value:"NULL \u548c Default \u503c",id:"null-\u548c-default-\u503c",level:2},{value:"\u5e94\u7528\u793a\u4f8b",id:"\u5e94\u7528\u793a\u4f8b",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Routine Load",id:"routine-load",level:3}],m={toc:s};function k(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json\u683c\u5f0f\u6570\u636e\u5bfc\u5165"},"JSON\u683c\u5f0f\u6570\u636e\u5bfc\u5165"),(0,r.kt)("p",null,"Doris \u652f\u6301\u5bfc\u5165 JSON \u683c\u5f0f\u7684\u6570\u636e\u3002\u672c\u6587\u6863\u4e3b\u8981\u8bf4\u660e\u5728\u8fdb\u884cJSON\u683c\u5f0f\u6570\u636e\u5bfc\u5165\u65f6\u7684\u6ce8\u610f\u4e8b\u9879\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f"},"\u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f"),(0,r.kt)("p",null,"\u76ee\u524d\u53ea\u6709\u4ee5\u4e0b\u5bfc\u5165\u65b9\u5f0f\u652f\u6301 Json \u683c\u5f0f\u7684\u6570\u636e\u5bfc\u5165\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u672c\u5730 JSON \u683c\u5f0f\u7684\u6587\u4ef6\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"STREAM LOAD")," \u65b9\u5f0f\u5bfc\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},"ROUTINE LOAD")," \u8ba2\u9605\u5e76\u6d88\u8d39 Kafka \u4e2d\u7684 JSON \u683c\u5f0f\u6d88\u606f\u3002")),(0,r.kt)("p",null,"\u6682\u4e0d\u652f\u6301\u5176\u4ed6\u65b9\u5f0f\u7684 JSON \u683c\u5f0f\u6570\u636e\u5bfc\u5165\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684-json-\u683c\u5f0f"},"\u652f\u6301\u7684 Json \u683c\u5f0f"),(0,r.kt)("p",null,"\u5f53\u524d\u4ec5\u652f\u6301\u4ee5\u4e0b\u4e24\u79cd Json \u683c\u5f0f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ee5 Array \u8868\u793a\u7684\u591a\u884c\u6570\u636e"),(0,r.kt)("p",{parentName:"li"},"\u4ee5 Array \u4e3a\u6839\u8282\u70b9\u7684 Json \u683c\u5f0f\u3002Array \u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8868\u793a\u8981\u5bfc\u5165\u7684\u4e00\u884c\u6570\u636e\uff0c\u901a\u5e38\u662f\u4e00\u4e2a Object\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    { "id": 123, "city" : "beijing"},\n    { "id": 456, "city" : "shanghai"},\n    ...\n]\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    { "id": 123, "city" : { "name" : "beijing", "region" : "haidian"}},\n    { "id": 456, "city" : { "name" : "beijing", "region" : "chaoyang"}},\n    ...\n]\n')),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u65b9\u5f0f\u901a\u5e38\u7528\u4e8e Stream Load \u5bfc\u5165\u65b9\u5f0f\uff0c\u4ee5\u4fbf\u5728\u4e00\u6279\u5bfc\u5165\u6570\u636e\u4e2d\u8868\u793a\u591a\u884c\u6570\u636e\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u65b9\u5f0f\u5fc5\u987b\u914d\u5408\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"strip_outer_array=true")," \u4f7f\u7528\u3002Doris \u5728\u89e3\u6790\u65f6\u4f1a\u5c06\u6570\u7ec4\u5c55\u5f00\uff0c\u7136\u540e\u4f9d\u6b21\u89e3\u6790\u5176\u4e2d\u7684\u6bcf\u4e00\u4e2a Object \u4f5c\u4e3a\u4e00\u884c\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ee5 Object \u8868\u793a\u7684\u5355\u884c\u6570\u636e"),(0,r.kt)("p",{parentName:"li"},"\u4ee5 Object \u4e3a\u6839\u8282\u70b9\u7684 Json \u683c\u5f0f\u3002\u6574\u4e2a Object \u5373\u8868\u793a\u8981\u5bfc\u5165\u7684\u4e00\u884c\u6570\u636e\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : "beijing"}\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u65b9\u5f0f\u901a\u5e38\u7528\u4e8e Routine Load \u5bfc\u5165\u65b9\u5f0f\uff0c\u5982\u8868\u793a Kafka \u4e2d\u7684\u4e00\u6761\u6d88\u606f\uff0c\u5373\u4e00\u884c\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ee5\u56fa\u5b9a\u5206\u9694\u7b26\u5206\u9694\u7684\u591a\u884c Object \u6570\u636e"),(0,r.kt)("p",{parentName:"li"},"Object\u8868\u793a\u7684\u4e00\u884c\u6570\u636e\u5373\u8868\u793a\u8981\u5bfc\u5165\u7684\u4e00\u884c\u6570\u636e\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : "beijing"}\n{ "id": 456, "city" : "shanghai"}\n...\n')),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u65b9\u5f0f\u901a\u5e38\u7528\u4e8e Stream Load \u5bfc\u5165\u65b9\u5f0f\uff0c\u4ee5\u4fbf\u5728\u4e00\u6279\u5bfc\u5165\u6570\u636e\u4e2d\u8868\u793a\u591a\u884c\u6570\u636e\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u65b9\u5f0f\u5fc5\u987b\u914d\u5408\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"read_json_by_line=true")," \u4f7f\u7528\uff0c\u7279\u6b8a\u5206\u9694\u7b26\u8fd8\u9700\u8981\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"line_delimiter"),"\u53c2\u6570\uff0c\u9ed8\u8ba4",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),"\u3002Doris \u5728\u89e3\u6790\u65f6\u4f1a\u6309\u7167\u5206\u9694\u7b26\u5206\u9694\uff0c\u7136\u540e\u89e3\u6790\u5176\u4e2d\u7684\u6bcf\u4e00\u884c Object \u4f5c\u4e3a\u4e00\u884c\u6570\u636e\u3002"))),(0,r.kt)("h3",{id:"streaming_load_json_max_mb-\u53c2\u6570"},"streaming_load_json_max_mb \u53c2\u6570"),(0,r.kt)("p",null,"\u4e00\u4e9b\u6570\u636e\u683c\u5f0f\uff0c\u5982 JSON\uff0c\u65e0\u6cd5\u8fdb\u884c\u62c6\u5206\u5904\u7406\uff0c\u5fc5\u987b\u8bfb\u53d6\u5168\u90e8\u6570\u636e\u5230\u5185\u5b58\u540e\u624d\u80fd\u5f00\u59cb\u89e3\u6790\uff0c\u56e0\u6b64\uff0c\u8fd9\u4e2a\u503c\u7528\u4e8e\u9650\u5236\u6b64\u7c7b\u683c\u5f0f\u6570\u636e\u5355\u6b21\u5bfc\u5165\u6700\u5927\u6570\u636e\u91cf\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\u4e3a100\uff0c\u5355\u4f4dMB\uff0c\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/admin-manual/config/be-config"},"BE\u914d\u7f6e\u9879"),"\u4fee\u6539\u8fd9\u4e2a\u53c2\u6570"),(0,r.kt)("h3",{id:"fuzzy_parse-\u53c2\u6570"},"fuzzy_parse \u53c2\u6570"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"STREAM LOAD"),"\u4e2d\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"fuzzy_parse")," \u53c2\u6570\u6765\u52a0\u901f JSON \u6570\u636e\u7684\u5bfc\u5165\u6548\u7387\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u53c2\u6570\u901a\u5e38\u7528\u4e8e\u5bfc\u5165 ",(0,r.kt)("strong",{parentName:"p"},"\u4ee5 Array \u8868\u793a\u7684\u591a\u884c\u6570\u636e")," \u8fd9\u79cd\u683c\u5f0f\uff0c\u6240\u4ee5\u4e00\u822c\u8981\u914d\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"strip_outer_array=true")," \u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u8981\u6c42 Array \u4e2d\u7684\u6bcf\u884c\u6570\u636e\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5b57\u6bb5\u987a\u5e8f\u5b8c\u5168\u4e00\u81f4"),"\u3002Doris \u4ec5\u4f1a\u6839\u636e\u7b2c\u4e00\u884c\u7684\u5b57\u6bb5\u987a\u5e8f\u505a\u89e3\u6790\uff0c\u7136\u540e\u4ee5\u4e0b\u6807\u7684\u5f62\u5f0f\u8bbf\u95ee\u4e4b\u540e\u7684\u6570\u636e\u3002\u8be5\u65b9\u5f0f\u53ef\u4ee5\u63d0\u5347 3-5X \u7684\u5bfc\u5165\u6548\u7387\u3002"),(0,r.kt)("h2",{id:"json-path"},"Json Path"),(0,r.kt)("p",null,"Doris \u652f\u6301\u901a\u8fc7 Json Path \u62bd\u53d6 Json \u4e2d\u6307\u5b9a\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u56e0\u4e3a\u5bf9\u4e8e Array \u7c7b\u578b\u7684\u6570\u636e\uff0cDoris \u4f1a\u5148\u8fdb\u884c\u6570\u7ec4\u5c55\u5f00\uff0c\u6700\u7ec8\u6309\u7167 Object \u683c\u5f0f\u8fdb\u884c\u5355\u884c\u5904\u7406\u3002\u6240\u4ee5\u672c\u6587\u6863\u4e4b\u540e\u7684\u793a\u4f8b\u90fd\u4ee5\u5355\u4e2a Object \u683c\u5f0f\u7684 Json \u6570\u636e\u8fdb\u884c\u8bf4\u660e\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u6307\u5b9a Json Path"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a Json Path\uff0c\u5219 Doris \u4f1a\u9ed8\u8ba4\u4f7f\u7528\u8868\u4e2d\u7684\u5217\u540d\u67e5\u627e Object \u4e2d\u7684\u5143\u7d20\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u8868\u4e2d\u5305\u542b\u4e24\u5217: ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")),(0,r.kt)("p",{parentName:"li"},"Json \u6570\u636e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : "beijing"}\n')),(0,r.kt)("p",{parentName:"li"},"\u5219 Doris \u4f1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," \u8fdb\u884c\u5339\u914d\uff0c\u5f97\u5230\u6700\u7ec8\u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"beijing"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c Json \u6570\u636e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "name" : "beijing"}\n')),(0,r.kt)("p",{parentName:"li"},"\u5219\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," \u8fdb\u884c\u5339\u914d\uff0c\u5f97\u5230\u6700\u7ec8\u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json Path"),(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u4e00\u4e2a Json \u6570\u636e\u7684\u5f62\u5f0f\u6307\u5b9a\u4e00\u7ec4 Json Path\u3002\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8868\u793a\u4e00\u4e2a\u8981\u62bd\u53d6\u7684\u5217\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.id", "$.name"]\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.id.sub_id", "$.name[0]", "$.city[0]"]\n')),(0,r.kt)("p",{parentName:"li"},"Doris \u4f1a\u4f7f\u7528\u6307\u5b9a\u7684 Json Path \u8fdb\u884c\u6570\u636e\u5339\u914d\u548c\u62bd\u53d6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5339\u914d\u975e\u57fa\u672c\u7c7b\u578b"),(0,r.kt)("p",{parentName:"li"},"\u524d\u9762\u7684\u793a\u4f8b\u6700\u7ec8\u5339\u914d\u5230\u7684\u6570\u503c\u90fd\u662f\u57fa\u672c\u7c7b\u578b\uff0c\u5982\u6574\u578b\u3001\u5b57\u7b26\u4e32\u7b49\u3002Doris \u5f53\u524d\u6682\u4e0d\u652f\u6301\u590d\u5408\u7c7b\u578b\uff0c\u5982 Array\u3001Map \u7b49\u3002\u6240\u4ee5\u5f53\u5339\u914d\u5230\u4e00\u4e2a\u975e\u57fa\u672c\u7c7b\u578b\u65f6\uff0cDoris \u4f1a\u5c06\u8be5\u7c7b\u578b\u8f6c\u6362\u4e3a Json \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u4ee5\u5b57\u7b26\u4e32\u7c7b\u578b\u8fdb\u884c\u5bfc\u5165\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},"Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')),(0,r.kt)("p",{parentName:"li"},"Json Path \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'["$.city"]'),"\u3002\u5219\u5339\u914d\u5230\u7684\u5143\u7d20\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "name" : "beijing", "region" : "haidian" }\n')),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5143\u7d20\u4f1a\u88ab\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u8fdb\u884c\u540e\u7eed\u5bfc\u5165\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},"\"{'name':'beijing','region':'haidian'}\"\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5339\u914d\u5931\u8d25"),(0,r.kt)("p",{parentName:"li"},"\u5f53\u5339\u914d\u5931\u8d25\u65f6\uff0c\u5c06\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},"Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "name" : "beijing"}\n')),(0,r.kt)("p",{parentName:"li"},"Json Path \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'["$.id", "$.info"]'),"\u3002\u5219\u5339\u914d\u5230\u7684\u5143\u7d20\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"Doris \u5f53\u524d\u4e0d\u533a\u5206 Json \u6570\u636e\u4e2d\u8868\u793a\u7684 null \u503c\uff0c\u548c\u5339\u914d\u5931\u8d25\u65f6\u4ea7\u751f\u7684 null \u503c\u3002\u5047\u8bbe Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "name" : null }\n')),(0,r.kt)("p",{parentName:"li"},"\u5219\u4f7f\u7528\u4ee5\u4e0b\u4e24\u79cd Json Path \u4f1a\u83b7\u5f97\u76f8\u540c\u7684\u7ed3\u679c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"123")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.id", "$.name"]\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.id", "$.info"]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u5168\u5339\u914d\u5931\u8d25"),(0,r.kt)("p",{parentName:"li"},"\u4e3a\u9632\u6b62\u4e00\u4e9b\u53c2\u6570\u8bbe\u7f6e\u9519\u8bef\u5bfc\u81f4\u7684\u8bef\u64cd\u4f5c\u3002Doris \u5728\u5c1d\u8bd5\u5339\u914d\u4e00\u884c\u6570\u636e\u65f6\uff0c\u5982\u679c\u6240\u6709\u5217\u90fd\u5339\u914d\u5931\u8d25\uff0c\u5219\u4f1a\u8ba4\u4e3a\u8fd9\u4e2a\u662f\u4e00\u4e2a\u9519\u8bef\u884c\u3002\u5047\u8bbe Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "city" : "beijing" }\n')),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c Json Path \u9519\u8bef\u7684\u5199\u4e3a\uff08\u6216\u8005\u4e0d\u6307\u5b9a Json Path \u65f6\uff0c\u8868\u4e2d\u7684\u5217\u4e0d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"city"),"\uff09\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'["$.ad", "$.infa"]\n')),(0,r.kt)("p",{parentName:"li"},"\u5219\u4f1a\u5bfc\u81f4\u5b8c\u5168\u5339\u914d\u5931\u8d25\uff0c\u5219\u8be5\u884c\u4f1a\u6807\u8bb0\u4e3a\u9519\u8bef\u884c\uff0c\u800c\u4e0d\u662f\u4ea7\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"null, null"),"\u3002"))),(0,r.kt)("h2",{id:"json-path-\u548c-columns"},"Json Path \u548c Columns"),(0,r.kt)("p",null,"Json Path \u7528\u4e8e\u6307\u5b9a\u5982\u4f55\u5bf9 JSON \u683c\u5f0f\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u62bd\u53d6\uff0c\u800c Columns \u6307\u5b9a\u5217\u7684\u6620\u5c04\u548c\u8f6c\u6362\u5173\u7cfb\u3002\u4e24\u8005\u53ef\u4ee5\u914d\u5408\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u76f8\u5f53\u4e8e\u901a\u8fc7 Json Path\uff0c\u5c06\u4e00\u4e2a Json \u683c\u5f0f\u7684\u6570\u636e\uff0c\u6309\u7167 Json Path \u4e2d\u6307\u5b9a\u7684\u5217\u987a\u5e8f\u8fdb\u884c\u4e86\u5217\u7684\u91cd\u6392\u3002\u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 Columns\uff0c\u5c06\u8fd9\u4e2a\u91cd\u6392\u540e\u7684\u6e90\u6570\u636e\u548c\u8868\u7684\u5217\u8fdb\u884c\u6620\u5c04\u3002\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"\u6570\u636e\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"k1" : 1, "k2": 2}\n')),(0,r.kt)("p",null,"\u8868\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"k2 int, k1 int\n")),(0,r.kt)("p",null,"\u5bfc\u5165\u8bed\u53e51\uff08\u4ee5 Stream Load \u4e3a\u4f8b\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u5bfc\u5165\u8bed\u53e51\u4e2d\uff0c\u4ec5\u6307\u5b9a\u4e86 Json Path\uff0c\u6ca1\u6709\u6307\u5b9a Columns\u3002\u5176\u4e2d Json Path \u7684\u4f5c\u7528\u662f\u5c06 Json \u6570\u636e\u6309\u7167 Json Path \u4e2d\u5b57\u6bb5\u7684\u987a\u5e8f\u8fdb\u884c\u62bd\u53d6\uff0c\u4e4b\u540e\u4f1a\u6309\u7167\u8868\u7ed3\u6784\u7684\u987a\u5e8f\u8fdb\u884c\u5199\u5165\u3002\u6700\u7ec8\u5bfc\u5165\u7684\u6570\u636e\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    2 |    1 |\n+------+------+\n")),(0,r.kt)("p",null,'\u4f1a\u770b\u5230\uff0c\u5b9e\u9645\u7684 k1 \u5217\u5bfc\u5165\u4e86 Json \u6570\u636e\u4e2d\u7684 "k2" \u5217\u7684\u503c\u3002\u8fd9\u662f\u56e0\u4e3a\uff0cJson \u4e2d\u5b57\u6bb5\u540d\u79f0\u5e76\u4e0d\u7b49\u540c\u4e8e\u8868\u7ed3\u6784\u4e2d\u5b57\u6bb5\u7684\u540d\u79f0\u3002\u6211\u4eec\u9700\u8981\u663e\u5f0f\u7684\u6307\u5b9a\u8fd9\u4e24\u8005\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002'),(0,r.kt)("p",null,"\u5bfc\u5165\u8bed\u53e52\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, k1" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u76f8\u6bd4\u5982\u5bfc\u5165\u8bed\u53e51\uff0c\u8fd9\u91cc\u589e\u52a0\u4e86 Columns \u5b57\u6bb5\uff0c\u7528\u4e8e\u63cf\u8ff0\u5217\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"k2, k1")," \u7684\u987a\u5e8f\u3002\u5373\u6309Json Path \u4e2d\u5b57\u6bb5\u7684\u987a\u5e8f\u62bd\u53d6\u540e\uff0c\u6307\u5b9a\u7b2c\u4e00\u5217\u4e3a\u8868\u4e2d k2 \u5217\u7684\u503c\uff0c\u800c\u7b2c\u4e8c\u5217\u4e3a\u8868\u4e2d k1 \u5217\u7684\u503c\u3002\u6700\u7ec8\u5bfc\u5165\u7684\u6570\u636e\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    2 |\n+------+------+\n")),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5982\u5176\u4ed6\u5bfc\u5165\u4e00\u6837\uff0c\u53ef\u4ee5\u5728 Columns \u4e2d\u8fdb\u884c\u5217\u7684\u8f6c\u6362\u64cd\u4f5c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, tmp_k1, k1 = tmp_k1 * 100" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u4f1a\u5c06 k1 \u7684\u503c\u4e58\u4ee5 100 \u540e\u5bfc\u5165\u3002\u6700\u7ec8\u5bfc\u5165\u7684\u6570\u636e\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1   | k2   |\n+------+------+\n|  100 |    2 |\n+------+------+\n")),(0,r.kt)("h2",{id:"json-root"},"Json root"),(0,r.kt)("p",null,"Doris \u652f\u6301\u901a\u8fc7 Json root \u62bd\u53d6 Json \u4e2d\u6307\u5b9a\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u56e0\u4e3a\u5bf9\u4e8e Array \u7c7b\u578b\u7684\u6570\u636e\uff0cDoris \u4f1a\u5148\u8fdb\u884c\u6570\u7ec4\u5c55\u5f00\uff0c\u6700\u7ec8\u6309\u7167 Object \u683c\u5f0f\u8fdb\u884c\u5355\u884c\u5904\u7406\u3002\u6240\u4ee5\u672c\u6587\u6863\u4e4b\u540e\u7684\u793a\u4f8b\u90fd\u4ee5\u5355\u4e2a Object \u683c\u5f0f\u7684 Json \u6570\u636e\u8fdb\u884c\u8bf4\u660e\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u6307\u5b9a Json root"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a Json root\uff0c\u5219 Doris \u4f1a\u9ed8\u8ba4\u4f7f\u7528\u8868\u4e2d\u7684\u5217\u540d\u67e5\u627e Object \u4e2d\u7684\u5143\u7d20\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u8868\u4e2d\u5305\u542b\u4e24\u5217: ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")),(0,r.kt)("p",{parentName:"li"},"Json \u6570\u636e\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 123, "name" : { "id" : "321", "city" : "shanghai" }}\n')),(0,r.kt)("p",{parentName:"li"},"\u5219 Doris \u4f1a\u4f7f\u7528id, city \u8fdb\u884c\u5339\u914d\uff0c\u5f97\u5230\u6700\u7ec8\u6570\u636e 123 \u548c null\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json root"),(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 json_root \u6307\u5b9a Json \u6570\u636e\u7684\u6839\u8282\u70b9\u3002Doris \u5c06\u901a\u8fc7 json_root \u62bd\u53d6\u6839\u8282\u70b9\u7684\u5143\u7d20\u8fdb\u884c\u89e3\u6790\u3002\u9ed8\u8ba4\u4e3a\u7a7a\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json root ",(0,r.kt)("inlineCode",{parentName:"p"},'-H "json_root: $.name"'),"\u3002\u5219\u5339\u914d\u5230\u7684\u5143\u7d20\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id" : "321", "city" : "shanghai" }\n')),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5143\u7d20\u4f1a\u88ab\u5f53\u4f5c\u65b0Json\u8fdb\u884c\u540e\u7eed\u5bfc\u5165\u64cd\u4f5c,\u5f97\u5230\u6700\u7ec8\u6570\u636e 321 \u548c shanghai"))),(0,r.kt)("h2",{id:"null-\u548c-default-\u503c"},"NULL \u548c Default \u503c"),(0,r.kt)("p",null,"\u793a\u4f8b\u6570\u636e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {"k1": 1, "k2": "a"},\n    {"k1": 2},\n    {"k1": 3, "k2": "c"},\n]\n')),(0,r.kt)("p",null,"\u8868\u7ed3\u6784\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'k1 int null, k2 varchar(32) null default "x"')),(0,r.kt)("p",null,"\u5bfc\u5165\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u80fd\u671f\u671b\u7684\u5bfc\u5165\u7ed3\u679c\u5982\u4e0b\uff0c\u5373\u5bf9\u4e8e\u7f3a\u5931\u7684\u5217\uff0c\u586b\u5199\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 |    x |\n+------+------+\n|    3 |    c |\n+------+------+\n")),(0,r.kt)("p",null,"\u4f46\u5b9e\u9645\u7684\u5bfc\u5165\u7ed3\u679c\u5982\u4e0b\uff0c\u5373\u5bf9\u4e8e\u7f3a\u5931\u7684\u5217\uff0c\u8865\u4e0a\u4e86 NULL\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 | NULL |\n+------+------+\n|    3 |    c |\n+------+------+\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u901a\u8fc7\u5bfc\u5165\u8bed\u53e5\u4e2d\u7684\u4fe1\u606f\uff0cDoris \u5e76\u4e0d\u77e5\u9053 \u201c\u7f3a\u5931\u7684\u5217\u662f\u8868\u4e2d\u7684 k2 \u5217\u201d\u3002 \u5982\u679c\u8981\u5bf9\u4ee5\u4e0a\u6570\u636e\u6309\u7167\u671f\u671b\u7ed3\u679c\u5bfc\u5165\uff0c\u5219\u5bfc\u5165\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -H "jsonpaths: [\\"$.k1\\", \\"$.k2\\"]" -H "columns: k1, tmp_k2, k2 = ifnull(tmp_k2, \'x\')" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("h2",{id:"\u5e94\u7528\u793a\u4f8b"},"\u5e94\u7528\u793a\u4f8b"),(0,r.kt)("h3",{id:"stream-load"},"Stream Load"),(0,r.kt)("p",null,"\u56e0\u4e3a Json \u683c\u5f0f\u7684\u4e0d\u53ef\u62c6\u5206\u7279\u6027\uff0c\u6240\u4ee5\u5728\u4f7f\u7528 Stream Load \u5bfc\u5165 Json \u683c\u5f0f\u7684\u6587\u4ef6\u65f6\uff0c\u6587\u4ef6\u5185\u5bb9\u4f1a\u88ab\u5168\u90e8\u52a0\u8f7d\u5230\u5185\u5b58\u540e\uff0c\u624d\u5f00\u59cb\u5904\u7406\u3002\u56e0\u6b64\uff0c\u5982\u679c\u6587\u4ef6\u8fc7\u5927\u7684\u8bdd\uff0c\u53ef\u80fd\u4f1a\u5360\u7528\u8f83\u591a\u7684\u5185\u5b58\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u8868\u7ed3\u6784\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"id      INT     NOT NULL,\ncity    VARHCAR NULL,\ncode    INT     NULL\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u5355\u884c\u6570\u636e1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 100, "city": "beijing", "code" : 1}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u6307\u5b9a Json Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"100     beijing     1\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"100     beijing     1\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u5355\u884c\u6570\u636e2"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 100, "content": {"city": "beijing", "code" : 1}}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.content.city\\",\\"$.content.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"100     beijing     1\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ee5 Array \u5f62\u5f0f\u5bfc\u5165\u591a\u884c\u6570\u636e"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {"id": 100, "city": "beijing", "code" : 1},\n    {"id": 101, "city": "shanghai"},\n    {"id": 102, "city": "tianjin", "code" : 3},\n    {"id": 103, "city": "chongqing", "code" : 4},\n    {"id": 104, "city": ["zhejiang", "guangzhou"], "code" : 5},\n    {\n        "id": 105,\n        "city": {\n            "order1": ["guangzhou"]\n        }, \n        "code" : 6\n    }\n]\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6307\u5b9a Json Path"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",{parentName:"li"},"\u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'100     beijing                     1\n101     shanghai                    NULL\n102     tianjin                     3\n103     chongqing                   4\n104     ["zhejiang","guangzhou"]    5\n105     {"order1":["guangzhou"]}    6\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ee5 \u591a\u884cObject \u5f62\u5f0f\u5bfc\u5165\u591a\u884c\u6570\u636e"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{"id": 100, "city": "beijing", "code" : 1}\n{"id": 101, "city": "shanghai"}\n{"id": 102, "city": "tianjin", "code" : 3}\n{"id": 103, "city": "chongqing", "code" : 4}\n')))),(0,r.kt)("p",null,"StreamLoad\u5bfc\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "read_json_by_line: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"100     beijing                     1\n101     shanghai                    NULL\n102     tianjin                     3\n103     chongqing                   4\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u8f6c\u6362")),(0,r.kt)("p",null,"\u6570\u636e\u4f9d\u7136\u662f\u793a\u4f8b3\u4e2d\u7684\u591a\u884c\u6570\u636e\uff0c\u73b0\u9700\u8981\u5bf9\u5bfc\u5165\u6570\u636e\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," \u5217\u52a01\u540e\u5bfc\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -H "columns: id, city, tmpc, code=tmpc+1" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,r.kt)("p",null,"\u5bfc\u5165\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'100     beijing                     2\n101     shanghai                    NULL\n102     tianjin                     4\n103     chongqing                   5\n104     ["zhejiang","guangzhou"]    6\n105     {"order1":["guangzhou"]}    7\n')),(0,r.kt)("h3",{id:"routine-load"},"Routine Load"),(0,r.kt)("p",null,"Routine Load \u5bf9 Json \u6570\u636e\u7684\u5904\u7406\u539f\u7406\u548c Stream Load \u76f8\u540c\u3002\u5728\u6b64\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e Kafka \u6570\u636e\u6e90\uff0c\u6bcf\u4e2a Massage \u4e2d\u7684\u5185\u5bb9\u88ab\u89c6\u4f5c\u4e00\u4e2a\u5b8c\u6574\u7684 Json \u6570\u636e\u3002\u5982\u679c\u4e00\u4e2a Massage \u4e2d\u662f\u4ee5 Array \u683c\u5f0f\u7684\u8868\u793a\u7684\u591a\u884c\u6570\u636e\uff0c\u5219\u4f1a\u5bfc\u5165\u591a\u884c\uff0c\u800c Kafka \u7684 offset \u53ea\u4f1a\u589e\u52a0 1\u3002\u800c\u5982\u679c\u4e00\u4e2a Array \u683c\u5f0f\u7684 Json \u8868\u793a\u591a\u884c\u6570\u636e\uff0c\u4f46\u662f\u56e0\u4e3a Json \u683c\u5f0f\u9519\u8bef\u5bfc\u81f4\u89e3\u6790 Json \u5931\u8d25\uff0c\u5219\u9519\u8bef\u884c\u53ea\u4f1a\u589e\u52a0 1\uff08\u56e0\u4e3a\u89e3\u6790\u5931\u8d25\uff0c\u5b9e\u9645\u4e0a Doris \u65e0\u6cd5\u5224\u65ad\u5176\u4e2d\u5305\u542b\u591a\u5c11\u884c\u6570\u636e\uff0c\u53ea\u80fd\u6309\u4e00\u884c\u9519\u8bef\u6570\u636e\u8bb0\u5f55\uff09"))}k.isMDXComponent=!0}}]);