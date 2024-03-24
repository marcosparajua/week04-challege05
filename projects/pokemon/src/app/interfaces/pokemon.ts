export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResults {
  count: number;
  next: string;
  previous?: string;
  results: Pokemon[];
}

export type PokeAvatar = {
  sprites: {
    front_default: string;
  };
};
export interface PokeImg {
  sprites: {
    front_default: string;
    resultImages: PokeAvatar[];
  };
}
