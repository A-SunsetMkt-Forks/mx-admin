import{d as r,h as e,N as i,q as l,p as c,I as u}from"./index-703972d3.js";const a={variant:{type:String,default:"primary"},color:{type:String},onClick:{type:Function},disabled:{type:Boolean}},d=r({props:a,setup(t,{slots:n}){return()=>e(i,{type:t.variant,color:t.color,circle:!0,onClick:t.onClick,disabled:t.disabled},n)}}),b=r({props:{...a,to:{type:[Object,String]},name:{type:String},icon:{type:Object,required:!0}},setup(t){const n=()=>e(d,{variant:t.variant,class:"shadow",onClick:t.onClick,disabled:t.disabled,color:t.color},e(u,{size:"16"},t.icon)),o=()=>t.name?e(c,{trigger:"hover",placement:"bottom"},{trigger(){return e(n,null)},default(){return t.name}}):e(n,null);return()=>t.to?e(l,{to:t.to},e(o,null)):e(o,null)}});export{b as H};
