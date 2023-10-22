const gifApiKey = "CUFZqkp8pyEQHzuEAMfDc4zOdzHaLCcA";

document.getElementById("mybtn").addEventListener("click", function(){

    const input= document.getElementById("seachInput").value;
    const limit = document.getElementById("searchLimtInput").value;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${gifApiKey}&q=${input}&limit=${limit}`
    if (input.trim().length === 0){
       alert ("please enter the search term.");
    }else{
       fetch(url)
       .then (response => response.json())
       .then (data  => {
        data.data.forEach((gif) => {
            let newImg = document.createElement("img");
            newImg.src = gif.images.downsized.url;
            document.body.appendChild(newImg);
          });
       })
    }
   
})