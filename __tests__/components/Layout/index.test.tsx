import { Layout } from "components/Layout";
import { render, screen } from "@testing-library/react";

const Child = () => <p>This is a child</p>;

describe("<Home />", () => {
  beforeEach(() => {
    render(
      <Layout>
        <Child />
      </Layout>
    );
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /Pokedex/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the child", () => {
    const child = screen.getByText("This is a child");

    expect(child).toBeInTheDocument();
  });
});
