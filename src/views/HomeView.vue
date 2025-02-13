<template>
  <HeroComponent :reto="reto" />
  <RetoHeroRandomComponent :reto="reto" @ChangeReto="ChangeReto" />
  <BrowserTagsComponent :tags="tags" @filter-by-tags="FilterByTags" />
  <RetosListComponent :retosList="retos" :key="retos.length" />
  <RetoEstadisticasComponent :estadisticas="estadisticas" />
</template>

<script setup>
import HeroComponent from "../components/HeroComponent.vue";
import RetosListComponent from "../components/retos/RetosListComponent.vue";
import RetoHeroRandomComponent from "../components/retos/RetoHeroRandomComponent.vue";
import RetoEstadisticasComponent from "../components/retos/RetoEstadisticasComponent.vue";
import BrowserTagsComponent from "../components/tags/BrowserTagsComponent.vue";
import { RetosListData } from "../data/retosListData";

// Composables

import useEstadisticas from "../composables/useEstadisticas.js";
import useTags from "../composables/useTags.js";

import { ref, onBeforeMount, watchEffect } from "vue";

const retos = ref(RetosListData);
const reto = ref(RetosListData[0]);
const tags = ref(null);

const { getEstadisticas } = useEstadisticas(RetosListData);
const { getTags } = useTags(RetosListData);

const estadisticas = ref(null);

const ChangeReto = () => {
  reto.value = retos.value[Math.floor(Math.random() * retos.value.length)];
};

const FilterByTags = (tag) => {
  retos.value = RetosListData.filter((reto) => reto.tags.includes(tag));
};

watchEffect(() => {
  estadisticas.value = getEstadisticas();
});

onBeforeMount(() => {
  reto.value = RetosListData[Math.floor(Math.random() * RetosListData.length)];
  estadisticas.value = getEstadisticas();
  tags.value = getTags();
});
</script>

<style scoped></style>
