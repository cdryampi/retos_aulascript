// Crea un array para albergar al menos 10 números enteros cualesquiera, luego rellena el array (o créalo ya con los valores).
// El ejercicio trata de crear a partir de este array otros dos uno con los números pares y otro con los impares. No debes usar bucles,
// usa el método del array qe creas más apropiado.

const numeros = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 10)
);

const pares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

const impares = numeros.filter((numero) => {
  return numero % 2 !== 0;
});

console.log(pares);
console.log(impares);
