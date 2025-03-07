// En este ejercicio debes crear dos arrays para representar dos equipos de trabajo. Al primer array le llamaremos ocupados y al segundo libres.
// Ambos están llenos con 5 nombres.

// Debes crear una función rotar(lst1, lst2) que pase el primer nombre de la lista lst1 a l final de lst2, y luego el primero de la lst2 a l final de lst1.

// Para ver que funciona escribe los arrays antes y después de usar esta función.

const ocupados = ["Juan", "María", "Pedro", "Laura", "Carlos"];
const libres = ["Ana", "Luis", "Sara", "Miguel", "Elena"];

const rotar = (lst1, lst2) => {
  lst1.push(lst2.shift());
  lst2.push(lst1.shift());

  return [...lst1, ...lst2];
};

console.log(ocupados); // ["Juan", "María", "Pedro", "Laura", "Carlos"]
console.log(libres); // ["Ana", "Luis", "Sara", "Miguel", "Elena"]
console.log(rotar(ocupados, libres)); // ["María", "Pedro", "Laura", "Carlos", "Elena", "Ana", "Luis", "Sara", "Miguel", "Juan"]
console.log(ocupados); // ["Pedro", "Laura", "Carlos", "Elena", "Ana"]
console.log(ocupados); // ["María", "Pedro", "Laura", "Carlos", "Elena"]
