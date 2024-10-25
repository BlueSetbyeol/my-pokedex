interface pokemon {
  name: string;
  imgSrc?: string;
  id: number;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: pokemon[];
}

export default function NavBar({
  pokemonIndex,
  setPokemonIndex,
  pokemonList,
}: NavBarProps) {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <button
          type="button"
          key={pokemon.id}
          onClick={() => {
            pokemon.name !== "pikachu"
              ? setPokemonIndex(pokemon.id)
              : (setPokemonIndex(pokemon.id), alert("pika pikachu !!"));
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
