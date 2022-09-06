import { render, screen, fireEvent } from "@testing-library/react";

import { Footer } from "../Footer";

const mockfn = jest.fn();

describe("Footer", () => {
  test("sholud not endMarkers  when maxpage is 5", () => {
    render(<Footer actualPage={4} maxPage={5} pageSetter={mockfn} />);
    const endMarkerElements = screen.queryAllByTestId(/Marker/i);
    expect(endMarkerElements.length).toBe(0);
  });

  test("Should show endmarker when actual 4 max 15", () => {
    render(<Footer actualPage={4} maxPage={15} pageSetter={mockfn} />);
    const endMarkerElement = screen.getByTestId("endMarker");
    expect(endMarkerElement).toBeInTheDocument();
  });

  test("Should not show startmarker when actual 4 max 15", () => {
    render(<Footer actualPage={2} maxPage={15} pageSetter={mockfn} />);
    const endMarkerElement = screen.queryByTestId("startMarker");
    expect(endMarkerElement).not.toBeInTheDocument();
  });

  test("sholud show all endmarkers when max15 act 10", () => {
    render(<Footer actualPage={10} maxPage={15} pageSetter={mockfn} />);
    const endMarkerElements = screen.queryAllByTestId(/Marker/i);
    expect(endMarkerElements.length).toBe(2);
  });

  test("sholud only 3 element when max is 3", () => {
    render(<Footer actualPage={2} maxPage={3} pageSetter={mockfn} />);
    const endMarkerElements = screen.queryAllByTestId(/pageButton-/i);
    expect(endMarkerElements.length).toBe(3);
  });

  test("should the actual page's button get another class", () => {
    render(<Footer actualPage={3} maxPage={8} pageSetter={mockfn} />);
    const actualButtonElement = screen.getByText(/3/i);
    expect(actualButtonElement).toHaveClass("selectedButton");
  });

  test("should the button, what not actual, didnt get a class", () => {
    render(<Footer actualPage={3} maxPage={8} pageSetter={mockfn} />);
    const buttonElement = screen.queryByText(/4/i);
    expect(buttonElement).not.toHaveClass("selectedButton");
  });

  test("should the pressed button give back a right number", () => {
    let getBackNumber: number = 0;

    render(
      <Footer
        actualPage={3}
        maxPage={8}
        pageSetter={(page) => (getBackNumber = page)}
      />
    );
    const buttonElement = screen.getByText(/4/i);
    fireEvent.click(buttonElement);
    expect(getBackNumber).toBe(4);
  });
});
