import React from "react";
import colorTypes from "../colorTypes";

function PokemonCard({ pokemon }) {
  return (
    <div className="col-xs-12 col-md-6 col-lg-4">
      {!pokemon ? (
        <div>No existe un pokemon con ese nombre</div>
      ) : (
        <div className="card">
          <img
            className="card-img-top"
            src={
              pokemon.sprites && pokemon.sprites.other.dream_world.front_default
            }
            alt={pokemon.name}
          />
          <div className="card-header">
            <h3 className="card-title">
              {`#${("000" + pokemon.id).slice(-3)} ${
                pokemon.name &&
                pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)
              }`}
            </h3>
          </div>
          <div className="card-footer">
            <span
              style={{
                backgroundColor: colorTypes[pokemon.types[0].type.name],
              }}
            >
              {pokemon.types &&
                pokemon.types[0] &&
                pokemon.types[0].type.name.slice(0, 1).toUpperCase() +
                  pokemon.types[0].type.name.slice(1)}
            </span>
            <span
              style={{
                backgroundColor:
                  colorTypes[
                    pokemon.types &&
                      pokemon.types[1] &&
                      pokemon.types[1].type.name
                  ],
              }}
            >
              {pokemon.types && pokemon.types[1]
                ? pokemon.types[1].type.name.slice(0, 1).toUpperCase() +
                  pokemon.types[1].type.name.slice(1)
                : "---"}
            </span>
          </div>
          <div className="info text-center">
            <h4>
              Weight:{" "}
              {pokemon.weight && Math.round(pokemon.weight / 10) + " kg"}
            </h4>
            <h4>Height: {pokemon.height && pokemon.height * 10 + " cm"}</h4>
            <h4>HP: {pokemon.stats && pokemon.stats[0].base_stat}</h4>
            <h4>Attack: {pokemon.stats && pokemon.stats[1].base_stat}</h4>
            <h4>Defense: {pokemon.stats && pokemon.stats[2].base_stat}</h4>
            <h4>Speed: {pokemon.stats && pokemon.stats[5].base_stat}</h4>
            <h4>Moves: {pokemon.moves && pokemon.moves.length}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
