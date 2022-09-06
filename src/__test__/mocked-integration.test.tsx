import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../components/../store/store";

import {AppContainer} from "../components/appContainer/AppContainer"

const AppContainerWithProvider: React.FC = () => {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  };

describe("mocked integration tests" , ()=>{

    test("should test the mock", () => {
        render(<AppContainerWithProvider/>)

        const searchInput = screen.getByPlaceholderText(/enter the title/i)

        fireEvent.change(searchInput, { target: { value: "V for Vendetta" } })

        const addToFavoriteButton = screen.getByText(/favorite/i)
        expect(addToFavoriteButton).toBeInTheDocument()
    })
})