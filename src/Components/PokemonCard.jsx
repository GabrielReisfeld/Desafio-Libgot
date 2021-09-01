import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="col-4">
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
            <span>
              {pokemon.types &&
                pokemon.types[0] &&
                pokemon.types[0].type.name.slice(0, 1).toUpperCase() +
                  pokemon.types[0].type.name.slice(1)}
            </span>
            <span>
              {pokemon.types && pokemon.types[1]
                ? pokemon.types[1].type.name.slice(0, 1).toUpperCase() +
                  pokemon.types[1].type.name.slice(1)
                : "---"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
