import "./dist/cardContainer.css";
import { oneMovie } from "../../types/movietypes";
import {Card} from "../Card/Card"

interface cardContainerProps {
  movieList?: oneMovie[];
}

export const CardContainer = (props: cardContainerProps) => {

  return (
    <div className="outerContainer">
      {props.movieList ? (
        <div className="cardWrapper">
          {props.movieList.map((data, iterator)=> (
            <Card movieData={data} key={`card${iterator}`}/>    
          ))}
        </div>
      ) : (
        <div className="cardContainerPlaceholder">No Dispayed Movie</div>
      )}
    </div>
  );
};
