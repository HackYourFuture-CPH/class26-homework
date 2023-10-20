document.getElementById('searchButton').addEventListener('click', searchGifs);

function searchGifs() {
    // Clear previous results
    document.getElementById('gifContainer').innerHTML = '';

    // My Giphy API key
    const apiKey = '9IilQeJKAhvCo6LSOyqhWbeeavFEwYOS';

    // Get user input
    const searchKeyword = document.getElementById('searchInput').value;
    const resultCount = document.getElementById('resultCount').value;

    // Construct the Giphy API URL
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchKeyword}&api_key=${apiKey}&limit=${resultCount}`;

    // Fetch data from Giphy
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.data.forEach(gif => {
                const gifUrl = gif.images.original.url;
                const img = document.createElement('img');
                img.src = gifUrl;
                document.getElementById('gifContainer').appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
}
