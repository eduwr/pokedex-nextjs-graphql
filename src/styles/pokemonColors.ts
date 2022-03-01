import { PokemonTypes } from "types/Pokemon";

class PokemonColors {
  pokemonColor: Record<PokemonTypes, string> = {
    bug: "#BFDE00",
    dark: "#383024",
    dragon: "#5200FF",
    electric: "#ECEC01",
    fairy: "#FFA8EC",
    fighting: "#FF0000",
    fire: "#FF8B49",
    flying: "#9B8BFF",
    grass: "#00D909",
    ground: "#D0A35F",
    ice: "#00FFF0",
    normal: "#A68F6E",
    poison: "#8F00FF",
    psychic: "#C10097",
    rock: "#8D4E2A",
    shadow: "#4839A7",
    steel: "#B9D0DA",
    water: "#00A3FF",
    unknown: "#A3A3A3",
    ghost: "#9084D7",
  };

  getPokemonColors(types: PokemonTypes[]) {
    return types.map((type) => this.pokemonColor[type]);
  }
}

export const pokemonColors = new PokemonColors();
