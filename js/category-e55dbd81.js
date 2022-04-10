import{H as T}from"./rounded-button-11cc7b25.js";import{d as x,i as I,l as f,v as p,u as D,j as z,R as o,w as E,h as e,p as R,N as l,a as F,ck as N,F as M,A as H,m as j,bS as q,C as L,bT as P,y as b}from"./index-deb90793.js";import{t as U}from"./index-95171ce1.js";import{N as O}from"./Badge-42dbe96a.js";import{N as V}from"./Tag-5d98a870.js";import{N as k}from"./FormItemRow-97fe5a2e.js";import{a as S}from"./DataTable-46f2ff83.js";import{N as $}from"./Popconfirm-d3e46339.js";import{N as G}from"./Form-3cef986e.js";import"./Select-85b670fe.js";import"./FormItem-212114e6.js";import"./index-0727585f.js";import"./Icon-61674078.js";import"./Forward-e8fa8258.js";import"./ChevronRight-1702a94e.js";import"./Tooltip-814e9858.js";const oe=x(s=>{const a=I(L),c=f([]),i=p(!0),u=a.fetch,y=D();z(async()=>{i.value=!0,await u(),i.value=!1;const{data:t}=await o.api.categories.get({params:{type:"tag"}});c.push(...t)});const m=p(""),d=f([]);E(()=>m.value,async t=>{const r=await o.api.categories(t).get({params:{tag:"true"}});d.length=0,d.push(...r.data)});const n=p(!1),w=()=>({name:"",slug:""}),h=p(w());return()=>e(j,{actionsElement:e(M,null,e(T,{variant:"success",icon:e(H,null),onClick:()=>{n.value=!0,h.value=w()}}))},e(N,{prefix:"bar"},"\u5206\u7C7B"),e(B,{show:n,onSubmit:async t=>{const{name:r,slug:C}=t,v=typeof n.value=="string"?n.value:null;if(v){await o.api.categories(v).put({data:{name:r,slug:C,type:0}}),y.success("\u4FEE\u6539\u6210\u529F");const g=a.data.value.findIndex(A=>A.id==v);a.data.value[g]={...a.data.value[g],...t}}else{const g=await o.api.categories.post({data:{name:r,slug:C}});y.success("\u521B\u5EFA\u6210\u529F"),a.data.value.push(g.data)}},initialState:h.value}),e(S,{rowClassName:()=>U,size:"small",bordered:!1,data:a.data.value||[],remote:!0,loading:i.value,columns:[{title:"\u540D\u79F0",key:"name"},{title:"\u6570",key:"count"},{title:"\u8DEF\u5F84",key:"slug",width:300},{width:300,title:"\u64CD\u4F5C",fixed:"right",key:"id",render(t){return e(F,{size:12},e(l,{size:"tiny",text:!0,type:"primary",onClick:r=>{h.value={name:t.name,slug:t.slug},n.value=t.id}},"\u7F16\u8F91"),e($,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await o.api.categories(t.id).delete(),y.success("\u5220\u9664\u6210\u529F"),await a.fetch(!0)}},{trigger:()=>e(l,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>e("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u5220\u9664 ",t.title," ?")}))}}]}),e(N,{prefix:"bar"},"\u6807\u7B7E"),e(F,{size:12},c.map(t=>e(O,{value:t.count,key:t.name},e(V,{class:"border-gray-200 border",round:!0,type:"success",checkable:!0,bordered:!0,checked:m.value==t.name,onUpdateChecked:r=>{r?m.value=t.name:m.value=""}},t.name)))),d.length!=0&&e(S,{remote:!0,class:"mt-4",data:d,columns:[{title:"\u6807\u9898",key:"title",render(t){return e(R,{to:"/posts/edit?id="+t.id},e(l,{type:"primary",text:!0},t.title))}},{title:"\u5206\u7C7B",key:"category",render(t){return t.category.name}}]}))}),B=x(s=>{const a=f(s.initialState??{name:"",slug:""});E(()=>s.initialState,u=>{u&&(a.name=u.name,a.slug=u.slug)});const c=D(),i=()=>{if(!a.name||!a.slug){c.error("\u540D\u5B57 \u548C \u8DEF\u5F84 \u4E0D\u80FD\u4E3A\u7A7A");return}s.onSubmit(a),s.show.value=!1};return()=>e(q,{transformOrigin:"center",show:!!s.show.value,onUpdateShow:u=>{s.show.value=u}},{default:()=>e(P,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:s.initialState?"\u7F16\u8F91":"\u65B0\u5EFA"},e(G,{onSubmit:i,rules:{name:{required:!0,trigger:["input","blur"]},slug:{required:!0,trigger:["input","blur"]}}},e(k,{path:"name",label:"\u540D\u5B57"},e(b,{placeholder:"",onInput:u=>{a.name=u},value:a.name})),e(k,{path:"slug",label:"\u8DEF\u5F84"},e(b,{placeholder:"",onInput:u=>{a.slug=u},value:a.slug})),e("div",{class:"text-center"},e(F,{size:12,align:"center",inline:!0},e(l,{type:"success",onClick:i,round:!0},"\u786E\u5B9A"),e(l,{onClick:()=>s.show.value=!1,round:!0},"\u53D6\u6D88")))))})});B.props=["initialState","onSubmit","show"];export{oe as CategoryView};
