"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[99026],{60395:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(39960),r=t(95999),l=t(67294);function o(){return l.createElement("svg",{width:"1rem",height:"1rem",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("g",{clipPath:"url(#clip0_424_3506)"},l.createElement("path",{d:"M13.0662 7.23986C13.1278 7.17546 13.1628 7.08866 13.1628 6.99906C13.1628 6.90946 13.1278 6.82266 13.0662 6.75826M13.0662 6.75686L6.85865 0.274863C6.58565 -0.0107372 6.13205 0.00746314 5.86044 0.291663C5.58884 0.575863 5.58745 1.03506 5.85905 1.31926L11.291 6.99766L5.85905 12.6747C5.58605 12.9603 5.58885 13.4195 5.86045 13.7023C6.13065 13.9879 6.58565 14.0061 6.85725 13.7205L13.0648 7.23846L13.0648 6.75686L13.0662 6.75686Z",fill:"currentColor"}),l.createElement("path",{d:"M8.24886 7.24361C8.31046 7.17921 8.34406 7.09241 8.34406 7.00281C8.34406 6.91321 8.30906 6.82641 8.24886 6.76201M8.24886 6.76061L2.04126 0.278611C1.76826 -0.00698851 1.31466 0.011211 1.04306 0.295411C0.771462 0.579611 0.770062 1.03881 1.04166 1.32301L6.47366 7.00141L1.04166 12.6798C0.768663 12.9654 0.771463 13.4246 1.04306 13.7074C1.31466 13.9916 1.76966 14.0098 2.04126 13.7242L8.24886 7.24221L8.24886 6.76061V6.76061Z",fill:"currentColor"})),l.createElement("defs",null,l.createElement("clipPath",{id:"clip0_424_3506"},l.createElement("rect",{width:"14",height:"14",fill:"currentColor",transform:"translate(0 14) rotate(-90)"}))))}function i(e){const{link:a,text:t=l.createElement(r.Z,{id:"learnmore"},"Learn More")}=e;return l.createElement("div",{className:"more"},l.createElement(n.Z,{to:a},t,l.createElement(o,null)))}},41800:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(86010),r=t(67294);function l(e){const{align:a="center",title:t,footer:l,children:o}=e;return r.createElement("div",{className:(0,n.Z)("page-column",a,l&&"has-footer")},r.createElement("h1",{className:"page-column-title"},r.createElement("div",{className:"container"},t)),r.createElement("div",{className:"page-column-container"},r.createElement("div",{className:"container",style:e.style},o)),l&&r.createElement("div",{className:"page-column-footer"},l))}},99942:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w});var n=t(86010),r=t(13066),l=t(62443),o=t(39960),i=t(60395),c=t(41800),d=t(67294),s=t(95999),m=t(52263);const u="https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=",p="https://mirrors.tuna.tsinghua.edu.cn/apache/";let h,E,v;!function(e){e.Latest="1.1.1",e.Prev="1.1.0"}(h||(h={})),function(e){e.IntelAvx2="intel-avx2",e.IntelNoAvx2="intel-noavx2",e.ARM="arm"}(E||(E={})),function(e){e.JDK8="jdk8",e.JDK11="jdk11"}(v||(v={}));const k=[{label:"1.1.1 ( latest )",value:h.Latest},{label:"1.1.0",value:h.Prev}],g=[{label:"X64 ( avx2 )",value:E.IntelAvx2},{label:"X64 ( no avx2 )",value:E.IntelNoAvx2},{label:"ARM64",value:E.ARM}],b=[{label:"JDK 8",value:v.JDK8},{label:"JDK 11",value:v.JDK11}];function w(){const{siteConfig:e,i18n:{currentLocale:a,locales:t,localeConfigs:w}}=(0,m.Z)(),[f,x]=(0,d.useState)(h.Latest),[Z,y]=(0,d.useState)(E.IntelAvx2),[N,j]=(0,d.useState)(v.JDK8),[z,C]=(0,d.useState)(),D=function(e){const a="EN"===e.toLocaleUpperCase()?"https://dist.apache.org/repos/dist/release/":"https://mirrors.tuna.tsinghua.edu.cn/apache/";return[{version:"1.2.0",date:"2022-08-15",flink:"1.15",scala:"2.12, 2.11",doris:"1.0+",download:a+"doris/flink-connector/1.2.0/",github:"https://github.com/apache/doris-flink-connector"},{version:"1.1.0",date:"2022-07-11",flink:"1.14",scala:"2.12, 2.11",doris:"0.15+",download:a+"doris/flink-connector/1.1.0/",github:"https://github.com/apache/doris-flink-connector"},{version:"1.0.3",date:"2021-03-18",flink:"1.14, 1.13, 1.12, 1.11",scala:"2.12, 2.11",doris:"0.15+",download:a+"doris/flink-connector/1.0.3/",github:"https://github.com/apache/doris-flink-connector"}]}(a),I=function(e){const a="EN"===e.toLocaleUpperCase()?"https://dist.apache.org/repos/dist/release/":"https://mirrors.tuna.tsinghua.edu.cn/apache/";return[{version:"1.1.0",date:"2022-07-11",spark:"3.2, 3.1, 2.3",scala:"2.12, 2.11",doris:"0.15+",download:a+"doris/spark-connector/1.1.0/",github:"https://github.com/apache/doris-spark-connector"},{version:"1.0.1",date:"2021-03-18",spark:"3.1, 2.3",scala:"2.12, 2.11",doris:"0.15+",download:a+"doris/spark-connector/1.0.1/",github:"https://github.com/apache/doris-spark-connector"}]}(a),L=function(e){const a="EN"===e.toLocaleUpperCase()?"https://archive.apache.org/dist/":"https://mirrors.tuna.tsinghua.edu.cn/apache/";return[{version:"1.1.1 ( latest )",date:"2022-07-29",note:"/docs/releasenotes/release-1.1.1",download:a+"doris/1.1/1.1.1-rc03/"},{version:"1.1.0",date:"2022-07-14",note:"/docs/releasenotes/release-1.1.0",download:a+"doris/1.1/1.1.0-rc05/"},{version:"0.15.0",date:"2021-11-29",note:"https://github.com/apache/doris/issues/6806",download:a+"doris/0.15.0-incubating/"},{version:"0.14.0",date:"2021-05-26",note:"https://github.com/apache/doris/issues/5374",download:a+"doris/0.14.0-incubating/"},{version:"0.13.0",date:"2020-10-24",note:"https://github.com/apache/doris/issues/4370",download:a+"doris/0.13.0-incubating/"}]}(a),V=()=>{const e=f+"-"+Z+"-"+N,t=function(e){const a="EN"===e.toLocaleUpperCase()?u:p;return[{label:"apache-doris-1.1.1-bin-x64.tar.gz",id:"1.1.1-intel-avx2-jdk8",links:{source:a+"doris/1.1/1.1.1-rc03/apache-doris-1.1.1-bin-x86.tar.gz",signature:u+"doris/1.1/1.1.1-rc03/apache-doris-1.1.1-bin-x86.tar.gz.asc",sha512:u+"doris/1.1/1.1.1-rc03/apache-doris-1.1.1-bin-x86.tar.gz.sha512"}},{label:"apache-doris-1.1.1-bin-x64-noavx2.tar.gz",id:"1.1.1-intel-noavx2-jdk8",links:{source:a+"doris/1.1/1.1.1-rc03/apache-doris-1.1.1-bin-x86-noavx2.tar.gz",signature:u+"doris/1.1/1.1.1-rc03/apache-doris-1.1.1-bin-x86-noavx2.tar.gz.asc",sha512:u+"doris/1.1/1.1.1-rc03/apache-doris-1.1.1-bin-x86-noavx2.tar.gz.sha512"}},{label:"apache-doris-1.1.1-bin-arm64.tar.gz",id:"1.1.1-arm-jdk8",links:{source:a+"doris/1.1/1.1.1-rc03/apache-doris-1.1.1-bin-arm.tar.gz",signature:u+"doris/1.1/1.1.1-rc03/apache-doris-1.1.1-bin-arm.tar.gz.asc",sha512:u+"doris/1.1/1.1.1-rc03/apache-doris-1.1.1-bin-arm.tar.gz.sha512"}},{label:"apache-doris-1.1.0-bin-x64-jdk8.tar.gz",id:"1.1.0-intel-avx2-jdk8",links:{source:a+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-jdk8.tar.gz",signature:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-jdk8.tar.gz.asc",sha512:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-jdk8.tar.gz.sha512"}},{label:"apache-doris-1.1.0-bin-x64-jdk11.tar.gz",id:"1.1.0-intel-avx2-jdk11",links:{source:a+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-jdk11.tar.gz",signature:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-jdk11.tar.gz.asc",sha512:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-jdk11.tar.gz.sha512"}},{label:"apache-doris-1.1.0-bin-x64-noavx2-jdk8.tar.gz",id:"1.1.0-intel-noavx2-jdk8",links:{source:a+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-noavx2-jdk8.tar.gz",signature:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-noavx2-jdk8.tar.gz.asc",sha512:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-noavx2-jdk8.tar.gz.sha512"}},{label:"apache-doris-1.1.0-bin-x64-noavx2-jdk11.tar.gz",id:"1.1.0-intel-noavx2-jdk11",links:{source:a+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-noavx2-jdk11.tar.gz",signature:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-noavx2-jdk11.tar.gz.asc",sha512:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-x86-noavx2-jdk11.tar.gz.sha512"}},{label:"apache-doris-1.1.0-bin-arm64-jdk8.tar.gz",id:"1.1.0-arm-jdk8",links:{source:a+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-arm-jdk8.tar.gz",signature:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-arm-jdk8.tar.gz.asc",sha512:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-arm-jdk8.tar.gz.sha512"}},{label:"apache-doris-1.1.0-bin-arm64-jdk11.tar.gz",id:"1.1.0-arm-jdk11",links:{source:a+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-arm-jdk11.tar.gz",signature:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-arm-jdk11.tar.gz.asc",sha512:u+"doris/1.1/1.1.0-rc05/apache-doris-1.1.0-bin-arm-jdk11.tar.gz.sha512"}}]}(a).find((a=>a.id===e));C(t)};return(0,d.useEffect)((()=>{V()}),[f,Z,N]),(0,d.useEffect)((()=>{y(E.IntelAvx2),j(v.JDK8)}),[f]),d.createElement(l.Z,{title:(0,s.I)({id:"download.title",message:"Download"}),description:(0,s.I)({id:"homepage.banner.subTitle",message:"An easy-to-use, high-performance and unified analytical database"}),wrapperClassName:"download"},d.createElement("section",{className:"quick-download"},d.createElement(c.Z,{align:"left",title:d.createElement(s.Z,{id:"download.quick.download",description:"Quick Download"},"Quick Download")},d.createElement("div",{className:"download-box"},d.createElement("div",{className:"download-type"},d.createElement("label",null,d.createElement(s.Z,{id:"download.binary.version",description:"Binary Version"},"Binary Version")),d.createElement("div",{className:"tabs-radio"},k.map((e=>d.createElement("div",{className:(0,n.Z)("radio",{checked:f===e.value}),key:e.value,onClick:()=>{return a=e.value,void x(a);var a}},e.label))))),d.createElement("div",{className:"download-type"},d.createElement("label",null,d.createElement(s.Z,{id:"download.cpu.model",description:"CPU Model"},"CPU Model")),d.createElement("div",{className:"tabs-radio"},g.map((e=>d.createElement("div",{className:(0,n.Z)("radio",{checked:Z===e.value}),key:e.value,onClick:()=>{return a=e.value,void y(a);var a}},e.label))))),d.createElement("div",{className:"download-type"},d.createElement("label",null,d.createElement(s.Z,{id:"download.jdk.version",description:"JDK Version"},"JDK Version")),d.createElement("div",{className:"tabs-radio"},b.map((e=>d.createElement("div",{className:(0,n.Z)("radio",{checked:N===e.value,disabled:f===h.Latest&&e.value!==v.JDK8}),key:e.value,onClick:()=>{return a=e.value,void(f===h.Latest&&a!==v.JDK8||j(a));var a}},e.label))))),d.createElement("div",{className:"download-type"},d.createElement("label",null,d.createElement(s.Z,{id:"download.download.link",description:"Download"},"Download")),d.createElement("div",{className:"tabs-radio"},d.createElement("div",{className:"radio"},d.createElement("div",{className:"inner"},d.createElement(o.Z,{to:null==z?void 0:z.links.source},null==z?void 0:z.label),d.createElement("span",null," ( "),d.createElement(o.Z,{to:null==z?void 0:z.links.signature},"asc"),","," ",d.createElement(o.Z,{to:null==z?void 0:z.links.sha512},"sha512"),d.createElement("span",null," )"))))),d.createElement("div",{className:"intr"},d.createElement(s.Z,{id:"download.quick.download.intr.prefix"},"If the CPU does not support the avx2 instruction set, select the no avx2 version. You can check whether it is supported by"),d.createElement("code",null,"cat /proc/cpuinfo"),d.createElement(s.Z,{id:"download.quick.download.intr.suffix"},". The avx2 instruction will improve the computational efficiency of data structures such as bloom filter."))))),d.createElement("section",{className:"table-content"},d.createElement(c.Z,{align:"left",title:d.createElement(s.Z,{id:"download.release"},"All Releases"),footer:d.createElement(i.Z,{text:d.createElement(s.Z,{id:"download.release.more"},"More"),link:"https://archive.apache.org/dist/doris/"})},d.createElement("div",{className:"content"},d.createElement("table",null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,d.createElement(s.Z,{id:"download.all.release.version"},"Version")),d.createElement("th",null,d.createElement(s.Z,{id:"download.all.release.date"},"Release Date")),d.createElement("th",null,d.createElement(s.Z,{id:"download.all.release.download"},"Download")),d.createElement("th",null,d.createElement(s.Z,{id:"download.all.release.note"},"Release Note")))),d.createElement("tbody",null,L.map(((e,a)=>d.createElement("tr",{key:a},d.createElement("td",null,e.version),d.createElement("td",null,e.date),d.createElement("td",null,d.createElement(o.Z,{to:e.download},d.createElement(s.Z,{id:"download.source.binary"},"Source / Binary"))),d.createElement("td",null,d.createElement(o.Z,{to:e.note},"Release Note")))))))))),d.createElement("section",{className:"table-content"},d.createElement(c.Z,{align:"left",title:d.createElement(s.Z,{id:"download.flink.connector",description:"Flink Doris Connector"},"Flink Doris Connector")},d.createElement("div",{className:"content"},d.createElement("table",null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,d.createElement(s.Z,{id:"download.flink.connector.version"},"Version")),d.createElement("th",null,d.createElement(s.Z,{id:"download.flink.release.date"},"Release Date")),d.createElement("th",null,d.createElement(s.Z,{id:"download.flink.version"},"Flink Version")),d.createElement("th",null,d.createElement(s.Z,{id:"download.flink.scala.version"},"Scala Version")),d.createElement("th",null,d.createElement(s.Z,{id:"download.flink.doris.version"},"Doris Version")),d.createElement("th",null,d.createElement(s.Z,{id:"download.source"},"Source")))),d.createElement("tbody",null,D.map(((e,a)=>d.createElement("tr",{key:a},d.createElement("td",null,e.version),d.createElement("td",null,e.date),d.createElement("td",null,e.flink),d.createElement("td",null,e.scala),d.createElement("td",null,e.doris),d.createElement("td",null,d.createElement(o.Z,{to:e.download},d.createElement(s.Z,{id:"download"},"Download")),d.createElement(o.Z,{to:e.github},"GitHub")))))))))),d.createElement("section",{className:"maven"},d.createElement(c.Z,{align:"left",title:d.createElement(s.Z,{id:"download.maven",description:"Maven"},"Maven")},d.createElement(r.Z,{language:"xml",title:"",showLineNumbers:!0},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>flink-doris-connector-1.14_2.12</artifactId>\n  \x3c!--artifactId>flink-doris-connector-1.13_2.12</artifactId--\x3e\n  \x3c!--artifactId>flink-doris-connector-1.12_2.12</artifactId--\x3e\n  \x3c!--artifactId>flink-doris-connector-1.11_2.12</artifactId--\x3e\n  \x3c!--version>1.0.3</version--\x3e\n  <version>1.1.0</version>\n</dependency>"))),d.createElement("section",{className:"table-content"},d.createElement(c.Z,{align:"left",title:d.createElement(s.Z,{id:"download.spark.connector",description:"Spark Doris Connector"},"Spark Doris Connector")},d.createElement("div",{className:"content"},d.createElement("table",null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,d.createElement(s.Z,{id:"download.spark.connector.version"},"Version")),d.createElement("th",null,d.createElement(s.Z,{id:"download.spark.release.date"},"Release Date")),d.createElement("th",null,d.createElement(s.Z,{id:"download.spark.version"},"Spark Version")),d.createElement("th",null,d.createElement(s.Z,{id:"download.spark.scala.version"},"Scala Version")),d.createElement("th",null,d.createElement(s.Z,{id:"download.spark.doris.version"},"Doris Version")),d.createElement("th",null,d.createElement(s.Z,{id:"download.source"},"Source")))),d.createElement("tbody",null,I.map(((e,a)=>d.createElement("tr",{key:a},d.createElement("td",null,e.version),d.createElement("td",null,e.date),d.createElement("td",null,e.spark),d.createElement("td",null,e.scala),d.createElement("td",null,e.doris),d.createElement("td",null,d.createElement(o.Z,{to:e.download},d.createElement(s.Z,{id:"download"},"Download")),d.createElement(o.Z,{to:e.github},"GitHub")))))))))),d.createElement("section",{className:"maven"},d.createElement(c.Z,{align:"left",title:d.createElement(s.Z,{id:"download.maven",description:"Maven"},"Maven")},d.createElement(r.Z,{language:"xml",title:"",showLineNumbers:!0},"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>spark-doris-connector-3.2_2.12</artifactId>\n  \x3c!--artifactId>spark-doris-connector-3.1_2.12</artifactId--\x3e\n  \x3c!--artifactId>spark-doris-connector-2.3_2.11</artifactId--\x3e\n  \x3c!--version>1.0.1</version--\x3e\n  <version>1.1.0</version>\n</dependency>"))),d.createElement("section",{className:"verify"},d.createElement(c.Z,{align:"left",title:d.createElement(s.Z,{id:"download.verify",description:"Verify"},"Verify")},d.createElement(s.Z,{id:"download.verify.w1"},"To verify the downloaded files, please read"),d.createElement(o.Z,{to:"/community/release-and-verify/release-verify"},d.createElement(s.Z,{id:"download.verify.w2"}," Verify Apache Release ")),d.createElement(s.Z,{id:"download.verify.w3"}," and using these "),d.createElement(o.Z,{to:"https://downloads.apache.org/doris/KEYS"},d.createElement(s.Z,{id:"download.verify.w4"}," KEYS")),d.createElement(s.Z,{id:"download.verify.w5"},". After verification, please read"),d.createElement(o.Z,{to:"/docs/install/source-install/compilation"},d.createElement(s.Z,{id:"download.verify.w6"}," Compilation ")),d.createElement(s.Z,{id:"download.verify.w7"}," and "),d.createElement(o.Z,{to:"/docs/install/install-deploy"},d.createElement(s.Z,{id:"download.verify.w8"}," Installation and deployment ")),d.createElement(s.Z,{id:"download.verify.w9"}," to compile and install Doris."))))}}}]);