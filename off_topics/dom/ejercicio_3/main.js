document.addEventListener("DOMContentLoaded", function () {
  // Ejercicio 3
  const imagesURL = [];

  let isLoading = false;

  const proxyHandlerFreeCodeCamp = {
    // handler para el proxy de FreeCodeCampImage
    get: function (target, prop) {
      return target[prop];
    },
    set: function (target, prop, value) {
      if (prop === "url" && value.includes("https://cdn.freecodecamp.org/")) {
        target[prop] = value;
        return true;
      } else {
        throw new Error("La url no es de FreeCodeCamp");
      }
    },
  };

  class FreeCodeCampImage {
    // clase para las imagenes de FreeCodeCamp
    constructor(url) {
      this.url = url;
    }
  }

  const findURLImages = () => {
    // función para buscar las urls de las imagenes en la página, solo las de FreeCodeCamp.
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      try {
        // intentamos crear un objeto FreeCodeCampImage y añadirlo al array de urls de imagenes. Pero si la url no es de FreeCodeCamp, lanzamos una excepción.
        const freeCodeCampImage = new Proxy(
          new FreeCodeCampImage(),
          proxyHandlerFreeCodeCamp
        );
        freeCodeCampImage.url = img.src;
        imagesURL.push(freeCodeCampImage.url);
      } catch (e) {
        console.warn(
          `La imagen ${img.src} no es de FreeCodeCamp... por lo tanto no se añadirá al array de urls de imágenes`
        );
      }
    });
  };

  function* returnUrlImage() {
    // función para retornar una a una las urls de las imagenes
    if (imagesURL.length === 0) {
      console.log("No hay urls de imágenes");
      return;
    }
    for (const url of imagesURL) {
      yield url;
    }
  }
  const printURLintoUL = (urlIterator) => {
    // función para pintar una url en el ul de la página
    const alert = document.querySelector("#alerta");
    const pAlert = document.querySelector("#alerta p");

    const ul = document.querySelector("#enlaces");
    const li = document.createElement("li");
    const url = urlIterator.next();

    const button = document.querySelector("#mostrarEnlaces");
    button.disabled = true;
    button.classList.add("disabled");
    if (url.done) {
      pAlert.textContent = "No hay más urls de imágenes";
      alert.style.display = "block";
      setTimeout(() => {
        alert.style.display = "none";
        button.disabled = false;
        button.classList.remove("disabled");
      }, 3000);
      return;
    } else {
      pAlert.textContent = "URL de la imagen añadida correctamente";
      alert.style.display = "block";
      setTimeout(() => {
        alert.style.display = "none";
        button.disabled = false;
        button.classList.remove("disabled");
      }, 3000);
      li.textContent = url.value;
      ul.appendChild(li);
    }
  };
  // botón que llama a la función findURLImages
  const btn = document.querySelector("#mostrarEnlaces");
  const urlIterator = returnUrlImage();

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    printURLintoUL(urlIterator);
  });
  findURLImages();
});
