
async function fetchExchangeRates() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        const exchangeRates = data.rates;
        const currencies = Object.keys(exchangeRates);

        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');


        currencies.forEach((currency) => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.text = currency;
            fromCurrencySelect.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.text = currency;
            toCurrencySelect.appendChild(option2);
        });
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}


function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    fetch('https://open.er-api.com/v6/latest/USD')
        .then((response) => response.json())
        .then((data) => {
            const exchangeRates = data.rates;
            const conversionRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
            const result = (amount * conversionRate).toFixed(2);
            document.getElementById('result').textContent = result;
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
        });
}


document.getElementById('convert').addEventListener('click', convertCurrency);


fetchExchangeRates();
