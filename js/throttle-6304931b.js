import{cq as n,bZ as l}from"./index-c5b2c6d2.js";var g="Expected a function";function d(t,a,r){var e=!0,i=!0;if(typeof t!="function")throw new TypeError(g);return l(r)&&(e="leading"in r?!!r.leading:e,i="trailing"in r?!!r.trailing:i),n(t,a,{leading:e,maxWait:a,trailing:i})}export{d as t};
