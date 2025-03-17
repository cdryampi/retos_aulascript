document.addEventListener("DOMContentLoaded", function () {
  // variables
  const input = document.querySelector("#user-input");
  const button = document.querySelector("#check-btn");
  const clear = document.querySelector("#clear-btn");
  const output = document.querySelector("#results-div");

  // functions

  const clearOutput = () => {
    // matar a todos los hijos de output
    output.innerHTML = "";
  };
  const addPhoneToResult = (phone, valid) => {
    // añadir un párrafo con el número de teléfono a output
    const p = document.createElement("p");
    if (valid) {
      p.textContent = phone + " is a valid US phone number";
      p.classList.add("text-green-500");
    } else {
      p.textContent = phone + " is NOT a valid US phone number";
      p.classList.add("text-red-500");
    }
    p.textContent = phone;
    output.appendChild(p);
  };
  const checkPhoneUSNumber = (phone) => {
    // expresión regular para números de teléfono de US. Ejemplo 1 555-555-5555
    // https://stackoverflow.com/questions/9776231/regular-expression-to-validate-us-phone-numbers
    const phonePattern = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    // testear la expresión regular con el número de teléfono
    return phonePattern.test(phone);
  };

  // event listener
  button.addEventListener("click", function () {
    // obtener el valor del input
    const inputValue = input.value;
    // limpiar el input
    input.value = "";
    if (inputValue === "") {
      // devolver un alert cuando el input esté vacío.
      alert("Please provide a phone number");
    }

    // comprobar si el número de teléfono es de US
    addPhoneToResult(inputValue, checkPhoneUSNumber(inputValue));
  });
  clear.addEventListener("click", clearOutput);
});
