import { oneMovie } from "../../types/movietypes";
import { useState } from "react";
import "./dist/favoriteCard.css";
import {deleteMovieFromList} from "../../services/localStorageHandler"


interface FavoriteCardProps {
  movieData: oneMovie;
}

export const FavoriteCard = (props: FavoriteCardProps) => {

    const [isSureOpen, setSureOpen] = useState<Boolean>(false)

    const deleteFromFavorites = (cardID:number) =>{
        console.log(cardID)
        deleteMovieFromList(cardID)
    }


  return (
    <div className="favoriteCardWrapper">

      <div>{props.movieData.title}</div>
      <div>{props.movieData.release_date}</div>
      
      <div>
        {props.movieData.poster_path ? (
          <img
            className="favoriteCardPosterPic"
            src={`https://image.tmdb.org/t/p/original/${props.movieData.poster_path}`}
            alt={props.movieData.poster_path}
          />
        ) : (
          <div>No picture found</div>
        )}
      </div>

    <div className="deleteFavoriteButton"
            onClick={()=> isSureOpen? deleteFromFavorites(props.movieData.id) : setSureOpen(true)}>
        {isSureOpen? "Are You Sure? " : "Delete This Card"}
    </div>

    </div>
  );
};
