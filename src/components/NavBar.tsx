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

export default function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  const handleClick = (element: pokemon) => {
    setPokemonIndex(element.id);
    if (element.name === "pikachu") {
      alert("pika pikachu !!");
    }
  };
  return (
    <>
      {pokemonList.map((pokemon) => (
        <button
          type="button"
          key={pokemon.id}
          onClick={() => handleClick(pokemon)}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
