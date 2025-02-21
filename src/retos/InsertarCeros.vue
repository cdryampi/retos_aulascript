<template>
  <div class="container mx-auto py-4 justify-items-center">
    <div class="w-full max-w-sm">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><small class="my-5">Ingrese número:</small></label
      >
      <div
        class="flex flex-col gap-5 justify-center items-center space-x-2 my-8"
      >
        <input
          id="number"
          v-model="numberInput"
          type="number"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa el número"
        />
      </div>
    </div>

    <div class="w-full max-w-sm">
      <button
        @click="addNumber"
        class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        :class="{ 'cursor-not-allowed': isLoading }"
      >
        Añadir
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

const numberInput = ref(0);

const result = ref([]);
const isLoading = ref(false);

const addNumber = () => {
  // Función para añadir ceros al número ingresado y añadirle un 0 a los pares

  let aux_number = numberInput.value;
  if (check_number(aux_number)) {
    if (aux_number % 2 == 0) {
      result.value.push(0);
    }
    result.value.push(aux_number);
  } else {
    console.log("No es un número");
  }
  numberInput.value = 0;
};
const check_number = (number) => {
  // Función para validar si el número ingresado es un número
  let aux_number = -1;
  try {
    aux_number = parseInt(number);
    return true;
  } catch (error) {
    return false;
  }
};
</script>

<style scoped></style>
