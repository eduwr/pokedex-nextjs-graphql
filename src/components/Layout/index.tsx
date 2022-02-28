import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Flex w="100%" minHeight="100vh">
      <Grid w="100%" minHeight="100%" templateRows="100px 1fr 200px">
        <Header />
        <GridItem as="main" bg="blackAlpha.500">
          {children}
        </GridItem>
        <Footer />
      </Grid>
    </Flex>
  );
};
