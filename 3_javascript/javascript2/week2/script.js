// --> Doubling of number
let numbers = [1, 2, 3, 4];
let newNumbers = numbers
    .filter(elem => elem % 2 !== 0)
    .map(elem => elem * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]

//--> Work with array of Movies <--
const movies = require('./movies');


//Create an array the movies with a short title
const shortTitleMovies = movies.filter(movie => movie.title.length <= 3);

console.log(shortTitleMovies);

//array with long movie titles
const longTitleMovies = movies.filter(movie => movie.title.length >= 53);

console.log(longTitleMovies);

//Count the number of movies made between 1980-1989 (including both the years)

const betweenYearsMovies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989)
console.log("Number of movies made between 1980-1989:" + betweenYearsMovies.length)


// Array that has an extra key called tag
const moviesWithTag = movies.map(movie => {
    let tag;

    if (movie.rating >= 7) {
        tag = 'Good';
    } else if (movie.rating >= 4 && movie.rating < 7) {
        tag = 'Average';
    } else {
        tag = 'Bad';
    }

    // Returning a new object with an additional tag
    return { ...movie, tag };
});

console.log(moviesWithTag);


//the movies rated higher than 6
const moviesRatedHigerThan = movies
    .filter(movie => movie.rating > 6)
    .map(movie => movie.rating)
console.log(moviesRatedHigerThan)


//Count number of movies containing keywords
const countMoviesWithKeywords = movies.reduce((count, movie) => {
    let title = movie.title.toLowerCase();
    if (title.includes('surfer') || title.includes('alien') || title.includes('benjamin')) {
        return count + 1;
    } else {
        return count;
    }
}, 0);

console.log(countMoviesWithKeywords);

//Movies where a word in the title is duplicated
let moviesWithDuplicatedWords = movies.filter(movie => {
    let words = movie.title.toLowerCase().split(/\W+/);
    return words.some((word, index) => words.indexOf(word) !== index);
});

console.log(moviesWithDuplicatedWords);

//Calculate the average rating
let totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
let averageRating = totalRating / movies.length;

console.log(averageRating);


//Count the total number of Good, Average and Bad movies 
let movieCounts = moviesWithTag.reduce((counts, movie) => {
    if (movie.tag === 'Good') {
        counts.goodMovies = (counts.goodMovies || 0) + 1;
    } else if (movie.tag === 'Average') {
        counts.averageMovies = (counts.averageMovies || 0) + 1;
    } else if (movie.tag === 'Bad') {
        counts.badMovies = (counts.badMovies || 0) + 1;
    }
    return counts;
}, {});

console.log(movieCounts);