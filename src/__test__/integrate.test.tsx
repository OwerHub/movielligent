import { render, screen, fireEvent } from "@testing-library/react";

import { Card } from "../components/Card/Card";
import { Sidebar } from "../components/Sidebar/sidebar";
import { oneMovie } from "../components/../types/movietypes";
import { CardContainer } from "../components/CardContainer/CardContainer";
import { movieDatas } from "../datas/testDatas";

import { Provider } from "react-redux";
import { store } from "../components/../store/store";

interface cardsRenderProps {
  movie: oneMovie;
}

interface cardContainersRenderProps {
  movieList: oneMovie[];
}

const CardsRenderWithProvider: React.FC<cardsRenderProps> = ({ movie }) => {
  return (
    <Provider store={store}>
      <Card iterator={0} movieData={movie} />
      <Sidebar />
    </Provider>
  );
};

const CardContainersRenderWithProvider: React.FC<cardContainersRenderProps> = ({
  movieList,
}) => {
  return (
    <Provider store={store}>
      <CardContainer movieList={movieList} />
      <Sidebar />
    </Provider>
  );
};

describe("actionBetweenCards", () => {
  test("should not render favoriteCard, when the localstorage empty", () => {
    localStorage.removeItem("movielligent");
    render(<CardsRenderWithProvider movie={movieDatas[0]} />);

    const favoriteCardButton = screen.queryByText(/delete this card/i);
    expect(favoriteCardButton).not.toBeInTheDocument();
  });

  test("should render favoriteCard when click add to favorit", () => {
    localStorage.removeItem("movielligent");
    render(<CardsRenderWithProvider movie={movieDatas[0]} />);

    const AddToFavoriteButton = screen.getByText(/add to favorite/i);
    fireEvent.click(AddToFavoriteButton);

    const favoriteCard = screen.getByText(/delete this card/i);
    expect(favoriteCard).toBeInTheDocument();
  });

  test("sould not render the card, when press the delete twice", () => {
    localStorage.removeItem("movielligent");
    render(<CardsRenderWithProvider movie={movieDatas[0]} />);

    const favoriteButton = screen.getByText(/add to favorite/i);
    fireEvent.click(favoriteButton);

    const favoriteCardDeleteButton = screen.getByText(/delete this card/i);
    fireEvent.click(favoriteCardDeleteButton);
    fireEvent.click(favoriteCardDeleteButton);

    const favoriteCard = screen.queryByTestId("/favoritecard-/i");

    expect(favoriteCard).not.toBeInTheDocument();
  });

  test("should not add one Moviecard twice to favorite", () => {
    localStorage.removeItem("movielligent");
    render(<CardsRenderWithProvider movie={movieDatas[0]} />);

    const AddToFavoriteButton = screen.getByText(/add to favorite/i);
    fireEvent.click(AddToFavoriteButton);
    fireEvent.click(AddToFavoriteButton);

    const favoriteCard = screen.getByText(/delete this card/i);
    expect(favoriteCard).toBeInTheDocument();
  });
});

describe("actions between CardContainer and Sidebar", () => {
  test("should add 3 different card to Favorites", () => {
    localStorage.removeItem("movielligent");
    render(<CardContainersRenderWithProvider movieList={movieDatas} />);

    const addToFavoriteButtons = screen.getAllByTestId(/moviecard-button/i);
    addToFavoriteButtons.forEach((button) => {
      fireEvent.click(button);
    });

    const deleteButtons = screen.getAllByText(/delete/i);

    expect(deleteButtons.length).toBe(3);
  });

  test("should delete one favoriteCard", () => {
    localStorage.removeItem("movielligent");
    render(<CardContainersRenderWithProvider movieList={movieDatas} />);
    const addToFavoriteButtons = screen.getAllByTestId(/moviecard-button/i);
    addToFavoriteButtons.forEach((button) => {
      fireEvent.click(button);
    });

    const deleteButtons = screen.getAllByText(/delete/i);
    fireEvent.click(deleteButtons[1]);
    const deleteButtonOne = screen.getByText(/sure/i);
    fireEvent.click(deleteButtonOne);
    const favoriteCard = screen.getAllByTestId(/favoritecard-/i);

    expect(favoriteCard.length).toBe(2);
  });
});
