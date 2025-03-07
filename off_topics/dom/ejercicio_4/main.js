document.addEventListener("DOMContentLoaded", function () {
  const activo = document.querySelector(".activo");
  activo.addEventListener("click", function () {
    if (activo) {
      if (activo.classList.contains("activo")) {
        activo.classList.remove("activo");
      } else {
        activo.classList.add("activo");
      }
    }
  });
});
