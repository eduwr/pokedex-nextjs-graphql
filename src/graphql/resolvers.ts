import { Pokemon } from "types/Pokemon";
import type { Context } from "./context";

type PokemonArgs = {
  offset?: number;
  limit?: number;
};

type PokemonByIdArgs = {
  id: number;
};

export const resolvers = {
  Query: {
    pokemon: async (
      _parent: unknown,
      { limit, offset }: PokemonArgs,
      context: Context
    ) => {
      const query = `?limit=${limit}&offset=${offset}`;

      const response = await context.pokeApi.get(`pokemon${query}`);
      return response.data;
    },
    pokemonById: async (
      _parent: unknown,
      { id }: PokemonByIdArgs,
      context: Context
    ) => {
      const response = await context.pokeApi.get<Pokemon>(`pokemon/${id}`);

      response.data.sprites.other.officialArtwork =
        response.data.sprites.other["official-artwork"];

      delete response.data.sprites.other["official-artwork"];

      response.data.sprites.other.dreamWorld =
        response.data.sprites.other.dream_world;

      delete response.data.sprites.other.dream_world;

      console.log("[other]", response.data.sprites.other);
      return response.data;
    },
  },
};
