
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
