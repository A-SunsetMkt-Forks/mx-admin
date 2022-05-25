import{a2 as c,a4 as g,a3 as z,aO as I,ae as X,ad as ee,f as x,T as R,a5 as j,a6 as _,Z as a,an as te,ao as re,Q as ie,el as se,U as q,bW as ne,n as y,am as v,V as ae,_ as E,Y as U,aG as oe,$ as P,em as le,cH as ce,g as de,dN as ue,p as T,m as pe,R as w,y as b,a as e,b$ as fe,c3 as ve,H as u,d as k,N as F,b as S,u as me}from"./index-c5b2c6d2.js";import{F as he}from"./Tag-11275d89.js";import{N as A}from"./Form-6628a9b5.js";import{N as d}from"./FormItem-4b2417f3.js";import{N as ge}from"./DynamicTags-1244b16a.js";import"./index-77a21536.js";import"./prop-46b62c35.js";import"./Add-a6216969.js";var xe=c("steps",`
 width: 100%;
 display: flex;
`,[c("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[g("&:last-child",[c("step-splitor","display: none;")])]),c("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),c("step-content","flex: 1;",[c("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[z("title",`
 white-space: nowrap;
 flex: 0;
 `)]),z("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),c("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[c("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[z("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[I()]),c("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[I()]),c("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[I()])])]),X("vertical","flex-direction: column;",[ee("show-description",[g(">",[c("step","padding-bottom: 8px;")])]),g(">",[c("step","margin-bottom: 16px;",[g("&:last-child","margin-bottom: 0;"),g(">",[c("step-indicator",[g(">",[c("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),c("step-content",[z("description","margin-top: 8px;")])])])])])]);function be(r,t){return typeof r!="object"||r===null||Array.isArray(r)?null:(r.props||(r.props={}),r.props.internalIndex=t+1,r)}function ze(r){return r.map((t,s)=>be(t,s))}const ye=Object.assign(Object.assign({},j.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean}),H=ie("n-steps");var we=x({name:"Steps",props:ye,setup(r,{slots:t}){const{mergedClsPrefixRef:s}=R(r),n=j("Steps","-steps",xe,se,r,s);return _(H,{props:r,mergedThemeRef:n,mergedClsPrefixRef:s,stepsSlots:t}),{mergedClsPrefix:s}},render(){const{mergedClsPrefix:r}=this;return a("div",{class:[`${r}-steps`,this.vertical&&`${r}-steps--vertical`]},ze(te(re(this))))}});const Se={status:String,title:String,description:String,internalIndex:{type:Number,default:0}};var $=x({name:"Step",props:Se,setup(r){const t=q(H,null);t||ne("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:s}=R(),{props:n,mergedThemeRef:o,mergedClsPrefixRef:i,stepsSlots:C}=t,l=y(()=>n.vertical),N=y(()=>{const{status:p}=r;if(p)return p;{const{internalIndex:f}=r,{current:h}=n;if(h===void 0)return"process";if(f<h)return"finish";if(f===h)return n.status||"process";if(f>h)return"wait"}return"process"}),B=y(()=>{const{value:p}=N,{size:f}=n,{common:{cubicBezierEaseInOut:h},self:{stepHeaderFontWeight:M,[v("stepHeaderFontSize",f)]:O,[v("indicatorIndexFontSize",f)]:D,[v("indicatorSize",f)]:W,[v("indicatorIconSize",f)]:K,[v("indicatorTextColor",p)]:G,[v("indicatorBorderColor",p)]:L,[v("headerTextColor",p)]:J,[v("splitorColor",p)]:Q,[v("indicatorColor",p)]:Y,[v("descriptionTextColor",p)]:Z}}=o.value;return{"--n-bezier":h,"--n-description-text-color":Z,"--n-header-text-color":J,"--n-indicator-border-color":L,"--n-indicator-color":Y,"--n-indicator-icon-size":K,"--n-indicator-index-font-size":D,"--n-indicator-size":W,"--n-indicator-text-color":G,"--n-splitor-color":Q,"--n-step-header-font-size":O,"--n-step-header-font-weight":M}}),m=s?ae("step",y(()=>{const{value:p}=N,{size:f}=n;return`${p[0]}${f[0]}`}),B,n):void 0;return{stepsSlots:C,mergedClsPrefix:i,vertical:l,mergedStatus:N,cssVars:s?void 0:B,themeClass:m?.themeClass,onRender:m?.onRender}},render(){const{mergedClsPrefix:r,onRender:t}=this,s=E(this.$slots.default,n=>{const o=n||this.description;return o?a("div",{class:`${r}-step-content__description`},o):null});return t?.(),a("div",{class:[`${r}-step`,this.themeClass,s&&`${r}-step--show-description`,`${r}-step--${this.mergedStatus}-status`],style:this.cssVars},a("div",{class:`${r}-step-indicator`},a("div",{class:`${r}-step-indicator-slot`},a(oe,null,{default:()=>E(this.$slots.icon,n=>{const{mergedStatus:o,stepsSlots:i}=this;return o==="finish"||o==="error"?o==="finish"?a(P,{clsPrefix:r,key:"finish"},{default:()=>U(i["finish-icon"],()=>[a(he,null)])}):o==="error"?a(P,{clsPrefix:r,key:"error"},{default:()=>U(i["error-icon"],()=>[a(le,null)])}):null:n||a("div",{key:this.internalIndex,class:`${r}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?a("div",{class:`${r}-step-splitor`}):null),a("div",{class:`${r}-step-content`},a("div",{class:`${r}-step-content-header`},a("div",{class:`${r}-step-content-header__title`},U(this.$slots.title,()=>[this.title])),this.vertical?null:a("div",{class:`${r}-step-splitor`})),s))}});const Ce="_full_1tlcw_1";var Ne={full:Ce};const Ie=()=>q("configs");var _e=x({setup(){ce(()=>{de()&&ue()});const r=T({});pe(async()=>{const s=await w.api.init.configs.default.get();Object.assign(r,s)}),_("configs",r);const t=b(0);return()=>e("div",{class:Ne.full},[e(fe,{title:"\u521D\u59CB\u5316",class:"modal-card sm m-auto form-card"},{default:()=>[e(we,{size:"small",current:t.value},{default:()=>[e($,{status:t.value>0?"finish":"process",title:"\u7AD9\u70B9\u8BBE\u7F6E",description:"\u5148\u8BBE\u7F6E\u4E00\u4E0B\u7AD9\u70B9\u76F8\u5173\u914D\u7F6E\u5427"},null),e($,{status:t.value>1?"finish":t.value<1?"wait":"process",title:"\u4E3B\u4EBA\u4FE1\u606F",description:"\u8BF7\u544A\u8BC9\u4F60\u7684\u540D\u5B57"},null),e($,{status:t.value>2?"finish":t.value<2?"wait":"process",title:"(\u0E51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727",description:"\u4E00\u5207\u5C31\u7EEA\u4E86"},null)]}),e("div",{class:"mt-[3.5rem]"},[JSON.stringify(r)==="{}"?e("div",{class:"text-center py-4"},[e(ve,null,null)]):a([Ue,$e,Te][t.value],{onNext(){t.value++}})])]})])}});const V={onNext:{type:Function,required:!0}},Ue=x({props:V,setup(r){const t=Ie(),s=b(t?.seo?.title||""),n=b(t?.seo?.keywords),o=b(t?.seo?.description||""),i=T({adminUrl:`${location.origin}/qaqdmin`,serverUrl:`${location.origin}/api/v2`,webUrl:location.origin,wsUrl:location.origin}),C=async()=>{await Promise.all([w.api.init.configs("seo").patch({data:{title:s.value,keywords:n.value,description:o.value}}),w.api.init.configs("url").patch({data:{...i}})]),r.onNext()};return()=>e(A,null,{default:()=>[e(d,{label:"\u7AD9\u70B9\u6807\u9898",required:!0},{default:()=>[e(u,{value:s.value,onUpdateValue:l=>void(s.value=l)},null)]}),e(d,{label:"\u7AD9\u70B9\u63CF\u8FF0",required:!0},{default:()=>[e(u,{value:o.value,onUpdateValue:l=>void(o.value=l)},null)]}),e(d,{label:"\u5173\u952E\u5B57"},{default:()=>[e(ge,{value:n.value,onUpdateValue:l=>void(n.value=l)},null)]}),e(d,{label:"\u524D\u7AEF\u5730\u5740"},{default:()=>[e(u,{value:i.webUrl,onInput:l=>void(i.webUrl=l)},null)]}),e(d,{label:"API \u5730\u5740"},{default:()=>[e(u,{value:i.serverUrl,onInput:l=>void(i.serverUrl=l)},null)]}),e(d,{label:"\u540E\u53F0\u5730\u5740"},{default:()=>[e(u,{value:i.adminUrl,onInput:l=>void(i.adminUrl=l)},null)]}),e(d,{label:"Gateway \u5730\u5740"},{default:()=>[e(u,{value:i.wsUrl,onInput:l=>void(i.wsUrl=l)},null)]}),e(k,{justify:"end"},{default:()=>[e(F,{onClick:C,round:!0,type:"primary"},{default:()=>[S("\u4E0B\u4E00\u6B65")]})]})]})}}),$e=x({props:V,setup(r){const t=T({}),s=b(""),n=me(),o=async()=>{if(s.value!==t.password){n.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4");return}await w.api.user.register.post({data:{...t}}),r.onNext()};return()=>e(A,null,{default:()=>[e(d,{label:"\u4F60\u7684\u540D\u5B57 (\u767B\u5F55\u51ED\u8BC1)",required:!0},{default:()=>[e(u,{value:t.username,onUpdateValue:i=>{t.username=i}},null)]}),e(d,{label:"\u6635\u79F0"},{default:()=>[e(u,{value:t.name,onUpdateValue:i=>{t.name=i}},null)]}),e(d,{label:"\u90AE\u7BB1",required:!0},{default:()=>[e(u,{value:t.mail,onUpdateValue:i=>{t.mail=i}},null)]}),e(d,{label:"\u5BC6\u7801",required:!0},{default:()=>[e(u,{value:t.password,type:"password",onUpdateValue:i=>{t.password=i}},null)]}),e(d,{label:"\u786E\u8BA4\u5BC6\u7801",required:!0},{default:()=>[e(u,{value:s.value,type:"password",onUpdateValue:i=>{s.value=i}},null)]}),e(d,{label:"\u4E2A\u4EBA\u9996\u9875"},{default:()=>[e(u,{value:t.url,onUpdateValue:i=>{t.url=i}},null)]}),e(d,{label:"\u5934\u50CF"},{default:()=>[e(u,{value:t.avatar,onUpdateValue:i=>{t.avatar=i}},null)]}),e(d,{label:"\u4E2A\u4EBA\u4ECB\u7ECD"},{default:()=>[e(u,{value:t.introduce,onUpdateValue:i=>{t.introduce=i}},null)]}),e(k,{justify:"end"},{default:()=>[e(F,{disabled:!t.username||!t.username||!t.password||!s.value,onClick:o,round:!0,type:"primary"},{default:()=>[S("\u4E0B\u4E00\u6B65")]})]})]})}}),Te=x({props:V,setup(r){return()=>e(k,{class:"text-center",vertical:!0},{default:()=>[e("span",{class:"text-base"},[S("\u4F60\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u7684\u6B65\u9AA4\uFF0C\u5E72\u5F97\u6F02\u4EAE\u3002")]),e(F,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),location.reload()}},{default:()=>[S("LINK START")]})]})}});export{_e as default};
