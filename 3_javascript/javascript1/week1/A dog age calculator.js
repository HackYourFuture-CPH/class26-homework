const dogYearOfBirth= 2017;
const dogYearFuture= 2027;
const humanAge= dogYearFuture - dogYearOfBirth;
const dogAge= 7*humanAge;
let shouldShowResultInDogYears=true;
if (shouldShowResultInDogYears=== true){
 console.log( "Your dog will be " + dogAge + " dog years old in " + dogYearFuture );
}
else{
    console.log( "Your dog will be " + humanAge + " human years old in " + dogYearFuture );
}