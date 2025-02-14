<template>
  <div class="container mx-auto py-4 justify-items-center">
    <div class="w-full max-w-sm">
      <div class="mb-2 flex justify-between items-center">
        <label
          for="password-generator"
          class="text-sm font-medium text-gray-900 dark:text-white"
        >
          Shorten URL:
        </label>
      </div>

      <div class="flex items-center">
        <!-- Botón para generar contraseña -->
        <button
          @click="genSafePassword"
          class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary-700 dark:bg-primary-600 border hover:bg-primary-800 dark:hover:bg-primary-700 rounded-s-lg border-primary-700 dark:border-primary-600 hover:border-primary-700 dark:hover:border-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800"
        >
          Generate
        </button>

        <!-- Input con la contraseña generada -->
        <div class="relative w-full">
          <input
            id="password-generator"
            type="text"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            :value="password"
            readonly
            disabled
          />
        </div>

        <!-- Botón para copiar la contraseña -->
        <button
          @click="copyToClipboard"
          class="shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:hover:text-white dark:border-gray-600"
          type="button"
        >
          <span v-if="!copied">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
              />
            </svg>
          </span>
          <span v-else>
            <svg
              class="w-4 h-4 text-primary-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </button>
      </div>

      <p
        id="helper-text-explanation"
        class="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        No compartas tus contraseñas con nadie
      </p>
    </div>

    <div class="flex flex-col items-center justify-center mt-5">
      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Requerimientos de la contraseña:
      </h2>
      <ul
        class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
      >
        <li>Contiene 10 caracteres de longitud.</li>
        <li>Contiene una mayúscula.</li>
        <li>Contiene un carácter especial.</li>
        <li>Contiene un número.</li>
        <li>Los caracteres están desordenados.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";

const password = ref(null);
const copied = ref(false); // Estado para indicar si se ha copiado

const genSafePassword = () => {
  console.log("Generando contraseña segura...");

  const charsetLetterMin = "abcdefghijklmnopqrstuvwxyz";
  const charsetLetterMay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charsetNumber = "0123456789";
  const charsetSpecial = "!@#$%^&*()_+{}:\"<>?|[];',./`~";

  // Se asegura de incluir al menos una letra mayúscula, un número y un carácter especial
  let passwordArray = [
    charsetLetterMay[Math.floor(Math.random() * charsetLetterMay.length)], // 1 Mayúscula
    charsetNumber[Math.floor(Math.random() * charsetNumber.length)], // 1 Número
    charsetSpecial[Math.floor(Math.random() * charsetSpecial.length)], // 1 Especial
  ];

  // Agrega 7 caracteres aleatorios (de cualquier tipo)
  for (let i = 0; i < 7; i++) {
    const charsets = [
      charsetLetterMin,
      charsetLetterMay,
      charsetNumber,
      charsetSpecial,
    ];
    const randomCharset = charsets[Math.floor(Math.random() * charsets.length)];
    passwordArray.push(
      randomCharset[Math.floor(Math.random() * randomCharset.length)]
    );
  }

  // Mezcla los caracteres para mayor seguridad
  password.value = passwordArray.sort(() => Math.random() - 0.5).join("");
};

// Función para copiar al portapapeles
const copyToClipboard = async () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
  try {
    await navigator.clipboard.writeText(password.value);
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 1500); // Resetear el estado después de 1.5 segundos
  } catch (err) {
    console.error("Error al copiar:", err);
  }
};

onBeforeMount(() => {
  genSafePassword();
});
</script>

<style lang="scss" scoped></style>
