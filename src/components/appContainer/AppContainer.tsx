import { useState, useEffect } from "react";
import { movieResponse, oneMovie } from "../../types/movietypes";
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

  const getData = async () => {
    setLoading(true)
    const data = await getSearchedMovies<movieResponse>({
      searchText: isSeachText,
      actualPage: isPage,
    });
    setmMovies(data);
    setLoading(false)

  };

  const searchMovies = (): void => {
    setPage(1);
    getData();
  };

  useEffect(() => {
    if (isPage > 0) {
      getData();
    }
  }, [isPage]);

  return (
    <div className="appContainer">
      <header>
        <HeadTitle />
        <SearchBar
          searchTextSetter={(searchText) => {
            if(searchText.length>3){
              setSearchText(searchText);
            }
          }}
          searchFunction={() => searchMovies()}   // simán át lehet adni 
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


    {isLoading &&  <LoadingSpinner/>}
    </div>
  );
};
