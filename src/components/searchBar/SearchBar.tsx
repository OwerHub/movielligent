import { useState } from "react";
import "./dist/searchbar.css";

interface searchBarProps  {
    searchTextSetter: (searchText: string) => void
    searchFunction: () => void
}

export const SearchBar = (props: searchBarProps) => {

const [isSearchtext, setSearchText] = useState<string>("")

    const searchButtonHandler = () =>{
      
      console.log("search pushed")
      props.searchFunction()
      
    }

    const inputChangeHandler = (searchText: string) => {
        //console.log(searchText)
        setSearchText(searchText)
        props.searchTextSetter(searchText)
    }


  return (
    <div className="searchBarContainer">
      

      <div className="searchWrapper">
        <div>Search a movie</div>
        <input type="text" name="searchInput" onChange={(e) => inputChangeHandler(e.target.value) }  />
        <button onClick={()=>searchButtonHandler()} disabled={isSearchtext.length<=3}>search</button>
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
