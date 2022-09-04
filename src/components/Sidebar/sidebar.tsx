import "./dist/sidebar.css";
import { useState, useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { increment, decrement, changeState } from "../../store/reducers";

import { oneMovie } from "../../types/movietypes";
import { FavoriteCard } from "../favoriteCard/FavoriteCard";

export const Sidebar = () => {
  const [isMovieList, setMovieList] = useState<oneMovie[] | null>();
  const arrayNumber = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  const getLocalStorage = () => {
    let movieList = window.localStorage.getItem("movielligent");
    if (movieList !== null) {
      return JSON.parse(movieList);
    }
    if (movieList === null) {
      return null;
    }
  };

  const setLocalToMovieList = () => {
    setMovieList(getLocalStorage);
  };

  function arrayLengthChange(incrementAmountValue: number) {
    dispatch(changeState(Number(incrementAmountValue)));
  }

  useEffect(() => {
    setLocalToMovieList();
  }, [useSelector((state: RootState) => state.counter.value)]);

  useEffect(() => {
    //setLocalToMovieList();
    if (getLocalStorage()) {
      arrayLengthChange(getLocalStorage().length);
    } else {
      arrayLengthChange(0);
    }
  }, []);

  return (
    <div className="sideBarContainer">
      Favorites
     {/*  <button onClick={() => setLocalToMovieList()}>refresh</button> */}
      {isMovieList &&
        isMovieList.map((movie) => (
          <FavoriteCard key={`FavoriteCard${movie.id}`} movieData={movie} />
        ))}
    </div>
  );
};
