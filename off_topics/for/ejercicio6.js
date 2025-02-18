// Se quiere tener un contador de dos dígitos en base 5.
// El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1.
// El contador debe deternerse cuando alcancemos el valor 1:4

import { check_number } from "../utils/check_number.js";

const contador_base_5 = (base, limit) => {
  // Función que recibe dos números y devuelve una lista con los números de dos dígitos en base 5.
  let lista = "";

  for (let i = 0; i <= base; i++) {
    for (let j = 0; j <= limit; j++) {
      lista += `${i}:${j}\n`;
    }
  }
  console.log(lista);
};

contador_base_5(1, 4); // 0:0\n0:1\n0:2\n0:3\n0:4\n1:0\n1:1\n1:2\n1:3\n1:4\n
