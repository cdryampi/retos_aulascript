<template>
  <div class="container mx-auto py-4 justify-items-center">
    <div class="w-full max-w-sm">
      <label
        for="number"
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
      >
        Añadir
      </button>
    </div>
    <div class="w-full max-w-sm">
      <p class="my-5 text-sm font-medium" v-if="numeros_ascedentes.length > 0">
        Resultado:
        <span
          :class="{
            'text-red-500': result === 'desordenado',
            'text-green-500': result === 'ordenado',
          }"
        >
          {{ result }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const numberInput = ref(0);

const result = ref("");
const numeros_ascedentes = ref([]);

const addNumber = () => {
  // Función para añadir ceros al número ingresado y añadirle un 0 a los pares

  let aux_number = numberInput.value;
  if (check_number(aux_number)) {
    numeros_ascedentes.value.push(aux_number);
  } else {
    console.log("No es un número");
  }
  numberInput.value = 0;
  // Validar si el array está ordenado de forma ascendente
  check_ascendente();
};

const check_ascendente = () => {
  // Función para validar si el array está ordenado de forma ascendente
  let aux_result = numeros_ascedentes.value;
  if (aux_result.length === 0) {
    result.value = "No hay elementos";
    return;
  }
  if (aux_result.length === 1) {
    result.value = "ordenado";
    return;
  }
  aux_result.reduce((acc, item) => {
    if (acc > item) {
      result.value = "desordenado";
    } else {
      result.value = "ordenado";
    }
    return item;
  });
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
