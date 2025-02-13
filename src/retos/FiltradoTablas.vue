<template>
  <div class="p-4 bg-gray-100 text-black rounded-md">
    <h3 class="text-xl font-bold text-center">
      Filtro de usuarios por nombre con tablas
    </h3>

    <div class="flex items-center max-w-sm mx-auto py-5">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          v-model="busqueda"
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Escribe para buscar..."
          required
        />
      </div>
    </div>

    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Position</th>
          <th scope="col" class="px-6 py-3">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-primary-200 hover:bg-primary-50 dark:hover:bg-primary-600"
          v-for="usuario in resultados"
          :key="usuario.name"
        >
          <th
            scope="row"
            class="flex items-center px-6 py-4 text-primary-900 whitespace-nowrap dark:text-white"
          >
            <img
              class="w-10 h-10 rounded-full"
              :src="usuario.image"
              :alt="`${usuario.name} image`"
            />
            <div class="ps-3">
              <div class="text-base font-semibold">{{ usuario.name }}</div>
              <div class="font-normal text-gray-500">
                {{ usuario.email }}
              </div>
            </div>
          </th>
          <td class="px-6 py-4">{{ usuario.position }}</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div
                class="h-2.5 w-2.5 rounded-full ml-2 me-2"
                :class="
                  usuario.status == 'Online' ? 'bg-green-500' : 'bg-red-500'
                "
              ></div>
              {{ usuario.status }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const busqueda = ref("");

const usuarios = ref([
  {
    name: "Neil Sims",
    position: "React Developer",
    status: "Online",
    email: "neil.sims@flowbite.com",
    image: "images/ejercicio_1/profile-picture-1.jpg",
  },
  {
    name: "Jese Leos",
    position: "Vue Developer",
    status: "Offline",
    email: "jese@flowbite.com",
    image: "images/ejercicio_1/profile-picture-3.jpg",
  },
  {
    name: "Bonnie Green",
    position: "Angular Developer",
    status: "Online",
    email: "bonnie.green@flowbite.com",
    image: "images/ejercicio_1/profile-picture-2.jpg",
  },
  {
    name: "Roonie Strickland",
    position: "Node.js Developer",
    status: "Offline",
    email: "roonie.strickland@flowbite.com",
    image: "images/ejercicio_1/profile-picture-4.jpg",
  },
  {
    name: "Leslie Livingston",
    position: "React Developer",
    status: "Online",
    email: "leslie@flowbite.com",
    image: "images/ejercicio_1/profile-picture-5.jpg",
  },
]);

const resultados = computed(() =>
  usuarios.value.filter((x) =>
    x.name.toLowerCase().includes(busqueda.value.toLowerCase())
  )
);
</script>
