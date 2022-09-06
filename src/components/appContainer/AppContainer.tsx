import { useState, useEffect } from "react";
import {
  movieResponse,
  oneMovie,
  cachedSearchType,
} from "../../types/movietypes";
import "./dist/appContainer.css";
//import searchJson from "../../datas/searches.json";

import { getSearchedMovies } from "../../services/fetch";
import { SearchBar } from "../searchBar/SearchBar";
import { CardContainer } from "../CardContainer/CardContainer";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/sidebar";
import { HeadTitle } from "../HeadTitle/HeadTitle";
import { LoadingSpinner } from "../LoadngSpinner/LoadingSpinner";
import { setTextRange } from "typescript";

export const AppContainer = () => {
  //localStorage.removeItem('movielligent');

  const [isMovies, setmMovies] = useState<movieResponse>();
  const [isSeachText, setSearchText] = useState<string>("");

  const [isPage, setPage] = useState(0);
  const [isLoading, setLoading] = useState(false);
  // Redux-toolkit input state

  const [isCacheSearches, setCacheSearches] = useState<cachedSearchType | []>(
    []
  );
  const [isPreviousSearchKey, setPreviousSearchKey] = useState<string>("");

  const getData = async (searchtext:string| undefined) => {
    setLoading(true);

    let actualSearchtext: string

    if(searchtext === undefined) {
      actualSearchtext = isSeachText
    }  else {
      actualSearchtext = searchtext
    }

    let foundSearchInCached: cachedSearchType | undefined;

    const data: movieResponse = await getSearchedMovies<movieResponse>({
      searchText: actualSearchtext,
      actualPage: isPage,
    });

    setmMovies(data);
    setLoading(false);
  };


  const searchButtonHandler = (searchText:string): void => {

    setSearchText(searchText)
    setPage(1);
    getData(searchText);
  };

  useEffect(() => {
    if (isPage > 0) {
      getData(undefined);
    }
  }, [isPage]);

  return (
    <div className="appContainer">
      <header>
        <HeadTitle />
        <SearchBar
       /*    searchTextSetter={(searchText) => {
            if (searchText.length > 3) {
              setSearchText(searchText);
            }
          }} */
          searchFunction={(searchText) => searchButtonHandler(searchText)} // simán át lehet adni
        />
      </header>

      <section className="body">
        <CardContainer movieList={isMovies?.results} />
        <Sidebar />
      </section>

      <footer>
        {isPage > 0 && (
          <Footer
            actualPage={isPage}
            maxPage={isMovies?.total_pages}
            pageSetter={(page) => {
              setPage(page);
            }}
          />
        )}
      </footer>

      {isLoading && <LoadingSpinner />}
    </div>
  );
};
