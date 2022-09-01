import axios from "axios";

interface searchQueryParameters {
  searchText: string;
  actualPage: number;
}

// ezt majd ENV_ből
const APIKey = "0e5e769f060ca0f15ec6dbad6a46c3b4";


export async function getSearchedMovies<T>({
  searchText,
  actualPage,
}: searchQueryParameters): Promise<T> {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${decodeURI(
    searchText
  )}&page=${actualPage}&include_adult=true`;

  const { data } = await axios.get(url);
  return data;
}
