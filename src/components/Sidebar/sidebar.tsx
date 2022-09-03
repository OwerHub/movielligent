import { oneMovie } from "../../types/movietypes"
import { useState , useEffect} from "react"

export  const Sidebar = () =>  {
const [isMovieList, setMovieList] = useState<oneMovie[] | null>()

const getLocalStorage = () => {
   
    let movieList = window.localStorage.getItem("movielligent")

    if (movieList) {
       movieList = JSON.parse(movieList) 
    }

    console.log(movieList)
} 


useEffect(() => {
    getLocalStorage()
}, [])

useEffect(() => {

    console.log("localstorage Changed")

}, [window.localStorage.getItem("movielligent") ] )


    return(
        <div>
            this is sidebar
            {isMovieList && isMovieList.map((movie, iterator) => (
                <div>
                    {movie.title}
                </div>
            ))}
        </div>
    )

}