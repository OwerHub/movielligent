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

export const AppContainer = () => {
  //localStorage.removeItem('movielligent');

  const [isMovies, setmMovies] = useState<movieResponse>();
  const [isSeachText, setSearchText] = useState<string>("");

  const [isPage, setPage] = useState(0);
  const [isLoading, setLoading] = useState(false);
  // Redux-toolkit input state

  const [isCacheSearches, setCacheSearches] = useState<cachedSearchType[]>([]);

  const gettingDataHandler = async (searchtext: string | undefined) => {
    setLoading(true);

    // ez még kiszervezhető
    let actualSearchtext: string;
    if (searchtext === undefined) {
      actualSearchtext = isSeachText;
    } else {
      actualSearchtext = searchtext;
    }

    ///----

    /// Ez is
    let foundSearchInCached: cachedSearchType | undefined;

    if (isCacheSearches.length !== 0) {
      foundSearchInCached = isCacheSearches.find(
        (cachedSearch) =>
          cachedSearch.pageNumber === isPage &&
          cachedSearch.searchText === actualSearchtext
      );
    }
    //-----

    /// maradhat
    if (foundSearchInCached?.searchResponse !== undefined) {
      setmMovies(foundSearchInCached.searchResponse);
      setLoading(false);
    }

    if (foundSearchInCached === undefined) {
      // megint csak kiszervezhető
      const data: movieResponse = await getSearchedMovies<movieResponse>({
        searchText: actualSearchtext,
        actualPage: isPage,
      });

      setCacheSearches((prevArray) => [
        ...prevArray,
        {
          searchText: actualSearchtext,
          pageNumber: isPage,
          searchResponse: data,
        },
      ]);

      setmMovies(data);
      setLoading(false);

      // eddig
    }
  };

  const searchButtonHandler = (searchText: string): void => {
    setSearchText(searchText);
    setPage(1);
    gettingDataHandler(searchText);
  };

  useEffect(() => {
    if (isPage > 0) {
      gettingDataHandler(undefined);
    }
  }, [isPage]);

  return (
    <div className="appContainer">
      <header>
        <HeadTitle />
        <SearchBar
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
