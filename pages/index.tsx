//Next-NextUi-Layouts-Components-Interfaces-Api
import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonSmall, PokemonListResponse } from "../interfaces/iPokemonList";
import { getAllPokemons } from "../api/pokemonApi";

interface Props {
  pokemons: PokemonSmall[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  pokemons;
  return (
    <Layout title="Pokemon list">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get pokemons.
  // You can use any data fetching library
  const data: PokemonListResponse = await getAllPokemons();

  const pokemons: PokemonSmall[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  // By returning { props: { pokemons } }, the Blog component
  // will receive `pokemons` as a prop at build time
  return {
    props: {
      pokemons,
    },
  };
};
export default HomePage;
