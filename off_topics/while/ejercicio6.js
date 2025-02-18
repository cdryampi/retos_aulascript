// En este script se pedirá al usuario que teclee un número cada vez.
// El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.

import { check_number } from "../utils/check_number.js";

const pide_numero = () => {
  let numero = -1;

  while (numero !== 0) {
    let tmp_number = prompt(
      "Introduce un número: \nPara finalizar introduce 0"
    );
    tmp_number = check_number(tmp_number);
    if (tmp_number === null) {
      alert("El valor introducido no es un número");
      continue;
    }
    numero = tmp_number;
  }
  return numero;
};
