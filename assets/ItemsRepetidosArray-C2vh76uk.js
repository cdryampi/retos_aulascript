import{r as l,a,b as r,w as b,v as g,n as p,F as y,d as x,o as n,g as f,t as d}from"./index-6sv79Tkp.js";const v={class:"container mx-auto px-4"},k={class:"flex flex-col justify-center items-center space-x-4 my-8"},h={class:"flex flex-col gap-5justify-center items-center space-x-2 my-8"},_={class:"relative overflow-x-auto shadow-md sm:rounded-lg mt-10"},w={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},N={key:0,class:"border-b border-gray-200 dark:border-gray-700"},C={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"},I={scope:"row",class:"px-6 py-4"},j={__name:"ItemsRepetidosArray",setup(B){const o=l(""),u=l([{number:0,count:0},{number:1,count:0},{number:2,count:0},{number:3,count:0},{number:4,count:0},{number:5,count:0},{number:6,count:0},{number:7,count:0},{number:8,count:0},{number:9,count:0}]),c=l(!1),m=()=>{c.value=!0,setTimeout(()=>{i(),c.value=!1},1e3)},i=()=>{u.value=[{number:0,count:0},{number:1,count:0},{number:2,count:0},{number:3,count:0},{number:4,count:0},{number:5,count:0},{number:6,count:0},{number:7,count:0},{number:8,count:0},{number:9,count:0}];for(let s=0;s<o.value.length;s++)try{const t=parseInt(o.value[s]);u.value[t].count++}catch(t){console.log(t)}console.log(o.value)};return(s,t)=>(n(),a("div",v,[r("div",k,[t[2]||(t[2]=r("label",{for:"message",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},[r("small",{class:"my-5"},"Ingrese números:")],-1)),r("div",h,[b(r("textarea",{id:"message",rows:"4","onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Ingresa números como quiera."},null,512),[[g,o.value]]),r("button",{onClick:m,class:p(["my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer",{"cursor-not-allowed":c.value}])}," Calcular ",2),r("div",_,[r("table",w,[t[1]||(t[1]=r("thead",{class:"text-xs text-gray-700 uppercase dark:text-gray-400"},[r("tr",null,[r("th",{scope:"col",class:"px-6 py-3 bg-gray-50 dark:bg-gray-800"}," número/repetidos ")])],-1)),r("tbody",null,[(n(!0),a(y,null,x(u.value,e=>(n(),a("div",{key:e.number},[(e==null?void 0:e.count)>0?(n(),a("tr",N,[r("th",C,d(e.number),1),r("td",I,d(e==null?void 0:e.count),1)])):f("",!0)]))),128))])])])])])]))}};export{j as default};
