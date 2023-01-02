export const toggleFavorite = (id: number): void => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites.splice(favorites.indexOf(id, 1));
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
export const isFavoritePokemon = (id: number): boolean => {
  //This is a way to run this function in the client side, or we can use a useEffect in the component.
  //if (typeof window === "undefined") return false;
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites.includes(id);
};
export const favoritesPokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};
