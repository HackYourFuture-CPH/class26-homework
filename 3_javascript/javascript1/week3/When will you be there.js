const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function notThisFunctionName(info){
    const time = (info.destinationDistance) / (info.speed);
    const hrs = parseInt(time);
    const min = Math.round((time - hrs) * 60);
     return  `${hrs} hours and ${min} minutes`;
}
  

  const travelTime = notThisFunctionName(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes
