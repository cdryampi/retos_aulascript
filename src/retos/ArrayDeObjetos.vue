<template>
  <div class="p-4 bg-primary-200 text-black rounded-md">
    <h3 class="text-xl font-bold text-center">
      Añadir objetos a un array y mostrarlos en una tabla
    </h3>

    <div class="flex items-center max-w-sm mx-auto py-5"></div>

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
      <tfoot class="footer_table">
        <tr>
          <div class="pt-5 flex place-content-center gap-3.5">
            <input
              v-model="inputName"
              type="text"
              placeholder="Name"
              class="p-2 border border-primary-950 rounded-md"
              required
            />
            <input
              v-model="inputPosition"
              type="text"
              placeholder="Position"
              class="p-2 border border-primary-950 rounded-md"
              required
            />
            <input
              v-model="inputMail"
              type="email"
              placeholder="Email"
              class="p-2 border border-primary-950 rounded-md"
              required
            />
            <select
              v-model="inputImage"
              placeholder="Image"
              class="p-2 border border-primary-950 rounded-md"
              name="image"
              required
            >
              <option value="images/ejercicio_1/profile-picture-1.jpg">
                Profile Picture 1
              </option>
              <option value="images/ejercicio_1/profile-picture-2.jpg">
                Profile Picture 2
              </option>
              <option value="images/ejercicio_1/profile-picture-3.jpg">
                Profile Picture 3
              </option>
              <option value="images/ejercicio_1/profile-picture-4.jpg">
                Profile Picture 4
              </option>
              <option value="images/ejercicio_1/profile-picture-5.jpg">
                Profile Picture 5
              </option>
            </select>
            <input
              v-model="inputStatus"
              type="checkbox"
              class="p-2 border border-primary-950 rounded-md"
            />
            <button
              @click="AddUser"
              class="p-2 bg-primary-950 text-white rounded-md font-extrabold"
            >
              Add User
            </button>
          </div>
          <div
            class="pt-5 flex place-content-center gap-3.5 flex-col"
            v-if="!isValid"
          >
            <div v-for="error in errores" :key="error" class="text-red-500">
              <p>{{ error }}</p>
            </div>
          </div>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

const resultados = ref(usuarios.value);

const inputName = ref("");
const inputMail = ref("");
const inputImage = ref("");
const inputPosition = ref("");
const inputStatus = ref(false);

const errores = ref([]);

const isValid = ref(true);

const AddUser = () => {
  errores.value = [];
  if (!inputName.value) {
    errores.value.push("Name is required");
    isValid.value = false;
    return;
  }

  if (!inputPosition.value) {
    errores.value.push("Position is required");
    isValid.value = false;
    return;
  }

  if (!inputMail.value) {
    errores.value.push("Email is required");
    isValid.value = false;
    return;
  }

  if (!inputMail.value.includes("@")) {
    errores.value.push("Email is invalid");
    isValid.value = false;
    return;
  }

  if (!inputImage.value) {
    errores.value.push("Image is required");
    isValid.value = false;
    return;
  }

  resultados.value.push({
    name: inputName.value,
    position: inputPosition.value,
    status: inputStatus.value ? "Online" : "Offline",
    email: inputMail.value,
    image: inputImage.value,
  });
  isValid.value = true;
};
</script>
<style scoped>
.footer_table {
  display: flex;
  justify-content: center;
  gap: 3.5rem;
}
</style>
