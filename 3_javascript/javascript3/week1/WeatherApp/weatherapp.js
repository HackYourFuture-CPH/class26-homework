document.addEventListener('DOMContentLoaded', function () {
    const cityNameElement = document.getElementById('city-name');
    const temperatureElement = document.getElementById('temperature');
    const weatherIconElement = document.getElementById('weather-icon');
    const windSpeedElement = document.getElementById('wind-speed');
    const sunriseElement = document.getElementById('sunrise');
    const sunsetElement = document.getElementById('sunset');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const unitSelector = document.getElementById('unit-selector');

    getWeatherBtn.addEventListener('click', function () {
        const cityInput = prompt('Enter city name:');
        if (cityInput) {
            fetchWeatherData(cityInput);
        }
    });

    function fetchWeatherData(city, unit = 'metric') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=08fc1fab698b506e105eaf9a8a929a11`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                updateUI(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function updateUI(data) {
        cityNameElement.textContent = `City: ${data.name}`;
        temperatureElement.textContent = `Temperature: ${data.main.temp} ${getTemperatureUnit()}`;
        weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        sunriseElement.textContent = `Sunrise: ${formatTime(data.sys.sunrise)}`;
        sunsetElement.textContent = `Sunset: ${formatTime(data.sys.sunset)}`;
    }

    function formatTime(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        return `${hours}:${minutes}`;
    }
    //My function for selecting units of measurement
    function getTemperatureUnit() {
        return unitSelector.value === 'imperial' ? '°F' : unitSelector.value === 'metric' ? '°C' : 'K';
    }

    unitSelector.addEventListener('change', function () {
        const selectedUnit = unitSelector.value;
        const city = cityNameElement.textContent.split(':')[1].trim(); // Recieve current city

        fetchWeatherData(city, selectedUnit);
    });

    // When the page loads, we immediately get weather data for Copenhagen
    fetchWeatherData('copenhagen');
});
