<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col justify-center items-center space-x-4 my-8">
      <div class="">
        <label
          for="inputValue"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Añade un valor a la lista
        </label>
        <input
          type="text"
          id="inputValue"
          v-model="inputText"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Ingresa un valor"
        />
        <button
          @click="addValue"
          class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          :class="{ 'cursor-not-allowed': isLoading }"
        >
          Añadir
        </button>
        <button
          @click="deleteLast"
          class="my-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          :class="{ 'cursor-not-allowed': isLoading }"
        >
          Eliminar último
        </button>
        <button
          @click="sortReverse"
          class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Ordenar reversa
        </button>
        <button
          @click="findValue"
          class="my-5 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Buscar
        </button>
      </div>
      <div
        class="flex flex-col gap-5 justify-center items-center space-x-2 my-8"
      >
        <div class="mt-10 list-disc">
          <ul class="space-y-2">
            <li
              v-for="(item, index) in array.return_array()"
              :key="index"
              class=""
              v-if="!reverse"
              :class="{
                'bg-green-900': findedValue.value == item.value,
                'bg-primary-950': findedValue.value != item.value,
              }"
            >
              <div class="flex items-center space-x-4">
                <div class="flex flex-col">
                  <span
                    class="text-lg font-bo p-2.5"
                    :class="{
                      'text-gray-50': findedValue.value == item.value,
                      'text-white dark:text-black':
                        findedValue.value != item.value,
                    }"
                    >{{ item.value }}</span
                  >
                </div>
              </div>
            </li>
            <li
              v-for="(item, index) in array.return_reverse_array()"
              :key="index"
              :class="{
                'bg-red-950': findedValue.value == item.value,
                'bg-primary-950 dark:bg-white': findedValue.value != item.value,
              }"
              v-if="reverse"
            >
              <div class="flex items-center space-x-4">
                <div class="flex flex-col">
                  <span
                    class="text-lg font-bo p-2.5"
                    :class="{
                      'text-gray-50': findedValue.value == item.value,
                      'text-white dark:text-black':
                        findedValue.value != item.value,
                    }"
                    >{{ item.value }}</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

class ArrayDobleEnlazada {
  // Clase para crear una lista doblemente enlazada
  constructor() {
    this.array = [];
    this.cursor = 0;
    this.node = class Node {
      constructor(value, next, prev, cursor) {
        // constructor
        this.value = value;
        this.next = next;
        this.prev = prev;
        this.cursor = cursor;
      }
    };
  }

  add(value) {
    // función para añadir un valor a la lista
    if (this.cursor === 0) {
      // cuando la array es 0 se añade el primer elemento y se ajusta el cursor
      this.array.push(new this.node(value, null, null, this.cursor));
      this.cursor++;
    } else {
      let last = this.array[this.array.length - 1].cursor; // se obtiene el último elemento
      let prev = this.array[0].cursor; // se obtiene el primer elemento, porque siempre se aña al final
      this.array.push(new this.node(value, last, prev, this.cursor)); // se añade el nuevo elemento
      this.get_by_cursor(last).next = this.array[this.array.length - 1]; // se ajusta el puntero del último elemento
      this.get_by_cursor(prev).last = this.array[this.array.length - 1]; // se ajusta el puntero del primer elemento
      this.cursor++; // se ajusta el cursor
    }
  }
  get_by_cursor(cursor) {
    // función para obtener un elemento por el cursor
    return this.array.find((element) => element.cursor === cursor);
  }
  get_by_value_or_null(value) {
    // función para obtener un elemento por el valor
    return this.array.find((element) => element.value === value);
  }
  return_array() {
    // función para retornar todo el array
    return this.array;
  }
  return_reverse_array() {
    // función para retornar todo el array en reversa
    return this.array.slice().reverse();
  }
  delete_last() {
    // Eliminar el último elemento de la lista y ajustar los punteros del penúltimo elemento y el primer elemento.
    if (this.array.length === 0) {
      this.cursor = 0;
      this.array = [];
      return;
    } else {
      let last = this.array[this.array.length - 1].cursor;
      let prev = this.array[0].cursor;
      this.get_by_cursor(prev).last = null;
      this.get_by_cursor(last).next = null;
      this.array.pop();
      this.cursor--;
    }
  }
}
const inputText = ref("");
const array = ref(new ArrayDobleEnlazada());
const isLoading = ref(false);
const reverse = ref(false);
const findedValue = ref("");
const addValue = () => {
  // Función para calcular los números repetidos

  array.value.add(inputText.value);
};
const deleteLast = () => {
  // Función para calcular los números repetidos

  array.value.delete_last();
};
const sortReverse = () => {
  // Función para calcular los números repetidos

  reverse.value = !reverse.value;
};

const findValue = () => {
  // Función para calcular los números repetidos
  findedValue.value = array.value.get_by_value_or_null(inputText.value);
  console.log(findedValue.value);
};
</script>

<style scoped></style>
