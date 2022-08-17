"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[90294],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>N});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),N=o,f=d["".concat(s,".").concat(N)]||d[N]||p[N]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function N(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW-FUNCTION-DENSE_RANK",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK",id:"version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK",title:"WINDOW-FUNCTION-DENSE_RANK",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-DENSE-RANK",draft:!1,tags:[],version:"dev",frontMatter:{title:"WINDOW-FUNCTION-DENSE_RANK",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-RANK",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-RANK"},next:{title:"WINDOW-FUNCTION-MAX",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-MAX"}},s={},c=[{value:"WINDOW FUNCTION DENSE_RANK",id:"window-function-dense_rank",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-dense_rank"},"WINDOW FUNCTION DENSE_RANK"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"The DENSE_RANK() function is used to represent rankings. Unlike RANK(), DENSE_RANK() does not have vacancies. For example, if there are two parallel 1s, the third number of DENSE_RANK() is still 2, and the third number of RANK() is 3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DENSE_RANK() OVER(partition_by_clause order_by_clause)\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("p",null,"Group by the property column to rank column x:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," select x, y, dense_rank() over(partition by x order by y) as rank from int_t;\n \n | x  | y    | rank     |\n |----|------|----------|\n | 1  | 1    | 1        |\n | 1  | 2    | 2        |\n | 1  | 2    | 2        |\n | 2  | 1    | 1        |\n | 2  | 2    | 2        |\n | 2  | 3    | 3        |\n | 3  | 1    | 1        |\n | 3  | 1    | 1        |\n | 3  | 2    | 2        |\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,DENSE_RANK\n")))}p.isMDXComponent=!0}}]);