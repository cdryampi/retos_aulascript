// En este ejercicio mezclamos bucles con condicionales:
// el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

// Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.
import { check_number } from "../utils/check_number.js";

const division_condicional = (number = 0) => {
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

  let lista = "";

  for (let i = 0; i < numero; i++) {
    // Si el resto de dividir i entre 3 es 2, lo añadimos a la lista

    if (i % 3 === 2) {
      lista += i + "\n";
    }
  }

  console.log(lista);
  return lista;
};

division_condicional(14); // 2, 5, 8 y 11
