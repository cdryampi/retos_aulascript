// Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0.
// En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.
import { check_number } from "../utils/check_number.js";

const min_max = () => {
  let numero = -1;
  let min = 0;
  let max = 1000;

  while (numero != 0) {
    // Pide un número al usuario y lo comprueba con la función check_number
    let tmp = prompt("Introduce un número: \nPara finalizar introduce 0");
    numero = check_number(tmp);
    if (!numero) {
      console.log("El valor introducido no es un número");
      continue;
    }
    // cuando pasamos todos los controles, comprobamos si el número es mayor o menor que el máximo y mínimo
    if (numero > max) {
      max = numero;
    }
    if (numero < min) {
      min = numero;
    }
  }
  console.log(`El número máximo es ${max} y el número mínimo es ${min}`);
};
