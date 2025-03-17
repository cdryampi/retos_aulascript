document.addEventListener("DOMContentLoaded", function () {
  // variables
  const button = document.querySelector("#check-btn");
  const input = document.querySelector("#text-input");
  const result = document.querySelector("#result");

  button.addEventListener("click", function () {
    const inputValue = input.value;
    if (inputValue === "") {
      // 4. When you click on the #check-btn element without entering a value into the #text-input element,
      // an alert should appear with the text Please input a value.

      AlertError("Please input a value");
    }
    if (inputValue.length > 0) {
      //5. When the #text-input element only contains the letter A and the #check-btn element is clicked,
      // the #result element should contain the text A is a palindrome.
      showResult(`${inputValue} is a palindrome`);
    }
    checkPalindrome(inputValue)
      ? showResult(`${inputValue} is a palindrome`)
      : showResult(`${inputValue} is not a palindrome`);
  });

  const AlertError = (text) => {
    alert(text);
  };
  const showResult = (text) => {
    if (result.classList.contains("hidden")) {
      result.classList.remove("hidden");
    }
    result.innerHTML = text;
  };
  const checkPalindrome = (text) => {
    // limpiar caracteres ilegales y convertir a minusculas para comparar.
    const clearIlegalCharacters = text
      .replace(/[^A-Za-z0-9]/g, "")
      .toLowerCase();
    const reversedText = clearIlegalCharacters.split("").reverse().join("");
    const aux_text = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    return aux_text === reversedText;
  };
});
