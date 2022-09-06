"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[13435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,_=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(_,l(l({ref:t},s),{},{components:n})):a.createElement(_,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={title:"BITMAP_UNION",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/aggregate-functions/bitmap_union",id:"version-dev/sql-manual/sql-functions/aggregate-functions/bitmap_union",title:"BITMAP_UNION",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/aggregate-functions/bitmap_union.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/bitmap_union",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/bitmap_union",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/aggregate-functions/bitmap_union.md",tags:[],version:"dev",frontMatter:{title:"BITMAP_UNION",language:"en"},sidebar:"docs",previous:{title:"MAX_BY",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/max_by"},next:{title:"PERCENTILE_APPROX",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile_approx"}},p={},u=[{value:"BITMAP_UNION",id:"bitmap_union",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"Create table",id:"create-table",level:4},{value:"Data Load",id:"data-load",level:4},{value:"Stream Load",id:"stream-load",level:5},{value:"Insert Into",id:"insert-into",level:5},{value:"Data Query",id:"data-query",level:4},{value:"Syntax",id:"syntax",level:5},{value:"Example",id:"example-1",level:5},{value:"keywords",id:"keywords",level:3}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bitmap_union"},"BITMAP_UNION"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("h4",{id:"create-table"},"Create table"),(0,i.kt)("p",null,"The aggregation model needs to be used when creating the table. The data type is bitmap and the aggregation function is bitmap_union."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CREATE TABLE `pv_bitmap` (\n\xa0\xa0`dt` int (11) NULL COMMENT" ",\n\xa0\xa0`page` varchar (10) NULL COMMENT" ",\n\xa0\xa0`user_id` bitmap BITMAP_UNION NULL COMMENT" "\n) ENGINE = OLAP\nAGGREGATE KEY (`dt`,` page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH (`dt`) BUCKETS 2;\n')),(0,i.kt)("p",null,"Note: When the amount of data is large, it is best to create a corresponding rollup table for high-frequency bitmap_union queries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ALTER TABLE pv_bitmap ADD ROLLUP pv (page, user_id);\n")),(0,i.kt)("h4",{id:"data-load"},"Data Load"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TO_BITMAP (expr)"),": Convert 0 ~ 18446744073709551615 unsigned bigint to bitmap"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP_EMPTY ()"),": Generate empty bitmap columns, used for insert or import to fill the default value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP_HASH (expr)"),": Convert any type of column to a bitmap by hashing"),(0,i.kt)("h5",{id:"stream-load"},"Stream Load"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = to_bitmap (user_id)" http: // host: 8410 / api / test / testDb / _stream_load\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = bitmap_hash (user_id)" http: // host: 8410 / api / test / testDb / _stream_load\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = bitmap_empty ()" http: // host: 8410 / api / test / testDb / _stream_load\n')),(0,i.kt)("h5",{id:"insert-into"},"Insert Into"),(0,i.kt)("p",null,"id2's column type is bitmap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"insert into bitmap_table1 select id, id2 from bitmap_table2;\n")),(0,i.kt)("p",null,"id2's column type is bitmap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INSERT INTO bitmap_table1 (id, id2) VALUES (1001, to_bitmap (1000)), (1001, to_bitmap (2000));\n")),(0,i.kt)("p",null,"id2's column type is bitmap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"insert into bitmap_table1 select id, bitmap_union (id2) from bitmap_table2 group by id;\n")),(0,i.kt)("p",null,"id2's column type is int"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"insert into bitmap_table1 select id, to_bitmap (id2) from table;\n")),(0,i.kt)("p",null,"id2's column type is String"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"insert into bitmap_table1 select id, bitmap_hash (id_string) from table;\n")),(0,i.kt)("h4",{id:"data-query"},"Data Query"),(0,i.kt)("h5",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP_UNION (expr)"),": Calculate the union of two Bitmaps. The return value is the new Bitmap value."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP_UNION_COUNT (expr)"),": Calculate the cardinality of the union of two Bitmaps, equivalent to BITMAP_COUNT (BITMAP_UNION (expr)). It is recommended to use the BITMAP_UNION_COUNT function first, its performance is better than BITMAP_COUNT (BITMAP_UNION (expr))."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BITMAP_UNION_INT (expr)"),": Count the number of different values \u200b\u200bin columns of type TINYINT, SMALLINT and INT, return the sum of COUNT (DISTINCT expr) same"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INTERSECT_COUNT (bitmap_column_to_count, filter_column, filter_values \u200b\u200b...)"),": The calculation satisfies\nfilter_column The cardinality of the intersection of multiple bitmaps of the filter.\nbitmap_column_to_count is a column of type bitmap, filter_column is a column of varying dimensions, and filter_values \u200b\u200bis a list of dimension values."),(0,i.kt)("h5",{id:"example-1"},"Example"),(0,i.kt)("p",null,"The following SQL uses the pv_bitmap table above as an example:"),(0,i.kt)("p",null,"Calculate the deduplication value for user_id:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select bitmap_union_count (user_id) from pv_bitmap;\n\nselect bitmap_count (bitmap_union (user_id)) from pv_bitmap;\n")),(0,i.kt)("p",null,"Calculate the deduplication value of id:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select bitmap_union_int (id) from pv_bitmap;\n")),(0,i.kt)("p",null,"Calculate the retention of user_id:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select intersect_count (user_id, page, 'meituan') as meituan_uv,\nintersect_count (user_id, page, 'waimai') as waimai_uv,\nintersect_count (user_id, page, 'meituan', 'waimai') as retention // Number of users appearing on both 'meituan' and 'waimai' pages\nfrom pv_bitmap\nwhere page in ('meituan', 'waimai');\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"BITMAP, BITMAP_COUNT, BITMAP_EMPTY, BITMAP_UNION, BITMAP_UNION_INT, TO_BITMAP, BITMAP_UNION_COUNT, INTERSECT_COUNT"))}d.isMDXComponent=!0}}]);