console.log("Let's create something interesting")

function sendApiRequest() {
   const userInput = document.getElementById("search-for-gif").value;
   const numOfGifs = document.getElementById("num-of-gifs").value; // Get the number of GIFs

   const apiKey = 'pYlUpqK0ZDhbIbyZSlLL92wXs7Ugmjfa';
   const gifApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${apiKey}&limit=${numOfGifs}`;

   fetch(gifApiUrl)
       .then((response) => response.json())
       .then((json) => {
           const resultContainer = document.getElementById("search-result");
           resultContainer.innerHTML = '';

           json.data.forEach((gifData) => {
               const imgPath = gifData.images.fixed_height.url;
               const img = document.createElement("img");
               img.setAttribute("src", imgPath);
               resultContainer.appendChild(img);
           });
       })
       .catch((error) => {
           console.error('Error:', error);
       });
}

