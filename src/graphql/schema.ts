import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type BasePokemonEntity {
    name: String
    url: String
  }

  type SpritesDefault {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }

  type OtherSprites {
    dreamWorld: SpritesDefault
    home: SpritesDefault
    officialArtwork: SpritesDefault
  }

  type Sprites {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
    other: OtherSprites
  }

  type PokemonType {
    slot: Int
    type: BasePokemonEntity
  }

  type PokemonStat {
    base_stat: Int
    effort: Int
    stat: BasePokemonEntity
  }

  type Pokemon {
    id: ID
    name: String
    order: Int
    height: Int
    weight: Int
    sprites: Sprites
    types: [PokemonType]
    stats: PokemonStat
    base_experience: Int
    url: String
  }

  type PokemonList {
    count: Int
    next: String
    previous: String
    results: [BasePokemonEntity]!
  }

  type Query {
    pokemon(limit: Int, offset: Int): PokemonList
    pokemonByNameOrId(id: ID, name: String): Pokemon
  }
`;
