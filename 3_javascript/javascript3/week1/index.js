function domLoader() {
  const inputCity = document.getElementById('cityName');
  const getCityName = document.getElementById('getCityName');
  const temp = document.getElementById('temp');
  const desc = document.getElementById('desc');
  const windSpeed = document.getElementById('windSpeed');
  const weatherIcon = document.getElementById('weatherIcon');
  const windIcon = document.getElementById('windIcon');

  let nameOfCity = 'copenhagen';

  inputCity.addEventListener('input', function () {
    nameOfCity = inputCity.value.toLowerCase();
  });

  getCityName.addEventListener('click', function () {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=93694792284ad29205839bf82a1f8f03&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Move the code that uses 'data' into this block
        temp.innerText = `${data.main.temp}°C`;
        desc.innerText = `${data.weather[0].main}`;
        windSpeed.innerText = `${data.wind.speed} m/s`;
        if (data.wind.speed < 2) {
          windIcon.className = 'fas fa-wind calm-wind-icon';
        } else if (data.wind.speed < 5) {
          windIcon.className = 'fas fa-wind light-breeze-icon';
        } else {
          windIcon.className = 'fas fa-wind strong-wind-icon';
        }
        weatherIcon.className = 'fas fa-cloud-sun';
      })
      .catch((err) => {
        alert(err.message);
      });
  });
}

domLoader();
