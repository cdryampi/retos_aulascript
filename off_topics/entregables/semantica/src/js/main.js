document.addEventListener("DOMContentLoaded", () => {
  const titles = ["inspira", "renueva", "innova", "recicla"];
  const typingElement = document.querySelector(".color-title");
  let index = 0;

  function updateTypingText() {
    typingElement.style.animation = "none"; // Detiene la animación antes de cambiar el texto
    typingElement.innerHTML = titles[index]; // Cambia el texto
    void typingElement.offsetWidth; // Reinicia el render para aplicar la animación de nuevo
    typingElement.style.animation =
      "typing 3.5s steps(40, end) forwards, blink-caret 0.75s step-end infinite";

    index = (index + 1) % titles.length; // Avanza al siguiente texto en la lista
  }

  updateTypingText(); // Inicializa la primera vez

  setInterval(updateTypingText, 4000); // Cambia el texto cada 4 segundos
});
