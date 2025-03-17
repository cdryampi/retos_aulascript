document.addEventListener("DOMContentLoaded", function () {
  // Variables
  const numberInput = document.querySelector("#number");
  const button = document.querySelector("#convert-btn");
  const output = document.querySelector("#output");

  // Event Listener
  button.addEventListener("click", () => {
    clearOutput();
    const number = numberInput.value;
    if (number === "") {
      alert("Please enter a number");
    } else if (number <= 0) {
      alert("Please enter a positive number");
    } else if (number > 3999) {
      alert("Please enter a number less than 4000");
    } else {
      printNumber(ordinalNumbertoRoman(number));
    }
  });

  const ordinalNumbertoRoman = (number) => {
    const romanNumeral = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let romanNumber = "";
    for (let key in romanNumeral) {
      while (number >= romanNumeral[key]) {
        romanNumber += key;
        number -= romanNumeral[key];
      }
    }
    console.log(romanNumber);
    return romanNumber;
  };

  const printNumber = (number) => {
    if (output.classList.contains("hidden")) {
      output.classList.remove("hidden");
    }
    output.innerHTML = number;
  };
  const clearOutput = () => {
    output.innerHTML = "";
    if (!output.classList.contains("hidden")) {
      output.classList.add("hidden");
    }
  };
});
