import{c as u,a as n,h as d,o as x}from"./index-zbr96cSF.js";const f={__name:"ErroresContador",setup(p){const r=(o="[1+x)")=>{let l=["{","[","("],c=["}","]",")"],a={"}":"{","]":"[",")":"("},t=-1,s=[];for(let e=0;e<=o.length;e++)if(l.includes(o[e]))s.push(o[e]);else if(c.includes(o[e]))if(s.length>=1){let i=s.pop();if(a[o[e]]===i)continue;t=e;break}else{t=e;break}console.log(`frase: ${o} - cursor_error: ${t}`)};return r("[1+x+3*(y-5)]"),r("[1+x)"),r("}1+x"),r("}1+x[]"),r("{1+x}}"),r("{{1+x))"),(o,l)=>(x(),u("div",null,l[0]||(l[0]=[n("p",null,[d(" Mira la consolo para ver el resultado "),n("small",{class:"font-extrabold"},"cuando devuelve -1 es correcto.")],-1)])))}};export{f as default};
