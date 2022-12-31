import axios, { AxiosResponse, AxiosError } from "axios";
import { Pokemon, PokemonListResponse } from "../interfaces";

const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemonById = async (
  id: string
): Promise<Pokemon | AxiosError | any> => {
  try {
    const { data } = await pokemonApi.get<Pokemon>(`/pokemon/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
export const getAllPokemons = async (): Promise<
  PokemonListResponse | AxiosError | any
> => {
  try {
    const { data } = await pokemonApi.get<PokemonListResponse>(
      "/pokemon?limit=151"
    );
    return data;
  } catch (error) {
    return error;
  }
};
export const getPokemonByName = async (
  name: string
): Promise<Pokemon | AxiosError | any> => {
  try {
    const { data } = await pokemonApi.get<Pokemon>(`/pokemon/${name}`);
    return data;
  } catch (error) {
    return error;
  }
};

export default pokemonApi;
