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
        <option value={"1"}>Normal</option>
        <option value={"2"}>Pelea</option>
        <option value={"3"}>Volador</option>
        <option value={"4"}>Veneno</option>
        <option value={"5"}>Tierra</option>
        <option value={"6"}>Roca</option>
        <option value={"7"}>Insecto</option>
        <option value={"8"}>Fantasma</option>
        <option value={"9"}>Acero</option>
        <option value={"10"}>Fuego</option>
        <option value={"11"}>Agua</option>
        <option value={"12"}>Hierba</option>
        <option value={"13"}>Electrico</option>
        <option value={"14"}>Psiquico</option>
        <option value={"15"}>Hielo</option>
        <option value={"16"}>Dragon</option>
        <option value={"17"}>Oscuro</option>
        <option value={"18"}>Hada</option>
        <option value={"19"}>Desconocido</option>
        <option value={"20"}>Sombra</option>
      </select>
    </div>
  );
};

export default OptionBar;
