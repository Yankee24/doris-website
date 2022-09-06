"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[62045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Tablet Restore Tool",language:"en"},l=void 0,i={unversionedId:"admin-manual/maint-monitor/tablet-restore-tool",id:"version-dev/admin-manual/maint-monitor/tablet-restore-tool",title:"Tablet Restore Tool",description:"\x3c!--",source:"@site/versioned_docs/version-dev/admin-manual/maint-monitor/tablet-restore-tool.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/tablet-restore-tool",permalink:"/docs/dev/admin-manual/maint-monitor/tablet-restore-tool",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/admin-manual/maint-monitor/tablet-restore-tool.md",tags:[],version:"dev",frontMatter:{title:"Tablet Restore Tool",language:"en"},sidebar:"docs",previous:{title:"Tablet Local Debug",permalink:"/docs/dev/admin-manual/maint-monitor/tablet-local-debug"},next:{title:"Monitor Metrics",permalink:"/docs/dev/admin-manual/maint-monitor/monitor-metrics/metrics"}},s={},p=[{value:"Restore data from BE Recycle Bin",id:"restore-data-from-be-recycle-bin",level:2},{value:"Operation",id:"operation",level:3},{value:"single mode",id:"single-mode",level:4},{value:"batch mode",id:"batch-mode",level:4},{value:"Repair missing or damaged Tablet",id:"repair-missing-or-damaged-tablet",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tablet-restore-tool"},"Tablet Restore Tool"),(0,n.kt)("h2",{id:"restore-data-from-be-recycle-bin"},"Restore data from BE Recycle Bin"),(0,n.kt)("p",null,"During the user's use of Doris, some valid tablets (including metadata and data) may be deleted due to some misoperations or online bugs. In order to prevent data loss in these abnormal situations, Doris provides a recycle bin mechanism to protect user data. Tablet data deleted by users will not be deleted directly, but will be stored in the recycle bin for a period of time. After a period of time, there will be a regular cleaning mechanism to delete expired data. The data in the recycle bin includes: tablet data file (.dat), tablet index file (.idx) and tablet metadata file (.hdr). The data will be stored in a path in the following format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/root_path/trash/time_label/tablet_id/schema_hash/\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"root_path"),": a data root directory corresponding to the BE node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trash"),": The directory of the recycle bin."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"time_label"),": Time label, for the uniqueness of the data directory in the recycle bin, while recording the data time, use the time label as a subdirectory.")),(0,n.kt)("p",null,"When a user finds that online data has been deleted by mistake, he needs to recover the deleted tablet from the recycle bin. This tablet data recovery function is needed."),(0,n.kt)("p",null,"BE provides http interface and ",(0,n.kt)("inlineCode",{parentName:"p"},"restore_tablet_tool.sh")," script to achieve this function, and supports single tablet operation (single mode) and batch operation mode (batch mode)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In single mode, data recovery of a single tablet is supported."),(0,n.kt)("li",{parentName:"ul"},"In batch mode, support batch tablet data recovery.")),(0,n.kt)("h3",{id:"operation"},"Operation"),(0,n.kt)("h4",{id:"single-mode"},"single mode"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"http request method"),(0,n.kt)("p",{parentName:"li"},"BE provides an http interface for single tablet data recovery, the interface is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'curl -X POST "http://be_host:be_webserver_port/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n')),(0,n.kt)("p",{parentName:"li"},"The successful results are as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{"status": "Success", "msg": "OK"}\n')),(0,n.kt)("p",{parentName:"li"},"If it fails, the corresponding failure reason will be returned. One possible result is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{"status": "Failed", "msg": "create link path failed"}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Script mode"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"restore_tablet_tool.sh")," can be used to realize the function of single tablet data recovery."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n')))),(0,n.kt)("h4",{id:"batch-mode"},"batch mode"),(0,n.kt)("p",null,"The batch recovery mode is used to realize the function of recovering multiple tablet data."),(0,n.kt)("p",null,"When using, you need to put the restored tablet id and schema hash in a file in a comma-separated format in advance, one tablet per line."),(0,n.kt)("p",null,"The format is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"12345,11111\n12346,11111\n12347,11111\n")),(0,n.kt)("p",null,"Then perform the recovery with the following command (assuming the file name is: ",(0,n.kt)("inlineCode",{parentName:"p"},"tablets.txt"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n')),(0,n.kt)("h2",{id:"repair-missing-or-damaged-tablet"},"Repair missing or damaged Tablet"),(0,n.kt)("p",null,"In some very special circumstances, such as code bugs, or human misoperation, etc., all replicas of some tablets may be lost. In this case, the data has been substantially lost. However, in some scenarios, the business still hopes to ensure that the query will not report errors even if there is data loss, and reduce the perception of the user layer. At this point, we can use the blank Tablet to fill the missing replica to ensure that the query can be executed normally."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: This operation is only used to avoid the problem of error reporting due to the inability to find a queryable replica, and it is impossible to recover the data that has been substantially lost.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"View Master FE log ",(0,n.kt)("inlineCode",{parentName:"p"},"fe.log")),(0,n.kt)("p",{parentName:"li"},"If there is data loss, there will be a log similar to the following in the log:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"backend [10001] invalid situation. tablet[20000] has few replica[1], replica num setting is [3]\n")),(0,n.kt)("p",{parentName:"li"},"This log indicates that all replicas of tablet 20000 have been damaged or lost.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use blank replicas to fill in missing copies"),(0,n.kt)("p",{parentName:"li"},"After confirming that the data cannot be recovered, you can execute the following command to generate blank replicas."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "true");\n')),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note: You can first check whether the current version supports this parameter through the ",(0,n.kt)("inlineCode",{parentName:"li"},"ADMIN SHOW FRONTEND CONFIG;")," command."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A few minutes after the setup is complete, you should see the following log in the Master FE log ",(0,n.kt)("inlineCode",{parentName:"p"},"fe.log"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"tablet 20000 has only one replica 20001 on backend 10001 and it is lost. create an empty replica to recover it.\n")),(0,n.kt)("p",{parentName:"li"},"The log indicates that the system has created a blank tablet to fill in the missing replica.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Judge whether it has been repaired successfully through query."))))}c.isMDXComponent=!0}}]);