// Se trata de pedir al usuario que teclee un número entre 1 y 5,
// si escribe alguno que esté fuera de ese rango deberá volver a pedir el número

import { check_number } from "../utils/check_number.js";

const pedir_numero_en_rango = () => {
  let numero = 0;

  while (numero < 1 || numero > 5) {
    let tmp_number = prompt("Introduce un número entre 1 y 5");
    numero = check_number(tmp_number);
    if (numero < 1 || numero > 5) {
      console.log("El número no está en el rango");
    }
  }
  let mensaje = `El número ${numero} está en el rango`;
  console.log(mensaje);
  return mensaje;
};

pedir_numero_en_rango();
