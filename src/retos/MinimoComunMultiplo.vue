<template>
  <div class="container mx-auto px-4">
    <div class="max-w-sm mx-auto">
      <label
        for="number-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select a number:</label
      >
      <input
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="5"
        required
        min="1"
        max="100000"
        value="5"
        v-model="number1"
      />
    </div>

    <div class="max-w-sm mx-auto">
      <label
        for="number-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select a number:</label
      >
      <input
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="10"
        required
        min="1"
        max="100000"
        value="10"
        v-model="number2"
      />
    </div>
    <div class="container flex flex-col place-items-center gap-5 mt-10">
      <button
        @click="result"
        class="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointe w-25"
      >
        calcular resultado
      </button>
      <p class="font-bold text-5xl">{{ resultValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { mcm } from "@/utils/mcm";

const number1 = ref(0);
const number2 = ref(0);
const resultValue = ref(0);

const result = () => {
  let aux_number1 = 0;
  let aux_number2 = 0;

  try {
    aux_number1 = parseInt(number1.value);
    aux_number2 = parseInt(number2.value);
  } catch (error) {
    console.error("Error parsing numbers");
  }
  if (typeof aux_number1 === "number" && typeof aux_number2 === "number") {
    resultValue.value = mcm(aux_number1, aux_number2);
  } else {
    console.warn("Please enter a valid number");
    resultValue.value = 0;
  }
};
</script>

<style lang="scss" scoped></style>
