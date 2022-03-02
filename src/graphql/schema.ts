import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type BasePokemonEntity {
    name: String
    url: String
  }

  type GetAllPokemon {
    count: Int
    next: String
    previous: String
    results: [BasePokemonEntity]!
  }

  type Query {
    getAllPokemon: GetAllPokemon
  }
`;
