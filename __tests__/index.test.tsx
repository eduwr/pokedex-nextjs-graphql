import { render, screen } from "@testing-library/react";

import Home from "../src/pages/index";

describe("<Home />", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /Welcome to/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
