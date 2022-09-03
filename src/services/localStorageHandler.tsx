import { oneMovie } from "../types/movietypes";

export const addMovieToLocalStorage = (movieData: oneMovie) => {
  //console.log(movieData)
  let movieList = window.localStorage.getItem("movielligent");
  if (movieList) {
    movieList = JSON.parse(movieList);
  }

  //console.log(movieList)

  let setMovieList;

  if (movieList === null) {
    setMovieList = [movieData];
  }

  if (Array.isArray(movieList)) {
    setMovieList = [...movieList, movieData];
  }
  window.localStorage.setItem("movielligent", JSON.stringify(setMovieList));
};


export const deleteMovieFromList = (id:number) => {
    let movieList = window.localStorage.getItem("movielligent");
  


   if (movieList) {
        movieList = JSON.parse(movieList);
      }
    
      //console.log(movieList)
    
      let setMovieList;
    
      if (movieList === null) {
        setMovieList = [];
      }
    
      if (Array.isArray(movieList)) {
        setMovieList =  movieList.filter(movie=> movie.id !== id)
      }
      window.localStorage.setItem("movielligent", JSON.stringify(setMovieList));
 

}