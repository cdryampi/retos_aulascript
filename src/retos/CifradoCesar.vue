<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col justify-center items-center space-x-4 my-8">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><small class="my-5">Ingrese el texto a cifrar:</small></label
      >
      <div
        class="flex flex-col gap-5justify-center items-center space-x-2 my-8"
      >
        <input
          id="message"
          v-model="inputText"
          type="text"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa literales como quiera."
        />
        <input
          id="position"
          v-model="position"
          type="number"
          min="0"
          max="25"
          class="block p-2.5 mt-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa la posición de cifrado."
        />
        <button
          @click="cifrar"
          class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Calcular
        </button>
        <div class="flex flex-col justify-center mt-10">
          <div class="flex flex-col justify-center items-center space-x-4 my-8">
            <label
              for="resultado"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ><small class="my-5">Resultado:</small></label
            >
            <div
              class="flex flex-col gap-5justify-center items-center space-x-2 my-8"
            >
              <input
                id="resultado"
                v-model="resultado"
                type="text"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Resultado."
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputText = ref("");
const position = ref(0);
const resultado = ref("");

const cifrar = () => {
  // Función que cifra todo el mensaje
  // https://ascii.cl/es/index.htm
  let mensaje_pre = inputText.value.trim();
  let mensaje_cesar = "";

  if (position.value < 0 || position.value > 25) {
    return;
  }

  for (let i = 0; i < mensaje_pre.length; i++) {
    let ascii = mensaje_pre[i].charCodeAt(0);
    if (ascii > 64 && ascii < 90) {
      mensaje_cesar += String.fromCharCode(
        ((ascii - 65 + position.value) % 26) + 65
      );
    } else if (ascii > 96 && ascii < 123) {
      mensaje_cesar += String.fromCharCode(
        ((ascii - 97 + position.value) % 26) + 97
      );
    } else {
      mensaje_cesar += mensaje_pre[i];
    }
  }
  // antes de guardar vamos a revisar si puede descifrar el mensaje
  if (descrifrar(mensaje_cesar)) {
    resultado.value = mensaje_cesar;
  } else {
    resultado.value = "No se puede descifrar el mensaje.";
  }

  resultado.value = mensaje_cesar;
};

const descrifrar = (mensaje_cesar) => {
  // Función que descrifra todo el mensaje y retorna un booleano
  let mensaje_pre = mensaje_cesar;
  let mensaje_descifrado = "";

  for (let i = 0; i < mensaje_pre.length; i++) {
    let ascii = mensaje_pre[i].charCodeAt(0);
    if (ascii > 64 && ascii < 90) {
      mensaje_descifrado += String.fromCharCode(
        ((ascii - 65 - position.value + 26) % 26) + 65
      );
    } else if (ascii > 96 && ascii < 123) {
      mensaje_descifrado += String.fromCharCode(
        ((ascii - 97 - position.value + 26) % 26) + 97
      );
    } else {
      mensaje_descifrado += mensaje_pre[i];
    }
  }
  return mensaje_descifrado === inputText.value.trim();
};
</script>

<style scoped></style>
