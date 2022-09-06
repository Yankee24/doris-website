"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[91966],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Introduction to Apache Doris",language:"en"},o=void 0,s={unversionedId:"summary/basic-summary",id:"version-dev/summary/basic-summary",title:"Introduction to Apache Doris",description:"\x3c!--",source:"@site/versioned_docs/version-dev/summary/basic-summary.md",sourceDirName:"summary",slug:"/summary/basic-summary",permalink:"/docs/dev/summary/basic-summary",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/summary/basic-summary.md",tags:[],version:"dev",frontMatter:{title:"Introduction to Apache Doris",language:"en"},sidebar:"docs",previous:{title:"Getting-Started",permalink:"/docs/dev/get-starting/"},next:{title:"Installation and deployment",permalink:"/docs/dev/install/install-deploy"}},l={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-apache-doris"},"Introduction to Apache Doris"),(0,r.kt)("p",null,"Apache Doris is a high-performance, real-time analytical database based on MPP architecture, known for its extreme speed and ease of use. It only requires a sub-second response time to return query results under massive data and can support not only high-concurrent point query scenarios but also high-throughput complex analysis scenarios. Based on this, Apache Doris can better meet the scenarios of report analysis, ad-hoc query, unified data warehouse, Data Lake Query Acceleration, etc. Users can build user behavior analysis, AB test platform, log retrieval analysis, user portrait analysis, order analysis, and other applications on top of this."),(0,r.kt)("p",null,"Apache Doris was first born as Palo project for Baidu's ad reporting business, officially open-sourced in 2017, donated by Baidu to the Apache Foundation for incubation in July 2018, and then incubated and operated by members of the incubator project management committee under the guidance of Apache mentors. Currently, the Apache Doris community has gathered more than 300 contributors from nearly 100 companies in different industries, and the number of active contributors is close to 100 per month. Apache Doris has graduated from Apache incubator successfully and become a Top-Level Project in June 2022."),(0,r.kt)("p",null,"Apache Doris now has a wide user base in China and around the world, and as of today, Apache Doris is used in production environments in over 700 companies worldwide. More than 80% of the top 50 Internet companies in China in terms of market capitalization or valuation have been using Apache Doris for a long time, including Baidu, Meituan, Xiaomi, Jingdong, Bytedance, Tencent, NetEase, Kwai, Weibo, and Ke Holdings. It is also widely used in some traditional industries such as finance, energy, manufacturing, and telecommunications."),(0,r.kt)("h1",{id:"usage-scenarios"},"Usage Scenarios"),(0,r.kt)("p",null,"As shown in the figure below, after various data integration and processing, the data sources are usually stored in the real-time data warehouse Doris and the offline data lake or data warehouse (in Apache Hive, Apache Iceberg or Apache Hudi).\n",(0,r.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sekvbs5ih5rb16wz6n9k.png",alt:"Image description"})),(0,r.kt)("p",null,"Apache Doris is widely used in the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reporting Analysis"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Real-time Dashboards"),(0,r.kt)("li",{parentName:"ul"},"Reports for in-house analysts and managers"),(0,r.kt)("li",{parentName:"ul"},"Highly concurrent user-oriented or customer-oriented report analysis: For example, in the scenarios of site analysis for website owners and advertising reports for advertisers, the concurrency usually requires thousands of QPS and the query latency requires sub-seconds response. The famous e-commerce company JD.com uses Doris in advertising reports, writing 10 billion rows of data per day, with tens of thousands of concurrent query QPS and 150ms query latency for the 99th percentile."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ad-Hoc Query. Analyst-oriented self-service analytics with irregular query patterns and high throughput requirements. XiaoMi has built a growth analytics platform (Growth Analytics, GA) based on Doris, using user behavior data for business growth analysis, with an average query latency of 10 seconds and a 95th percentile query latency of 30 seconds or less, and tens of thousands of SQL queries per day.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unified data warehouse construction. A platform to meet the needs of unified data warehouse construction and simplify the complicated data software stack. HaiDiLao's Doris-based unified data warehouse replaces the old architecture consisting of Apache Spark, Apache Hive, Apache Kudu, Apache HBase, and Apache Phoenix, and greatly simplifies the architecture.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Lake\xa0Query. By federating the data located in Apache Hive, Apache Iceberg, and Apache Hudi using external tables, the query performance is greatly improved while avoiding data copying."))),(0,r.kt)("h1",{id:"technical-overview"},"Technical Overview"),(0,r.kt)("p",null,"The overall architecture of Apache Doris is shown in the following figure. The Doris architecture is very simple, with only two types of processes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frontend\uff08FE\uff09: It is mainly responsible for user request access, query parsing and planning, management of metadata, and node management-related work."),(0,r.kt)("li",{parentName:"ul"},"Backend\uff08BE\uff09: It is mainly responsible for data storage and query plan execution.")),(0,r.kt)("p",null,"Both types of processes are horizontally scalable, and a single cluster can support up to hundreds of machines and tens of petabytes of storage capacity. And these two types of processes guarantee high availability of services and high reliability of data through consistency protocols. This highly integrated architecture design greatly reduces the operation and maintenance cost of a distributed system."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mnz20ae3s23vv3e9ltmi.png",alt:"Image description"})),(0,r.kt)("p",null,"Apache Doris adopts MySQL protocol, highly compatible with MySQL dialect, and supports standard SQL. Users can access Doris through various client tools and support seamless connection with BI tools."),(0,r.kt)("p",null,"In terms of the storage engine, Doris uses columnar storage to encode and compress and read data by column, enabling a very high compression ratio while reducing a large number of scans of non-relevant data, thus making more efficient use of IO and CPU resources.\nDoris also supports a relatively rich index structure to reduce data scans:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support sorted compound key index: Up to three columns can be specified to form a compound sort key. With this index, data can be effectively pruned to better support high concurrent reporting scenarios."),(0,r.kt)("li",{parentName:"ul"},"Z-order index \uff1aUsing Z-order indexing, you can efficiently run range queries on any combination of fields in your schema."),(0,r.kt)("li",{parentName:"ul"},"MIN/MAX indexing: Effective filtering of equivalence and range queries for numeric types"),(0,r.kt)("li",{parentName:"ul"},"Bloom Filter: very effective for equivalence filtering and pruning of high cardinality columns"),(0,r.kt)("li",{parentName:"ul"},"Invert Index: It enables the fast search of any field")),(0,r.kt)("p",null,"In terms of storage models, Doris supports a variety of storage models, with specific optimizations for different scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aggregate Key Model: Merge the value columns with the same keys, by aggregating in advance to significantly improve performance."),(0,r.kt)("li",{parentName:"ul"},"Unique Key model: The key is unique. Data with the same key will be overwritten to achieve row-level data updates."),(0,r.kt)("li",{parentName:"ul"},"Duplicate Key model: The detailed data model can satisfy the detailed storage of fact tables.")),(0,r.kt)("p",null,"Doris also supports strong consistent materialized views, where updates and selections of materialized views are made automatically within the system and do not require manual selection by the user, thus significantly reducing the cost of materialized view maintenance."),(0,r.kt)("p",null,"In terms of query engine, Doris adopts the MPP model, with parallel execution between and within nodes, and also supports distributed shuffle join for multiple large tables, which can better cope with complex queries."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vjlmumwyx728uymsgcw0.png",alt:"Image description"})),(0,r.kt)("p",null,"The Doris query engine is vectorized, and all memory structures can be laid out in a columnar format to achieve significant reductions in virtual function calls, improved Cache hit rates, and efficient use of SIMD instructions. Performance in wide table aggregation scenarios is 5\u201310 times higher than in non-vectorized engines.\n",(0,r.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ck2m3kbnodn28t28vphp.png",alt:"Image description"})),(0,r.kt)("p",null,"Apache\xa0Doris uses Adaptive Query Execution technology, which can dynamically adjust the execution plan based on runtime statistics, such as runtime filter technology to generate filters to push to the probe side at runtime and to automatically penetrate the filters to the probe side which drastically reduces the amount of data in the probe and speeds up join performance. Doris' runtime filter supports In/Min/Max/Bloom filter."),(0,r.kt)("p",null,"In terms of the optimizer, Doris uses a combination of CBO and RBO, with RBO supporting constant folding, subquery rewriting, predicate pushdown, etc., and CBO supporting Join Reorder. CBO is still under continuous optimization, mainly focusing on more accurate statistical information collection and derivation, more accurate cost model prediction, etc."))}d.isMDXComponent=!0}}]);