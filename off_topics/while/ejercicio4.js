// Determinar si el número que teclea el usuario es primo o no.
// Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.

import { check_number } from "../utils/check_number.js";

const es_primo = (numbero = 0) => {
  let numero = 0;
  if (number === 0) {
    numero = prompt("Introduce un número para saber si es primo o no");
    numero = check_number(numero);
  } else {
    numero = check_number(numbero);
  }

  if (!numero) {
    console.log("Número no válido");
    return;
  }

  return numero % 2 === 0
    ? console.log("El número es primo")
    : console.log("El número no es primo");
};
