// carga cuando el documento esté listo
document.addEventListener("DOMContentLoaded", function () {
  // código a ejecutar
  const ejercicio_1 = (msg) => {
    // mostrar la alerta al hacer click en el botón

    if (msg) {
      // forzar a que se muestre el mensaje
      const alert = document.querySelector("#alert");
      alert.classList.remove("hidden");
      alert.classList.add("show");
      alert.querySelector("p").textContent
        ? (alert.querySelector("p").textContent = msg)
        : (alert.querySelector("p").innerText = msg);
      setTimeout(() => {
        alert.classList.remove("show");
        alert.classList.add("hidden");
      }, 3000);
    }

    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
      const alert = document.querySelector("#alert");
      alert.classList.remove("hidden");
      alert.classList.add("show");
      setTimeout(() => {
        alert.classList.remove("show");
        alert.classList.add("hidden");
      }, 3000);
    });
  };
  const ejercicio_2 = () => {
    // cambiar el color de dos divs al hacer click por encima del primero.
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");
    div1.addEventListener("mouseover", () => {
      chnageClass(".div1", ".div2");
    });
    div2.addEventListener("mouseover", () => {
      chnageClass(".div2", ".div1");
    });
  };

  const ejercicio_3 = () => {
    // sumar dos números de un form y luego asiganr el resultado a un input
    const form = document.querySelector("#calculadora");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const num1 = parseInt(form.querySelector("#num1").value);
        const num2 = parseInt(form.querySelector("#num2").value);
        if (isNaN(num1) || isNaN(num2)) {
          ejercicio_1("Por favor, ingrese un número válido");
          return;
        }
        const result = num1 + num2;
        form.querySelector("#result").value = result;
        form.querySelector("#num1").value = 0;
        form.querySelector("#num2").value = 0;
      });
    }
  };
  const ejercicio_3_1 = () => {
    const btn_splash = document.querySelector("#spashBTN");
    btn_splash.addEventListener("click", () => {
      addSplash();
      ejercicio_4();
    });
  };
  const ejercicio_4 = () => {
    // Quitar el splash screen al pasar unos segundos
    const splash = document.querySelector("#splash");
    const content = document.querySelector("#content");
    setTimeout(() => {
      splash.style.display = "none";
      content.style.display = "block";
    }, 3000);
  };
  const ejercicio_5 = () => {
    // mostrar en el mensaje de alerta la id del boton que se hiso click.
    const btns = document.querySelectorAll(".boton");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        ejercicio_1(`Se hizo click en el botón con el id: ${btn.id}`);
      });
    });
  };
  const ejercicio_6 = () => {
    const div_1 = document.querySelector("#e7_div_1");
    const div_2 = document.querySelector("#e7_div_2");
    const div_3 = document.querySelector("#e7_div_3");

    div_2.addEventListener("mouseover", (e) => {
      let related = e.relatedTarget ? e.relatedTarget : e.fromElement;
      let current = e.currentTarget;
      console.log(related.id);
      switch (related.id) {
        case "e7_div_1":
          current.style.backgroundColor = "#007bff";
          break;
        case "e7_div_2":
          current.style.backgroundColor = "#28a745";
          break;
        case "e7_div_3":
          current.style.backgroundColor = "#ffc107";
          break;
        case "body":
          current.style.backgroundColor = "#f8d7da";
          break;
        default:
          div_2.style.backgroundColor = "black";
          break;
      }
    });
  };
  const ejercicio_8 = () => {
    const container = document.querySelector("#e8_wrapper");
    const div1 = container.querySelector(".div1_8");
    const div2 = container.querySelector(".div2_8");
    const div3 = container.querySelector(".div3_8");
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    document.addEventListener("keydown", (e) => {
      const key = e.key;
      console.log(key);
      switch (key) {
        case "1":
          div1.style.display = "flex";
          div2.style.display = "none";
          div3.style.display = "none";
          break;
        case "2":
          div2.style.display = "flex";
          div1.style.display = "none";
          div3.style.display = "none";
          break;
        case "3":
          div3.style.display = "flex";
          div1.style.display = "none";
          div2.style.display = "none";
          break;
        default:
          break;
      }
    });
  };
  ejercicio_10 = () => {
    const form = document.querySelector("#letrasform");
    const input = form.querySelector("#letras");

    input.addEventListener("input", (e) => {
      const value = e.target.value;
      const regex = /^[a-zA-Z]+$/;
      if (!regex.test(value)) {
        input.value = "";
        ejercicio_1("Por favor, solo ingrese letras");
      }
    });
  };
  ejercicio_1("Hola Mundo");
  ejercicio_2();
  ejercicio_3();
  ejercicio_3_1();
  ejercicio_4();
  ejercicio_5();
  ejercicio_6();
  ejercicio_8();
  ejercicio_10();
});

const chnageClass = (class1, class2) => {
  // Función que cambia el color de dos divs
  const div1 = document.querySelector(class1);
  const div2 = document.querySelector(class2);
  if (div1.classList.contains("bg-primary")) {
    div1.classList.remove("bg-primary");
    div1.classList.add("bg-secondary");
    div2.classList.remove("bg-secondary");
    div2.classList.add("bg-primary");
  }
};
const addSplash = () => {
  // Función que añade el splash screen
  const splash = document.querySelector("#splash");
  const content = document.querySelector("#content");
  splash.style.display = "flex";
  content.style.display = "none";
};

// Ejercicio 6 - Tiene que ir fuera porque tiene otro evento.

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const form = document.querySelector("#coordenadas");
  form.querySelector("#coorX").value = x;
  form.querySelector("#coorY").value = y;
});

// Ejercicio 9
document.addEventListener("scroll", () => {
  const arrow = document.querySelector("#arrow");
  if (window.scrollY > 200) {
    arrow.classList.remove("hidden");
  } else {
    arrow.classList.add("hidden");
  }
});
