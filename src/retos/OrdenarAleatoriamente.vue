<template>
  <div class="container mx-auto px-4">
    <div class="flex justify-center items-center space-x-4 my-8">
      <button
        @click="shuffle"
        :disabled="isLoading"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-primary-600 to-primary-500 group-hover:from-primary-600 group-hover:to-primary-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800"
        :class="{ 'cursor-not-allowed': isLoading }"
      >
        <span
          class="uppercase relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent"
        >
          Ordenar aleatoriamente
        </span>
      </button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="product in images"
        :key="product.id"
        class="rounded-lg overflow-hidden relative"
      >
        <img
          class="h-auto max-w-full rounded-lg"
          :src="product.image"
          :alt="product.nombre"
        />
        <div
          class="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center opacity-100 transition-all ease-in duration-75"
          :class="{ hidden: !isLoading }"
        >
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div
          class="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center opacity-0 transition-all ease-in duration-75 hover:opacity-100"
          :class="{
            hidden: isLoading,
          }"
        >
          <h2 class="text-white text-2xl font-bold">{{ product.nombre }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLoading = ref(false);

const images = ref([
  { id: 1, nombre: "Aceite esencial", image: "images/ejercicio_2/1.jpg" },
  { id: 2, nombre: "Zapatillas deportivas", image: "images/ejercicio_2/2.jpg" },
  { id: 3, nombre: "Bolsa ecológica", image: "images/ejercicio_2/3.jpg" },
  { id: 4, nombre: "Decoración geométrica", image: "images/ejercicio_2/4.jpg" },
  { id: 5, nombre: "Reloj inteligente", image: "images/ejercicio_2/5.jpg" },
  { id: 6, nombre: "Zapatillas de running", image: "images/ejercicio_2/6.jpg" },
  { id: 7, nombre: "Crema hidratante", image: "images/ejercicio_2/7.jpg" },
  {
    id: 8,
    nombre: "Set de regalo ecológico",
    image: "images/ejercicio_2/8.jpg",
  },
  { id: 9, nombre: "Lámpara industrial", image: "images/ejercicio_2/9.jpg" },
  { id: 10, nombre: "Perfume exclusivo", image: "images/ejercicio_2/10.jpg" },
  {
    id: 11,
    nombre: "Control de videojuegos",
    image: "images/ejercicio_2/11.jpg",
  },
  { id: 12, nombre: "Mochila de cuero", image: "images/ejercicio_2/12.jpg" },
]);

const shuffle = () => {
  isLoading.value = true;
  setTimeout(() => {
    images.value = [...images.value].sort(() => Math.random() - 0.5);
    isLoading.value = false;
  }, 1500);
};
</script>

<style lang="scss" scoped></style>
