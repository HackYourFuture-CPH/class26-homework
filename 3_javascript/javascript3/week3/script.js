domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}

const url = 'https://website-screenshot6.p.rapidapi.com/screenshot?url=https%3A%2F%2Frapidapi.com%2Fmarketplace&width=1920&height=1080&fullscreen=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f4139e06fcmshd9c51b0eeb55d77p176b5djsn21919561cc70',
		'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
  
  function saveScreenshot() {
    const url = document.getElementById('urlInput').value;
    const screenshotUrl = document.querySelector('#screenshotContainer img').getAttribute('src');
    
    fetch('https://crudcrud.com/api/YOUR_CRUDCRUD_API_KEY/screenshots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url,
        screenshot: screenshotUrl
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Screenshot saved successfully:', data);
    })
    .catch(error => {
      console.error('Error saving screenshot:', error);
    });
  }
  