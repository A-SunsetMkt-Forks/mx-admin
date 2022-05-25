import{H as w}from"./rounded-button-1d702d31.js";import{f as p,y as f,u as S,t as M,g as P,G as x,e as u,K as v,a as t,dK as A,w as D,C as H,F as I,ej as F,ek as j,H as R,N as b,b as m,m as V,R as Y,b$ as $,M as g,dc as B,P as L}from"./index-fb0722d6.js";import{X as O}from"./index-3236023e.js";import{u as T}from"./use-react-171f0239.js";import{l as U}from"./index-d0540b84.js";import{E as d}from"./types-4fa065e6.js";import{N as _}from"./Form-d67028e1.js";import{N as G,a as q}from"./ListItem-d2ee9bba.js";function K(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!L(e)}var se=p({name:"PtyView",setup(){let e;const s=f(!1);let o;const r=a=>{e.write(a),e.focus()},c=S(),y=M(),n=U(`${x}/pty`,{timeout:1e4,transports:["websocket"],forceNew:!0,query:{token:P().replace(/^bearer\s/,"")}});n.on("message",({code:a,data:l,type:i})=>{u.emit(i,l,a)}),T(()=>{const a=()=>{e.writeln("PTY connection closed"),c.warning("\u8FDE\u63A5\u5DF2\u65AD\u5F00",{closable:!0})};return n.on("disconnect",a),()=>{n.off("disconnect",a)}}),v(()=>{n.offAny(),n.disconnect()}),T(()=>{const a=u.on(d.PTY_MESSAGE,(l,i)=>{if(i===1e4||i===10001){const h=y.create({title:"\u9A8C\u8BC1\u5BC6\u7801",closable:!0,content:()=>t(X,{onConfirm:E=>{n.emit("pty",A(e?{cols:e.cols,rows:e.rows}:void 0,{password:E})),requestAnimationFrame(()=>{h.destroy()})}},null)})}c.info(l)});return()=>{a()}});const C=D(()=>s.value,a=>{a&&(C(),n.emit("pty",{cols:e.cols,rows:e.rows}),o=e.onData(l=>{n.emit("pty-input",l)}),u.on(d.PTY,r))});v(()=>{n.emit("pty-exit"),o?.dispose(),u.off(d.PTY,r)});const N=()=>{if(e&&e.reset(),n.connected===!1){n.io.connect(),setTimeout(()=>{n.connected?n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0):c.error("\u91CD\u8FDE Socket \u5931\u8D25")},1500);return}n.emit("pty-exit"),setTimeout(()=>{n.emit("pty",e?{cols:e.cols,rows:e.rows}:void 0)},50)},k=()=>{y.create({title:"\u8FDE\u63A5\u72B6\u6001",content:()=>t(W,null,null)})};return()=>t(H,{actionsElement:t(I,null,[t(w,{variant:"info",icon:t(F,null,null),name:"\u8FDE\u63A5\u72B6\u6001",onClick:k},null),t(w,{icon:t(j,null,null),name:"\u91CD\u65B0\u8FDE\u63A5",onClick:N},null)])},{default:()=>[t(O,{class:"!max-h-[calc(100vh-10.5rem)]",darkMode:!0,terminalOptions:{disableStdin:!1},onReady:a=>{s.value=!0,e=a}},null)]})}});const X=p({props:{onConfirm:Function},setup(e){const s=f(""),o=r=>{r.preventDefault(),e.onConfirm?.(s.value)};return()=>t(_,{onSubmit:o,class:"space-y-6 mt-6"},{default:()=>[t(R,{showPasswordOn:"mousedown",type:"password",value:s.value,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onUpdateValue:r=>{s.value=r}},null),t("div",{class:"flex justify-center"},[t(b,{round:!0,type:"primary",onClick:o},{default:()=>[m("\u786E\u8BA4")]})])]})}}),W=p(()=>{const e=f([]);return V(async()=>{const s=await Y.api.pty.record.get();e.value=s.data}),()=>{let s;return t($,{bordered:!1,class:"max-h-[70vh] overflow-auto"},{default:()=>[t(G,{bordered:!1,class:"bg-transparent"},K(s=e.value.map(o=>t(q,{key:o.startTime},{default:()=>[t("div",null,[m("\u5F00\u59CB\u4E8E "),g(o.startTime,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss")]),t("div",null,[m("IP:")," ",t(B,{trigger:"hover",ip:o.ip,triggerEl:t(b,{text:!0},{default:()=>[o.ip]})},null)]),t("div",null,[o.endTime?`\u7ED3\u675F\u4E8E ${g(o.endTime,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss")}`:"\u6CA1\u6709\u7ED3\u675F"]),t("div",null,[o.endTime&&`\u65F6\u957F\uFF1A${Math.abs(new Date(o.startTime).getTime()-new Date(o.endTime).getTime())/1e3|0}\u79D2`])]})))?s:{default:()=>[s]})]})}});export{se as default};
