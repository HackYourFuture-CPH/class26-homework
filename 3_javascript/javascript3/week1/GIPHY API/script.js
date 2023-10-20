domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}

function domLoader() {
  const inputSearch = document.getElementById("search");
  const clickSearch = document.getElementById("click");
  const numberOfSearch = document.getElementById("quantity");
  const resultOfSearch = document.getElementById("result");

  let toSearch = "";
  let limitOfSearch = 25;

  inputSearch.addEventListener(
    "input",
    () => (toSearch = inputSearch.value.toLowerCase())
  );

  clickSearch.addEventListener("click", parameterSearch);
  inputSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      parameterSearch();
    }
  });

  numberOfSearch.addEventListener(
    "input",
    () => (limitOfSearch = numberOfSearch.value)
  );

  function parameterSearch() {
    console.log(toSearch);
    const apiKey = "bMkS0VdwSMF60OqupXEKUjermmqXalP6s";

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${toSearch}&api_key=${apiKey}&limit=${limitOfSearch}`
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