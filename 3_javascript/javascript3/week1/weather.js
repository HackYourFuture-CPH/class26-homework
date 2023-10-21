document.addEventListener("DOMContentLoaded", function () {
    const getWeatherButton = document.getElementById("getWeatherButton");
    const cityInput = document.getElementById("cityInput");
    const weatherData = document.getElementById("weatherData");
    const weatherIcon = document.getElementById("weatherIcon");

    getWeatherButton.addEventListener("click", function () {
        const city = cityInput.value;

        if (city) {
            
            const apiKey = "d6d9116f7fb2534bdd322bb8651c3034";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    if (data.cod === 200) {
                        const temperature = data.main.temp;
                        const weatherDescription = data.weather[0].description;
                        const cityName = data.name;
                        const iconCode = data.weather[0].icon;
                        const windSpeed = data.wind.speed;
                        const cloudiness = data.clouds.all;
                        const sunrise = new Date(data.sys.sunrise * 1000);
                        const sunset = new Date(data.sys.sunset * 1000);

                        weatherData.innerHTML = `<p>Weather in ${cityName}:</p>`;
                        weatherData.innerHTML += `<p>Temperature: ${temperature}°C</p>`;
                        weatherData.innerHTML += `<p>Description: ${weatherDescription}</p>`;
                        weatherData.innerHTML += `<p>Wind Speed: ${windSpeed} m/s</p>`;
                        weatherData.innerHTML += `<p>Cloudiness: ${cloudiness}%</p>`;
                        weatherData.innerHTML += `<p>Sunrise: ${sunrise.toLocaleTimeString()}</p>`;
                        weatherData.innerHTML += `<p>Sunset: ${sunset.toLocaleTimeString()}</p>`;

                        // Display the weather icon
                        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
                        weatherIcon.src = iconUrl;
                        weatherIcon.alt = weatherDescription;
                    } else {
                        weatherData.innerHTML = "City not found";
                    }
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    });
});
