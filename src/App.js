import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar";
import PokemonCards from "./Components/PokemonCards";
import Pages from "./Components/Pages";
import PokemonCard from "./Components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15"
  );
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [search, setSearch] = useState(false);

  const filterPokemon = async (pokemon) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemons = async () => {
    try {
      const res = await axios.get(currentPage);
      setPokemons(res.data.results);
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const clickNextPage = () => {
    setCurrentPage(nextPage);
  };
  const clickPreviousPage = () => {
    setCurrentPage(previousPage);
  };

  return (
    <div className="App">
      <Navbar
        filterPokemon={filterPokemon}
        setPokemon={setPokemon}
        setSearch={setSearch}
      />
      <div className="container">
        <div className="row">
          {search ? (
            <PokemonCard pokemon={pokemon} />
          ) : (
            <>
              {pokemons.map((p) => (
                <PokemonCards p={p} key={p.name} />
              ))}
              <Pages
                clickNextPage={nextPage ? clickNextPage : null}
                clickPreviousPage={previousPage ? clickPreviousPage : null}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
