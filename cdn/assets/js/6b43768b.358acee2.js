"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[13550],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW-FUNCTION-LAST_VALUE",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE",id:"version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE",title:"WINDOW-FUNCTION-LAST_VALUE",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE",draft:!1,tags:[],version:"dev",frontMatter:{title:"WINDOW-FUNCTION-LAST_VALUE",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-SUM",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM"},next:{title:"WINDOW-FUNCTION-AVG",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-AVG"}},s={},c=[{value:"WINDOW FUNCTION LAST_VALUE",id:"window-function-last_value",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-last_value"},"WINDOW FUNCTION LAST_VALUE"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"LAST_VALUE() returns the last value in the window range. Opposite of FIRST_VALUE() ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"LAST_VALUE(expr) OVER(partition_by_clause order_by_clause [window_clause])\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("p",null,"Using the data from the FIRST_VALUE() example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select country, name,    \nlast_value(greeting)   \nover (partition by country order by name, greeting) as greeting   \nfrom mail_merge;\n\n| country | name    | greeting     |\n|---------|---------|--------------|\n| Germany | Boris   | Guten morgen |\n| Germany | Michael | Guten morgen |\n| Sweden  | Bjorn   | Tja          |\n| Sweden  | Mats    | Tja          |\n| USA     | John    | Hello        |\n| USA     | Pete    | Hello        |\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,LAST_VALUE\n")))}p.isMDXComponent=!0}}]);