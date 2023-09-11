
// exercice full_name
function getFullname(firstname, surname, useFormalName, isWomen ){

    if( firstname === "" & surname === ""){
        return "firstname and surname are missing"
    }
    if (useFormalName === true){
        if (isWomen === true){
            return `lady ${firstname} ${surname}`;
        } else{
            return `Lord ${firstname} ${surname}`;
        }    
    } else {
        return `${firstname} ${surname}`;
    }
}

const fullName = getFullname("Benjamin", "Hughes",true);
console.log(fullName);
let fullName1 = getFullname("nada", "jrad") ;
let fullName2 = getFullname("jannah", "jrad") ;
console.log(fullName1);
console.log(fullName2);

// event day 
function getEventWeekday(numberOfTheDay){
    let today = new Date();
    let day = today.getDay();//1,2,3...
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday"];
   
    return weekdays[(day + numberOfTheDay)];
}

console.log(getEventWeekday(0));
console.log(getEventWeekday(3));
console.log(getEventWeekday(9));

// weather
function weather(tempertaure){
    if(tempertaure >= 20 ){
        return "wear shorts and dress";
    }  if (tempertaure <= 10 ){
        return "wear  a coat ";
    } else {
        return "wear jacket jeans";
    }
}
let  clothesToWear = weather(8);
console.log(clothesToWear);