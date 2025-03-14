// Crea una función que reciba como argumento una cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento.
// Procura usar prioritariamente los métodos del objeto string

const contar_vocales = (cadena) => {
  let vocales = cadena.match(/[aeiou]/gi);

  if (vocales === null) {
    return "No hay vocales en la cadena.";
  }

  let resultado = vocales.reduce((acc, vocal) => {
    acc[vocal] = (acc[vocal] || 0) + 1;
    return acc;
  }, {});

  return resultado;
};

console.log(contar_vocales("Hola mundo"));
