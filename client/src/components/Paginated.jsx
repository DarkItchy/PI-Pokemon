import React from "react";
import "./css/Paginated.css";

const Paginated = ({ pokemonPerPage, allPokemon, paginated, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginatedContainer">
      <div className="paginatedButtonContainer">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button
              className={
                currentPage !== number ? "paginatedButton" : "buttonSelect"
              }
              key={number}
              onClick={() => paginated(number)}
            ></button>
          ))}
      </div>
    </div>
  );
};

export default Paginated;
