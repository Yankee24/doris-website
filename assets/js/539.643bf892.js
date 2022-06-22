(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{1165:function(a,s,e){"use strict";e.r(s);var t=e(15),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"show-backup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-backup"}},[a._v("#")]),a._v(" SHOW-BACKUP")]),a._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" Name")]),a._v(" "),e("p",[a._v("SHOW BACKUP")]),a._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),e("p",[a._v("This statement is used to view BACKUP tasks")]),a._v(" "),e("p",[a._v("grammar:")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BACKUP")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" db_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("illustrate:")]),a._v(" "),e("ol",[e("li",[a._v("Only the most recent BACKUP task is saved in Doris.")]),a._v(" "),e("li",[a._v("The meaning of each column is as follows:\nJobId: Unique job id\nSnapshotName: The name of the backup\nDbName: belongs to the database\nState: current stage\nPENDING: The initial state after submitting the job\nSNAPSHOTING: Executing snapshot\nUPLOAD_SNAPSHOT: Snapshot completed, ready to upload\nUPLOADING: Snapshot uploading\nSAVE_META: Save job meta information to a local file\nUPLOAD_INFO: Upload job meta information\nFINISHED: The job was successful\nCANCELLED: Job failed\nBackupObjs: Backed up tables and partitions\nCreateTime: task submission time\nSnapshotFinishedTime: Snapshot completion time\nUploadFinishedTime: Snapshot upload completion time\nFinishedTime: Job finish time\nUnfinishedTasks: Displays unfinished subtask ids during SNAPSHOTING and UPLOADING stages\nStatus: If the job fails, display the failure message\nTimeout: Job timeout, in seconds")])]),a._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("View the last BACKUP task under example_db.")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BACKUP")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" example_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])]),a._v(" "),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" Keywords")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SHOW, BACKUP\n")])])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[a._v("#")]),a._v(" Best Practice")])])}),[],!1,null,null,null);s.default=n.exports}}]);