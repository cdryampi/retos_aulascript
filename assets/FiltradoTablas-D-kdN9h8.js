import{r as n,c as p,a as o,b as e,w as m,v as g,F as u,d as b,o as l,t as a,e as x,n as f}from"./index-IAbQncKf.js";const y={class:"p-4 bg-gray-100 text-black rounded-md"},v={class:"flex items-center max-w-sm mx-auto py-5"},h={class:"relative w-full"},w={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},_={scope:"row",class:"flex items-center px-6 py-4 text-primary-900 whitespace-nowrap dark:text-white"},k=["src","alt"],j={class:"ps-3"},D={class:"text-base font-semibold"},L={class:"font-normal text-gray-500"},O={class:"px-6 py-4"},B={class:"px-6 py-4"},N={class:"flex items-center"},C={__name:"FiltradoTablas",setup(S){const r=n(""),c=n([{name:"Neil Sims",position:"React Developer",status:"Online",email:"neil.sims@flowbite.com",image:"images/ejercicio_1/profile-picture-1.jpg"},{name:"Jese Leos",position:"Vue Developer",status:"Offline",email:"jese@flowbite.com",image:"images/ejercicio_1/profile-picture-3.jpg"},{name:"Bonnie Green",position:"Angular Developer",status:"Online",email:"bonnie.green@flowbite.com",image:"images/ejercicio_1/profile-picture-2.jpg"},{name:"Roonie Strickland",position:"Node.js Developer",status:"Offline",email:"roonie.strickland@flowbite.com",image:"images/ejercicio_1/profile-picture-4.jpg"},{name:"Leslie Livingston",position:"React Developer",status:"Online",email:"leslie@flowbite.com",image:"images/ejercicio_1/profile-picture-5.jpg"}]),d=p(()=>c.value.filter(i=>i.name.toLowerCase().includes(r.value.toLowerCase())));return(i,t)=>(l(),o("div",y,[t[4]||(t[4]=e("h3",{class:"text-xl font-bold text-center"}," Filtro de usuarios por nombre con tablas ",-1)),e("div",v,[t[2]||(t[2]=e("label",{for:"simple-search",class:"sr-only"},"Search",-1)),e("div",h,[t[1]||(t[1]=e("div",{class:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"},[e("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"})])],-1)),m(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),type:"text",id:"simple-search",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Escribe para buscar...",required:""},null,512),[[g,r.value]])])]),e("table",w,[t[3]||(t[3]=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"Name"),e("th",{scope:"col",class:"px-6 py-3"},"Position"),e("th",{scope:"col",class:"px-6 py-3"},"Status")])],-1)),e("tbody",null,[(l(!0),o(u,null,b(d.value,s=>(l(),o("tr",{class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-primary-200 hover:bg-primary-50 dark:hover:bg-primary-600",key:s.name},[e("th",_,[e("img",{class:"w-10 h-10 rounded-full",src:s.image,alt:`${s.name} image`},null,8,k),e("div",j,[e("div",D,a(s.name),1),e("div",L,a(s.email),1)])]),e("td",O,a(s.position),1),e("td",B,[e("div",N,[e("div",{class:f(["h-2.5 w-2.5 rounded-full ml-2 me-2",s.status=="Online"?"bg-green-500":"bg-red-500"])},null,2),x(" "+a(s.status),1)])])]))),128))])])]))}};export{C as default};
