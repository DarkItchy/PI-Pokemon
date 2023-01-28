import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getPokemonDetail } from "../actions";
import { useEffect } from "react";
import Loader from "./Loader";

const PokemonDetail = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(props.match.params.id));
  }, [dispatch]);

  const pokemon = useSelector((state) => state.pokeDetail);

  const handleClick = (e) => {
    dispatch(clearDetail());
  };

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
          <h3>ID: {pokemon.id}</h3>
          <h2>Vida: {pokemon.hp}</h2>
          <h2>Ataque: {pokemon.atk}</h2>
          <h2>Defensa: {pokemon.def}</h2>
          <h2>Ataque especial: {pokemon.spatk}</h2>
          <h2>Defensa especial: {pokemon.spdef}</h2>
          <h2>Velocidad: {pokemon.speed}</h2>
          <h2>Altura: {pokemon.height}</h2>
          <h2>Peso: {pokemon.weight}</h2>
          <div>
            <h2>Tipos:</h2>
            {pokemon.types.map((t) => {
              const name = typeof t === "object" ? t.name : t;
              return <h2 key={name}>{name}</h2>;
            })}
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <Link to={"/home"}>
        <button onClick={(e) => handleClick(e)}>Regresar</button>
      </Link>
    </div>
  );
};

export default PokemonDetail;
