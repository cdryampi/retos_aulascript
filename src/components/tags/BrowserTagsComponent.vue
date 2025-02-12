<template>
  <div class="p-15 w-full place-items-center">
    <h2
      class="text-3xl text-center pb-5 text-primary-900 font-extrabold font-serif"
    >
      Elige tu Categoría de Reto y Comienza
    </h2>
    <div class="flex flex-wrap gap-2 justify-center">
      <!-- Etiquetas con animación y clickeables -->
      <kbd
        class="tag bg-primary-700 cursor-pointer text-white px-5 py-2 rounded-lg text-2sm transition-transform duration-200 hover:scale-110 font-extrabold font-serif"
        v-for="tag in tags"
        :key="tag"
        @click="emitTag(tag)"
      >
        {{ tag }}
      </kbd>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, defineEmits } from "vue";

const props = defineProps({
  tags: Array,
});

const tags = ref(props.tags);

const emit = defineEmits(["filter-by-tags"]);

const emitTag = (tag) => {
  emit("filter-by-tags", tag);
};
onMounted(() => {});

// Evento de click en cada tag
</script>

<style>
/* Animación de movimiento sutil */
@keyframes floaty {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0px);
  }
}

.tag {
  animation: floaty 3s infinite ease-in-out;
}

/* Variar el delay de animación para cada etiqueta */
.tag:nth-child(odd) {
  animation-duration: 4s;
}
.tag:nth-child(even) {
  animation-duration: 5s;
}
</style>
