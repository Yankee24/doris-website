"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[83327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=s,m=u["".concat(a,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={title:"SM4",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/sm4",id:"version-dev/sql-manual/sql-functions/encrypt-digest-functions/sm4",title:"SM4",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/encrypt-digest-functions/sm4.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/sm4",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm4",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/encrypt-digest-functions/sm4.md",tags:[],version:"dev",frontMatter:{title:"SM4",language:"en"},sidebar:"docs",previous:{title:"MD5SUM",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/md5sum"},next:{title:"SM3",permalink:"/docs/dev/sql-manual/sql-functions/encrypt-digest-functions/sm3"}},a={},c=[{value:"SM4_ENCRYPT",id:"sm4_encrypt",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"SM4_DECRYPT",id:"sm4_decrypt",level:2},{value:"description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords-1",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"sm4_encrypt"},"SM4_ENCRYPT"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"VARCHAR SM4_ENCRYPT(str,key_str[,init_vector])")),(0,s.kt)("p",null,"return encrypted result"),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MySQL > select TO_BASE64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3'));\n+--------------------------------+\n| to_base64(sm4_encrypt('text')) |\n+--------------------------------+\n| aDjwRflBrDjhBZIOFNw3Tg==       |\n+--------------------------------+\n1 row in set (0.010 sec)\n\nMySQL > set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.001 sec)\n\nMySQL > select to_base64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+----------------------------------------------------------------------------------+\n| to_base64(sm4_encrypt('text', 'F3229A0B371ED2D9441B830D21A390C3', '0123456789')) |\n+----------------------------------------------------------------------------------+\n| G7yqOKfEyxdagboz6Qf01A==                                                         |\n+----------------------------------------------------------------------------------+\n1 row in set (0.014 sec)\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SM4_ENCRYPT\n")),(0,s.kt)("h2",{id:"sm4_decrypt"},"SM4_DECRYPT"),(0,s.kt)("h3",{id:"description-1"},"description"),(0,s.kt)("h4",{id:"syntax-1"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"VARCHAR SM4_DECRYPT(str,key_str[,init_vector])")),(0,s.kt)("p",null,"Return the decrypted result"),(0,s.kt)("h3",{id:"example-1"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MySQL [(none)]> select SM4_DECRYPT(FROM_BASE64('aDjwRflBrDjhBZIOFNw3Tg=='),'F3229A0B371ED2D9441B830D21A390C3');\n+------------------------------------------------------+\n| sm4_decrypt(from_base64('aDjwRflBrDjhBZIOFNw3Tg==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.009 sec)\n\nMySQL> set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select SM4_DECRYPT(FROM_BASE64('G7yqOKfEyxdagboz6Qf01A=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n+--------------------------------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('G7yqOKfEyxdagboz6Qf01A=='), 'F3229A0B371ED2D9441B830D21A390C3', '0123456789') |\n+--------------------------------------------------------------------------------------------------------+\n| text                                                                                                   |\n+--------------------------------------------------------------------------------------------------------+\n1 row in set (0.012 sec)\n")),(0,s.kt)("h3",{id:"keywords-1"},"keywords"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SM4_DECRYPT\n")))}d.isMDXComponent=!0}}]);