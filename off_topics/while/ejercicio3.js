// Un script que preguntará al usuario si desea continuar con el programa.
// Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará.
// Cualquier otra entrada repetirá la pregunta

const parar_programa = () => {
  let respuesta = "s";

  while (respuesta !== "n") {
    respuesta = prompt("¿Desea continuar con el programa? (s/n)");
    if (respuesta !== "n") {
      console.log("Respuesta incorrecta");
    }
  }
};

parar_programa();
