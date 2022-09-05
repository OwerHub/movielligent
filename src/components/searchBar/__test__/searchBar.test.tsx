import { render, screen, fireEvent } from "@testing-library/react";

import { SearchBar } from "../SearchBar";

const mockedSetTodo = jest.fn();

describe("searchBar", () => {
  // a TS valamiért nem engedi a BeforeEach-el megcsinálni

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

  test("should button enabled after type 4 character", () => {
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

  // másik describe, bár így sok értelme nincs

  test("should inputChange set the value ", () => {
    let gettedInputValue: string = "";
    render(
      <SearchBar
        searchFunction={mockedSetTodo}
        searchTextSetter={(e: string) => (gettedInputValue = e)}
      />
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Vendetta" } });
    expect(gettedInputValue).toBe("Vendetta");
  });

  test("should searchButton fired the function", () => {
    let gettedButton: string = "not pushed";

    render(
      <SearchBar
        searchFunction={() => (gettedButton = "pushed")}
        searchTextSetter={mockedSetTodo}
      />
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Vendetta" } });
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(gettedButton).toBe("pushed");
  });
});
