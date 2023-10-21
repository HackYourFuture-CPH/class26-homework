document.addEventListener('DOMContentLoaded', domListener);

function domListener() {
  const search = document.getElementById('search');
  const itemCount = document.getElementById('itemCount');
  const searchButton = document.getElementById('searchButton');

  const apiKey = 'g4Of5Q7iIUvb0bBiDpdhg7uPLMcaSBQn';
  const endpoint = 'https://api.giphy.com/v1/gifs/search';

  searchButton.addEventListener('click', () => {
    const searchTerm = search.value;
    const limit = itemCount.value;

    fetch(`${endpoint}?api_key=${apiKey}&q=${searchTerm}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        data.data.forEach((gif) => {
          const imageUrl = gif.images.original.url;
          const gifImage = document.createElement('img');
          gifImage.src = imageUrl;
          document.body.appendChild(gifImage);
        });
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  });
}
