import React, { useEffect, useState } from "react";
import axios from "axios";
import colorTypes from "../colorTypes";

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
        <div className="text-center">CARGANDO</div>
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
            <span
              style={{ backgroundColor: colorTypes[poke.types[0].type.name] }}
            >
              {poke.types &&
                poke.types[0] &&
                poke.types[0].type.name.slice(0, 1).toUpperCase() +
                  poke.types[0].type.name.slice(1)}
            </span>
            <span
              style={{
                backgroundColor:
                  colorTypes[
                    poke.types && poke.types[1] && poke.types[1].type.name
                  ],
              }}
            >
              {poke.types && poke.types[1]
                ? poke.types[1].type.name.slice(0, 1).toUpperCase() +
                  poke.types[1].type.name.slice(1)
                : "---"}
            </span>
          </div>
          <div className="info text-center">
            <h4>
              Weight: {poke.weight && Math.round(poke.weight / 10) + " kg"}
            </h4>
            <h4>Height: {poke.height && poke.height * 10 + " cm"}</h4>
            <h4>HP: {poke.stats && poke.stats[0].base_stat}</h4>
            <h4>Attack: {poke.stats && poke.stats[1].base_stat}</h4>
            <h4>Defense: {poke.stats && poke.stats[2].base_stat}</h4>
            <h4>Speed: {poke.stats && poke.stats[5].base_stat}</h4>
            <h4>Moves: {poke.moves && poke.moves.length}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCards;
