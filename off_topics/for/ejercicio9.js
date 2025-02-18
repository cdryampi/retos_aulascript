// Programa un script que pida al usuario que teclee 4 números (uno cada vez).
// Con esos números el programa deberá calcular la media aritmética.
// O sea la suma de los 4 números dividida entre 4

import { check_number } from "../utils/check_number.js";

const media_aritmetica = () => {
  let suma = 0;
  for (let i = 0; i < 4; i++) {
    let numero = prompt("Introduce un número entero");
    numero = check_number(numero);
    if (!numero) {
      console.log("El valor introducido no es un número entero");
      return;
    }
    suma += numero;
  }

  let media = suma / 4;
  console.log(`La media aritmética de los 4 números es ${media}`);
  return media;
};

media_aritmetica(); // Debería mostrar la media aritmética de los 4 números introducidos
