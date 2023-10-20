function fetchWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const weatherInfo = document.getElementById("weatherInfo");
    const loadingText = document.getElementById("loadingText");

    // Clear previous weather data and loading text
    weatherInfo.innerHTML = "";
    loadingText.style.display = "block";
    
    if (cityInput === "") {
        loadingText.innerHTML = "Please enter a city name.";
        return;
    }

    const apiKey = "5e24c761b911820906792fa0ffdfa7bb"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            loadingText.style.display = "none";
            const cityName = data.name;
            const temperature = data.main.temp;
            const weatherIcon = data.weather[0].icon;
            const windSpeed = data.wind.speed;
            const cloudiness = data.weather[0].description;
            const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            // Display weather data
            weatherInfo.innerHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather Icon">
                <p>Wind Speed: ${windSpeed} m/s</p>
                <p>Cloudiness: ${cloudiness}</p>
                <p>Sunrise: ${sunrise}</p>
                <p>Sunset: ${sunset}</p>
            `;
        })
        .catch(error => {
            loadingText.innerHTML = "Error fetching weather data. Please try again later.";
            console.error("Error fetching weather data: ", error);
        });
}
