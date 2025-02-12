<template>
  <section class="p-6">
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-3xl font-bold text-primary mb-4">{{ reto.title }}</h1>
      <p class="text-gray-600">{{ reto.description }}</p>

      <!-- Etiquetas -->
      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tag in reto.tags"
          :key="tag"
          class="bg-primary text-white px-3 py-1 rounded-lg text-sm"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Información -->
      <div class="flex items-center gap-4 mt-6">
        <span class="text-gray-700 font-semibold">🟢 Dificultad:</span>
        <span class="text-lg font-bold">{{ reto.dificultad }}</span>
      </div>

      <div class="flex items-center gap-4 mt-2">
        <span class="text-gray-700 font-semibold">⏳ Tiempo Estimado:</span>
        <span class="text-lg font-bold">{{ reto.tiempoEstimado }} min</span>
      </div>

      <!-- Botón de Iniciar Reto -->
      <div class="mt-6">
        <router-link
          :to="'/retos'"
          class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg"
        >
          🔥 Iniciar Reto
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import { RetosListData } from "../data/retosListData";

// Recibe el parámetro de la URL
const props = defineProps(["id"]);
const reto = RetosListData.find((r) => r.id === Number(props.id));
</script>

<style scoped>
.bg-primary {
  background-color: #1e40af; /* Azul de Flowbite */
}
</style>
