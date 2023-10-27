let fromCurrency = 'EUR';
let toCurrency = 'DKK';
let amount = 0;

document.addEventListener('DOMContentLoaded', () => {
  const inputAmount = document.getElementById('amount');
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');
  const clickConvert = document.getElementById('convert');

  function populateCurrencyDropdowns() {
    const currencyPairs = [
      'USD',
      'EUR',
      'DKK',
      'JPY',
      'GBP',
      'AUD',
      'CAD',
      'CHF',
      'CNY',
      'SEK',
      'NZD',
      'SGD',
      'HKD',
      'NOK',
      'KRW',
      'MXN',
      'INR',
      'BRL',
      'ZAR',
      'AED',
      'RUB',
    ];

    currencyPairs.forEach((currency) => {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      fromCurrencySelect.appendChild(option);
      toCurrencySelect.appendChild(option.cloneNode(true));
    });

    fromCurrencySelect.value = fromCurrency;
    toCurrencySelect.value = toCurrency;
  }

  inputAmount.addEventListener('input', () => {
    amount = parseFloat(inputAmount.value);
  });

  function getData() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const apiKey = '325349696f77df328d988c2c';
    const printResult = document.getElementById('conversionResult');
    printResult.innerText = 'Fetching data...';

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received:', data);
        const conversionRate = data.conversion_rates[toCurrency];
        const convertedAmount = amount * conversionRate;
        displayConversionResult(conversionRate, convertedAmount);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        displayConversionResult('Error');
      });
  }

  function displayConversionResult(conversionRate, convertedAmount) {
    const printResult = document.getElementById('conversionResult');
    if (conversionRate === 'Error') {
      printResult.innerText = 'An error occurred while fetching data.';
    } else {
      printResult.innerText = `Your conversion is: ${fromCurrency}:${amount} = ${toCurrency}:${convertedAmount}`;
    }
  }

  clickConvert.addEventListener('click', getData);

  populateCurrencyDropdowns();
});
