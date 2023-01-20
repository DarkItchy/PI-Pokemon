import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>Bienvenidos a la Pokedex de la región Hoen</h1>
      <Link to={"/home"}>
        <button>Ver a los Pokemón</button>
      </Link>
    </div>
  );
};

export default LandingPage;
