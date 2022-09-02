(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[13066],{13066:(e,t,n)=>{"use strict";n.d(t,{Z:()=>W});var o=n(87462),s=n(67294),c=n(72389),r=n(86010),a=n(92949),l=n(86668);function i(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(87594),p=n.n(u);const d=/title=(?<quote>["'])(?<title>.*?)\1/,m=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:o}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function h(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:c}=t;if(c&&m.test(c)){const e=c.match(m).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(g),t)}}(o,s),a=n.split("\n"),l=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<a.length;){const e=a[p].match(r);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${p},`:u[t]?l[u[t]].start=p:d[t]&&(l[d[t]].range+=`${l[d[t]].start}-${p-1},`),a.splice(p,1)}n=a.join("\n");const h={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}var f=n(35281);const b="codeBlockContainer_Ckt0";function k(e){let{as:t,...n}=e;const c=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const c=t[o];c&&"string"==typeof s&&(n[c]=s)})),n}(i());return s.createElement(t,(0,o.Z)({},n,{style:c,className:(0,r.Z)(n.className,b,f.k.common.codeBlock)}))}const v={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){let{children:t,className:n}=e;return s.createElement(k,{as:"pre",tabIndex:0,className:(0,r.Z)(v.codeBlockStandalone,"thin-scrollbar",n)},s.createElement("code",{className:v.codeBlockLines},t))}const N={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var B={Prism:n(87410).Z,theme:N};function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},L.apply(this,arguments)}var j=/\r\n|\r|\n/,w=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},T=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},_=function(e,t){var n=e.plain,o=Object.create(null),s=e.styles.reduce((function(e,n){var o=n.languages,s=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=L({},e[t],s);e[t]=n})),e}),o);return s.root=n,s.plain=L({},n,{backgroundColor:null}),s};function x(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const S=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),C(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?_(e.theme,e.language):void 0;return t.themeDict=n})),C(this,"getLineProps",(function(e){var n=e.key,o=e.className,s=e.style,c=L({},x(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(c.style=r.plain),void 0!==s&&(c.style=void 0!==c.style?L({},c.style,s):s),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),C(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,s=n.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===s&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===s&&!o)return c[n[0]];var r=o?{display:"inline-block"}:{},a=n.map((function(e){return c[e]}));return Object.assign.apply(Object,[r].concat(a))}})),C(this,"getTokenProps",(function(e){var n=e.key,o=e.className,s=e.style,c=e.token,r=L({},x(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==s&&(r.style=void 0!==r.style?L({},r.style,s):s),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),C(this,"tokenize",(function(e,t,n,o){var s={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",s);var c=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,s=e.children,c=this.getThemeDict(this.props),r=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],o=[0],s=[e.length],c=0,r=0,a=[],l=[a];r>-1;){for(;(c=o[r]++)<s[r];){var i=void 0,u=t[r],p=n[r][c];if("string"==typeof p?(u=r>0?u:["plain"],i=p):(u=T(u,p.type),p.alias&&(u=T(u,p.alias)),i=p.content),"string"==typeof i){var d=i.split(j),m=d.length;a.push({types:u,content:d[0]});for(var g=1;g<m;g++)w(a),l.push(a=[]),a.push({types:u,content:d[g]})}else r++,t.push(u),n.push(i),o.push(0),s.push(i.length)}r--,t.pop(),n.pop(),o.pop(),s.pop()}return w(a),l}(void 0!==r?this.tokenize(t,o,r,n):[o]),className:"prism-code language-"+n,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(s.Component),I="codeLine_lJS_",O="codeLineNumber_Tfdd",P="codeLineContent_feaV";function A(e){let{line:t,classNames:n,showLineNumbers:c,getLineProps:a,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,r.Z)(n,c&&I)}),u=t.map(((e,t)=>s.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return s.createElement("span",i,c?s.createElement(s.Fragment,null,s.createElement("span",{className:O}),s.createElement("span",{className:P},u)):s.createElement(s.Fragment,null,u,s.createElement("br",null)))}var Z=n(95999);const $={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function H(e){let{code:t,className:n}=e;const[o,c]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection();let r=!1;c.rangeCount>0&&(r=c.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),r&&(c.removeAllRanges(),c.addRange(r)),s&&s.focus()}(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),s.createElement("button",{type:"button","aria-label":o?(0,Z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,Z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,Z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,$.copyButton,o&&$.copyButtonCopied),onClick:l},s.createElement("span",{className:$.copyButtonIcons,"aria-hidden":"true"},s.createElement("svg",{className:$.copyButtonIcon,viewBox:"0 0 24 24"},s.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),s.createElement("svg",{className:$.copyButtonSuccessIcon,viewBox:"0 0 24 24"},s.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const z="wordWrapButtonIcon_Bwma",V="wordWrapButtonEnabled_EoeP";function D(e){let{className:t,onClick:n,isEnabled:o}=e;const c=(0,Z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return s.createElement("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,o&&V),"aria-label":c,title:c},s.createElement("svg",{className:z,viewBox:"0 0 24 24","aria-hidden":"true"},s.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function M(e){let{children:t,className:n="",metastring:c,title:a,showLineNumbers:u,language:p}=e;const{prism:{defaultLanguage:m,magicComments:g}}=(0,l.L)(),y=p??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??m,f=i(),b=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),r=(0,s.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[c,e]),a=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return(0,s.useEffect)((()=>{a()}),[e,a]),(0,s.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:r}}(),E=function(e){var t;return(null==e||null==(t=e.match(d))?void 0:t.groups.title)??""}(c)||a,{lineClassNames:N,code:C}=h(t,{metastring:c,language:y,magicComments:g}),L=u??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(c);return s.createElement(k,{as:"div",className:(0,r.Z)(n,y&&!n.includes(`language-${y}`)&&`language-${y}`)},E&&s.createElement("div",{className:v.codeBlockTitle},E),s.createElement("div",{className:v.codeBlockContent},s.createElement(S,(0,o.Z)({},B,{theme:f,code:C,language:y??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:c}=e;return s.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,r.Z)(t,v.codeBlock,"thin-scrollbar")},s.createElement("code",{className:(0,r.Z)(v.codeBlockLines,L&&v.codeBlockLinesWithNumbering)},n.map(((e,t)=>s.createElement(A,{key:t,line:e,getLineProps:o,getTokenProps:c,classNames:N[t],showLineNumbers:L})))))})),s.createElement("div",{className:v.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&s.createElement(D,{className:v.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),s.createElement(H,{className:v.codeButton,code:C}))))}function W(e){let{children:t,...n}=e;const r=(0,c.Z)(),a=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?M:E;return s.createElement(l,(0,o.Z)({key:String(r)},n),a)}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);