import{f as h,y as b,w as p,m as M,bX as o,R as m,a as f,Z as E}from"./index-c5b2c6d2.js";import{u as x}from"./use-async-monaco-449a2dc8.js";class S{}const R=`
async function handler(ctx: Context) {
  return 'pong';
}
`.trimStart();var O=(e=>(e.JSON="json",e.Function="function",e.Text="text",e.YAML="yaml",e))(O||{}),C=(e=>(e.json="json",e.function="typescript",e.text="markdown",e.yaml="yaml",e))(C||{});class w extends S{constructor(){super(...arguments),this.type="json",this.private=!1,this.raw="{}",this.name="",this.reference="root"}}var u;(e=>{e.libSource=`
 `.trim(),e.libUri="ts:filename/extends.d.ts"})(u||(u={}));var g=Object.freeze(Object.defineProperty({__proto__:null,get globalTypeDeclare(){return u}},Symbol.toStringTag,{value:"Module"}));const U=h({props:{value:{type:Object,required:!0},onSave:{type:Function,required:!1},language:{type:String,default:"typescript"}},setup(e,{expose:y}){const d=b(),a=x(d,e.value,t=>{e.value.value=t},{language:e.language});y(a),p(()=>[a.loaded.value,e.language],([t,r])=>{t&&o(()=>import("./editor.main-8f1dfe4c.js").then(function(s){return s.e}),["js/editor.main-8f1dfe4c.js","assets/editor.main.339eee99.css","js/index-c5b2c6d2.js","assets/index.91340e78.css"]).then(s=>{const i=a.editor.getModel();!i||s.editor.setModelLanguage(i,r)})}),M(()=>{o(()=>import("./editor.main-8f1dfe4c.js").then(function(t){return t.e}),["js/editor.main-8f1dfe4c.js","assets/editor.main.339eee99.css","js/index-c5b2c6d2.js","assets/index.91340e78.css"]).then(t=>{const r=t.languages.typescript.typescriptDefaults.getCompilerOptions();r.target=t.languages.typescript.ScriptTarget.ESNext,r.allowNonTsExtensions=!0,r.moduleResolution=t.languages.typescript.ModuleResolutionKind.NodeJs,r.esModuleInterop=!0,t.languages.typescript.typescriptDefaults.setCompilerOptions(r);const s="ts:filename/global.d.ts";t.editor.getModel(t.Uri.parse(s))||m.api.fn.types.get().then(i=>{const l=i;t.languages.typescript.typescriptDefaults.addExtraLib(l,s),t.editor.createModel(l,"typescript",t.Uri.parse(s))}),Object.keys(g).forEach(i=>{const l=g[i],{libSource:c,libUri:n}=l,_=t.Uri.parse(n);t.editor.getModel(_)||(t.languages.typescript.typescriptDefaults.addExtraLib(c,n),t.editor.createModel(c,"typescript",t.Uri.parse(n)))})})});const v=p(()=>a.loaded.value,t=>{v(),o(()=>import("./editor.main-8f1dfe4c.js").then(function(r){return r.e}),["js/editor.main-8f1dfe4c.js","assets/editor.main.339eee99.css","js/index-c5b2c6d2.js","assets/index.91340e78.css"]).then(r=>{a.editor.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{e.onSave?.()})})});return()=>f("div",{class:"h-full relative w-full"},[f("div",{class:"relative h-full w-full",ref:d},null),E(a.Snip)])}});export{U as F,w as S,O as a,C as b,R as d};
