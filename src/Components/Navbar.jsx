import React, { useState } from "react";
import logo from "../Media/logo.png";
import Swal from "sweetalert2";

function Navbar({ filterPokemon, setPokemon, setSearch }) {
  const [searchPokemon, setSearchPokemon] = useState("");

  const handleChange = (e) => {
    setSearchPokemon(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await filterPokemon(searchPokemon.toLowerCase());
    if (res !== undefined) {
      setPokemon(res.data);
      setSearch(true);
      setSearchPokemon("");
    } else {
      Swal.fire({
        title: "Error!",
        text: "No existe un pokemon con ese nombre o id",
        icon: "warning",
        iconColor: "red",
        confirmButtonText: "Cerrar",
      });
    }
  };
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <button onClick={refreshPage} className="btnLogo">
            <img className="navbar-brand" src={logo} alt="logo" />
          </button>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search a Pokemon by Name or Id"
              value={searchPokemon}
              onChange={handleChange}
              size="32"
              required
            />
            <button className="btn btn-success">Search</button>
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
