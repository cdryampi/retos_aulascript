<template>
  <div class="container mx-auto p-4" id="retos">
    <h2
      class="text-5xl font-bold text-gray-900 dark:text-white text-center mb-16"
    >
      Roadmap de Retos
    </h2>

    <div class="relative">
      <!-- Línea del roadmap en primary-950 -->
      <div
        class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-950 h-full rounded-lg"
      ></div>

      <div
        v-for="(reto, index) in retosList"
        :key="reto.id"
        class="flex items-center mb-3 relative group"
        :class="{ 'flex-row-reverse': index % 2 !== 0 }"
        :data-aos="'fade-' + (index % 2 === 0 ? 'right' : 'left')"
      >
        <!-- Círculo en la línea -->
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <div
            class="w-6 h-6 bg-primary-950 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900"
          >
            <svg
              class="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
        </div>

        <!-- Contenedor de contenido -->
        <router-link
          :to="'/reto/' + reto.id"
          class="w-1/2 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 transition-all hover:scale-105"
          :class="{ 'ml-auto': index % 2 !== 0, 'mr-auto': index % 2 === 0 }"
        >
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white flex items-center"
          >
            {{ reto.title }}
            <span
              v-for="tag in reto.tags"
              :key="tag"
              class="bg-blue-100 text-primary-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded-sm dark:bg-primary-900 dark:text-primary-300"
            >
              {{ tag }}
            </span>
          </h3>

          <time class="block mb-2 text-sm text-gray-400 dark:text-gray-500">{{
            reto.subTile
          }}</time>

          <p class="text-base text-gray-500 dark:text-gray-400">
            {{ reto.description }}
          </p>

          <a
            v-if="reto.code_url"
            :href="reto.code_url"
            class="mt-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"
              />
              <path
                d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
              />
            </svg>
            Descargar código JS
          </a>

          <div>
            {{ reto.dificultad === "facil" ? "⭐" : "" }}
            {{ reto.dificultad === "intermedio" ? "⭐⭐" : "" }}
            {{ reto.dificultad === "dificil" ? "⭐⭐⭐" : "" }}
          </div>
        </router-link>
      </div>

      <!-- Botón para cargar más retos con spinner -->
      <div class="flex justify-center my-15 relative">
        <button
          type="button"
          @click="LoadRetos"
          v-if="!spinner && retosList.length < RetosListData.length"
          class="absolute p-5 flex items-center mt-5 rounded-full border border-primary-300 bg-primary-950 px-4 py-2 text-sm font-medium text-primary-100 hover:bg-primary-100 hover:text-primary-950 transition-all duration-300"
        >
          <svg class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
          Cargar más retos
        </button>

        <div
          v-if="spinner"
          class="flex items-center rounded-full border border-primary-300 bg-primary-950 px-4 py-2 text-sm font-medium text-primary-100"
        >
          <svg
            class="w-5 h-5 mr-3 text-primary-200 animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              stroke-width="10"
              fill="transparent"
            />
          </svg>
          Cargando...
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  retosList: Array,
});

const RetosListData = props.retosList;

const spinner = ref(false);

// iniciar la carga de los retos limitando a 5 para no sobrecargar la vista
const retosList = ref(RetosListData.slice(0, 5));

const LoadRetos = () => {
  // Función para simular la carga de los retos
  spinner.value = true;
  setTimeout(() => {
    spinner.value = false;
    UpdateRetos();
  }, 2000);
};

watch(
  () => props.retosList,
  (newRetos) => {
    console.log("Nueva lista de retos recibida:", newRetos);
  }
);

const UpdateRetos = () => {
  // Función para actualizar los retos en la vista cargando 5 más cuando se haga click en el botón.
  const currentLength = retosList.value.length;
  const newRetos = RetosListData.slice(currentLength, currentLength + 5);

  if (newRetos.length > 0) {
    retosList.value.push(...newRetos);
  } else {
    console.log("No hay más retos");
  }
};
</script>

<style scoped></style>
