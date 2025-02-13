<template>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[##756BC6] to-[#793673] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        >
          Descubre otros retos de código realizados por mi
          <a
            href="https://github.com/cdryampi/"
            class="font-semibold text-primary-600"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="absolute inset-0" aria-hidden="true"></span>cdryampi
            <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
      <div class="text-center">
        <h1
          class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
        >
          Retos de JavaScript de
          <span class="text-primary text-6xl">AulaScript</span>
        </h1>
        <p
          class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
        >
          ¡Bienvenido a los retos de JavaScript! Aquí encontrarás una serie de
          ejercicios para poner a prueba tus habilidades en JavaScript. ¡Anímate
          a resolverlos!
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <router-link
            :to="'/reto/' + reto.id"
            class="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >Iniciar</router-link
          >
          <!-- Ir al reto 1 -->
          <router-link
            :to="{
              path: '/retos',
            }"
            class="text-sm/6 font-semibold text-gray-900"
            >Ver todos los retos realizados
            <span aria-hidden="true">→</span></router-link
          >
          <!-- Ir a la lista de los retos -->
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#756BC6] to-[#633b4c] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  reto: Object,
});

const reto = props.reto;

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
