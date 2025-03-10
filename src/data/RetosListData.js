import { comment } from "postcss";

export const RetosListData = [
  {
    id: 1,
    title: "Filtrado de tablas",
    subTile: "filtro reactivo de tablas",
    description:
      "Este reto trata del manejo del DOM, de las talbas, de los bucles y de las cadenas.\nTe pide que filtres una tabla que tienes en una página web a partir de los datos que vas tecleando en un campo de texto. Es totalmente dinámico, a medida que el usuario teclea la tabla se debe atualizar.\nPuede filtrar por valores en cualquier columna de la tabla.",
    url: "/reto01",
    tags: ["DOM", "tablas", "bucles", "cadenas"],
    dificultad: "dificil",
    tiempoEstimado: 15, // minutos
    intentosPromedio: 3,
    popularidad: 8.5, // de 10
    resueltos: 120,
    completada: true,
    component: "FiltradoTablas",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/FiltradoTablas.vue",
  },
  {
    id: 2,
    title: "Reordenar aleatoriamente",
    subTile:
      "Utilizando un método random propio de ordenación tipo el cifrado César",
    description:
      "Es un reto para que manejes métodos de array. Partiendo de una lista de números deberás conseguir reordenarlos de manera aleatoria.",
    url: "/reto02",
    tags: ["arrays", "bucles"],
    dificultad: "facil",
    tiempoEstimado: 10,
    intentosPromedio: 2,
    popularidad: 7.8,
    resueltos: 95,
    completada: true,
    component: "OrdenarAleatoriamente",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/OrdenarAleatoriamente.vue",
  },
  {
    id: 3,
    title: "Mínimo Común Múltiplo",
    subTile: "Método básico de matemáticas",
    description:
      "Un reto matemático consistente en definir una función capaz de determinar el mínimo común múltiplo de un par de números enteros positivos",
    url: "/reto03",
    tags: ["matemáticas", "funciones"],
    dificultad: "facil",
    tiempoEstimado: 20,
    intentosPromedio: 4,
    popularidad: 8.0,
    resueltos: 110,
    completada: true,
    component: "MinimoComunMultiplo",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/MinimoComunMultiplo.vue",
  },
  {
    id: 4,
    title: "Items repetidos en un array",
    subTile: "función para eliminar duplicados distinta a hacer un set",
    description:
      "Un reto para manejar arrays. Se trata de una función que a partir de una lista de números enteros devuelve otra lista con los números que están repetidos en la lista original",
    url: "/reto04",
    tags: ["arrays", "funciones"],
    dificultad: "facil",
    tiempoEstimado: 15,
    intentosPromedio: 3,
    popularidad: 7.5,
    resueltos: 100,
    completada: true,
    component: "ItemsRepetidosArray",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/ItemsRepetidosArray.vue",
  },
  {
    id: 5,
    title: "Un generador de passwords",
    subTile:
      "Con al menos una letra mayúscula, un número y un caracter especial",
    description:
      "Un reto para quienes están empezando, se trata de crear un script que genere una password seguros, es decir, eu contengo al menos una letra mayúscula, un número y un caracter especial de entre un conjunto dado.",
    url: "/reto05",
    tags: ["cadenas", "funciones"],
    dificultad: "intermedio",
    tiempoEstimado: 25,
    intentosPromedio: 5,
    popularidad: 8.2,
    resueltos: 130,
    completada: true,
    component: "GeneradorPassword",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/GeneradorPassword.vue",
  },
  {
    id: 6,
    title: "Dividir frases sin guiones",
    subTile:
      "Ajustar una frase a un ancho determinado sin usar guiones para romper palabras",
    description:
      "En este reto te planteo que crees una función capaz de ajustar una frase a un ancho determinado sin usar guiones para romper palabras.",
    url: "/reto06",
    tags: ["cadenas", "funciones"],
    dificultad: "intermedio",
    tiempoEstimado: 20,
    intentosPromedio: 4,
    popularidad: 7.9,
    resueltos: 105,
    completada: true,
    component: "DivisorFrase",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/DivisorFrase.vue",
  },
  {
    id: 7,
    title: "Área de un rectángulo",
    subTile: "Cálculo del área de un rectángulo",
    description:
      "Un reto matemático para calcular el área de un rectángulo a partir de su base y su altura.",
    url: "/reto07",
    tags: ["matemáticas", "funciones"],
    dificultad: "facil",
    tiempoEstimado: 10,
    intentosPromedio: 2,
    popularidad: 7.6,
    resueltos: 90,
    completada: true,
    component: "AreaRectangulo",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/AreaRectangulo.vue",
  },
  {
    id: 8,
    title: "Frecuencia de caracteres",
    subTile:
      "Contar la frecuencia de aparición de los caracteres en una cadena de texto",
    description:
      "Un reto para contar la frecuencia de aparición de los caracteres en una cadena de texto.",
    url: "/reto08",
    tags: ["cadenas", "funciones"],
    dificultad: "facil",
    tiempoEstimado: 15,
    intentosPromedio: 3,
    popularidad: 8.1,
    resueltos: 115,
    completada: true,
    component: "FrecuenciaCaracteres",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/FrecuenciaCaracteres.vue",
  },
  {
    id: 9,
    title: "De objeto a Array",
    subTile: "Convertir un objeto en un array de arrays",
    description: "Un reto para convertir un objeto en un array de arrays.",
    url: "/reto09",
    tags: ["objetos", "arrays"],
    dificultad: "facil",
    tiempoEstimado: 20,
    intentosPromedio: 4,
    popularidad: 7.7,
    resueltos: 100,
    completada: true,
    component: "ArrayDeObjetos",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/ArrayDeObjetos.vue",
  },
  {
    id: 10,
    title: "Suma de subconjuntos. Recursiva",
    subTile:
      "Calcular la suma de todos los subconjuntos de un array de números",
    description:
      "Un reto para calcular la suma de todos los subconjuntos de un array de números.",
    url: "/reto10",
    tags: ["arrays", "recursividad"],
    dificultad: "dificil",
    tiempoEstimado: 50,
    intentosPromedio: 5,
    popularidad: 7.8,
    resueltos: 95,
    completada: true,
    component: "SumaSubconjuntoBackTrack",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/SumaSubconjuntoBackTrack.vue",
  },
  {
    id: 11,
    title: "Suma de subconjuntos",
    subTile:
      "Calcular la suma de todos los subconjuntos de un array de números",
    description:
      "Un reto para calcular la suma de todos los subconjuntos de un array de números.",
    url: "/reto11",
    tags: ["arrays", "bucles"],
    dificultad: "facil",
    tiempoEstimado: 20,
    intentosPromedio: 4,
    popularidad: 7.9,
    resueltos: 105,
    completada: true,
    component: "SumaSubconjuntoSinBackTrack",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/SumaSubconjuntoSinBackTrack.vue",
  },
  {
    id: 12,
    title: "Una calculadora simple",
    subTile: "Realizar las operaciones básicas",
    description:
      "Un reto para crear una calculadora simple que realice las operaciones básicas.",
    url: "/reto12",
    tags: ["cadenas", "funciones"],
    dificultad: "facil",
    tiempoEstimado: 15,
    intentosPromedio: 3,
    popularidad: 8.0,
    resueltos: 110,
    completada: true,
    component: "CalculadoraSimple",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/CalculadoraSimple.vue",
  },
  {
    id: 13,
    title: "Encontrar una cadena dentro de otra",
    subTile: "Un reto para encontrar una cadena dentro de otra",
    description: "Un reto para encontrar una cadena dentro de otra.",
    url: "/reto13",
    tags: ["cadenas", "funciones"],
    dificultad: "facil",
    tiempoEstimado: 10,
    intentosPromedio: 2,
    popularidad: 7.5,
    resueltos: 90,
    completada: true,
    component: "BuscarSubCadena",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/BuscarSubCadena.vue",
  },
  {
    id: 14,
    title: "Sistema de recuento simple",
    subTile: "Un reto para crear un sistema de recuento simple",
    description: "Un reto para crear un sistema de recuento simple.",
    url: "/reto14",
    tags: ["cadenas", "funciones"],
    dificultad: "facil",
    tiempoEstimado: 20,
    intentosPromedio: 4,
    popularidad: 7.6,
    resueltos: 95,
    completada: true,
    component: "RecuentoSimple",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/RecuentoSimple.vue",
  },
  {
    id: 15,
    title: "Implementar una lista enlazada doble",
    subTile: "Un reto para implementar una lista enlazada doble",
    description: "Un reto para implementar una lista enlazada doble.",
    url: "/reto15",
    tags: ["estructuras de datos", "funciones"],
    dificultad: "facil",
    tiempoEstimado: 25,
    intentosPromedio: 5,
    popularidad: 7.7,
    resueltos: 100,
    completada: true,
    component: "ListaDoblementeEnlazada",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/ListaDoblementeEnlazada.vue",
  },
  {
    id: 16,
    title: "Insertar ceros en una lista",
    subTile: "Un reto para insertar ceros en una lista",
    description: "Un reto para insertar ceros en una lista.",
    url: "/reto16",
    tags: ["estructuras de datos", "funciones"],
    dificultad: "facil",
    tiempoEstimado: 15,
    intentosPromedio: 3,
    popularidad: 7.8,
    resueltos: 105,
    completada: true,
    component: "InsertarCeros",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/InsertarCeros.vue",
  },
  {
    id: 17,
    title: "Permutaciones de caracteres",
    subTile:
      "Un reto para calcular las permutaciones de una cadena de caracteres",
    description:
      "Un reto para calcular las permutaciones de una cadena de caracteres.",
    url: "/reto17",
    tags: ["cadenas", "recursividad"],
    dificultad: "intermedio",
    tiempoEstimado: 30,
    intentosPromedio: 6,
    popularidad: 8.2,
    resueltos: 120,
    completada: true,
    component: "PermutacionesElementos",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/PermutacionesElementos.vue",
  },
  {
    id: 18,
    title: "Combinaciones de caracteres",
    subTile:
      "Un reto para calcular las combinaciones de una cadena de caracteres",
    description:
      "Un reto para calcular las combinaciones de una cadena de caracteres.",
    url: "/reto18",
    tags: ["cadenas", "recursividad"],
    dificultad: "avanzado",
    tiempoEstimado: 35,
    intentosPromedio: 7,
    popularidad: 8.0,
    resueltos: 110,
    completada: true,
    component: "PermutacionesConIndex",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/PermutacionesConIndex.vue",
  },
  {
    id: 19,
    title: "Paréntesis, llaves, corchetes ¿correctos?",
    subTile:
      "Un reto para comprobar si los paréntesis, llaves y corchetes están correctamente anidados",
    description:
      "Un reto para comprobar si los paréntesis, llaves y corchetes están correctamente anidados.",
    url: "/reto19",
    tags: ["cadenas", "pilas"],
    dificultad: "intermedio",
    tiempoEstimado: 25,
    intentosPromedio: 5,
    popularidad: 7.9,
    resueltos: 105,
    completada: true,
    component: "ErroresContador",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/ErroresContador.vue",
  },
  {
    id: 20,
    title: "Cifrado César",
    subTile:
      "Un reto para cifrar y descifrar un mensaje usando el cifrado César",
    description:
      "Un reto para cifrar y descifrar un mensaje usando el cifrado César.",
    url: "/reto20",
    tags: ["cadenas", "funciones"],
    dificultad: "intermedio",
    tiempoEstimado: 20,
    intentosPromedio: 4,
    popularidad: 8.1,
    resueltos: 115,
    completada: true,
    component: "CifradoCesar",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/CifradoCesar.vue",
  },
  {
    id: 21,
    title: "Array ¿en orden ascendente?",
    subTile:
      "Un reto para comprobar si un array está ordenado de manera ascendente",
    description:
      "Un reto para comprobar si un array está ordenado de manera ascendente.",
    url: "/reto21",
    tags: ["arrays", "bucles"],
    dificultad: "intermedio",
    tiempoEstimado: 15,
    intentosPromedio: 3,
    popularidad: 7.8,
    resueltos: 100,
    completada: true,
    component: "ArrayAscendente",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/ArrayAscendente.vue",
  },
  {
    id: 22,
    title: "Anagramas",
    subTile: "Un reto para comprobar si dos cadenas son anagramas",
    description: "Un reto para comprobar si dos cadenas son anagramas.",
    url: "/reto22",
    tags: ["cadenas", "funciones"],
    dificultad: "intermedio",
    tiempoEstimado: 20,
    intentosPromedio: 4,
    popularidad: 8.0,
    resueltos: 110,
    completada: true,
    component: "Anagrama",
    github_url:
      "https://github.com/cdryampi/retos_aulascript/blob/main/src/retos/Anagrama.vue",
  },
];
