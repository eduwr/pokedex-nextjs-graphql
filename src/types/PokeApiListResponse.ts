import { BasePokemonEntity } from "./BasePokemonEntity";

export interface PokeApiList<T = BasePokemonEntity[]> {
  results: T;
  count: number;
  next: string;
  previous: string;
}
