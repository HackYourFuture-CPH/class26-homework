const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const resultSpan = document.getElementById("result");

let exchangeRates;
fetch("https://open.er-api.com/v6/latest/USD")
  .then((response) => response.json())
  .then((data) => {
    exchangeRates = data.rates;
    dropdownsFunction();
  });

function dropdownsFunction() {
  const currencies = Object.keys(exchangeRates);
  fromCurrencySelect.innerHTML = createOptions(currencies, "EUR");
  toCurrencySelect.innerHTML = createOptions(currencies, "DKK");

  fromCurrencySelect.value = "EUR";
  toCurrencySelect.value = "DKK";

  amountInput.addEventListener("input", updateResult);
  fromCurrencySelect.addEventListener("change", updateResult);
  toCurrencySelect.addEventListener("change", updateResult);
}

function createOptions(currencies) {
  return currencies
    .map((currency) => `<option value="${currency}">${currency}</option>`)
    .join("");
}

function updateResult() {
  const amount = parseFloat(amountInput.value) || 0;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const result =
    (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
  resultSpan.textContent = result.toFixed(2);
}
