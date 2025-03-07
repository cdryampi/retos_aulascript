// Tenemos dos listas de asistentes a dos cursos: html y css.
// Queremos obtener una lsita de los asistentes a ambos cursos. La lista estará ordenada.

const html = ["Juan", "María", "Pedro", "Laura", "Carlos"];
const css = ["Ana", "Luis", "Juan", "Pedro", "Elena"];

const asistentes = html.filter((nombre) => {
  if (css.includes(nombre)) {
    return nombre;
  }
}, []);

console.log(asistentes); // ["Juan", "Pedro"]
