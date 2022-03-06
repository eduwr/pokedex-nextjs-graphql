import { graphql } from "msw";

export const handlers = [
  graphql.query(`PokemonByNameOrId`, (req, res, ctx) => {
    return res(
      ctx.data({
        pokemonByNameOrId: {
          id: "25",
          name: "pikachu",
          types: [
            {
              type: {
                name: "electric",
              },
            },
          ],
          sprites: {
            other: {
              officialArtwork: {
                front_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
              },
            },
          },
        },
      })
    );
  }),
];
