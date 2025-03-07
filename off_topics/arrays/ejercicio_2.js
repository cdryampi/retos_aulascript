// Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) y utiliza un método del objeto para recorrer el array y convertir
//  cada elemento de ese array a mayúsculas. sa console.table para ver el resultado.

let diasLaborales = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

diasLaborales = diasLaborales.map((dia) => {
  return dia.toUpperCase();
}, []);

console.table(diasLaborales);
