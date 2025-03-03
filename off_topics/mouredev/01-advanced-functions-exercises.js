/*
Clase 1 - Funciones avanzadas (29/01/2025)
Vídeo: https://www.twitch.tv/videos/2367024319?t=00h08m45s
*/

// 1. Crea una función que retorne a otra función

// 2. Implementa una función currificada que multiplique 3 números

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico

// Una función que retorne a otra función es llamada una función de orden superior que se puede utilizar para funciones currificadas, funciones parciales, funciones de retorno, funciones de callback, funciones de composición, funciones de clausura.

// Ejemplos:

// 1.1 Crear una función currificada que multiplique 3 números.(Función que necesita ser invocada 3 veces para obtener el resultado).
// Viene de la palabra "Curry" que es una técnica de programación funcional que consiste en transformar una función que recibe varios argumentos en una secuencia de funciones que reciben un solo argumento.

const multiply = (a) => (b) => (c) => a * b * c;
multiply(2)(3)(4); // 24

// 1.2 Crear una función parcial que reciba una función y un argumento y retorne una función que espera el resto de los argumentos.

const partial = function (fn, ...args) {
  return function (...newArgs) {
    return fn(...args, ...newArgs);
  };
};

partial(multiply, 2)(3, 4); // 24

// 1.3 Crear una función de callback.

const operation = (a, b, callback) => callback(a, b);
operation(2, 3, (a, b) => a + b); // 5

// 1.4 Crear una función de retorno.
const createCounter = () => {
  // Función que retorna un objeto con métodos para incrementar, decrementar y obtener el valor pero almacenando el estado en un closure.
  let counter = 0;
  return {
    increment: () => counter++,
    decrement: () => counter--,
    getValue: () => counter,
  };
};
createCounter().increment(); // 1
createCounter().decrement(); // -1
createCounter().getValue(); // 0

// 1.5 Crear una función de composición.
const cantar = (animal) => `El ${animal} canta`;
const bailar = (animal) => `El ${animal} baila`;
const comer = (animal) => `El ${animal} come`;

const mascota = Object.assign({ animal: "Rex" }, { cantar, bailar, comer });
mascota.cantar(mascota.animal); // El Rex canta
console.log(mascota.bailar(mascota.animal)); // El Rex baila

// 2. Crear una función currificada que multiplique 3 números.

const curry_function = (num1) => (num2) => (num) => {
  if (
    typeof num === "number" &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    if (num1 === 0 || num2 === 0 || num === 0) {
      return 0;
    }
    return num1 * num2 * num;
  }
  return "Error";
};

const vanila_curry_fun = function (num1) {
  return function (num2) {
    return function (num3) {
      if (
        typeof num3 === "number" &&
        typeof num1 === "number" &&
        typeof num2 === "number"
      ) {
        if (num1 === 0 || num2 === 0 || num3 === 0) {
          return 0;
        }
        return num1 * num2 * num3;
      }
      return "Error";
    };
  };
};

console.log(curry_function(2)(3)(4)); // 24
console.log(vanila_curry_fun(2)(3)(4)); // 24

// 3. Desarrollar una función recursiva que calcule la potencia de un número elevado a un exponente.

const recul_fun = (num, exp) => {
  if (num === 0 || exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return num;
  }
  return num * recul_fun(num, exp - 1);
};

console.log(recul_fun(2, 3)); // 8
console.log(recul_fun(2, 4)); // 16

// 4. Crear una función closure que retorne un objeto con métodos para incrementar, decrementar y obtener el valor.

const contador = (valor) => {
  // no perdemos el scope de la variable contador porque está dentro de la función contador
  let contador = valor;
  return {
    increment: () => contador++,
    decrement: () => contador--,
    getValue: () => contador,
  };
};

const counter = contador(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue()); // 1

const counter2 = contador(10);
console.log(counter2.increment()); // 11
console.log(counter2.increment()); // 12
console.log(counter2.decrement()); // 11

// 5. Crear una función que sume todos los números y luego multiplique el resultado por un multiplicador.

const sumManyTimes = (multiplicador, ...number) => {
  return number.reduce((a, b) => a + b) * multiplicador;
};

console.log(sumManyTimes(2, 1, 2, 3, 4)); // 20

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

const sumaConCallBack = (callback, ...nums) => {
  return callback(nums.reduce((acc, num) => acc + num, 0));
};

sumaConCallBack(
  (result) => {
    console.log(result);
  },
  1,
  2,
  3,
  4,
  5
); // 15

// 7. Desarrolla una función parcial

const partialFunction = (fn, ...args) => {
  // Función que recibe una función y un argumento y retorna una función que espera el resto de los argumentos.

  return (...newArgs) => {
    // Función que recibe el resto de los argumentos y los une con los argumentos iniciales para invocar la función original.
    return fn(args, ...newArgs);
  };
};

console.log(partialFunction(sumManyTimes, 2)(1, 2, 3, 4)); // 20

// 8. Implementa un ejemplo que haga uso de Spread

const spreadFunction = (a, ...nums) => {
  return nums.reduce((a, b) => a + b) * a;
};

console.log(spreadFunction(2, ...[1, 2, 3, 4])); // 20

// 9. Implementa un retorno implícito

const implicitReturn = (a, b) => a + b;

console.log(implicitReturn(2, 3)); // 5

// 10. Haz uso del this léxico

const animal = {
  name: "Rex",
  sound: "Guau",
  bark: function () {
    return `${this.name} hace ${this.sound}`;
  },
};
// Bonus meme lexico this

const animal_this = {
  name: "Rex",
  sound: "Guau",
  bark: function () {
    const self = this;

    return () => {
      return `${self.name} hace ${self.sound}`;
    };
  },
};
console.log(animal.bark()); // Rex hace Guau
console.log(animal_this.bark()()); // solución del meme del this de StackOverflow
