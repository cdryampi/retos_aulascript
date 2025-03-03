/*
Clase 2 - Estructuras avanzadas (05/02/2025)
Vídeo: https://www.twitch.tv/videos/2373300186?t=00h15m32s
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

// 4. Ordena un array de números de mayor a menor

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

// Ejemplo de uso de map.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cube = numbers.map((number) => number ** 3);
console.log(cube); // [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

// Ejemplo de uso de filter.
const is_pair = numbers.filter((number) => {
  return number % 2 == 0;
});
console.log(is_pair); // [2, 4, 6, 8, 10]

// Ejemplo de uso de reduce.

const sum = numbers.reduce((a, b) => a + b);
console.log(sum); // 55

// Ejercicio de número elevados al cubo y filtrar los pares

const cube_pair = numbers
  .map((number) => {
    return number ** 3;
  })
  .filter((num) => {
    return num % 2 === 0;
  });
console.log(cube_pair); // [8, 64, 216, 512, 1000]

// ejercicio con el flat y flatMap
//El flat sirve para anidar matrices, es decir, si tenemos una matriz que tiene otra matriz dentro, el flat nos permite sacar la matriz interna y dejarla en el mismo nivel que la matriz externa.
//El flatMap es una combinación de map y flat, es decir, primero mapea y luego aplana la matriz.
const array = [1, 2, [3, 4, [5, 6]]];

const flat = array.flat(2); // la profundidad es 2 pero si no se pone nada es 1 y solo aplanaria la primera matriz que encuentre.

console.log(flat); // [1, 2, 3, 4, 5, 6]

const flatMap = array.flat(2).flatMap((number) => number ** 2);
console.log(flatMap); // [2, 4, 6, 8, 10, 12]

// Ordenar un array de números de mayor a menor

const numbers2 = [1, 5, 3, 2, 4, 6, 8, 7, 9, 10];

const sorted_numbers = numbers2.sort((a, b) => {
  return b - a;
});

console.log(sorted_numbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

const nunion = new Set([...set1, ...set2]);
console.log(nunion); // {1, 2, 3, 4, 5, 6, 7, 8}

const intersection = new Set(
  [...set1].filter((num) => {
    return set2.has(num);
  })
);

// Iterar los resultados del ejercicio anterior
nunion.forEach((num) => {
  console.log(num);
});

intersection.forEach((num) => {
  console.log(num);
});

// Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const usuarios = [];

const user1 = new Map();
user1.set("nombre", "Juan");
user1.set("edad", 25);
user1.set("email", "juan@example.com");

const user2 = new Map();
user2.set("nombre", "Ana");
user2.set("edad", 30);
user2.set("email", "ana@gmail.com");

usuarios.push(user1);
usuarios.push(user2);

usuarios.forEach((user) => {
  user.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

// Dado el mapa anterior, crea un array con los nombres
const names = Array.from(
  usuarios.filter((user) => user.has("nombre")).values()
);

names.forEach((name) => {
  if (name.has("nombre")) {
    console.log(name.get("nombre"));
  }
});

// Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

const emails = [];
usuarios.forEach((user) => {
  if (user.get("edad") >= 18) {
    emails.push(user.get("email"));
  }
});

const emailSet = new Set(emails);
console.log(emailSet);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

const user1Obj = Object.fromEntries(user1);
const user2Obj = Object.fromEntries(user2);

const usersObj = [user1Obj, user2Obj];

const usersMap = new Map();
usersObj.forEach((user) => {
  usersMap.set(user.email, user);
});

console.log(usersMap);
