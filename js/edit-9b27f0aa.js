import{H as F}from"./rounded-button-11cc7b25.js";import{E as C}from"./toggle-93a59bf0.js";import{d as g,q as D,h as a,db as $,v as b,N as R,y as p,F as j,f as N,t as P,l as B,k,j as q,R as v,cX as A,m as G,bj as S,bi as V}from"./index-deb90793.js";import{u as M}from"./use-parse-payload-2fb30452.js";import{i as T}from"./isString-32ae002f.js";import{t as H}from"./transform-93122cbd.js";import{N as L}from"./Form-3cef986e.js";import{N as i}from"./FormItem-212114e6.js";import{N as W}from"./DynamicTags-47d793b3.js";import"./use-react-69862870.js";import"./use-save-confirm-7212820f.js";import"./throttle-6cb162e2.js";import"./InputNumber-3b987c65.js";import"./Add-4268deaf.js";import"./Switch-319d682b.js";import"./Select-85b670fe.js";import"./Tag-5d98a870.js";import"./_arrayEach-2ff48152.js";import"./index-0727585f.js";const w="https://api.github.com/",_=(l,s)=>fetch(`${w}repos/${l}/${s}`).then(r=>r.json()),K=(l,s)=>fetch(`${w}repos/${l}/${s}/readme`).then(r=>r.json()).catch(r=>null).then(r=>{if(r){const m=(()=>{const t=r.download_url.split("/"),u=t.pop(),c=t.pop();return`https://fastly.jsdelivr.net/gh/${l}/${s}@${c}/${u}`})();return fetch(m).then(t=>t.text())}return null}),O=g({props:{onData:{type:Function,required:!0},defaultValue:{type:String}},setup(l){const s=D(),r=()=>{const m=s.create({title:"\u4ECE Github \u89E3\u6790",content:()=>{const t=g({setup(){const u=b(l.defaultValue??""),c=b(!1),h=async()=>{c.value=!0;const o=u.value.replace(/\.git$/,"").replace(/^https?:\/\/github.com\//,""),[n,d]=o.split("/"),[f,E]=await Promise.all([_(n,d),K(n,d)]);l.onData(f,E),c.value=!1,requestAnimationFrame(()=>{m.destroy()})};return()=>a(j,null,a(p,{onKeydown:e=>{e.code==="Enter"&&h()},class:"my-4",value:u.value,placeholder:"\u5728\u6B64\u8F93\u5165\u9879\u76EE\u5730\u5740",onUpdateValue:e=>void(u.value=e)}),a("div",{class:"flex space-x-4 justify-end"},a(R,{type:"primary",round:!0,onClick:h,loading:c.value},"\u83B7\u53D6")))}});return a(t,null)}})};return()=>a(F,{color:"#25292E",icon:a($,null),name:"\u4ECE GitHub \u83B7\u53D6",onClick:r})}}),me=g({setup(){const l=N(),s=P(),r=()=>({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:"",id:void 0}),m=e=>M(t)(e),t=B(r()),u=k(()=>l.query.id);q(async()=>{const e=u.value;if(e&&typeof e=="string"){const n=(await v.api.projects(e).get({})).data;m(n)}});const c=async()=>{const e=()=>{try{if(!t.text||t.text.trim().length==0)throw"\u5185\u5BB9\u4E3A\u7A7A";return{...H(V(t),(o,n,d)=>(o[d]=typeof n>"u"?null:typeof n=="string"&&n.length==0?"":n,o)),text:t.text.trim()}}catch(o){throw message.error(o),o}};if(u.value){if(!T(u.value))return;const o=u.value;await v.api.projects(o).put({data:e()}),message.success("\u4FEE\u6539\u6210\u529F")}else await v.api.projects.post({data:e()}),message.success("\u53D1\u5E03\u6210\u529F");s.push({name:S.ListProject})},h=(e,o)=>{const{html_url:n,homepage:d,description:f}=e;Object.assign(t,{description:f,projectUrl:n,previewUrl:d,images:(U=>{const I=/(?<=!\[.*\]\()(.+)(?=\))/g,y=[];for(const x of U.matchAll(I))y.push(x[0]);return y})(o||""),name:e.name,text:o||""})};return()=>a(G,{actionsElement:a(j,null,a(O,{onData:h,defaultValue:t.projectUrl}),a(F,{variant:"primary",onClick:c,icon:a(A,null)}))},a(L,{labelWidth:"7rem",labelPlacement:"left",labelAlign:"left"},a(i,{label:"\u9879\u76EE\u540D\u79F0",required:!0},a(p,{autofocus:!0,placeholder:"",value:t.name,onInput:e=>void(t.name=e)})),a(i,{label:"\u6587\u6863\u5730\u5740"},a(p,{placeholder:"",value:t.docUrl,onInput:e=>void(t.docUrl=e)})),a(i,{label:"\u9884\u89C8\u5730\u5740"},a(p,{placeholder:"",value:t.previewUrl,onInput:e=>void(t.previewUrl=e)})),a(i,{label:"\u9879\u76EE\u5730\u5740"},a(p,{placeholder:"",value:t.projectUrl,onInput:e=>void(t.projectUrl=e)})),a(i,{label:"\u9879\u76EE\u63CF\u8FF0",required:!0},a(p,{placeholder:"",value:t.description,onInput:e=>void(t.description=e)})),a(i,{label:"\u9879\u76EE\u56FE\u6807"},a(p,{placeholder:"",value:t.avatar,onInput:e=>void(t.avatar=e)})),a(i,{label:"\u9884\u89C8\u56FE\u7247"},a(W,{round:!0,value:t.images,onUpdateValue:e=>void(t.images=e)})),a(i,{label:"\u6B63\u6587",required:!0},a("div",{class:"w-full"},a(C,{unSaveConfirm:!1,class:"h-80 w-full",loading:!!(u.value&&!t.id),onChange:e=>{t.text=e},text:t.text})))))}});export{me as default};
