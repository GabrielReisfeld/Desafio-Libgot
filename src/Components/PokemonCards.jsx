import React, { useEffect, useState } from "react";
import axios from "axios";

function PokemonCards({ p }) {
  const [poke, setPoke] = useState("");
  const [loadingPokemons, setLoadingPokemons] = useState(true);

  const getPokemon = async () => {
    try {
      setLoadingPokemons(true);
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + p.name
      );
      setPoke(res.data);
      setLoadingPokemons(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p]);

  return (
    <div className="col-xs-12 col-md-6 col-lg-4">
      {loadingPokemons ? (
        <div>CARGANDO</div>
      ) : (
        <div className="card">
          <img
            className="card-img-top"
            src={poke.sprites && poke.sprites.other.dream_world.front_default}
            alt={poke.name}
          />
          <div className="card-header">
            <h3 className="card-title">
              {`#${("000" + poke.id).slice(-3)} ${
                poke.name &&
                poke.name.slice(0, 1).toUpperCase() + poke.name.slice(1)
              }`}
            </h3>
          </div>
          <div className="card-footer">
            <span>
              {poke.types &&
                poke.types[0] &&
                poke.types[0].type.name.slice(0, 1).toUpperCase() +
                  poke.types[0].type.name.slice(1)}
            </span>
            <span>
              {poke.types && poke.types[1]
                ? poke.types[1].type.name.slice(0, 1).toUpperCase() +
                  poke.types[1].type.name.slice(1)
                : "---"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCards;
