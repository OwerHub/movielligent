import "./dist/card.css";
import { oneMovie } from "../../types/movietypes";
import {addMovieToLocalStorage} from '../../services/localStorageHandler'
import placeholderPic from "../../img/movieNotFound.jpg"

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { increment, decrement, changeState, } from "../../store/reducers";


interface CardProps {
  movieData: oneMovie;
}

export const Card = (props: CardProps) => {

  const dispatch = useDispatch();

    const addToFavorite =(cardData:oneMovie)=> {
        const response = (addMovieToLocalStorage(cardData))   
  
       dispatch(changeState(Number(response.length)))
    }

  // start


  return (
    <div className="cardOuter">
      <div>Title: {props.movieData.title}</div>
      <div>Relase Data: {props.movieData.release_date}</div>
      {props.movieData.poster_path ? (
        <img
          className="cardPosterPic"
          src={`https://image.tmdb.org/t/p/original/${props.movieData.poster_path}`}
          alt={props.movieData.poster_path}
        />
      ) : (
        <img className="cardPosterPic" src={placeholderPic} alt="" />
      )}

      <div 
            className="favoriteButton"
            onClick={()=> addToFavorite(props.movieData)}
            >
        add to favorite
      </div>
    </div>
  );
};
