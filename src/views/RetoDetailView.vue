<template>
  <section class="p-12">
    <div class="mx-auto rounded-xl p-12">
      <!-- Información del reto -->
      <h1 class="text-5xl font-bold text-primary-950">
        {{ reto?.title || "Reto no encontrado" }}
      </h1>
      <p class="text-lg mt-4 text-gray-700">{{ reto?.description }}</p>

      <!-- Categorías / Tags -->
      <div v-if="reto?.tags.length" class="flex flex-wrap gap-2 mt-6">
        <kbd
          v-for="tag in reto.tags"
          :key="tag"
          class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
          >{{ tag }}</kbd
        >
      </div>

      <!-- Dificultad y Tiempo Estimado -->
      <div class="flex gap-6 mt-8 text-lg text-gray-600">
        <span class="font-semibold">Dificultad: {{ reto?.dificultad }}</span>
        <span class="font-semibold"
          >Tiempo Estimado: {{ reto?.tiempoEstimado }} min</span
        >
      </div>

      <!-- Ejemplo interactivo -->
      <div class="mt-12">
        <h2 class="text-3xl font-bold text-primary-950">Ejemplo Interactivo</h2>
        <component :is="retoComponent" v-if="retoComponent" class="mt-6" />
      </div>
      <!-- Enlace del reto -->
      <div class="my-20">
        <a
          :href="reto?.github_url"
          v-if="reto?.github_url"
          target="_blank"
          class="inline-flex items-center justify-center p-5 text-base font-medium text-primary-950 rounded-lg border border-primary-400 bg-primary-100 hover:text-white hover:bg-primary-500 transition"
        >
          <!-- Icono de GitHub -->
          <svg
            aria-hidden="true"
            class="w-5 h-5 me-3"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577V20.61c-3.338.726-4.042-1.416-4.042-1.416-.547-1.387-1.334-1.757-1.334-1.757-1.091-.746.083-.73.083-.73 1.205.086 1.84 1.238 1.84 1.238 1.07 1.833 2.805 1.304 3.487.998.108-.775.42-1.303.764-1.602-2.665-.304-5.467-1.334-5.467-5.931 0-1.312.469-2.385 1.236-3.226-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.302 1.23.957-.267 1.983-.4 3.002-.404 1.02.004 2.046.137 3.003.404 2.294-1.553 3.3-1.23 3.3-1.23.653 1.652.242 2.873.118 3.176.769.841 1.235 1.914 1.235 3.226 0 4.607-2.805 5.625-5.476 5.923.43.372.814 1.103.814 2.225v3.301c0 .32.192.693.801.576C20.565 21.798 24 17.3 24 12 24 5.373 18.628 0 12 0z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="w-full">Ver Código en GitHub</span>

          <svg
            class="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import { RetosListData } from "../data/retosListData";
import { useRoute } from "vue-router";

const route = useRoute();
const reto = computed(() =>
  RetosListData.find((r) => r.id === Number(route.params.id))
);

const retoComponent = computed(() => {
  if (!reto.value) return null;
  try {
    return defineAsyncComponent(() =>
      import(`../retos/${reto.value.component}.vue`)
    );
  } catch (error) {
    console.warn("Error cargando el componente:", error);
    return null;
  }
});
</script>
