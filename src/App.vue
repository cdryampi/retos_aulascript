<template>
  <NavBarComponent />
  <HeroComponent :reto="reto" />
  <RetoHeroRandomComponent :reto="reto" @ChangeReto="ChangeReto" />
  <BrowserTagsComponent :tags="tags" @filter-by-tags="FilterByTags" />
  <RetosListComponent :retosList="retos" :key="retos.length" />
  <RetoEstadisticasComponent :estadisticas="estadisticas" />
  <FooterComponent :footerLinks="footerLinks" />

  <!-- <MainComponent /> -->
</template>

<script setup>
import NavBarComponent from "./components/NavBarComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import RetosListComponent from "./components/retos/RetosListComponent.vue";
import RetoHeroRandomComponent from "./components/retos/RetoHeroRandomComponent.vue";
import RetoEstadisticasComponent from "./components/retos/RetoEstadisticasComponent.vue";
import BrowserTagsComponent from "./components/tags/BrowserTagsComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";
// Datos de los retos

import { RetosListData } from "./data/retosListData.js";
import { footerData } from "./data/footerData.js";

// Composables

import useEstadisticas from "./composables/useEstadisticas.js";
import useTags from "./composables/useTags.js";

import { ref, onBeforeMount, watchEffect } from "vue";

const retos = ref(RetosListData);
const footerLinks = ref(footerData);

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
