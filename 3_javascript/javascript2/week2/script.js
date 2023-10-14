//1.1. Doubling of number

let numbers = [1, 2, 3, 4];

let newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);

console.log("The doubled numbers are", newNumbers); 

// 1.2. codewars! part 1
function processArray(arr) {
    return arr.map(number => {
      
      const sqrt = Math.sqrt(number);
      if (Number.isInteger(sqrt)) {
        return sqrt;
      } else {
        return number * number;
      }
    });
  }
  
  const inputArray = [4, 3, 9, 7, 2, 1];
  const resultArray = processArray(inputArray);
  console.log(resultArray); 

// 1.2. codewars! part 2

function removeEverySecondElement(arr) {
    
    const result = [];
  
    
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr[i]); 
    }
  
    return result;
  }
  
  const inputArray1 = ["Keep", "Remove", "Keep", "Remove", "Keep"];
  const resultArray1 = removeEverySecondElement(inputArray);
  console.log(resultArray1); 
  
  //1.3.working with movies 

  const movies = [
    {
        title: "Movie A",
        year: 1985,
        rating: 8,
    },
    {
        title: "Short",
        year: 1995,
        rating: 6,
    },
    {
        title: "Very Long Movie Title",
        year: 2000,
        rating: 3,
    },
    {
        title: "Another Short Title",
        year: 1987,
        rating: 5,
    },
    {
        title: "Surfer Movie",
        year: 1983,
        rating: 9,
    },
    {
        title: "Alien Encounter",
        year: 1991,
        rating: 2,
    },
    {
        title: "Benjamin's Secret",
        year: 1986,
        rating: 7,
    },
    {
        title: "Duplicated Word Word",
        year: 1990,
        rating: 6,
    },
    
];


const shortTitleMovies = movies.filter(movie => movie.title.length < 10);


const longTitleMovies = movies.filter(movie => movie.title.length >= 20).map(movie => movie.title);


const movies1980s = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
const count1980sMovies = movies1980s.length;


const taggedMovies = movies.map(movie => ({
    ...movie,
    tag: movie.rating >= 7 ? "Good" : (movie.rating >= 4 ? "Average" : "Bad"),
}));


const highRatedMovieRatings = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);


const keywordsToSearch = ["Surfer", "Alien", "Benjamin"];
const countMoviesWithKeywords = movies.reduce((count, movie) => {
    const title = movie.title.toLowerCase();
    return count + keywordsToSearch.reduce((keywordCount, keyword) => {
        return keywordCount + (title.includes(keyword.toLowerCase()) ? 1 : 0);
    }, 0);
}, 0);


const moviesWithDuplicatedWords = movies.filter(movie => {
    const words = movie.title.toLowerCase().split(' ');
    const uniqueWords = new Set(words);
    return words.length !== uniqueWords.size;
});


const totalRatings = movies.reduce((sum, movie) => sum + movie.rating, 0);
const averageRating = totalRatings / movies.length;


const ratingCounts = taggedMovies.reduce((counts, movie) => {
    counts[movie.tag] = (counts[movie.tag] || 0) + 1;
    return counts;
}, {});

console.log("Short Title Movies:", shortTitleMovies);
console.log("Long Title Movies:", longTitleMovies);
console.log("Count of 1980s Movies:", count1980sMovies);
console.log("Tagged Movies:", taggedMovies);
console.log("High Rated Movie Ratings:", highRatedMovieRatings);
console.log("Count of Movies with Keywords:", countMoviesWithKeywords);
console.log("Movies with Duplicated Words:", moviesWithDuplicatedWords);
console.log("Average Rating of Movies:", averageRating);
console.log("Rating Counts:", ratingCounts);





  
