<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col justify-center items-center space-x-4 my-8">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><small class="my-5">Ingrese números:</small></label
      >
      <div
        class="flex flex-col gap-5justify-center items-center space-x-2 my-8"
      >
        <textarea
          id="message"
          rows="4"
          v-model="inputNums"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa números como quiera."
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
                  número/repetidos
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
                    {{ element.number }}
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

const inputNums = ref("");
const result = ref([
  { number: 0, count: 0 },
  { number: 1, count: 0 },
  { number: 2, count: 0 },
  { number: 3, count: 0 },
  { number: 4, count: 0 },
  { number: 5, count: 0 },
  { number: 6, count: 0 },
  { number: 7, count: 0 },
  { number: 8, count: 0 },
  { number: 9, count: 0 },
]);
const isLoading = ref(false);

const calNums = () => {
  // Función para calcular los números repetidos
  isLoading.value = true;
  setTimeout(() => {
    findNumbers();
    isLoading.value = false;
  }, 1000);
};

const findNumbers = () => {
  // Función para encontrar los números repetidos, recorremos string a string y agregamos a un array los números que se repiten del 0 al 9.

  result.value = [
    { number: 0, count: 0 },
    { number: 1, count: 0 },
    { number: 2, count: 0 },
    { number: 3, count: 0 },
    { number: 4, count: 0 },
    { number: 5, count: 0 },
    { number: 6, count: 0 },
    { number: 7, count: 0 },
    { number: 8, count: 0 },
    { number: 9, count: 0 },
  ];
  for (let i = 0; i < inputNums.value.length; i++) {
    try {
      const num = parseInt(inputNums.value[i]);
      result.value[num].count++;
    } catch (e) {
      console.log(e);
    }
  }
  console.log(inputNums.value); // Imprimimos el valor de inputNums
};
</script>

<style scoped></style>
