// Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán
// nombre
// sesiones
// numsesioens
// El nombre es el de la persona, en los sesiones se almacenará el número de kilometros recorridos en cada sesión y numsesiones contiene el número de sesiones anotadas.

// Tiene dos métodos:

// anotar: anota los kilómetros
// media: calcula la media de kilómetros recorridos

class Ficha {
  constructor(nombre) {
    this.nombre = nombre;
    this.sesiones = 0;
    this.numsesiones = 0;
  }

  anotar(kilometros) {
    if (kilometros > 0) {
      this.sesiones += kilometros;
      this.numsesiones++;
    } else {
      console.log("No se puede anotar un número negativo");
    }
  }
  media() {
    if (this.numsesiones === 0 || this.sesiones === 0) {
      console.log("No se puede dividir por 0");
      return 0;
    } else {
      this.sesiones / this.numsesiones;
    }
  }
  msg() {
    return `Nombre: ${this.nombre}, sesiones: ${this.numsesiones}, sesiones: ${this.sesiones}`;
  }
}

const ficha = new Ficha("Juan");
ficha.anotar(5);
ficha.anotar(10);
ficha.anotar(15);
ficha.media();
console.log(ficha.msg());
