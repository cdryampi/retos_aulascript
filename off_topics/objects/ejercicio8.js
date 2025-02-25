// Para implementar un grupo de alumnos de un curso se crea una lista de objetos alumno.
// Cada objeto alumno se caracteriza por el nombre del alumno, su número de matrícula y su calificacion.

// El objeto tiene un método para poner la calificación: calificar(nota).

// Crea el script para implementar  un grupo de 4 alumnos.

class Alumno {
  constructor(nombre, matricula) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.calificaciones = [];
  }

  calificar(nota) {
    if (nota >= 0 && nota <= 10) {
      this.calificaciones.push(nota);
    } else {
      console.log("La nota debe estar entre 0 y 10");
    }
  }
  msg() {
    return `Alumno ${this.nombre} con matricula ${
      this.matricula
    } tiene una media de ${this.media()}`;
  }
  media() {
    if (this.calificaciones.length === 0) {
      return 0;
    }
    return (
      this.calificaciones.reduce((a, b) => a + b) / this.calificaciones.length
    );
  }
}

const alumnos = [
  new Alumno("Juan", 123),
  new Alumno("Maria", 124),
  new Alumno("Pedro", 125),
  new Alumno("Ana", 126),
];

for (let alumno of alumnos) {
  for (let i = 0; i < 10; i++) {
    alumno.calificar(Math.floor(Math.random() * 11));
  }
}

for (let alumno of alumnos) {
  let media_alumno = alumno.media();
  let msg = alumno.msg();
  if (media_alumno < 5) {
    msg += `\tT.T`;
  } else if (media_alumno > 5) {
    msg += `\tF.F`;
  } else if (media_alumno > 7) {
    msg += `\tA.P`;
  }
  console.log(msg);
}
