import "./dist/sidebar.css"
import { useState, useEffect } from "react";

import { oneMovie } from "../../types/movietypes";
import { FavoriteCard } from "../favoriteCard/FavoriteCard";


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
    <div className="sideBarContainer">
      this is sidebar
      <button onClick={()=>getLocalStorage()}>refresh</button>
      {isMovieList &&
       isMovieList.map((movie, iterator) =>

        
            <FavoriteCard 
             key={`FavoriteCard${iterator}`}
             movieData={movie}
             />

        )
        }


    </div>
  );
};
