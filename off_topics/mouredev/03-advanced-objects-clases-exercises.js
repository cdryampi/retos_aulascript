/*
Clase 3 - Objetos y Clases avanzadas (12/02/2025)
Vídeo: https://www.twitch.tv/videos/2379412787?t=00h21m33s
*/

// 1. Agregega una función al prototipo de un objeto

// 2. Crea un objeto que herede de otro

// 3. Define un método de instancia en un objeto

// 4. Haz uso de get y set en un objeto

// 5. Utiliza la operación assign en un objeto

// 6. Crea una clase abstracta

// 7. Utiliza polimorfismo en dos clases diferentes

// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hola, soy ${this.name}`;
};

Person.prototype.comer = function () {
  return `El usuario ${this.name} esta comiendo.`;
};

const person = new Person("Yampier", 29);

console.log(person.greet());
console.log(person.comer());

// 2. Crea un objeto que herede de otro

let alumno = Object.create(person);
alumno.carrera = "Ing. Sistemas";
alumno.estudiar = function () {
  return `El alumno ${this.name} esta estudiando.`;
};

console.log(alumno.greet());
console.log(alumno.comer());
console.log(alumno.estudiar());

// 3. Define un método de instancia en un objeto

function Programador(name, age) {
  // Clase Programador
  this.name = name;
  this.age = age;
  this.greet = () => `Hola, soy ${this.name}`;
}

Programador.prototype.comer = function () {
  return `El usuario ${this.name} esta comiendo.`;
};

const newProgramador = new Programador("Yampier", 29);
console.log(newProgramador.greet());
console.log(newProgramador.comer());

// 4. Haz uso de get y set en un objeto

function Perro(nombre, raza) {
  let _nombre = nombre;
  let _raza = raza;

  Object.defineProperties(this, {
    nombre: {
      get: function () {
        return _nombre;
      },
      set: function (nuevoNombre) {
        _nombre = nuevoNombre;
      },
    },

    raza: {
      get: function () {
        return _raza;
      },
      set: function (nuevaRaza) {
        _raza = nuevaRaza;
      },
    },
  });
}

const perro = new Perro("Firulais", "Pastor Aleman");

console.log(perro.nombre); // "Firulais"
console.log(perro.raza); // "Pastor Aleman"

perro.nombre = "Rex";
perro.raza = "Doberman";

console.log(perro.nombre); // "Rex"
console.log(perro.raza); // "Doberman"

// 5. Utiliza la operación assign en un objeto

const gato = {
  nombre: "Michi",
  raza: "Siames",
};

const comida_de_gato = {
  comida: "Pescado",
  cantidad: 100,
};

const gato_comida = Object.assign(gato, comida_de_gato);

console.log(gato_comida);

// 6. Crea una clase abstracta

class Animal {
  constructor(nombre) {
    if (new.target === Animal) {
      throw new Error("No puedes instanciar una clase abstracta");
    }
    this.nombre = nombre;
  }

  sonido() {
    throw new Error("El método sonido debe ser implementado");
  }
}

class Chiguagua extends Animal {
  constructor(nombre) {
    super(nombre);
  }

  sonido() {
    return "Guau guau";
  }
}

const perro_con_clase = new Chiguagua("Firulais");
console.log(perro_con_clase.sonido());

// 7. Utiliza polimorfismo en dos clases diferentes

class Lince extends Animal {
  constructor(nombre) {
    super(nombre);
  }

  sonido() {
    return "garhh garhhh";
  }
}

class Lobo extends Animal {
  constructor(nombre) {
    super(nombre);
  }

  sonido() {
    return "Auuuuuuuuuuuuuuuuuu";
  }
}

const lince = new Lince("Lince");
const lobo = new Lobo("Lobo");

console.log(lince.sonido());
console.log(lobo.sonido());

// 8. Implementa un Mixin

const DormitMixin = {
  dormir() {
    return `${this.nombre} esta durmiendo`;
  },
};

Object.assign(Lince.prototype, DormitMixin);
Object.assign(Lobo.prototype, DormitMixin);

console.log(lince.dormir());
console.log(lobo.dormir());

// 9. Crea un Singleton

class Singleton {
  constructor(name) {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.name = name;
  }
}

const singleton1 = new Singleton("Gato"); // Se crea una nueva instancia
const singleton2 = new Singleton(); // No se crea una nueva instancia

console.log(singleton1 === singleton2); // true
console.log(singleton1.name); // Gato
console.log(singleton2.name); // Gato

// 10. Desarrolla un Proxy

const proxyHandler = {
  get: function (target, prop) {
    return target[prop];
  },
  set: function (target, prop, value) {
    if (prop === "anys" && value > 1000) {
      throw new Error("No puedes tener más de 1000 años");
    }
    target[prop] = value; // Asignar el valor a la propiedad del objeto objetivo
    return true; // Indicar que la asignación fue exitosa
  },
};

class Dragon {
  constructor(nombre, anys) {
    this.nombre = nombre;
    this.anys = anys;
  }
  sonido() {
    return "brrrrrrrr";
  }
}

const dragon = new Proxy(new Dragon("Dovah", 1001), proxyHandler);

console.log(`Dragon: ${dragon.nombre} y tiene ${dragon.anys} años`); // Esto debería funcionar correctamente

try {
  dragon.anys = 1001; // Esto debería lanzar un error
} catch (e) {
  console.error(e.message); // "No puedes tener más de 1000 años"
}

dragon.anys = 500; // Esto debería funcionar correctamente
console.log(`Dragon: ${dragon.nombre} y tiene ${dragon.anys} años`); // "Dragon: Dovah y tiene 500 años"
