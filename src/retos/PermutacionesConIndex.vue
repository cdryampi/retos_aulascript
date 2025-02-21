<template>
  <div class="container mx-auto py-4 justify-items-center">
    <div class="w-full max-w-sm">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><small class="my-5">Ingrese candena a permutar:</small></label
      >
      <div
        class="flex flex-col gap-5 justify-center items-center space-x-2 my-8"
      >
        <input
          id="message"
          type="text"
          v-model="cadenaInput"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa la cadena que quiera."
        />
      </div>
    </div>
    <div class="w-full max-w-sm">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><small class="my-5">Ingrese el tamaño de la permuta:</small></label
      >
      <div
        class="flex flex-col gap-5 justify-center items-center space-x-2 my-8"
      >
        <input
          id="number"
          type="number"
          v-model="permutacion_length"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa un número mayor a 0 y menor a la longitud de la cadena."
        />
      </div>
    </div>
    <div class="w-full max-w-sm">
      <button
        @click="calculate"
        class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
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
const permutacion_length = ref(0);
const result = ref([]);

const calculate = () => {
  // función para calcular las permutaciones de los elementos de una cadena con dos bucles anidados.
  result.value = [];
  const cadena = cadenaInput.value;
  const aux_permuta = permutacion_length.value;
  if (
    cadena.length > 0 &&
    cadena.length > permutacion_length.value - 1 &&
    permutacion_length.value > 0
  ) {
    gen_permuta(cadena, aux_permuta);
  }
  cadenaInput.value = "";
  permutacion_length.value = 0;
};

const gen_permuta = (cadena, permutacion_length) => {
  // función recursiva para calcular las permutaciones de los elementos de una cadena con recursividad. Con un permutacion_length fijo para la cantidad de elementos a permutar.
  console.log(cadena, permutacion_length);
  function permuta(cadena, prefix = "", used = new Set()) {
    // Función recursiva para calcular las permutaciones de los elementos de una cadena con recursividad.
    if (prefix.length === permutacion_length) {
      result.value.push(prefix);
      return;
    }
    for (let i = 0; i < cadena.length; i++) {
      if (!used.has(i)) {
        used.add(i);
        permuta(cadena, prefix + cadena[i], used);
        used.delete(i);
      }
    }
  }
  permuta(cadena);
};

const limpiar = () => {
  cadenaInput.value = "";
  result.value = [];
};
</script>

<style scoped></style>
