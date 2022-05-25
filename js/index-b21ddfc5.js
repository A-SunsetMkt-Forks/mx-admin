import{f as P,y as b,a as l,eh as ee,c5 as te,t as ne,F as ae,dA as re,m as ie,R as I,w as se,dI as J,b as ce,C as oe}from"./index-c5b2c6d2.js";import{H as U}from"./rounded-button-6a23b45b.js";import{u as le}from"./use-react-cd8ab6a8.js";import{T as ue}from"./two-col-62286d9c.js";import{C as fe}from"./index-3d78637a.js";import{a as de,u as me,p as he}from"./use-async-monaco-449a2dc8.js";import{T as pe}from"./Trash-a4f0b946.js";import{N as ve}from"./Switch-516f7eb7.js";import{N as ge,a as V}from"./Tabs-782628b9.js";import"./editor.main-8f1dfe4c.js";import"./use-save-confirm-d4cd7785.js";import"./Add-a6216969.js";import"./throttle-6304931b.js";const _e=P({props:{value:{type:String,required:!0},onChange:{type:Function,required:!0}},setup(r){const h=b(),d=de(r),c=me(h,d,r.onChange,{language:"html"});return()=>l("div",{class:"h-full w-full relative"},[l("div",{ref:h,class:"h-full w-full relative"},null),!c.loaded.value&&l(fe,{description:"Monaco \u4F53\u79EF\u8F83\u5927\u8010\u5FC3\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210..."},null)])}});var q={},B={};(function(r){var h=/[|\\{}()[\]^$+*?.]/g,d=Object.prototype.hasOwnProperty,c=function(s,o){return d.apply(s,[o])};r.escapeRegExpChars=function(s){return s?String(s).replace(h,"\\$&"):""};var y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},L=/[&<>'"]/g;function T(s){return y[s]||s}var S=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;r.escapeXML=function(s){return s==null?"":String(s).replace(L,T)},r.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+S},r.shallowCopy=function(s,o){if(o=o||{},s!=null)for(var p in o)!c(o,p)||p==="__proto__"||p==="constructor"||(s[p]=o[p]);return s},r.shallowCopyFromList=function(s,o,p){if(p=p||[],o=o||{},s!=null)for(var C=0;C<p.length;C++){var _=p[C];if(typeof o[_]<"u"){if(!c(o,_)||_==="__proto__"||_==="constructor")continue;s[_]=o[_]}}return s},r.cache={_data:{},set:function(s,o){this._data[s]=o},get:function(s){return this._data[s]},remove:function(s){delete this._data[s]},reset:function(){this._data={}}},r.hyphenToCamel=function(s){return s.replace(/-[a-z]/g,function(o){return o[1].toUpperCase()})},r.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}()})(B);const we="ejs",ye="Embedded JavaScript templates",Ee=["template","engine","ejs"],be="3.1.8",Le="Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",Te="Apache-2.0",Se={ejs:"./bin/cli.js"},Ce="./lib/ejs.js",Ne="ejs.min.js",Ae="ejs.min.js",Oe={type:"git",url:"git://github.com/mde/ejs.git"},Pe="https://github.com/mde/ejs/issues",Fe="https://github.com/mde/ejs",je={jake:"^10.8.5"},De={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.7","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},Ie={node:">=0.10.0"},Me={test:"mocha"};var Re={name:we,description:ye,keywords:Ee,version:be,author:Le,license:Te,bin:Se,main:Ce,jsdelivr:Ne,unpkg:Ae,repository:Oe,bugs:Pe,homepage:Fe,dependencies:je,devDependencies:De,engines:Ie,scripts:Me};(function(r){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var h=ee,d=he,c=B,y=!1,L=Re.version,T="<",S=">",s="%",o="locals",p="ejs",C="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",_=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],X=_.concat("cache"),M=/^\uFEFF/,j=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;r.cache=c.cache,r.fileLoader=h.readFileSync,r.localsName=o,r.promiseImpl=new Function("return this;")().Promise,r.resolveInclude=function(t,n,e){var a=d.dirname,i=d.extname,u=d.resolve,m=u(e?n:a(n),t),w=i(t);return w||(m+=".ejs"),m};function R(t,n){var e;if(n.some(function(a){return e=r.resolveInclude(t,a,!0),h.existsSync(e)}))return e}function z(t,n){var e,a,i=n.views,u=/^[A-Za-z]+:\\|^\//.exec(t);if(u&&u.length)t=t.replace(/^\/*/,""),Array.isArray(n.root)?e=R(t,n.root):e=r.resolveInclude(t,n.root||"/",!0);else if(n.filename&&(a=r.resolveInclude(t,n.filename),h.existsSync(a)&&(e=a)),!e&&Array.isArray(i)&&(e=R(t,i)),!e&&typeof n.includer!="function")throw new Error('Could not find the include file "'+n.escapeFunction(t)+'"');return e}function N(t,n){var e,a=t.filename,i=arguments.length>1;if(t.cache){if(!a)throw new Error("cache option requires a filename");if(e=r.cache.get(a),e)return e;i||(n=k(a).toString().replace(M,""))}else if(!i){if(!a)throw new Error("Internal EJS error: no file name or template provided");n=k(a).toString().replace(M,"")}return e=r.compile(n,t),t.cache&&r.cache.set(a,e),e}function G(t,n,e){var a;if(e){try{a=N(t)(n)}catch(i){return e(i)}e(null,a)}else{if(typeof r.promiseImpl=="function")return new r.promiseImpl(function(i,u){try{a=N(t)(n),i(a)}catch(m){u(m)}});throw new Error("Please provide a callback function")}}function k(t){return r.fileLoader(t)}function Z(t,n){var e=c.shallowCopy(c.createNullProtoObjWherePossible(),n);if(e.filename=z(t,e),typeof n.includer=="function"){var a=n.includer(t,e.filename);if(a&&(a.filename&&(e.filename=a.filename),a.template))return N(e,a.template)}return N(e)}function W(t,n,e,a,i){var u=n.split(`
`),m=Math.max(a-3,0),w=Math.min(u.length,a+3),g=i(e),E=u.slice(m,w).map(function(A,F){var O=F+m+1;return(O==a?" >> ":"    ")+O+"| "+A}).join(`
`);throw t.path=g,t.message=(g||"ejs")+":"+a+`
`+E+`

`+t.message,t}function x(t){return t.replace(/;(\s*$)/,"$1")}r.compile=function(n,e){var a;return e&&e.scope&&(y||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),y=!0),e.context||(e.context=e.scope),delete e.scope),a=new f(n,e),a.compile()},r.render=function(t,n,e){var a=n||c.createNullProtoObjWherePossible(),i=e||c.createNullProtoObjWherePossible();return arguments.length==2&&c.shallowCopyFromList(i,a,_),N(i,t)(a)},r.renderFile=function(){var t=Array.prototype.slice.call(arguments),n=t.shift(),e,a={filename:n},i,u;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(i=t.shift(),t.length?c.shallowCopy(a,t.pop()):(i.settings&&(i.settings.views&&(a.views=i.settings.views),i.settings["view cache"]&&(a.cache=!0),u=i.settings["view options"],u&&c.shallowCopy(a,u)),c.shallowCopyFromList(a,i,X)),a.filename=n):i=c.createNullProtoObjWherePossible(),G(a,i,e)},r.Template=f,r.clearCache=function(){r.cache.reset()};function f(t,n){n=n||c.createNullProtoObjWherePossible();var e=c.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=n.client||!1,e.escapeFunction=n.escape||n.escapeFunction||c.escapeXML,e.compileDebug=n.compileDebug!==!1,e.debug=!!n.debug,e.filename=n.filename,e.openDelimiter=n.openDelimiter||r.openDelimiter||T,e.closeDelimiter=n.closeDelimiter||r.closeDelimiter||S,e.delimiter=n.delimiter||r.delimiter||s,e.strict=n.strict||!1,e.context=n.context,e.cache=n.cache||!1,e.rmWhitespace=n.rmWhitespace,e.root=n.root,e.includer=n.includer,e.outputFunctionName=n.outputFunctionName,e.localsName=n.localsName||r.localsName||o,e.views=n.views,e.async=n.async,e.destructuredLocals=n.destructuredLocals,e.legacyInclude=typeof n.legacyInclude<"u"?!!n.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof n._with<"u"?n._with:!0,this.opts=e,this.regex=this.createRegex()}f.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},f.prototype={createRegex:function(){var t=C,n=c.escapeRegExpChars(this.opts.delimiter),e=c.escapeRegExpChars(this.opts.openDelimiter),a=c.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,n).replace(/</g,e).replace(/>/g,a),new RegExp(t)},compile:function(){var t,n,e=this.opts,a="",i="",u=e.escapeFunction,m,w=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),a+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!j.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");a+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!j.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var g="  var __locals = ("+e.localsName+` || {}),
`,E=0;E<e.destructuredLocals.length;E++){var A=e.destructuredLocals[E];if(!j.test(A))throw new Error("destructuredLocals["+E+"] is not a valid JS identifier.");E>0&&(g+=`,
  `),g+=A+" = __locals."+A}a+=g+`;
`}e._with!==!1&&(a+="  with ("+e.localsName+` || {}) {
`,i+=`  }
`),i+=`  return __output;
`,this.source=a+this.source+i}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+w+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+u.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+W.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+w+`
`);try{if(e.async)try{m=new Function("return (async function(){}).constructor;")()}catch(v){throw v instanceof SyntaxError?new Error("This environment does not support async/await"):v}else m=Function;n=new m(e.localsName+", escapeFn, include, rethrow",t)}catch(v){throw v instanceof SyntaxError&&(e.filename&&(v.message+=" in "+e.filename),v.message+=` while compiling ejs

