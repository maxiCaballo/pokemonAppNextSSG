import { getPokemonByNameOrId } from "../api/pokemonApi";
import { Pokemon } from "../interfaces/iPokemonFull";

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { name, id, sprites }: Pokemon = await getPokemonByNameOrId(nameOrId);
    return {
      name,
      id,
      sprites,
    };
  } catch (error) {
    return null;
  }
};
