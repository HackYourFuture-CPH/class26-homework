const ApiKey = "https://open.er-api.com/v6/latest/USD";
let body = document.body;
let toSelectList = document.createElement("select");
let rates;
fetch(ApiKey)
    .then(Response => Response.json())
    .then(data => { //funA
        sales(data.rates)
        rates = data.rates;
    });

function sales(rates) {//funcB
    //select list from 
    const fromCurrency = document.getElementById("from")


    var fromSelectList = document.createElement("select");
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
        toSelectList.add(option);
    }
}


document.getElementById("mybtn").addEventListener("click", function () {
    const amount = document.getElementById("amount").value;

    const toCurrencyValue = toSelectList.value;
    const toCurrencyRate = rates[toCurrencyValue];
    let total = amount * toCurrencyRate;

    let result = document.getElementById("result");
    result.innerText = ` this is your amount ${total}`




});


