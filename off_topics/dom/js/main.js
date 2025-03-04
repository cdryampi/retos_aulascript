const cambiarTitulo = (msg) => {
  // función que cambia el título de la página
  const ejercicio_1 = document.querySelector("#ejercicio1");
  const p = ejercicio_1.querySelector("p");
  p.innerHTML = msg;
};

const cambiarColor = () => {
  // función que cambia del color del texto y lo centra
  const ejercicio_2 = document.querySelector("#ejercicio2");
  const div = ejercicio_2.querySelector("div");
  div.style.backgroundColor = "red";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
};

const agregarCaja = () => {
  // función que agrega una caja
  const ejercicio_3 = document.querySelector("#ejercicio3");
  const container = ejercicio_3.querySelector(".container");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML = ejercicio_3.querySelectorAll("div").length + 1;
  div.appendChild(p);
  container.appendChild(div);
};

const eliminarCaja = () => {
  // función que elimina la última caja
  const ejercicio_4 = document.querySelector("#ejercicio4");
  const container = ejercicio_4.querySelector(".container");
  const div = container.querySelector("div:last-child");
  if (!div) return;
  container.removeChild(div);
};

const agregarPie = () => {
  // función que muestra el figcaption
  const ejercicio_5 = document.querySelector("#ejercicio5");
  const figure = ejercicio_5.querySelector("figure");
  const figcaption = figure.querySelector("figcaption");

  if (figcaption.classList.contains("hidden")) {
    figcaption.classList.remove("hidden");
    figcaption.classList.add("show");
  } else {
    figcaption.classList.remove("show");
    figcaption.classList.add("hidden");
  }
};

const mostrarUrlImagenes = () => {
  // función que muestra las url de las imágenes
  const ejercicio_6 = document.querySelector("#ejercicio6");
  const imgs = document.querySelectorAll("img");
  const div = ejercicio_6.querySelector("div");
  div.innerHTML = "";
  imgs.forEach((img) => {
    let p = document.createElement("p");
    p.innerHTML = img.src;
    div.appendChild(p);
  });
};
