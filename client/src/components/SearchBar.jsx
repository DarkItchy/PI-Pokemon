import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    let name = [];
    e.target.value.split("  ").map((el) => name.push(el));
    name = name.join(" ").trimStart();
    setSearch(name);
    dispatch(getPokemonByName(name));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(search));
    setSearch("");
  };

  return (
    <form onSubmit={(e) => handleClick(e)}>
      <input
        type="text"
        value={search}
        placeholder="Buscar Pokemon"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
