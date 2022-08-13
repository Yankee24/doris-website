"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[43195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=l,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={title:"PERCENTILE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile",id:"version-dev/sql-manual/sql-functions/aggregate-functions/percentile",title:"PERCENTILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/aggregate-functions/percentile.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile",draft:!1,tags:[],version:"dev",frontMatter:{title:"PERCENTILE",language:"zh-CN"},sidebar:"docs",previous:{title:"AVG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/avg"},next:{title:"HLL_UNION_AGG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/hll_union_agg"}},c={},s=[{value:"PERCENTILE",id:"percentile",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"percentile"},"PERCENTILE"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PERCENTILE(expr, DOUBLE p)")),(0,l.kt)("p",null,"\u8ba1\u7b97\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570\uff0c\u9002\u7528\u4e8e\u5c0f\u6570\u636e\u91cf\u3002\u5148\u5bf9\u6307\u5b9a\u5217\u964d\u5e8f\u6392\u5217\uff0c\u7136\u540e\u53d6\u7cbe\u786e\u7684\u7b2c p \u4f4d\u767e\u5206\u6570\u3002p\u7684\u503c\u4ecb\u4e8e0\u52301\u4e4b\u95f4"),(0,l.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\nexpr\uff1a\u5fc5\u586b\u3002\u503c\u4e3a\u6574\u6570\uff08\u6700\u5927\u4e3abigint\uff09 \u7c7b\u578b\u7684\u5217\u3002\np\uff1a\u5fc5\u586b\u3002\u9700\u8981\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570\u3002\u53d6\u503c\u4e3a ","[0.0,1.0]","\u3002"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MySQL > select `table`, percentile(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    |        percentile(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select percentile(NULL,0.3) from table1;\n+-----------------------+\n| percentile(NULL, 0.3) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"PERCENTILE"))}u.isMDXComponent=!0}}]);