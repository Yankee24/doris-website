"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[63372],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>N});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),N=i,f=p["".concat(s,".").concat(N)]||p[N]||d[N]||r;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function N(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},60910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(87462),i=(t(67294),t(3905));const r={title:"WINDOW-FUNCTION-WINDOW-FUNNEL",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL",id:"version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL",title:"WINDOW-FUNCTION-WINDOW-FUNNEL",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL.md",tags:[],version:"dev",frontMatter:{title:"WINDOW-FUNCTION-WINDOW-FUNNEL",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-NTILE",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE"},next:{title:"CAST",permalink:"/docs/dev/sql-manual/sql-functions/cast"}},s={},c=[{value:"WINDOW FUNCTION WINDOW_FUNNEL",id:"window-function-window_funnel",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"window-function-window_funnel"},"WINDOW FUNCTION WINDOW_FUNNEL"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"Searches the longest event chain happened in order (event1, event2, ... , eventN) along the timestamp_column with length of window."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"window is the length of time window in seconds."),(0,i.kt)("li",{parentName:"ul"},"mode is reserved for future, not used for now."),(0,i.kt)("li",{parentName:"ul"},"timestamp_column specifies column of DATETIME type, sliding time window works on it."),(0,i.kt)("li",{parentName:"ul"},"evnetN is boolean expression like eventID = 1004.")),(0,i.kt)("p",null,"The function works according to the algorithm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The function searches for data that triggers the first condition in the chain and sets the event counter to 1. This is the moment when the sliding window starts."),(0,i.kt)("li",{parentName:"ul"},"If events from the chain occur sequentially within the window, the counter is incremented. If the sequence of events is disrupted, the counter is not incremented."),(0,i.kt)("li",{parentName:"ul"},"If the data has multiple event chains at varying points of completion, the function will only output the size of the longest chain.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"window_funnel(window, mode, timestamp_column, event1, event2, ... , eventN)\n")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE windowfunnel_test (\n                `xwho` varchar(50) NULL COMMENT 'xwho',\n                `xwhen` datetime COMMENT 'xwhen',\n                `xwhat` int NULL COMMENT 'xwhat'\n                )\nDUPLICATE KEY(xwho)\nDISTRIBUTED BY HASH(xwho) BUCKETS 3\nPROPERTIES (\n    \"replication_num\" = \"1\"\n);\n\nINSERT into windowfunnel_test (xwho, xwhen, xwhat) values ('1', '2022-03-12 10:41:00', 1),\n                                                   ('1', '2022-03-12 13:28:02', 2),\n                                                   ('1', '2022-03-12 16:15:01', 3),\n                                                   ('1', '2022-03-12 19:05:04', 4);\n\nselect window_funnel(3600 * 3, 'default', t.xwhen, t.xwhat = 1, t.xwhat = 2 ) AS level from windowfunnel_test t;\n\n| level |\n|---|\n| 2 |\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,WINDOW_FUNNEL\n")))}d.isMDXComponent=!0}}]);