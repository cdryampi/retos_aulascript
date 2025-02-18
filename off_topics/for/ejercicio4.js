// Este script debe escribir la tabla de multiplicar del número que el usuario teclee.
// La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

// Recuerda que el salto de linea es el carácter "\n

import { check_number } from "../utils/check_number.js";

const calculadora = (number = 0) => {
  // Función que recibe un número y devuelve la tabla de multiplicar de ese número 10 veces consecutivamente.
  let numero = 0;

  if (number === 0) {
    numero = prompt("Introduce un número entero");
    numero = check_number(numero);
  } else {
    numero = check_number(number);
  }

  let tabla = "";
  for (let i = 1; i <= 10; i++) {
    tabla += `${numero} x ${i} = ${numero * i}`;
    if (i != 10) {
      tabla += "\n";
    }
  }

  console.log(tabla);
  return tabla;
};

calculadora(4); // 4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36\n4 x 10 = 40
