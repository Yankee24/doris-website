"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[82052],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW-FUNCTION-LAG",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG",id:"version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG",title:"WINDOW-FUNCTION-LAG",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG.md",tags:[],version:"dev",frontMatter:{title:"WINDOW-FUNCTION-LAG",language:"en"},sidebar:"docs",previous:{title:"explode_numbers",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers"},next:{title:"WINDOW-FUNCTION-SUM",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM"}},s={},c=[{value:"WINDOW FUNCTION LAG",id:"window-function-lag",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-lag"},"WINDOW FUNCTION LAG"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"The LAG() method is used to calculate the value of the current line several lines ahead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"LAG(expr, offset, default) OVER (partition_by_clause order_by_clause)\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("p",null,"Calculate the previous day's closing price"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'select stock_symbol, closing_date, closing_price,    \nlag(closing_price,1, 0) over (partition by stock_symbol order by closing_date) as "yesterday closing"   \nfrom stock_ticker   \norder by closing_date;\n\n| stock_symbol | closing_date        | closing_price | yesterday closing |\n|--------------|---------------------|---------------|-------------------|\n| JDR          | 2014-09-13 00:00:00 | 12.86         | 0                 |\n| JDR          | 2014-09-14 00:00:00 | 12.89         | 12.86             |\n| JDR          | 2014-09-15 00:00:00 | 12.94         | 12.89             |\n| JDR          | 2014-09-16 00:00:00 | 12.55         | 12.94             |\n| JDR          | 2014-09-17 00:00:00 | 14.03         | 12.55             |\n| JDR          | 2014-09-18 00:00:00 | 14.75         | 14.03             |\n| JDR          | 2014-09-19 00:00:00 | 13.98         | 14.75             |\n')),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,LAG\n")))}d.isMDXComponent=!0}}]);