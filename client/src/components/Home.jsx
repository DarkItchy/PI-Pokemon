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
import "./css/Home.css";
import Cubone from "./Cubone";

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
    <div className="homeContainer">
      {allPokemon.length ? (
        <div>
          <div>
            <img
              src="https://fontmeme.com/permalink/230201/03019017c89b0f4e4e92e3b9f4ee56e8.png"
              alt="¡Atrapalos Ya!"
            />
          </div>
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
          <SearchBar setCurrentPage={setCurrentPage} />
          <Paginated
            pokemonPerPage={pokemonPerPage}
            allPokemon={pokeFilter.length}
            paginated={paginated}
          />
          <OptionBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
          <div className="cardsContainer">
            {error ? (
              <Cubone />
            ) : (
              currentPokemon?.map((p) => {
                return (
                  <Fragment key={p.name}>
                    <Link to={`pokemons/${p.id}`} style={{ textDecoration: 'none' }}>
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
