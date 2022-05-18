/* Create variable numberOfFilms */
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// /* Object personalMovieDB */

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

/* Questions for user */
// let a = prompt('Один из последний просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '5'),
//     c = prompt('Один из последний просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '5');

/* Loop question */
let lastViewed, rate;
for (let i = 0; i < 2; i++) {
  lastViewed = prompt('Один из последний просмотренных фильмов?', ''),
  rate = prompt('На сколько оцените его?', '5');
  personalMovieDB.movies[lastViewed] = rate;
  console.log(lastViewed);
}

// /* Add users response */


console.log(personalMovieDB);

