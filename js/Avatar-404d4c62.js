import{Q as M,a2 as F,aP as V,a4 as x,aQ as W,a3 as H,f as A,T as K,y as R,U as w,n as u,a5 as P,w as N,am as O,V as G,bh as _,Z as v,_ as Q,aJ as D,d4 as J}from"./index-c5b2c6d2.js";import{a as U}from"./Tag-11275d89.js";const X=M("n-avatar-group");var Y=F("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[V(x("&","--n-merged-color: var(--n-color-modal);")),W(x("&","--n-merged-color: var(--n-color-popover);")),x("img",`
 width: 100%;
 height: 100%;
 `),H("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),F("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),H("text","line-height: 1.25")]);const Z=Object.assign(Object.assign({},P.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var re=A({name:"Avatar",props:Z,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=K(t),a=R(!1);let s=null;const d=R(null),y=R(null),$=()=>{const{value:e}=d;if(e&&(s===null||s!==e.innerHTML)){s=e.innerHTML;const{value:r}=y;if(r){const{offsetWidth:f,offsetHeight:n}=r,{offsetWidth:o,offsetHeight:b}=e,m=.9,z=Math.min(f/o*m,n/b*m,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${z})`}}},h=w(X,null),j=u(()=>{const{size:e}=t;if(e)return e;const{size:r}=h||{};return r||"medium"}),C=P("Avatar","-avatar",Y,J,t,l),E=w(U,null),g=u(()=>{if(h)return!0;const{round:e,circle:r}=t;return e!==void 0||r!==void 0?e||r:E?E.roundRef.value:!1}),T=u(()=>h?!0:t.bordered||!1),B=e=>{a.value=!0;const{onError:r}=t;r&&r(e)};N(()=>t.src,()=>a.value=!1);const S=u(()=>{const e=j.value,r=g.value,f=T.value,{color:n}=t,{self:{borderRadius:o,fontSize:b,color:m,border:z,colorModal:L,colorPopover:k},common:{cubicBezierEaseInOut:I}}=C.value;let p;return typeof e=="number"?p=`${e}px`:p=C.value.self[O("height",e)],{"--n-font-size":b,"--n-border":f?z:"none","--n-border-radius":r?"50%":o,"--n-color":n||m,"--n-color-modal":n||L,"--n-color-popover":n||k,"--n-bezier":I,"--n-merged-size":`var(--n-avatar-size-override, ${p})`}}),i=c?G("avatar",u(()=>{const e=j.value,r=g.value,f=T.value,{color:n}=t;let o="";return e&&(typeof e=="number"?o+=`a${e}`:o+=e[0]),r&&(o+="b"),f&&(o+="c"),n&&(o+=_(n)),o}),S,t):void 0;return{textRef:d,selfRef:y,mergedRoundRef:g,mergedClsPrefix:l,fitTextTransform:$,cssVars:c?void 0:S,themeClass:i?.themeClass,onRender:i?.onRender,hasLoadError:a,handleError:B}},render(){const{$slots:t,src:l,mergedClsPrefix:c,onRender:a}=this;a?.();let s;return this.hasLoadError?s=v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):s=Q(t.default,d=>{if(d)return v(D,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${c}-avatar__text`},d)});if(l)return v("img",{src:l,onError:this.handleError,style:{objectFit:this.objectFit}})}),v("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},s)}});export{re as N};
