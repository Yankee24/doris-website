(window.webpackJsonp=window.webpackJsonp||[]).push([[1336],{1961:function(e,t,a){"use strict";a.r(t);var o=a(15),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-operation-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-operation-error"}},[e._v("#")]),e._v(" Data Operation Error")]),e._v(" "),a("p",[e._v("This document is mainly used to record common problems of data operation during the use of Doris. It will be updated from time to time.")]),e._v(" "),a("h3",{attrs:{id:"q1-use-stream-load-to-access-fe-s-public-network-address-to-import-data-but-is-redirected-to-the-intranet-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-use-stream-load-to-access-fe-s-public-network-address-to-import-data-but-is-redirected-to-the-intranet-ip"}},[e._v("#")]),e._v(" Q1. Use Stream Load to access FE's public network address to import data, but is redirected to the intranet IP?")]),e._v(" "),a("p",[e._v("When the connection target of stream load is the http port of FE, FE will only randomly select a BE node to perform the http 307 redirect operation, so the user's request is actually sent to a BE assigned by FE. The redirect returns the IP of the BE, that is, the intranet IP. So if you send the request through the public IP of FE, it is very likely that you cannot connect because it is redirected to the internal network address.")]),e._v(" "),a("p",[e._v("The usual way is to ensure that you can access the intranet IP address, or to assume a load balancer for all BE upper layers, and then directly send the stream load request to the load balancer, and the load balancer will transparently transmit the request to the BE node .")]),e._v(" "),a("h3",{attrs:{id:"q2-does-doris-support-changing-column-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-does-doris-support-changing-column-names"}},[e._v("#")]),e._v(" Q2. Does Doris support changing column names?")]),e._v(" "),a("p",[e._v("Modifying column names is not supported.")]),e._v(" "),a("p",[e._v("Doris supports modifying database name, table name, partition name, materialized view (Rollup) name, as well as column type, comment, default value, etc. But unfortunately, modifying column names is currently not supported.")]),e._v(" "),a("p",[e._v("For some historical reasons, the column names are currently written directly to the data file. When Doris queries, it also finds the corresponding column through the class name. Therefore, modifying the column name is not only a simple metadata modification, but also involves data rewriting, which is a very heavy operation.")]),e._v(" "),a("p",[e._v("We do not rule out some compatible means to support lightweight column name modification operations in the future.")]),e._v(" "),a("h3",{attrs:{id:"q3-does-the-table-of-the-unique-key-model-support-creating-a-materialized-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-does-the-table-of-the-unique-key-model-support-creating-a-materialized-view"}},[e._v("#")]),e._v(" Q3. Does the table of the Unique Key model support creating a materialized view?")]),e._v(" "),a("p",[e._v("not support.")]),e._v(" "),a("p",[e._v("The table of the Unique Key model is a business-friendly table. Because of its unique function of deduplication according to the primary key, it can easily synchronize business databases with frequently changed data. Therefore, many users will first consider using the Unique Key model when accessing data into Doris.")]),e._v(" "),a("p",[e._v('But unfortunately, the table of the Unique Key model cannot establish a materialized view. The reason is that the essence of the materialized view is to "pre-compute" the data through pre-computation, so that the calculated data is directly returned during the query to speed up the query. In the materialized view, the "pre-computed" data is usually some aggregated indicators, such as sum and count. At this time, if the data changes, such as udpate or delete, because the pre-computed data has lost detailed information, it cannot be updated synchronously. For example, a sum value of 5 may be 1+4 or 2+3. Because of the loss of detailed information, we cannot distinguish how this summation value is calculated, so we cannot meet the needs of updating.')]),e._v(" "),a("h3",{attrs:{id:"q4-tablet-writer-write-failed-tablet-id-27306172-txn-id-28573520-err-235-or-215-or-238"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-tablet-writer-write-failed-tablet-id-27306172-txn-id-28573520-err-235-or-215-or-238"}},[e._v("#")]),e._v(" Q4. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -215 or -238")]),e._v(" "),a("p",[e._v("This error usually occurs during data import operations. The error code of the new version is -235, and the error code of the old version may be -215. The meaning of this error is that the data version of the corresponding tablet exceeds the maximum limit (default 500, controlled by the BE parameter "),a("code",[e._v("max_tablet_version_num")]),e._v("), and subsequent writes will be rejected. For example, the error in the question means that the data version of the tablet 27306172 exceeds the limit.")]),e._v(" "),a("p",[e._v("This error is usually caused by the import frequency being too high, which is greater than the compaction speed of the backend data, causing versions to pile up and eventually exceed the limit. At this point, we can first pass the show tablet 27306172 statement, and then execute the show proc statement in the result to check the status of each copy of the tablet. The versionCount in the result represents the number of versions. If you find that a copy has too many versions, you need to reduce the import frequency or stop importing and observe whether the number of versions drops. If the number of versions does not decrease after the import is stopped, you need to go to the corresponding BE node to view the be.INFO log, search for the tablet id and compaction keyword, and check whether the compaction is running normally. For compaction tuning, you can refer to the ApacheDoris official account article: Doris Best Practices - Compaction Tuning (3)")]),e._v(" "),a("p",[e._v("The -238 error usually occurs when the same batch of imported data is too large, resulting in too many Segment files for a tablet (default is 200, controlled by the BE parameter "),a("code",[e._v("max_segment_num_per_rowset")]),e._v("). At this time, it is recommended to reduce the amount of data imported in one batch, or appropriately increase the BE configuration parameter value to solve the problem.")]),e._v(" "),a("h3",{attrs:{id:"q5-tablet-110309738-has-few-replicas-1-alive-backends-10003"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q5-tablet-110309738-has-few-replicas-1-alive-backends-10003"}},[e._v("#")]),e._v(" Q5. tablet 110309738 has few replicas: 1, alive backends: [10003]")]),e._v(" "),a("p",[e._v("This error can occur during a query or import operation. Usually means that the copy of the corresponding tablet has an exception.")]),e._v(" "),a("p",[e._v("At this point, you can first check whether the BE node is down by using the show backends command. For example, the isAlive field is false, or the LastStartTime is a recent time (indicating that it has been restarted recently). If the BE is down, you need to go to the node corresponding to the BE and check the be.out log. If BE is down for abnormal reasons, the exception stack is usually printed in be.out to help troubleshoot the problem. If there is no error stack in be.out. Then you can use the linux command dmesg -T to check whether the process is killed by the system because of OOM.")]),e._v(" "),a("p",[e._v("If no BE node is down, you need to pass the show tablet 110309738 statement, and then execute the show proc statement in the result to check the status of each tablet copy for further investigation.")]),e._v(" "),a("h3",{attrs:{id:"q6-disk-xxxxx-on-backend-xxx-exceed-limit-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q6-disk-xxxxx-on-backend-xxx-exceed-limit-usage"}},[e._v("#")]),e._v(" Q6. disk xxxxx on backend xxx exceed limit usage")]),e._v(" "),a("p",[e._v("Usually occurs in operations such as Import, Alter, etc. This error means that the usage of the corresponding disk corresponding to the BE exceeds the threshold (default 95%). In this case, you can first use the show backends command, where MaxDiskUsedPct shows the usage of the disk with the highest usage on the corresponding BE. If If it exceeds 95%, this error will be reported.")]),e._v(" "),a("p",[e._v("At this point, you need to go to the corresponding BE node to check the usage in the data directory. The trash directory and snapshot directory can be manually cleaned to free up space. If the data directory occupies a large space, you need to consider deleting some data to free up space. For details, please refer to "),a("RouterLink",{attrs:{to:"/docs/admin-manual/maint-monitor/disk-capacity.html"}},[e._v("Disk Space Management")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"q7-calling-stream-load-to-import-data-through-a-java-program-may-result-in-a-broken-pipe-error-when-a-batch-of-data-is-large"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q7-calling-stream-load-to-import-data-through-a-java-program-may-result-in-a-broken-pipe-error-when-a-batch-of-data-is-large"}},[e._v("#")]),e._v(" Q7. Calling stream load to import data through a Java program may result in a Broken Pipe error when a batch of data is large.")]),e._v(" "),a("p",[e._v("Apart from Broken Pipe, some other weird errors may occur.")]),e._v(" "),a("p",[e._v("This situation usually occurs after enabling httpv2. Because httpv2 is an http service implemented using spring boot, and uses tomcat as the default built-in container. However, there seems to be some problems with tomcat's handling of 307 forwarding, so the built-in container was modified to jetty later. In addition, the version of apache http client in the java program needs to use the version after 4.5.13. In the previous version, there were also some problems with the processing of forwarding.")]),e._v(" "),a("p",[e._v("So this problem can be solved in two ways:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Disable httpv2")]),e._v(" "),a("p",[e._v("Restart FE after adding enable_http_server_v2=false in fe.conf. However, the new version of the UI interface can no longer be used, and some new interfaces based on httpv2 can not be used. (Normal import queries are not affected).")])]),e._v(" "),a("li",[a("p",[e._v("Upgrade")]),e._v(" "),a("p",[e._v("Upgrading to Doris 0.15 and later has fixed this issue.")])])]),e._v(" "),a("h3",{attrs:{id:"q8-error-214-is-reported-when-importing-and-querying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q8-error-214-is-reported-when-importing-and-querying"}},[e._v("#")]),e._v(" Q8. Error -214 is reported when importing and querying")]),e._v(" "),a("p",[e._v("When performing operations such as import, query, etc., you may encounter the following errors:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("failed to initialize storage reader. tablet=63416.1050661139.aa4d304e7a7aff9c-f0fa7579928c85a0, res=-214, backend=192.168.100.10\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("A -214 error means that the data version for the corresponding tablet is missing. For example, the above error indicates that the data version of the copy of tablet 63416 on the BE of 192.168.100.10 is missing. (There may be other similar error codes, which can be checked and repaired in the following ways).")]),e._v(" "),a("p",[e._v("Typically, if your data has multiple copies, the system will automatically repair these problematic copies. You can troubleshoot with the following steps:")]),e._v(" "),a("p",[e._v("First, check the status of each copy of the corresponding tablet by executing the "),a("code",[e._v("show tablet 63416")]),e._v(" statement and executing the "),a("code",[e._v("show proc xxx")]),e._v(" statement in the result. Usually we need to care about the data in the "),a("code",[e._v("Version")]),e._v(" column.")]),e._v(" "),a("p",[e._v("Normally, the Version of multiple copies of a tablet should be the same. And it is the same as the VisibleVersion version of the corresponding partition.")]),e._v(" "),a("p",[e._v("You can view the corresponding partition version with "),a("code",[e._v("show partitions from tblx")]),e._v(" (the partition corresponding to the tablet can be obtained in the "),a("code",[e._v("show tablet")]),e._v(" statement.)")]),e._v(" "),a("p",[e._v("At the same time, you can also visit the URL in the CompactionStatus column in the "),a("code",[e._v("show proc")]),e._v(" statement (just open it in a browser) to view more specific version information to check which versions are missing.")]),e._v(" "),a("p",[e._v("If there is no automatic repair for a long time, you need to use the "),a("code",[e._v('show proc "/cluster_balance"')]),e._v(" statement to view the tablet repair and scheduling tasks currently being executed by the system. It may be because there are a large number of tablets waiting to be scheduled, resulting in a longer repair time. You can follow records in "),a("code",[e._v("pending_tablets")]),e._v(" and "),a("code",[e._v("running_tablets")]),e._v(".")]),e._v(" "),a("p",[e._v("Further, you can use the "),a("code",[e._v("admin repair")]),e._v(" statement to specify a table or partition to be repaired first. For details, please refer to "),a("code",[e._v("help admin repair")]),e._v(";")]),e._v(" "),a("p",[e._v("If it still can't be repaired, then in the case of multiple replicas, we use the "),a("code",[e._v("admin set replica status")]),e._v(" command to force the replica in question to go offline. For details, see the example of setting the replica status to bad in "),a("code",[e._v("help admin set replica status")]),e._v(". (After set to bad, the copy will no longer be accessed. And it will be automatically repaired later. But before operation, you should make sure that other copies are normal)")]),e._v(" "),a("h3",{attrs:{id:"q9-not-connected-to-192-168-100-1-8060-yet-server-id-384"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q9-not-connected-to-192-168-100-1-8060-yet-server-id-384"}},[e._v("#")]),e._v(" Q9. Not connected to 192.168.100.1:8060 yet, server_id=384")]),e._v(" "),a("p",[e._v("We may encounter this error when importing or querying. If you go to the corresponding BE log, you may also find similar errors.")]),e._v(" "),a("p",[e._v("This is an RPC error, and there are usually two possibilities: 1. The corresponding BE node is down. 2. rpc congestion or other errors.")]),e._v(" "),a("p",[e._v("If the BE node is down, you need to check the specific downtime reason. Only the problem of rpc congestion is discussed here.")]),e._v(" "),a("p",[e._v("One case is OVERCROWDED, which means that the rpc source has a large amount of unsent data that exceeds the threshold. BE has two parameters associated with it:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("brpc_socket_max_unwritten_bytes")]),e._v(": The default value is 1GB. If the unsent data exceeds this value, an error will be reported. This value can be modified appropriately to avoid OVERCROWDED errors. (But this cures the symptoms but not the root cause, and there is still congestion in essence).")]),e._v(" "),a("li",[a("code",[e._v("tablet_writer_ignore_eovercrowded")]),e._v(": Default is false. If set to true, Doris will ignore OVERCROWDED errors during import. This parameter is mainly to avoid import failure and improve the stability of import.")])]),e._v(" "),a("p",[e._v("The second is that the packet size of rpc exceeds max_body_size. This problem may occur if the query has a very large String type, or a bitmap type. It can be circumvented by modifying the following BE parameters:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("brpc_max_body_size：default 3GB.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);