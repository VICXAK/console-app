/* Create variable numberOfFilms */
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?, '');

/* Object personalMovieDB */

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}