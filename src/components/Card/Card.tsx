import "./dist/card.css";
import { oneMovie } from "../../types/movietypes";
import { addMovieToLocalStorage } from "../../services/localStorageHandler";
import placeholderPic from "../../img/movieNotFound.jpg";

import { useDispatch } from "react-redux";
import { changeState } from "../../store/reducers";

interface CardProps {
  movieData: oneMovie;
  iterator: number;
}

export const Card: React.FC<CardProps> = (props) => {
  const dispatch = useDispatch();

  const addToFavorite = (cardData: oneMovie) => {
    const response = addMovieToLocalStorage(cardData);
    dispatch(changeState(Number(response.length)));
  };

  return (
    <div className="cardOuter">
      <div className="(cardTitle)">{props.movieData.title}</div>

      <div className="movieYear">
        {props.movieData.release_date?.slice(0, 4)}
      </div>

      <div className="cardPicContainer">
        {props.movieData.poster_path ? (
          <img
            className="cardPosterPic"
            src={`https://image.tmdb.org/t/p/original/${props.movieData.poster_path}`}
            alt={`moviePoster-${props.movieData.poster_path}`}
          />
        ) : (
          <img
            className="cardPosterPic"
            src={placeholderPic}
            alt="placeholderPic"
          />
        )}
      </div>

      <div
        data-testid={`moviecard-button-${props.iterator}`}
        className="favoriteButton"
        onClick={() => addToFavorite(props.movieData)}
      >
        Add to favorite
      </div>
    </div>
  );
};
