<template>
  <NavBarComponent :menu="menu" />
  <router-view />
  <FooterComponent :footerLinks="footerLinks" />
  <!-- <MainComponent /> -->
</template>

<script setup>
// componentes comunes
import NavBarComponent from "./components/NavBarComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";

import { ref } from "vue";
// Datos de los retos

import { footerData } from "./data/footerData.js";
import { navbarData } from "./data/navbarData";

const menu = ref(navbarData);

const footerLinks = ref(footerData);
</script>

<style scoped></style>
