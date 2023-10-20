
document.getElementById("myBtn").addEventListener("click", showImage);

function prepareUrl () {
    const url = 'https://website-screenshot6.p.rapidapi.com/screenshot?url=';
    let imageUrl =  document.getElementById("url").value ;
    return url + imageUrl + "&width=1920&height=1080&fullscreen=true"
}

function showImage (url){
    let x = document.createElement("IMG");
    x.setAttribute("src", url );
    document.body.appendChild(x);
}

function makeScreenShot (){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3930b293d1msh8928109a5bc079fp13dbf3jsn32f25a4d9cc8',
            'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
        }
    };
    
    fetch(prepareUrl(), options)           //api for the get request
    .then(response => response.json())
    .then(data => {
        showImage(data.scr)
    });
    
}
