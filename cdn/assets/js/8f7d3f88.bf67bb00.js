"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[40874],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(t),d=a,m=y["".concat(s,".").concat(d)]||y[d]||p[d]||l;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},70938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const l={title:"ARRAY_AVG Function",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array_avg",id:"version-dev/sql-manual/sql-functions/array-functions/array_avg",title:"ARRAY_AVG Function",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/array-functions/array_avg.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_avg",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_avg",draft:!1,tags:[],version:"dev",frontMatter:{title:"ARRAY_AVG Function",language:"en"},sidebar:"docs",previous:{title:"element_at",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/element_at"},next:{title:"size",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/size"}},s={},c=[{value:"ARRAY_AVG",id:"array_avg",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_avg"},"ARRAY_AVG"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ARRAY_AVG"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"Get the average of all elements in an array (",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," values are skipped).\nWhen the array is empty or all elements in the array are ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," values, the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> set enable_vectorized_engine = true;    # enable vectorized engine\nmysql> select k2, array_avg(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_avg(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               2 |\n| [1, NULL, 3] |               2 |\n+--------------+-----------------+\n4 rows in set (0.01 sec)\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,AVG,ARRAY_AVG"))}p.isMDXComponent=!0}}]);