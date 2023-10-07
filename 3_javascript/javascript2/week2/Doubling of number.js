// Doubling of numbers
let numbers = [1, 2, 3, 4];
let newNumbers = numbers
    .filter(number => number % 2 !==0)
    .map(number => number*2);
console.log("The doubled numbers are", newNumbers); // [2, 6]



// Movies
 const movies = [{"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940},{"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},{"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},{"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480},{"title": "(500) Days of Summer","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700},{"title": "*batteries not included","year": 1987,"rating": 6.6,"votes": 25636,"running_times": 6360},{"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.9,"votes": 16484,"running_times": 5220},{"title": "...and justice for all.","year": 1979,"rating": 7.4,"votes": 25408,"running_times": 7140},{"title": "10","year": 1979,"rating": 6,"votes": 13152,"running_times": 7320},{"title": "10 Cloverfield Lane","year": 2016,"rating": 7.2,"votes": 216151,"running_times": 6240},{"title": "10 Items or Less","year": 2006,"rating": 6.7,"votes": 13342,"running_times": 4920},{"title": "10 Things I Hate About You","year": 1999,"rating": 7.2,"votes": 247070,"running_times": 5820}, {"title": "101 Dalmatians","year": 1996,"rating": 5.7,"votes": 83245,"running_times": 6180},{"title": "102 Dalmatians","year": 2000,"rating": 4.9,"votes": 28927,"running_times": 6000},{"title": "11-11-11","year": 2011,"rating": 4,"votes": 11425,"running_times": 5400},{"title": "11:14","year": 2003,"rating": 7.2,"votes": 40149,"running_times": 5700},{"title": "12 Angry Men","year": 1957,"rating": 8.9,"votes": 518449,"running_times": 5760},{"title": "12 Rounds","year": 2009,"rating": 5.6,"votes": 24457,"running_times": 6480}];
//  case1
 const shortTitle =  movies.filter(item => item.title.length <= 20);
 console.log(shortTitle);

//  case2
 const longTitle =  movies.filter(item => item.title.length > 20);
 console.log(longTitle);

//  case3
const numberOfMovies = movies.filter(item => {
            return item.year >= 1980 && item.year <= 1989;
          })
          .map(item => item.year);
console.log(numberOfMovies);

// case4
const tag = movies.map(item => {
        if(item.rating >=7){
            return "Good";
        } else if (item.rating >=4){
            return "Average";
        } else{
            return "Bad";
        }});
console.log(tag);

// case5
const chaining = movies.filter(item =>{
        return item.rating > 6;
})
          .map(item => item.rating); 
console.log(chaining);

// case6
const totalNumberOfMovies = movies
        .filter(item => item.title === "Surfer" || item.title  === "Alien" || item.title === "Benjamin")
        .reduce((result) => {
            return result + 1;
        },0);
console.log(totalNumberOfMovies);


// case7
const moviesWithDuplicateWords = movies.filter((movie) => {
    const titleWords = movie.title.toLowerCase().split(" ");
    const uniqueWords = new Set(titleWords);
    return titleWords.length !== uniqueWords.size;
  });
console.log(moviesWithDuplicateWords);


// case8
const averageRatingOfMovies = movies.reduce((average,item) => {
   return (average + item.rating)
   },0) / movies.length;
   console.log(averageRatingOfMovies);


// case9
const countTheTotalNumber = tag.reduce((result, item) => {
    if (item === "Good") {
      result.good++;
    } else if (item === "Average") {
      result.average++;
    } else {
      result.bad++;
    }
    return result;
  }, { good: 0, average: 0, bad: 0 });
  
  console.log(countTheTotalNumber);