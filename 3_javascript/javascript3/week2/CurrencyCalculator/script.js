domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}

function domLoader() {
  const inputAmount = document.getElementById("amount");
  const clickConvert = document.getElementById("convert");

  clickConvert.addEventListener("click", getData);
  inputAmount.addEventListener("input", () => (amount = inputAmount.value));

  const fromCurrencySelect = document.getElementById("fromCurrency");
  fromCurrencySelect.addEventListener(
    "input",
    () => (fromCurrency = fromCurrencySelect.value)
  );

  const toCurrencySelect = document.getElementById("toCurrency");
  toCurrencySelect.addEventListener(
    "input",
    () => (toCurrency = toCurrencySelect.value)
  );

  const apiKey = "1bd1c44ffdf9e866b3f41d32";
  let allData = "";
  let fromCurrency = "EUR";
  let toCurrency = "DKK";
  let amount = 0;

  

function addListOfCurrencies() {
  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
    .then((data) => data.json())
    .then((data) => {
      let currencies = data.conversion_rates;

      const selectToCurrency = document.getElementById("toCurrency");
      const selectFromCurrency = document.getElementById("fromCurrency");

      Object.keys(currencies).forEach((currency) => {
        const newCurrencyTo = document.createElement("option");
        newCurrencyTo.value = currency;
        newCurrencyTo.text = currency;
        selectToCurrency.appendChild(newCurrencyTo);

        const newCurrencyFrom = document.createElement("option");
        newCurrencyFrom.value = currency;
        newCurrencyFrom.text = currency;
        selectFromCurrency.appendChild(newCurrencyFrom);
      });
    });
}

  addListOfCurrencies();

  function getData() {
    return new Promise((resolve) => {
      fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`
      )
        .then((data) => data.json())
        .then((data) => {
          allData = data;
          resolve(data);
        })
        .then(() => conversionResult());
    });
  }

  function conversionResult() {
    if (isNaN(amount)) {
      const printResult = document.getElementById("conversionResult");
      printResult.innerText = `Please enter the amount of money \n(use a period  "." as the decimal point)`;
    } else {
      let conversionRate = 0;
      conversionRate = allData.conversion_rate;
      let conversionResult = amount * conversionRate;
      conversionResult = conversionResult.toFixed(2);
      const printResult = document.getElementById("conversionResult");
      printResult.innerText = `Your conversion is:\n${fromCurrency}: ${amount} =\n${toCurrency}:${conversionResult}`;
    }
  }
}
