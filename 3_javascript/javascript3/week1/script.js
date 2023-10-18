const weather_api = "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=d343416b21414202682daff848a54ebe";

async function getWeather() {
    const response = await fetch(weather_api);
    const data = await response.json();

    const { name, main: { temp }, weather: [{ icon, description }], wind: { speed }, sys: { sunrise, sunset } } = data;

    const button = document.getElementById("btn");
    button.addEventListener("click", enterCity);

    function enterCity() {
        // Do something when the button is clicked
    }

    document.getElementById('city').textContent = name;
    document.getElementById('temp').textContent = temp;
    document.getElementById('type').textContent = description;
    document.getElementById('wind').textContent = speed;
    document.getElementById('cloud').textContent = icon;
    document.getElementById('rise').textContent = sunrise;
    document.getElementById('set').textContent = sunset;

    console.log(data);
}

getWeather();
