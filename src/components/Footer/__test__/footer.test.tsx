import { render, screen, fireEvent } from "@testing-library/react";

import { Footer } from "../Footer";

const mockfn = jest.fn()

describe("Footer" , ()=> {

    test("sholud not endMarkers when maxpage is 5", ()=> {
        render(<Footer actualPage={4} maxPage={5} pageSetter={mockfn} / > )
        const endMarkerElements = screen.queryAllByTestId(/Marker/i)
        expect(endMarkerElements.length).toBe(0)
    })

})