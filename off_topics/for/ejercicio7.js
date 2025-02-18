// Se trata de dibujar un triángulo rectángulo con asteriscos.
// El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número.
// Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

// Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.

import { check_number } from "../utils/check_number.js";

const gen_triangle = (number = 0) => {
  let numero = 0;
  if (number === 0) {
    numero = prompt("Introduce un número entero");
    numero = check_number(numero);
  } else {
    numero = check_number(number);
  }
  if (!numero) {
    console.log("El valor introducido no es un número entero");
    return;
  }
  let arbol = "";
  for (let i = 1; i <= numero + 1; i++) {
    arbol += "*".repeat(i) + "\n";
  }
  console.log(arbol);
  return arbol;
};

gen_triangle(5); // Debería mostrar un triángulo de 5 lineas
