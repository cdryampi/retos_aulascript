import{r as u,c as n,a as t,w as g,v as y,F as f,b as v,o as i,t as x}from"./index-zbr96cSF.js";const b={class:"container mx-auto py-4 justify-items-center"},_={class:"w-full max-w-sm"},h={class:"flex flex-col gap-5 justify-center items-center space-x-2 my-8"},k={class:"w-full max-w-sm"},w={class:"list-disc"},j={__name:"PermutacionesElementos",setup(B){const o=u(""),a=u([]),d=()=>{a.value=[];const r=o.value;r.length>0&&m(r),o.value=""},m=r=>{function s(e,c=""){if(e.length===0)a.value.push(c);else for(let l=0;l<e.length;l++){const p=e.slice(0,l)+e.slice(l+1);s(p,c+e[l])}}s(r),a.value=[...new Set(a.value)]};return(r,s)=>(i(),n("div",b,[t("div",_,[s[1]||(s[1]=t("label",{for:"message",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},[t("small",{class:"my-5"},"Ingrese candena a permutar:")],-1)),t("div",h,[g(t("input",{id:"message",type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e),class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Ingresa la cadena que quiera."},null,512),[[y,o.value]])])]),t("div",{class:"w-full max-w-sm"},[t("button",{onClick:d,class:"my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"}," Calcular ")]),t("div",k,[t("ul",w,[(i(!0),n(f,null,v(a.value,e=>(i(),n("li",{key:e},x(e),1))),128))])])]))}};export{j as default};
