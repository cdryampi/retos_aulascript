<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center">
      <label for="base" class="my-2">Base:</label>
      <input
        type="number"
        id="base"
        v-model="base"
        class="border border-primary-300 rounded px-2 py-1"
        @change="calcularArea"
      />
    </div>

    <div class="flex flex-col items-center">
      <label for="altura" class="my-2">Altura:</label>
      <input
        type="number"
        id="altura"
        v-model="altura"
        class="border border-primary-300 rounded px-2 py-1"
        @change="calcularArea"
      />
    </div>

    <div class="flex flex-col items-center mt-5">
      <button
        @click="limpiar"
        class="bg-primary-500 text-white font-bold px-4 py-2 rounded cursor-pointer hover:bg-primary-900"
      >
        Limpiar
      </button>
    </div>

    <div class="flex flex-col items-center my-4">
      <p class="font-bold">Área:</p>
      <p v-if="!error" v-bind:ref="area">{{ area }} metros cúbicos.</p>
      <p v-else class="text-red-500">{{ errorMsg }}</p>
    </div>

    <div class="flex flex-col items-center my-4">
      <p class="font-bold">Rectángulo:</p>
      <img :src="genCanvas().toDataURL()" alt="Rectángulo" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const base = ref(10); // tenemos que inicializar la base para que no sea 0
const altura = ref(10); // tenemos que inicializar la altura para que no sea 0

const error = ref(false);
const errorMsg = ref("");

const area = ref(0);

const calcularArea = () => {
  // Función para calcular el área de un rectángulo
  if (base.value <= 0 || altura.value <= 0) {
    error.value = true;
    errorMsg.value = "La base y la altura deben ser mayores a 0";
    return;
  }
  if (base.value <= 0) {
    error.value = true;
    errorMsg.value = "La base debe ser mayor a 0";
    return;
  }

  if (altura.value <= 0) {
    error.value = true;
    errorMsg.value = "La altura debe ser mayor a 0";
    return;
  }

  error.value = false;

  area.value = base.value * altura.value;
  // recalcular el canvas
  genCanvas();
};

const limpiar = () => {
  base.value = 0;
  altura.value = 0;
  area.value = 0;
  error.value = false;
  errorMsg.value = "";
};

const genCanvas = () => {
  // Función para generar un canvas con un rectángulo
  // https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#6466c3";
  ctx.fillRect(50, 50, base.value * 10, altura.value * 10);
  ctx.strokeRect(50, 50, base.value * 10, altura.value * 10);
  return canvas;
};
</script>

<style lang="scss" scoped></style>
