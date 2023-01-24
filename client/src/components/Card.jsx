import React from "react";

const Card = ({ img, name, types }) => {
  return (
    <div>
      <img
        src={img}
        alt="Imagen no encontrada"
        width={"200px"}
        height={"250px"}
      />
      <h3>{name}</h3>
      {types.map((t) => {
        const name = typeof t === "object" ? t.name : t;
        return <h5 key={name}>{name}</h5>;
      })}
    </div>
  );
};

export default Card;
