import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemon } from "../actions";
import OptionBar from "./OptionBar";
import Card from "./Card"

const Home = () => {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemon());
  };

  return (
    <div>
      <h1>Escoge tu Pokemón</h1>
      <Link to={"/createPokemon"}>Crear Pokemón</Link>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Cargar todos los Pokemón
      </button>
      <OptionBar />
      {allPokemon?.map( p => {
        return (
          <Fragment key={p.name}>
            <Link to={`/${p.name}`}>
            <Card img={p.img} name={p.name} types={p.types}/>
            </Link>
          </Fragment>
        )
      })}
    </div>
  );
};

export default Home;
