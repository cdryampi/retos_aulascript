// Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado.
// Luego deberá sacar esa lista con un alert. Los números se separarán por comas.

import { check_number } from "../utils/check_number.js";

const lista_numeros = (number = 0) => {
  // Función que devuelve una lista de números desde 0 hasta el número introducido por el usuario
  let numero = 0;
  if (number === 0) {
    numero = prompt("Introduce un número entero");
    numero = check_number(numero);
  } else {
    numero = check_number(number);
  }
  if (!numero) {
    console.log("No has introducido un número entero");
    return;
  }
  let lista = "";
  let index = 0;

  while (index <= numero) {
    lista += index;
    if (index < numero) {
      lista += ",";
    }
    index++;
  }

  console.log(lista);
  return lista;
};

lista_numeros(5); // 0,1,2,3,4,5
