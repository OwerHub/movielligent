import { render, screen } from "@testing-library/react";

import { oneMovie } from "../../../types/movietypes";
import { FavoriteCard } from "../FavoriteCard";

import { movieDatas } from "../../../datas/testDatas";

interface FavoriteCardProps {
    movieData: oneMovie;
    iterator: number
  }

  