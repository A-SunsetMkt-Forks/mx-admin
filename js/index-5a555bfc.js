import{d as m,x as r,k as f,h as e,bZ as x,N as d,R as c,bT as y,bV as b,F as k,b as v,H as N,i as F,l as T,v as B,n as E}from"./index-703972d3.js";import{X as w}from"./index-ced13672.js";import{N as C,a as D}from"./ListItem-69ae888f.js";import{N as L}from"./Select-c2e1cbd3.js";import{u as S}from"./use-react-387ca1ce.js";import{socket as i}from"./index-087800c3.js";import{E as h}from"./types-4fa065e6.js";import{N as R,a as g}from"./Tabs-045c3144.js";import"./Tag-c770bd2c.js";import"./index-f6a46034.js";import"./Add-ee1a21b4.js";import"./throttle-3595fdec.js";const U=m({setup(){const s=r([]),l=r(!1),o=async()=>{l.value=!0;const{data:t}=await c.api.health.log.list(a.value).get();s.value=t,l.value=!1};f(()=>{o()});const u=r(""),n=r(!1),a=r("native");return()=>e(k,null,e(y,{transformOrigin:"center",show:n.value,onUpdateShow:t=>void(n.value=t)},e(b,{title:"\u67E5\u770B\u65E5\u5FD7",class:"modal-card !w-[100rem] !bg-dark-400 !text-white !all:text-white ",bordered:!1,closable:!0,onClose:()=>{n.value=!1}},e(M,{data:u.value}))),e(x,{show:l.value},e(C,{class:"min-h-[300px]"},{header(){return e(L,{class:"ml-auto w-32",value:a.value,onUpdateValue:t=>{a.value=t,o()},options:[{label:"PM2",value:"pm2"},{label:"\u7CFB\u7EDF\u8BB0\u5F55",value:"native"}]})},default(){return s.value.map(t=>e(D,{key:t.filename},{default(){return e("div",{class:"flex flex-col"},e("span",null,t.filename),e("span",{class:"text-gray-400 dark:text-gray-600 text-sm grid grid-cols-[5rem,auto]"},e("span",null,t.size),e("span",null,"\u7C7B\u578B\uFF1A",t.type)))},suffix(){return e("div",{class:"flex space-x-2"},e(d,{ghost:!0,type:"success",onClick:()=>{c.api.health.log(a.value).get({params:{filename:t.filename}}).then(p=>{u.value=p,n.value=!0})}},"\u67E5\u770B"),e(d,{ghost:!0,type:"error",onClick:()=>{c.api.health.log(a.value).delete({params:{filename:t.filename}}).then(()=>{s.value.splice(s.value.findIndex(p=>p.filename===t.filename),1)})}},"\u5220\u9664"))}}))}})))}}),M=m({props:{data:{type:String,default:""}},setup(s){const l=r(!0);return f(()=>{setTimeout(()=>{l.value=!1},1e3)}),()=>e("div",{class:"h-[600px] max-h-[70vh] overflow-auto relative"},l.value?e("div",{class:"w-full flex items-center justify-center h-full"},e(x,{show:!0,strokeWidth:14})):e(w,{class:"h-full w-full max-h-full",onReady:o=>{o.write(s.data)}}))}}),V=m({setup(){const s=(a=!0)=>{i.socket.emit("log",{prevLog:a})};let l,o=[];const u=a=>{l?(o.length>0&&n(l),l.write(a)):o.push(a)},n=a=>{for(;o.length;){const t=o.shift();a.write(t)}};return f(()=>{s(),v.on(h.STDOUT,u)}),S(()=>{const a=()=>{s(!1)};return i.socket.io.on("open",a),()=>{i.socket.io.off("open",a)}}),N(()=>{i.socket.emit("unlog"),v.off(h.STDOUT,u)}),()=>e(w,{darkMode:!0,onReady:a=>{l=a,n(l)}})}});var $=m({setup(){const s=F(),l=T(()=>s.query.tab?.toString()||"0"),o=B();return()=>e(E,null,e(R,{size:"medium",value:l.value,onUpdateValue:u=>{o.replace({...s,query:{...s.query,tab:u}})}},e(g,{tab:"\u65E5\u5FD7",name:"0"},e(U,null)),e(g,{tab:"\u5B9E\u65F6",name:"1"},e(V,null))))}});export{$ as default};
