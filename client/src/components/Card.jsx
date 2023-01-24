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
        return (
          <h5 key={t}>{typeof t === "object" ? `${t.name}\n` : `${t}\n`}</h5>
        );
      })}
    </div>
  );
};

export default Card;
