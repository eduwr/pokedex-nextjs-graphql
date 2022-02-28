import { render, screen } from "@testing-library/react";

import Home from "../../src/pages/index";

describe("<Home />", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders a list", () => {
    const list = screen.getByTestId("pokemon-list");

    expect(list).toBeInTheDocument();
  });
});
