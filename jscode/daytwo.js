// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
// };

// const last1Film = prompt("Один из последних просмотренных фильмов?"),
// mark1Film = +prompt("На сколько оцените его?"),
// last2Film = prompt("Один из последних просмотренных фильмов?"),
// mark2Film = +prompt("На сколько оцените его?");

// personalMovieDB.movies[last1Film]=mark1Film;
// personalMovieDB.movies[last2Film]=mark2Film;

// console.log(personalMovieDB);


const personalMovieDB = {
    user:[],
    numberOfFilms:[],
    lastFilm:[],
    markFilm:[],
    test:{
        fun:function(){
        console.log(`error:${i}}`)
    }
    }
};

// for(let i=1;i<10;i++){
//     personalMovieDB.numberOfFilms[i] = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     personalMovieDB.lastFilm[i] = prompt("Один из последних просмотренных фильмов?","");
//     personalMovieDB.markFilm[i] = +prompt("На сколько оцените его?","");
//     let stopQ = confirm("Остановиться?");
//     if(stopQ==true || i==3){
//         break;
//     }
// }

//const numberOfUser = +prompt("Номер пользователя?", "");

//alert(personalMovieDB.lastFilm[numberOfUser]);
const i = 0;
Repit:while(true){
    personalMovieDB.numberOfFilms[i]=+prompt("Сколько фильмов?", "");
    personalMovieDB.lastFilm[i]=prompt("Какой фильм вам понравился?", "");
    if(personalMovieDB.numberOfFilms[i].length>2 || personalMovieDB.lastFilm[i].length>8){
        continue Repit;
    }
    if(personalMovieDB.numberOfFilms[i].length===0 || personalMovieDB.lastFilm[i].length===0){
        continue Repit;
    }
    if(personalMovieDB.numberOfFilms[i]<10){
        alert("Мало фильмов");
    }
    else if(personalMovieDB.numberOfFilms[i]>=10 && personalMovieDB.numberOfFilms[i]<30){
        alert("Много фильмов");
    }
    else{
        alert("Вы киноман");
    }
    let stopRun = confirm("Остановка?");
    if(stopRun===true){
        break;
    }
}

console.log(Object.keys(personalMovieDB).length);
const{fun}=personalMovieDB.test;
alert(fun);