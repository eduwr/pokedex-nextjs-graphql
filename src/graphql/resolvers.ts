import { pokeApi } from "services/pokeApi";
import type { Context } from "./context";

type PokemonArgs = {
  offset?: number;
  limit?: number;
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
  },
};
