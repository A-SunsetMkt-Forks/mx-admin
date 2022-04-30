import{c as m,g as E,G as d,h as a,N as f,a as k,r as h,b as l}from"./index-703972d3.js";import{l as N}from"./index-f6a46034.js";import{E as s}from"./types-4fa065e6.js";class g{constructor(){this.initNotice()}initNotice(){return new Promise((o,t)=>{if(!("Notification"in window))t(new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u53D1\u9001\u901A\u77E5"));else if(Notification.permission!=="denied")Notification.requestPermission().then(i=>i==="granted"?o(!0):t(new Error("\u5DF2\u62D2\u7EDD\u901A\u77E5")));else{if(Notification.permission==="denied")return t(new Error("\u5DF2\u62D2\u7EDD\u901A\u77E5"));t(!0)}})}notice(o,t,i={}){return new Promise(e=>{this.initNotice().then(n=>{if(n&&!document.hasFocus()){const r=new Notification(o,{body:t,...i});e(r)}})})}}const u={get warning(){return window.notification.warning},get warn(){return window.notification.warning},get success(){return window.notification.success},get error(){return window.notification.error},get info(){return window.notification.info}};class B{constructor(){this.#t=m.title,this.#e=new g,this.isInit=!1}get socket(){return this._socket}#t;#e;initIO(){if(this.isInit)return;this.destory();const o=E();!o||(this._socket=N(d+"/admin",{timeout:1e4,transports:["websocket"],forceNew:!0,query:{token:o.replace(/^bearer\s/,"")}}),this.socket.on("message",t=>{if(typeof t!="string")return this.handleEvent(t.type,t.data,t.code);const{data:i,type:e,code:n}=JSON.parse(t);this.handleEvent(e,i,n)}),this.socket.on("connect_error",()=>{}),this.socket.io.on("error",()=>{}),this.socket.io.on("reconnect",()=>{}),this.socket.io.on("reconnect_attempt",()=>{}),this.socket.io.on("reconnect_failed",()=>{}),this.socket.on("disconnect",()=>{let i=setInterval(()=>{this.socket.connected===!1?this.socket.io.connect():i=clearInterval(i)},2e3)}),this.isInit=!0)}handleEvent(o,t,i){switch(o){case s.GATEWAY_CONNECT:break;case s.GATEWAY_DISCONNECT:{u.warning(t);break}case s.AUTH_FAILED:{console.log("\u7B49\u5F85\u767B\u9646\u4E2D..."),this.socket.close();break}case s.COMMENT_CREATE:{const e=t.author+": "+t.text,n=()=>{h.push({name:"comment"}),r.destroy()},r=u.success({title:"\u65B0\u7684\u8BC4\u8BBA",content:e,action(){return a(k,{justify:"end"},a(f,{onClick:n,type:"primary",round:!0,ghost:!0},"\u67E5\u770B"))}});this.#e.notice(this.#t+" \u6536\u5230\u65B0\u7684\u8BC4\u8BBA",e).then(c=>{!c||(c.onclick=()=>{document.hasFocus()?n():window.open(h.resolve({name:"comment"}).href)})});break}case s.ADMIN_NOTIFICATION:{const{type:e,message:n}=t;u[e]({content:n});break}case s.CONTENT_REFRESH:{u.warning({content:"\u6570\u636E\u5E93\u6709\u53D8\u52A8, \u5C06\u5728 1 \u79D2\u540E\u91CD\u8F7D\u9875\u9762"}),setTimeout(()=>{location.reload()},1e3);break}case s.LINK_APPLY:{const e=t.name,n=()=>{h.push({name:"friends"}),r.destroy()},r=u.success({title:"\u65B0\u7684\u53CB\u94FE\u7533\u8BF7",content:e,action(){return a(k,{justify:"end"},a(f,{onClick:n,type:"primary",round:!0,ghost:!0},"\u67E5\u770B"))}});this.#e.notice(this.#t+" \u6536\u5230\u65B0\u7684\u53CB\u94FE\u7533\u8BF7",e).then(c=>{!c||(c.onclick=()=>{document.hasFocus()?n():window.open("/")})});break}}l.emit(o,t,i)}destory(){!this.socket||(this.socket.disconnect(),this.socket.off("message"),this.socket.offAny(),this._socket=null,this.isInit=!1)}}const A=new B;window.socket=A;export{A as socket};
