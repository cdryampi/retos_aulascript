import{r as c,c as m,a as e,w as p,v as y,F as x,b as v,o as g,t as k}from"./index-zbr96cSF.js";const w={class:"container mx-auto py-4 justify-items-center"},h={class:"w-full max-w-sm"},_={class:"flex flex-col gap-5 justify-center items-center space-x-2 my-8"},I={class:"w-full max-w-sm"},j={class:"flex flex-col gap-5 justify-center items-center space-x-2 my-8"},B={class:"w-full max-w-sm"},C={class:"list-disc"},D={__name:"PermutacionesConIndex",setup(V){const o=c(""),s=c(0),u=c([]),f=()=>{u.value=[];const t=o.value,a=s.value;t.length>0&&t.length>s.value-1&&s.value>0&&b(t,a),o.value="",s.value=0},b=(t,a)=>{console.log(t,a);function r(d,i="",n=new Set){if(i.length===a){u.value.push(i);return}for(let l=0;l<d.length;l++)n.has(l)||(n.add(l),r(d,i+d[l],n),n.delete(l))}r(t)};return(t,a)=>(g(),m("div",w,[e("div",h,[a[2]||(a[2]=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},[e("small",{class:"my-5"},"Ingrese candena a permutar:")],-1)),e("div",_,[p(e("input",{id:"message",type:"text","onUpdate:modelValue":a[0]||(a[0]=r=>o.value=r),class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Ingresa la cadena que quiera."},null,512),[[y,o.value]])])]),e("div",I,[a[3]||(a[3]=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},[e("small",{class:"my-5"},"Ingrese el tamaño de la permuta:")],-1)),e("div",j,[p(e("input",{id:"number",type:"number","onUpdate:modelValue":a[1]||(a[1]=r=>s.value=r),class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Ingresa un número mayor a 0 y menor a la longitud de la cadena."},null,512),[[y,s.value]])])]),e("div",{class:"w-full max-w-sm"},[e("button",{onClick:f,class:"my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"}," Calcular ")]),e("div",B,[e("ul",C,[(g(!0),m(x,null,v(u.value,r=>(g(),m("li",{key:r},k(r),1))),128))])])]))}};export{D as default};
