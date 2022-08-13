"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[11378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"BITMAP",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/BITMAP",id:"version-dev/sql-manual/sql-reference/Data-Types/BITMAP",title:"BITMAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Types/BITMAP.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/BITMAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/BITMAP",draft:!1,tags:[],version:"dev",frontMatter:{title:"BITMAP",language:"zh-CN"},sidebar:"docs",previous:{title:"DATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DATE"},next:{title:"DOUBLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/DOUBLE"}},c={},p=[{value:"BITMAP",id:"bitmap",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bitmap"},"BITMAP"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BITMAP\nBITMAP\u4e0d\u80fd\u4f5c\u4e3akey\u5217\u4f7f\u7528\uff0c\u5efa\u8868\u65f6\u914d\u5408\u805a\u5408\u7c7b\u578b\u4e3aBITMAP_UNION\u3002\n\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002\n\u5e76\u4e14BITMAP\u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684bitmap_union_count\u3001bitmap_union\u3001bitmap_hash\u7b49\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002\n\n\u79bb\u7ebf\u573a\u666f\u4e0b\u4f7f\u7528BITMAP\u4f1a\u5f71\u54cd\u5bfc\u5165\u901f\u5ea6\uff0c\u5728\u6570\u636e\u91cf\u5927\u7684\u60c5\u51b5\u4e0b\u67e5\u8be2\u901f\u5ea6\u4f1a\u6162\u4e8eHLL\uff0c\u5e76\u4f18\u4e8eCount Distinct\u3002\n\u6ce8\u610f\uff1a\u5b9e\u65f6\u573a\u666f\u4e0bBITMAP\u5982\u679c\u4e0d\u4f7f\u7528\u5168\u5c40\u5b57\u5178\uff0c\u4f7f\u7528\u4e86bitmap_hash()\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6709\u5343\u5206\u4e4b\u4e00\u5de6\u53f3\u7684\u8bef\u5dee\u3002\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select hour, BITMAP_UNION_COUNT(pv) over(order by hour) uv from(\n   select hour, BITMAP_UNION(device_id) as pv\n   from metric_table -- \u67e5\u8be2\u6bcf\u5c0f\u65f6\u7684\u7d2f\u8ba1UV\n   where datekey=20200622\ngroup by hour order by 1\n) final;\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BITMAP\n")))}u.isMDXComponent=!0}}]);