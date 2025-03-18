document.addEventListener("DOMContentLoaded", function () {
  //variables
  const cash = document.querySelector("#cash");
  const changeContainer = document.querySelector("#change-due");
  const purchase = document.querySelector("#purchase-btn");
  const cashDrawerDisplay = document.querySelector("#cash-drawer-display");
  const priceDisplay = document.querySelector("#price-display");

  let price = 4.95;
  let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ];
  priceDisplay.innerHTML = `$ ${price}`;
  // functions
  const formatResults = (status, change) => {
    // función que recibe un status y un array de denominaciones y cantidades
    // y los muestra en el contenedor changeContainer
    changeContainer.classList.add("p-4", "bg-white", "rounded");
    changeContainer.innerHTML = `<p class="text-bold">Status: ${status}</p>`;
    changeContainer.innerHTML += change
      .map(
        ([denominationName, amount]) => `<p>${denominationName}: $${amount}</p>`
      )
      .join("");
  };

  const checkCashRegister = () => {
    // función que calcula el cambio a devolver al cliente
    // y muestra el resultado en el contenedor changeContainer
    const cashInCents = Math.round(Number(cash.value) * 100);
    const priceInCents = Math.round(price * 100);
    // si el cliente no tiene suficiente dinero para pagar el producto
    // se muestra un mensaje de alerta y se limpia el campo de texto
    if (cashInCents < priceInCents) {
      alert("Customer does not have enough money to purchase the item");
      cash.value = "";
      return;
    }
    // si el cliente paga con la cantidad exacta
    // se muestra un mensaje en el contenedor changeContainer
    if (cashInCents === priceInCents) {
      changeContainer.innerHTML =
        "<p>No change due - customer paid with exact cash</p>";
      cash.value = "";
      return;
    }
    // se calcula el cambio a devolver al cliente
    let changeDue = cashInCents - priceInCents;
    const reversedCid = [...cid]
      .reverse()
      .map(([denominationName, amount]) => [
        denominationName,
        Math.round(amount * 100),
      ]);
    // denominaciones de las monedas y billetes
    const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    const result = { status: "OPEN", change: [] };
    const totalCID = reversedCid.reduce(
      (prev, [_, amount]) => prev + amount,
      0
    );
    // si el cajero no tiene suficiente dinero para devolver el cambio
    // se muestra un mensaje en el contenedor changeContainer
    if (totalCID < changeDue) {
      changeContainer.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
      return;
    }
    // si el cajero tiene la cantidad exacta para devolver el cambio
    // se muestra un mensaje en el contenedor changeContainer
    if (totalCID === changeDue) {
      result.status = "CLOSED";
    }
    // se calcula el cambio a devolver al cliente
    for (let i = 0; i <= reversedCid.length; i++) {
      if (changeDue >= denominations[i] && changeDue > 0) {
        const [denominationName, total] = reversedCid[i];
        const possibleChange = Math.min(total, changeDue);
        const count = Math.floor(possibleChange / denominations[i]);
        const amountInChange = count * denominations[i];
        changeDue -= amountInChange;
        if (count > 0) {
          result.change.push([denominationName, amountInChange / 100]);
        }
      }
    }
    // si el cajero no tiene suficiente dinero para devolver el cambio
    // se muestra un mensaje en el contenedor changeContainer
    if (changeDue > 0) {
      changeContainer.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
      return;
    }
    // se muestra el resultado en el contenedor changeContainer
    formatResults(result.status, result.change);
    updateUI(result.change);
  };

  const checkResults = () => {
    // función que verifica si el campo de texto cash tiene un valor
    // y llama a la función checkCashRegister
    if (!cash.value) {
      return;
    }
    checkCashRegister();
  };
  const updateUI = (change) => {
    // función que actualiza el cajón del cajero
    // con las monedas y billetes que se devuelven al cliente
    const currencyNameMap = {
      PENNY: "Pennies",
      NICKEL: "Nickels",
      DIME: "Dimes",
      QUARTER: "Quarters",
      ONE: "Ones",
      FIVE: "Fives",
      TEN: "Tens",
      TWENTY: "Twenties",
      "ONE HUNDRED": "Hundreds",
    };
    // Actualizar cid si se pasa el cambio
    if (change) {
      change.forEach(([changeDenomination, changeAmount]) => {
        const targetArr = cid.find(
          ([denominationName]) => denominationName === changeDenomination
        );
        targetArr[1] =
          (Math.round(targetArr[1] * 100) - Math.round(changeAmount * 100)) /
          100;
      });
    }
    // Actualizar el cajón del cajero
    cashDrawerDisplay.value = "";
    priceDisplay.innerHTML = `$ ${price}`;
    cashDrawerDisplay.innerHTML = `<p><strong>Cash Drawer</strong></p>
        
            ${cid
              .map(
                ([denominationName, amount]) =>
                  `<p>${currencyNameMap[denominationName]}: $${amount}</p>`
              )
              .join("")}
        `;
  };

  // Event listeners
  purchase.addEventListener("click", checkResults);
  cash.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      checkResults();
    }
  });
  // Initialize UI
  updateUI();
});
