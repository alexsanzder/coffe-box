import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header image text and search place holder", () => {
    render(<App />);
    expect(screen.getByAltText(/coffe box/i)).toBeInTheDocument();
    expect(
        screen.getByPlaceholderText(/quick search for anything.../i)
    ).toBeInTheDocument();
});
