let fromCurrency = 'EUR'
let toCurrency = 'DKK'
let amount = ''

function setupCurrencyCalculator(fromCurrency, toCurrency) {
    console.log('fromCurrency', fromCurrency)
    console.log('toCurrency', toCurrency)

    const API = "https://open.er-api.com/v6/latest/"

    fetch(`${API}${fromCurrency}`)
        .then((response) =>
            response.json()
            //console.log(response);
        ).then((data) => {
            const exchangeRates = data.rates;

            const currencyList = Object.keys(exchangeRates);

            const fromSelectBoxDomNode = createSelectBox(
                currencyList,
                fromCurrency,
                'fromCurrencySelectBox',
                (e) => {
                    fromCurrency = e.target.value;

                    setupCurrencyCalculator(fromCurrency, toCurrency);
                });

            const toSelectBoxDomNode = createSelectBox(
                currencyList, 
                toCurrency, 
                'toCurrencySelectBox',
                (e) => {
                    toCurrency = e.target.value;

                    console.log('fromCurrency', fromCurrency)
                    console.log('toCurrency', toCurrency)

                    if(amount >= 0) {
                        const result = amount * exchangeRates[toCurrency];

                        resultContainer.innerHTML = result
                    }
                }
            );

            const fromSelectBoxContainer = document.getElementById('fromSelectBoxContainer')
            const toSelectBoxContainer = document.getElementById('toSelectBoxContainer')

            fromSelectBoxContainer.innerHTML = ''
            toSelectBoxContainer.innerHTML = ''

            fromSelectBoxContainer.appendChild(fromSelectBoxDomNode);
            toSelectBoxContainer.appendChild(toSelectBoxDomNode);

            const amountInputField = document.getElementById("amount");
            const resultContainer = document.getElementById("resultContainer");

            amountInputField.addEventListener('input', (e) => {
                amount = e.target.value;

                const result = amount * exchangeRates[toCurrency];

                resultContainer.innerHTML = result
            });

            if(amount) {
                const result = amount * exchangeRates[toCurrency];
                resultContainer.innerHTML = result
            } 
        });
}

function createSelectBox(options, defaultOption, id, onChange) {
    const optionsHTML = options.map((option) => {
        return `<option ${(option === defaultOption) && 'selected'} value="${option}">${option}</option>`
    });

    const selectBox = document.createElement('select');

    selectBox.id = id
    selectBox.innerHTML = `${optionsHTML.join('')}`

    selectBox.addEventListener('change', onChange)

    return selectBox;
}

setupCurrencyCalculator(fromCurrency, toCurrency)