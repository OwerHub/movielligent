import axios from "axios";

interface searchQueryParameters {
  searchText: string;
  actualPage: number;
}

const pageMinimum = (pageNumber: number) :number=>{
  return pageNumber >= 1 ? pageNumber : 1
}

let previousKeyword = ""


export async function getSearchedMovies<T>({
  searchText,
  actualPage,
}: searchQueryParameters): Promise<T> {



  // handle when the user delete the input field and changfe page
  let searchWordInner : string = ""
  if (searchText.length> 3) {
    previousKeyword = searchText
    searchWordInner = searchText
  } 
  if (searchText.length <=3 && previousKeyword.length > 3) {
    searchWordInner = previousKeyword
  }

// itt kell megnézni, hogy volt-e már ilyen searchText és ActualPage?  ha volt, egyből töltse vissza

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${decodeURI(
    searchText
  )}&page=${pageMinimum(actualPage)}&include_adult=false`;

  const { data } = await axios.get(url);

  // a datát searchText-el és az actualPage-al együtt csapja hozzá a cache-hez
  return data;
}
