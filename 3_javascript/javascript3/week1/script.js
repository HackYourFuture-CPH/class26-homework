// Create your own json file
fetch(`quotes.json`)
.then(data => data.json())
.then(json => console.log(json));


// Find a cool api
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=c61cb7dd3bb25c904233df02c8eb3c5a`;
fetch(apiUrl)
  .then((response) => {
   if (!response.ok) {
      throw new Error("Network response was not ok");
    }
   
    return response.json();
  })
  .then((data) => {
    console.log(data.name);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });




//   Weather app
document.addEventListener("DOMContentLoaded", main);
function main(){
const mybtn = document.getElementById("button");
const loadingText = document.getElementById("loading");

mybtn.addEventListener("click", getInput);

function getInput() {
    const textfield = document.getElementById("enterInput").value;
    console.log(textfield);
    if (!textfield) {
        alert("Please enter your city name");
    } else {
       
        loadingText.textContent = "Loading..."; // Show loading text
       
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${textfield}&appid=c61cb7dd3bb25c904233df02c8eb3c5a`;
       
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setTimeout(() => {
                loadingText.textContent = "";
                console.log(data);
            },2000);
            })
            .catch((error) => {
                loadingText.textContent = ""; // Hide loading text
                console.error("There was a problem with the fetch operation:", error);
            });
    }
}
}