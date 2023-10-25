domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}

function domLoader() {
  const inputCity = document.getElementById("nameCity");
  const searchButtom = document.getElementById("searchButtom");
  const weatherInfo = document.getElementById("weatherInfo");

  let nameOfCity = "copenhagen";

  inputCity.addEventListener("input", function () {
    nameOfCity = inputCity.value.toLowerCase();
  });

  searchButtom.addEventListener("click", weatherFunction);

  function weatherFunction() {
    weatherInfo.innerText = "";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=f0608ff2a431c07b16bc3cd9f2510c97`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        nameInfo(data);
        temperatureInfo(data);

        const temperature = data.main.temp;
        const weatherIconClass = selectWeatherIcon(temperature);
        const weatherIcon = document.createElement("i");
        weatherIcon.className = weatherIconClass;
        weatherInfo.appendChild(weatherIcon);

        windInfo(data);
        cloudInfo(data);
        dayTime(data);
      });
  }

  function nameInfo(data) {
    const nameInfo = document.createElement("li");
    const cityName = data.name;
    if (typeof cityName !== "undefined") {
      nameInfo.innerHTML = `<span class="cityName">${cityName}</span>`;
    } else {
      nameInfo.innerText = "City not found, try again";
    }
    weatherInfo.appendChild(nameInfo);
  }

  function temperatureInfo(data) {
    const temperatureInfo = document.createElement("li");
    temperatureInfo.innerText = data.main.temp.toFixed(1) + "Cº";
    weatherInfo.appendChild(temperatureInfo);
  }

  function selectWeatherIcon(temperature) {
    if (temperature <= 0) {
      return "fas fa-snowflake";
    } else if (temperature > 0 && temperature <= 14) {
      return "fas fa-cloud";
    } else if (temperature > 15 && temperature <= 30) {
      return "fas fa-sun";
    } else {
      return "fas fa-fire";
    }
  }

  function windInfo(data) {
    const windInfo = document.createElement("li");
    windInfo.innerText = "🌬️ " + data.wind.speed.toFixed(1) + " m/s";
    weatherInfo.appendChild(windInfo);
  }

  function cloudInfo(data) {
    const cloudInfo = document.createElement("li");
    cloudInfo.innerText = data.weather[0].description.toUpperCase();
    weatherInfo.appendChild(cloudInfo);
  }

  function dayTime(data) {
    const sunriseTimestamp = data.sys.sunrise;
    const sunsetTimestamp = data.sys.sunset;

    const sunriseInfo = document.createElement("p");
    const sunsetInfo = document.createElement("p");

    const sunriseDate = new Date(sunriseTimestamp * 1000);
    const sunsetDate = new Date(sunsetTimestamp * 1000);

    const sunriseTime = sunriseDate.toLocaleTimeString();
    const sunsetTime = sunsetDate.toLocaleTimeString();

    sunriseInfo.innerText = `Sunrise: ${sunriseTime}`;
    sunsetInfo.innerText = `Sunset: ${sunsetTime}`;

    weatherInfo.appendChild(sunriseInfo);
    weatherInfo.appendChild(sunsetInfo);
  }
}