"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[51538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"bitmap_intersect",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_intersect",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_intersect",title:"bitmap_intersect",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_intersect.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_intersect",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_intersect",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_intersect.md",tags:[],version:"dev",frontMatter:{title:"bitmap_intersect",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_has_any",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_has_any"},next:{title:"bitmap_to_string",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_to_string"}},s={},p=[{value:"bitmap_intersect",id:"bitmap_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bitmap_intersect"},"bitmap_intersect"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u8ba1\u7b97\u5206\u7ec4\u540e\u7684 bitmap \u4ea4\u96c6\u3002\u5e38\u89c1\u4f7f\u7528\u573a\u666f\u5982\uff1a\u8ba1\u7b97\u7528\u6237\u7559\u5b58\u7387\u3002"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_INTERSECT(BITMAP value)")),(0,a.kt)("p",null,"\u8f93\u5165\u4e00\u7ec4 bitmap \u503c\uff0c\u6c42\u8fd9\u4e00\u7ec4 bitmap \u503c\u7684\u4ea4\u96c6\uff0c\u5e76\u8fd4\u56de\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("p",null,"\u8868\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6c42\u4eca\u5929\u548c\u6628\u5929\u4e0d\u540c tag \u4e0b\u7684\u7528\u6237\u7559\u5b58\nmysql> select tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")),(0,a.kt)("p",null,"\u548c bitmap_to_string \u51fd\u6570\u7ec4\u5408\u4f7f\u7528\u53ef\u4ee5\u83b7\u53d6\u4ea4\u96c6\u7684\u5177\u4f53\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6c42\u4eca\u5929\u548c\u6628\u5929\u4e0d\u540c tag \u4e0b\u7559\u5b58\u7684\u7528\u6237\u90fd\u662f\u54ea\u4e9b\nmysql> select tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BITMAP_INTERSECT, BITMAP\n")))}u.isMDXComponent=!0}}]);