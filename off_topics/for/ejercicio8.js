// Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario.
// El resultado será de la forma "Los números enteros de 0 a n  suman suma"

import { check_number } from "../utils/check_number.js";

const suma_enteros = (number = 0) => {
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
  let suma = 0;

  for (let i = 0; i <= numero; i++) {
    suma += i;
  }
  console.log(`Los números enteros de 0 a ${numero} suman ${suma}`);
  return suma;
};

suma_enteros(5); // Debería mostrar "Los números enteros de 0 a 5 suman 15"
