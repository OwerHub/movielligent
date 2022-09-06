import { useState, useEffect } from "react";
import { movieResponse, cachedSearchType } from "../../types/movietypes";
import "./dist/appContainer.css";

import { getSearchedMovies } from "../../services/fetch";
import { SearchBar } from "../searchBar/SearchBar";
import { CardContainer } from "../CardContainer/CardContainer";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/sidebar";
import { HeadTitle } from "../HeadTitle/HeadTitle";
import { LoadingSpinner } from "../LoadngSpinner/LoadingSpinner";

export const AppContainer = () => {
  const [isMovies, setmMovies] = useState<movieResponse>();
  const [isSeachText, setSearchText] = useState<string>("");
  const [isPage, setPage] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isCacheSearches, setCacheSearches] = useState<cachedSearchType[]>([]);

  const watchSearchTextUndefined = (searchText: string | undefined) => {
    if (searchText === undefined) {
      return isSeachText;
    }
    return searchText;
  };

  const verifySearchParametersInStorage = (actualSearchtext: string) => {
    return isCacheSearches.find(
      (cachedSearch) =>
        cachedSearch.pageNumber === isPage &&
        cachedSearch.searchText === actualSearchtext
    );
  };

  const getData = async (searchText: string) => {
    return await getSearchedMovies<movieResponse>({
      searchText: searchText,
      actualPage: isPage,
    });
  };

  const gettingDataHandler = async (searchtext: string | undefined) => {
    setLoading(true);

    let actualSearchtext: string = watchSearchTextUndefined(searchtext);
    let foundSearchInCached: cachedSearchType | undefined;

    if (isCacheSearches.length !== 0) {
      foundSearchInCached = verifySearchParametersInStorage(actualSearchtext);
    }

    if (foundSearchInCached?.searchResponse !== undefined) {
      setmMovies(foundSearchInCached.searchResponse);
      setLoading(false);
    }

    if (foundSearchInCached === undefined) {
      const data = await getData(actualSearchtext);
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

      <section className="appBody">
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
