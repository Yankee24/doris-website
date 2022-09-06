"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[80766],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>d});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(l),d=a,L=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return l?n.createElement(L,o(o({ref:t},s),{},{components:l})):n.createElement(L,o({ref:t},s))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<r;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},33143:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=l(87462),a=(l(67294),l(3905));const r={title:"ALTER-TABLE-ROLLUP",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",title:"ALTER-TABLE-ROLLUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP.md",tags:[],version:"dev",frontMatter:{title:"ALTER-TABLE-ROLLUP",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-PROPERTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY"},next:{title:"ALTER-TABLE-RENAME",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME"}},i={},u=[{value:"ALTER-TABLE-ROLLUP",id:"alter-table-rollup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:u};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"alter-table-rollup"},"ALTER-TABLE-ROLLUP"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ALTER TABLE ROLLUP"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u5df2\u6709 table \u8fdb\u884c rollup \u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u3002rollup \u662f\u5f02\u6b65\u64cd\u4f5c\uff0c\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u5219\u8fd4\u56de\uff0c\u4e4b\u540e\u53ef\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"},"SHOW ALTER")," \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,a.kt)("p",null,"rollup \u7684 alter_clause \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u521b\u5efa\u65b9\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa rollup index")),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP rollup_name (column_name1, column_name2, ...)\n[FROM from_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,a.kt)("p",null," properties: \u652f\u6301\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u4e3a1\u5929\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6279\u91cf\u521b\u5efa rollup index")),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP [rollup_name (column_name1, column_name2, ...)\n                    [FROM from_index_name]\n                    [PROPERTIES ("key"="value", ...)],...]\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a from_index_name\uff0c\u5219\u9ed8\u8ba4\u4ece base index \u521b\u5efa"),(0,a.kt)("li",{parentName:"ul"},"rollup \u8868\u4e2d\u7684\u5217\u5fc5\u987b\u662f from_index \u4e2d\u5df2\u6709\u7684\u5217"),(0,a.kt)("li",{parentName:"ul"},"\u5728 properties \u4e2d\uff0c\u53ef\u4ee5\u6307\u5b9a\u5b58\u50a8\u683c\u5f0f\u3002\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"li",href:"../Create/CREATE-TABLE.html#create-table"},"CREATE TABLE"))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5220\u9664 rollup index"),(0,a.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP rollup_name [PROPERTIES ("key"="value", ...)]\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u6279\u91cf\u5220\u9664 rollup index")),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP [rollup_name [PROPERTIES ("key"="value", ...)],...]\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5220\u9664 base index")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa index: example_rollup_index\uff0c\u57fa\u4e8e base index\uff08k1,k2,k3,v1,v2\uff09\u3002\u5217\u5f0f\u5b58\u50a8\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1, v2);\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa index: example_rollup_index2\uff0c\u57fa\u4e8e example_rollup_index\uff08k1,k3,v1,v2\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index2 (k1, v1)\nFROM example_rollup_index;\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa index: example_rollup_index3, \u57fa\u4e8e base index (k1,k2,k3,v1), \u81ea\u5b9a\u4e49 rollup \u8d85\u65f6\u65f6\u95f4\u4e00\u5c0f\u65f6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1)\nPROPERTIES("timeout" = "3600");\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664 index: example_rollup_index2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2;\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u6279\u91cf\u5220\u9664Rollup")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2,example_rollup_index3;\n")),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, ROLLUP, ALTER TABLE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);