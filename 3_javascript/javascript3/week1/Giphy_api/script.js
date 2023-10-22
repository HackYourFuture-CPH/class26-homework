document.addEventListener("DOMContentLoaded", main);
function main(){
const primaryButton = document.getElementById("button");
primaryButton.addEventListener("click", action);
function action(){
    const input= document.getElementById("search-input").value;
const limit = document.getElementById("limit-input").value;
    if (!input) {
      alert("Please enter a search term.");
      return; 
  }

    
      const apiurl= `http://api.giphy.com/v1/gifs/search?&q=${input}&api_key=j9SrDz7M5NusIb9QyvoFO9Vq9rh8Pxy1&limit=${limit}`;

fetch(apiurl)
.then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then((data) => {
   let dataArray = data.data;
   showGifs(dataArray);
})
.catch((error) => {
    alert("There was a problem with the fetch operation: " + error.message);
});

}

}


function showGifs(dataArray) {
    const results = document.querySelector(".results");
    let output = '<div class="container">';
    dataArray.forEach((imgData) => {
      output += `
    <img src="${imgData.images.fixed_width.url}"/>
  `;
    });
    document.querySelector('.results').innerHTML = output;
  }


 