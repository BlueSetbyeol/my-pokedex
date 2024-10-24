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
  //   const handlePreviousClick = () => {
  //     setPokemonIndex(pokemonIndex - 1);
  //   };

  return (
    <>
      {pokemonList.map((pokemon, pokeIndex) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => handleNextClick(pokeIndex)}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
