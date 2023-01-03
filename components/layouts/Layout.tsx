//React
import React, { FC, ReactElement, useEffect, useRef } from "react";
//Next
import Head from "next/head";
//UI
import { Navbar } from "../ui";

type Props = {
  children?: ReactElement;
  title?: string | undefined;
};

export const Layout: FC<Props> = ({ children, title }) => {
  let originRef = useRef<string>();
  useEffect(() => {
    window.location.origin === "undefined"
      ? (originRef.current = "")
      : (originRef.current = window.location.origin);
    console.log(originRef.current);
  }, []);
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
        <meta property="og:title" content={`${title} page`} />
        <meta
          property="og:description"
          content={`This is a page with some info about ${title}`}
        />
        <meta property="og:image" content={`${originRef}/img/banner.png`} />
      </Head>
      {<Navbar />}
      <main>{children}</main>
    </>
  );
};
