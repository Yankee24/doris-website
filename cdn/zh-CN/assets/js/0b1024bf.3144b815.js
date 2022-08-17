"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[51379],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>h});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,g=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return n?t.createElement(g,s(s({ref:a},d),{},{components:n})):t.createElement(g,s({ref:a},d))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94975:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(87462),r=(n(67294),n(3905));const i={title:"\u53d1\u5e03 Doris Manager",language:"zh-CN"},s=void 0,o={unversionedId:"release-and-verify/release-doris-manager",id:"release-and-verify/release-doris-manager",title:"\u53d1\u5e03 Doris Manager",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/release-and-verify/release-doris-manager.md",sourceDirName:"release-and-verify",slug:"/release-and-verify/release-doris-manager",permalink:"/zh-CN/community/release-and-verify/release-doris-manager",draft:!1,tags:[],version:"current",frontMatter:{title:"\u53d1\u5e03 Doris Manager",language:"zh-CN"},sidebar:"community",previous:{title:"\u53d1\u5e03 Doris Connectors",permalink:"/zh-CN/community/release-and-verify/release-doris-connectors"},next:{title:"\u5b8c\u6210\u53d1\u5e03",permalink:"/zh-CN/community/release-and-verify/release-complete"}},c={},l=[{value:"\u51c6\u5907\u53d1\u5e03",id:"\u51c6\u5907\u53d1\u5e03",level:2},{value:"\u51c6\u5907\u5206\u652f",id:"\u51c6\u5907\u5206\u652f",level:2},{value:"\u6e05\u7406 issues",id:"\u6e05\u7406-issues",level:2},{value:"\u5408\u5e76\u5fc5\u8981\u7684Patch",id:"\u5408\u5e76\u5fc5\u8981\u7684patch",level:2},{value:"\u9a8c\u8bc1\u5206\u652f",id:"\u9a8c\u8bc1\u5206\u652f",level:2},{value:"\u7a33\u5b9a\u6027\u6d4b\u8bd5",id:"\u7a33\u5b9a\u6027\u6d4b\u8bd5",level:3},{value:"\u7f16\u8bd1\u9a8c\u8bc1",id:"\u7f16\u8bd1\u9a8c\u8bc1",level:3},{value:"\u793e\u533a\u53d1\u5e03\u6295\u7968\u6d41\u7a0b",id:"\u793e\u533a\u53d1\u5e03\u6295\u7968\u6d41\u7a0b",level:2},{value:"\u6253 tag",id:"\u6253-tag",level:3},{value:"\u6253\u5305\u3001\u7b7e\u540d\u4e0a\u4f20",id:"\u6253\u5305\u7b7e\u540d\u4e0a\u4f20",level:3},{value:"\u53d1\u90ae\u4ef6\u5230\u793e\u533a dev@doris.apache.org \u8fdb\u884c\u6295\u7968",id:"\u53d1\u90ae\u4ef6\u5230\u793e\u533a-devdorisapacheorg-\u8fdb\u884c\u6295\u7968",level:3},{value:"\u6295\u7968\u901a\u8fc7\u540e\uff0c\u53d1 Result \u90ae\u4ef6",id:"\u6295\u7968\u901a\u8fc7\u540e\u53d1-result-\u90ae\u4ef6",level:3},{value:"\u53d1 Result \u90ae\u4ef6\u5230 general@incubator.apache.org",id:"\u53d1-result-\u90ae\u4ef6\u5230-generalincubatorapacheorg",level:3},{value:"\u5b8c\u6210\u53d1\u5e03",id:"\u5b8c\u6210\u53d1\u5e03",level:2}],d={toc:l};function p(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u53d1\u5e03-doris-manager"},"\u53d1\u5e03 Doris Manager"),(0,r.kt)("p",null,"\u5176\u4ee3\u7801\u5e93\u72ec\u7acb\u4e8e Doris \u4e3b\u4ee3\u7801\u5e93\u4f4d\u4e8e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/doris-manager"},"https://github.com/apache/doris-manager"))),(0,r.kt)("h2",{id:"\u51c6\u5907\u53d1\u5e03"},"\u51c6\u5907\u53d1\u5e03"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/community/release-and-verify/release-prepare"},"\u53d1\u7248\u51c6\u5907")," \u6587\u6863\u8fdb\u884c\u53d1\u7248\u51c6\u5907\u3002"),(0,r.kt)("h2",{id:"\u51c6\u5907\u5206\u652f"},"\u51c6\u5907\u5206\u652f"),(0,r.kt)("p",null,"\u53d1\u5e03\u524d\u9700\u8981\u5148\u65b0\u5efa\u4e00\u4e2a\u5206\u652f\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git checkout -b branch-1.0.0\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5206\u652f\u8981\u8fdb\u884c\u6bd4\u8f83\u5145\u5206\u7684\u6d4b\u8bd5\uff0c\u4f7f\u5f97\u529f\u80fd\u53ef\u7528\uff0cbug\u6536\u655b\uff0c\u91cd\u8981bug\u90fd\u5f97\u5230\u4fee\u590d\u3002 \u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u7b49\u5f85\u793e\u533a\uff0c\u770b\u770b\u662f\u5426\u6709\u5fc5\u8981\u7684patch\u9700\u8981\u5728\u8fd9\u4e2a\u7248\u672c\u5408\u5165\uff0c\u5982\u679c\u6709\uff0c\u9700\u8981\u628a\u5b83 cherry-pick \u5230\u53d1\u5e03\u5206\u652f\u3002"),(0,r.kt)("h2",{id:"\u6e05\u7406-issues"},"\u6e05\u7406 issues"),(0,r.kt)("p",null,"\u5c06\u5c5e\u4e8e\u8fd9\u4e2a\u7248\u672c\u7684\u6240\u6709 issue \u90fd\u8fc7\u4e00\u904d\uff0c\u5173\u95ed\u5df2\u7ecf\u5b8c\u6210\u7684\uff0c\u5982\u679c\u6ca1\u6cd5\u5b8c\u6210\u7684\uff0c\u63a8\u8fdf\u5230\u66f4\u665a\u7684\u7248\u672c"),(0,r.kt)("h2",{id:"\u5408\u5e76\u5fc5\u8981\u7684patch"},"\u5408\u5e76\u5fc5\u8981\u7684Patch"),(0,r.kt)("p",null,"\u5728\u53d1\u5e03\u7b49\u5f85\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u4f1a\u6709\u6bd4\u8f83\u91cd\u8981\u7684Patch\u5408\u5165\uff0c\u5982\u679c\u793e\u533a\u6709\u4eba\u8bf4\u8981\u6709\u91cd\u8981\u7684Bug\u9700\u8981\u5408\u5165\uff0c\u90a3\u4e48 Release Manager \u9700\u8981\u8bc4\u4f30\u5e76\u5c06\u91cd\u8981\u7684Patch\u5408\u5165\u5230\u53d1\u5e03\u5206\u652f\u4e2d"),(0,r.kt)("h2",{id:"\u9a8c\u8bc1\u5206\u652f"},"\u9a8c\u8bc1\u5206\u652f"),(0,r.kt)("h3",{id:"\u7a33\u5b9a\u6027\u6d4b\u8bd5"},"\u7a33\u5b9a\u6027\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5c06\u6253\u597d\u7684\u5206\u652f\u4ea4\u7ed9 QA \u540c\u5b66\u8fdb\u884c\u7a33\u5b9a\u6027\u6d4b\u8bd5\u3002\u5982\u679c\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u51fa\u73b0\u9700\u8981\u4fee\u590d\u7684\u95ee\u9898\uff0c\u5219\u5982\u679c\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u51fa\u73b0\u9700\u8981\u4fee\u590d\u7684\u95ee\u9898\uff0c\u5f85\u4fee\u590d\u597d\u540e\uff0c\u9700\u8981\u5c06\u4fee\u590d\u95ee\u9898\u7684 PR \u5408\u5165\u5230\u5f85\u53d1\u7248\u672c\u7684\u5206\u652f\u4e2d\u3002"),(0,r.kt)("p",null,"\u5f85\u6574\u4e2a\u5206\u652f\u7a33\u5b9a\u540e\uff0c\u624d\u80fd\u51c6\u5907\u53d1\u7248\u672c\u3002"),(0,r.kt)("h3",{id:"\u7f16\u8bd1\u9a8c\u8bc1"},"\u7f16\u8bd1\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605\u7f16\u8bd1\u6587\u6863\u8fdb\u884c\u7f16\u8bd1\uff0c\u4ee5\u786e\u4fdd\u6e90\u7801\u7f16\u8bd1\u6b63\u786e\u6027\u3002"),(0,r.kt)("h2",{id:"\u793e\u533a\u53d1\u5e03\u6295\u7968\u6d41\u7a0b"},"\u793e\u533a\u53d1\u5e03\u6295\u7968\u6d41\u7a0b"),(0,r.kt)("h3",{id:"\u6253-tag"},"\u6253 tag"),(0,r.kt)("p",null,"\u5f53\u4e0a\u8ff0\u5206\u652f\u5df2\u7ecf\u6bd4\u8f83\u7a33\u5b9a\u540e\uff0c\u5c31\u53ef\u4ee5\u5728\u6b64\u5206\u652f\u4e0a\u6253 tag\u3002 "),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'$ git checkout branch-1.0.0\n$ git tag -a 1.0.0-rc01 -m "doris manager 1.0.0 release candidate 01"\n$ git push origin 1.0.0-rc01\nCounting objects: 1, done.\nWriting objects: 100% (1/1), 165 bytes | 0 bytes/s, done.\nTotal 1 (delta 0), reused 0 (delta 0)\nTo git@github.com:apache/doris-manager.git\n * [new tag]         1.0.0-rc01 -> 1.0.0-rc01\n\n$ git tag\n')),(0,r.kt)("h3",{id:"\u6253\u5305\u7b7e\u540d\u4e0a\u4f20"},"\u6253\u5305\u3001\u7b7e\u540d\u4e0a\u4f20"),(0,r.kt)("p",null,"\u5982\u4e0b\u6b65\u9aa4\uff0c\u4e5f\u9700\u8981\u901a\u8fc7 SecureCRT \u7b49\u7ec8\u7aef\u76f4\u63a5\u767b\u5f55\u7528\u6237\u8d26\u6237\uff0c\u4e0d\u80fd\u901a\u8fc7 su - user \u6216\u8005 ssh \u8f6c\uff0c\u5426\u5219\u5bc6\u7801\u8f93\u5165 box \u4f1a\u663e\u793a\u4e0d\u51fa\u6765\u800c\u62a5\u9519\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git archive --format=tar 1.0.0-rc01 --prefix=apache-doris-incubating-manager-src-1.0.0-rc01/ | gzip > apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n\ngpg -u xxx@apache.org --armor --output apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.asc --detach-sign apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n\ngpg --verify apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.asc apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n\nsha512sum apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz > apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.sha512\n\nsha512sum --check apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.sha512\n")),(0,r.kt)("p",null,"\u7136\u540e\u5c06\u6253\u5305\u7684\u5185\u5bb9\u4e0a\u4f20\u5230svn\u4ed3\u5e93\u4e2d\uff0c\u9996\u5148\u4e0b\u8f7d svn \u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"svn co https://dist.apache.org/repos/dist/dev/doris/\n")),(0,r.kt)("p",null,"\u5c06\u4e4b\u524d\u5f97\u5230\u7684\u5168\u90e8\u6587\u4ef6\u7ec4\u7ec7\u6210\u4ee5\u4e0bsvn\u8def\u5f84"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./doris/\n\u251c\u2500\u2500 doris-manager\n\u2502   \u2514\u2500\u2500 1.0.0\n\u2502       \u251c\u2500\u2500 apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n\u2502       \u251c\u2500\u2500 apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.asc\n\u2502       \u2514\u2500\u2500 apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.sha512\n")),(0,r.kt)("p",null,"\u4e0a\u4f20\u8fd9\u4e9b\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'svn add 1.0.0-rc01\nsvn commit -m "Add doris manager 1.0.0-rc01"\n')),(0,r.kt)("h3",{id:"\u53d1\u90ae\u4ef6\u5230\u793e\u533a-devdorisapacheorg-\u8fdb\u884c\u6295\u7968"},"\u53d1\u90ae\u4ef6\u5230\u793e\u533a ",(0,r.kt)("a",{parentName:"h3",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org")," \u8fdb\u884c\u6295\u7968"),(0,r.kt)("p",null,"[VOTE]"," Release Apache Doris Manager 1.0.0-incubating-rc01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi All,\n\nThis is a call for vote to release Doris Manager v1.0.0 for Apache Doris(Incubating).\n\n- apache-doris-incubating-manager-src-1.0.0-rc01\n\nThe release node:\n\n\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/doris/doris-manager/1.0.0/\n\nKeys to verify the Release Candidate:\nhttps://downloads.apache.org/doris/KEYS\n\nLook at here for how to verify this release candidate:\nhttp://doris.apache.org/community/release-and-verify/release-verify.html\n\nVote thread at dev@doris: [1]\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\n[1] vote thread in dev@doris\n\n\nBrs\uff0c\nxxxx\n------------------\nDISCLAIMER: \nApache Doris (incubating) is an effort undergoing incubation at The\nApache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted\nprojects until a further review indicates that the\ninfrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF\nprojects.\n\nWhile incubation status is not necessarily a reflection\nof the completeness or stability of the code, it does indicate\nthat the project has yet to be fully endorsed by the ASF.\n\n")),(0,r.kt)("h3",{id:"\u6295\u7968\u901a\u8fc7\u540e\u53d1-result-\u90ae\u4ef6"},"\u6295\u7968\u901a\u8fc7\u540e\uff0c\u53d1 Result \u90ae\u4ef6"),(0,r.kt)("p",null,"[Result][VOTE]"," Release Apache Doris Manager 1.0.0-incubating-rc01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Thanks to everyone, and this vote is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 jiafeng Zhang\n+1 xxx\n+1 EmmyMiao87\n+1 Mingyu Chen\n\nBest Regards,\nxxx\n")),(0,r.kt)("p",null,"dev \u90ae\u4ef6\u7ec4\u901a\u8fc7\u540e\uff0c\u518d\u53d1\u9001\u90ae\u4ef6\u5230 general@incubator \u90ae\u4ef6\u7ec4\u8fdb\u884c IPMC \u6295\u7968\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Hi all,\n\nPlease review and vote on Apache Doris Manager 1.0.0-incubating-rc01 release.\n\nDoris manager is a platform for automatic installation, deployment and management of Doris groups\n\nThe Apache Doris community has voted on and approved this release:\nhttps://lists.apache.org/thread.html/d70f7c8a8ae448bf6680a15914646005c6483564464cfa15f4ddc2fc@%3Cdev.doris.apache.org%3E\n\nThe vote result email thread:\nhttps://lists.apache.org/thread.html/64d229f0ba15d66adc83306bc8d7b7ccd5910ecb7e842718ce6a61da@%3Cdev.doris.apache.org%3E\n\nThe release candidate has been tagged in GitHub as 1.0.0-rc01, available here:\nhttps://github.com/apache/doris-manager/releases/tag/1.0.0-rc01\n\nThere is no CHANGE LOG file because this is the first release of Apache Doris.\nThanks to everyone who has contributed to this release, and there is a simple release notes can be found here:\nhttps://github.com/apache/doris/issues/406\n\nThe artifacts (source, signature and checksum) corresponding to this release candidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/doris/doris-manager/1.0.0/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to lide@apache.org.\nKEYS file is available here:\nhttps://downloads.apache.org/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nTo verify and build, you can refer to following instruction:\n\nFirstly, you must be install and start docker service, and then you could build Doris as following steps:\n\n$ wget https://dist.apache.org/repos/dist/dev/doris/doris-manager/1.0.0/apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n\nStep4: Build Doris\nNow you can decompress and enter Doris source path and build Doris.\n$ tar zxvf apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n$ cd apache-doris-incubating-manager-src-1.0.0-rc01\n$ sh build.sh\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER: \nApache Doris (incubating) is an effort undergoing incubation at The\nApache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted\nprojects until a further review indicates that the\ninfrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF\nprojects.\n\nWhile incubation status is not necessarily a reflection\nof the completeness or stability of the code, it does indicate\nthat the project has yet to be fully endorsed by the ASF.\n")),(0,r.kt)("p",null,"\u90ae\u4ef6\u7684 thread \u8fde\u63a5\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://lists.apache.org/list.html?dev@doris.apache.org\n")),(0,r.kt)("h3",{id:"\u53d1-result-\u90ae\u4ef6\u5230-generalincubatorapacheorg"},"\u53d1 Result \u90ae\u4ef6\u5230 ",(0,r.kt)("a",{parentName:"h3",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")),(0,r.kt)("p",null,"[RESULT][VOTE]"," Release Apache Doris Manager 1.0.0-incubating-rc01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Hi,\n\nThanks to everyone, and the vote for releasing Apache Doris Manager 1.0.0-incubating-rc01 is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Willem Jiang\n+1 Justin Mclean\n+1 ShaoFeng Shi\n+1 Makoto Yui\n\nThe vote thread:\nhttps://lists.apache.org/thread.html/da05fdd8d84e35de527f27200b5690d7811a1e97d419d1ea66562130@%3Cgeneral.incubator.apache.org%3E\n\nBest Regards,\nxxx\n")),(0,r.kt)("h2",{id:"\u5b8c\u6210\u53d1\u5e03"},"\u5b8c\u6210\u53d1\u5e03"),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/community/release-and-verify/release-complete"},"\u5b8c\u6210\u53d1\u5e03")," \u6587\u6863\u5b8c\u6210\u6240\u6709\u53d1\u5e03\u6d41\u7a0b\u3002"))}p.isMDXComponent=!0}}]);