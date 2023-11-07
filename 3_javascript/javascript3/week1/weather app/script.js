console.log ("It's Homework time :)");

let jsonData = fetch("https://goweather.herokuapp.com/weather/denmark");

jsonData.then((response) => {
    return response.json()
}).then((value) => {
    console.log(value)
}).catch(error => {
    console.error("Error !" , error)
});

//Weather App 

const button = document.getElementById("btn");
const cityNameInput= document.getElementById("city-name");

button.addEventListener("click", function () {
    const cityName = cityNameInput.value;
    fetchWeatherApi(cityName);
});

cityNameInput.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        const cityName = cityNameInput.value;
        fetchWeatherApi(cityName)
    }
});

function fetchWeatherApi(query) {
    const apiKey = 'ed37fd9cda937def52ad1667e1216d01';
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;
    
    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            renderWeather(data);
        })
        .catch(error => {
            renderError("Error: Failed to fetch weather data")
            console.error('Error:', error);
        });
}

function renderWeather(weather) {
    const resultContainer = document.querySelector("#weather-results");
    resultContainer.innerHTML = ''; 

    const city = document.createElement("h2");
    city.textContent = `City: ${weather.name}`;
    resultContainer.appendChild(city);

    const temp = document.createElement("p");
    temp.textContent = `Temperature: ${weather.main.temp}°F`;
    resultContainer.appendChild(temp);

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    resultContainer.appendChild(humidity);

    const wind = document.createElement("p");
    wind.textContent = `Wind: ${weather.wind.speed} mph, ${weather.wind.deg}°`;
    resultContainer.appendChild(wind);

    const sunriseTime = document.createElement("p");
    sunriseTime.textContent = `Sunrise: ${new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}`;
    resultContainer.appendChild(sunriseTime);

    const sunsetTime = document.createElement("p");
    sunsetTime.textContent = `Sunset: ${new Date(weather.sys.sunset * 1000).toLocaleTimeString()}`;
    resultContainer.appendChild(sunsetTime);

    const weatherDetails = weather.weather[0];
    if (weatherDetails && weatherDetails.description) {
        const cloudiness = document.createElement("p");
        cloudiness.textContent = `Description: ${weatherDetails.description}`;
        resultContainer.appendChild(cloudiness);
    }
}




