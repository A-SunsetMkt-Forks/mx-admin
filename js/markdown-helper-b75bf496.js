import{f as B,y as w,u as T,w as D,a as t,C as R,cx as C,b as f,d as U,cq as V,N,c0 as Y,bn as $,R as M}from"./index-fb0722d6.js";import{r as H}from"./index-08af5457.js";import{N as P}from"./Form-d67028e1.js";import{N as b}from"./FormItem-c9e50d3d.js";import{N as I}from"./Select-4d07810f.js";import{a as _}from"./Upload-0ac5ce12.js";import{N as O}from"./ButtonGroup-30555a56.js";import{N as k}from"./Switch-8d1bba52.js";import"./transform-d1ad0674.js";import"./_arrayEach-2ff48152.js";import"./index-3236b3c2.js";import"./Tag-d01e60dd.js";import"./Add-e00449c4.js";import"./Tooltip-f812d346.js";class W{constructor(s){this.strList=s}parse(s){const o=s,i=/-{3,}\n(.*?)-{3,}\n*(.*)$/gms.exec(o);if(!i)return{text:o};const c=i[1],y=i.pop(),F=c.split(`
`),g=[],v=[];let p=null;const h=F.reduce((e,d)=>{const l=d.trim().split(":").filter(a=>a.length),n=l.length>=2?[l[0],l.slice(1).filter(a=>a.length).join(":").trim()]:[l[0]];if(n.length===2){const[a,r]=n;["date","updated"].includes(a)?e[a]=new Date(r.trim()).toISOString():["categories:","tags:"].includes(a)?p=a==="categories:"?"cate":"tag":e[a]=r.trim()}else{const a=d.trim().replace(/^\s*-\s*/,"");if(["","tags:","categories:"].includes(a))return p=a==="categories:"?"cate":"tag",e;p==="tag"?g.push(a):v.push(a)}return e},{});return h.categories=v,h.tags=g,{meta:h,text:y}}start(){const s=this.strList,o=[];for(const i of s)o.push(this.parse(i));return o}}var x;(function(u){u.Post="post",u.Note="note"})(x||(x={}));const q=[{value:x.Post,label:"\u535A\u6587"},{label:"\u65E5\u8BB0",value:x.Note}];var ne=B(()=>{const u=w(x.Post),s=w([]),o=w([]);function i(e){return new W(e).start().map((l,n)=>{const r=s.value[n].file.name.replace(/\.md$/,"");return l.meta?l.meta.slug=l.meta.slug??r:l.meta={title:r,slug:r},l.meta?.date||(l.meta.date=new Date().toISOString()),l})}const c=T();async function y(e){if(e?.preventDefault(),e?.stopPropagation(),!s.value.length)throw new ReferenceError("fileList is empty");const d=[];for await(const n of s.value){const a=await Promise.resolve(new Promise((r,L)=>{const m=n.file;if(!m){c.error("\u6587\u4EF6\u4E0D\u5B58\u5728"),L("File is empty");return}const A=m.name.split(".").pop();if(m.type&&m.type!=="text/markdown"||!["md","markdown"].includes(A)){c.error(`\u53EA\u80FD\u89E3\u6790 markdown \u6587\u4EF6, \u4F46\u662F\u5F97\u5230\u4E86 ${m.type}`),L(`File must be markdown. got type: ${m.type}, got ext: ${A}`);return}const E=new FileReader;E.onload=S=>{r(S.target?.result||"")},E.readAsText(m)}));console.log(a),d.push(a)}const l=i(d);c.success("\u89E3\u6790\u5B8C\u6210, \u7ED3\u679C\u67E5\u770B console \u54E6"),o.value=l.map((n,a)=>({...n,filename:s.value[a].file?.name??""})),console.log($(o))}async function F(e){if(e.stopPropagation(),e.preventDefault(),!o.value.length)return c.error("\u8BF7\u5148\u89E3\u6790!!");await M.api.markdown.import.post({data:{type:u.value,data:o.value}}),c.success("\u4E0A\u4F20\u6210\u529F!"),s.value=[]}const g=w(!0),v=w(!1),p=w(!1);async function h(){const e=await M.api.markdown.export.get({params:{slug:p.value,yaml:g.value,show_title:v.value},responseType:"blob"});H(e,"markdown.zip")}return D(()=>s.value,e=>{e.length==0?o.value=[]:y()}),()=>t(R,null,{default:()=>[t(C,null,{default:()=>[f("\u4ECE MarkDown \u5BFC\u5165\u6570\u636E")]}),t(P,{labelAlign:"right",labelPlacement:"left",labelWidth:150,class:"max-w-[300px]"},{default:()=>[t(b,{label:"\u5BFC\u5165\u5230:"},{default:()=>[t(I,{options:q,value:u.value,onUpdateValue:e=>void(u.value=e)},null)]}),t(b,{label:"\u51C6\u5907\u597D\u4E86\u5417."},{default:()=>[t(U,{vertical:!0},{default:()=>[t(_,{multiple:!0,accept:".md,.markdown",onChange:V(e=>{s.value=e.fileList},250),onRemove:e=>{const l=e.file.name,n=o.value.findIndex(a=>a.filename===l);n!=-1&&o.value.splice(n,1)}},{default:()=>[t(O,null,{default:()=>[t(N,{round:!0},{default:()=>[f("\u5148\u4E0A\u4F20")]}),t(N,{onClick:y,disabled:!s.value.length},{default:()=>[f("\u518D\u89E3\u6790")]}),t(N,{onClick:F,round:!0,disabled:!o.value.length},{default:()=>[f("\u6700\u540E\u5BFC\u5165")]})]})]}),t(Y,{depth:2,class:"!text-sm"},{default:()=>[f("\u53EA\u80FD\u4E0A\u4F20markdown\u6587\u4EF6")]})]})]})]}),t(C,null,{default:()=>[f("\u5BFC\u51FA\u6570\u636E\u5230 Markdown (Hexo YAML Format)")]}),t(P,{labelAlign:"right",labelPlacement:"left",labelWidth:180,class:"max-w-[400px]"},{default:()=>[t(b,{label:"\u662F\u5426\u5305\u62EC yaml header"},{default:()=>[t(k,{value:g.value,onUpdateValue:e=>void(g.value=e)},null)]}),t(b,{label:"\u662F\u5426\u5728\u7B2C\u4E00\u884C\u663E\u793A\u6587\u7AE0\u6807\u9898"},{default:()=>[t(k,{value:v.value,onUpdateValue:e=>void(v.value=e)},null)]}),t(b,{label:"\u6839\u636E slug \u751F\u6210\u6587\u4EF6\u540D"},{default:()=>[t(k,{value:p.value,onUpdateValue:e=>void(p.value=e)},null)]}),t("div",{class:"text-right w-full"},[t(N,{type:"primary",onClick:h},{default:()=>[f("\u5BFC\u51FA")]})])]})]})});export{ne as default};
