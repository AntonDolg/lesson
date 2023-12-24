const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const lastFilm = prompt("Один из последних просмотренных фильмов?");
const markFilm = +prompt("На сколько оцените его?");

const movies = {
    last:lastFilm,
    mark:markFilm
};