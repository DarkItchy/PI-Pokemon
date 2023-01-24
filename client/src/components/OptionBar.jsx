import React from "react";
import { useDispatch } from "react-redux";

const OptionBar = () => {
  return (
    <div>
      <h3>Ordenar</h3>
      Alfabeticamente:
      <select title="Alfabeticamente">
        <option value={"ASC"}>A-Z</option>
        <option value={"DES"}>Z-A</option>
      </select>
      Ataque:
      <select title="Ataque">
        <option value={"MAY"}>Mayor</option>
        <option value={"MEN"}>Menor</option>
      </select>
      <h3>Filtrar</h3>
      Creado:
      <select title="Creado">
        <option value={"ALL"}>Todos</option>
        <option value={"Existent"}>Existentes</option>
        <option value={"Created"}>Creados</option>
      </select>
      Tipo:
      <select title="Tipo">
        <option value={"ALL"}>Todos</option>
        <option value={"Normal"}>Normal</option>
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
