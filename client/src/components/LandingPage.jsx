import React from "react";
import { Link } from "react-router-dom";
import "./css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <img
        src="https://fontmeme.com/permalink/230201/678f844963bccd6686d3df4154321aa3.png"
        alt="Bienvenida"
      />
      <Link to={"/home"}>
        <button className="pokeButton"></button>
      </Link>
    </div>
  );
};

export default LandingPage;
