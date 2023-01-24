import React from "react";

const Paginated = ({ pokemonPerPage, allPokemon, paginated }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => paginated(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginated;
