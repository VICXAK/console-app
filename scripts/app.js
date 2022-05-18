/* Create variable numberOfFilms */
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

/* Object personalMovieDB */

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};



/* Questions for user */
let lastViewedFilm = prompt('Один из последний просмотренных фильмов?', ''),
      rate = prompt('На сколько оцените его?', '5');

/* Add users response */
personalMovieDB.movies[lastViewedFilm] = rate;
// console.log(personalMovieDB);
