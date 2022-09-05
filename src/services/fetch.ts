import axios from "axios";

interface searchQueryParameters {
  searchText: string;
  actualPage: number;
}

// ezt majd ENV_ből
const APIKey = "0e5e769f060ca0f15ec6dbad6a46c3b4";
console.log("api key in Fetch", process.env.REACT_APP_API_KEY)
console.log("api key2 in Fetch ", process.env.REACT_APP_API_KEY2)
const pageMinimum = (pageNumber: number) :number=>{
  return pageNumber >= 1 ? pageNumber : 1
}

export async function getSearchedMovies<T>({
  searchText,
  actualPage,
}: searchQueryParameters): Promise<T> {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${decodeURI(
    searchText
  )}&page=${pageMinimum(actualPage)}&include_adult=false`;

  const { data } = await axios.get(url);
  return data;
}
