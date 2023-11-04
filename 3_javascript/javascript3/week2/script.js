
const ApiKey = `https://open.er-api.com/v6/latest/EUR`;



let toSelectList = document.createElement("select");
let fromSelectList = document.createElement("select");
let rates;

fetch(ApiKey)
    .then(Response => Response.json())
    .then(data => { //funA
        rates = data.rates;
        changeCurrency(data.rates)
    });

function changeCurrency(rates) {//funcB
    //select list from 

    const fromCurrency = document.getElementById("fromCurrencyContainer")
    fromSelectList.id = "SelectFrom";
    fromCurrency.appendChild(fromSelectList);

    let key = Object.keys(rates)

    for (var i = 0; i < key.length; i++) {

        var option = document.createElement("option");
        option.value = key[i];
        option.text = key[i];
        fromSelectList.add(option);
    }
    // select list to 

    const toCurrencyContainer = document.getElementById("toCurrencyContainer");

    toSelectList.id = "SelectTo";
    toCurrencyContainer.appendChild(toSelectList);


    for (var i = 0; i < key.length; i++) {

        var option = document.createElement("option");
        option.value = key[i];
        option.text = key[i];
        if (option.value == "DKK") {
            option.selected = true;
        }

        toSelectList.add(option);
    }
}


document.getElementById("mybtn").addEventListener("click", function () {
    const amount = document.getElementById("amount").value;

    const toCurrencyValue = toSelectList.value;
    const toCurrencyRate = rates[toCurrencyValue];

    const fromRateValue = rates[fromSelectList.value];

    let total = amount * toCurrencyRate / fromRateValue; // amount * to / from

    let result = document.getElementById("result");
    result.innerText = ` this is your amount ${total}`

});
