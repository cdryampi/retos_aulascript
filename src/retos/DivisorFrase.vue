<template>
  <div class="container mx-auto py-4 justify-items-center">
    <div class="w-full max-w-sm">
      <div class="mb-2 flex justify-between items-center">
        <label
          for="frase"
          class="text-sm font-medium text-gray-900 dark:text-white"
        >
          Introduce una frase:
        </label>
      </div>

      <div class="flex items-center flex-col">
        <div class="relative w-full">
          <textarea
            id="frase"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            v-model="frase"
            placeholder="Introduce una frase"
          />
        </div>
        <div class="relative w-full pt-5">
          <input
            id="segmentos"
            type="number"
            min="2"
            class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            v-model="segmentos"
          />
        </div>
        <button
          @click="dividirFrase()"
          class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary-700 dark:bg-primary-600 border hover:bg-primary-800 dark:hover:bg-primary-700 rounded-s-lg border-primary-700 dark:border-primary-600 hover:border-primary-700 dark:hover:border-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800"
        >
          Dividir
        </button>
      </div>

      <div v-if="resultado.length" class="mt-5">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
          Resultado:
        </h2>
        <ul class="list-disc list-inside">
          <li
            v-for="(item, index) in resultado"
            :key="index"
            class="text-gray-700 dark:text-gray-300"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="error" class="text-red-500 dark:text-red-400 text-sm mt-2">
        {{ mensajeError }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const frase = ref("");
const segmentos = ref(2);
const error = ref(false);
const mensajeError = ref("");
const resultado = ref([]);

const dividirFrase = () => {
  error.value = false;
  resultado.value = [];

  if (!frase.value.trim()) {
    error.value = true;
    mensajeError.value = "La frase no puede estar vacía.";
    return;
  }

  const palabras = frase.value.trim().split(/\s+/);

  if (segmentos.value < 2) {
    error.value = true;
    mensajeError.value = "Debe haber al menos 2 segmentos.";
    return;
  }

  if (segmentos.value > palabras.length) {
    error.value = true;
    mensajeError.value =
      "El número de segmentos no puede ser mayor que la cantidad de palabras.";
    return;
  }

  // Cálculo de la cantidad de palabras por segmento
  const palabrasPorSegmento = Math.floor(palabras.length / segmentos.value);
  const resto = palabras.length % segmentos.value;

  let inicio = 0;
  for (let i = 0; i < segmentos.value; i++) {
    let cantidad = palabrasPorSegmento + (i < resto ? 1 : 0);
    resultado.value.push(palabras.slice(inicio, inicio + cantidad).join(" "));
    inicio += cantidad;
  }
};
</script>
