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
    setPokemonIndex(pokemonIndex + 1);
  };
  const handlePreviousClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <>
      {pokemonIndex > 0 ? (
        <button type="button" onClick={handlePreviousClick}>
          Précédent
        </button>
      ) : (
        <></>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleNextClick}>
          Suivant
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
