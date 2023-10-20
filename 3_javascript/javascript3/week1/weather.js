document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("cityInput");
    const fetchWeatherButton = document.getElementById("fetchWeather");
    const weatherInfo = document.getElementById("weatherInfo");
    const mapContainer = document.getElementById("map");
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    let map;

    fetchWeatherButton.addEventListener("click", function () {
        const cityName = cityInput.value.trim();

        if (cityName === "") {
            alert("Please enter a city name.");
            return;
        }

        loading.style.display = "block";
        weatherInfo.style.display = "none";
        mapContainer.style.display = "none";
        error.style.display = "none";

        fetchWeatherData(cityName)
            .then((data) => {
                displayWeatherData(data);
            })
            .catch(() => {
                loading.style.display = "none";
                error.style.display = "block";
            });
    });

    async function fetchWeatherData(cityName) {
        const apiKey = "e86ea71ab5d9712fd0cbc683ec50b2c8";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("City not found.");
        }

        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) {
        loading.style.display = "none";
        error.style.display = "none";
        weatherInfo.style.display = "block";
        mapContainer.style.display = "block";

        const cityNameElement = document.getElementById("cityName");
        const temperatureElement = document.getElementById("temperature");
        const weatherIcon = document.getElementById("weatherIcon");
        const windSpeedElement = document.getElementById("windSpeed");
        const cloudinessElement = document.getElementById("cloudiness");
        const sunriseElement = document.getElementById("sunrise");
        const sunsetElement = document.getElementById("sunset");

        cityNameElement.textContent = data.name;
        temperatureElement.textContent = data.main.temp;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        windSpeedElement.textContent = data.wind.speed;
        cloudinessElement.textContent = data.weather[0].description;
        sunriseElement.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        sunsetElement.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        // Create a Leaflet map
        map = L.map("map").setView([data.coord.lat, data.coord.lon], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
});
