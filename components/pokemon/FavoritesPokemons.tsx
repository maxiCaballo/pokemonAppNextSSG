import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

//Is not necesary recive the prop "pokemonsId" because they are in the local storage, but only for practice purpose we did it like this
interface Props {
  pokemonsId: number[];
}

export const FavoritesPokemons: FC<Props> = ({ pokemonsId }) => {
  return (
    <>
      we did it
      {pokemonsId.length && (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {pokemonsId.map((id) => (
            <FavoritePokemonCard key={id} pokemonId={id} />
          ))}
        </Grid.Container>
      )}
    </>
  );
};
