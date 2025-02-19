<template>
  <div class="container mx-auto px-4">
    <div class="bg-gray-100 flex items-center justify-center px-5 py-5">
      <div
        class="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden"
        style="max-width: 300px"
      >
        <div
          class="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right"
        >
          <div
            v-if="is_calculated"
            class="w-full py-5 px-6 text-6xl text-white font-thin"
            :class="{
              parpadea: is_past_operator,
            }"
          >
            {{ total }}
          </div>
          <div v-else class="w-full py-5 px-6 text-6xl text-white font-thin">
            {{ input_number }}
          </div>
        </div>
        <div class="w-full bg-gradient-to-b from-primary-400 to-primary-500">
          <div class="flex w-full">
            <div class="w-2/4 border-r border-b border-primary-400">
              <button
                class="w-full h-16 outline-none focus:outline-none bg-primary-700 hover:bg-primary-950 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light cursor-pointer"
                @click="clearOperator"
              >
                C
              </button>
            </div>
            <div class="w-2/4 border-r border-b border-primary-400">
              <button
                class="w-full h-16 outline-none focus:outline-none bg-primary-700 bg-opacity-10 hover:bg-opacity-20 hover:bg-primary-950 text-white text-2xl font-light cursor-pointer"
                @click="castOperator('÷')"
              >
                ÷
              </button>
            </div>
          </div>
          <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light cursor-pointer"
                @click="addNumber(7)"
              >
                7
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light cursor-pointer"
                @click="addNumber(8)"
              >
                8
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light cursor-pointer"
                @click="addNumber(9)"
              >
                9
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none bg-primary-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light cursor-pointer"
                @click="castOperator('x')"
              >
                ⨉
              </button>
            </div>
          </div>
          <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-primary-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light"
                @click="addNumber(4)"
              >
                4
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-primary-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light"
                @click="addNumber(5)"
              >
                5
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-primary-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light"
                @click="addNumber(6)"
              >
                6
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-primary-400">
              <button
                class="w-full h-16 outline-none focus:outline-none bg-primary-700 bg-opacity-10 hover:bg-opacity-20 hover:bg-primary-950 text-white text-xl font-light cursor-pointer"
                @click="castOperator('-')"
              >
                -
              </button>
            </div>
          </div>
          <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light cursor-pointer"
                @click="addNumber(1)"
              >
                1
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light cursor-pointer"
                @click="addNumber(2)"
              >
                2
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light cursor-pointer"
                @click="addNumber(3)"
              >
                3
              </button>
            </div>
            <div class="w-1/4 border-r border-b border-primary-400">
              <button
                class="w-full h-16 outline-none focus:outline-none bg-primary-700 bg-opacity-10 hover:bg-opacity-20 hover:bg-primary-950 text-white text-xl font-light cursor-pointer"
                @click="castOperator('+')"
              >
                +
              </button>
            </div>
          </div>
          <div class="flex w-full">
            <div class="w-1/4 border-r border-primary-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-primary-700 hover:bg-opacity-20 text-white text-xl font-light cursor-pointer"
                @click="addNumber(0)"
              >
                0
              </button>
            </div>
            <div class="w-3/4 border-r border-primary-400">
              <button
                class="w-full h-16 outline-none focus:outline-none bg-primary-700 bg-opacity-10 hover:bg-opacity-20 hover:bg-primary-950 text-white text-xl font-light cursor-pointer"
                @click="calculate"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const total = ref(0); // variable para el total.
const input_number = ref(0); // variable para el número que se está ingresando.
const is_calculated = ref(false); // variable para saber si ya se calculó.
const past_operator = ref(""); // variable para guardar el operador anterior.
const is_past_operator = ref(false); // variable para saber si ya se ingresó un operador para poner un efecto al input de number.
const fisrt_cast = ref(false); // variable para saber si es la primera vez que se ejecuta una operación. Para la resta.

const addNumber = (num) => {
  // Función para agregar números. Si ya se calculó, se reinicia el valor. Sino se concatena.
  if (is_calculated.value) {
    input_number.value = num;
  } else {
    input_number.value = input_number.value * 10 + num;
  }
  is_calculated.value = false;
};

const calculate = () => {
  // función para calcular el resultado
  switch (past_operator.value) {
    case "+":
      total.value = total.value + input_number.value;
      break;
    case "-":
      if (total.value === 0 && !fisrt_cast.value) {
        total.value = input_number.value;
      } else {
        total.value = total.value - input_number.value;
      }

      break;
    case "x":
      if (total.value === 0) {
        total.value = 1;
      }
      if (input_number.value === 0) {
        input_number.value = 1;
      }
      total.value = total.value * input_number.value;
      break;
    case "÷":
      if (total.value === 0) {
        total.value = 1;
      }
      if (input_number.value === 0) {
        input_number.value = 1;
      }
      total.value = total.value / input_number.value;
      break;
    default:
      total.value = input_number.value;
  }
  is_calculated.value = true;
  is_past_operator.value = false;
};

const castOperator = (value) => {
  // función para ejecutar la operación correspondiente

  switch (value) {
    case "+":
      // comprobamos si el operador anterior es nulo, si es así. Soló guardamos el estado actual. Cuando se presiona el botón de igual, se ejecuta la operación.
      if (!is_calculated.value) {
        past_operator.value = "+";
        calculate(past_operator.value);
      } else {
        past_operator.value = "+";
      }
      is_past_operator.value = true;
      break;
    case "-":
      if (!is_calculated.value) {
        past_operator.value = "-";
        calculate(past_operator.value);
      } else {
        past_operator.value = "-";
      }
      is_past_operator.value = true;
      break;
    case "x":
      if (!is_calculated.value) {
        past_operator.value = "x";
        calculate(past_operator.value);
      } else {
        past_operator.value = "x";
      }
      is_past_operator.value = true;
      break;
    case "÷":
      if (!is_calculated.value) {
        past_operator.value = "÷";
        calculate(past_operator.value);
      } else {
        past_operator.value = "÷";
      }
      is_past_operator.value = true;
      break;
    default:
      break;
  }
  input_number.value = 0; // reiniciamos el valor del número ingresado.
  fisrt_cast.value = true; // cambiamos el estado de la primera operación. Por la resta.
};

const clearOperator = () => {
  total.value = 0;
  input_number.value = 0;
  is_calculated.value = true;
  past_operator.value = null;
  is_past_operator.value = false;
};
</script>

<style scoped>
.parpadea {
  animation-name: parpadeo;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  -webkit-animation-name: parpadeo;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}

@-moz-keyframes parpadeo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes parpadeo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes parpadeo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
