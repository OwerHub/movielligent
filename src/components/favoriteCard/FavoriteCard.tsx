import { oneMovie } from "../../types/movietypes";
import { useState } from "react";
import "./dist/favoriteCard.css";
import {deleteMovieFromList} from "../../services/localStorageHandler"

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { increment, decrement, changeState, } from "../../store/reducers";

interface FavoriteCardProps {
  movieData: oneMovie;
}

export const FavoriteCard = (props: FavoriteCardProps) => {

    const [isSureOpen, setSureOpen] = useState<Boolean>(false)

    const dispatch = useDispatch();


    const deleteFromFavorites = (cardID:number) =>{
         const response= deleteMovieFromList(cardID)
         dispatch(changeState(Number(response.length)))
    }


  return (
    <div className="favoriteCardWrapper">

      <div className="title">{props.movieData.title}</div>
   
      
      <div className="imageContainer">
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
