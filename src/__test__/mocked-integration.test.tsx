import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { store } from "../components/../store/store";

import { AppContainer } from "../components/appContainer/AppContainer";

const AppContainerWithProvider: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

describe("mocked integration tests", () => {
    
  test("should test the mock", async () => {
    render(<AppContainerWithProvider />);
 
    const searchInput = screen.getByPlaceholderText(/enter the title/i);
    const searchButton = screen.getByText(/search/i);
    fireEvent.change(searchInput, { target: { value: "Vendetta" } });
    // eslint-disable-next-line testing-library/no-unnecessary-act
/*     act(() => {
          fireEvent.click(searchButton);
          const addToFavoriteButton = screen.getAllByText(/add to favorite/i)
      }); */

    


    //expect(searchButton).toBeInTheDocument()
  });
});
