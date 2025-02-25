// Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno.
// El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas.
// El script imprimirá el nombre y la media de sus calificaciones
// Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8

// Solución

const alumno = {
  nombre: "Juan",
  ingles: 9,
  programacion: 8,
  HTML: 7,
  media: function () {
    return (this.ingles + this.programacion + this.HTML) / 3;
  },
};
// la función flecha no funciona porque no tiene acceso a this porque tiene su propio contexto T.T.

console.log(`Nota media de ${alumno.nombre}: ${alumno.media()}`); // Nota media de Juan: 8
