import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../actions";
import "./css/SearchBar.css"

const SearchBar = ({setCurrentPage}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    let name = [];
    e.target.value.split("  ").map((el) => name.push(el));
    name = name.join(" ").trimStart();
    setSearch(name);
    dispatch(getPokemonByName(name.toLowerCase()));
    setCurrentPage(1)
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(search));
    setSearch("");
    setCurrentPage(1)
  };

  return (
    <div className="searchBarContainer">
    <form onSubmit={(e) => handleClick(e)}>
      <input
      className="input"
        type="text"
        value={search}
        placeholder="Buscar Pokemon"
        onChange={(e) => handleChange(e)}
      />
      <button className="searchButton" type="submit">Buscar</button>
    </form>
    </div>
  );
};

export default SearchBar;
