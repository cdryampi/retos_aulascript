<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col justify-center items-center space-x-4 my-8">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><small class="my-5"
          >Ingrese números y letras. Solo pillaremos los valores
          númericos:</small
        ></label
      >
      <div
        class="flex flex-col gap-5justify-center items-center space-x-2 my-8"
      >
        <textarea
          id="message"
          rows="10"
          cols="50"
          v-model="inputNums"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa números como quiera. Separados por coma. Ejemplo: 1,2,3,4,5"
        ></textarea>
        <button
          @click="calNums"
          class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          :class="{ 'cursor-not-allowed': isLoading }"
        >
          Calcular
        </button>
        <button
          @click="limpiar"
          class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          :class="{ 'cursor-not-allowed': isLoading }"
        >
          Limpiar
        </button>

        <div class="max-w-sm mx-auto mt-5">
          <label
            for="number-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Introduce el resultado final:</label
          >
          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="90210"
            required
            v-model="finalInput"
          />
        </div>
        <div class="mt-10" v-if="isValidArray || msgSystem">
          <p
            class="text-center text-2xl font-bold text-gray-900 dark:text-white"
          >
            <span class="text-3xl me-5 font-extrabold">Resultados:</span>
            {{ msgSystem }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputNums = ref("");
const finalInput = ref("");
const isLoading = ref(false);
const isValidArray = ref(false);
const msgSystem = ref("");

const calNums = async () => {
  // Función para sacar los números y sumarlos.
  isLoading.value = true;
  await findNumbers(); //
  isLoading.value = false;
};

const extraerNumeros = (texto) => {
  // Función para extraer los números de un texto y devolverlos en un array.
  const numeros = texto.match(/\d+/g); // Extrae números de cualquier parte del texto
  const numeros_enteros = numeros.map((num) => parseInt(num, 10)); // Convierte los números a enteros de base 10
  const numeros_filta = numeros_enteros.filter((num) => num !== NaN); // Filtra los números que no sean NaN
  const set_numebrs = new Set(numeros_filta); // Elimina los números duplicados
  return Array.from(set_numebrs); // Devuelve un array con los números
};

const findNumbers = async () => {
  // Función para encontrar los números spliteados por una coma y enviarlos a la función de suma de números.

  let result = extraerNumeros(inputNums.value);

  // comporbar valores antes de iniciar el backtracking

  if (result.length === 0) {
    msgSystem.value = "No hay números en el array";
    return;
  }
  if (finalInput.value === "") {
    msgSystem.value = "Introduce un número para sumar";
    return;
  }

  if (result.length === 1) {
    if (result[0] === finalInput.value) {
      msgSystem.value = "El número es igual al resultado";
    } else {
      msgSystem.value = "El número no es igual al resultado";
    }
    return;
  }

  result = result.filter((num) => num !== 0); // Filtramos los números que no sean 0.
  result = [...new Set(result)]; // Eliminamos los números duplicados.

  backTrack(result, finalInput.value); // iniciamos el backtracking
  isValidArray.value = true;
};

const backTrack = async (numeros, objetivo) => {
  // Función para hacer el backtracking de los números y sumarlos hasta llegar al resultado final y mostrarlo

  function backTrackHelper(numeros, objetivo, index, sum, path, result) {
    if (sum === objetivo) {
      // cuando la suma de los números sea igual al resultado final, retornamos el path con los números que sumaron el resultado.
      result.push(path);
      return;
    }

    if (sum > objetivo) {
      // si la suma de los números es mayor al resultado final, retornamos. Hemos llegado al final y no hay más números que sumar.
      return;
    }
    for (let i = index; i < numeros.length; i++) {
      // Recorremos los números y sumamos
      backTrackHelper(
        numeros,
        objetivo,
        i + 1,
        sum + numeros[i],
        [...path, numeros[i]],
        result
      );
    }
  }
  const result = [];
  await backTrackHelper(numeros, objetivo, 0, 0, [], result);
  if (result.length === 0) {
    // Si no hay resultados, mostramos un mensaje de error.
    msgSystem.value = "No hay resultados";
  } else {
    // Si hay resultados, mostramos los resultados.
    msgSystem.value = result;
  }
};

const limpiar = () => {
  // Función para limpiar los valores de los inputs.
  inputNums.value = "";
  finalInput.value = "";
  isValidArray.value = false;
  isLoading.value = false;
  msgSystem.value = "";
};
</script>

<style scoped></style>
