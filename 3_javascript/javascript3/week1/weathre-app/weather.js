const apiKey = "YOUR_API_KEY";
const weatherURL = "https://api.openweathermap.org/data/2.5/weather";

const cityInput = document.getElementById("cityInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.querySelector(".weather-container");

getWeatherButton.addEventListener("click", function () {
  const city = cityInput.value;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  fetch(`${weatherURL}?q=${city}&appid=${apiKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const temperature = Math.round(data.main.temp - 273.15);
      const description = data.weather[0].description;
      const windSpeed = data.wind.speed;
      const cloudiness = data.clouds.all;
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

      weatherContainer.innerHTML = `
                <p>Weather in ${city}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
                <p>Cloudiness: ${cloudiness}%</p>
                <p>Sunrise: ${sunrise}</p>
                <p>Sunset: ${sunset}</p>
            `;
    })
    .catch(function (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    });
});
