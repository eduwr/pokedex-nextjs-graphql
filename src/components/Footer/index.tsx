import { GridItem, Heading } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <GridItem
      bg="gray.200"
      as="footer"
      display="flex"
      alignItems="center"
      h="100%"
      p="10"
    >
      <Heading>Footer</Heading>
    </GridItem>
  );
};
