import { PokemonCard } from "components/PokemonCard";
import { render, screen, act } from "@testing-library/react";
import { ChakraProvider, UnorderedList } from "@chakra-ui/react";
import { server } from "../../../mocks/server";
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
    act(() => {
      render(<Component />);
    });
    const pikachu = await screen.findByText(/pikachu/i);

    expect(pikachu).toBeInTheDocument();
  });
});
