import { useState } from "react";
import "./dist/searchbar.css";

interface searchBarProps {
  searchTextSetter?: (searchText: string) => void;
  searchFunction: (searchText: string) => void;
}

export const SearchBar = (props: searchBarProps) => {
  const [isSearchtext, setSearchText] = useState<string>("");

  const searchButtonHandler = (text:string) => {

   /*  console.log(isSearchtext.length >3) */
    if(text.length>3) {

      /* console.log("search pushed"); */
      props.searchFunction(text);
    } 

  };

  const enterHandle = () =>  {
    searchButtonHandler(isSearchtext)
  };


  return (
    <div className="searchBarContainer">
      <div className="searchWrapper">
        {/* <div>Search a movie</div> */}
        <input
          type="text"
          name="searchInput"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && enterHandle()  }
          placeholder="enter the title"
        />
        <button
          onClick={() => searchButtonHandler(isSearchtext)}
          disabled={isSearchtext.length <= 3}
        >
          search
        </button>
      </div>

  {/*     <div className="checkboxWrapper">
        <div>
          <span>Valami más</span>
          <input type="checkbox" name="adultCheck" />
        </div>
      </div> */}
    </div>
  );
};
