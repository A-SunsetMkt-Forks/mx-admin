import{f as G,Z as a,a2 as h,a4 as F,ae as I,ad as Qe,T as se,a5 as A,S as Xe,y as R,ah as ee,X as te,n as g,al as Ye,aI as Ge,am as m,V as de,Y as et,H as tt,$,bc as nt,b0 as it,ab as B,bd as at,aj as rt,E as ot,aq as lt}from"./index-c5b2c6d2.js";import{s as ne}from"./prop-46b62c35.js";import{N as st}from"./Select-e281a637.js";import{B as ie,F as ae,a as re,b as oe}from"./Forward-8553deb1.js";var le=G({name:"More",render(){return a("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"}))))}});function dt(t,n,r=9){if(n===1)return[1];if(n===2)return[1,2];const s=1,o=n;let l=t,c=t;const u=(r-5)/2;c+=Math.ceil(u),c=Math.min(Math.max(c,s+r-3),o-2),l-=Math.floor(u),l=Math.max(Math.min(l,o-r+3),s+2);let x=!1,b=!1;l>s+2&&(x=!0),c<o-2&&(b=!0);const d=[];d.push(s),x?d.push(-2):o>=s+1&&d.push(s+1);for(let p=l;p<=c;++p)d.push(p);return b?d.push(-1):c===o-2&&d[d.length-1]!==o-1&&d.push(o-1),d[d.length-1]!==o&&d.push(o),d}function ct(t,n){return t.map(r=>{switch(r){case-2:return{type:"fast-backward",active:!1};case-1:return{type:"fast-forward",active:!1};default:return r===n?{type:"page",label:r,active:!0}:{type:"page",label:r,active:!1}}})}function ut(t,n,r){const s=dt(t,n,r);return ct(s,t)}var mt=h("pagination",`
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,[h("pagination-prefix",`
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `),h("pagination-suffix",`
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `),F("> *:not(:first-child)",`
 margin: var(--n-item-margin);
 `),h("select",`
 width: var(--n-select-width);
 `),F("&.transition-disabled",[h("pagination-item","transition: none!important;")]),h("pagination-quick-jumper",`
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,[h("input",`
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]),h("pagination-item",`
 position: relative;
 cursor: pointer;
 user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `,[I("button",`
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `,[h("base-icon",`
 font-size: var(--n-button-icon-size);
 `)]),Qe("disabled",[F("&:hover",`
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
 `,[I("button",`
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)]),F("&:active",`
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `,[I("button",`
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]),I("active",`
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `,[F("&:hover",`
 background: var(--n-item-color-active-hover);
 `)])]),I("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,[I("active, button",`
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]),I("disabled",`
 cursor: not-allowed;
 `,[h("pagination-quick-jumper",`
 color: var(--n-jumper-text-color-disabled);
 `)])]);const ft=Object.assign(Object.assign({},A.props),{page:Number,defaultPage:{type:Number,default:1},itemCount:Number,pageCount:Number,defaultPageCount:{type:Number,default:1},showSizePicker:Boolean,pageSize:Number,defaultPageSize:{type:Number,default:10},pageSizes:{type:Array,default(){return[10]}},showQuickJumper:Boolean,size:{type:String,default:"medium"},disabled:Boolean,pageSlot:{type:Number,default:9},prev:Function,next:Function,prefix:Function,suffix:Function,label:Function,"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],onPageSizeChange:[Function,Array],onChange:[Function,Array]});var Ct=G({name:"Pagination",props:ft,setup(t){const{mergedComponentPropsRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:s,mergedRtlRef:o}=se(t),l=A("Pagination","-pagination",mt,nt,t,r),{localeRef:c}=Xe("Pagination"),u=R(null),x=R(null),b=R(""),d=R(t.defaultPage),p=R(t.defaultPageSize),f=ee(te(t,"page"),d),w=ee(te(t,"pageSize"),p),P=g(()=>{const{itemCount:e}=t;if(e!==void 0)return Math.max(1,Math.ceil(e/w.value));const{pageCount:i}=t;return i!==void 0?i:1}),S=R(!1),N=R(!1),V=g(()=>{const e=c.value.selectionSuffix;return t.pageSizes.map(i=>typeof i=="number"?{label:`${i} / ${e}`,value:i}:i)}),H=g(()=>{var e,i;return((i=(e=n?.value)===null||e===void 0?void 0:e.Pagination)===null||i===void 0?void 0:i.inputSize)||ne(t.size)}),D=g(()=>{var e,i;return((i=(e=n?.value)===null||e===void 0?void 0:e.Pagination)===null||i===void 0?void 0:i.selectSize)||ne(t.size)}),L=g(()=>(f.value-1)*w.value),J=g(()=>{const e=f.value*w.value-1,{itemCount:i}=t;return i!==void 0&&e>i?i:e}),W=g(()=>{const{itemCount:e}=t;return e!==void 0?e:(t.pageCount||1)*w.value}),Z=Ye("Pagination",o,r),j=()=>{it(()=>{var e;const{value:i}=u;!i||(i.classList.add("transition-disabled"),(e=u.value)===null||e===void 0||e.offsetWidth,i.classList.remove("transition-disabled"))})};function k(e){if(e===f.value)return;const{"onUpdate:page":i,onUpdatePage:v,onChange:z}=t;i&&B(i,e),v&&B(v,e),z&&B(z,e),d.value=e}function q(e){if(e===w.value)return;const{"onUpdate:pageSize":i,onUpdatePageSize:v,onPageSizeChange:z}=t;i&&B(i,e),v&&B(v,e),z&&B(z,e),p.value=e,P.value<f.value&&k(P.value)}function K(){if(t.disabled)return;const e=Math.min(f.value+1,P.value);k(e)}function Q(){if(t.disabled)return;const e=Math.max(f.value-1,1);k(e)}function X(){if(t.disabled)return;const e=Math.min(f.value+(t.pageSlot-4),P.value);k(e)}function Y(){if(t.disabled)return;const e=Math.max(f.value-(t.pageSlot-4),1);k(e)}function T(e){q(e)}function U(e){var i;if(e.code==="Enter"||e.code==="NumpadEnter"){const v=parseInt(b.value);Number.isNaN(v)||(k(Math.max(1,Math.min(v,P.value))),b.value="",(i=x.value)===null||i===void 0||i.blur())}}function O(e){if(!t.disabled)switch(e.type){case"page":k(e.label);break;case"fast-backward":Y();break;case"fast-forward":X();break}}function E(e){if(!t.disabled){switch(e.type){case"fast-backward":N.value=!0;break;case"fast-forward":S.value=!0;break;default:return}j()}}function _(e){if(!t.disabled){switch(e.type){case"fast-backward":N.value=!1;break;case"fast-forward":S.value=!1;break;default:return}j()}}function y(e){b.value=e.replace(/\D+/g,"")}Ge(()=>{f.value,w.value,j()});const C=g(()=>{const{size:e}=t,{self:{buttonBorder:i,buttonBorderHover:v,buttonBorderPressed:z,buttonIconColor:ce,buttonIconColorHover:ue,buttonIconColorPressed:me,itemTextColor:fe,itemTextColorHover:ve,itemTextColorPressed:ge,itemTextColorActive:be,itemTextColorDisabled:pe,itemColor:he,itemColorHover:xe,itemColorPressed:Ce,itemColorActive:ze,itemColorActiveHover:we,itemColorDisabled:Pe,itemBorder:Se,itemBorderHover:ke,itemBorderPressed:Ie,itemBorderActive:ye,itemBorderDisabled:Me,itemBorderRadius:Re,jumperTextColor:Fe,jumperTextColorDisabled:$e,buttonColor:Be,buttonColorHover:Ne,buttonColorPressed:je,[m("itemPadding",e)]:Te,[m("itemMargin",e)]:Ee,[m("inputWidth",e)]:_e,[m("selectWidth",e)]:Ue,[m("inputMargin",e)]:Oe,[m("selectMargin",e)]:Ae,[m("jumperFontSize",e)]:Ve,[m("prefixMargin",e)]:He,[m("suffixMargin",e)]:De,[m("itemSize",e)]:Le,[m("buttonIconSize",e)]:Je,[m("itemFontSize",e)]:We,[`${m("itemMargin",e)}Rtl`]:Ze,[`${m("inputMargin",e)}Rtl`]:qe},common:{cubicBezierEaseInOut:Ke}}=l.value;return{"--n-prefix-margin":He,"--n-suffix-margin":De,"--n-item-font-size":We,"--n-select-width":Ue,"--n-select-margin":Ae,"--n-input-width":_e,"--n-input-margin":Oe,"--n-input-margin-rtl":qe,"--n-item-size":Le,"--n-item-text-color":fe,"--n-item-text-color-disabled":pe,"--n-item-text-color-hover":ve,"--n-item-text-color-active":be,"--n-item-text-color-pressed":ge,"--n-item-color":he,"--n-item-color-hover":xe,"--n-item-color-disabled":Pe,"--n-item-color-active":ze,"--n-item-color-active-hover":we,"--n-item-color-pressed":Ce,"--n-item-border":Se,"--n-item-border-hover":ke,"--n-item-border-disabled":Me,"--n-item-border-active":ye,"--n-item-border-pressed":Ie,"--n-item-padding":Te,"--n-item-border-radius":Re,"--n-bezier":Ke,"--n-jumper-font-size":Ve,"--n-jumper-text-color":Fe,"--n-jumper-text-color-disabled":$e,"--n-item-margin":Ee,"--n-item-margin-rtl":Ze,"--n-button-icon-size":Je,"--n-button-icon-color":ce,"--n-button-icon-color-hover":ue,"--n-button-icon-color-pressed":me,"--n-button-color-hover":Ne,"--n-button-color":Be,"--n-button-color-pressed":je,"--n-button-border":i,"--n-button-border-hover":v,"--n-button-border-pressed":z}}),M=s?de("pagination",g(()=>{let e="";const{size:i}=t;return e+=i[0],e}),C,t):void 0;return{rtlEnabled:Z,mergedClsPrefix:r,locale:c,selfRef:u,jumperRef:x,mergedPage:f,showFastBackward:N,showFastForward:S,pageItems:g(()=>ut(f.value,P.value,t.pageSlot)),mergedItemCount:W,jumperValue:b,pageSizeOptions:V,mergedPageSize:w,inputSize:H,selectSize:D,mergedTheme:l,mergedPageCount:P,startIndex:L,endIndex:J,handleJumperInput:y,handleBackwardClick:Q,handleForwardClick:K,handlePageItemClick:O,handleSizePickerChange:T,handleQuickJumperKeyUp:U,handlePageItemMouseEnter:E,handlePageItemMouseLeave:_,cssVars:s?void 0:C,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const{$slots:t,mergedClsPrefix:n,disabled:r,cssVars:s,mergedPage:o,mergedPageCount:l,pageItems:c,showFastBackward:u,showFastForward:x,showSizePicker:b,showQuickJumper:d,mergedTheme:p,locale:f,inputSize:w,selectSize:P,mergedPageSize:S,pageSizeOptions:N,jumperValue:V,prev:H,next:D,prefix:L,suffix:J,label:W,handleJumperInput:Z,handleSizePickerChange:j,handleBackwardClick:k,handlePageItemClick:q,handlePageItemMouseEnter:K,handlePageItemMouseLeave:Q,handleForwardClick:X,handleQuickJumperKeyUp:Y,onRender:T}=this;T?.();const U=t.prefix||L,O=t.suffix||J,E=H||t.prev,_=D||t.next,y=W||t.label;return a("div",{ref:"selfRef",class:[`${n}-pagination`,this.themeClass,this.rtlEnabled&&`${n}-pagination--rtl`,r&&`${n}-pagination--disabled`],style:s},U?a("div",{class:`${n}-pagination-prefix`},U({page:o,pageSize:S,pageCount:l,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null,a("div",{class:[`${n}-pagination-item`,!E&&`${n}-pagination-item--button`,(o<=1||o>l||r)&&`${n}-pagination-item--disabled`],onClick:k},E?E({page:o,pageSize:S,pageCount:l,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount}):a($,{clsPrefix:n},{default:()=>this.rtlEnabled?a(ae,null):a(ie,null)})),c.map((C,M)=>{let e;switch(C.type){case"page":const i=C.label;y?e=y({type:"page",node:i,active:C.active}):e=i;break;case"fast-forward":const v=x?a($,{clsPrefix:n},{default:()=>this.rtlEnabled?a(oe,null):a(re,null)}):a($,{clsPrefix:n},{default:()=>a(le,null)});y?e=y({type:"fast-forward",node:v,active:x}):e=v;break;case"fast-backward":const z=u?a($,{clsPrefix:n},{default:()=>this.rtlEnabled?a(re,null):a(oe,null)}):a($,{clsPrefix:n},{default:()=>a(le,null)});y?e=y({type:"fast-backward",node:z,active:u}):e=z;break}return a("div",{key:M,class:[`${n}-pagination-item`,{[`${n}-pagination-item--active`]:C.active,[`${n}-pagination-item--disabled`]:r}],onClick:()=>q(C),onMouseenter:()=>K(C),onMouseleave:()=>Q(C)},e)}),a("div",{class:[`${n}-pagination-item`,!_&&`${n}-pagination-item--button`,{[`${n}-pagination-item--disabled`]:o<1||o>=l||r}],onClick:X},_?_({page:o,pageSize:S,pageCount:l,itemCount:this.mergedItemCount,startIndex:this.startIndex,endIndex:this.endIndex}):a($,{clsPrefix:n},{default:()=>this.rtlEnabled?a(ie,null):a(ae,null)})),b?a(st,{size:P,placeholder:"",options:N,value:S,disabled:r,theme:p.peers.Select,themeOverrides:p.peerOverrides.Select,onUpdateValue:j}):null,d?a("div",{class:`${n}-pagination-quick-jumper`},et(this.$slots.goto,()=>[f.goto]),a(tt,{ref:"jumperRef",value:V,onUpdateValue:Z,size:w,placeholder:"",disabled:r,theme:p.peers.Input,themeOverrides:p.peerOverrides.Input,onKeyup:Y})):null,O?a("div",{class:`${n}-pagination-suffix`},O({page:o,pageSize:S,pageCount:l,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null)}}),vt=h("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[I("color-transition",{transition:"color .3s var(--n-bezier)"}),I("depth",{color:"var(--n-color)"},[F("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),F("svg",{height:"1em",width:"1em"})]);const gt=Object.assign(Object.assign({},A.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),zt=G({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:gt,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=se(t),s=A("Icon","-icon",vt,at,t,n),o=g(()=>{const{depth:c}=t,{common:{cubicBezierEaseInOut:u},self:x}=s.value;if(c!==void 0){const{color:b,[`opacity${c}Depth`]:d}=x;return{"--n-bezier":u,"--n-color":b,"--n-opacity":d}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),l=r?de("icon",g(()=>`${t.depth||"d"}`),o,t):void 0;return{mergedClsPrefix:n,mergedStyle:g(()=>{const{size:c,color:u}=t;return{fontSize:lt(c),color:u}}),cssVars:r?void 0:o,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var t;const{$parent:n,depth:r,mergedClsPrefix:s,component:o,onRender:l,themeClass:c}=this;return!((t=n?.$options)===null||t===void 0)&&t._n_icon__&&rt("icon","don't wrap `n-icon` inside `n-icon`"),l?.(),a("i",ot(this.$attrs,{role:"img",class:[`${s}-icon`,c,{[`${s}-icon--depth`]:r,[`${s}-icon--color-transition`]:r!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?a(o):this.$slots)}});export{zt as N,Ct as a};
