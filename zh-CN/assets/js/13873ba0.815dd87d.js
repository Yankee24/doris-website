"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[69835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(n),m=r,c=k["".concat(d,".").concat(m)]||k[m]||u[m]||l;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},27225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Flink Doris Connector",language:"zh-CN"},i=void 0,o={unversionedId:"ecosystem/flink-doris-connector",id:"version-dev/ecosystem/flink-doris-connector",title:"Flink Doris Connector",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/ecosystem/flink-doris-connector.md",sourceDirName:"ecosystem",slug:"/ecosystem/flink-doris-connector",permalink:"/zh-CN/docs/dev/ecosystem/flink-doris-connector",draft:!1,tags:[],version:"dev",frontMatter:{title:"Flink Doris Connector",language:"zh-CN"},sidebar:"docs",previous:{title:"Spark Doris Connector",permalink:"/zh-CN/docs/dev/ecosystem/spark-doris-connector"},next:{title:"DataX doriswriter",permalink:"/zh-CN/docs/dev/ecosystem/datax"}},d={},s=[{value:"\u7248\u672c\u517c\u5bb9",id:"\u7248\u672c\u517c\u5bb9",level:2},{value:"\u7f16\u8bd1\u4e0e\u5b89\u88c5",id:"\u7f16\u8bd1\u4e0e\u5b89\u88c5",level:2},{value:"\u4f7f\u7528 Maven \u7ba1\u7406",id:"\u4f7f\u7528-maven-\u7ba1\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u53c2\u6570\u914d\u7f6e",id:"\u53c2\u6570\u914d\u7f6e",level:3},{value:"SQL",id:"sql",level:3},{value:"DataStream",id:"datastream",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u901a\u7528\u914d\u7f6e\u9879",id:"\u901a\u7528\u914d\u7f6e\u9879",level:3},{value:"Doris \u548c Flink \u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",id:"doris-\u548c-flink-\u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",level:2},{value:"\u4f7f\u7528 Flink CDC \u63a5\u5165 Doris \u793a\u4f8b\uff08\u652f\u6301 Insert / Update / Delete \u4e8b\u4ef6\uff09",id:"\u4f7f\u7528-flink-cdc-\u63a5\u5165-doris-\u793a\u4f8b\u652f\u6301-insert--update--delete-\u4e8b\u4ef6",level:2},{value:"Java\u793a\u4f8b",id:"java\u793a\u4f8b",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flink-doris-connector"},"Flink Doris Connector"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u6863\u9002\u7528\u4e8eflink-doris-connector 1.1.0\u4e4b\u540e\u7684\u7248\u672c\uff0c1.1.0\u4e4b\u524d\u7684\u7248\u672c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/1.0/extending-doris/flink-doris-connector"},"\u8fd9\u91cc"))),(0,r.kt)("p",null,"Flink Doris Connector \u53ef\u4ee5\u652f\u6301\u901a\u8fc7 Flink \u64cd\u4f5c\uff08\u8bfb\u53d6\u3001\u63d2\u5165\u3001\u4fee\u6539\u3001\u5220\u9664\uff09 Doris \u4e2d\u5b58\u50a8\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4ee3\u7801\u5e93\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris-flink-connector"},"https://github.com/apache/doris-flink-connector")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"Doris")," \u8868\u6620\u5c04\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"DataStream")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"li"},"Table"),"\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u548c\u5220\u9664\u53ea\u652f\u6301\u5728 Unique Key \u6a21\u578b\u4e0a"),(0,r.kt)("li",{parentName:"ol"},"\u76ee\u524d\u7684\u5220\u9664\u662f\u652f\u6301 Flink CDC \u7684\u65b9\u5f0f\u63a5\u5165\u6570\u636e\u5b9e\u73b0\u81ea\u52a8\u5220\u9664\uff0c\u5982\u679c\u662f\u5176\u4ed6\u6570\u636e\u63a5\u5165\u7684\u65b9\u5f0f\u5220\u9664\u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u3002Flink CDC \u7684\u6570\u636e\u5220\u9664\u4f7f\u7528\u65b9\u5f0f\u53c2\u7167\u672c\u6587\u6863\u6700\u540e\u4e00\u8282"))),(0,r.kt)("h2",{id:"\u7248\u672c\u517c\u5bb9"},"\u7248\u672c\u517c\u5bb9"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connector"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris"),(0,r.kt)("th",{parentName:"tr",align:null},"Java"),(0,r.kt)("th",{parentName:"tr",align:null},"Scala"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.14_2.11-1.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.14.x"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.14_2.12-1.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.14.x"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0+"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"2.12")))),(0,r.kt)("h2",{id:"\u7f16\u8bd1\u4e0e\u5b89\u88c5"},"\u7f16\u8bd1\u4e0e\u5b89\u88c5"),(0,r.kt)("p",null,"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"1.\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh.tpl"),"\u6587\u4ef6\uff0c\u91cd\u547d\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"custom_env.sh")),(0,r.kt)("p",null,"2.\u6307\u5b9athrift\u5b89\u88c5\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"##\u6e90\u6587\u4ef6\u5185\u5bb9\n#export THRIFT_BIN=\n#export MVN_BIN=\n#export JAVA_HOME=\n\n##\u4fee\u6539\u5982\u4e0b,MacOS\u4e3a\u4f8b\nexport THRIFT_BIN=/opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift\n#export MVN_BIN=\n#export JAVA_HOME=\n\n\u5b89\u88c5 `thrift` 0.13.0 \u7248\u672c(\u6ce8\u610f\uff1a`Doris` 0.15 \u548c\u6700\u65b0\u7684\u7248\u672c\u57fa\u4e8e `thrift` 0.13.0 \u6784\u5efa, \u4e4b\u524d\u7684\u7248\u672c\u4f9d\u7136\u4f7f\u7528`thrift` 0.9.3 \u6784\u5efa)\n Windows: \n    1.\u4e0b\u8f7d\uff1a`http://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.exe`(\u4e0b\u8f7d\u76ee\u5f55\u81ea\u5df1\u6307\u5b9a)\n    2.\u4fee\u6539thrift-0.13.0.exe \u4e3a thrift\n \n MacOS: \n    1. \u4e0b\u8f7d\uff1a`brew install thrift@0.13.0`\n    2. \u9ed8\u8ba4\u4e0b\u8f7d\u5730\u5740\uff1a/opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift\n    \n \n \u6ce8\uff1aMacOS\u6267\u884c `brew install thrift@0.13.0` \u53ef\u80fd\u4f1a\u62a5\u627e\u4e0d\u5230\u7248\u672c\u7684\u9519\u8bef\uff0c\u89e3\u51b3\u65b9\u6cd5\u5982\u4e0b\uff0c\u5728\u7ec8\u7aef\u6267\u884c\uff1a\n    1. `brew tap-new $USER/local-tap`\n    2. `brew extract --version='0.13.0' thrift $USER/local-tap`\n    3. `brew install thrift@0.13.0`\n \u53c2\u8003\u94fe\u63a5: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n \n Linux:\n    1.\u4e0b\u8f7d\u6e90\u7801\u5305\uff1a`wget https://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.tar.gz`\n    2.\u5b89\u88c5\u4f9d\u8d56\uff1a`yum install -y autoconf automake libtool cmake ncurses-devel openssl-devel lzo-devel zlib-devel gcc gcc-c++`\n    3.`tar zxvf thrift-0.13.0.tar.gz`\n    4.`cd thrift-0.13.0`\n    5.`./configure --without-tests`\n    6.`make`\n    7.`make install`\n   \u5b89\u88c5\u5b8c\u6210\u540e\u67e5\u770b\u7248\u672c\uff1athrift --version  \n   \u6ce8\uff1a\u5982\u679c\u7f16\u8bd1\u8fc7Doris\uff0c\u5219\u4e0d\u9700\u8981\u5b89\u88c5thrift,\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 $DORIS_HOME/thirdparty/installed/bin/thrift\n")),(0,r.kt)("p",null,"\u5728\u6e90\u7801\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh build.sh\n\n  Usage:\n    build.sh --flink version --scala version # specify flink and scala version\n    build.sh --tag                           # this is a build from tag\n  e.g.:\n    build.sh --flink 1.14.3 --scala 2.12\n    build.sh --tag\n\n\u7136\u540e\u6309\u7167\u4f60\u9700\u8981\u7248\u672c\u6267\u884c\u547d\u4ee4\u7f16\u8bd1\u5373\u53ef,\u4f8b\u5982\uff1a\nsh build.sh --flink 1.14.3 --scala 2.12\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"target/")," \u76ee\u5f55\u4e0b\u751f\u6210\u6587\u4ef6\uff0c\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"flink-doris-connector-1.14_2.12-1.1.0-SNAPSHOT.jar")," \u3002\u5c06\u6b64\u6587\u4ef6\u590d\u5236\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassPath")," \u4e2d\u5373\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink-Doris-Connector")," \u3002\u4f8b\u5982\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"Local")," \u6a21\u5f0f\u8fd0\u884c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink")," \uff0c\u5c06\u6b64\u6587\u4ef6\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," \u6587\u4ef6\u5939\u4e0b\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," \u96c6\u7fa4\u6a21\u5f0f\u8fd0\u884c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink")," \uff0c\u5219\u5c06\u6b64\u6587\u4ef6\u653e\u5165\u9884\u90e8\u7f72\u5305\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5907\u6ce8")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Doris FE \u8981\u5728\u914d\u7f6e\u4e2d\u914d\u7f6e\u542f\u7528 http v2")),(0,r.kt)("p",null,"\u200b       conf/fe.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"enable_http_server_v2 = true\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-maven-\u7ba1\u7406"},"\u4f7f\u7528 Maven \u7ba1\u7406"),(0,r.kt)("p",null,"\u6dfb\u52a0 flink-doris-connector \u548c\u5fc5\u8981\u7684 Flink Maven \u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-java</artifactId>\n    <version>${flink.version}</version>\n    <scope>provided</scope>\n</dependency>\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-streaming-java_${scala.version}</artifactId>\n    <version>${flink.version}</version>\n    <scope>provided</scope>\n</dependency>\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-clients_${scala.version}</artifactId>\n    <version>${flink.version}</version>\n    <scope>provided</scope>\n</dependency>\n\x3c!-- flink table --\x3e\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-table-planner_${scala.version}</artifactId>\n    <version>${flink.version}</version>\n    <scope>provided</scope>\n</dependency>\n\n\x3c!-- flink-doris-connector --\x3e\n<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>flink-doris-connector-1.14_2.12</artifactId>\n  <version>1.1.0</version>\n</dependency>  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5907\u6ce8")),(0,r.kt)("p",null,"1.\u8bf7\u6839\u636e\u4e0d\u540c\u7684 Flink \u548c Scala \u7248\u672c\u66ff\u6362\u5bf9\u5e94\u7684 Connector \u548c Flink \u4f9d\u8d56\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("p",null,"Flink \u8bfb\u5199 Doris \u6570\u636e\u4e3b\u8981\u6709\u4e24\u79cd\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQL"),(0,r.kt)("li",{parentName:"ul"},"DataStream")),(0,r.kt)("h3",{id:"\u53c2\u6570\u914d\u7f6e"},"\u53c2\u6570\u914d\u7f6e"),(0,r.kt)("p",null,"Flink Doris Connector Sink \u7684\u5185\u90e8\u5b9e\u73b0\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream Load")," \u670d\u52a1\u5411 Doris \u5199\u5165\u6570\u636e, \u540c\u65f6\u4e5f\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream Load")," \u8bf7\u6c42\u53c2\u6570\u7684\u914d\u7f6e\u8bbe\u7f6e\uff0c\u5177\u4f53\u53c2\u6570\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"\u8fd9\u91cc"),"\uff0c\u914d\u7f6e\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQL \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"WITH")," \u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"sink.properties.")," \u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"DataStream \u4f7f\u7528\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"li"},"DorisExecutionOptions.builder().setStreamLoadProp(Properties)"),"\u914d\u7f6e")),(0,r.kt)("h3",{id:"sql"},"SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE flink_doris_source (\n    name STRING,\n    age INT,\n    price DECIMAL(5,2),\n    sale DOUBLE\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = 'FE_IP:8030',\n      'table.identifier' = 'database.table',\n      'username' = 'root',\n      'password' = 'password'\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sink")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- enable checkpoint\nSET 'execution.checkpointing.interval' = '10s';\nCREATE TABLE flink_doris_sink (\n    name STRING,\n    age INT,\n    price DECIMAL(5,2),\n    sale DOUBLE\n    ) \n    WITH (\n      'connector' = 'doris',\n      'fenodes' = 'FE_IP:8030',\n      'table.identifier' = 'db.table',\n      'username' = 'root',\n      'password' = 'password',\n      'sink.label-prefix' = 'doris_label'\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO flink_doris_sink select name,age,price,sale from flink_doris_source\n")),(0,r.kt)("h3",{id:"datastream"},"DataStream"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'DorisOptions.Builder builder = DorisOptions.builder()\n        .setFenodes("FE_IP:8030")\n        .setTableIdentifier("db.table")\n        .setUsername("root")\n        .setPassword("password");\n\nDorisSource<List<?>> dorisSource = DorisSourceBuilder.<List<?>>builder()\n        .setDorisOptions(builder.build())\n        .setDorisReadOptions(DorisReadOptions.builder().build())\n        .setDeserializer(new SimpleListDeserializationSchema())\n        .build();\n\nenv.fromSource(dorisSource, WatermarkStrategy.noWatermarks(), "doris source").print();\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sink")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"String \u6570\u636e\u6d41")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// enable checkpoint\nenv.enableCheckpointing(10000);\n\nDorisSink.Builder<String> builder = DorisSink.builder();\nDorisOptions.Builder dorisBuilder = DorisOptions.builder();\ndorisBuilder.setFenodes("FE_IP:8030")\n        .setTableIdentifier("db.table")\n        .setUsername("root")\n        .setPassword("password");\n\n\nDorisExecutionOptions.Builder  executionBuilder = DorisExecutionOptions.builder();\nexecutionBuilder.setLabelPrefix("label-doris"); //streamload label prefix\n\nbuilder.setDorisReadOptions(DorisReadOptions.builder().build())\n        .setDorisExecutionOptions(executionBuilder.build())\n        .setSerializer(new SimpleStringSerializer()) //serialize according to string \n        .setDorisOptions(dorisBuilder.build());\n\n\n//mock string source\nList<Tuple2<String, Integer>> data = new ArrayList<>();\ndata.add(new Tuple2<>("doris",1));\nDataStreamSource<Tuple2<String, Integer>> source = env.fromCollection(data);\n\nsource.map((MapFunction<Tuple2<String, Integer>, String>) t -> t.f0 + "\\t" + t.f1)\n      .sinkTo(builder.build());\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RowData \u6570\u636e\u6d41")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// enable checkpoint\nenv.enableCheckpointing(10000);\n\n//doris sink option\nDorisSink.Builder<RowData> builder = DorisSink.builder();\nDorisOptions.Builder dorisBuilder = DorisOptions.builder();\ndorisBuilder.setFenodes("FE_IP:8030")\n        .setTableIdentifier("db.table")\n        .setUsername("root")\n        .setPassword("password");\n\n// json format to streamload\nProperties properties = new Properties();\nproperties.setProperty("format", "json");\nproperties.setProperty("read_json_by_line", "true");\nDorisExecutionOptions.Builder  executionBuilder = DorisExecutionOptions.builder();\nexecutionBuilder.setLabelPrefix("label-doris") //streamload label prefix\n                .setStreamLoadProp(properties); //streamload params\n\n//flink rowdata\u2018s schema\nString[] fields = {"city", "longitude", "latitude"};\nDataType[] types = {DataTypes.VARCHAR(256), DataTypes.DOUBLE(), DataTypes.DOUBLE()};\n\nbuilder.setDorisReadOptions(DorisReadOptions.builder().build())\n        .setDorisExecutionOptions(executionBuilder.build())\n        .setSerializer(RowDataSerializer.builder()    //serialize according to rowdata \n                           .setFieldNames(fields)\n                           .setType("json")           //json format\n                           .setFieldType(types).build())\n        .setDorisOptions(dorisBuilder.build());\n\n//mock rowdata source\nDataStream<RowData> source = env.fromElements("")\n    .map(new MapFunction<String, RowData>() {\n        @Override\n        public RowData map(String value) throws Exception {\n            GenericRowData genericRowData = new GenericRowData(3);\n            genericRowData.setField(0, StringData.fromString("beijing"));\n            genericRowData.setField(1, 116.405419);\n            genericRowData.setField(2, 39.916927);\n            return genericRowData;\n        }\n    });\n\nsource.sinkTo(builder.build());\n')),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("h3",{id:"\u901a\u7528\u914d\u7f6e\u9879"},"\u901a\u7528\u914d\u7f6e\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fenodes"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris FE http \u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table.identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris \u8868\u540d\uff0c\u5982\uff1adb.tbl")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001\u8bf7\u6c42\u7684\u91cd\u8bd5\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001\u8bf7\u6c42\u7684\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5411 Doris \u53d1\u9001\u8bf7\u6c42\u7684\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,r.kt)("td",{parentName:"tr",align:null},"3600"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2 Doris \u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a1\u5c0f\u65f6\uff0c-1\u8868\u793a\u65e0\u8d85\u65f6\u9650\u5236")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.tablet.size"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer. MAX_VALUE"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a Partition \u5bf9\u5e94\u7684 Doris Tablet \u4e2a\u6570\u3002 \u6b64\u6570\u503c\u8bbe\u7f6e\u8d8a\u5c0f\uff0c\u5219\u4f1a\u751f\u6210\u8d8a\u591a\u7684 Partition\u3002\u4ece\u800c\u63d0\u5347 Flink \u4fa7\u7684\u5e76\u884c\u5ea6\uff0c\u4f46\u540c\u65f6\u4f1a\u5bf9 Doris \u9020\u6210\u66f4\u5927\u7684\u538b\u529b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u6b21\u4ece BE \u8bfb\u53d6\u6570\u636e\u7684\u6700\u5927\u884c\u6570\u3002\u589e\u5927\u6b64\u6570\u503c\u53ef\u51cf\u5c11 Flink \u4e0e Doris \u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\u7684\u6b21\u6570\u3002 \u4ece\u800c\u51cf\u8f7b\u7f51\u7edc\u5ef6\u8fdf\u6240\u5e26\u6765\u7684\u989d\u5916\u65f6\u95f4\u5f00\u9500\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"2147483648"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.arrow.async"),(0,r.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u5f02\u6b65\u8f6c\u6362 Arrow \u683c\u5f0f\u5230 flink-doris-connector \u8fed\u4ee3\u6240\u9700\u7684 RowBatch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.queue.size"),(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u8f6c\u6362 Arrow \u683c\u5f0f\u7684\u5185\u90e8\u5904\u7406\u961f\u5217\uff0c\u5f53 doris.deserialize.arrow.async \u4e3a true \u65f6\u751f\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.read.field"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bfb\u53d6 Doris \u8868\u7684\u5217\u540d\u5217\u8868\uff0c\u591a\u5217\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u8bfb\u53d6\u6570\u636e\u7684\u8868\u8fbe\u5f0f\uff0c\u6b64\u8868\u8fbe\u5f0f\u900f\u4f20\u7ed9 Doris\u3002Doris \u4f7f\u7528\u6b64\u8868\u8fbe\u5f0f\u5b8c\u6210\u6e90\u7aef\u6570\u636e\u8fc7\u6ee4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.label-prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Stream load\u5bfc\u5165\u4f7f\u7528\u7684label\u524d\u7f00\u30022pc\u573a\u666f\u4e0b\u8981\u6c42\u5168\u5c40\u552f\u4e00 \uff0c\u7528\u6765\u4fdd\u8bc1Flink\u7684EOS\u8bed\u4e49\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Stream Load \u7684\u5bfc\u5165\u53c2\u6570\u3002",(0,r.kt)("br",null),"\u4f8b\u5982:  'sink.properties.column_separator' = ', ' \u5b9a\u4e49\u5217\u5206\u9694\u7b26\uff0c  'sink.properties.escape_delimiters' = 'true' \u7279\u6b8a\u5b57\u7b26\u4f5c\u4e3a\u5206\u9694\u7b26,'\\x01'\u4f1a\u88ab\u8f6c\u6362\u4e3a\u4e8c\u8fdb\u5236\u76840x01  ",(0,r.kt)("br",null),(0,r.kt)("br",null),"JSON\u683c\u5f0f\u5bfc\u5165",(0,r.kt)("br",null),"'sink.properties.format' = 'json' 'sink.properties.read_json_by_line' = 'true'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,r.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u5220\u9664\u3002\u6b64\u9009\u9879\u9700\u8981 Doris \u8868\u5f00\u542f\u6279\u91cf\u5220\u9664\u529f\u80fd(Doris0.15+\u7248\u672c\u9ed8\u8ba4\u5f00\u542f)\uff0c\u53ea\u652f\u6301 Unique \u6a21\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.enable-2pc"),(0,r.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u4e24\u9636\u6bb5\u63d0\u4ea4(2pc)\uff0c\u9ed8\u8ba4\u4e3atrue\uff0c\u4fdd\u8bc1Exactly-Once\u8bed\u4e49\u3002\u5173\u4e8e\u4e24\u9636\u6bb5\u63d0\u4ea4\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"\u8fd9\u91cc"),"\u3002")))),(0,r.kt)("h2",{id:"doris-\u548c-flink-\u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb"},"Doris \u548c Flink \u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMALV2"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HLL"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsupported datatype")))),(0,r.kt)("h2",{id:"\u4f7f\u7528-flink-cdc-\u63a5\u5165-doris-\u793a\u4f8b\u652f\u6301-insert--update--delete-\u4e8b\u4ef6"},"\u4f7f\u7528 Flink CDC \u63a5\u5165 Doris \u793a\u4f8b\uff08\u652f\u6301 Insert / Update / Delete \u4e8b\u4ef6\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE cdc_mysql_source (\n  id int\n  ,name VARCHAR\n  ,PRIMARY KEY (id) NOT ENFORCED\n) WITH (\n 'connector' = 'mysql-cdc',\n 'hostname' = '127.0.0.1',\n 'port' = '3306',\n 'username' = 'root',\n 'password' = 'password',\n 'database-name' = 'database',\n 'table-name' = 'table'\n);\n\n-- \u652f\u6301\u5220\u9664\u4e8b\u4ef6\u540c\u6b65(sink.enable-delete='true'),\u9700\u8981 Doris \u8868\u5f00\u542f\u6279\u91cf\u5220\u9664\u529f\u80fd\nCREATE TABLE doris_sink (\nid INT,\nname STRING\n) \nWITH (\n  'connector' = 'doris',\n  'fenodes' = '127.0.0.1:8030',\n  'table.identifier' = 'database.table',\n  'username' = 'root',\n  'password' = '',\n  'sink.properties.format' = 'json',\n  'sink.properties.read_json_by_line' = 'true',\n  'sink.enable-delete' = 'true',\n  'sink.label-prefix' = 'doris_label'\n);\n\ninsert into doris_sink select id,name from cdc_mysql_source;\n")),(0,r.kt)("h2",{id:"java\u793a\u4f8b"},"Java\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"samples/doris-demo/fink-demo/")," \u4e0b\u63d0\u4f9b\u4e86 Java \u7248\u672c\u7684\u793a\u4f8b\uff0c\u53ef\u4f9b\u53c2\u8003\uff0c\u67e5\u770b\u70b9\u51fb",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/samples/doris-demo/flink-demo"},"\u8fd9\u91cc")),(0,r.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u4f7f\u7528 Flink Doris Connector\u6700\u9002\u5408\u7684\u573a\u666f\u5c31\u662f\u5b9e\u65f6/\u6279\u6b21\u540c\u6b65\u6e90\u6570\u636e\uff08Mysql\uff0cOracle\uff0cPostgreSQL\u7b49\uff09\u5230Doris\uff0c\u4f7f\u7528Flink\u5bf9Doris\u4e2d\u7684\u6570\u636e\u548c\u5176\u4ed6\u6570\u636e\u6e90\u8fdb\u884c\u8054\u5408\u5206\u6790\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528Flink Doris Connector\u3002"),(0,r.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Flink Doris Connector\u4e3b\u8981\u662f\u4f9d\u8d56Checkpoint\u8fdb\u884c\u6d41\u5f0f\u5199\u5165\uff0c\u6240\u4ee5Checkpoint\u7684\u95f4\u9694\u5373\u4e3a\u6570\u636e\u7684\u53ef\u89c1\u5ef6\u8fdf\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u4fdd\u8bc1Flink\u7684Exactly Once\u8bed\u4e49\uff0cFlink Doris Connector \u9ed8\u8ba4\u5f00\u542f\u4e24\u9636\u6bb5\u63d0\u4ea4\uff0cDoris\u57281.1\u7248\u672c\u540e\u9ed8\u8ba4\u5f00\u542f\u4e24\u9636\u6bb5\u63d0\u4ea4\u30021.0\u53ef\u901a\u8fc7\u4fee\u6539BE\u53c2\u6570\u5f00\u542f\uff0c\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"two_phase_commit"),"\u3002")),(0,r.kt)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Bitmap\u7c7b\u578b\u5199\u5165"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE bitmap_sink (\ndt int,\npage string,\nuser_id int \n)\nWITH (\n  'connector' = 'doris',\n  'fenodes' = '127.0.0.1:8030',\n  'table.identifier' = 'test.bitmap_test',\n  'username' = 'root',\n  'password' = '',\n  'sink.label-prefix' = 'doris_label',\n  'sink.properties.columns' = 'dt,page,user_id,user_id=to_bitmap(user_id)'\n)\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"errCode = 2, detailMessage = Label ","[label_0_1]"," has already been used, relate to txn ","[19650]"))),(0,r.kt)("p",null,"Exactly-Once\u573a\u666f\u4e0b\uff0cFlink Job\u91cd\u542f\u65f6\u5fc5\u987b\u4ece\u6700\u65b0\u7684Checkpoint/Savepoint\u542f\u52a8\uff0c\u5426\u5219\u4f1a\u62a5\u5982\u4e0a\u9519\u8bef\u3002\n\u4e0d\u8981\u6c42Exactly-Once\u65f6\uff0c\u4e5f\u53ef\u901a\u8fc7\u5173\u95ed2PC\u63d0\u4ea4\uff08sink.enable-2pc=false\uff09 \u6216\u66f4\u6362\u4e0d\u540c\u7684sink.label-prefix\u89e3\u51b3\u3002"))}u.isMDXComponent=!0}}]);