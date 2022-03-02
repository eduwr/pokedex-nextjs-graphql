import { BasePokemonEntity } from "./BasePokemonEntity";

export type PokemonTypes =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "ice"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

type SpritePrefix = "back" | "front";
type SpriteSuffix = "default" | "female" | "shiny" | "shiny_female";
type SpriteKeys = `${SpritePrefix}_${SpriteSuffix}`;

type SpritesDefault = Record<SpriteKeys, string>;

type OtherSpriteKeys =
  | "dream_world"
  | "home"
  | "official-artwork"
  | "officialArtwork"
  | "dreamWorld";

type Sprites = SpritesDefault & {
  other: Partial<Record<OtherSpriteKeys, Partial<SpritesDefault>>>;
};

interface PokemonType {
  slot: number;
  type: BasePokemonEntity<PokemonTypes>;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: BasePokemonEntity;
}

export interface Pokemon extends BasePokemonEntity {
  id: number;
  height: number;
  weight: number;
  sprites: Sprites;
  types: PokemonType[];
  stats: PokemonStat[];
  base_experience: number;
  name: string;
  order: number;
}
