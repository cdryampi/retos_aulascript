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

// 11. Crea un Decorador

// 12. Utiliza un Factory

// 1. Agregega una función al prototipo de un objeto

class Person {
  // Clase Persona
  // Método constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hola, soy ${this.name}`;
  }
}

const yampi = new Person("Yampier", 29);

Person.prototype.comer = function () {
  return `El usuario ${this.name} esta comiendo.`;
};

console.log(yampi.comer());

// 2. Crea un objeto que herede de otro

class Alumno extends Person {
  // Clase Alumno que hereda de Persona
  constructor(name, age, curso) {
    super(name, age);
    this.curso = curso;
  }
}

const alumno = new Alumno("Yampier", 29, "JavaScript");

console.log(alumno.greet());
console.log(alumno.comer());
