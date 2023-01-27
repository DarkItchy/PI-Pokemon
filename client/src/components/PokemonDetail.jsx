import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../actions";
import { useEffect } from "react";

const PokemonDetail = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(props.match.params.id));
  }, [dispatch]);

  const pokemon = useSelector((state) => state.pokeDetail);
  console.log(pokemon)
  return (
    <div>
      {pokemon.name ? (
        <div>
          <h1>Nombre: {pokemon.name}</h1>
          <img
            src={pokemon.img}
            alt="Imagen no encontrada"
            width={"200px"}
            height={"250px"}
          />
          <h3>{pokemon.id}</h3>
          <h2>{pokemon.hp}</h2>
          <h2>{pokemon.atk}</h2>
          <h2>{pokemon.def}</h2>
          <h2>{pokemon.spatk}</h2>
          <h2>{pokemon.spdef}</h2>
          <h2>{pokemon.speed}</h2>
          <h2>{pokemon.height}</h2>
          <h2>{pokemon.weight}</h2>
          <h2>{pokemon.types}</h2>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <Link to={"/home"}>
        <button>Regresar</button>
      </Link>
    </div>
  );
};

export default PokemonDetail;
