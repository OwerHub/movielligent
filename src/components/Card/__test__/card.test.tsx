import { Card } from "../Card";

import { render, screen } from "@testing-library/react";
import { oneMovie } from "../../../types/movietypes";

import { Provider } from "react-redux";
import { store } from "../../../store/store";

import { movieDatas } from "../../../datas/testDatas";

interface renderProps {
  movie: oneMovie;
}

const RenderWithProvider: React.FC<renderProps> = ({ movie }) => {
  return (
    <Provider store={store}>
      <Card iterator={0} movieData={movie} />
    </Provider>
  );
};

describe("MovieCard", () => {
  test("Should render the given year", () => {
    render(<RenderWithProvider movie={movieDatas[0]} />);
    const titleDiv = screen.getByText(movieDatas[0].release_date.slice(0, 4));
    expect(titleDiv).toBeInTheDocument();
  });

  test("Should render the given title ", () => {
    render(<RenderWithProvider movie={movieDatas[0]} />);
    const titleDiv = screen.getByText(movieDatas[0].title);
    expect(titleDiv).toBeInTheDocument();
  });

  test("Should render the movie picture", () => {
    render(<RenderWithProvider movie={movieDatas[0]} />);
    const posterPicElement = screen.getByAltText(
      `moviePoster-${movieDatas[0].poster_path}`
    );
    expect(posterPicElement).toBeInTheDocument();
  });

  test("Should render the placeholder when not given poster", () => {
    render(<RenderWithProvider movie={movieDatas[1]} />);
    const posterPicElement = screen.getByAltText("placeholderPic");
    expect(posterPicElement).toBeInTheDocument();
  });
});
