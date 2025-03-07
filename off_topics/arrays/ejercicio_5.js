// Crea un array bidimensional para almacenar nombre y calificación de un grupo de asistentes a un curso.
// Una vez creado rellénalo con al menos 4 elementos y luego ordénalos por orden crecientes de las calificaciones.

const asistentes = [
  ["Juan", 8],
  ["María", 6],
  ["Pedro", 9],
  ["Laura", 7],
];

const asistentes_ordenados = asistentes.sort((a, b) => {
  return a[1] - b[1];
});

console.table(asistentes_ordenados);
