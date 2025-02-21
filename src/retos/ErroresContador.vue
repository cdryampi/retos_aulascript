<template>
  <div>
    <p>
      Mira la consolo para ver el resultado
      <small class="font-extrabold">cuando devuelve -1 es correcto.</small>
    </p>
  </div>
</template>

<script setup>
const errorContador = (frase = "[1+x)") => {
  let inicios = ["{", "[", "("]; // Variables de entrada
  let cierres = ["}", "]", ")"]; // variables de salida
  let corr = { "}": "{", "]": "[", ")": "(" }; // json de comprobación

  let error_cursor = -1;
  let fifo = []; // pila de errores

  for (let index = 0; index <= frase.length; index++) {
    //console.log(fifo);
    if (inicios.includes(frase[index])) {
      fifo.push(frase[index]);
    } else if (cierres.includes(frase[index])) {
      if (fifo.length >= 1) {
        let ultimo = fifo.pop();
        if (corr[frase[index]] === ultimo) {
          continue;
        } else {
          error_cursor = index;
          break;
        }
      } else {
        error_cursor = index;
        break;
      }
    }
  }
  console.log(`frase: ${frase} - cursor_error: ${error_cursor}`);
};

errorContador("[1+x+3*(y-5)]"); // -1
errorContador("[1+x)"); // 4
errorContador("}1+x"); // 0
errorContador("}1+x[]"); // 0
errorContador("{1+x}}"); // 5
errorContador("{{1+x))"); // 5
</script>

<style lang="scss" scoped></style>
