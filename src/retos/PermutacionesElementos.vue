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
const result = ref([]);

const calculate = () => {
  // función para calcular las permutaciones de los elementos de una cadena con dos bucles anidados.
  result.value = [];
  const cadena = cadenaInput.value;
  if (cadena.length > 0) {
    gen_permuta(cadena);
  }
  cadenaInput.value = "";
};

const gen_permuta = (cadena) => {
  // función recursiva para calcular las permutaciones de los elementos de una cadena.

  function permuta(cadena, prefix = "") {
    if (cadena.length === 0) {
      result.value.push(prefix);
    } else {
      for (let i = 0; i < cadena.length; i++) {
        const rem = cadena.slice(0, i) + cadena.slice(i + 1);
        permuta(rem, prefix + cadena[i]);
      }
    }
  }
  permuta(cadena);
  result.value = [...new Set(result.value)];
};

const limpiar = () => {
  cadenaInput.value = "";
  result.value = [];
};
</script>

<style scoped></style>
