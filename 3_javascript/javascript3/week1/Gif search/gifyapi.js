

function fetchGifApi (query) {
   const gifApi = fetch("https://developers.giphy.com/docs/")
   gifApi.then((response) =>  response.json())
   .then((data) => {
    console.log(data)
   })
}