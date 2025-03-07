// En este ejercicio partimos de dos arrays: artículos que contiene nombres de artículos y precios que contiene lo precios correspondientes de cada artículo.
// Se trata de crear una función precio(art) que lleva como argumento el nombre de un artículo y devuelve el precio correspondiente.
// si el artículo no existe devolverá -1.

const articulos = [
  {
    nombre: "manzanas",
    precio: 1.5,
    money: "EUR",
  },
  {
    nombre: "peras",
    precio: 2.5,
    money: "EUR",
  },
  {
    nombre: "plátanos",
    precio: 1.0,
    money: "EUR",
  },
  {
    nombre: "fresas",
    precio: 3.0,
    money: "EUR",
  },
];

const precio_articulo = (art) => {
  const item = articulos.filter((item) => item.nombre === art);
  if (typeof item[0] === "undefined") {
    return -1;
  } else {
    return "" + item[0].precio + " " + item[0].money;
  }
};

console.table(precio_articulo("manzanas"));
console.table(precio_articulo("peras"));
