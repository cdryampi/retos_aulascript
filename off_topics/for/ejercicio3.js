// Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario.
// Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').

import { check_number } from "../utils/check_number.js";

const numero_positivo_pares = (number = 0) => {
  // Función que printea los números pares por debajo del número introducido
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
  if (numero % 2 !== 0) {
    // Aseguramos que el número introducido es par
    numero--;
  }

  let lista = "";

  for (let i = 0; i <= numero; i += 2) {
    lista += i + "\n";
  }
  if (numero === 0) {
    lista = "0";
  }
  console.log(lista);
  return lista;
};

numero_positivo_pares(9);
