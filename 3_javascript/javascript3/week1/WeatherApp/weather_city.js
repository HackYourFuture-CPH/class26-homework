
function fetchweather(query) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&appid=d343416b21414202682daff848a54ebe";
  fetch(url)
  .then((response) => response.json())
  .then((data) => renderWeather(data));
}

// The above function would return data if a valid city name was entered. In case of a non existent city, we need to 
// throw an error message. In that case the following code block will be used.

// function fetchweather(query) {
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&appid=d343416b21414202682daff848a54ebe";
//     fetch(url)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('City not found');
//         }
//         return response.json();
//     })
//     .then((data) => renderWeather(data))
//     .catch((error) => {
//         alert(error.message); 
//     });
// }



document.getElementById('search-btn').addEventListener('click', function() {
const city = document.getElementById('city-input').value;
if (city) {
  fetchweather(city);
} else {
  alert('Please enter a city name.');
}
});

function renderWeather(weather) {
  console.log(weather);
  const resultsContainer = document.querySelector("#weather-results"); 

  // if the following line is not used, the search will return data but also show the previous search result. To only show data for 
  // the current search, make the slate blank using this snippet. 
  resultsContainer.innerHTML = "";


  const city = document.createElement("h2");
  city.textContent = weather.name;
  resultsContainer.append(city);

  const icon = document.createElement("p");
  icon.textContent = "Icon for the weather type: "  + weather.weather[0].icon;
  resultsContainer.append(icon);


  const wind = document.createElement("p");
  wind.textContent = "Wind speed: "  + weather.wind.speed + "km/h";
  resultsContainer.append(wind);

  const cloudy = document.createElement("p");
  cloudy.textContent = "Clouds status: " + weather.weather[0].description;
  resultsContainer.append(cloudy);

  const sunrise = document.createElement("p");
  sunrise.textContent = "Sun rise: " + weather.sys.sunrise;
  resultsContainer.append(sunrise);

  const sunset = document.createElement("p");
  cloudy.textContent = "Sun set: " + weather.sys.sunset;
  resultsContainer.append(sunset);
}