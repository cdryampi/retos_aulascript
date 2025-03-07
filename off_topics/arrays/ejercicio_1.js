//Este ejercicio solo te pide que crees un array de nombre diasSemana para contener 7 elementos.
//Luego rellena el array con los nombres de los días comenzando por Lunes hasta Domingo.

const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const diasSemanas = [];

dias.map((dia) => {
  diasSemanas.push({
    id: dias.indexOf(dia) + 1,
    dia: dia,
  });
});

diasSemanas.forEach((dia) => {
  console.log(dia);
});
