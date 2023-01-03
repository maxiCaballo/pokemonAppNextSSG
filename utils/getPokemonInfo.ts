import { getPokemonByNameOrId } from "../api/pokemonApi";

export const getPokemonInfo = async (nameOrId: string) => {
  const { name, id, sprites } = await getPokemonByNameOrId(nameOrId);
  return {
    name,
    id,
    sprites,
  };
};
