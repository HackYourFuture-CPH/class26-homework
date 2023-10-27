const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const resultSpan = document.getElementById('result');

const apiEndpoint = 'https://open.er-api.com/v6/latest/USD';

// Fetch exchange rates and populate currency dropdowns
fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data.rates);

        currencies.forEach(currency => {
            const fromOption = document.createElement('option');
            fromOption.value = currency;
            fromOption.text = currency;
            fromCurrencySelect.appendChild(fromOption);

            const toOption = document.createElement('option');
            toOption.value = currency;
            toOption.text = currency;
            toCurrencySelect.appendChild(toOption);
        });

        // Set default currencies to EUR and DKK
        fromCurrencySelect.value = 'EUR';
        toCurrencySelect.value = 'DKK';

        // Update result and log changes when the user makes changes
        amountInput.addEventListener('input', () => {
            const amount = parseFloat(amountInput.value);
            const fromCurrency = fromCurrencySelect.value;
            const toCurrency = toCurrencySelect.value;
            console.log(`${amount.toFixed(2)} ${fromCurrency} want to exchange to ${toCurrency} with a changing rate of the current rate.`);
            convertCurrency();
        });

        fromCurrencySelect.addEventListener('change', () => {
            const amount = parseFloat(amountInput.value);
            const fromCurrency = fromCurrencySelect.value;
            const toCurrency = toCurrencySelect.value;
            console.log(`${amount.toFixed(2)} ${fromCurrency} want to exchange to ${toCurrency} with a changing rate of the current rate.`);
            convertCurrency();
        });

        toCurrencySelect.addEventListener('change', () => {
            const amount = parseFloat(amountInput.value);
            const fromCurrency = fromCurrencySelect.value;
            const toCurrency = toCurrencySelect.value;
            console.log(`${amount.toFixed(2)} ${fromCurrency} want to exchange to ${toCurrency} with a changing rate of the current rate.`);
            convertCurrency();
        });

        // Initial conversion
        convertCurrency();
    });

function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            const fromRate = rates[fromCurrency];
            const toRate = rates[toCurrency];
            const convertedAmount = (amount / fromRate) * toRate;
            resultSpan.textContent = convertedAmount.toFixed(2);

            console.log(`The result is: ${convertedAmount.toFixed(2)}`);
        });
}
