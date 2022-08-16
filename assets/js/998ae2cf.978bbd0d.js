"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[17743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,c=m["".concat(s,".").concat(u)]||m[u]||N[u]||l;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85276:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Star-Schema-Benchmark",language:"en"},o=void 0,i={unversionedId:"benchmark/ssb",id:"version-dev/benchmark/ssb",title:"Star-Schema-Benchmark",description:"\x3c!--",source:"@site/versioned_docs/version-dev/benchmark/ssb.md",sourceDirName:"benchmark",slug:"/benchmark/ssb",permalink:"/docs/dev/benchmark/ssb",draft:!1,tags:[],version:"dev",frontMatter:{title:"Star-Schema-Benchmark",language:"en"}},s={},d=[{value:"1. Hardware Environment",id:"1-hardware-environment",level:2},{value:"2. Software Environment",id:"2-software-environment",level:2},{value:"3. Test data volume",id:"3-test-data-volume",level:2},{value:"4. Test Results",id:"4-test-results",level:2},{value:"5. Environment Preparation",id:"5-environment-preparation",level:2},{value:"6. Data Preparation",id:"6-data-preparation",level:2},{value:"6.1 Download and install the SSB data generation tool.",id:"61-download-and-install-the-ssb-data-generation-tool",level:3},{value:"6.2 Generate SSB test set",id:"62-generate-ssb-test-set",level:3},{value:"6.3 Create table",id:"63-create-table",level:3},{value:"6.3.1 Prepare the <code>doris-cluster.conf</code> file.",id:"631-prepare-the-doris-clusterconf-file",level:4},{value:"6.3.2 Execute the following script to generate and create the SSB table:",id:"632-execute-the-following-script-to-generate-and-create-the-ssb-table",level:4},{value:"6.3.3 Execute the following script to generate and create an SSB flat table:",id:"633-execute-the-following-script-to-generate-and-create-an-ssb-flat-table",level:4},{value:"6.5 Check imported data",id:"65-check-imported-data",level:3},{value:"6.6 Query test",id:"66-query-test",level:3},{value:"6.6.1 Test SQL",id:"661-test-sql",level:4}],p={toc:d};function N(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"star-schema-benchmark"},"Star Schema Benchmark"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF"},"Star Schema Benchmark(SSB)")," is a performance test set in a lightweight data warehouse scenario. Based on ",(0,r.kt)("a",{parentName:"p",href:"http://www.tpc.org/tpch/"},"TPC-H"),", SSB provides a simplified version of the star schema dataset, which is mainly used to test the performance of multi-table association queries under the star schema. . In addition, the industry usually flattens SSB as a wide table model (hereinafter referred to as: SSB flat) to test the performance of the query engine, refer to ","[Clickhouse]","(",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/getting-started"},"https://clickhouse.com/docs/zh/getting-started")," /example-datasets/star-schema)."),(0,r.kt)("p",null,"This document mainly introduces the performance of Doris on the SSB test set."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note 1: The standard test set including SSB is usually far from the actual business scenario, and some tests will perform parameter tuning for the test set. Therefore, the test results of the standard test set can only reflect the performance of the database in specific scenarios. Users are advised to conduct further testing with actual business data."),(0,r.kt)("p",{parentName:"blockquote"},"Note 2: The operations involved in this document are all performed in the Ubuntu Server 20.04 environment, and CentOS 7 can also be tested.")),(0,r.kt)("p",null,"On 13 queries on the SSB standard test dataset, we tested the upcoming Doris 1.1 version and Doris 0.15.0 RC04 version peer-to-peer, and the overall performance improved by 2-3 times."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ssb_v11_v015_compare",src:a(7688).Z,width:"1464",height:"634"})),(0,r.kt)("h2",{id:"1-hardware-environment"},"1. Hardware Environment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number of machines"),(0,r.kt)("th",{parentName:"tr",align:null},"4 Tencent Cloud hosts (1 FE, 3 BE)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"AMD EPYC\u2122 Milan (2.55GHz/3.5GHz) 16 cores")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memory"),(0,r.kt)("td",{parentName:"tr",align:null},"64G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Bandwidth"),(0,r.kt)("td",{parentName:"tr",align:null},"7Gbps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disk"),(0,r.kt)("td",{parentName:"tr",align:null},"High-performance cloud disk")))),(0,r.kt)("h2",{id:"2-software-environment"},"2. Software Environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Doris deploys 3BE 1FE;"),(0,r.kt)("li",{parentName:"ul"},"Kernel version: Linux version 5.4.0-96-generic (buildd@lgw01-amd64-051)"),(0,r.kt)("li",{parentName:"ul"},"OS version: Ubuntu Server 20.04 LTS 64 bit"),(0,r.kt)("li",{parentName:"ul"},"Doris software version: Apache Doris 1.1, Apache Doris 0.15.0 RC04"),(0,r.kt)("li",{parentName:"ul"},'JDK: openjdk version "11.0.14" 2022-01-18')),(0,r.kt)("h2",{id:"3-test-data-volume"},"3. Test data volume"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"SSB table name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"number of rows"),(0,r.kt)("th",{parentName:"tr",align:"left"},"remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lineorder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"600,037,902"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Commodity order list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"customer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3,000,000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Customer Information Sheet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"part"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1,400,000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Parts Information Sheet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"supplier"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200,000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Supplier Information Sheet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2,556"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Date table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lineorder_flat"),(0,r.kt)("td",{parentName:"tr",align:"left"},"600,037,902"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wide table after data flattening")))),(0,r.kt)("h2",{id:"4-test-results"},"4. Test Results"),(0,r.kt)("p",null,"Here we use the upcoming Doris-1.1 version and Doris-0.15.0 RC04 version for comparative testing. The test results are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Query"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris-1.1(ms)"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris-0.15.0 RC04(ms)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"90"),(0,r.kt)("td",{parentName:"tr",align:null},"250")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q1.3"),(0,r.kt)("td",{parentName:"tr",align:null},"70"),(0,r.kt)("td",{parentName:"tr",align:null},"120")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q2.1"),(0,r.kt)("td",{parentName:"tr",align:null},"360"),(0,r.kt)("td",{parentName:"tr",align:null},"900")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q2.2"),(0,r.kt)("td",{parentName:"tr",align:null},"340"),(0,r.kt)("td",{parentName:"tr",align:null},"1020")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q2.3"),(0,r.kt)("td",{parentName:"tr",align:null},"260"),(0,r.kt)("td",{parentName:"tr",align:null},"770")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q3.1"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"1710")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"290"),(0,r.kt)("td",{parentName:"tr",align:null},"670")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q3.3"),(0,r.kt)("td",{parentName:"tr",align:null},"240"),(0,r.kt)("td",{parentName:"tr",align:null},"550")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q3.4"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q4.1"),(0,r.kt)("td",{parentName:"tr",align:null},"480"),(0,r.kt)("td",{parentName:"tr",align:null},"1250")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q4.2"),(0,r.kt)("td",{parentName:"tr",align:null},"240"),(0,r.kt)("td",{parentName:"tr",align:null},"400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q4.3"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"330")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interpretation of results")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data set corresponding to the test results is scale 100, about 600 million."),(0,r.kt)("li",{parentName:"ul"},"The test environment is configured to be commonly used by users, including 4 cloud servers, 16-core 64G SSD, and 1 FE and 3 BE deployment."),(0,r.kt)("li",{parentName:"ul"},"Use common user configuration tests to reduce user selection and evaluation costs, but will not consume so many hardware resources during the entire test process."),(0,r.kt)("li",{parentName:"ul"},"The test results are averaged over 3 executions. And the data has been fully compacted (if the data is tested immediately after the data is imported, the query delay may be higher than the test result, and the speed of compaction is being continuously optimized and will be significantly reduced in the future).")),(0,r.kt)("h2",{id:"5-environment-preparation"},"5. Environment Preparation"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/install/install-deploy"},"official document")," to install and deploy Doris to obtain a normal running Doris cluster (at least 1 FE 1 BE, 1 FE 3 BE is recommended)."),(0,r.kt)("p",null,"You can modify BE's configuration file be.conf to add the following configuration items and restart BE for better query performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"enable_storage_vectorization=true\nenable_low_cardinality_optimize=true\n")),(0,r.kt)("p",null,"The scripts covered in the following documents are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"tools/ssb-tools/")," in the Doris codebase."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Notice:")),(0,r.kt)("p",{parentName:"blockquote"},"The above two parameters do not have these two parameters in version 0.15.0 RC04 and do not need to be configured.")),(0,r.kt)("h2",{id:"6-data-preparation"},"6. Data Preparation"),(0,r.kt)("h3",{id:"61-download-and-install-the-ssb-data-generation-tool"},"6.1 Download and install the SSB data generation tool."),(0,r.kt)("p",null,"Execute the following script to download and compile the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/electrum/ssb-dbgen.git"},"ssb-dbgen")," tool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh build-ssb-dbgen.sh\n")),(0,r.kt)("p",null,"After successful installation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"dbgen")," binary will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssb-dbgen/")," directory."),(0,r.kt)("h3",{id:"62-generate-ssb-test-set"},"6.2 Generate SSB test set"),(0,r.kt)("p",null,"Execute the following script to generate the SSB dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh gen-ssb-data.sh -s 100 -c 100\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note 1: See script help with ",(0,r.kt)("inlineCode",{parentName:"p"},"sh gen-ssb-data.sh -h"),"."),(0,r.kt)("p",{parentName:"blockquote"},"Note 2: The data will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssb-data/")," directory with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},".tbl"),". The total file size is about 60GB. The generation time may vary from a few minutes to an hour."),(0,r.kt)("p",{parentName:"blockquote"},"Note 3: ",(0,r.kt)("inlineCode",{parentName:"p"},"-s 100")," indicates that the test set size factor is 100, ",(0,r.kt)("inlineCode",{parentName:"p"},"-c 100")," indicates that 100 concurrent threads generate data for the lineorder table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," parameter also determines the number of files in the final lineorder table. The larger the parameter, the larger the number of files and the smaller each file.")),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"-s 100")," parameter, the resulting dataset size is:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Table"),(0,r.kt)("th",{parentName:"tr",align:null},"Rows"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"File Number"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineorder"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u4ebf\uff08600037902\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"60GB"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer"),(0,r.kt)("td",{parentName:"tr",align:null},"300\u4e07\uff083000000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"277M"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"part"),(0,r.kt)("td",{parentName:"tr",align:null},"140\u4e07\uff081400000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"116M"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supplier"),(0,r.kt)("td",{parentName:"tr",align:null},"20\u4e07\uff08200000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"17M"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dates"),(0,r.kt)("td",{parentName:"tr",align:null},"2556"),(0,r.kt)("td",{parentName:"tr",align:null},"228K"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("h3",{id:"63-create-table"},"6.3 Create table"),(0,r.kt)("h4",{id:"631-prepare-the-doris-clusterconf-file"},"6.3.1 Prepare the ",(0,r.kt)("inlineCode",{parentName:"h4"},"doris-cluster.conf")," file."),(0,r.kt)("p",null,"Before calling the import script, you need to write the FE's ip port and other information in the ",(0,r.kt)("inlineCode",{parentName:"p"},"doris-cluster.conf")," file."),(0,r.kt)("p",null,"File location and ",(0,r.kt)("inlineCode",{parentName:"p"},"load-ssb-dimension-data.sh")," level."),(0,r.kt)("p",null,"The contents of the file include FE's ip, HTTP port, user name, password and the DB name of the data to be imported:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export FE_HOST="xxx"\nexport FE_HTTP_PORT="8030"\nexport FE_QUERY_PORT="9030"\nexport USER="root"\nexport PASSWORD=\'xxx\'\nexport DB="ssb"\n')),(0,r.kt)("h4",{id:"632-execute-the-following-script-to-generate-and-create-the-ssb-table"},"6.3.2 Execute the following script to generate and create the SSB table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh create-ssb-tables.sh\n")),(0,r.kt)("p",null,"Or copy the build table in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/ddl/create-ssb-tables.sql"},"create-ssb-tables.sql")," Statement, executed in Doris."),(0,r.kt)("h4",{id:"633-execute-the-following-script-to-generate-and-create-an-ssb-flat-table"},"6.3.3 Execute the following script to generate and create an SSB flat table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh create-ssb-flat-table.sh\n")),(0,r.kt)("p",null,"Or copy ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/ddl/create-ssb-flat-table.sql"},"create-ssb-flat-table.sql")," The table building statement in , executed in Doris."),(0,r.kt)("p",null,"Below is the ",(0,r.kt)("inlineCode",{parentName:"p"},"lineorder_flat"),' table building statement. The "lineorder_flat" table is created in the above ',(0,r.kt)("inlineCode",{parentName:"p"},"create-ssb-flat-table.sh")," script with the default number of buckets (48 buckets). You can delete this table and adjust the number of buckets according to your cluster size node configuration, so as to obtain a better test effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `lineorder_flat` (\n  `LO_ORDERDATE` date NOT NULL COMMENT "",\n  `LO_ORDERKEY` int(11) NOT NULL COMMENT "",\n  `LO_LINENUMBER` tinyint(4) NOT NULL COMMENT "",\n  `LO_CUSTKEY` int(11) NOT NULL COMMENT "",\n  `LO_PARTKEY` int(11) NOT NULL COMMENT "",\n  `LO_SUPPKEY` int(11) NOT NULL COMMENT "",\n  `LO_ORDERPRIORITY` varchar(100) NOT NULL COMMENT "",\n  `LO_SHIPPRIORITY` tinyint(4) NOT NULL COMMENT "",\n  `LO_QUANTITY` tinyint(4) NOT NULL COMMENT "",\n  `LO_EXTENDEDPRICE` int(11) NOT NULL COMMENT "",\n  `LO_ORDTOTALPRICE` int(11) NOT NULL COMMENT "",\n  `LO_DISCOUNT` tinyint(4) NOT NULL COMMENT "",\n  `LO_REVENUE` int(11) NOT NULL COMMENT "",\n  `LO_SUPPLYCOST` int(11) NOT NULL COMMENT "",\n  `LO_TAX` tinyint(4) NOT NULL COMMENT "",\n  `LO_COMMITDATE` date NOT NULL COMMENT "",\n  `LO_SHIPMODE` varchar(100) NOT NULL COMMENT "",\n  `C_NAME` varchar(100) NOT NULL COMMENT "",\n  `C_ADDRESS` varchar(100) NOT NULL COMMENT "",\n  `C_CITY` varchar(100) NOT NULL COMMENT "",\n  `C_NATION` varchar(100) NOT NULL COMMENT "",\n  `C_REGION` varchar(100) NOT NULL COMMENT "",\n  `C_PHONE` varchar(100) NOT NULL COMMENT "",\n  `C_MKTSEGMENT` varchar(100) NOT NULL COMMENT "",\n  `S_NAME` varchar(100) NOT NULL COMMENT "",\n  `S_ADDRESS` varchar(100) NOT NULL COMMENT "",\n  `S_CITY` varchar(100) NOT NULL COMMENT "",\n  `S_NATION` varchar(100) NOT NULL COMMENT "",\n  `S_REGION` varchar(100) NOT NULL COMMENT "",\n  `S_PHONE` varchar(100) NOT NULL COMMENT "",\n  `P_NAME` varchar(100) NOT NULL COMMENT "",\n  `P_MFGR` varchar(100) NOT NULL COMMENT "",\n  `P_CATEGORY` varchar(100) NOT NULL COMMENT "",\n  `P_BRAND` varchar(100) NOT NULL COMMENT "",\n  `P_COLOR` varchar(100) NOT NULL COMMENT "",\n  `P_TYPE` varchar(100) NOT NULL COMMENT "",\n  `P_SIZE` tinyint(4) NOT NULL COMMENT "",\n  `P_CONTAINER` varchar(100) NOT NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`LO_ORDERDATE`, `LO_ORDERKEY`)\nCOMMENT "OLAP"\nPARTITION BY RANGE(`LO_ORDERDATE`)\n(PARTITION p1 VALUES [(\'0000-01-01\'), (\'1993-01-01\')),\nPARTITION p2 VALUES [(\'1993-01-01\'), (\'1994-01-01\')),\nPARTITION p3 VALUES [(\'1994-01-01\'), (\'1995-01-01\')),\nPARTITION p4 VALUES [(\'1995-01-01\'), (\'1996-01-01\')),\nPARTITION p5 VALUES [(\'1996-01-01\'), (\'1997-01-01\')),\nPARTITION p6 VALUES [(\'1997-01-01\'), (\'1998-01-01\')),\nPARTITION p7 VALUES [(\'1998-01-01\'), (\'1999-01-01\')))\nDISTRIBUTED BY HASH(`LO_ORDERKEY`) BUCKETS 48\nPROPERTIES (\n"replication_num" = "1",\n"colocate_with" = "groupxx1",\n"in_memory" = "false",\n"storage_format" = "DEFAULT"\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"64-import-data"},"6.4 Import data"),(0,r.kt)("h4",{parentName:"blockquote",id:"641-import-4-dimension-table-data"},"6.4.1 Import 4 dimension table data"),(0,r.kt)("p",{parentName:"blockquote"},"Because the data volume of these four dimension tables (customer, part, supplier and date) is small, the import is relatively simple. We use the following command to import the data of these four tables first:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh load-ssb-dimension-data.sh\n")),(0,r.kt)("h4",{parentName:"blockquote",id:"642-import-fact-table-lineorder"},"6.4.2 Import fact table lineorder."),(0,r.kt)("p",{parentName:"blockquote"},"Import the lineorder table data by the following command"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh load-ssb-fact-data.sh -c 5\n")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"-c 5")," means start 5 concurrent thread imports (default is 3). In the case of a single BE node, the import time of the lineorder data generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"sh gen-ssb-data.sh -s 100 -c 100")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"sh load-ssb-fact-data.sh -c 3")," is about 10min. Memory overhead is about 5-6GB. If you start more threads, you can speed up the import, but it will add additional memory overhead."),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Note: For faster import speed, you can restart BE after adding ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_thread_num_per_store=5")," in be.conf. This configuration indicates the number of disk write threads for each data directory, and the default is 2. Larger data can improve write data throughput, but may increase IO Util. (Reference value: 1 mechanical disk, when the default is 2, the IO Util during the import process is about 12%, and when it is set to 5, the IO Util is about 26%. If it is an SSD disk, it is almost 0) .")),(0,r.kt)("h4",{parentName:"blockquote",id:"643-import-flat-table"},"6.4.3 Import flat table"),(0,r.kt)("p",{parentName:"blockquote"},"Import the lineorder_flat table data with the following command:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh load-ssb-flat-data.sh\n")),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Note: Flat table data is imported in the way of 'INSERT INTO ... SELECT ... '."))),(0,r.kt)("h3",{id:"65-check-imported-data"},"6.5 Check imported data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) from part;\nselect count(*) from customer;\nselect count(*) from supplier;\nselect count(*) from dates;\nselect count(*) from lineorder;\nselect count(*) from lineorder_flat;\n")),(0,r.kt)("p",null,"The amount of data should be the same as the number of rows that generate the data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Table"),(0,r.kt)("th",{parentName:"tr",align:null},"Rows"),(0,r.kt)("th",{parentName:"tr",align:null},"Origin Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Compacted Size(1 Replica)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineorder_flat"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u4ebf\uff08600037902\uff09"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"59.709 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineorder"),(0,r.kt)("td",{parentName:"tr",align:null},"6\u4ebf\uff08600037902\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"60 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"14.514 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer"),(0,r.kt)("td",{parentName:"tr",align:null},"300\u4e07\uff083000000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"277 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"138.247 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"part"),(0,r.kt)("td",{parentName:"tr",align:null},"140\u4e07\uff081400000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"116 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"12.759 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supplier"),(0,r.kt)("td",{parentName:"tr",align:null},"20\u4e07\uff08200000\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"17 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"9.143 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dates"),(0,r.kt)("td",{parentName:"tr",align:null},"2556"),(0,r.kt)("td",{parentName:"tr",align:null},"228 KB"),(0,r.kt)("td",{parentName:"tr",align:null},"34.276 KB")))),(0,r.kt)("h3",{id:"66-query-test"},"6.6 Query test"),(0,r.kt)("h4",{id:"661-test-sql"},"6.6.1 Test SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--Q1.1\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE  LO_ORDERDATE >= 19930101  AND LO_ORDERDATE <= 19931231 AND LO_DISCOUNT BETWEEN 1 AND 3  AND LO_QUANTITY < 25;\n--Q1.2\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE LO_ORDERDATE >= 19940101 AND LO_ORDERDATE <= 19940131  AND LO_DISCOUNT BETWEEN 4 AND 6 AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q1.3\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE  weekofyear(LO_ORDERDATE) = 6 AND LO_ORDERDATE >= 19940101  AND LO_ORDERDATE <= 19941231 AND LO_DISCOUNT BETWEEN 5 AND 7  AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q2.1\nSELECT SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR, P_BRAND\nFROM lineorder_flat WHERE P_CATEGORY = 'MFGR#12' AND S_REGION = 'AMERICA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.2\nSELECT  SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR, P_BRAND\nFROM lineorder_flat\nWHERE P_BRAND >= 'MFGR#2221' AND P_BRAND <= 'MFGR#2228'  AND S_REGION = 'ASIA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.3\nSELECT SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR, P_BRAND\nFROM lineorder_flat\nWHERE P_BRAND = 'MFGR#2239' AND S_REGION = 'EUROPE'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q3.1\nSELECT C_NATION, S_NATION, (LO_ORDERDATE DIV 10000) AS YEAR, SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_REGION = 'ASIA' AND S_REGION = 'ASIA' AND LO_ORDERDATE >= 19920101  AND LO_ORDERDATE <= 19971231\nGROUP BY C_NATION, S_NATION, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.2\nSELECT C_CITY, S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR, SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_NATION = 'UNITED STATES' AND S_NATION = 'UNITED STATES' AND LO_ORDERDATE >= 19920101 AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.3\nSELECT C_CITY, S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR, SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_CITY IN ('UNITED KI1', 'UNITED KI5') AND S_CITY IN ('UNITED KI1', 'UNITED KI5') AND LO_ORDERDATE >= 19920101 AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.4\nSELECT C_CITY, S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR, SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_CITY IN ('UNITED KI1', 'UNITED KI5') AND S_CITY IN ('UNITED KI1', 'UNITED KI5') AND LO_ORDERDATE >= 19971201  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q4.1\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR, C_NATION, SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE C_REGION = 'AMERICA' AND S_REGION = 'AMERICA' AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, C_NATION\nORDER BY YEAR ASC, C_NATION ASC;\n\n--Q4.2\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,S_NATION, P_CATEGORY, SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE C_REGION = 'AMERICA' AND S_REGION = 'AMERICA' AND LO_ORDERDATE >= 19970101 AND LO_ORDERDATE <= 19981231 AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, S_NATION, P_CATEGORY\nORDER BY YEAR ASC, S_NATION ASC, P_CATEGORY ASC;\n\n--Q4.3\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR, S_CITY, P_BRAND, SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE S_NATION = 'UNITED STATES' AND LO_ORDERDATE >= 19970101 AND LO_ORDERDATE <= 19981231 AND P_CATEGORY = 'MFGR#14'\nGROUP BY YEAR, S_CITY, P_BRAND\nORDER BY YEAR ASC, S_CITY ASC, P_BRAND ASC;\n")))}N.isMDXComponent=!0},7688:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ssb_v11_v015_compare-ad777ee879456fadf2a37b2070fb4dda.png"}}]);