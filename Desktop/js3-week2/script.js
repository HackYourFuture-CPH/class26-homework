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

  const currencies = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
  ];

  function addListOfCurrencies() {
    currencies.forEach((currency) => {
      const selectToCurrency = document.getElementById("toCurrency");
      const newCurrencyTo = document.createElement("option");
      newCurrencyTo.value = currency;
      newCurrencyTo.text = currency;
      selectToCurrency.appendChild(newCurrencyTo);

      const selectFromCurrency = document.getElementById("fromCurrency");
      const newCurrencyFrom = document.createElement("option");
      newCurrencyFrom.value = currency;
      newCurrencyFrom.text = currency;
      selectFromCurrency.appendChild(newCurrencyFrom);
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