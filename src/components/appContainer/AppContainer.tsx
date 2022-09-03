import { useState, useEffect } from "react";
import { movieResponse, oneMovie } from "../../types/movietypes";
import "./dist/appContainer.css";
import searchJson from "../../datas/searches.json";

import { getSearchedMovies } from "../../services/fetch";
import { SearchBar } from "../searchBar/SearchBar";
import { CardContainer } from "../CardContainer/CardContainer";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/sidebar";

export const AppContainer = () => {
  const [isMovies, setmMovies] = useState<movieResponse>();
  const [isSeachText, setSearchText] = useState<string>("");

  // később lehet destructingolni az actualpage-t, meg az egyéb adatokat
  // esetleg useDispatch-el megkenni
  const [isPage, setPage] = useState(0);

/*  const env = process.env.API_KEY

 console.log("API KEY isa" , env) */

  const getData = async () => {
    console.log("getData");
    //console.log("start fetch");
    const data = await getSearchedMovies<movieResponse>({
      searchText: isSeachText,
      actualPage: (isPage),
    });
    setmMovies(data);
    //console.log("end fetch");
  };

  const searchMovies = (): void => {
    setPage(1);

    console.log("searchMovies");

    getData();
  };

  useEffect(() => {
    if (isPage > 0) {
      console.log("useEffect");
      getData();
    }
  }, [isPage]);

  return (
    <div className="appContainer">
      <header>
        this is header
        <SearchBar
          searchTextSetter={(searchText) => {
            setSearchText(searchText);
          }}
          searchFunction={() => searchMovies()}
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
    </div>
  );
};
