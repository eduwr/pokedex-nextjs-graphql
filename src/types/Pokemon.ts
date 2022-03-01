import { BasePokemonEntity } from "./BasePokemonEntity";

type SpritePrefix = "back" | "front";
type SpriteSuffix = "default" | "female" | "shiny" | "shiny_female";
type SpriteKeys = `${SpritePrefix}_${SpriteSuffix}`;

type SpritesDefault = Record<SpriteKeys, string>;

type OtherSpriteKeys = "dream_world" | "home" | "official-artwork";

type Sprites = SpritesDefault & {
  other: Record<OtherSpriteKeys, Partial<SpritesDefault>>;
};

interface PokemonType {
  slot: number;
  type: BasePokemonEntity;
}

interface PokemonStat {
  base_stat: number;
  effor: number;
  stat: BasePokemonEntity;
}

export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  sprites: Sprites;
  types: PokemonType[];
  stats: PokemonStat[];
  base_experience: number;
}
