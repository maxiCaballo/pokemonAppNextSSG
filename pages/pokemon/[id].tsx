//React-Next-NextUi-Components-Api-Interfaces-Utils
import { useState, useEffect } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, Grid, Text, Container, Image } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { getPokemonById } from "../../api/pokemonApi";
import { isFavoritePokemon, toggleFavorite } from "../../utils/localFavorites";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);
  useEffect(() => {
    isFavoritePokemon(pokemon.id);
  }, [isInFavorites]);
  const onToggleFavorite = () => {
    toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
  };
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
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
      </Grid.Container>
    </Layout>
  );
};

//You should use getStaticPaths if you´re statically pre-rendering pages that use dynamic routes
//This function runs only at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const allPokemons: string[] = [...Array(151)].map(
    (value, index) => `${index + 1}`
  );
  return {
    paths: allPokemons.map((id) => ({
      params: { id },
    })),
    //if fallback was "blocking" next contemplate pages that are not preloaded
    //False throw 404 error if the page is not conteplate in the sv
    fallback: false,
  };
};

//This function runs after getStaticPaths and receives a context with all paths
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string }; //ctx = context

  const data = await getPokemonById(id);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
