document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const currencyFromSelect = document.getElementById("currency-from");
    const currencyToSelect = document.getElementById("currency-to");
    const resultSpan = document.getElementById("result");

    let exchangeRates = {};
    
    fetch("https://open.er-api.com/v6/latest/USD")
        .then(response => response.json())
        .then(data => {
            exchangeRates = data.rates;

            const currencies = Object.keys(exchangeRates);

            currencies.forEach(currency => {
                const option = document.createElement("option");
                option.value = currency;
                option.textContent = currency;
                currencyFromSelect.appendChild(option.cloneNode(true));
                currencyToSelect.appendChild(option);
            });

            currencyFromSelect.value = "EUR";
            currencyToSelect.value = "DKK";
        });

    amountInput.addEventListener("input", convertCurrency);
    currencyFromSelect.addEventListener("change", convertCurrency);
    currencyToSelect.addEventListener("change", convertCurrency);

    function convertCurrency() {
        const fromCurrency = currencyFromSelect.value;
        const toCurrency = currencyToSelect.value;
        const amount = parseFloat(amountInput.value) || 0;

        if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
            const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
            const convertedAmount = amount * exchangeRate;
            resultSpan.textContent = convertedAmount.toFixed(2);
        } else {
            resultSpan.textContent = "N/A";
        }
    }

    convertCurrency();
});
