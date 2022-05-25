import{Z as t,Q as te,f as _,T as K,ag as j,y as P,n as B,ah as E,a6 as se,X as F,ab as c,a4 as h,a2 as r,a3 as y,ae as A,aO as ue,aP as be,aQ as he,U as fe,ai as ke,a5 as G,al as ve,am as N,V as xe,aR as me,aG as ge,bj as pe,bk as Ce}from"./index-c5b2c6d2.js";function Te(e){return s=>{s?e.value=s.$el:e.value=null}}var ye=t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Re=t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const H=te("n-checkbox-group"),ze={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:{type:[Function,Array],validator:()=>!0,default:void 0}};var $e=_({name:"CheckboxGroup",props:ze,setup(e){const{mergedClsPrefixRef:s}=K(e),g=j(e),{mergedSizeRef:R,mergedDisabledRef:S}=g,u=P(e.defaultValue),z=B(()=>e.value),b=E(z,u),n=B(()=>{var f;return((f=b.value)===null||f===void 0?void 0:f.length)||0}),a=B(()=>Array.isArray(b.value)?new Set(b.value):new Set);function M(f,l){const{nTriggerFormInput:p,nTriggerFormChange:C}=g,{onChange:k,"onUpdate:value":v,onUpdateValue:x}=e;if(Array.isArray(b.value)){const d=Array.from(b.value),V=d.findIndex(I=>I===l);f?~V||(d.push(l),x&&c(x,d),v&&c(v,d),p(),C(),u.value=d,k&&c(k,d)):~V&&(d.splice(V,1),x&&c(x,d),v&&c(v,d),k&&c(k,d),u.value=d,p(),C())}else f?(x&&c(x,[l]),v&&c(v,[l]),k&&c(k,[l]),u.value=[l],p(),C()):(x&&c(x,[]),v&&c(v,[]),k&&c(k,[]),u.value=[],p(),C())}return se(H,{checkedCountRef:n,maxRef:F(e,"max"),minRef:F(e,"min"),valueSetRef:a,disabledRef:S,mergedSizeRef:R,toggleCheckbox:M}),{mergedClsPrefix:s}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),we=h([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[h("&:hover",[r("checkbox-box",[y("border",{border:"var(--n-border-checked)"})])]),h("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),A("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),A("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[h(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("indeterminate",[r("checkbox-box",[r("checkbox-icon",[h(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),h(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("checked, indeterminate",[h("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),A("disabled",{cursor:"not-allowed"},[A("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[h(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[h(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),y("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[h(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ue({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 padding: var(--n-label-padding);
 `,[h("&:empty",{display:"none"})])]),be(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),he(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);const Se=Object.assign(Object.assign({},G.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var Ae=_({name:"Checkbox",props:Se,setup(e){const s=P(null),{mergedClsPrefixRef:g,inlineThemeDisabled:R,mergedRtlRef:S}=K(e),u=j(e,{mergedSize(o){const{size:m}=e;if(m!==void 0)return m;if(n){const{value:i}=n.mergedSizeRef;if(i!==void 0)return i}if(o){const{mergedSize:i}=o;if(i!==void 0)return i.value}return"medium"},mergedDisabled(o){const{disabled:m}=e;if(m!==void 0)return m;if(n){if(n.disabledRef.value)return!0;const{maxRef:{value:i},checkedCountRef:w}=n;if(i!==void 0&&w.value>=i&&!l.value)return!0;const{minRef:{value:T}}=n;if(T!==void 0&&w.value<=T&&l.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:z,mergedSizeRef:b}=u,n=fe(H,null),a=P(e.defaultChecked),M=F(e,"checked"),f=E(M,a),l=ke(()=>{if(n){const o=n.valueSetRef.value;return o&&e.value!==void 0?o.has(e.value):!1}else return f.value===e.checkedValue}),p=G("Checkbox","-checkbox",we,Ce,e,g);function C(o){if(n&&e.value!==void 0)n.toggleCheckbox(!l.value,e.value);else{const{onChange:m,"onUpdate:checked":i,onUpdateChecked:w}=e,{nTriggerFormInput:T,nTriggerFormChange:U}=u,$=l.value?e.uncheckedValue:e.checkedValue;i&&c(i,$,o),w&&c(w,$,o),m&&c(m,$,o),T(),U(),a.value=$}}function k(o){z.value||C(o)}function v(o){if(!z.value)switch(o.code){case"Space":case"Enter":case"NumpadEnter":C(o)}}function x(o){switch(o.code){case"Space":o.preventDefault()}}const d={focus:()=>{var o;(o=s.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=s.value)===null||o===void 0||o.blur()}},V=ve("Checkbox",S,g),I=B(()=>{const{value:o}=b,{common:{cubicBezierEaseInOut:m},self:{borderRadius:i,color:w,colorChecked:T,colorDisabled:U,colorTableHeader:$,colorTableHeaderModal:O,colorTableHeaderPopover:L,checkMarkColor:Q,checkMarkColorDisabled:X,border:Y,borderFocus:Z,borderDisabled:q,borderChecked:J,boxShadowFocus:W,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ae,borderDisabledChecked:ne,labelPadding:ce,labelLineHeight:le,[N("fontSize",o)]:de,[N("size",o)]:ie}}=p.value;return{"--n-label-line-height":le,"--n-size":ie,"--n-bezier":m,"--n-border-radius":i,"--n-border":Y,"--n-border-checked":J,"--n-border-focus":Z,"--n-border-disabled":q,"--n-border-disabled-checked":ne,"--n-box-shadow-focus":W,"--n-color":w,"--n-color-checked":T,"--n-color-table":$,"--n-color-table-modal":O,"--n-color-table-popover":L,"--n-color-disabled":U,"--n-color-disabled-checked":ae,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":Q,"--n-check-mark-color-disabled":X,"--n-check-mark-color-disabled-checked":re,"--n-font-size":de,"--n-label-padding":ce}}),D=R?xe("checkbox",B(()=>b.value[0]),I,e):void 0;return Object.assign(u,d,{rtlEnabled:V,selfRef:s,mergedClsPrefix:g,mergedDisabled:z,renderedChecked:l,mergedTheme:p,labelId:me(),handleClick:k,handleKeyUp:v,handleKeyDown:x,cssVars:R?void 0:I,themeClass:D?.themeClass,onRender:D?.onRender})},render(){var e;const{$slots:s,renderedChecked:g,mergedDisabled:R,indeterminate:S,privateInsideTable:u,cssVars:z,labelId:b,label:n,mergedClsPrefix:a,focusable:M,handleKeyUp:f,handleKeyDown:l,handleClick:p}=this;return(e=this.onRender)===null||e===void 0||e.call(this),t("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,g&&`${a}-checkbox--checked`,R&&`${a}-checkbox--disabled`,S&&`${a}-checkbox--indeterminate`,u&&`${a}-checkbox--inside-table`],tabindex:R||!M?void 0:0,role:"checkbox","aria-checked":S?"mixed":g,"aria-labelledby":b,style:z,onKeyup:f,onKeydown:l,onClick:p,onMousedown:()=>{pe("selectstart",window,C=>{C.preventDefault()},{once:!0})}},t("div",{class:`${a}-checkbox-box-wrapper`},"\xA0",t("div",{class:`${a}-checkbox-box`},t(ge,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Re):t("div",{key:"check",class:`${a}-checkbox-icon`},ye)}),t("div",{class:`${a}-checkbox-box__border`}))),n!==null||s.default?t("span",{class:`${a}-checkbox__label`,id:b},s.default?s.default():n):null)}});export{$e as N,Ae as a,Te as c};
