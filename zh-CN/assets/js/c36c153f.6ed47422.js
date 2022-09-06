"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[3020],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79300:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const o={title:"REVERSE",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/reverse",id:"version-dev/sql-manual/sql-functions/string-functions/reverse",title:"REVERSE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/string-functions/reverse.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/reverse",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/reverse",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/string-functions/reverse.md",tags:[],version:"dev",frontMatter:{title:"REVERSE",language:"zh-CN"},sidebar:"docs",previous:{title:"ascii",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/ascii"},next:{title:"length",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/length"}},a={},c=[{value:"reverse",id:"reverse",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"reverse"},"reverse"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"VARCHAR reverse(VARCHAR str)"),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"ARRAY<T> reverse(ARRAY<T> arr)")),(0,s.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u6216\u6570\u7ec4\u53cd\u8f6c\uff0c\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4\u7684\u987a\u5e8f\u548c\u539f\u6765\u7684\u987a\u5e8f\u76f8\u53cd\u3002"),(0,s.kt)("h3",{id:"notice"},"notice"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"\u5bf9\u4e8e\u6570\u7ec4\u7c7b\u578b\uff0c\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mysql> SELECT REVERSE('hello');\n+------------------+\n| REVERSE('hello') |\n+------------------+\n| olleh            |\n+------------------+\n1 row in set (0.00 sec)\n\nmysql> SELECT REVERSE('\u4f60\u597d');\n+------------------+\n| REVERSE('\u4f60\u597d')   |\n+------------------+\n| \u597d\u4f60              |\n+------------------+\n1 row in set (0.00 sec)\n\nmysql> set enable_vectorized_engine=true;\n\nmysql> select k1, k2, reverse(k2) from array_test order by k1;\n+------+-----------------------------+-----------------------------+\n| k1   | k2                          | reverse(`k2`)               |\n+------+-----------------------------+-----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | [5, 4, 3, 2, 1]             |\n|  2   | [6, 7, 8]                   | [8, 7, 6]                   |\n|  3   | []                          | []                          |\n|  4   | NULL                        | NULL                        |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [1, 2, 3, 4, 5, 4, 3, 2, 1] |\n|  6   | [1, 2, 3, NULL]             | [NULL, 3, 2, 1]             |\n|  7   | [4, 5, 6, NULL, NULL]       | [NULL, NULL, 6, 5, 4]       |\n+------+-----------------------------+-----------------------------+\n\nmysql> select k1, k2, reverse(k2) from array_test01 order by k1;\n+------+-----------------------------------+-----------------------------------+\n| k1   | k2                                | reverse(`k2`)                     |\n+------+-----------------------------------+-----------------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | ['d', 'c', 'b', 'a']              |\n|  2   | ['e', 'f', 'g', 'h']              | ['h', 'g', 'f', 'e']              |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | ['c', NULL, 'b', NULL, 'a', NULL] |\n|  4   | ['d', 'e', NULL, ' ']             | [' ', NULL, 'e', 'd']             |\n|  5   | [' ', NULL, 'f', 'g']             | ['g', 'f', NULL, ' ']             |\n+------+-----------------------------------+-----------------------------------+\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("p",null,"REVERSE, ARRAY"))}p.isMDXComponent=!0}}]);