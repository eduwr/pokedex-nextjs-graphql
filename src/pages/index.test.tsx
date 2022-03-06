import { PokemonCard } from "components/PokemonCard";
import { screen } from "@testing-library/react";
import { ChakraProvider, UnorderedList } from "@chakra-ui/react";
import { renderComponent } from "helpers/test/renderComponent";

const Component = () => (
  <ChakraProvider>
    <UnorderedList>
      <PokemonCard
        pokemon={{
          name: "pikachu",
          url: "whatever",
        }}
      />
    </UnorderedList>
  </ChakraProvider>
);

describe("<PokemonCard />", () => {
  it("renders a pokemon", async () => {
    renderComponent(Component);
    const pikachu = await screen.findByText(/pikachu/i);

    expect(pikachu).toBeInTheDocument();
  });
});
