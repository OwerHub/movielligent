import { oneMovie } from "../../types/movietypes";
import { useState } from "react";
import "./dist/favoriteCard.css";
import { deleteMovieFromList } from "../../services/localStorageHandler";
import placeholderPic from "../../img/movieNotFound.jpg";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { increment, decrement, changeState } from "../../store/reducers";

interface FavoriteCardProps {
  movieData: oneMovie;
  iterator: number;
}

export const FavoriteCard = (props: FavoriteCardProps) => {
  const [isSureOpen, setSureOpen] = useState<Boolean>(false);

  const dispatch = useDispatch();

  const deleteFromFavorites = (cardID: number) => {
    const response = deleteMovieFromList(cardID);
    dispatch(changeState(Number(response.length)));
  };

  return (
    <div
      className="favoriteCardWrapper"
      data-testid={`favoritecard-${props.iterator}`}
    >
      <div className="title">{props.movieData.title}</div>

      <div className="imageContainer">
        {props.movieData.poster_path ? (
          <img
            className="favoriteCardPosterPic"
            src={`https://image.tmdb.org/t/p/original/${props.movieData.poster_path}`}
            alt={`favoriteMoviePoster-${props.movieData.poster_path}`}
          />
        ) : (
          <img
            className="favoriteCardPosterPic"
            src={placeholderPic}
            alt="favoritePlaceholderPic"
          />
        )}
      </div>

      <div
        className="deleteFavoriteButton"
        onClick={() =>
          isSureOpen
            ? deleteFromFavorites(props.movieData.id)
            : setSureOpen(true)
        }
      >
        {isSureOpen ? "Are You Sure? " : "Delete This Card"}
      </div>
    </div>
  );
};
