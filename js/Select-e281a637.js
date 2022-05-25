import{m as qe,aT as Ye,aU as sn,f as re,Z as l,a2 as y,a3 as T,a4 as fe,T as dn,a5 as le,S as un,U as Ge,aV as Dn,n as S,am as Q,V as ke,$ as cn,aW as Vn,aX as Ze,ai as Ke,av as fn,aw as ye,ae as D,ad as We,az as hn,X as H,aY as jn,y as O,aZ as Kn,w as ze,ap as Hn,a_ as Xe,a6 as Je,a$ as Wn,_ as Un,aH as qn,ar as Gn,aK as Zn,Y as Yn,aq as Xn,ax as Be,b0 as vn,b1 as Jn,aI as Qn,b2 as et,b3 as Qe,L as en,F as nn,ah as tn,aA as nt,b4 as tt,ag as ot,b5 as it,b6 as Ue,as as lt,at as rt,au as at,b7 as st,b8 as dt,b9 as on,ba as ut,ab as q}from"./index-c5b2c6d2.js";import{F as ct,N as He}from"./Tag-11275d89.js";function ft(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function pn(e,i){i&&(qe(()=>{const{value:r}=e;r&&Ye.registerHandler(r,i)}),sn(()=>{const{value:r}=e;r&&Ye.unregisterHandler(r)}))}var ht=re({name:"Empty",render(){return l("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),l("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),vt=re({props:{onFocus:Function,onBlur:Function},setup(e){return()=>l("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),pt=y("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[T("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[fe("+",[T("description",`
 margin-top: 8px;
 `)])]),T("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),T("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const gt=Object.assign(Object.assign({},le.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var bt=re({name:"Empty",props:gt,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:r}=dn(e),c=le("Empty","-empty",pt,Vn,e,i),{localeRef:v}=un("Empty"),g=Ge(Dn,null),f=S(()=>{var h,C,R;return(h=e.description)!==null&&h!==void 0?h:(R=(C=g?.mergedComponentPropsRef.value)===null||C===void 0?void 0:C.Empty)===null||R===void 0?void 0:R.description}),s=S(()=>{var h,C;return((C=(h=g?.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||C===void 0?void 0:C.renderIcon)||(()=>l(ht,null))}),P=S(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:C},self:{[Q("iconSize",h)]:R,[Q("fontSize",h)]:w,textColor:p,iconColor:M,extraTextColor:N}}=c.value;return{"--n-icon-size":R,"--n-font-size":w,"--n-bezier":C,"--n-text-color":p,"--n-icon-color":M,"--n-extra-text-color":N}}),x=r?ke("empty",S(()=>{let h="";const{size:C}=e;return h+=C[0],h}),P,e):void 0;return{mergedClsPrefix:i,mergedRenderIcon:s,localizedDescription:S(()=>f.value||v.value.description),cssVars:r?void 0:P,themeClass:x?.themeClass,onRender:x?.onRender}},render(){const{$slots:e,mergedClsPrefix:i,onRender:r}=this;return r?.(),l("div",{class:[`${i}-empty`,this.themeClass],style:this.cssVars},this.showIcon?l("div",{class:`${i}-empty__icon`},e.icon?e.icon():l(cn,{clsPrefix:i},{default:this.mergedRenderIcon})):null,this.showDescription?l("div",{class:`${i}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?l("div",{class:`${i}-empty__extra`},e.extra()):null)}});const mt=l(ct);function wt(e,i){return l(fn,{name:"fade-in-scale-up-transition"},{default:()=>e?l(cn,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>mt}):null})}var ln=re({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:r,multipleRef:c,valueSetRef:v,renderLabelRef:g,renderOptionRef:f,handleOptionClick:s,handleOptionMouseEnter:P}=Ge(Ze),x=Ke(()=>{const{value:w}=r;return w?e.tmNode.key===w.key:!1});function h(w){const{tmNode:p}=e;p.disabled||s(w,p)}function C(w){const{tmNode:p}=e;p.disabled||P(w,p)}function R(w){const{tmNode:p}=e,{value:M}=x;p.disabled||M||P(w,p)}return{multiple:c,isGrouped:Ke(()=>{const{tmNode:w}=e,{parent:p}=w;return p&&p.rawNode.type==="group"}),isPending:x,isSelected:Ke(()=>{const{value:w}=i,{value:p}=c;if(w===null)return!1;const M=e.tmNode.rawNode.value;if(p){const{value:N}=v;return N.has(M)}else return w===M}),renderLabel:g,renderOption:f,handleMouseMove:R,handleMouseEnter:C,handleClick:h}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:r,isPending:c,isGrouped:v,multiple:g,renderOption:f,renderLabel:s,handleClick:P,handleMouseEnter:x,handleMouseMove:h}=this,R=wt(g&&r,e),w=s?[s(i,r),R]:[ye(i.label,i,r),R],p=l("div",{class:[`${e}-base-select-option`,i.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:r,[`${e}-base-select-option--grouped`]:v,[`${e}-base-select-option--pending`]:c}],style:i.style,onClick:P,onMouseenter:x,onMousemove:h},l("div",{class:`${e}-base-select-option__content`},w));return i.render?i.render({node:p,option:i,selected:r}):f?f({node:p,option:i,selected:r}):p}}),rn=re({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i}=Ge(Ze);return{renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:r,tmNode:{rawNode:c}}=this,v=i?i(c,!1):ye(c.label,c,!1),g=l("div",{class:`${e}-base-select-group-header`},v);return c.render?c.render({node:g,option:c}):r?r({node:g,option:c,selected:!1}):g}}),yt=y("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[D("multiple",[y("base-select-option",`
 padding-right: 28px;
 `)]),y("scrollbar",`
 max-height: var(--n-height);
 `),y("virtual-list",`
 max-height: var(--n-height);
 `),y("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[T("content",`
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),y("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),y("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),T("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),T("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),T("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),y("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),y("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[fe("&:active",`
 color: var(--n-option-text-color-pressed);
 `),D("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),D("pending",`
 background-color: var(--n-option-color-pending);
 `),D("selected",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-active);
 `),D("disabled",`
 cursor: not-allowed;
 `,[We("selected",`
 color: var(--n-option-text-color-disabled);
 `),D("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),T("check",`
 font-size: 16px;
 position: absolute;
 right: 8px;
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[hn({enterScale:"0.5"})])])]),xt=re({name:"InternalSelectMenu",props:Object.assign(Object.assign({},le.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const i=le("InternalSelectMenu","-internal-select-menu",yt,jn,e,H(e,"clsPrefix")),r=O(null),c=O(null),v=O(null),g=S(()=>e.treeMate.getFlattenedNodes()),f=S(()=>Kn(g.value)),s=O(null);function P(){const{treeMate:o}=e;let d=null;const{value:k}=e;k===null?d=o.getFirstAvailableNode():(e.multiple?d=o.getNode((k||[])[(k||[]).length-1]):d=o.getNode(k),(!d||d.disabled)&&(d=o.getFirstAvailableNode())),j(d||null)}function x(){const{value:o}=s;o&&!e.treeMate.getNode(o.key)&&(s.value=null)}let h;ze(()=>e.show,o=>{o?h=ze(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?P():x(),vn(se)):x()},{immediate:!0}):h?.()},{immediate:!0}),sn(()=>{h?.()});const C=S(()=>Hn(i.value.self[Q("optionHeight",e.size)])),R=S(()=>Xe(i.value.self[Q("padding",e.size)])),w=S(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=S(()=>{const o=g.value;return o&&o.length===0});function M(o){const{onToggle:d}=e;d&&d(o)}function N(o){const{onScroll:d}=e;d&&d(o)}function B(o){var d;(d=v.value)===null||d===void 0||d.sync(),N(o)}function W(){var o;(o=v.value)===null||o===void 0||o.sync()}function G(){const{value:o}=s;return o||null}function U(o,d){d.disabled||j(d,!1)}function E(o,d){d.disabled||M(d)}function L(o){var d;Be(o,"action")||(d=e.onKeyup)===null||d===void 0||d.call(e,o)}function V(o){var d;Be(o,"action")||(d=e.onKeydown)===null||d===void 0||d.call(e,o)}function ae(o){var d;(d=e.onMousedown)===null||d===void 0||d.call(e,o),!e.focusable&&o.preventDefault()}function Z(){const{value:o}=s;o&&j(o.getNext({loop:!0}),!0)}function z(){const{value:o}=s;o&&j(o.getPrev({loop:!0}),!0)}function j(o,d=!1){s.value=o,d&&se()}function se(){var o,d;const k=s.value;if(!k)return;const X=f.value(k.key);X!==null&&(e.virtualScroll?(o=c.value)===null||o===void 0||o.scrollTo({index:X}):(d=v.value)===null||d===void 0||d.scrollTo({index:X,elSize:C.value}))}function he(o){var d,k;!((d=r.value)===null||d===void 0)&&d.contains(o.target)&&((k=e.onFocus)===null||k===void 0||k.call(e,o))}function ee(o){var d,k;!((d=r.value)===null||d===void 0)&&d.contains(o.relatedTarget)||(k=e.onBlur)===null||k===void 0||k.call(e,o)}Je(Ze,{handleOptionMouseEnter:U,handleOptionClick:E,valueSetRef:w,multipleRef:H(e,"multiple"),valueRef:H(e,"value"),renderLabelRef:H(e,"renderLabel"),renderOptionRef:H(e,"renderOption"),pendingTmNodeRef:s}),Je(Wn,r),qe(()=>{const{value:o}=v;o&&o.sync()});const ve=S(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:d},self:{height:k,borderRadius:X,color:xe,groupHeaderTextColor:pe,actionDividerColor:ge,optionTextColorPressed:te,optionTextColor:A,optionTextColorDisabled:be,optionTextColorActive:oe,optionOpacityDisabled:Ce,optionCheckColor:Oe,actionTextColor:Se,optionColorPending:de,optionColorActive:ue,loadingColor:Re,loadingSize:Me,[Q("optionFontSize",o)]:Te,[Q("optionHeight",o)]:me,[Q("optionPadding",o)]:ce}}=i.value;return{"--n-height":k,"--n-action-divider-color":ge,"--n-action-text-color":Se,"--n-bezier":d,"--n-border-radius":X,"--n-color":xe,"--n-option-font-size":Te,"--n-group-header-text-color":pe,"--n-option-check-color":Oe,"--n-option-color-pending":de,"--n-option-color-active":ue,"--n-option-height":me,"--n-option-opacity-disabled":Ce,"--n-option-text-color":A,"--n-option-text-color-active":oe,"--n-option-text-color-disabled":be,"--n-option-text-color-pressed":te,"--n-option-padding":ce,"--n-option-padding-left":Xe(ce,"left"),"--n-loading-color":Re,"--n-loading-size":Me}}),{inlineThemeDisabled:Y}=e,K=Y?ke("internal-select-menu",S(()=>e.size[0]),ve,e):void 0,ne={selfRef:r,next:Z,prev:z,getPendingTmNode:G};return pn(r,e.onResize),Object.assign({mergedTheme:i,virtualListRef:c,scrollbarRef:v,itemSize:C,padding:R,flattenedNodes:g,empty:p,virtualListContainer(){const{value:o}=c;return o?.listElRef},virtualListContent(){const{value:o}=c;return o?.itemsElRef},doScroll:N,handleFocusin:he,handleFocusout:ee,handleKeyUp:L,handleKeyDown:V,handleMouseDown:ae,handleVirtualListResize:W,handleVirtualListScroll:B,cssVars:Y?void 0:ve,themeClass:K?.themeClass,onRender:K?.onRender},ne)},render(){const{$slots:e,virtualScroll:i,clsPrefix:r,mergedTheme:c,themeClass:v,onRender:g}=this;return g?.(),l("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${r}-base-select-menu`,v,this.multiple&&`${r}-base-select-menu--multiple`],style:[{width:Xn(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?l("div",{class:`${r}-base-select-menu__loading`},l(qn,{clsPrefix:r,strokeWidth:20})):this.empty?l("div",{class:`${r}-base-select-menu__empty`,"data-empty":!0},Yn(e.empty,()=>[l(bt,{theme:c.peers.Empty,themeOverrides:c.peerOverrides.Empty})])):l(Gn,{ref:"scrollbarRef",theme:c.peers.Scrollbar,themeOverrides:c.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?l(Zn,{ref:"virtualListRef",class:`${r}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?l(rn,{key:f.key,clsPrefix:r,tmNode:f}):f.ignored?null:l(ln,{clsPrefix:r,key:f.key,tmNode:f})}):l("div",{class:`${r}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?l(rn,{key:f.key,clsPrefix:r,tmNode:f}):l(ln,{clsPrefix:r,key:f.key,tmNode:f})))}),Un(e.action,f=>f&&[l("div",{class:`${r}-base-select-menu__action`,"data-action":!0,key:"action"},f),l(vt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Ct=fe([y("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[y("base-loading",`
 color: var(--n-loading-color);
 `),y("base-selection-tags","min-height: var(--n-height);"),T("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),T("state-border",`
 z-index: 1;
 border-color: #0000;
 `),y("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[T("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),y("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[T("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),y("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),y("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),y("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[y("base-selection-input",`
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[T("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),T("render-label",`
 color: var(--n-text-color);
 `)]),We("disabled",[fe("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),D("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),D("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),y("base-selection-label","background-color: var(--n-color-active);"),y("base-selection-tags","background-color: var(--n-color-active);")])]),D("disabled","cursor: not-allowed;",[T("arrow",`
 color: var(--n-arrow-color-disabled);
 `),y("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[y("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),T("render-label",`
 color: var(--n-text-color-disabled);
 `)]),y("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),y("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),y("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[T("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),T("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>D(`${e}-status`,[T("state-border",`border: var(--n-border-${e});`),We("disabled",[fe("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),D("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),y("base-selection-label",`background-color: var(--n-color-active-${e});`),y("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),D("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),y("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),y("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[fe("&:last-child","padding-right: 0;"),y("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[T("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ot=re({name:"InternalSelection",props:Object.assign(Object.assign({},le.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const i=O(null),r=O(null),c=O(null),v=O(null),g=O(null),f=O(null),s=O(null),P=O(null),x=O(null),h=O(null),C=O(!1),R=O(!1),w=O(!1),p=le("InternalSelection","-internal-selection",Ct,Jn,e,H(e,"clsPrefix")),M=S(()=>e.clearable&&!e.disabled&&(w.value||e.active)),N=S(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ye(e.selectedOption.label,e.selectedOption,!0):e.placeholder),B=S(()=>{const t=e.selectedOption;if(!!t)return t.label}),W=S(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function G(){var t;const{value:u}=i;if(u){const{value:$}=r;$&&($.style.width=`${u.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=x.value)===null||t===void 0||t.sync()))}}function U(){const{value:t}=h;t&&(t.style.display="none")}function E(){const{value:t}=h;t&&(t.style.display="inline-block")}ze(H(e,"active"),t=>{t||U()}),ze(H(e,"pattern"),()=>{e.multiple&&vn(G)});function L(t){const{onFocus:u}=e;u&&u(t)}function V(t){const{onBlur:u}=e;u&&u(t)}function ae(t){const{onDeleteOption:u}=e;u&&u(t)}function Z(t){const{onClear:u}=e;u&&u(t)}function z(t){const{onPatternInput:u}=e;u&&u(t)}function j(t){var u;(!t.relatedTarget||!(!((u=c.value)===null||u===void 0)&&u.contains(t.relatedTarget)))&&L(t)}function se(t){var u;!((u=c.value)===null||u===void 0)&&u.contains(t.relatedTarget)||V(t)}function he(t){Z(t)}function ee(){w.value=!0}function ve(){w.value=!1}function Y(t){!e.active||!e.filterable||t.target!==r.value&&t.preventDefault()}function K(t){ae(t)}function ne(t){if(t.code==="Backspace"&&!o.value&&!e.pattern.length){const{selectedOptions:u}=e;u?.length&&K(u[u.length-1])}}const o=O(!1);let d=null;function k(t){const{value:u}=i;if(u){const $=t.target.value;u.textContent=$,G()}o.value?d=t:z(t)}function X(){o.value=!0}function xe(){o.value=!1,z(d),d=null}function pe(t){var u;R.value=!0,(u=e.onPatternFocus)===null||u===void 0||u.call(e,t)}function ge(t){var u;R.value=!1,(u=e.onPatternBlur)===null||u===void 0||u.call(e,t)}function te(){var t,u;if(e.filterable)R.value=!1,(t=f.value)===null||t===void 0||t.blur(),(u=r.value)===null||u===void 0||u.blur();else if(e.multiple){const{value:$}=v;$?.blur()}else{const{value:$}=g;$?.blur()}}function A(){var t,u,$;e.filterable?(R.value=!1,(t=f.value)===null||t===void 0||t.focus()):e.multiple?(u=v.value)===null||u===void 0||u.focus():($=g.value)===null||$===void 0||$.focus()}function be(){const{value:t}=r;t&&(E(),t.focus())}function oe(){const{value:t}=r;t&&t.blur()}function Ce(t){const{value:u}=s;u&&u.setTextContent(`+${t}`)}function Oe(){const{value:t}=P;return t}function Se(){return r.value}let de=null;function ue(){de!==null&&window.clearTimeout(de)}function Re(){e.disabled||e.active||(ue(),de=window.setTimeout(()=>{C.value=!0},100))}function Me(){ue()}function Te(t){t||(ue(),C.value=!1)}qe(()=>{Qn(()=>{const t=f.value;!t||(t.tabIndex=e.disabled||R.value?-1:0)})}),pn(c,e.onResize);const{inlineThemeDisabled:me}=e,ce=S(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:u},self:{borderRadius:$,color:Ne,placeholderColor:Ee,textColor:Le,paddingSingle:Fe,paddingMultiple:Pe,caretColor:Ae,colorDisabled:De,textColorDisabled:Ve,placeholderColorDisabled:_e,colorActive:ie,boxShadowFocus:n,boxShadowActive:a,boxShadowHover:b,border:F,borderFocus:m,borderHover:_,borderActive:I,arrowColor:we,arrowColorDisabled:Ie,loadingColor:je,colorActiveWarning:bn,boxShadowFocusWarning:mn,boxShadowActiveWarning:wn,boxShadowHoverWarning:yn,borderWarning:xn,borderFocusWarning:Cn,borderHoverWarning:On,borderActiveWarning:Sn,colorActiveError:Rn,boxShadowFocusError:Mn,boxShadowActiveError:Tn,boxShadowHoverError:zn,borderError:Fn,borderFocusError:Pn,borderHoverError:_n,borderActiveError:In,clearColor:Bn,clearColorHover:kn,clearColorPressed:$n,clearSize:Nn,arrowSize:En,[Q("height",t)]:Ln,[Q("fontSize",t)]:An}}=p.value;return{"--n-bezier":u,"--n-border":F,"--n-border-active":I,"--n-border-focus":m,"--n-border-hover":_,"--n-border-radius":$,"--n-box-shadow-active":a,"--n-box-shadow-focus":n,"--n-box-shadow-hover":b,"--n-caret-color":Ae,"--n-color":Ne,"--n-color-active":ie,"--n-color-disabled":De,"--n-font-size":An,"--n-height":Ln,"--n-padding-single":Fe,"--n-padding-multiple":Pe,"--n-placeholder-color":Ee,"--n-placeholder-color-disabled":_e,"--n-text-color":Le,"--n-text-color-disabled":Ve,"--n-arrow-color":we,"--n-arrow-color-disabled":Ie,"--n-loading-color":je,"--n-color-active-warning":bn,"--n-box-shadow-focus-warning":mn,"--n-box-shadow-active-warning":wn,"--n-box-shadow-hover-warning":yn,"--n-border-warning":xn,"--n-border-focus-warning":Cn,"--n-border-hover-warning":On,"--n-border-active-warning":Sn,"--n-color-active-error":Rn,"--n-box-shadow-focus-error":Mn,"--n-box-shadow-active-error":Tn,"--n-box-shadow-hover-error":zn,"--n-border-error":Fn,"--n-border-focus-error":Pn,"--n-border-hover-error":_n,"--n-border-active-error":In,"--n-clear-size":Nn,"--n-clear-color":Bn,"--n-clear-color-hover":kn,"--n-clear-color-pressed":$n,"--n-arrow-size":En}}),J=me?ke("internal-selection",S(()=>e.size[0]),ce,e):void 0;return{mergedTheme:p,mergedClearable:M,patternInputFocused:R,filterablePlaceholder:N,label:B,selected:W,showTagsPanel:C,isCompositing:o,counterRef:s,counterWrapperRef:P,patternInputMirrorRef:i,patternInputRef:r,selfRef:c,multipleElRef:v,singleElRef:g,patternInputWrapperRef:f,overflowRef:x,inputTagElRef:h,handleMouseDown:Y,handleFocusin:j,handleClear:he,handleMouseEnter:ee,handleMouseLeave:ve,handleDeleteOption:K,handlePatternKeyDown:ne,handlePatternInputInput:k,handlePatternInputBlur:ge,handlePatternInputFocus:pe,handleMouseEnterCounter:Re,handleMouseLeaveCounter:Me,handleFocusout:se,handleCompositionEnd:xe,handleCompositionStart:X,onPopoverUpdateShow:Te,focus:A,focusInput:be,blur:te,blurInput:oe,updateCounter:Ce,getCounter:Oe,getTail:Se,renderLabel:e.renderLabel,cssVars:me?void 0:ce,themeClass:J?.themeClass,onRender:J?.onRender}},render(){const{status:e,multiple:i,size:r,disabled:c,filterable:v,maxTagCount:g,bordered:f,clsPrefix:s,onRender:P,renderTag:x,renderLabel:h}=this;P?.();const C=g==="responsive",R=typeof g=="number",w=C||R,p=l(et,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var N,B;return(B=(N=this.$slots).arrow)===null||B===void 0?void 0:B.call(N)}});let M;if(i){const N=z=>l("div",{class:`${s}-base-selection-tag-wrapper`,key:z.value},x?x({option:z,handleClose:()=>this.handleDeleteOption(z)}):l(He,{size:r,closable:!z.disabled,disabled:c,internalStopClickPropagation:!0,onClose:()=>this.handleDeleteOption(z)},{default:()=>h?h(z,!0):ye(z.label,z,!0)})),B=(R?this.selectedOptions.slice(0,g):this.selectedOptions).map(N),W=v?l("div",{class:`${s}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),l("span",{ref:"patternInputMirrorRef",class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,G=C?()=>l("div",{class:`${s}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},l(He,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let U;if(R){const z=this.selectedOptions.length-g;z>0&&(U=l("div",{class:`${s}-base-selection-tag-wrapper`,key:"__counter__"},l(He,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${z}`})))}const E=C?v?l(Qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>B,counter:G,tail:()=>W}):l(Qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>B,counter:G}):R?B.concat(U):B,L=w?()=>l("div",{class:`${s}-base-selection-popover`},C?B:this.selectedOptions.map(N)):void 0,V=w?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,Z=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?l("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},this.placeholder):null;if(v){const z=l("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-tags`},E,C?null:W,p);M=l(nn,null,w?l(en,Object.assign({},V,{scrollable:!0}),{trigger:()=>z,default:L}):z,Z)}else{const z=l("div",{ref:"multipleElRef",class:`${s}-base-selection-tags`,tabindex:c?void 0:0},E,p);M=l(nn,null,w?l(en,Object.assign({},V,{scrollable:!0,style:"height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>z,default:L}):z,Z)}}else if(v){const N=this.pattern||this.isCompositing,B=this.active?!N:!this.selected,W=this.active?!1:this.selected;M=l("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-label`},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${s}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),W?l("div",{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:"input"},l("div",{class:`${s}-base-selection-overlay__wrapper`},x?x({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):ye(this.label,this.selectedOption,!0))):null,B?l("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else M=l("div",{ref:"singleElRef",class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?l("div",{class:`${s}-base-selection-input`,title:ft(this.label),key:"input"},l("div",{class:`${s}-base-selection-input__content`},x?x({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):ye(this.label,this.selectedOption,!0))):l("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},this.placeholder),p);return l("div",{ref:"selfRef",class:[`${s}-base-selection`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},M,f?l("div",{class:`${s}-base-selection__border`}):null,f?l("div",{class:`${s}-base-selection__state-border`}):null)}});function St(e){return $e(e)?e.name||e.key||"key-required":e.value}function $e(e){return e.type==="group"}function gn(e){return e.type==="ignored"}const Rt={getKey:St,getIsGroup:$e,getIgnored:gn};function an(e,i){try{return!!(1+i.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Mt(e,i,r){if(!i)return e;function c(v){if(!Array.isArray(v))return[];const g=[];for(const f of v)if($e(f)){const s=c(f.children);s.length&&g.push(Object.assign({},f,{children:s}))}else{if(gn(f))continue;i(r,f)&&g.push(f)}return g}return c(e)}function Tt(e){const i=new Map;return e.forEach(r=>{$e(r)?r.children.forEach(c=>{i.set(c.value,c)}):i.set(r.value,r)}),i}function zt(e,i){return i?typeof i.label=="string"?an(e,i.label):i.value!==void 0?an(e,String(i.value)):!1:!1}var Ft=fe([y("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),y("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[hn()])]);const Pt=Object.assign(Object.assign({},le.props),{to:Ue.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:{type:Function,default:zt},placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:{type:Function,default:e=>({label:e,value:e})},fallbackOption:{type:[Function,Boolean],default:()=>e=>({label:String(e),value:e})},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,onChange:[Function,Array],items:Array});var Bt=re({name:"Select",props:Pt,setup(e){const{mergedClsPrefixRef:i,mergedBorderedRef:r,namespaceRef:c,inlineThemeDisabled:v}=dn(e),g=le("Select","-select",Ft,ut,e,i),f=O(e.defaultValue),s=H(e,"value"),P=tn(s,f),x=O(!1),h=O(""),C=S(()=>nt(z.value,Rt)),R=S(()=>Tt(Z.value)),w=O(!1),p=tn(H(e,"show"),w),M=O(null),N=O(null),B=O(null),{localeRef:W}=un("Select"),G=S(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:W.value.placeholder}),U=tt(e,["items","options"]),E=O([]),L=O([]),V=O(new Map),ae=S(()=>{const{fallbackOption:n}=e;return n?a=>Object.assign(n(a),{value:a}):!1}),Z=S(()=>L.value.concat(E.value).concat(U.value)),z=S(()=>{if(e.remote)return U.value;{const{value:n}=Z,{value:a}=h;if(!a.length||!e.filterable)return n;{const{filter:b}=e;return Mt(n,b,a)}}});function j(n){const a=e.remote,{value:b}=V,{value:F}=R,{value:m}=ae,_=[];return n.forEach(I=>{if(F.has(I))_.push(F.get(I));else if(a&&b.has(I))_.push(b.get(I));else if(m){const we=m(I);we&&_.push(we)}}),_}const se=S(()=>{if(e.multiple){const{value:n}=P;return Array.isArray(n)?j(n):[]}return null}),he=S(()=>{const{value:n}=P;return!e.multiple&&!Array.isArray(n)?n===null?null:j([n])[0]||null:null}),ee=ot(e),{mergedSizeRef:ve,mergedDisabledRef:Y,mergedStatusRef:K}=ee;function ne(n,a){const{onChange:b,"onUpdate:value":F,onUpdateValue:m}=e,{nTriggerFormChange:_,nTriggerFormInput:I}=ee;b&&q(b,n,a),m&&q(m,n,a),F&&q(F,n,a),f.value=n,_(),I()}function o(n){const{onBlur:a}=e,{nTriggerFormBlur:b}=ee;a&&q(a,n),b()}function d(){const{onClear:n}=e;n&&q(n)}function k(n){const{onFocus:a}=e,{nTriggerFormFocus:b}=ee;a&&q(a,n),b()}function X(n){const{onSearch:a}=e;a&&q(a,n)}function xe(n){const{onScroll:a}=e;a&&q(a,n)}function pe(){var n;const{remote:a,multiple:b}=e;if(a){const{value:F}=V;if(b)(n=se.value)===null||n===void 0||n.forEach(m=>{F.set(m.value,m)});else{const m=he.value;m&&F.set(m.value,m)}}}function ge(n){const{onUpdateShow:a,"onUpdate:show":b}=e;a&&q(a,n),b&&q(b,n),w.value=n}function te(){Y.value||(ge(!0),w.value=!0,e.filterable&&Ae())}function A(){ge(!1)}function be(){h.value="",L.value=[]}const oe=O(!1);function Ce(){e.filterable&&(oe.value=!0)}function Oe(){e.filterable&&(oe.value=!1,p.value||be())}function Se(){Y.value||(p.value?e.filterable||A():te())}function de(n){var a,b;!((b=(a=B.value)===null||a===void 0?void 0:a.selfRef)===null||b===void 0)&&b.contains(n.relatedTarget)||(x.value=!1,o(n),A())}function ue(n){k(n),x.value=!0}function Re(n){x.value=!0}function Me(n){var a;!((a=M.value)===null||a===void 0)&&a.$el.contains(n.relatedTarget)||(x.value=!1,o(n),A())}function Te(){var n;(n=M.value)===null||n===void 0||n.focus(),A()}function me(n){var a;p.value&&(!((a=M.value)===null||a===void 0)&&a.$el.contains(n.target)||A())}function ce(n){if(!Array.isArray(n))return[];if(ae.value)return Array.from(n);{const{remote:a}=e,{value:b}=R;if(a){const{value:F}=V;return n.filter(m=>b.has(m)||F.has(m))}else return n.filter(F=>b.has(F))}}function J(n){t(n.rawNode)}function t(n){if(Y.value)return;const{tag:a,remote:b,clearFilterAfterSelect:F}=e;if(a&&!b){const{value:m}=L,_=m[0]||null;_&&(E.value.push(_),L.value=[])}if(b&&V.value.set(n.value,n),e.multiple){const m=ce(P.value),_=m.findIndex(I=>I===n.value);if(~_){if(m.splice(_,1),a&&!b){const I=u(n.value);~I&&(E.value.splice(I,1),F&&(h.value=""))}}else m.push(n.value),F&&(h.value="");ne(m,j(m))}else{if(a&&!b){const m=u(n.value);~m?E.value=[E.value[m]]:E.value=[]}Pe(),A(),ne(n.value,n)}}function u(n){return E.value.findIndex(b=>b.value===n)}function $(n){p.value||te();const{value:a}=n.target;h.value=a;const{tag:b,remote:F}=e;if(X(a),b&&!F){if(!a){L.value=[];return}const m=e.onCreate(a);U.value.some(_=>_.value===m.value)||E.value.some(_=>_.value===m.value)?L.value=[]:L.value=[m]}}function Ne(n){n.stopPropagation();const{multiple:a}=e;!a&&e.filterable&&A(),d(),a?ne([],[]):ne(null,null)}function Ee(n){!Be(n,"action")&&!Be(n,"empty")&&n.preventDefault()}function Le(n){xe(n)}function Fe(n){var a,b,F,m,_;switch(n.code){case"Space":if(e.filterable)break;n.preventDefault();case"Enter":case"NumpadEnter":if(!(!((a=M.value)===null||a===void 0)&&a.isCompositing)){if(p.value){const I=(b=B.value)===null||b===void 0?void 0:b.getPendingTmNode();I?J(I):e.filterable||(A(),Pe())}else if(te(),e.tag&&oe.value){const I=L.value[0];if(I){const we=I.value,{value:Ie}=P;e.multiple&&Array.isArray(Ie)&&Ie.some(je=>je===we)||t(I)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;p.value&&((F=B.value)===null||F===void 0||F.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;p.value?(m=B.value)===null||m===void 0||m.next():te();break;case"Escape":A(),(_=M.value)===null||_===void 0||_.focus();break}}function Pe(){var n;(n=M.value)===null||n===void 0||n.focus()}function Ae(){var n;(n=M.value)===null||n===void 0||n.focusInput()}function De(){var n;!p.value||(n=N.value)===null||n===void 0||n.syncPosition()}pe(),ze(H(e,"options"),pe);const Ve={focus:()=>{var n;(n=M.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=M.value)===null||n===void 0||n.blur()}},_e=S(()=>{const{self:{menuBoxShadow:n}}=g.value;return{"--n-menu-box-shadow":n}}),ie=v?ke("select",void 0,_e,e):void 0;return Object.assign(Object.assign({},Ve),{mergedStatus:K,mergedClsPrefix:i,mergedBordered:r,namespace:c,treeMate:C,isMounted:it(),triggerRef:M,menuRef:B,pattern:h,uncontrolledShow:w,mergedShow:p,adjustedTo:Ue(e),uncontrolledValue:f,mergedValue:P,followerRef:N,localizedPlaceholder:G,selectedOption:he,selectedOptions:se,mergedSize:ve,mergedDisabled:Y,focused:x,activeWithoutMenuOpen:oe,inlineThemeDisabled:v,onTriggerInputFocus:Ce,onTriggerInputBlur:Oe,handleTriggerOrMenuResize:De,handleMenuFocus:Re,handleMenuBlur:Me,handleMenuTabOut:Te,handleTriggerClick:Se,handleToggle:J,handleDeleteOption:t,handlePatternInput:$,handleClear:Ne,handleTriggerBlur:de,handleTriggerFocus:ue,handleKeydown:Fe,handleMenuAfterLeave:be,handleMenuClickOutside:me,handleMenuScroll:Le,handleMenuKeydown:Fe,handleMenuMousedown:Ee,mergedTheme:g,cssVars:v?void 0:_e,themeClass:ie?.themeClass,onRender:ie?.onRender})},render(){return l("div",{class:`${this.mergedClsPrefix}-select`},l(lt,null,{default:()=>[l(rt,null,{default:()=>l(Ot,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus},{arrow:()=>{var e,i;return[(i=(e=this.$slots).arrow)===null||i===void 0?void 0:i.call(e)]}})}),l(at,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ue.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>l(fn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,i,r;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),st(l(xt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(i=this.menuProps)===null||i===void 0?void 0:i.class],clsPrefix:this.mergedClsPrefix,focusable:!0,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(r=this.menuProps)===null||r===void 0?void 0:r.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,v;return[(v=(c=this.$slots).empty)===null||v===void 0?void 0:v.call(c)]},action:()=>{var c,v;return[(v=(c=this.$slots).action)===null||v===void 0?void 0:v.call(c)]}}),this.displayDirective==="show"?[[dt,this.mergedShow],[on,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[on,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{vt as F,Bt as N,bt as a,xt as b,ft as g,Rt as t};
