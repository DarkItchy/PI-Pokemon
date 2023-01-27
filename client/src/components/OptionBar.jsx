import React from "react";
import { useDispatch } from "react-redux";
import {
  filterByCreated,
  filterByType,
  orderByAttack,
  orderByName,
} from "../actions";

const OptionBar = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleFilterByType = (e) => {
    dispatch(filterByType(e.target.value));
  };

  const handleFilterByCreated = (e) => {
    dispatch(filterByCreated(e.target.value));
  };

  const handleOrderByName = (e) => {
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  const handleOrderByAttack = (e) => {
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  };

  return (
    <div>
      <h3>Ordenar</h3>
      Alfabeticamente:
      <select
        value={""}
        onChange={(e) => handleOrderByName(e)}
        title="Alfabeticamente"
      >
        <option value={"SN"}>Ordenar</option>
        <option value={"ASC"}>A-Z</option>
        <option value={"DES"}>Z-A</option>
      </select>
      Ataque:
      <select
        value={""}
        onChange={(e) => handleOrderByAttack(e)}
        title="Ataque"
      >
        <option value={"SN"}>Ordenar</option>
        <option value={"MAY"}>Mayor</option>
        <option value={"MEN"}>Menor</option>
      </select>
      <h3>Filtrar</h3>
      Creado:
      <select onChange={(e) => handleFilterByCreated(e)} title="Creado">
        <option value={"All"}>Todos</option>
        <option value={"Api"}>Existentes</option>
        <option value={"Db"}>Creados</option>
      </select>
      Tipo:
      <select onChange={(e) => handleFilterByType(e)} title="Tipo">
        <option value={"All"}>Todos</option>
        <option value={"normal"}>Normal</option>
        <option value={"fighting"}>Pelea</option>
        <option value={"flying"}>Volador</option>
        <option value={"poison"}>Veneno</option>
        <option value={"ground"}>Tierra</option>
        <option value={"rock"}>Roca</option>
        <option value={"bug"}>Insecto</option>
        <option value={"ghost"}>Fantasma</option>
        <option value={"steel"}>Acero</option>
        <option value={"fire"}>Fuego</option>
        <option value={"water"}>Agua</option>
        <option value={"grass"}>Hierba</option>
        <option value={"electric"}>Electrico</option>
        <option value={"psychic"}>Psiquico</option>
        <option value={"ice"}>Hielo</option>
        <option value={"dragon"}>Dragon</option>
        <option value={"dark"}>Oscuro</option>
        <option value={"fairy"}>Hada</option>
        <option value={"unknown"}>Desconocido</option>
        <option value={"shadow"}>Sombra</option>
      </select>
    </div>
  );
};

export default OptionBar;
