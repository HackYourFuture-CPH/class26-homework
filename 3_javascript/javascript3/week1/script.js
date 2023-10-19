const url = 'https://website-screenshot6.p.rapidapi.com/screenshot?url=';

document.getElementById("myBtn").addEventListener("click", showImage);
function showImage (){
    let imageUrl =  document.getElementById("url").value ;
    let x = document.createElement("IMG");
    x.setAttribute("src", imageUrl );
    document.body.appendChild(x);
    

    let name = url + imageUrl ;
    console.log(name);
}
function makeScreenShot (){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3930b293d1msh8928109a5bc079fp13dbf3jsn32f25a4d9cc8',
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
    
}
