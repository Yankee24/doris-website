"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[31443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},T=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),T=c(n),d=a,f=T["".concat(s,".").concat(d)]||T[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=T;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}T.displayName="MDXCreateElement"},7440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"QUANTILE_STATE",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Types/QUANTILE_STATE",id:"version-dev/sql-manual/sql-reference/Data-Types/QUANTILE_STATE",title:"QUANTILE_STATE",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Types/QUANTILE_STATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/QUANTILE_STATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/QUANTILE_STATE",draft:!1,tags:[],version:"dev",frontMatter:{title:"QUANTILE_STATE",language:"zh-CN"},sidebar:"docs",previous:{title:"LARGEINT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/LARGEINT"},next:{title:"SMALLINT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Types/SMALLINT"}},s={},c=[{value:"QUANTILE_STATE",id:"quantile_state",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"quantile_state"},"QUANTILE_STATE"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"QUANTILE_STATE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"QUANTILE_STATE cannot be used as a key column, and the aggregation type is QUANTILE_UNION when building the table.\nThe user does not need to specify the length and default value. The length is controlled within the system according to the degree of data aggregation.\nAnd the QUANTILE_STATE column can only be queried or used through the supporting QUANTILE_PERCENT, QUANTILE_UNION and TO_QUANTILE_STATE functions.    \nQUANTILE_STATE is a type for calculating the approximate value of quantiles. Different values with the same key are pre-aggregated during loading process. When the number of aggregated values does not exceed 2048, all data are recorded in detail. When the number of aggregated values is greater than 2048, [TDigest] is used. (https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf) algorithm to aggregate (cluster) the data and save the centroid points after clustering.\n")),(0,a.kt)("p",null,"related functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"QUANTILE_UNION(QUANTILE_STATE):\n  \n  This function is an aggregation function, which is used to aggregate the intermediate results of different quantile calculations. The result returned by this function is still QUANTILE_STATE\n\n\nTO_QUANTILE_STATE(INT/FLOAT/DOUBLE raw_data [,FLOAT compression]):\n   \n   This function converts a numeric type to a QUANTILE_STATE type\n   The compression parameter is optional and can be set in the range [2048, 10000]. \n   The larger the value, the higher the precision of quantile approximation calculations, the greater the memory consumption, and the longer the calculation time.\n   An unspecified or set value for the compression parameter is outside the range [2048, 10000], run with the default value of 2048\n\nQUANTILE_PERCENT(QUANTILE_STATE):\n   This function converts the intermediate result variable (QUANTILE_STATE) of the quantile calculation into a specific quantile value\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select QUANTILE_PERCENT(QUANTILE_UNION(v1)) from test_table group by k1, k2, k3;\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"QUANTILE_STATE, QUANTILE_UNION, TO_QUANTILE_STATE, QUANTILE_PERCENT\n")))}p.isMDXComponent=!0}}]);