document.addEventListener("DOMContentLoaded", function () {
  const api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
  const fromDropDown = document.getElementById("from-currency");
  const toDropDown = document.getElementById("to-currency");

  function populateDropdowns() {
    function addOption(currency, dropdown) {
      const option = document.createElement("option");
      option.value = currency;
      option.text = currency;
      dropdown.appendChild(option);
    }

    currencies.forEach((currency) => {
      addOption(currency, fromDropDown);
      addOption(currency, toDropDown);
    });

    fromDropDown.value = "GBP";
    toDropDown.value = "DKK";
  }

  function convertCurrency() {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;
    const resultElement = document.getElementById("result");

    if (amount.length !== 0) {
      fetch(api)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.result === "success") {
            const fromExchangeRate = data.conversion_rates[fromCurrency];
            const toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount =
              (amount / fromExchangeRate) * toExchangeRate;
            resultElement.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
              2
            )} ${toCurrency}`;
          } else {
            resultElement.innerHTML = "Error fetching exchange rates.";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          resultElement.innerHTML = "Error fetching exchange rates.";
        });
    } else {
      alert("Please enter an amount to convert");
    }
  }

  function setupEventListeners() {
    document
      .querySelector("#convert-button")
      .addEventListener("click", convertCurrency);

    document
      .querySelector("#amount")
      .addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
          convertCurrency();
        }
      });

    window.addEventListener("load", convertCurrency);
  }

  populateDropdowns();
  setupEventListeners();
});
