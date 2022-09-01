import { useState, useEffect } from "react";
import "./dist/appContainer.css";
import { movieResponse, oneMovie } from "../../types/movietypes";

import { getSearchedMovies } from "../../services/fetch";
import { SearchBar } from "../searchBar/SearchBar";
import { CardContainer } from "../CardContainer/CardContainer";

export const AppContainer = () => {
  const [isMovies, setmMovies] = useState<movieResponse>();
  const [isSeachText, setSearchText] = useState<string>("");
  // később lehet destructingolni az actualpage-t, meg az egyéb adatokat
  // esetleg useDispatch-el megkenni
  const [isPage, setPage] = useState(1);

  const getData = async () => {
     console.log("start fetcg")
    const data = await getSearchedMovies<movieResponse>({
      searchText: isSeachText,
      actualPage: isPage,
    });
    setmMovies(data);
    console.log("end fetch")
  };

  useEffect(() => {
    //getData();
    //console.log(isMovies);
  }, []);

  useEffect(() => {
if (isSeachText.length > 3) {
   getData();
}
 }, [isSeachText]);


  return (
    <div className="appContainer">
      <header>this is header</header>

      <section className="body">
        <SearchBar searchSetter={(searchText)=>{setSearchText(searchText)}} />

         <CardContainer movieList={isMovies?.results}/>
        {/* {
          isMovies?.results?.map((movie, iterator) => (
            <div key={`movie${iterator}`}>{movie.title}</div>
          ))} */}
      </section>

      <footer>
         <div>
            <div>
            searchText is: {isSeachText}
            </div>
            <div>
            total pages  is : {isMovies?.total_pages}
            </div>
            <div>

            total results  is : {isMovies?.total_results}
            </div>
         </div>
      </footer>
    </div>
  );
};
