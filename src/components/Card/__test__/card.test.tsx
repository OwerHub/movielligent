import {Card} from "../Card";
import { Sidebar } from "../../Sidebar/sidebar";

import { render, screen , fireEvent } from '@testing-library/react';
import { oneMovie } from "../../../types/movietypes";

import { Provider } from 'react-redux'
import {store} from "../../../store/store"



const movieObject:oneMovie = {
    "adult": false,
    "backdrop_path": "/fv4XvbQW2NDEXV8Zdxhmv0wHuu3.jpg",
    "genre_ids": [
      28,
      53,
      14
    ],
    "id": 752,
    "original_language": "en",
    "original_title": "V for Vendetta",
    "overview": "In a world in which Great Britain has become a fascist state, a masked vigilante known only as “V” conducts guerrilla warfare against the oppressive British government. When V rescues a young woman from the secret police, he finds in her an ally with whom he can continue his fight to free the people of Britain.",
    "popularity": 63.755,
    "poster_path": "/2ySXWBckQboalTZjhaLWRqc3gCN.jpg",
    "release_date": "2006-02-23",
    "title": "V for Vendetta",
    "video": false,
    "vote_average": 7.9,
    "vote_count": 12510
}

interface renderProps {
    movie: oneMovie
}

const RenderWithProvider:React.FC<renderProps> = ({movie}) => {
    return(
        <Provider store={store}>
                <Card movieData={movie}/>
                <Sidebar/>
        </Provider>
    )
}

test("render MovieCard " , ()=> {
    render(<RenderWithProvider movie={movieObject}/>)
    
    const titleDiv = screen.getByText(/V for Vendetta/i)
    expect(titleDiv).toBeInTheDocument()

   const favoriteButton = screen.getByText(/add to favorite/i)
    fireEvent.click(favoriteButton)
 
})

test("Render favoriteCard when click add to favorit" , ()=> {
    render(<RenderWithProvider movie={movieObject}/>)

   const favoriteButton = screen.getByText(/add to favorite/i)
    fireEvent.click(favoriteButton)

    const favoriteCard = screen.getByText(/delete this card/i)
    expect(favoriteCard).toBeInTheDocument()
})