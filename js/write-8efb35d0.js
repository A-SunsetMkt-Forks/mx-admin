import{H as b}from"./rounded-button-1d702d31.js";import{P as y,S as w,M as C,T as I}from"./parse-content-32575907.js";import{E as P}from"./toggle-924dbeb3.js";import{f as x,j as R,p as N,n as S,m as E,R as i,y as M,u as T,x as B,a,C as U,F as u,bm as D,I as H,W,bo as F,bn as L}from"./index-fb0722d6.js";import{U as m}from"./underline-input-7056ddc1.js";import{u as V}from"./use-parse-payload-ece1574b.js";import{i as $}from"./isString-18ac8e91.js";import{N as k}from"./FormItem-c9e50d3d.js";import{N as j}from"./InputNumber-afb5440d.js";import"./DynamicInput-adc22078.js";import"./ChevronRight-10157e1b.js";import"./Add-e00449c4.js";import"./ButtonGroup-30555a56.js";import"./Form-d67028e1.js";import"./use-async-monaco-304c7d6a.js";import"./index-22da169c.js";import"./editor.main-659b2a74.js";import"./use-save-confirm-42d7fc1a.js";import"./Switch-8d1bba52.js";import"./js-yaml-fae8e8ce.js";import"./use-react-171f0239.js";import"./throttle-f8710517.js";import"./Select-4d07810f.js";import"./Tag-d01e60dd.js";import"./index-3236b3c2.js";const ct=x(()=>{const p=R(),d=()=>({text:"",title:"",order:0,slug:"",subtitle:"",allowComment:!0,id:void 0,images:[],meta:void 0}),c=e=>V(t)(e),t=N(d()),l=S(()=>p.query.id);E(async()=>{const e=l.value;if(e&&typeof e=="string"){const n=(await i.api.pages(e).get({})).data;c(n)}});const s=M(!1),r=T(),g=B(),f=async()=>{const e=()=>{try{if(!t.title||t.title.trim().length==0)throw"\u6807\u9898\u4E3A\u7A7A";if(!t.slug)throw"\u8DEF\u5F84\u4E3A\u7A7A";return{...L(t),title:t.title.trim(),slug:t.slug.trim()}}catch(o){throw r.error(o),o}};if(l.value){if(!$(l.value))return;const o=l.value;await i.api.pages(o).put({data:e()}),r.success("\u4FEE\u6539\u6210\u529F")}else await i.api.pages.post({data:e()}),r.success("\u53D1\u5E03\u6210\u529F");g.push({name:F.ListPage,hash:"|publish"})};return()=>a(U,{actionsElement:a(u,null,[a(y,{data:t,onHandleYamlParsedMeta:e=>{const{title:o,slug:n,subtitle:v,...h}=e;t.title=o??t.title,t.slug=n??t.slug,t.subtitle=v??t.subtitle,t.meta={...h}}},null),a(b,{icon:a(D,null,null),onClick:f},null)]),footerButtonElement:a(u,null,[a("button",{onClick:()=>{s.value=!0}},[a(H,null,{default:()=>[a(w,null,null)]})])])},{default:()=>[a(C,{class:"mt-3 relative z-10",label:"\u4E0E\u4F60\u6709\u4E2A\u597D\u5FC3\u60C5~",value:t.title,onChange:e=>{t.title=e}},null),a("div",{class:"text-gray-700 pt-3"},[a(m,{value:t.subtitle,onChange:e=>void(t.subtitle=e)},null)]),a("div",{class:"text-gray-500 py-3"},[a("label",null,[`${W}/`]),a(m,{value:t.slug,onChange:e=>void(t.slug=e)},null)]),a(P,{loading:!!(l.value&&typeof t.id>"u"),onChange:e=>{t.text=e},text:t.text},null),a(I,{onUpdateShow:e=>{s.value=e},data:t,show:s.value},{default:()=>[a(k,{label:"\u9875\u9762\u987A\u5E8F"},{default:()=>[a(j,{placeholder:"",value:t.order,onUpdateValue:e=>void(t.order=e??0)},null)]})]})]})});export{ct as default};
