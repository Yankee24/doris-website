"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[46939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),y=l,f=d["".concat(a,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const o={title:"SM4",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/sm4",id:"version-dev/sql-manual/sql-functions/encrypt-digest-functions/sm4",title:"SM4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/encrypt-digest-functions/sm4.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/sm4",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm4",draft:!1,tags:[],version:"dev",frontMatter:{title:"SM4",language:"zh-CN"},sidebar:"docs",previous:{title:"MD5SUM",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/md5sum"},next:{title:"SM3",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm3"}},a={},c=[{value:"SM4_ENCRYPT",id:"sm4_encrypt",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"SM4_DECRYPT",id:"sm4_decrypt",level:2},{value:"description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords-1",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"sm4_encrypt"},"SM4_ENCRYPT"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("p",null,"SM4 \u52a0\u5bc6\u51fd\u6570"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR SM4_ENCRYPT(str,key_str[,init_vector])")),(0,l.kt)("p",null,"\u8fd4\u56de\u52a0\u5bc6\u540e\u7684\u7ed3\u679c"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MySQL > select TO_BASE64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3'));\n+--------------------------------+\n| to_base64(sm4_encrypt('text')) |\n+--------------------------------+\n| aDjwRflBrDjhBZIOFNw3Tg==       |\n+--------------------------------+\n1 row in set (0.010 sec)\n\nMySQL > set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.001 sec)\n\nMySQL > select to_base64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+----------------------------------------------------------------------------------+\n| to_base64(sm4_encrypt('text', 'F3229A0B371ED2D9441B830D21A390C3', '0123456789')) |\n+----------------------------------------------------------------------------------+\n| G7yqOKfEyxdagboz6Qf01A==                                                         |\n+----------------------------------------------------------------------------------+\n1 row in set (0.014 sec)\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"SM4_ENCRYPT"),(0,l.kt)("h2",{id:"sm4_decrypt"},"SM4_DECRYPT"),(0,l.kt)("h3",{id:"description-1"},"description"),(0,l.kt)("p",null,"Aes \u89e3\u5bc6\u51fd\u6570"),(0,l.kt)("h4",{id:"syntax-1"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR AES_DECRYPT(str,key_str[,init_vector])")),(0,l.kt)("p",null,"\u8fd4\u56de\u89e3\u5bc6\u540e\u7684\u7ed3\u679c"),(0,l.kt)("h3",{id:"example-1"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MySQL [(none)]> select SM4_DECRYPT(FROM_BASE64('aDjwRflBrDjhBZIOFNw3Tg=='),'F3229A0B371ED2D9441B830D21A390C3');\n+------------------------------------------------------+\n| sm4_decrypt(from_base64('aDjwRflBrDjhBZIOFNw3Tg==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.009 sec)\n\nMySQL> set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select SM4_DECRYPT(FROM_BASE64('G7yqOKfEyxdagboz6Qf01A=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n+--------------------------------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('G7yqOKfEyxdagboz6Qf01A=='), 'F3229A0B371ED2D9441B830D21A390C3', '0123456789') |\n+--------------------------------------------------------------------------------------------------------+\n| text                                                                                                   |\n+--------------------------------------------------------------------------------------------------------+\n1 row in set (0.012 sec)\n")),(0,l.kt)("h3",{id:"keywords-1"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SM4_DECRYPT\n")))}u.isMDXComponent=!0}}]);