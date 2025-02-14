<template>
  <div>
    <div>
      <h2
        class="text-6xl font-bold text-primary-900 dark:text-primary text-center"
      >
        Reto Destacado
      </h2>
    </div>

    <section
      class="bg-center p-5 mb-25 mt-25 bg-no-repeat bg-[url('/images/code.jpg')] bg-cover bg-primary-700 bg-blend-multiply"
      data-aos="fade-right"
    >
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h2
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          {{ reto.title }}
        </h2>
        <p
          class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
        >
          {{ reto.description }}
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
        >
          <router-link
            :to="{
              path: 'retos/' + reto.id,
              params: { id: reto.id },
            }"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            ver más
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="#111137"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </router-link>
          <button
            @click="EmitReTo()"
            type="button"
            class="inline-flex justify-center cursor-pointer hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Ver otro reto
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import router from "../../router";

const props = defineProps({
  reto: Object,
});

const EmitReTo = () => {
  emit("change-reto");
};

const emit = defineEmits(["change-reto"]);
</script>

<style></style>
