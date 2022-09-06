import axios from "axios";
import { cachedSearchType, movieResponse, oneMovie } from "../types/movietypes";

interface searchQueryParameters {
  searchText: string;
  actualPage: number;
}

const pageMinimum = (pageNumber: number): number => {
  return pageNumber >= 1 ? pageNumber : 1;
};



let cachedSerches: cachedSearchType[];

export async function getSearchedMovies<T>({
  searchText,
  actualPage,
}: searchQueryParameters): Promise<T> {

  // handle when the user delete the input field and change page


  const url = `https://api.themoviedb.org/3/search/movie?api_key=${
    process.env.REACT_APP_API_KEY
  }&language=en-US&query=${decodeURI(searchText)}&page=${pageMinimum(
    actualPage
  )}&include_adult=false`;

  const { data } = await axios.get(url);


  return data ;
}
