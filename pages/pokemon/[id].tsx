//React-Next-NextUi-Components-Api-Interfaces-Utils
import { useState, useEffect } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { PokemonImage, InfoCard } from "../../components/pokemon/pokemonPage";
import { Pokemon } from "../../interfaces";
import { getPokemonById } from "../../api/pokemonApi";
import { isFavoritePokemon, toggleFavorite } from "../../utils/localFavorites";
import confetti from "canvas-confetti";

//Interface
interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <PokemonImage pokemon={pokemon} />
        <InfoCard pokemon={pokemon} />
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
