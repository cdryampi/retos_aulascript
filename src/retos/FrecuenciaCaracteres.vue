<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col justify-center items-center space-x-4 my-8">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><small class="my-5">Ingrese el texto a procesar:</small></label
      >
      <div
        class="flex flex-col gap-5justify-center items-center space-x-2 my-8"
      >
        <textarea
          id="message"
          rows="4"
          v-model="inputText"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa literales como quiera."
        ></textarea>
        <button
          @click="calNums"
          class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          :class="{ 'cursor-not-allowed': isLoading }"
        >
          Calcular
        </button>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  letra/repetidos
                </th>
              </tr>
            </thead>
            <tbody>
              <div v-for="element in result" :key="element.number">
                <tr
                  v-if="element?.count > 0"
                  class="border-b border-gray-200 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {{ element.letter }}
                  </th>
                  <td scope="row" class="px-6 py-4">{{ element?.count }}</td>
                </tr>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputText = ref("");
const result = ref([]);
const isLoading = ref(false);

const calNums = () => {
  // Función para calcular los números repetidos
  isLoading.value = true;
  setTimeout(() => {
    findStrings();
    isLoading.value = false;
  }, 1000);
};

const findStrings = () => {
  // Función para encontrar los letras repetidas
  inputText.value = inputText.value.replace(/\s/g, ""); // Eliminar espacios
  let letters = inputText.value;
  letters = letters.replace(/[^a-z]/g, ""); // Eliminar números y caracteres especiales
  letters = letters.toLowerCase().split(""); // Convertir a minúsculas y separar por letras
  result.value = []; // limpiar el array

  letters.map((letter) => {
    // recorre letra a letra y busca si ya existe en el array
    const index = result.value.findIndex(
      (element) => element.letter === letter
    );
    if (index === -1) {
      result.value.push({ letter, count: 1 });
    } else {
      result.value[index].count++;
    }
  });
};
</script>

<style scoped></style>
