// Generated by https://quicktype.io

export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonSmall[];
}

export interface PokemonSmall {
  name: string;
  url: string;
  id: number;
  img: string;
}