import React from "react";
import { useDispatch } from "react-redux";
import {
  filterByCreated,
  filterByType,
  orderByAttack,
  orderByName,
} from "../actions";
import "./css/OptionBar.css";

const OptionBar = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleFilterByType = (e) => {
    dispatch(filterByType(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterByCreated = (e) => {
    dispatch(filterByCreated(e.target.value));
    setCurrentPage(1);
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
    <div className="optionBarContainer">
      <div className="orderContainer">
          <h3 className="tittle">Ordenar</h3>
        <div className="optionContainer">
          <select
            className="selectButton"
            value={""}
            onChange={(e) => handleOrderByName(e)}
            title="Alfabeticamente"
          >
            <option value={"SN"}>Alfabeticamente</option>
            <option value={"ASC"}>A-Z</option>
            <option value={"DES"}>Z-A</option>
          </select>
        </div>
        <div className="optionContainer">
          <select
            className="selectButton"
            value={""}
            onChange={(e) => handleOrderByAttack(e)}
            title="Ataque"
          >
            <option value={"SN"}>Ataque</option>
            <option value={"MAY"}>Mayor</option>
            <option value={"MEN"}>Menor</option>
          </select>
        </div>
      </div>
      <div className="filterContainer" >
        <h3 className="tittle">Filtrar</h3>
      <div className="optionContainer">
        <select
          className="selectButton"
          value={""}
          onChange={(e) => handleFilterByCreated(e)}
          title="Creado"
        >
          <option value={"SN"}>Origen</option>
          <option value={"All"}>Todos</option>
          <option value={"Api"}>Existentes</option>
          <option value={"Db"}>Creados</option>
        </select>
      </div>
      <div className="optionContainer">
        <select
          className="selectButton"
          value={""}
          onChange={(e) => handleFilterByType(e)}
          title="Tipo"
        >
          <option value={"SN"}>Tipo</option>
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
      </div>
    </div>
  );
};

export default OptionBar;
