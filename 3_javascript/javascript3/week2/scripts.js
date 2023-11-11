document.addEventListener('DOMContentLoaded', () => {
  const inputAmount = document.getElementById('amount');
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');
  const clickConvert = document.getElementById('convert');

  let amount = 0; // Declare amount

  function fetchCurrencyPairs() {
    const apiKey = '325349696f77df328d988c2c';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const currencyPairs = Object.keys(data.supported_codes);
        populateCurrencyDropdowns(currencyPairs);
      })
      .catch((error) => {
        console.error('Error fetching currency pairs:', error);
      });
  }

  function populateCurrencyDropdowns(currencyPairs) {
    currencyPairs.forEach((currency) => {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      fromCurrencySelect.appendChild(option);
      toCurrencySelect.appendChild(option.cloneNode(true));
    });
  }

  inputAmount.addEventListener('input', () => {
    const amount = parseFloat(inputAmount.value); // Declare amount within the listener
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
        if (conversionRate === undefined) {
          throw new Error(
            'Conversion rate not available for the selected currencies.'
          );
        }
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
    } else if (conversionRate === undefined) {
      printResult.innerText =
        'Conversion rate not available for the selected currencies.';
    } else {
      printResult.innerText = `Your conversion is: ${fromCurrencySelect.value}:${amount} = ${toCurrencySelect.value}:${convertedAmount}`;
    }
  }

  clickConvert.addEventListener('click', getData);

  fetchCurrencyPairs();
});
