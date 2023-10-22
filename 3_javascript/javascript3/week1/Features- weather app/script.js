const forecastDays = document.getElementById("forecast-days");

function fetchFiveDayForecast(city) {
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=c61cb7dd3bb25c904233df02c8eb3c5a`;
    fetch(forecastApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            const forecastData = data.list;
            // Iterate through forecastData to display the 5-day forecast.
            forecastData.forEach((day) => {
                const dayElement = document.createElement("div");
                // Extract and display temperature, weather conditions, and icons.
                dayElement.innerHTML = `<p>${day.dt_txt}</p>
                                       <p>Temperature: ${day.main.temp}°C</p>
                                       <p>Conditions: ${day.weather[0].description}</p>
                                       <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">`;
                forecastDays.appendChild(dayElement);
            });
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
}