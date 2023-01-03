import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../../../components/layouts";
import {
  PokemonImage,
  InfoCard,
} from "../../../components/pokemon/pokemonPage";
import { getAllPokemons } from "../../../api/pokemonApi";
import { PokemonListResponse } from "../../../interfaces/iPokemonList";
import { Pokemon } from "../../../interfaces/iPokemonFull";
import { getPokemonInfo } from "../../../utils/getPokemonInfo";

//Interface
interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: FC<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <PokemonImage pokemon={pokemon} />
        <InfoCard pokemon={pokemon} />
      </Grid.Container>
    </Layout>
  );
};
export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: PokemonListResponse = await getAllPokemons();

  return {
    paths: data.results.map((pokemon, value) => ({
      params: {
        name: pokemon.name,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };

  const pokemon = await getPokemonInfo(name);
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400, //60*60*24
  };
};
