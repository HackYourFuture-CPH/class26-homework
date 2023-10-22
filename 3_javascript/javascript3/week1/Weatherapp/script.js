document.addEventListener("DOMContentLoaded", main);

function main() {
    const searchButton = document.getElementById("search-button");
    const loadingText = document.getElementById("loading-text");
    const weatherInfo = document.querySelector(".weather-info");

    searchButton.addEventListener("click", () => {
        const cityInput = document.getElementById("city-input").value;
        if (!cityInput) {
            alert("Please enter a city name.");
            return;
        }

        loadingText.style.display = "block";
        weatherInfo.style.display = "none";

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=c61cb7dd3bb25c904233df02c8eb3c5a`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                loadingText.style.display = "none";
                weatherInfo.style.display = "block";
                updateWeatherInfo(data);
            })
            .catch((error) => {
                loadingText.style.display = "none";
                alert("There was a problem with the fetch operation: " + error.message);
            });
    });
}

function updateWeatherInfo(data) {
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const weatherIcon = document.getElementById("weather-icon");
    const windSpeed = document.getElementById("wind-speed");
    const cloudiness = document.getElementById("cloudiness");
    const sunrise = document.getElementById("sunrise");
    const sunset = document.getElementById("sunset");

    cityName.textContent = `City: ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    cloudiness.textContent = `Cloudiness: ${data.clouds.all}%`;
    sunrise.textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
    sunset.textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
}