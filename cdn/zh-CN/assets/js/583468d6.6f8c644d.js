"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[55422],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=s(a),k=l,d=i["".concat(o,".").concat(k)]||i[k]||m[k]||n;return a?r.createElement(d,p(p({ref:t},u),{},{components:a})):r.createElement(d,p({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,p=new Array(n);p[0]=i;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,p[1]=c;for(var s=2;s<n;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}i.displayName="MDXCreateElement"},94536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const n={title:"SET-PROPERTY",language:"zh-CN"},p=void 0,c={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",id:"sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",title:"SET-PROPERTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",permalink:"/zh-CN/docs/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",draft:!1,tags:[],version:"current",frontMatter:{title:"SET-PROPERTY",language:"zh-CN"},sidebar:"docs",previous:{title:"SET-PASSWORD",permalink:"/zh-CN/docs/sql-manual/sql-reference/Account-Management-Statements/SET-PASSWORD"},next:{title:"LDAP",permalink:"/zh-CN/docs/sql-manual/sql-reference/Account-Management-Statements/LDAP"}},o={},s=[{value:"SET PROPERTY",id:"set-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"set-property"},"SET PROPERTY"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"SET PROPERTY"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null," \u8bbe\u7f6e\u7528\u6237\u7684\u5c5e\u6027\uff0c\u5305\u62ec\u5206\u914d\u7ed9\u7528\u6237\u7684\u8d44\u6e90\u3001\u5bfc\u5165cluster\u7b49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u8bbe\u7f6e\u7684\u7528\u6237\u5c5e\u6027\uff0c\u662f\u9488\u5bf9 user \u7684\uff0c\u800c\u4e0d\u662f user_identity\u3002\u5373\u5047\u8bbe\u901a\u8fc7 CREATE USER \u8bed\u53e5\u521b\u5efa\u4e86\u4e24\u4e2a\u7528\u6237 'jack'@'%' \u548c 'jack'@'192.%'\uff0c\u5219\u4f7f\u7528 SET PROPERTY \u8bed\u53e5\uff0c\u53ea\u80fd\u9488\u5bf9 jack \u8fd9\u4e2a\u7528\u6237\uff0c\u800c\u4e0d\u662f 'jack'@'%' \u6216 'jack'@'192.%'"),(0,l.kt)("p",null,"key:"),(0,l.kt)("p",null,"\u8d85\u7ea7\u7528\u6237\u6743\u9650:"),(0,l.kt)("p",null,"\u200b        max_user_connections: \u6700\u5927\u8fde\u63a5\u6570\u3002"),(0,l.kt)("p",null,"\u200b        max_query_instances: \u7528\u6237\u540c\u4e00\u65f6\u95f4\u70b9\u6267\u884c\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u7684instance\u4e2a\u6570\u3002"),(0,l.kt)("p",null,"\u200b        sql_block_rules: \u8bbe\u7f6e sql block rules\u3002\u8bbe\u7f6e\u540e\uff0c\u8be5\u7528\u6237\u53d1\u9001\u7684\u67e5\u8be2\u5982\u679c\u5339\u914d\u89c4\u5219\uff0c\u5219\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,l.kt)("p",null,"\u200b        cpu_resource_limit: \u9650\u5236\u67e5\u8be2\u7684cpu\u8d44\u6e90\u3002\u8be6\u89c1\u4f1a\u8bdd\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"cpu_resource_limit")," \u7684\u4ecb\u7ecd\u3002-1 \u8868\u793a\u672a\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,"\u200b        exec_mem_limit: \u9650\u5236\u67e5\u8be2\u7684\u5185\u5b58\u4f7f\u7528\u3002\u8be6\u89c1\u4f1a\u8bdd\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"exec_mem_limit")," \u7684\u4ecb\u7ecd\u3002-1 \u8868\u793a\u672a\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,"\u200b        load_mem_limit: \u9650\u5236\u5bfc\u5165\u7684\u5185\u5b58\u4f7f\u7528\u3002\u8be6\u89c1\u4f1a\u8bdd\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"load_mem_limit")," \u7684\u4ecb\u7ecd\u3002-1 \u8868\u793a\u672a\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,"\u200b        resource.cpu_share: cpu\u8d44\u6e90\u5206\u914d\u3002\uff08\u5df2\u5e9f\u5f03\uff09"),(0,l.kt)("p",null,"\u200b        load_cluster.{cluster_name}.priority: \u4e3a\u6307\u5b9a\u7684cluster\u5206\u914d\u4f18\u5148\u7ea7\uff0c\u53ef\u4ee5\u4e3a HIGH \u6216 NORMAL"),(0,l.kt)("p",null,"\u200b        resource_tags\uff1a\u6307\u5b9a\u7528\u6237\u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6ce8\uff1a`cpu_resource_limit`, `exec_mem_limit`, `load_mem_limit` \u4e09\u4e2a\u5c5e\u6027\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u4f1a\u8bdd\u53d8\u91cf\u4e2d\u503c\u3002\n")),(0,l.kt)("p",null,"\u666e\u901a\u7528\u6237\u6743\u9650\uff1a"),(0,l.kt)("p",null,"\u200b        quota.normal: normal\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u914d\u3002"),(0,l.kt)("p",null,"\u200b        quota.high: high\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u914d\u3002"),(0,l.kt)("p",null,"\u200b        quota.low: low\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u914d\u3002"),(0,l.kt)("p",null,"\u200b        load_cluster.{cluster_name}.hadoop_palo_path: palo\u4f7f\u7528\u7684hadoop\u76ee\u5f55\uff0c\u9700\u8981\u5b58\u653eetl\u7a0b\u5e8f\u53caetl\u751f\u6210\u7684\u4e2d\u95f4\u6570\u636e\u4f9bDoris\u5bfc\u5165\u3002\u5bfc\u5165\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u6e05\u7406\u4e2d\u95f4"),(0,l.kt)("p",null,"\u6570\u636e\uff0cetl\u7a0b\u5e8f\u81ea\u52a8\u4fdd\u7559\u4e0b\u6b21\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u200b        load_cluster.{cluster_name}.hadoop_configs: hadoop\u7684\u914d\u7f6e\uff0c\u5176\u4e2dfs.default.name\u3001mapred.job.tracker\u3001hadoop.job.ugi\u5fc5\u987b\u586b\u5199\u3002"),(0,l.kt)("p",null,"\u200b        load_cluster.{cluster_name}.hadoop_http_port: hadoop hdfs name node http\u7aef\u53e3\u3002\u5176\u4e2d hdfs \u9ed8\u8ba4\u4e3a8070\uff0cafs \u9ed8\u8ba4 8010\u3002"),(0,l.kt)("p",null,"\u200b        default_load_cluster: \u9ed8\u8ba4\u7684\u5bfc\u5165cluster\u3002"),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 jack \u6700\u5927\u8fde\u63a5\u6570\u4e3a1000"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 jack \u7684cpu_share\u4e3a1000"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource.cpu_share' = '1000';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539 jack \u7528\u6237\u7684normal\u7ec4\u7684\u6743\u91cd"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'quota.normal' = '400';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e3a\u7528\u6237 jack \u6dfb\u52a0\u5bfc\u5165cluster"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack'\n    'load_cluster.{cluster_name}.hadoop_palo_path' = '/user/doris/doris_path',\n    'load_cluster.{cluster_name}.hadoop_configs' = 'fs.default.name=hdfs://dpp.cluster.com:port;mapred.job.tracker=dpp.cluster.com:port;hadoop.job.ugi=user,password;mapred.job.queue.name=job_queue_name_in_hadoop;mapred.job.priority=HIGH;';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5220\u9664\u7528\u6237 jack \u4e0b\u7684\u5bfc\u5165cluster\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}' = '';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 jack \u9ed8\u8ba4\u7684\u5bfc\u5165cluster"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'default_load_cluster' = '{cluster_name}';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 jack \u7684\u96c6\u7fa4\u4f18\u5148\u7ea7\u4e3a HIGH"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}.priority' = 'HIGH';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237jack\u7684\u67e5\u8be2\u53ef\u7528instance\u4e2a\u6570\u4e3a3000"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237jack\u7684sql block rule"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237jack\u7684 cpu \u4f7f\u7528\u9650\u5236"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u9650\u5236\uff0c\u5355\u4f4d\u5b57\u8282"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u5bfc\u5165\u5185\u5b58\u4f7f\u7528\u9650\u5236\uff0c\u5355\u4f4d\u5b57\u8282"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'load_mem_limit' = '2147483648';\n")))),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SET, PROPERTY\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);