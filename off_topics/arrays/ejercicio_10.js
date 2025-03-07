// Tienes una lista de objetos con los nombres de los miembros de una familia.
// Este script debe devolver dos objetos con los datos (nombre y edad) del miembro de mayor edad y del de menor edad.

const familia = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 18 },
  { nombre: "María", edad: 35 },
  { nombre: "Pedro", edad: 42 },
  { nombre: "Luis", edad: 15 },
  { nombre: "Rosa", edad: 28 },
  { nombre: "Carmen", edad: 17 },
  { nombre: "Antonio", edad: 40 },
  { nombre: "Manuel", edad: 38 },
  { nombre: "Pablo", edad: 21 },
];

const datosFiltrados = familia.sort((a, b) => a.edad - b.edad);

const menorEdad = datosFiltrados[0];
const mayorEdad = datosFiltrados[datosFiltrados.length - 1];

console.log(menorEdad);
console.log(mayorEdad);

console.table(datosFiltrados);
