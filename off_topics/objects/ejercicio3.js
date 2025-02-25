// En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos propiedades:
// masa, volumen y un método densidad que calcule este valor (masa/volumen).
// Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.

class Piedra {
  constructor(masa, volumen) {
    this.masa = masa;
    this.volumen = volumen;
  }

  densidad() {
    if (this.volumen === 0 || this.volumen === 0) {
      return "No se puede dividir por 0";
    }
    return this.masa / this.volumen;
  }
}

const piedra = new Piedra(10, 5);
console.log(piedra.densidad()); // 2
