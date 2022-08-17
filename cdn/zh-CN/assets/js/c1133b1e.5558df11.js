"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[64333],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>s});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=d(t),s=i,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const l={title:"time_round",language:"zh-CN"},o=void 0,a={unversionedId:"sql-reference/sql-functions/date-time-functions/time_round",id:"version-0.15/sql-reference/sql-functions/date-time-functions/time_round",title:"time_round",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/date-time-functions/time_round.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/time_round",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/date-time-functions/time_round",draft:!1,tags:[],version:"0.15",frontMatter:{title:"time_round",language:"zh-CN"},sidebar:"docs",previous:{title:"str_to_date",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/date-time-functions/str_to_date"},next:{title:"timediff",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/date-time-functions/timediff"}},p={},d=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"time_round"},"time_round"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DATETIME TIME_ROUND(DATETIME expr)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DATETIME TIME_ROUND(DATETIME expr, INT period)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DATETIME TIME_ROUND(DATETIME expr, DATETIME origin)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DATETIME TIME_ROUND(DATETIME expr, INT period, DATETIME origin)")),(0,i.kt)("p",null,"\u51fd\u6570\u540d ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME_ROUND")," \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0c\u6bcf\u90e8\u5206\u7531\u4ee5\u4e0b\u53ef\u9009\u503c\u7ec4\u6210"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TIME"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"SECOND"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MINUTE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"HOUR"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DAY"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"WEEK"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MONTH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"YEAR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ROUND"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"FLOOR"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"CEIL"))),(0,i.kt)("p",null,"\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," \u7684\u4e0a/\u4e0b\u754c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"period")," \u6307\u5b9a\u6bcf\u4e2a\u5468\u671f\u6709\u591a\u5c11\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"TIME")," \u5355\u4f4d\u7ec4\u6210\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin")," \u6307\u5b9a\u5468\u671f\u7684\u5f00\u59cb\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"1970-01-01T00:00:00"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"WEEK")," \u7684\u9ed8\u8ba4\u5f00\u59cb\u65f6\u95f4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"1970-01-04T00:00:00"),"\uff0c\u5373\u5468\u65e5\u3002\u53ef\u4ee5\u6bd4 ",(0,i.kt)("inlineCode",{parentName:"li"},"expr")," \u5927\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u5c3d\u91cf\u9009\u62e9\u5e38\u89c1 ",(0,i.kt)("inlineCode",{parentName:"li"},"period"),"\uff0c\u5982 3 ",(0,i.kt)("inlineCode",{parentName:"li"},"MONTH"),"\uff0c90 ",(0,i.kt)("inlineCode",{parentName:"li"},"MINUTE")," \u7b49\uff0c\u5982\u8bbe\u7f6e\u4e86\u975e\u5e38\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"period"),"\uff0c\u8bf7\u540c\u65f6\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"li"},"origin"),"\u3002")),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nMySQL> SELECT YEAR_FLOOR('20200202000000');\n+------------------------------+\n| year_floor('20200202000000') |\n+------------------------------+\n| 2020-01-01 00:00:00          |\n+------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3); --quarter\n+--------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3) |\n+--------------------------------------------------------+\n| 2020-04-01 00:00:00                                    |\n+--------------------------------------------------------+\n\n\nMySQL> SELECT WEEK_CEIL('2020-02-02 13:09:20', '2020-01-06'); --monday\n+---------------------------------------------------------+\n| week_ceil('2020-02-02 13:09:20', '2020-01-06 00:00:00') |\n+---------------------------------------------------------+\n| 2020-02-03 00:00:00                                     |\n+---------------------------------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)); --next rent day\n+-------------------------------------------------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)) |\n+-------------------------------------------------------------------------------------------------+\n| 2020-04-09 00:00:00                                                                             |\n+-------------------------------------------------------------------------------------------------+\n\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"TIME_ROUND"))}u.isMDXComponent=!0}}]);