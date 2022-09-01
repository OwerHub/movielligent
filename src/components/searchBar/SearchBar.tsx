import "./dist/searchbar.css";

interface searchBarProps  {
    searchSetter: (searchText: string) => void
}

export const SearchBar = (props: searchBarProps) => {

    const inputChangeHandler = (searchText: string) => {
        //console.log(searchText)
        props.searchSetter(searchText)
    }


  return (
    <div className="searchBarContainer">

      <div className="searchWrapper">
        <div>Search a movie</div>
        <input type="text" name="searchInput" onChange={(e) => inputChangeHandler(e.target.value) }  />
      </div>

      <div className="checkboxWrapper">
        <div>
          <span>Adult</span>
          <input type="checkbox" name="adultCheck" />
        </div>
      </div>

    </div>
  );
};
