interface pokemon {
  name: string;
  imgSrc?: string;
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
  const handleNextClick = () => {
    setPokemonIndex(pokemon.id);
  };

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
