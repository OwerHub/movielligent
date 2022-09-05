import { oneMovie } from "../types/movietypes";


const getMovieFromLocalStorage= ()=>{
  let movieList = window.localStorage.getItem("movielligent");
  if (movieList) {
     return movieList = JSON.parse(movieList);
  }
  if( movieList === null) {
    return []
  }
}


export const addMovieToLocalStorage = (movieData: oneMovie) => {


  let movieList = window.localStorage.getItem("movielligent");
  if (movieList) {
    movieList = JSON.parse(movieList);
  }

  let setMovieList;
  if (movieList === null) {
    setMovieList = [movieData];
  }

  if (Array.isArray(movieList)) {
    if(movieList.map(movie => movie.id).includes(movieData.id)){
      setMovieList = [...movieList]
    } else {
      setMovieList = [...movieList, movieData];
    }
  }


  


  window.localStorage.setItem("movielligent", JSON.stringify(setMovieList));

  return (getMovieFromLocalStorage())

};

export const deleteMovieFromList = (id: number) => {
  let movieList = window.localStorage.getItem("movielligent");
  if (movieList) {
    movieList = JSON.parse(movieList);
  }
  let setMovieList;
  if (movieList === null) {
    setMovieList = [];
  }

  if (Array.isArray(movieList)) {
    setMovieList = movieList.filter((movie) => movie.id !== id);
  }
  window.localStorage.setItem("movielligent", JSON.stringify(setMovieList));

  return (getMovieFromLocalStorage())
};
