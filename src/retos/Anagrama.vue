<template>
  <div class="container mx-auto py-4 justify-items-center">
    <div class="w-full max-w-sm">
      <div class="mb-2 flex justify-between items-center">
        <label
          for="frase1"
          class="text-sm font-medium text-gray-900 dark:text-white"
        >
          Introduce una frase:
        </label>
      </div>

      <div class="flex items-center flex-col">
        <div class="relative w-full">
          <input
            id="frase1"
            type="text"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            v-model="fraseInput"
            placeholder="Introduce una frase"
          />
        </div>
        <div class="relative w-full pt-5">
          <input
            id="frase2"
            type="text"
            class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            v-model="frase2Input"
            placeholder="Introduce una frase"
          />
        </div>
        <button
          @click="checkAnagrama()"
          class="mt-5 shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary-700 dark:bg-primary-600 border hover:bg-primary-800 dark:hover:bg-primary-700 rounded-s-lg border-primary-700 dark:border-primary-600 hover:border-primary-700 dark:hover:border-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800"
        >
          es Anagrama?
        </button>
      </div>

      <div class="mt-5">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
          Resultado:
        </h2>
        <p class="my-5 text-sm font-medium">
          Resultado:
          <span>
            Anagrama?:
            <span v-if="error" class="text-red-500">No</span>
            <span v-else class="text-green-500">Sí</span>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fraseInput = ref("");
const frase2Input = ref("");
const error = ref(false);

const checkAnagrama = () => {
  // Función que revisa si dos frases son anagramas o no
  let frase1 = fraseInput.value;
  let frase2 = frase2Input.value;

  frase1.trim().toLocaleLowerCase();
  frase2.trim().toLocaleLowerCase();

  if (frase1.length !== frase2.length) {
    error.value = true;
    return;
  }
  if (frase1 === frase2) {
    error.value = true;
    return;
  }

  frase1 = frase1.split("").join("");
  frase2 = frase2.split("").reverse().join("");

  if (frase1 === frase2) {
    error.value = false;
    return;
  } else {
    error.value = true;
    return;
  }
};
</script>
