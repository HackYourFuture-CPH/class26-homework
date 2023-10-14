// setTimeout(()=> {
//     document.getElementById("value").innerHTML = "Called after 2.5 seconds";
//  }
//  ,2500);



// function calling(delay, stringTolog){
//   setTimeout(function(){
//     console.log(stringTolog);
//   },delay*1000);
//  }



// function calling(delay, stringToLog) {
//   setTimeout(function () {
//     console.log(stringToLog);
//   }, delay * 1000);
// }

// document.getElementById("button1").addEventListener("click", function () {
//   calling(5, "This string logged after 5 seconds");
// });



// function earthLogger(){
//   console.log("Earth");
// }

// function saturnLogger(){
//   console.log("Saturn");
// }

// function planetLogFunction(planetLog){
//     planetLog();
// }
// planetLogFunction(earthLogger);
// planetLogFunction(saturnLogger);



// // Geolocation API
// document.getElementById("find-me").addEventListener("click", geoFindMe);
// function geoFindMe() {
//   const status = document.getElementById("status");
//   const mapLink = document.getElementById("map-link");

//   mapLink.href = "";
//   mapLink.textContent = "";

//   function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     status.textContent = "";
//     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
 
//     const mapOptions = {
//       center: { lat: latitude, lng: longitude },
//       zoom: 15,
//   };
//   const map = new google.maps.Map(document.getElementById("map"), mapOptions);

//   // Create a marker for the user's location
//   const marker = new google.maps.Marker({
//       position: { lat: latitude, lng: longitude },
//       map: map,
//       title: "Your Location",
//   });
// }

//   function error() {
//     status.textContent = "Unable to retrieve your location";
//   }

//   if (!navigator.geolocation) {
//     status.textContent = "Geolocation is not supported by your browser";
//   } else {
//     status.textContent = "Locating…";
//     navigator.geolocation.getCurrentPosition(success, error);
//   }
// }




// function runAfterDelay(delay, callback){
//   setTimeout(function(){
//      console.log(callback);
//       },delay*1000);
//     }
//   runAfterDelay(1, function(){
//   console.log("should be logged after" + delay + "seconds");
// })

// function runAfterDelay(delay, callback) {
//   setTimeout(callback, delay * 1000);
// }

// runAfterDelay(1, function () {
//   console.log("should be logged after 1 second");
// });


// 8. Double click
document.addEventListener("dblclick", (e) => {
  console.log( "double click!");
});


// 9.jokeCreator
function jokeCreator (shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
  if(shouldTellFunnyJoke === true){
    logFunnyJoke();
  }
  else{
  logBadJoke();
}
}
function logFunnyJoke(){
  console.log("This is a funnyjoke");
}
function logBadJoke(){
  console.log("This is a Badjoke");
}
jokeCreator(true, logFunnyJoke, logBadJoke);