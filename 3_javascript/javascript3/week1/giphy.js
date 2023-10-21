const apiKey = '0skCL5JY8xpKKmFY9RO06PFgka36bCSC';
const searchForm = document.getElementById('search-form');
const searchTermInput = document.getElementById('search-term');
const numResultsInput = document.getElementById('num-results');
const resultDiv = document.getElementById('result');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const searchTerm = searchTermInput.value;
  const numResults = numResultsInput.value;

  if (searchTerm) {
    searchGifs(searchTerm, numResults);
  } else {
    resultDiv.innerHTML = '<p>Please enter a search term.</p>';
  }
});

function searchGifs(searchTerm, numResults) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=${numResults}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      resultDiv.innerHTML = ''; // Clear previous results
      if (data.data.length === 0) {
        resultDiv.innerHTML = '<p>No GIFs found.</p>';
      } else {
        data.data.forEach(gif => {
          const gifUrl = gif.images.fixed_height.url;
          const img = document.createElement('img');
          img.src = gifUrl;
          img.alt = searchTerm;
          resultDiv.appendChild(img);
        });
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      resultDiv.innerHTML = '<p>An error occurred. Please try again later.</p>';
    });
}
