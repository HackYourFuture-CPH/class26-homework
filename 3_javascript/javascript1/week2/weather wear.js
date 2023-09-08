function weather(temperature){
   if(temperature > 20){
   return "shorts and a t-shirt" ;
   }
   else if (temperature >= 10){
    return "full sleeve";
   }
   else{
    return "wear jacket";
   }
}
const clothesToWear = weather(9);
console.log(clothesToWear); 