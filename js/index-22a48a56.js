import{a as f,u as g}from"./use-async-monaco-4c34ac42.js";import{d as b,ee as s,x as y,w as S,h as a,dt as p,N as h,n as N,R as w}from"./index-703972d3.js";import{T}from"./two-col-738e2334.js";import{E as m}from"./types-4fa065e6.js";import{N as C}from"./Form-249453f6.js";import{N as v}from"./FormItem-a10558b4.js";import{N as i}from"./Select-c2e1cbd3.js";import"./index-bd7777ac.js";import"./editor.main-759b9211.js";import"./use-save-confirm-11723bdc.js";import"./index-1a30543b.js";import"./Tag-c770bd2c.js";const E=t=>{switch(t){case"objectId":return((o=Math,r=Date,n=16,l=u=>o.floor(u).toString(n))=>l(r.now()/1e3)+" ".repeat(n).replace(/./g,()=>l(o.random()*n)))();case"now":return new Date().toISOString();case"randomtext":return btoa(Math.random().toString()).substring(10,5);case"randomnumber":return Math.floor(Math.random()*1e4);default:return"{{"+t+"}}"}};var P=b({setup(){const t=s("debug-event-name",m.POST_CREATE),o=s("debug-event",{}),r=s("debug-event-type","web"),n=f({value:o.value[t.value]??""}),l=y();S(()=>t.value,e=>{u.editor.setValue(o.value[e]||"")});const u=g(l,n,e=>{o.value={...o.value,[t.value]:e}},{language:"json",unSaveConfirm:!1}),c=async()=>{const e=o.value[t.value]?.replace(/(\{\{(.*?)\}\})/g,(M,x,d)=>E(d))??"";console.log(e),w.api.debug.events.post({params:{type:r.value,event:t.value},data:JSON.parse(e)})};return()=>a(N,null,a(T,null,a(p,{span:"12"},a(C,null,a(v,{label:"Type"},a(i,{tag:!0,filterable:!0,value:r.value,onUpdateValue:e=>void(r.value=e),options:["web","all","admin"].map(e=>({value:e,label:e}))})),a(v,{label:"Event"},a(i,{tag:!0,filterable:!0,value:t.value,onUpdateValue:e=>void(t.value=e),options:Object.keys(m).map(e=>({value:e,label:e}))}))),a("div",null,a(h,{type:"primary",onClick:c},"\u6D4B\u8BD5"))),a(p,{span:"24"},a("div",{class:"h-[calc(100vh-20rem)] relative"},a("div",{ref:l,class:"h-full"})))))}});export{P as default};
