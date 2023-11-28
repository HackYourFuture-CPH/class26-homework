domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}


function domLoader() {
  const inputSearch = document.getElementById("search");
  const clickSearch = document.getElementById("click");
  const numberOfSearch = document.getElementById("quantity");
  const resultOfSearch = document.getElementById("result");


  let gifSearch = "";
  let searchLimit = 25;
  const APIKEY = "S6BbyLq63tmjQgRUkQ7T3wfVR0Jkr0Yy";

  clickSearch.addEventListener("click", parameterSearch);
  inputSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      parameterSearch();
    }
  });

  numberOfSearch.addEventListener(
    "input",
    () => (searchLimit = numberOfSearch.value)
  );

  function parameterSearch() {
    console.log(gifSearch);
    gifSearch = inputSearch.value.toLowerCase()
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=${APIKEY}&limit=${searchLimit}`
    )
      .then((response) => response.json())
      .then((data) => {
        resultOfSearch.innerHTML = "";
        if (data.data.length === 0) {
          resultOfSearch.innerHTML = "No results were found 😔 ";
        } else {
          data.data.forEach((gif) => {
            let newImg = document.createElement("img");
            newImg.src = gif.images.downsized.url;
            resultOfSearch.appendChild(newImg);
          });
        }
      });
  }
}
