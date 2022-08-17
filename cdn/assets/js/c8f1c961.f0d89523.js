"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[84990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||n;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={title:"Backup and Recovery",language:"en"},i=void 0,l={unversionedId:"administrator-guide/backup-restore",id:"version-0.15/administrator-guide/backup-restore",title:"Backup and Recovery",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/backup-restore.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/backup-restore",permalink:"/docs/0.15/administrator-guide/backup-restore",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Backup and Recovery",language:"en"},sidebar:"docs",previous:{title:"SQL Block Rule",permalink:"/docs/0.15/administrator-guide/block-rule/sql-block"},next:{title:"Broker",permalink:"/docs/0.15/administrator-guide/broker"}},s={},p=[{value:"Brief Principle Description",id:"brief-principle-description",level:2},{value:"Backup",id:"backup",level:3},{value:"Restore",id:"restore",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Backup",id:"backup-1",level:3},{value:"Data migration",id:"data-migration",level:3},{value:"Highlights",id:"highlights",level:2},{value:"Relevant orders",id:"relevant-orders",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backup-and-recovery"},"Backup and Recovery"),(0,o.kt)("p",null,"Doris supports the backup of current data in the form of files to remote storage systems via broker. The data can then be restored from the remote storage system to any Doris cluster by the restore command. With this feature, Doris can support regular snapshot backups of data. It can also be used to migrate data between different clusters."),(0,o.kt)("p",null,"This feature requires Doris version 0.8.2+"),(0,o.kt)("p",null,"Using this function, brokers corresponding to remote storage need to be deployed. Such as BOS, HDFS, etc. You can view the currently deployed broker through ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW BROKER;")),(0,o.kt)("h2",{id:"brief-principle-description"},"Brief Principle Description"),(0,o.kt)("h3",{id:"backup"},"Backup"),(0,o.kt)("p",null,"The backup operation is to upload the data of the specified table or partition directly to the remote warehouse in the form of files stored by Doris for storage. When a user submits a Backup request, the following actions will be done within the system:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Snapshot and snapshot upload"),(0,o.kt)("p",{parentName:"li"},"The snapshot phase takes a snapshot of the specified table or partition data file. Later, backups are all snapshots. After the snapshot, changes to tables, imports, and other operations no longer affect the results of the backup. Snapshots only produce a hard link to the current data file, which takes very little time. Once the snapshots are completed, they are uploaded one by one. Snapshot upload is done concurrently by each Backend.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Metadata preparation and upload"),(0,o.kt)("p",{parentName:"li"},"After the data file snapshot is uploaded, Frontend first writes the corresponding metadata to the local file, and then uploads the local metadata file to the remote warehouse through broker. Finish the final backup job."))),(0,o.kt)("h3",{id:"restore"},"Restore"),(0,o.kt)("p",null,"Recovery operations need to specify a backup that already exists in a remote repository, and then restore the backup content to the local cluster. When a user submits a Restore request, the following actions will be done within the system:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create corresponding metadata locally"),(0,o.kt)("p",{parentName:"li"},"This step starts by creating structures such as restoring the corresponding table partitions in the local cluster. When created, the table is visible, but not accessible.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Local snapshot"),(0,o.kt)("p",{parentName:"li"},"This step is to take a snapshot of the table created in the previous step. This is actually an empty snapshot (because the tables just created have no data), and its main purpose is to generate the corresponding snapshot directory on the Backend for receiving the snapshot files downloaded from the remote repository later.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download snapshots"),(0,o.kt)("p",{parentName:"li"},"The snapshot files in the remote warehouse are downloaded to the corresponding snapshot directory generated in the previous step. This step is done concurrently by each backend.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Effective snapshot"),(0,o.kt)("p",{parentName:"li"},"When the snapshot download is complete, we map each snapshot to the metadata of the current local table. These snapshots are then reloaded to take effect and complete the final recovery operation."))),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("h3",{id:"backup-1"},"Backup"),(0,o.kt)("p",null,"We currently support full backup at the minimum partition granularity (incremental backup may be supported in future versions). If data need to be backed up regularly, first of all, it is necessary to plan the partition and bucket allocation of tables reasonably, such as partitioning according to time. Then in the subsequent run process, periodic data backup is performed according to partition granularity."),(0,o.kt)("h3",{id:"data-migration"},"Data migration"),(0,o.kt)("p",null,"Users can first backup the data to the remote warehouse, and then restore the data to another cluster through the remote warehouse to complete data migration. Because data backup is done in the form of snapshots, new imported data after the snapshot phase of the backup job will not be backed up. Therefore, after the snapshot is completed, the data imported on the original cluster needs to be imported on the new cluster as well until the recovery job is completed."),(0,o.kt)("p",null,"It is suggested that the new and old clusters be imported in parallel for a period of time after the migration is completed. After completing data and business correctness checks, the business is migrated to the new cluster."),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Backup and recovery-related operations are currently only allowed to be performed by users with ADMIN privileges."),(0,o.kt)("li",{parentName:"ol"},"Within a database, only one backup or recovery job is allowed to be performed."),(0,o.kt)("li",{parentName:"ol"},"Both backup and recovery support the operation at the minimum partition level. When the table has a large amount of data, it is recommended to perform partition-by-partition to reduce the cost of failed retries."),(0,o.kt)("li",{parentName:"ol"},"Because backup and recovery operations, the operation is the actual data files. So when there are too many fragments of a table or too many small versions of a fragment, it may take a long time to backup or restore even if the total amount of data is very small. Users can estimate job execution time by ",(0,o.kt)("inlineCode",{parentName:"li"},"SHOW PARTITIONS FROM table_name;"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"SHOW TABLET FROM table_name;"),", viewing the number of partitions and the number of file versions of each partition. The number of files has a great impact on the execution time of the job, so it is suggested that the partition buckets should be planned reasonably in order to avoid excessive partitioning."),(0,o.kt)("li",{parentName:"ol"},"When viewing the job status through ",(0,o.kt)("inlineCode",{parentName:"li"},"SHOW BACKUP")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"SHOW RESTORE"),". It is possible to see an error message in the ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskErrMsg")," column. But as long as the ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," column does not\n",(0,o.kt)("inlineCode",{parentName:"li"},"CANCELLED"),", that means the job is still going on. These Tasks may succeed in retrying. Of course, some Task errors can also directly lead to job failure."),(0,o.kt)("li",{parentName:"ol"},"If the recovery operation is a coverage operation (specifying the recovery data to an existing table or partition), then starting from the ",(0,o.kt)("inlineCode",{parentName:"li"},"COMMIT")," phase of the recovery operation, the data covered on the current cluster may not be restored. At this time, if the recovery operation fails or is cancelled, it may cause the previous data to be damaged and inaccessible. In this case, the recovery operation can only be performed again and wait for the job to complete. Therefore, we recommend that if it is not necessary, try not to use coverage to recover data unless it is confirmed that the current data is no longer in use.")),(0,o.kt)("h2",{id:"relevant-orders"},"Relevant orders"),(0,o.kt)("p",null,"The commands related to the backup recovery function are as follows. The following commands, you can use `help cmd;'to view detailed help after connecting Doris through mysql-client."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"CREATE REPOSITORY"),(0,o.kt)("p",{parentName:"li"},"Create a remote warehouse Path for backup or recovery.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"BACKUP"),(0,o.kt)("p",{parentName:"li"},"Perform a backup operation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SHOW BACKUP"),(0,o.kt)("p",{parentName:"li"},"View the execution of the last backup job, including:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"JobId: ID of this backup job."),(0,o.kt)("li",{parentName:"ul"},"SnapshotName: User-specified name of this backup job (Label)."),(0,o.kt)("li",{parentName:"ul"},"DbName: The database corresponding to the backup job."),(0,o.kt)("li",{parentName:"ul"},"State: The current stage of the backup job:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PENDING: The initial state of the job."),(0,o.kt)("li",{parentName:"ul"},"SNAPSHOTING: Snapshot operation is in progress."),(0,o.kt)("li",{parentName:"ul"},"UPLOAD_SNAPSHOT: The snapshot is over and ready to upload."),(0,o.kt)("li",{parentName:"ul"},"UPLOADING: Uploading snapshots."),(0,o.kt)("li",{parentName:"ul"},"SAVE_META: Metadata files are being generated locally."),(0,o.kt)("li",{parentName:"ul"},"UPLOAD_INFO: Upload metadata files and information for this backup job."),(0,o.kt)("li",{parentName:"ul"},"FINISHED: The backup is complete."),(0,o.kt)("li",{parentName:"ul"},"CANCELLED: Backup failed or cancelled."))),(0,o.kt)("li",{parentName:"ul"},"Backup Objs: List of tables and partitions involved in this backup."),(0,o.kt)("li",{parentName:"ul"},"CreateTime: Job creation time."),(0,o.kt)("li",{parentName:"ul"},"Snapshot Finished Time: Snapshot completion time."),(0,o.kt)("li",{parentName:"ul"},"Upload Finished Time: Snapshot upload completion time."),(0,o.kt)("li",{parentName:"ul"},"FinishedTime: The completion time of this assignment."),(0,o.kt)("li",{parentName:"ul"},"Unfinished Tasks: In the ",(0,o.kt)("inlineCode",{parentName:"li"},"SNAPSHOTTING"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"UPLOADING")," and other stages, there will be multiple sub-tasks at the same time, the current stage shown here, the task ID of the unfinished sub-tasks."),(0,o.kt)("li",{parentName:"ul"},"TaskErrMsg: If there is a sub-task execution error, the error message corresponding to the sub-task will be displayed here."),(0,o.kt)("li",{parentName:"ul"},"Status: It is used to record some status information that may appear during the whole operation."),(0,o.kt)("li",{parentName:"ul"},"Timeout: The timeout time of a job in seconds."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SHOW SNAPSHOT"),(0,o.kt)("p",{parentName:"li"},"View the backup that already exists in the remote warehouse."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Snapshot: The name of the backup specified at the time of backup (Label)."),(0,o.kt)("li",{parentName:"ul"},"Timestamp: Backup timestamp."),(0,o.kt)("li",{parentName:"ul"},"Status: Is the backup normal?")),(0,o.kt)("p",{parentName:"li"},"If the where clause is specified after `SHOW SNAPSHOT', more detailed backup information can be displayed."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Database: The database corresponding to backup."),(0,o.kt)("li",{parentName:"ul"},"Details: Shows the complete data directory structure of the backup."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"RESTORE"),(0,o.kt)("p",{parentName:"li"},"Perform a recovery operation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SHOW RESTORE"),(0,o.kt)("p",{parentName:"li"},"View the execution of the last restore job, including:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"JobId: ID of this resumption job."),(0,o.kt)("li",{parentName:"ul"},"Label: The name of the backup in the user-specified warehouse (Label)."),(0,o.kt)("li",{parentName:"ul"},"Timestamp: The timestamp for backup in a user-specified warehouse."),(0,o.kt)("li",{parentName:"ul"},"DbName: Restore the database corresponding to the job."),(0,o.kt)("li",{parentName:"ul"},"State: The current stage of the recovery operation:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PENDING: The initial state of the job."),(0,o.kt)("li",{parentName:"ul"},"SNAPSHOTING: A snapshot of a new local table is in progress."),(0,o.kt)("li",{parentName:"ul"},"DOWNLOAD: The download snapshot task is being sent."),(0,o.kt)("li",{parentName:"ul"},"DOWNLOADING: Snapshot is downloading."),(0,o.kt)("li",{parentName:"ul"},"COMMIT: Prepare to take effect the downloaded snapshot."),(0,o.kt)("li",{parentName:"ul"},"COMMITTING: The downloaded snapshot is in effect."),(0,o.kt)("li",{parentName:"ul"},"FINISHED: Recovery is complete."),(0,o.kt)("li",{parentName:"ul"},"CANCELLED: Recovery failed or cancelled."))),(0,o.kt)("li",{parentName:"ul"},"AllowLoad: Is import allowed during recovery?"),(0,o.kt)("li",{parentName:"ul"},"ReplicationNum: Restores the specified number of copies."),(0,o.kt)("li",{parentName:"ul"},"Restore Objs: List of tables and partitions involved in this recovery."),(0,o.kt)("li",{parentName:"ul"},"CreateTime: Job creation time."),(0,o.kt)("li",{parentName:"ul"},"MetaPreparedTime: Completion time of local metadata generation."),(0,o.kt)("li",{parentName:"ul"},"Snapshot Finished Time: Local snapshot completion time."),(0,o.kt)("li",{parentName:"ul"},"Download Finished Time: The download completion time of the remote snapshot."),(0,o.kt)("li",{parentName:"ul"},"FinishedTime: The completion time of this assignment."),(0,o.kt)("li",{parentName:"ul"},"Unfinished Tasks: In the ",(0,o.kt)("inlineCode",{parentName:"li"},"SNAPSHOTTING"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"DOWNLOADING"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"COMMITTING"),", and other stages, there will be multiple sub-tasks at the same time, the current stage shown here, the task ID of the unfinished sub-tasks."),(0,o.kt)("li",{parentName:"ul"},"TaskErrMsg: If there is a sub-task execution error, the error message corresponding to the sub-task will be displayed here."),(0,o.kt)("li",{parentName:"ul"},"Status: It is used to record some status information that may appear during the whole operation."),(0,o.kt)("li",{parentName:"ul"},"Timeout: The timeout time of a job in seconds."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"CANCEL BACKUP"),(0,o.kt)("p",{parentName:"li"},"Cancel the backup job currently being performed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"CANCEL RESTORE"),(0,o.kt)("p",{parentName:"li"},"Cancel the recovery job currently being performed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"DROP REPOSITORY"),(0,o.kt)("p",{parentName:"li"},"Delete the created remote warehouse. Delete the warehouse, just delete the mapping of the warehouse in Doris, will not delete the actual warehouse data."))))}u.isMDXComponent=!0}}]);