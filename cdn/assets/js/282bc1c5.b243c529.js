"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12108],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>b});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),d=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(n),b=i,m=c["".concat(l,".").concat(b)]||c[b]||u[b]||a;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83647:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",language:"en"},o=void 0,s={unversionedId:"administrator-guide/http-actions/tablets_distribution",id:"version-0.15/administrator-guide/http-actions/tablets_distribution",title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/http-actions/tablets_distribution.md",sourceDirName:"administrator-guide/http-actions",slug:"/administrator-guide/http-actions/tablets_distribution",permalink:"/docs/0.15/administrator-guide/http-actions/tablets_distribution",draft:!1,tags:[],version:"0.15",frontMatter:{title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",language:"en"},sidebar:"docs",previous:{title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",permalink:"/docs/0.15/administrator-guide/http-actions/tablet-migration-action"},next:{title:"Doris Error Table",permalink:"/docs/0.15/administrator-guide/operation/doris-error-code"}},l={},d=[],p={toc:d};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-tablets-distribution-between-different-disks"},"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS"),(0,i.kt)("p",null,"Get the distribution of tablets under each partition between different disks on BE node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition\n")),(0,i.kt)("p",null,"The return is the number distribution of tablets under each partition between different disks on BE node, which only include tablet number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n\n            ...\n\n        ]\n    },\n    count: ***\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition&partition_id=xxx\n")),(0,i.kt)("p",null,"The return is the number distribution of tablets under the particular partition between different disks on BE node, which include tablet number, tablet id, schema hash and tablet size."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                        tablets:[\n                            {\n                                tablet_id:***,\n                                schema_hash:***,\n                                tablet_size:***\n                            },\n\n                            ...\n\n                        ]\n                    },\n\n                    ...\n\n                ]\n            }\n        ]\n    },\n    count: ***\n}\n')))}u.isMDXComponent=!0}}]);