// Crea una clase que lamaremos Bus. Sus atributos serán:

// capacidad: número máximo de pasajeros
// pasajeros: número de pasajeros (inicialmente 0)
// conductor: objeto conductor.
// Sus métodos

// subir(pasajeros): aumenta el numero de pasajeros
// bajar(pasajaeros): disminuye el número de pasajeros
// conductor: asigna un objeto conductor.
// El ojeto conductor es de una clase (Conductor) cuyos atributos son:

// nombre: nombre del conductor
// licencia: un número que identifica al condcutor.
// Al crear el objeto se asigna también el conductor

// No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.

class Conductor {
  constructor(nombre, licencia) {
    this.nombre = nombre;
    this.licencia = licencia;
  }
}

class Bus {
  constructor(capacidad, conductor) {
    this.conductor = conductor;
    if (capacidad < 0) {
      throw new Error("La capacidad no puede ser negativa");
    }
    this.pasajeros = 0;
    this.capacidad = capacidad;
  }

  subir(entradas) {
    if (entradas < 0) {
      throw new Error("No se puede subir un número negativo de pasajeros");
    }
    if (this.pasajeros + entradas > this.capacidad) {
      throw new Error("No se pueden subir más pasajeros de los que caben");
    }
    this.pasajeros += entradas;
  }
  bajar(salidas) {
    if (salidas < 0) {
      throw new Error("No se puede bajar un número negativo de pasajeros");
    }
    if (this.pasajeros - salidas < 0) {
      throw new Error("No se pueden bajar más pasajeros de los que hay");
    }
    this.pasajeros -= salidas;
  }

  msg() {
    return `El bus tiene una capacidad de ${this.capacidad} pasajeros, actualmente hay ${this.pasajeros} pasajeros y el conductor es ${this.conductor.nombre}`;
  }
  test = () => {
    return `El bus tiene una capacidad de ${this.capacidad} pasajeros, actualmente hay ${this.pasajeros} pasajeros y el conductor es ${this.conductor.nombre}`;
  };
}

let conductor_1 = new Conductor("Juan", 123456);
let bus_1 = new Bus(50, conductor_1);
bus_1.subir(10);
bus_1.bajar(5);
console.log(bus_1.msg());
console.log(bus_1.test());
