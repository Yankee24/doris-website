"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[67318],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,s(s({ref:e},c),{},{components:a})):n.createElement(h,s({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72588:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"MULTI-LOAD",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD",title:"MULTI-LOAD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"MULTI-LOAD",language:"en"},sidebar:"docs",previous:{title:"CREATE-ROUTINE-LOAD",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},next:{title:"PAUSE-ROUTINE-LOAD",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD"}},l={},u=[{value:"MULTI-LOAD",id:"multi-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:u};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"multi-load"},"MULTI-LOAD"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"MULTI LOAD"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Users submit multiple import jobs through the HTTP protocol. Multi Load can ensure the atomic effect of multiple import jobs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Syntax:\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_start?label=xxx\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table1}/_load?label=xxx\\&sub_label=yyy\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table2}/_load?label=xxx\\&sub_label=zzz\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_commit?label=xxx\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_desc?label=xxx\n\nOn the basis of 'MINI LOAD', 'MULTI LOAD' can support users to import to multiple tables at the same time. The specific commands are shown above.\n'/api/{db}/_multi_start' starts a multi-table import task\n'/api/{db}/{table}/_load' adds a table to be imported to an import task. The main difference from 'MINI LOAD' is that the 'sub_label' parameter needs to be passed in\n'/api/{db}/_multi_commit' submits the entire multi-table import task, and starts processing in the background\n'/api/{db}/_multi_abort' Abort a multi-table import task\n'/api/{db}/_multi_desc' can display the number of jobs submitted by a multi-table import task\n\nDescription of the HTTP protocol\n    Authorization Authentication Currently, Doris uses HTTP Basic authorization authentication. So you need to specify the username and password when importing\n                        This method is to pass the password in clear text, since we are currently in an intranet environment. . .\n\n    Expect Doris needs to send the http request, it needs to have 'Expect' header information, the content is '100-continue'\n                        why? Because we need to redirect the request, before transmitting the data content,\n                        This can avoid causing multiple transmissions of data, thereby improving efficiency.\n\n    Content-Length Doris needs to send the request with the 'Content-Length' header. If the content sent is greater than\n                        If the 'Content-Length' is less, then Palo thinks that there is a problem with the transmission, and fails to submit the task.\n                        NOTE: If more data is sent than 'Content-Length', then Doris only reads 'Content-Length'\n                        length content and import\n\nParameter Description:\n    user: If the user is in the default_cluster, the user is the user_name. Otherwise user_name@cluster_name.\n\n    label: Used to specify the label number imported in this batch, which is used for later job status query, etc.\n                        This parameter is required.\n\n    sub_label: Used to specify the subversion number inside a multi-table import task. For loads imported from multiple tables, this parameter must be passed in.\n\n    columns: used to describe the corresponding column names in the import file.\n                        If it is not passed in, then the order of the columns in the file is considered to be the same as the order in which the table was created.\n                        The specified method is comma-separated, for example: columns=k1,k2,k3,k4\n\n    column_separator: used to specify the separator between columns, the default is '\\t'\n                        NOTE: url encoding is required, for example, '\\t' needs to be specified as the delimiter,\n                        Then you should pass in 'column_separator=%09'\n\n    max_filter_ratio: used to specify the maximum ratio of non-standard data allowed to filter, the default is 0, no filtering is allowed\n                        The custom specification should be as follows: 'max_filter_ratio=0.2', which means 20% error rate is allowed\n                        Passing in has effect when '_multi_start'\n\nNOTE:\n    1. This import method currently completes the import work on one machine, so it is not suitable for import work with a large amount of data.\n    It is recommended that the amount of imported data should not exceed 1GB\n\n    2. Currently it is not possible to submit multiple files using `curl -T \"{file1, file2}\"`, because curl splits them into multiple files\n    The request is sent. Multiple requests cannot share a label number, so it cannot be used.\n\n    3. Supports the use of curl to import data into Doris in a way similar to streaming, but only after the streaming ends Doris\n    The real import behavior will occur, and the amount of data in this way cannot be too large.\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. Import the data in the local file 'testData1' into the table 'testTbl1' in the database 'testDb', and\nImport the data of 'testData2' into table 'testTbl2' in 'testDb' (user is in defalut_cluster)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -T testData2 http://host:port/api/testDb/testTbl2/_load?label=123\\&sub_label=2\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_commit?label=123\n\n2. Abandoned in the middle of multi-table import (user is in defalut_cluster)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_abort?label=123\n\n3. Multi-table import to see how much content has been submitted (the user is in the defalut_cluster)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_desc?label=123\n")),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MULTI, MINI, LOAD\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);