`,v.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,v.message+="https://github.com/RyanZim/EJS-Lint",e.async||(v.message+=`
`,v.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),v}var F=e.client?n:function(H){var Q=function(Y,$){var D=c.shallowCopy(c.createNullProtoObjWherePossible(),H);return $&&(D=c.shallowCopy(D,$)),Z(Y,e)(D)};return n.apply(e.context,[H||c.createNullProtoObjWherePossible(),u,Q,W])};if(e.filename&&typeof Object.defineProperty=="function"){var O=e.filename,K=d.basename(O,d.extname(O));try{Object.defineProperty(F,"name",{value:K,writable:!1,enumerable:!1,configurable:!0})}catch{}}return F},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var n=this,e=this.parseTemplateText(),a=this.opts.delimiter,i=this.opts.openDelimiter,u=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(m,w){var g;if(m.indexOf(i+a)===0&&m.indexOf(i+a+a)!==0&&(g=e[w+2],!(g==a+u||g=="-"+a+u||g=="_"+a+u)))throw new Error('Could not find matching close tag for "'+m+'".');n.scanLine(m)})},parseTemplateText:function(){for(var t=this.templateText,n=this.regex,e=n.exec(t),a=[],i;e;)i=e.index,i!==0&&(a.push(t.substring(0,i)),t=t.slice(i)),a.push(e[0]),t=t.slice(e[0].length),e=n.exec(t);return t&&a.push(t),a},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var n=this,e=this.opts.delimiter,a=this.opts.openDelimiter,i=this.opts.closeDelimiter,u=0;switch(u=t.split(`
`).length-1,t){case a+e:case a+e+"_":this.mode=f.modes.EVAL;break;case a+e+"=":this.mode=f.modes.ESCAPED;break;case a+e+"-":this.mode=f.modes.RAW;break;case a+e+"#":this.mode=f.modes.COMMENT;break;case a+e+e:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(a+e+e,a+e)+`")
`;break;case e+e+i:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+i,e+i)+`")
`;break;case e+i:case"-"+e+i:case"_"+e+i:this.mode==f.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case f.modes.EVAL:case f.modes.ESCAPED:case f.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case f.modes.EVAL:this.source+="    ; "+t+`
`;break;case f.modes.ESCAPED:this.source+="    ; __append(escapeFn("+x(t)+`))
`;break;case f.modes.RAW:this.source+="    ; __append("+x(t)+`)
`;break;case f.modes.COMMENT:break;case f.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}n.opts.compileDebug&&u&&(this.currentLine+=u,this.source+="    ; __line = "+this.currentLine+`
`)}},r.escapeXML=c.escapeXML,r.__express=r.renderFile,r.VERSION=L,r.name=p,typeof window<"u"&&(window.ejs=r)})(q);const ke=P({props:{template:{type:String,required:!0},data:{type:Object,required:!0}},setup(r){return()=>l("div",{class:"h-full overflow-auto  bg-white"},[l("div",{innerHTML:q.render(r.template,r.data)},null)])}}),We=P({setup(){const r=b(""),h=b(""),d=b("guest"),c=b(null),{setHeaderButtons:y}=te(),L=async()=>{await I.api.options.email.template.reply.put({params:{type:d.value},data:{source:h.value}}),await s()},T=ne(),S=()=>{T.warning({title:"\u786E\u8BA4\u91CD\u7F6E?",content:"\u91CD\u7F6E\u540E, \u6A21\u677F\u5C06\u88AB\u6062\u590D\u4E3A\u9ED8\u8BA4\u6A21\u677F",async onNegativeClick(){await I.api.options.email.template.reply.delete({params:{type:d.value}}),await s()},onPositiveClick(){},negativeText:"\u55EF",positiveText:"\u8FBE\u54A9"})};le(()=>(y(l(ae,null,[l(U,{icon:l(re,null,null),name:"\u63D0\u4EA4",onClick:L,variant:"success"},null),l(U,{icon:l(pe,null,null),name:"\u91CD\u7F6E\u81EA\u5B9A\u4E49\u6A21\u677F",onClick:S,variant:"error"},null)])),()=>{y(null)})),ie(()=>{s()});const s=async()=>{const{template:o,props:p}=await I.api.options.email.template.reply.get({params:{type:d.value}});r.value=o,h.value=o,c.value=p};return se(()=>d.value,s),()=>l("div",null,[l(ve,{defaultValue:d.value==="guest",onUpdateValue:o=>{d.value=o?"guest":"owner"}},{checked(){return"\u6E38\u5BA2"},unchecked(){return"\u4E3B\u4EBA"}}),l("div",{class:"pb-4"},null),l(ue,null,{default:()=>[l(J,{span:18},{default:()=>[l(_e,{onChange:o=>{h.value=o},value:r.value},null)]}),l(J,{span:18,class:"relative h-[calc(100vh-15rem)] "},{default:()=>[l(ke,{data:c.value,template:h.value},null)]})]})])}}),xe=P({setup(){return()=>l("div",null,[ce("\u5373\u5C06\u63A8\u51FA")])}});var Ye=P({setup(){const r=b("1");return()=>l(oe,null,{default:()=>[l(ge,{value:r.value,size:"medium",onUpdateValue:h=>{r.value=h}},{default:()=>[l(V,{name:"1",tab:"\u8BC4\u8BBA\u90AE\u4EF6\u6A21\u677F"},{default:()=>[l(We,null,null)]}),l(V,{name:"2",tab:"\u9884\u89C8 Markdown \u6A21\u677F"},{default:()=>[l(xe,null,null)]})]})]})}});export{Ye as default};
