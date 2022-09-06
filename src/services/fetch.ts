import axios from "axios";


interface searchQueryParameters {
  searchText: string;
  actualPage: number;
}

const pageMinimum = (pageNumber: number): number => {
  return pageNumber >= 1 ? pageNumber : 1;
};

export async function getSearchedMovies<T>({
  searchText,
  actualPage,
}: searchQueryParameters): Promise<T> {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${
    process.env.REACT_APP_API_KEY
  }&language=en-US&query=${decodeURI(searchText)}&page=${pageMinimum(
    actualPage
  )}&include_adult=false`;

  const response = await axios.get(url);

  if (response) {
    return response.data;
  }

  return {} as T;
}
