import { oneMovie } from "../../types/movietypes";
import { useState, useEffect } from "react";

export const Sidebar = () => {
  const [isMovieList, setMovieList] = useState<oneMovie[] | null>();

  const getLocalStorage = () => {
    let movieList = window.localStorage.getItem("movielligent");

    if (movieList !== null) {
      setMovieList(JSON.parse(movieList) )
    }
    if (movieList === null) {
        setMovieList(null)
    }
    
  };



  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div>
      this is sidebar
      {isMovieList &&
        isMovieList.map((movie, iterator) => <div>{movie.title}</div>)}
    </div>
  );
};
