import { ListItem, Box, Container, Text, Heading } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import { BasePokemonEntity } from "types/BasePokemonEntity";
import { Pokemon } from "types/Pokemon";
import Image from "next/image";
interface Props {
  pokemon: BasePokemonEntity;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { data, error } = useSWR<AxiosResponse<Pokemon>>(
    pokemon.url,
    axios.get
  );

  const image = data?.data.sprites.other["official-artwork"].front_default;

  return (
    <ListItem
      pos="relative"
      listStyleType="none"
      w={250}
      h={180}
      as="li"
      key={pokemon.name}
      display="flex"
      alignItems="flex-end"
    >
      <Box
        pos="absolute"
        bg="red.500"
        w="100%"
        h="150px"
        zIndex={0}
        borderRadius="xl"
        bottom={0}
        display="flex"
        justifyContent="flex-end"
      >
        <Text color="whiteAlpha.600" mr="2" fontWeight="bold" fontSize="5xl">
          00{data?.data.id}
        </Text>
      </Box>
      <Box
        zIndex={10}
        width="100%"
        bgGradient="linear(to-r, whiteAlpha.500, whiteAlpha.800)"
        py="1"
        px="3"
        display="flex"
        justifyContent="flex-end"
      >
        <Heading as="h3" size="lg">
          {pokemon.name}
        </Heading>
      </Box>

      {image && (
        <Container p={0} pos="absolute" left={0} bottom={0}>
          <Image width={180} height={180} src={image} alt={pokemon.name} />
        </Container>
      )}
    </ListItem>
  );
};
