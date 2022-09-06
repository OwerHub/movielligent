import { render, screen, fireEvent,  } from "@testing-library/react";

import { SearchBar } from "../SearchBar";

const mockedSetTodo = jest.fn();

describe("searchBar", () => {

  // a TS blocked beforeeach / beforeAll render


  test("should input is rendered", () => {
    render(
      <SearchBar
        searchFunction={mockedSetTodo}
        searchTextSetter={mockedSetTodo}
      />
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("should button is rendered", () => {
    render(
      <SearchBar
        searchFunction={mockedSetTodo}
        searchTextSetter={mockedSetTodo}
      />
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should button is default disabled", () => {
    render(
      <SearchBar
        searchFunction={mockedSetTodo}
        searchTextSetter={mockedSetTodo}
      />
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  test("should button enabled after type four character", () => {
    render(
      <SearchBar
        searchFunction={mockedSetTodo}
        searchTextSetter={mockedSetTodo}
      />
    );
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "Vendetta" } });
    expect(buttonElement).toBeEnabled();
  });



  test("should searchButton fired the function", () => {
    let gettedButton: string = "not pushed";

    render(
      <SearchBar
        searchFunction={(searchText) => (gettedButton = searchText)}
        searchTextSetter={mockedSetTodo}
      />
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Vendetta" } });
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(gettedButton).toBe("Vendetta");
  });
});
