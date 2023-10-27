

// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to populate dropdowns with currency options
function populateDropdowns() {
    const fromCurrencyDropdown = document.getElementById('fromCurrency');
    const toCurrencyDropdown = document.getElementById('toCurrency');

    // Clear existing options
    fromCurrencyDropdown.innerHTML = '';
    toCurrencyDropdown.innerHTML = '';

    // Check if currencyList is defined
    if (currencyList) {
        // Populate 'From' and 'To' dropdowns with currency options
        currencyList.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            fromCurrencyDropdown.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            toCurrencyDropdown.appendChild(option2);
        });

        // Set default values for dropdowns
        fromCurrencyDropdown.value = 'EUR';
        toCurrencyDropdown.value = 'DKK';
    }
}

// Function to calculate and display the result
function calculateResult() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Perform currency conversion
    const result = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);

    // Display the result
    document.getElementById('result').textContent = result.toFixed(2);
}

// Event listeners
document.getElementById('amount').addEventListener('input', calculateResult);
document.getElementById('fromCurrency').addEventListener('change', calculateResult);
document.getElementById('toCurrency').addEventListener('change', calculateResult);

// Define initApp function
async function initApp() {
    const data = await fetchData();
    if (data) {
        exchangeRates = data.rates;
        currencyList = Object.keys(exchangeRates);
        console.log(exchangeRates, currencyList);

        populateDropdowns();
    }
}

initApp();
