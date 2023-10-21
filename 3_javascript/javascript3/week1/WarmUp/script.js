// --> Create your own json file
const myJsonObject = {
    car1: {
        brand: "BMW",
        model: "M3",
        year: 2003,
    },
    car2: {
        brand: "Ford",
        model: "Focus",
        year: 2012,
    },
    car3: {
        brend: "VW",
        model: "Passat",
        year: 2020
    },
    car4: {
        brand: "Nissan",
        model: "X-trail",
        year: 2023,
    }
}

const myJson = JSON.stringify(myJsonObject)
console.log(myJson)

const outputMyArray = document.getElementById('myjson')

if (outputMyArray) {
    outputMyArray.innerHTML = myJson;
} else {
    console.error("Element with id 'myjson' didn't find on the page.");
}

const outputCars = document.getElementById('listofcars')
let html = '';
for (const carKey in myJsonObject) {
    if (myJsonObject.hasOwnProperty(carKey)) {
        const car = myJsonObject[carKey];
        html += `<p><strong>${carKey}:</strong> Brand: ${car.brand || 'N/A'}, Model: ${car.model || 'N/A'}, Year: ${car.year || 'N/A'}</p>`;
    }
}

// Вставляем сгенерированный HTML в элемент "output"
outputCars.innerHTML = html;

//--> Find a cool api
//A simple api that returns an array of random fact about cats on a GET request
//You can request more than one fact, as in my request.
//If you know the ID you can request a specific fact
// You can also change the language using the GET lang parameter.
fetch('https://meowfacts.herokuapp.com/?count=3')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const myCoolApi = document.getElementById('mycoolapi');
        if (myCoolApi) {
            myCoolApi.innerHTML = JSON.stringify(data);
        } else {
            console.error("Element with id 'mycoolapi' not found on the page.");
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
