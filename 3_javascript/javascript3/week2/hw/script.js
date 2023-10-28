document.addEventListener("DOMContentLoaded", main);

function main() {
async function fetchCurrencyData() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching currency data:', error);
    }
}

async function populateCurrencyDropdowns() {
    const data = await fetchCurrencyData();
    if (!data) {
        return;
    }

    const fromCurrencyDropdown = document.getElementById('from-currency');
    const toCurrencyDropdown = document.getElementById('to-currency');

    for (const currency in data.rates) {
        const fromOption = new Option(currency, currency);
        fromCurrencyDropdown.add(fromOption);

        const toOption = new Option(currency, currency);
        toCurrencyDropdown.add(toOption);
    }

    // Set default values
    fromCurrencyDropdown.value = 'EUR';
    toCurrencyDropdown.value = 'DKK';
}

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const data = await fetchCurrencyData();
    if (!data) {
        return;
    }

    const fromRate = data.rates[fromCurrency];
    const toRate = data.rates[toCurrency];

    if (!isNaN(amount) && !isNaN(fromRate) && !isNaN(toRate)) {
        const result = (amount / fromRate) * toRate;
        document.getElementById('result').textContent = result.toFixed(2);
    } else {
        document.getElementById('result').textContent = 'Invalid input or currency rate not found.';
    }
}

    populateCurrencyDropdowns();

    const convertButton = document.querySelector('.convert-button');
    convertButton.addEventListener('click', convertCurrency);
}