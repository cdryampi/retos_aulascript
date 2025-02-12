<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-6 flex flex-col place-items-center" data-aos="fade-up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#111137"
          class="w-20 h-20 text-center block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
        <p class="text-4xl font-semibold mb-2 text-primary-900">
          {{ estadisticas.total }}
        </p>
        <h3 class="text-2xl">Total de Tareas</h3>
      </div>
      <div
        class="p-6 flex flex-col place-items-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#111137"
          class="w-20 h-20 text-center block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>
        <p class="text-4xl font-semibold mb-2 text-primary-900">
          {{ estadisticas.completadas }}
        </p>
        <h3 class="text-2xl">Tareas Completadas</h3>
      </div>
      <div
        class="p-6 flex flex-col place-items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#111137"
          class="w-20 h-20 text-center block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
        <p class="text-4xl font-semibold mb-2 text-primary-900">
          {{ estadisticas.pendientes }}
        </p>
        <h3 class="text-2xl">Tareas Pendientes</h3>
      </div>
      <div
        class="p-6 flex flex-col place-items-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#111137"
          class="w-20 h-20 text-center block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
          />
        </svg>
        <p class="text-4xl font-semibold mb-2 text-primary-900">
          {{ estadisticas.porcentaje.toFixed(2) }}%
        </p>
        <h3 class="text-2xl">Porcentaje Completadas</h3>
      </div>
      <div
        class="p-6 flex flex-col place-items-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#111137"
          class="w-20 h-20 text-center block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p class="text-4xl font-semibold mb-2 text-primary-900">
          {{ estadisticas.promedio_resolución.toFixed(2) }} minutos
        </p>
        <h3 class="text-2xl">Promedio de Resolución</h3>
      </div>
      <div
        class="p-6 flex flex-col place-items-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#111137"
          class="w-20 h-20 text-center block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        <p class="text-4xl font-semibold mb-2 text-primary-900">
          {{ estadisticas.dificultad ? "fácil" : "intermedio/dificil" }}
        </p>
        <h3 class="text-2xl">Dificultad Predominante</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";

const props = defineProps({
  estadisticas: Object,
});
const estadisticas = props.estadisticas;

onMounted(() => {});
</script>

<style scoped>
/* Add any additional styles here */
</style>
