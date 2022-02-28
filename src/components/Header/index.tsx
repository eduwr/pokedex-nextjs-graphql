import { GridItem, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <GridItem as="nav" display="flex" alignItems="center" h="100%" p="10">
      <Heading>Pokedex</Heading>
    </GridItem>
  );
};
