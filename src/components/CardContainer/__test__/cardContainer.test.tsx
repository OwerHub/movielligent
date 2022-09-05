
import { render, screen, fireEvent } from "@testing-library/react";
import { movieDatas } from "../../../datas/testDatas";
import { oneMovie } from "../../../types/movietypes";

import { CardContainer } from "../CardContainer";

import { Provider } from "react-redux";
import { store } from "../../../store/store";

interface cardContainerProps {
  dummyMovieList?: oneMovie[];
}

const RenderWithProvider: React.FC<cardContainerProps> = ({
  dummyMovieList,
}) => {
  return (
    <Provider store={store}>
      <CardContainer movieList={dummyMovieList}></CardContainer>
    </Provider>
  );
};

describe("cardContainer ", () => {
  test("should not render cards when the movieArray is null", () => {
    render(<RenderWithProvider />);
    const divElement = screen.queryByText(/favorite/i);
    expect(divElement).not.toBeInTheDocument();
  });

  test("should render the placeholder when the movie list is null", () => {
    render(<RenderWithProvider />);
    const divElement = screen.getByText(/No Dispayed Movie/i);
    expect(divElement).toBeInTheDocument();
  });

  test("should render 3 cards when it given 3 movie ", () => {
    render(<RenderWithProvider dummyMovieList={movieDatas} />);
    const favoriteButtons = screen.getAllByText(/Add to favorite/i);
    expect(favoriteButtons.length).toBe(3);
  });

  test("should render a title from array", () => {
    render(<RenderWithProvider dummyMovieList={movieDatas} />);
    const movieTitle = screen.getByText(/V for Vendetta/i);
    expect(movieTitle).toBeInTheDocument();
  });

  test("should render a date year  from array", () => {
    render(<RenderWithProvider dummyMovieList={movieDatas} />);
    const movieTitle = screen.getByText(/2022/i);
    expect(movieTitle).toBeInTheDocument();
  });
});
