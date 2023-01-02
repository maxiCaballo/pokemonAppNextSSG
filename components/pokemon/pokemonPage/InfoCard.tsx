import React, { FC, useState, useEffect } from "react";
import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import { isFavoritePokemon, toggleFavorite } from "../../../utils";
import { Pokemon } from "../../../interfaces";
import confetti from "canvas-confetti";

interface Props {
  pokemon: Pokemon;
}

export const InfoCard: FC<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(isFavoritePokemon(pokemon.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInFavorites]);

  const onToggleFavorite = () => {
    toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };
  return (
    <Grid xs={12} sm={8}>
      <Card>
        <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
          <Text h1 transform="capitalize">
            {pokemon.name}
          </Text>
          <Button
            color="gradient"
            ghost={!isInFavorites}
            onClick={onToggleFavorite}
          >
            {!isInFavorites ? "Save to favorites" : "Favorites"}
          </Button>
        </Card.Header>
        <Card.Body>
          <Text size={30}>Sprites:</Text>
          <Container display="flex" direction="row">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          </Container>
        </Card.Body>
      </Card>
    </Grid>
  );
};
