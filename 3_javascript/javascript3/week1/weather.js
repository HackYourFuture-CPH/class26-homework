const apiKey = "71f6f078e1e2e4e455145879ab72309d" ;

document.getElementById("mybtn").addEventListener("click", function(){
     let city = document.getElementById("city").value;
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

     if (city.trim().length === 0){
        alert ("please enter the name of the city");
     }else{
        fetch(url)
        .then (response => response.json())
        .then (data  => {
            document.getElementById("wind_speed").textContent = `Wind Speed : ${data.wind.speed}`;
            document.getElementById("the_chosen_city").textContent = `The chosen city is : ${data.name}`;
            document.getElementById("temperature").textContent = `Temperature : ${data.main.temp}`;
            document.getElementById("sunrise_and_sunset").textContent = ` sunrise at :${data.sys.sunrise} and sunset ${data.sys.sunset}`;
            document.getElementById("clowdy").textContent = `clowdy: ${data.clouds.all}`;
        })
     }
    
})



