import React, { useState } from "react";
import logo from "../Media/logo.png";

function Navbar({ filterPokemon, setPokemon, setSearch }) {
  const [searchPokemon, setSearchPokemon] = useState("");

  const handleChange = (e) => {
    setSearchPokemon(e.target.value);
    if (e.target.value.length === 0) {
      filterPokemon(null);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await filterPokemon(searchPokemon);
    setPokemon(res.data);
    setSearch(true);
    setSearchPokemon("");
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="../../public/index.html">
            <img className="navbar-brand" src={logo} alt="logo" />
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search a Pokemon"
              value={searchPokemon}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
          </form>
          <a
            href="https://github.com/GabrielReisfeld/Desafio-Libgot"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
