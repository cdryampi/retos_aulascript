<template>
  <footer class="bg-white dark:bg-gray-900 m-4 pt-10">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://www.aulascript.com/index.html"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Aula<span class="text-primary">Script</span></span
          >
        </a>
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li
            v-for="inicio in footerLinks"
            :key="inicio.id + '-' + inicio.title"
          >
            <a
              :href="inicio.url"
              :title="inicio.title_url"
              class="block py-2 px-3 text-white bg-primary-700 rounded-sm md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-primary-500 hover:text-primary-500"
              >{{ inicio.title }}</a
            >
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2025
        <a
          href="https://github.com/cdryampi"
          class="hover:underline"
          target="_blank"
          >CDRyampi</a
        >. Retos de programación.</span
      >
    </div>
  </footer>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  footerLinks: Array,
});

const footerLinks = ref(props.footerLinks);
</script>

<style scoped></style>
