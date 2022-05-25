import{H}from"./rounded-button-1d702d31.js";import{f as C,y as m,a as e,F as x,N as v,I as T,b as N,bY as F,b$ as S,c$ as P,R as g,d0 as w,b0 as k,g as L,P as q,d1 as _,m as O,A as E,cv as J,p as W,w as U,H as y,d2 as G,x as Q,j as Y,C as K}from"./index-fb0722d6.js";import{u as X}from"./use-table-21f68512.js";import{I as Z}from"./iframe-preview-49e15af8.js";import{U as j}from"./index-f7945db5.js";import{S as ee}from"./Search24Regular-da5c83b7.js";import{N as te}from"./Upload-0ac5ce12.js";import{N as D}from"./Avatar-cc061862.js";import{a as ae,N as le}from"./Select-4d07810f.js";import{N as A,a as B}from"./ListItem-d2ee9bba.js";import{T as $}from"./Trash-7bbec851.js";import{a as M,N as ne}from"./Icon-301e85f3.js";import{N as V}from"./Popconfirm-1dde93a9.js";import{N as re}from"./Form-d67028e1.js";import{N as b}from"./FormItem-c9e50d3d.js";import{N as ue}from"./ButtonGroup-30555a56.js";import"./Add-e00449c4.js";import"./Tooltip-f812d346.js";import"./Tag-d01e60dd.js";import"./prop-a1682621.js";import"./Forward-96742768.js";import"./index-3236b3c2.js";const R=a=>{if(!a)return"";const t=a.split(" ")[0];return t.length>4?a[0]:t};function se(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!q(a)}const oe=C({props:{id:{type:String,required:!0}},setup(a){const t=m(!1),l=m(null),i=m([]),c=m(),p=m(!0),f=async()=>{t.value=!0;const s=await g.api.topics(a.id).get();l.value=s,await n(s.id)},n=async(s,r=1,u=5)=>{p.value=!0;const{data:o,pagination:h}=await g.api.notes.topics(s).get({params:{page:r,size:u}});return p.value=!1,i.value=o,c.value=h,{data:o,pagination:h}},d=async s=>{await g.api.notes(s).patch({data:{topicId:null}}),message.success("\u5DF2\u79FB\u9664\u6587\u7AE0\u7684\u4E13\u680F\u5F15\u7528");const r=i.value.findIndex(u=>u.id===s);-~r&&i.value.splice(r,1)};return()=>{let s;return e(x,null,[e(v,{size:"small",secondary:!0,onClick:f},{default:()=>[e(T,{class:"mr-1"},{default:()=>[e(ee,null,null)]}),N("\u8BE6\u60C5")]}),e(F,{show:t.value,closable:!0,onClose:()=>{t.value=!1},closeOnEsc:!0,onUpdateShow:r=>{t.value=r}},{default:()=>[l.value?e(S,{closable:!0,role:"dialog",class:"modal-card md",title:`\u4E13\u680F - ${l.value.name}`},{default:()=>[e(P,null,{avatar(){return e(j,{class:"p0",type:"icon",onFinish:r=>{const u=JSON.parse((r.event?.target).responseText);return r.file.url=u.url,l.value&&g.api.topics(l.value.id).patch({data:{icon:u.url}}).then(()=>{l.value&&(l.value.icon=u.url)}),r.file},onError:r=>{try{const u=JSON.parse((r.event?.target).responseText);message.warning(u.message)}catch{}return r.file}},{default:()=>[e(te,null,{default:()=>[e(D,{size:60,class:"rounded-xl",src:l.value?.icon||void 0},{default:()=>[l.value?.icon?void 0:R(l.value?.name)]})]})]})},header(){return e("b",null,[l.value?.name])},"header-extra":function(){return e("span",{class:"opacity-80"},[l.value?.slug])},description(){return e("p",{class:"opacity-90 clamp-2 break-all"},[l.value?.introduce])},default(){return e("p",null,[l.value?.description])}}),p.value&&i.value.length==0?e(w,{animated:!0,class:"mt-2 h-[350px]"},null):e("div",{class:"mt-4"},[e("p",{class:"flex justify-between items-center"},[e("strong",null,[N("\u5305\u542B\u7684\u6587\u7AE0\uFF1A")]),e(ce,{topicId:l.value.id,onSuccess:()=>{k(()=>f())}},null)]),i.value.length===0&&e("div",{class:"h-[300px] flex items-center justify-center"},[e(ae,{description:"\u8FD9\u91CC\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9"},null)]),e(A,{bordered:!0,class:"mt-2"},se(s=i.value.map(r=>e(B,{key:r.id},{default(){return e("p",{class:"space-x-2 flex items-center"},[e("span",null,[r.title]),e(Z,{path:(()=>`${g.endpoint}/markdown/render/${r.id}${`?token=${L()}`}`)()},null)])},suffix(){return e(V,{onPositiveClick:()=>d(r.id)},{trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(T,null,{default:()=>[e($,null,null)]})]})},default(){return`\u662F\u5426\u79FB\u9664\u6B64\u8BDD\u9898\u300C${l.value?.name}\u300D\uFF1F`}})}})))?s:{default:()=>[s]}),e("div",{class:"flex justify-end"},[c.value&&e(M,{class:"mt-4",onUpdatePage:r=>{n(a.id,r)},page:c.value.currentPage,pageCount:c.value.totalPage},null)])])]}):e(S,{class:"modal-card md",role:"dialog",title:"\u4E13\u680F\u4FE1\u606F\u83B7\u53D6\u4E2D"},{default:()=>[e("div",{class:"flex relative gap-2 "},[e(w,{animated:!0,circle:!0,width:60},null),e("div",{class:"flex-grow"},[e(w,{animated:!0,text:!0,repeat:3,class:"flex-grow"},null)])]),e(w,{animated:!0,repeat:2,class:"mt-2",text:!0},null)]})]})])}}}),ie=_(()=>{const a=m([]);let t=0,l=!1;const i=m(!0),c=async(p=1)=>{i.value=!0;const{data:f,pagination:n}=await g.api.notes.get({params:{page:p,size:20,select:"nid title _id id"}});a.value.push(...f),i.value=!1,t=n.currentPage,n.hasNextPage||(l=!0)};return{loading:i,notes:a,fetchNext:()=>{l||c(t+1)},refresh:()=>{t=1,l=!1,a.value=[],c(t)}}}),ce=C({props:{topicId:{type:String,required:!0},onSuccess:{type:Function,required:!1}},setup(a){const t=m(!1),l=async()=>{const s=J(n);await Promise.all(s.map(r=>g.api.notes(r).patch({data:{topicId:a.topicId}}))),message.success("\u6DFB\u52A0\u6210\u529F"),t.value=!1,a.onSuccess?.(s)},{refresh:i,fetchNext:c,notes:p,loading:f}=ie(),n=m([]),d=s=>{const r=s.currentTarget;r.scrollTop+r.offsetHeight+10>=r.scrollHeight&&c()};return O(()=>{p.value.length===0&&c()}),()=>e(x,null,[e(v,{secondary:!0,type:"success",circle:!0,onClick:()=>{t.value=!0}},{default:()=>[e(T,null,{default:()=>[e(E,null,null)]})]}),e(F,{closable:!0,closeOnEsc:!0,show:t.value,onUpdateShow:s=>{t.value=s}},{default:()=>[e(S,{title:"\u54EA\u4E9B\u6587\u7AE0\u9700\u8981\u6DFB\u52A0\u5230\u4E13\u680F\uFF1F",class:"modal-card sm"},{footer(){return e("div",{class:"text-right"},[e(v,{round:!0,type:"success",onClick:()=>l()},{default:()=>[N("\u6DFB\u52A0\uFF01")]})])},default(){return e(le,{maxTagCount:3,filterable:!0,clearable:!0,loading:f.value,multiple:!0,onClear:()=>{i()},value:n.value,onUpdateValue:s=>{n.value=s},resetMenuOnOptionsChange:!1,options:p.value.map(s=>({label:s.title,value:s.id,key:s.id})),onScroll:d},null)}})]})])}}),de=C({props:{show:{type:Boolean,required:!0},onClose:{type:Function,required:!0},id:{type:String,required:!1},onSubmit:{type:Function,required:!1}},setup(a){const t=W({}),l=m(!1),i=()=>{Object.keys(t).forEach(n=>{delete t[n]})};U(()=>a.id,n=>{n?(l.value=!0,g.api.topics(n).get().then(d=>{Object.assign(t,d),l.value=!1})):i()});const c=()=>{a.onClose()},p=()=>{f?.value?.validate(async d=>{d?.length||await n()});async function n(){let d;a.id?(d=await g.api.topics(a.id).put({data:t}),message.success("\u4FEE\u6539\u6210\u529F")):(d=await g.api.topics.post({data:t}),message.success("\u6DFB\u52A0\u6210\u529F")),a.onSubmit?.(d),k(()=>{i()})}},f=m();return()=>e(x,null,[e(F,{show:a.show,onUpdateShow:c,closable:!0,onClose:c,transformOrigin:"center"},{default:()=>[e(S,{role:"dialog",title:"\u65B0\u5EFA\u8BDD\u9898",closable:!0,onClose:c,class:"modal-card sm"},{default:()=>[e(re,{labelPlacement:"top",ref:f,model:t,disabled:l.value},{default:()=>[e(b,{label:"\u540D\u5B57",required:!0,rule:{max:50,required:!0,trigger:["blur","input"]},path:"name"},{default:()=>[e(y,{value:t.name,onUpdateValue:n=>{t.name=n}},null)]}),e(b,{label:"id",required:!0,rule:{required:!0,trigger:["blur","input"]},path:"slug"},{default:()=>[e(y,{value:t.slug,onUpdateValue:n=>{t.slug=n}},null)]}),e(b,{label:"\u7B80\u4ECB",required:!0,rule:{max:100,required:!0,trigger:["blur","input"]},path:"introduce"},{default:()=>[e(y,{value:t.introduce,onUpdateValue:n=>{t.introduce=n}},null)]}),e(b,{label:"\u56FE\u6807"},{default:()=>[e(y,{value:t.icon,onUpdateValue:n=>{t.icon=n}},{suffix(){return e(j,{class:"flex items-center",type:"icon",onFinish:n=>{const d=JSON.parse((n.event?.target).responseText);return n.file.url=d.url,t.icon=n.file.url,n.file}},{default:()=>[e(v,{text:!0},{default:()=>[e(ne,null,{default:()=>[e(G,null,null)]})]})]})}})]}),e(b,{label:"\u957F\u63CF\u8FF0",rule:{max:500,trigger:["blur","input"]},path:"description"},{default:()=>[e(y,{type:"textarea",autosize:{maxRows:5,minRows:2},value:t.description,onUpdateValue:n=>{t.description=n}},null)]}),e("div",{class:"flex justify-end gap-2"},[e(v,{round:!0,type:"primary",onClick:p},{default:()=>[N("\u63D0\u4EA4")]})])]})]})]})])}});function pe(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!q(a)}var De=C({setup(){const a=Q(),t=Y();U(()=>t.query.page,u=>{l(u?+u:0)});const{fetchDataFn:l,data:i,pager:c}=X((u,o)=>async(h=parseInt(t.query.page)||1,z=20)=>{const I=await g.api.topics.get({page:h,size:z});return o.value=I.pagination,u.value=I.data,I});O(()=>l());const p=m(""),f=m(!1),n=()=>{f.value=!0,p.value=""},d=()=>{f.value=!1,p.value=""};return{pagination:c,topics:i,fetchTopic:l,handleAddTopic:n,editTopicId:p,showTopicModal:f,handleCloseModal:d,handleSubmit(u){d();const o=i.value.findIndex(h=>h.id===u.id);-~o?i.value[o]=u:i.value.push(u)},handleDelete:async u=>{await g.api.topics(u).delete(),l()},handleEdit:u=>{p.value=u,f.value=!0},route:t,router:a}},render(){const{pagination:a,topics:t,router:l,route:i,editTopicId:c,showTopicModal:p,handleAddTopic:f,handleCloseModal:n,handleSubmit:d,handleEdit:s,handleDelete:r}=this;return e(K,null,{actions(){return e(x,null,[e(H,{icon:e(E,null,null),onClick:f,variant:"success"},null)])},default(){let u;return e(x,null,[e(A,{bordered:!0,class:"mb-4"},pe(u=t.map(o=>e(B,{key:o.id},{prefix(){return e(D,{"data-src":o.icon,class:`mt-2 ${o.icon&&"!bg-transparent"}`,circle:!0,size:50,src:o.icon||void 0},{default:()=>[o.icon?void 0:R(o.name)]})},suffix(){return e(ue,null,{default:()=>[e(v,{round:!0,onClick:()=>s(o.id)},{default:()=>[N("\u7F16\u8F91")]}),e(V,{onPositiveClick:()=>r(o.id)},{default(){return`\u786E\u5B9A\u5220\u9664\u300C${o.name}\u300D\uFF1F`},trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(T,null,{default:()=>[e($,null,null)]})]})}})]})},default(){return e(P,{title:o.name,description:o.introduce,titleExtra:o.slug},{default(){return o.description},footer(){return e(oe,{id:o.id},null)}})}})))?u:{default:()=>[u]}),a&&e("div",{class:"flex justify-end"},[e(M,{page:a.currentPage,onUpdatePage:o=>{l.replace({query:{...i.query,page:o},params:{...i.params}})},pageCount:a.totalPage,pageSize:a.size,showQuickJumper:!0},null)]),e(de,{onClose:n,show:Boolean(p||c),id:c,onSubmit:d},null)])}})}});export{De as default};
