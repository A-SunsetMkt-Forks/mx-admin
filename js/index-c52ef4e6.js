import{d as m,v as r,j as c,h as e,bY as w,N as d,R as p,bS as y,bT as b,F as k,E as N,f as F,k as T,t as E,m as B}from"./index-deb90793.js";import{X as x}from"./index-43585001.js";import{N as S,a as C}from"./ListItem-46fcfa73.js";import{N as D}from"./Select-85b670fe.js";import{u as L}from"./use-react-69862870.js";import{socket as i}from"./index-69d4025b.js";import{E as v}from"./types-4fa065e6.js";import{b as h}from"./index-77eb1604.js";import{N as R,a as g}from"./Tabs-12700649.js";import"./Tag-5d98a870.js";import"./Add-4268deaf.js";import"./throttle-6cb162e2.js";const U=m({setup(){const s=r([]),l=r(!1),o=async()=>{l.value=!0;const{data:t}=await p.api.health.log.list(a.value).get();s.value=t,l.value=!1};c(()=>{o()});const u=r(""),n=r(!1),a=r("native");return()=>e(k,null,e(y,{transformOrigin:"center",show:n.value,onUpdateShow:t=>void(n.value=t)},e(b,{title:"\u67E5\u770B\u65E5\u5FD7",class:"modal-card !w-[100rem] !bg-dark-400 !text-white !all:text-white ",bordered:!1,closable:!0,onClose:()=>{n.value=!1}},e(M,{data:u.value}))),e(w,{show:l.value},e(S,{class:"min-h-[300px]"},{header(){return e(D,{class:"ml-auto w-32",value:a.value,onUpdateValue:t=>{a.value=t,o()},options:[{label:"PM2",value:"pm2"},{label:"\u7CFB\u7EDF\u8BB0\u5F55",value:"native"}]})},default(){return s.value.map(t=>e(C,{key:t.filename},{default(){return e("div",{class:"flex flex-col"},e("span",null,t.filename),e("span",{class:"text-gray-400 dark:text-gray-600 text-sm grid grid-cols-[5rem,auto]"},e("span",null,t.size),e("span",null,"\u7C7B\u578B\uFF1A",t.type)))},suffix(){return e("div",{class:"flex space-x-2"},e(d,{ghost:!0,type:"success",onClick:()=>{p.api.health.log(a.value).get({params:{filename:t.filename}}).then(f=>{u.value=f,n.value=!0})}},"\u67E5\u770B"),e(d,{ghost:!0,type:"error",onClick:()=>{p.api.health.log(a.value).delete({params:{filename:t.filename}}).then(()=>{s.value.splice(s.value.findIndex(f=>f.filename===t.filename),1)})}},"\u5220\u9664"))}}))}})))}}),M=m({props:{data:{type:String,default:""}},setup(s){const l=r(!0);return c(()=>{setTimeout(()=>{l.value=!1},1e3)}),()=>e("div",{class:"h-[600px] max-h-[70vh] overflow-auto relative"},l.value?e("div",{class:"w-full flex items-center justify-center h-full"},e(w,{show:!0,strokeWidth:14})):e(x,{class:"h-full w-full max-h-full",onReady:o=>{o.write(s.data)}}))}}),q=m({setup(){const s=(a=!0)=>{i.socket.emit("log",{prevLog:a})};let l,o=[];const u=a=>{l?(o.length>0&&n(l),l.write(a)):o.push(a)},n=a=>{for(;o.length;){const t=o.shift();a.write(t)}};return c(()=>{s(),h.on(v.STDOUT,u)}),L(()=>{const a=()=>{s(!1)};return i.socket.io.on("open",a),()=>{i.socket.io.off("open",a)}}),N(()=>{i.socket.emit("unlog"),h.off(v.STDOUT,u)}),()=>e(x,{darkMode:!0,onReady:a=>{l=a,n(l)}})}});var $=m({setup(){const s=F(),l=T(()=>s.query.tab?.toString()||"0"),o=E();return()=>e(B,null,e(R,{size:"medium",value:l.value,onUpdateValue:u=>{o.replace({...s,query:{...s.query,tab:u}})}},e(g,{tab:"\u65E5\u5FD7",name:"0"},e(U,null)),e(g,{tab:"\u5B9E\u65F6",name:"1"},e(q,null))))}});export{$ as default};
