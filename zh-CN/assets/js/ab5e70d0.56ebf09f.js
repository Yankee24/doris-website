"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[68824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),l=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),s=a,b=d["".concat(m,".").concat(s)]||d[s]||c[s]||r;return n?i.createElement(b,o(o({ref:t},u),{},{components:n})):i.createElement(b,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={title:"Hive Bitmap UDF",language:"zh-CN"},o=void 0,p={unversionedId:"ecosystem/external-table/hive-bitmap-udf",id:"version-dev/ecosystem/external-table/hive-bitmap-udf",title:"Hive Bitmap UDF",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/ecosystem/external-table/hive-bitmap-udf.md",sourceDirName:"ecosystem/external-table",slug:"/ecosystem/external-table/hive-bitmap-udf",permalink:"/zh-CN/docs/dev/ecosystem/external-table/hive-bitmap-udf",draft:!1,tags:[],version:"dev",frontMatter:{title:"Hive Bitmap UDF",language:"zh-CN"}},m={},l=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5728 Hive \u4e2d\u521b\u5efa Bitmap \u7c7b\u578b\u8868",id:"\u5728-hive-\u4e2d\u521b\u5efa-bitmap-\u7c7b\u578b\u8868",level:3},{value:"Hive Bitmap UDF \u4f7f\u7528\uff1a",id:"hive-bitmap-udf-\u4f7f\u7528",level:3},{value:"Hive Bitmap UDF  \u8bf4\u660e",id:"hive-bitmap-udf--\u8bf4\u660e",level:3},{value:"Hive bitmap \u5bfc\u5165 doris",id:"hive-bitmap-\u5bfc\u5165-doris",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hive-udf"},"Hive UDF"),(0,a.kt)("p",null," Hive Bitmap UDF \u63d0\u4f9b\u4e86\u5728 hive \u8868\u4e2d\u751f\u6210 bitmap \u3001bitmap \u8fd0\u7b97\u7b49 UDF\uff0cHive \u4e2d\u7684 bitmap \u4e0e Doris bitmap \u5b8c\u5168\u4e00\u81f4 \uff0cHive \u4e2d\u7684 bitmap \u53ef\u4ee5\u901a\u8fc7 spark bitmap load \u5bfc\u5165 doris"),(0,a.kt)("p",null," \u4e3b\u8981\u76ee\u7684\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u51cf\u5c11\u6570\u636e\u5bfc\u5165 doris \u65f6\u95f4 , \u9664\u53bb\u4e86\u6784\u5efa\u5b57\u5178\u3001bitmap \u9884\u805a\u5408\u7b49\u6d41\u7a0b\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u8282\u7701 hive \u5b58\u50a8 \uff0c\u4f7f\u7528 bitmap \u5bf9\u6570\u636e\u538b\u7f29 \uff0c\u51cf\u5c11\u4e86\u5b58\u50a8\u6210\u672c\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u5728 hive \u4e2d bitmap \u7684\u7075\u6d3b\u8fd0\u7b97 \uff0c\u6bd4\u5982\uff1a\u4ea4\u96c6\u3001\u5e76\u96c6\u3001\u5dee\u96c6\u8fd0\u7b97 \uff0c\u8ba1\u7b97\u540e\u7684 bitmap \u4e5f\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165 doris\uff1b")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u5728-hive-\u4e2d\u521b\u5efa-bitmap-\u7c7b\u578b\u8868"},"\u5728 Hive \u4e2d\u521b\u5efa Bitmap \u7c7b\u578b\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- \u4f8b\u5b50\uff1a\u521b\u5efa Hive Bitmap \u8868\nCREATE TABLE IF NOT EXISTS `hive_bitmap_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'bitmap'\n) comment  'comment'\n\n-- \u4f8b\u5b50\uff1a\u521b\u5efa\u666e\u901a Hive \u8868\nCREATE TABLE IF NOT EXISTS `hive_table`(\n    `k1`   int       COMMENT '',\n    `k2`   String    COMMENT '',\n    `k3`   String    COMMENT '',\n    `uuid` int       COMMENT ''\n) comment  'comment'\n")),(0,a.kt)("h3",{id:"hive-bitmap-udf-\u4f7f\u7528"},"Hive Bitmap UDF \u4f7f\u7528\uff1a"),(0,a.kt)("p",null," Hive Bitmap UDF \u9700\u8981\u5728 Hive/Spark \u4e2d\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- \u52a0\u8f7dhive bitmap udf jar\u5305  (\u9700\u8981\u5c06\u7f16\u8bd1\u597d\u7684 hive-udf jar \u5305\u4e0a\u4f20\u81f3 HDFS)\nadd jar hdfs://node:9001/hive-udf-jar-with-dependencies.jar;\n\n-- \u521b\u5efaUDAF\u51fd\u6570\ncreate temporary function to_bitmap as 'org.apache.doris.udf.ToBitmapUDAF';\ncreate temporary function bitmap_union as 'org.apache.doris.udf.BitmapUnionUDAF';\n\n-- \u521b\u5efaUDF\u51fd\u6570\ncreate temporary function bitmap_count as 'org.apache.doris.udf.BitmapCountUDF';\ncreate temporary function bitmap_and as 'org.apache.doris.udf.BitmapAndUDF';\ncreate temporary function bitmap_or as 'org.apache.doris.udf.BitmapOrUDF';\ncreate temporary function bitmap_xor as 'org.apache.doris.udf.BitmapXorUDF';\n\n-- \u4f8b\u5b50\uff1a\u901a\u8fc7 to_bitmap \u751f\u6210 bitmap \u5199\u5165 Hive Bitmap \u8868\ninsert into hive_bitmap_table\nselect \n    k1,\n    k2,\n    k3,\n    to_bitmap(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n\n-- \u4f8b\u5b50\uff1abitmap_count \u8ba1\u7b97 bitmap \u4e2d\u5143\u7d20\u4e2a\u6570\nselect k1,k2,k3,bitmap_count(uuid) from hive_bitmap_table\n\n-- \u4f8b\u5b50\uff1abitmap_union \u7528\u4e8e\u8ba1\u7b97\u5206\u7ec4\u540e\u7684 bitmap \u5e76\u96c6\nselect k1,bitmap_union(uuid) from hive_bitmap_table group by k1\n\n")),(0,a.kt)("h3",{id:"hive-bitmap-udf--\u8bf4\u660e"},"Hive Bitmap UDF  \u8bf4\u660e"),(0,a.kt)("h2",{id:"hive-bitmap-\u5bfc\u5165-doris"},"Hive bitmap \u5bfc\u5165 doris"),(0,a.kt)("p",null," \u8be6\u89c1: \u6570\u636e\u5bfc\u5165 -> Spark Load -> \u57fa\u672c\u64cd\u4f5c  -> \u521b\u5efa\u5bfc\u5165 (\u793a\u4f8b3\uff1a\u4e0a\u6e38\u6570\u636e\u6e90\u662fhive binary\u7c7b\u578b\u60c5\u51b5)"))}c.isMDXComponent=!0}}]);