import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App.js tests", () => {
  it("renders new burger label", () => {
    const { getByText } = render(<App />);
    const labelElement = getByText("New Burger Idea");
    expect(labelElement).toBeInTheDocument();
  });
});
