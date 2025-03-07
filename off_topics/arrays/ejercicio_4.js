// Crea un array de al menos 10 elementos para guardar números enteros.
// Usa un método para obtener la suma de los números pares y la de los números impares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const suma_pares = numeros
  .filter((numero) => numero % 2 === 0)
  .reduce((a, b) => {
    return a + b;
  });

console.log(suma_pares);

const suma_impares = numeros
  .filter((numero) => numero % 2 !== 0)
  .reduce((a, b) => {
    return a + b;
  });

console.log(suma_impares);
