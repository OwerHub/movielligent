import "./dist/card.css";
import { oneMovie } from "../../types/movietypes";

interface CardProps {
  movieData: oneMovie;
}

export const Card = (props: CardProps) => {
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
        <div>No picture found</div>
      )}
    </div>
  );
};
