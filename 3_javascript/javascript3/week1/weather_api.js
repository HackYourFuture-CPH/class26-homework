
const weather_api = "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=d343416b21414202682daff848a54ebe";

async function getWeather() {
    const response = await fetch(weather_api);
    const data = await response.json();

    
    
    console.log(data);
}

getWeather();
