//React
import React, { FC, ReactElement } from "react";
//Next
import Head from "next/head";
//UI
import { Navbar } from "../ui";

type Props = {
  children?: ReactElement;
  title?: string | undefined;
};
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Maximiliano Caballo" />
        <meta
          name="description"
          content="Información sobre el pokémon PokemonName"
        />
        <meta name="keywords" content="PokemonName, pokemon, pokedex," />
      </Head>
      {<Navbar />}
      <main>{children}</main>
    </>
  );
};
