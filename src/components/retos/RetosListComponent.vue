<template>
  <div class="conatiner mx-auto p-4" id="retos">
    <h2
      class="text-5xl font-bold text-gray-900 dark:text-white text-center mb-15"
    >
      Roadmap de Retos
    </h2>

    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li
        class="mb-10 ms-6"
        v-for="(reto, index) in retosList"
        :key="reto.id"
        :data-aos="index % 2 === 0 ? 'zoom-in-right' : 'zoom-out'"
      >
        <div class="flex items-center mb-2 gap-1.5">
          <span
            class="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
          >
            <svg
              class="w-2.5 h-2.5 text-primary-800 dark:text-primary-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </span>
          <h3
            class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
          >
            {{ reto.title }}
            <span
              class="bg-blue-100 text-primary-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-primary-900 dark:text-primary-300 ms-3"
              v-for="tag in reto.tags"
              :key="tag"
              >{{ tag }}</span
            >
          </h3>
        </div>

        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >{{ reto.subTile }}</time
        >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {{ reto.description }}
        </p>
        <a
          :href="reto.code_url"
          v-if="reto.code_url"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          ><svg
            class="w-3.5 h-3.5 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"
            />
            <path
              d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            />
          </svg>
          Descargar código JS</a
        >
        <div>
          {{ reto.dificultad === "facil" ? "⭐" : "" }}
          {{ reto.dificultad === "intermedio" ? "⭐⭐" : "" }}
          {{ reto.dificultad === "dificil" ? "⭐⭐⭐" : "" }}
        </div>
      </li>
      <div
        class="fter:h-px my-24 flex items-center before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']"
      >
        <button
          type="button"
          @click="LoadRetos"
          v-if="!spinner && retosList.length < RetosListData.length"
          class="flex items-center rounded-full border border-primary-300 bg-primary-900 px-3 py-2 text-center text-sm font-medium text-primary-100 hover:bg-primary-100 hover:text-primary-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="mr-1 h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
          Cargar más retos
        </button>
        <div
          disabled
          v-if="spinner"
          class="flex items-center rounded-full border border-primary-300 bg-primary-900 px-3 py-2 text-center text-sm font-medium text-primary-100 hover:bg-primary-100 hover:text-primary-900"
        >
          <svg
            aria-hidden="true"
            role="status"
            class="inline w-4 h-4 me-3 text-primary-200 animate-spin dark:text-primary-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#111137"
            />
          </svg>
          Cargando...
        </div>
      </div>
    </ol>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  retosList: Array,
});

const RetosListData = props.retosList;

const spinner = ref(false);

// iniciar la carga de los retos limitando a 5 para no sobrecargar la vista
const retosList = ref(RetosListData.slice(0, 5));

const LoadRetos = () => {
  // Función para simular la carga de los retos
  spinner.value = true;
  setTimeout(() => {
    spinner.value = false;
    UpdateRetos();
  }, 2000);
};

watch(
  () => props.retosList,
  (newRetos) => {
    console.log("Nueva lista de retos recibida:", newRetos);
  }
);

const UpdateRetos = () => {
  // Función para actualizar los retos en la vista cargando 5 más cuando se haga click en el botón.
  const currentLength = retosList.value.length;
  const newRetos = RetosListData.slice(currentLength, currentLength + 5);

  if (newRetos.length > 0) {
    retosList.value.push(...newRetos);
  } else {
    console.log("No hay más retos");
  }
};
</script>

<style scoped></style>
