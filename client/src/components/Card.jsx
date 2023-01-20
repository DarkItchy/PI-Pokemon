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
      <h5>{types.map((t) => (typeof t === "object" ? `${t.name}\n` : t))}</h5>
    </div>
  );
};

export default Card;
