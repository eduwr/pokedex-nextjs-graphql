import { AxiosResponse } from "axios";
import { BasePokemonEntity } from "types/BasePokemonEntity";
import { PokeApiList } from "types/PokeApiListResponse";
import { Pokemon } from "types/Pokemon";
import type { Context } from "./context";

type PokemonArgs = {
  offset?: number;
  limit?: number;
};

type PokemonByIdArgs = {
  id: number;
  name: string;
};

const parseOtherSpritesData = (response: AxiosResponse<Pokemon>) => {
  let _response = response;

  _response.data.sprites.other.officialArtwork =
    _response.data.sprites.other["official-artwork"];

  delete _response.data.sprites.other["official-artwork"];

  _response.data.sprites.other.dreamWorld =
    _response.data.sprites.other.dream_world;

  delete _response.data.sprites.other.dream_world;

  return _response;
};

export const resolvers = {
  Query: {
    pokemon: async (
      _parent: unknown,
      { limit, offset }: PokemonArgs,
      context: Context
    ) => {
      const query = `?limit=${limit}&offset=${offset}`;

      const response = await context.pokeApi.get<
        PokeApiList<BasePokemonEntity[]>
      >(`pokemon${query}`);

      return response.data;
    },
    pokemonByNameOrId: async (
      _parent: unknown,
      { id, name }: PokemonByIdArgs,
      context: Context
    ) => {
      if (!id && !name) {
        throw new Error("Pokemon $id or $name are required");
      }

      const response = await context.pokeApi.get<Pokemon>(
        `pokemon/${id || name}`
      );

      return parseOtherSpritesData(response).data;
    },
  },
};
