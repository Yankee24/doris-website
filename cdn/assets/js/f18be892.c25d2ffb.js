"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[40685],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW-FUNCTION-MIN",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-MIN",id:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-MIN",title:"WINDOW-FUNCTION-MIN",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-MIN.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-MIN",permalink:"/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-MIN",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW-FUNCTION-MIN",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-COUNT",permalink:"/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-COUNT"},next:{title:"WINDOW-FUNCTION-MAX",permalink:"/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-MAX"}},c={},s=[{value:"WINDOW FUNCTION MIN",id:"window-function-min",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-min"},"WINDOW FUNCTION MIN"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"The LEAD() method is used to calculate the minimum value within the window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"MAX([DISTINCT | ALL] expression) [OVER (analytic_clause)]\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("p",null,"Calculate the minimum value from the first row to the row after the current row"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select x, property,   \nmin(x) over    \n(    \norder by property, x desc    \nrows between unbounded preceding and 1 following   \n) as 'local minimum'   \nfrom int_t where property in ('prime','square');\n| x | property | local minimum |\n|---|----------|---------------|\n| 7 | prime    | 5             |\n| 5 | prime    | 3             |\n| 3 | prime    | 2             |\n| 2 | prime    | 2             |\n| 9 | square   | 2             |\n| 4 | square   | 1             |\n| 1 | square   | 1             |\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,MIN\n")))}p.isMDXComponent=!0}}]);