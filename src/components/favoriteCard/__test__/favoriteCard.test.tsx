import { render, screen, fireEvent } from "@testing-library/react";

import { oneMovie } from "../../../types/movietypes";
import { FavoriteCard } from "../FavoriteCard";

import { movieDatas } from "../../../datas/testDatas";

import { Provider } from "react-redux";
import { store } from "../../../store/store";

interface renderProps {
    movie: oneMovie;
    iterator: number
  }

  const RenderWithProvider: React.FC<renderProps> = ({ movie, iterator }) => {
    return (
      <Provider store={store}>
        <FavoriteCard movieData={movie} iterator={iterator} />
      </Provider>
    );
  };



describe("favoriteCard" , ()=> {

    test("should render the title", ()=> {
        render(<RenderWithProvider movie={movieDatas[0]} iterator={1}/>)
        const titleDiv = screen.getByText(movieDatas[0].title);
        expect(titleDiv).toBeInTheDocument();
    })

    test("Should render the movie picture", () => {
        render(<RenderWithProvider movie={movieDatas[0]} iterator={1} />);
        const posterPicElement = screen.getByAltText(
          `favoriteMoviePoster-${movieDatas[0].poster_path}`
        );
        expect(posterPicElement).toBeInTheDocument();
      });
 
      test("Should render the placeholder when not given poster", () => {
        render(<RenderWithProvider movie={movieDatas[1]} iterator={1}/>);
        const posterPicElement = screen.getByAltText("favoritePlaceholderPic");
        expect(posterPicElement).toBeInTheDocument();
      });

      test("should render the button" , ()=> {
        render(<RenderWithProvider movie={movieDatas[1]} iterator={1}/>);
        const buttonElement = screen.getByText(/delete this card/i)
        expect(buttonElement).toBeInTheDocument();
      })

      test("should change the button's title after click" , ()=> {
        render(<RenderWithProvider movie={movieDatas[1]} iterator={1}/>);
        const buttonElement = screen.getByText(/delete this card/i)
        fireEvent.click(buttonElement)
        const sureButtonElement = screen.getByText(/are you sure/i)
        expect(sureButtonElement).toBeInTheDocument();
      })

})