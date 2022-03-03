import { Axios, AxiosResponse } from "axios";
import { BasePokemonEntity } from "types/BasePokemonEntity";
import { PokeApiListResponse } from "types/PokeApiListResponse";
import { Pokemon } from "types/Pokemon";
import type { Context } from "./context";

type PokemonArgs = {
  offset?: number;
  limit?: number;
};

type PokemonByIdArgs = {
  id: number;
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
        PokeApiListResponse<BasePokemonEntity[]>
      >(`pokemon${query}`);

      const promises = response.data.results.map(({ url }) =>
        context.pokeApi.get<Pokemon>(url)
      );

      const pokemonResponse = await Promise.all(promises);

      const pokemon = response.data.results.map((item, idx) => {
        const poke = pokemonResponse[idx];

        const parsedPoke = parseOtherSpritesData(poke);

        return {
          ...item,
          ...parsedPoke.data,
        };
      });

      return {
        ...response.data,
        results: pokemon,
      };
    },
    pokemonById: async (
      _parent: unknown,
      { id }: PokemonByIdArgs,
      context: Context
    ) => {
      const response = await context.pokeApi.get<Pokemon>(`pokemon/${id}`);

      const parsedResponse = parseOtherSpritesData(response);

      return parsedResponse.data;
    },
  },
};
