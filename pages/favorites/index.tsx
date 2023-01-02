import { useState, useEffect } from "react";
import { Layout } from "../../components/layouts/Layout";
import { NoFavorites } from "../../components/ui/NoFavorites";
import { favoritesPokemons } from "../../utils/localFavorites";
import { FavoritesPokemons } from "../../components/pokemon";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(favoritesPokemons());
  }, []);

  return (
    <Layout title="Favorite">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemonsId={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
