import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getPokemonDetail } from "../actions";
import { useEffect } from "react";
import Loader from "./Loader";
import "./css/PokemonDetail.css";

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
    <div className="detailContainer">
      {pokemon.name ? (
        <div className="dataContainer">
          <h1 className="name">Nombre: {pokemon.name}</h1>
          <div className="firstData">
          <img
            src={pokemon.img}
            alt="Imagen no encontrada"
            width={"200px"}
            height={"250px"}
          />
          <div>
            {pokemon.types.map((t) => {
              const name = typeof t === "object" ? t.name : t;
              return <h2 className="types" key={name}>{name}</h2>;
            })}
          </div>
          </div>
          <div className="statsContainer">
          <h3 className="stats">ID: {pokemon.id}</h3>
          <h2 className="stats">Vida: {pokemon.hp}</h2>
          <h2 className="stats">Ataque: {pokemon.atk}</h2>
          <h2 className="stats">Defensa: {pokemon.def}</h2>
          <h2 className="stats">Ataque especial: {pokemon.spatk}</h2>
          <h2 className="stats">Defensa especial: {pokemon.spdef}</h2>
          <h2 className="stats">Velocidad: {pokemon.speed}</h2>
          <h2 className="stats">Altura: {pokemon.height}</h2>
          <h2 className="stats">Peso: {pokemon.weight}</h2>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <Link to={"/home"}>
        <button className="buttonDetail" onClick={(e) => handleClick(e)}>Regresar</button>
      </Link>
    </div>
  );
};

export default PokemonDetail;
