import React from "react";
import "./css/Card.css"

const Card = ({ img, name, types }) => {
  return (
    <div className="card">
      <img className="cardImg"
        src={img}
        alt="Imagen no encontrada"
      />
      <h3 className="pokeName">{name}</h3>
      <div className="typesContainer">
      {types.map((t) => {
        const name = typeof t === "object" ? t.name : t;
        return <h5 className="type" key={name}>{name}</h5>;
      })}
      </div>
    </div>
  );
};

export default Card;
