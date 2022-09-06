"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[59422],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),c=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),k=r,m=d["".concat(a,".").concat(k)]||d[k]||p[k]||s;return t?o.createElement(m,l(l({ref:n},u),{},{components:t})):o.createElement(m,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<s;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const s={title:"get_json_int",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/get_json_int",id:"version-dev/sql-manual/sql-functions/json-functions/get_json_int",title:"get_json_int",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/json-functions/get_json_int.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/get_json_int",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get_json_int",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/json-functions/get_json_int.md",tags:[],version:"dev",frontMatter:{title:"get_json_int",language:"zh-CN"},sidebar:"docs",previous:{title:"get_json_double",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get_json_double"},next:{title:"get_json_string",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get_json_string"}},a={},c=[{value:"get_json_int",id:"get_json_int",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get_json_int"},"get_json_int"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INT get_json_int(VARCHAR json_str, VARCHAR json_path)")),(0,r.kt)("p",null,"\u89e3\u6790\u5e76\u83b7\u53d6 json \u5b57\u7b26\u4e32\u5185\u6307\u5b9a\u8def\u5f84\u7684\u6574\u578b\u5185\u5bb9\u3002\n\u5176\u4e2d json_path \u5fc5\u987b\u4ee5 $ \u7b26\u53f7\u4f5c\u4e3a\u5f00\u5934\uff0c\u4f7f\u7528 . \u4f5c\u4e3a\u8def\u5f84\u5206\u5272\u7b26\u3002\u5982\u679c\u8def\u5f84\u4e2d\u5305\u542b . \uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u53cc\u5f15\u53f7\u5305\u56f4\u3002\n\u4f7f\u7528 ","[ ]",' \u8868\u793a\u6570\u7ec4\u4e0b\u6807\uff0c\u4ece 0 \u5f00\u59cb\u3002\npath \u7684\u5185\u5bb9\u4e0d\u80fd\u5305\u542b ", ',"[ \u548c ]","\u3002\n\u5982\u679c json_string \u683c\u5f0f\u4e0d\u5bf9\uff0c\u6216 json_path \u683c\u5f0f\u4e0d\u5bf9\uff0c\u6216\u65e0\u6cd5\u627e\u5230\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\u83b7\u53d6 key \u4e3a "k1" \u7684 value')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_int(\'{"k1":1, "k2":"2"}\', "$.k1");\n+--------------------------------------------+\n| get_json_int(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'\u83b7\u53d6 key \u4e3a "my.key" \u7684\u6570\u7ec4\u4e2d\u7b2c\u4e8c\u4e2a\u5143\u7d20')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\');\n+------------------------------------------------------------------+\n| get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------+\n|                                                                2 |\n+------------------------------------------------------------------+\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u4e8c\u7ea7\u8def\u5f84\u4e3a k1.key -> k2 \u7684\u6570\u7ec4\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mysql> SELECT get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\');\n+--------------------------------------------------------------+\n| get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\') |\n+--------------------------------------------------------------+\n|                                                            1 |\n+--------------------------------------------------------------+\n')),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"GET_JSON_INT,GET,JSON,INT"))}p.isMDXComponent=!0}}]);