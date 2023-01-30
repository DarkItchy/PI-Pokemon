import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { empty, getPokemon } from "../actions";
import OptionBar from "./OptionBar";
import Card from "./Card";
import Paginated from "./Paginated";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.allPokemon);
  const pokeFilter = useSelector((state) => state.pokeFilter);
  const error = useSelector((state) => state.error);

  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(12);
  const lastPokemon = currentPage * pokemonPerPage;
  const firstPokemon = lastPokemon - pokemonPerPage;
  const currentPokemon = pokeFilter.slice(firstPokemon, lastPokemon);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (allPokemon.length === 0) dispatch(getPokemon());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(empty());
    dispatch(getPokemon());
  };

  const clear = (e) => {
    dispatch(empty());
  };

  return (
    <div>
      {allPokemon.length ? (
        <div>
          <h1>Escoge tu Pokemón</h1>
          <Link to={"/"}>
            <button
              onClick={(e) => {
                clear(e);
              }}
            >
              Pantalla principal
            </button>
          </Link>
          <Link to={"/createPokemon"}>
            <button>Registrar nuevo Pokemón</button>
          </Link>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Cargar todos los Pokemón
          </button>
          <SearchBar />
          <Paginated
            pokemonPerPage={pokemonPerPage}
            allPokemon={pokeFilter.length}
            paginated={paginated}
          />
          <OptionBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
          <div className="cardsContainer">
            {error ? (
              <div className="cubone">
                <h2>No se encontraron coincidencias</h2>
                <img
                  src={
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e6c39c7-7710-4e4b-a7b4-8ab11887e367/d3e9aqo-c90d99f9-a88b-4dda-99f6-9cfc356e8324.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlNmMzOWM3LTc3MTAtNGU0Yi1hN2I0LThhYjExODg3ZTM2N1wvZDNlOWFxby1jOTBkOTlmOS1hODhiLTRkZGEtOTlmNi05Y2ZjMzU2ZTgzMjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9hnGVhCl3W3NZMwJ1y2GkfJZLwnOM2cbYBOzRUFkgJE"
                  }
                  alt="imagen"
                  width={"200px"}
                />
              </div>
            ) : (
              currentPokemon?.map((p) => {
                return (
                  <Fragment key={p.name}>
                    <Link to={`pokemons/${p.id}`}>
                      <Card img={p.img} name={p.name} types={p.types} />
                    </Link>
                  </Fragment>
                );
              })
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
