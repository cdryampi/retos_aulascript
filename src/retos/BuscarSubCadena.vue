<template>
  <div class="container mx-auto py-4 justify-items-center">
    <div class="w-full max-w-sm">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><small class="my-5">Ingrese candena:</small></label
      >
      <div
        class="flex flex-col gap-5 justify-center items-center space-x-2 my-8"
      >
        <textarea
          id="message"
          rows="4"
          v-model="cadenaInput"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa la frase que quiera."
        ></textarea>
      </div>
    </div>
    <div class="w-full max-w-sm">
      <label
        for="subcadena"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><small class="my-5">Ingrese subcadena:</small></label
      >
      <div
        class="flex flex-col gap-5 justify-center items-center space-x-2 my-8"
      >
        <input
          type="text"
          id="subcadena"
          v-model="subcadenaInput"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa subcadena como quiera."
        />
      </div>
    </div>
    <div class="w-full max-w-sm">
      <button
        @click="calculate"
        class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        :class="{ 'cursor-not-allowed': isLoading }"
      >
        Calcular
      </button>
    </div>
    <div class="w-full max-w-sm">
      <ul class="list-disc">
        <li v-for="element in result" :key="element">
          {{ element }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cadenaInput = ref("");
const subcadenaInput = ref("");
const result = ref([]);
const isLoading = ref(false);

const calculate = () => {
  isLoading.value = true;
  const cadena = cadenaInput.value;
  const subcadena = subcadenaInput.value;
  result.value = getResults(cadena, subcadena);
  isLoading.value = false;
  //limpiar();
};

const getResults = (cadena, subcadena) => {
  const temp_results = [];
  if (cadena === "" || subcadena === "") {
    return temp_results;
  }
  if (subcadena === cadena) {
    return [{ path: cadena }];
  }
  if (subcadena.length > cadena.length) {
    return temp_results;
  }
  if (!existeSubCadenaEnCadena(cadena, subcadena)) {
    return temp_results;
  }
  console.log(cadena, subcadena);
  // Iterar sobre la cadena
  // Caso cadena: 'antesala', subcadena: 'nesa'
  // Tenemos que iterar sobre la cadena y buscar la subcadena en cada iteración, avanzando el index de la subcadena. Si contienen todos los literales.
  // Cuando el resultado encuentre algún valor de la subcadena, se debe agregar a la lista de resultados ejemplo: {path: 'antes'}, {path: 'ntesa'}
  // Tenemos la función de existeSubCadenaEnCadena que nos ayuda a saber si la subcadena existe en la cadena.

  for (let i = 0; i <= cadena.length; i++) {
    let temp_cadena = cadena.slice(i);

    if (temp_cadena.length < subcadena.length) {
      break;
    } else {
      if (existeSubCadenaEnCadena(temp_cadena, subcadena)) {
        temp_results.push({ path: temp_cadena });
      }
    }
  }
  console.log(temp_results);
  return temp_results;
};

const existeSubCadenaEnCadena = (cadena, subcadena) => {
  let sorted_cadena = cadena.split("").sort().join("");
  let sorted_subcadena = subcadena.split("").sort().join("");

  for (let char of sorted_subcadena) {
    let index = sorted_cadena.indexOf(char); // Buscamos el carácter en la cadena ordenada
    if (index === -1) {
      return false; // Si no lo encontramos, la subcadena no puede formarse
    }
    // Eliminamos el carácter encontrado para evitar reutilizarlo incorrectamente
    sorted_cadena =
      sorted_cadena.slice(0, index) + sorted_cadena.slice(index + 1);
  }

  return true;
};

const limpiar = () => {
  cadenaInput.value = "";
  subcadenaInput.value = "";
  result.value = [];
  isLoading.value = false;
};
</script>

<style scoped></style>
