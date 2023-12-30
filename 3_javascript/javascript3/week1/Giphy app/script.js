function searchGiphy() {
    const apiKey = 'PU5iLuIRMeaU8eIU54pjosKIuBKwT31W';
    const searchInput = document.getElementById('searchInput').value;
    const resultCount = document.getElementById('resultCount').value || 5; 
  
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${apiKey}&limit=${resultCount}`;
  
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayGifs(data.data);
        })
        .catch(error => console.error('Error fetching Giphy:', error));
  }
  
  function displayGifs(gifs) {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '';
  
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        gifContainer.appendChild(img);
    });
  }