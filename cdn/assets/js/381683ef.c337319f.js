"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[4469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>E});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),E=a,u=d["".concat(l,".").concat(E)]||d[E]||m[E]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"CREATE ENCRYPTKEY",language:"en"},o=void 0,s={unversionedId:"sql-reference/sql-statements/Data-Definition/CREATE-ENCRYPTKEY",id:"version-0.15/sql-reference/sql-statements/Data-Definition/CREATE-ENCRYPTKEY",title:"CREATE ENCRYPTKEY",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Definition/CREATE-ENCRYPTKEY.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/CREATE-ENCRYPTKEY",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-ENCRYPTKEY",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CREATE ENCRYPTKEY",language:"en"},sidebar:"docs",previous:{title:"CANCEL BACKUP",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/CANCEL-BACKUP"},next:{title:"CANCEL RESTORE",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/CANCEL-RESTORE"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:2},{value:"Keyword",id:"keyword",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-encryptkey"},"CREATE ENCRYPTKEY"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CREATE ENCRYPTKEY key_name\n    AS "key_string"\n')),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"key_name"),": The name of the key to be created, which can include the name of the database. For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"db1.my_key"),"."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"key_string"),": The string to create the key")),(0,a.kt)("p",null,"This statement creates a custom key. Executing this command requires the user to have the ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN")," privileges."),(0,a.kt)("p",null,"If the database name is included in ",(0,a.kt)("inlineCode",{parentName:"p"},"key_name"),", then this custom key will be created in the corresponding database, otherwise this function will be created in the database where the current session is located. The name of the new key cannot be the same as the key that already exists in the corresponding database, otherwise the creation will fail."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a custom key"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'CREATE ENCRYPTKEY my_key as "ABCD123456789";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using a custom key"),(0,a.kt)("p",{parentName:"li"},"To use a custom key, add the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"KEY"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"key")," before the key name, separated from ",(0,a.kt)("inlineCode",{parentName:"p"},"key_name")," by a space."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6               |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+--------------------------------------------------------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+--------------------------------------------------------------------+\n| Doris is Great                                                     |\n+--------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")))),(0,a.kt)("h2",{id:"keyword"},"Keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE,ENCRYPTKEY\n")))}m.isMDXComponent=!0}}]);