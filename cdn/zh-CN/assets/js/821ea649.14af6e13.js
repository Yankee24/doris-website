"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[69870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"bitmap_intersect",language:"zh-CN"},o=void 0,c={unversionedId:"sql-reference/sql-functions/bitmap-functions/bitmap_intersect",id:"version-0.15/sql-reference/sql-functions/bitmap-functions/bitmap_intersect",title:"bitmap_intersect",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/bitmap-functions/bitmap_intersect.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_intersect",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/bitmap-functions/bitmap_intersect",draft:!1,tags:[],version:"0.15",frontMatter:{title:"bitmap_intersect",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_hash",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/bitmap-functions/bitmap_hash"},next:{title:"bitmap_or",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/bitmap-functions/bitmap_or"}},l={},p=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitmap_intersect"},"bitmap_intersect"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("p",null,"\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u8ba1\u7b97\u5206\u7ec4\u540e\u7684 bitmap \u4ea4\u96c6\u3002\u5e38\u89c1\u4f7f\u7528\u573a\u666f\u5982\uff1a\u8ba1\u7b97\u7528\u6237\u7559\u5b58\u7387\u3002"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_INTERSECT(BITMAP value)")),(0,i.kt)("p",null,"\u8f93\u5165\u4e00\u7ec4 bitmap \u503c\uff0c\u6c42\u8fd9\u4e00\u7ec4 bitmap \u503c\u7684\u4ea4\u96c6\uff0c\u5e76\u8fd4\u56de\u3002"),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("p",null,"\u8868\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u6c42\u4eca\u5929\u548c\u6628\u5929\u4e0d\u540c tag \u4e0b\u7684\u7528\u6237\u7559\u5b58\nmysql> select tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")),(0,i.kt)("p",null,"\u548c bitmap_to_string \u51fd\u6570\u7ec4\u5408\u4f7f\u7528\u53ef\u4ee5\u83b7\u53d6\u4ea4\u96c6\u7684\u5177\u4f53\u6570\u636e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u6c42\u4eca\u5929\u548c\u6628\u5929\u4e0d\u540c tag \u4e0b\u7559\u5b58\u7684\u7528\u6237\u90fd\u662f\u54ea\u4e9b\nmysql> select tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BITMAP_INTERSECT, BITMAP\n")))}u.isMDXComponent=!0}}]);