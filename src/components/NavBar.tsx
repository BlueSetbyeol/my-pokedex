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
  const handleNextClick = (pokeIndex) => {
    setPokemonIndex(pokeIndex);
  };

  return (
    <>
      {pokemonList.map((pokemon, pokeIndex) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => {
            pokemon.name !== "pikachu"
              ? handleNextClick(pokeIndex)
              : (handleNextClick(pokeIndex), alert("pika pikachu !!"));
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
