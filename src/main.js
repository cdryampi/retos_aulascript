import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).mount("#app");

// Inicializa AOS
AOS.init({
  duration: 800, // Duración en ms
  offset: 100, // Cuándo empieza la animación (px)
  once: false, // Si se ejecuta solo una vez o en cada scroll
});
