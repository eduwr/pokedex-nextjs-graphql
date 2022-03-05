import { ListItem, Box, Container, Text, Heading } from "@chakra-ui/react";
import useSWR from "swr";

import { Pokemon } from "types/Pokemon";
import Image from "next/image";
import { pokemonColors } from "../../styles/pokemonColors";
import { useMemo } from "react";
import { BasePokemonEntity } from "types/BasePokemonEntity";
import { fetcher } from "services/fetcher";

const POKEMON_BY_NAME = `
  query PokemonByNameOrId($name: String) {
    pokemonByNameOrId(name: $name) {
      id
      name
      types {
        type {
          name
        }
      }
      sprites {
        other {
          officialArtwork {
            front_default
          }
        }
      }
    }
  }
`;

interface ResponseByNameOrId {
  pokemonByNameOrId: Pokemon;
}

interface Props {
  pokemon: BasePokemonEntity;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { name } = pokemon;

  const variables = {
    name,
  };

  const { data, error } = useSWR<ResponseByNameOrId>(
    [POKEMON_BY_NAME, variables],
    fetcher
  );

  data?.pokemonByNameOrId;

  const backgroundColor = useMemo(() => {
    if (!data?.pokemonByNameOrId.types) {
      return {};
    }
    const typeNames = data?.pokemonByNameOrId.types.map(
      ({ type }) => type.name
    );
    const colors = pokemonColors.getPokemonColors(typeNames);

    if (colors.length > 1) {
      return {
        bgGradient: `linear(to-br, ${colors.join(", ")})`,
      };
    }

    return {
      bg: colors[0],
    };
  }, [data?.pokemonByNameOrId.types]);

  const image =
    data?.pokemonByNameOrId.sprites.other.officialArtwork?.front_default;

  const formatPokemonId = (id: number | undefined) => {
    if (!id) {
      return "000";
    }

    return id.toString().padStart(3, "00");
  };

  if (error) {
    return <span>Error!</span>;
  }

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
        w="100%"
        h="150px"
        zIndex={0}
        borderRadius="xl"
        bottom={0}
        display="flex"
        justifyContent="flex-end"
        boxShadow="lg"
        {...backgroundColor}
      >
        <Text color="whiteAlpha.600" mr="2" fontWeight="bold" fontSize="5xl">
          {formatPokemonId(data?.pokemonByNameOrId.id)}
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
        borderBottomRadius="xl"
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
