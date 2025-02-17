// Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado.
// Los números se separarán por comas.
// ejemplo:
// Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5
import { check_number } from "../utils/check_number.js";

const pedirNumero = (number = 0) => {
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
  for (let i = 0; i <= numero; i++) {
    if (i === numero) {
      lista += i;
    } else {
      lista += i + ", ";
    }
  }
  console.log(lista); // 0, 1, 2, 3, 4, 5
};

pedirNumero(5);
// test
// pedirNumero() -> 0, 1, 2, 3, 4, 5,
