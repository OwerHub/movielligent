import { oneMovie } from "../../types/movietypes"

interface CardProps {
   movieData: oneMovie
}

export const Card = (props: CardProps) => {

    return(
<div className="cardOuter">
    <div>Title: {props.movieData.title}</div>
    <div>Relase Data: {props.movieData.release_date}</div>
    
</div>

    )
}