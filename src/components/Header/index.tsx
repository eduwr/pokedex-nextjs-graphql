import { GridItem, Heading } from "@chakra-ui/react";
import Image from "next/image";

export const Header = () => {
  return (
    <GridItem
      bg="gray.200"
      as="nav"
      display="flex"
      alignItems="center"
      h="100%"
      p="10"
    >
      <Image src="/logo.png" alt="Pokemon logo" width={180} height={80} />
    </GridItem>
  );
};
