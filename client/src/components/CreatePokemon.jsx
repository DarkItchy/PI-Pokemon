import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postPokemon, getTypes } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokeTypes);

  const [input, setInput] = useState({
    name: "",
    hp: "",
    atk: "",
    def: "",
    spatk: "",
    spdef: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return (
    <div>
      <Link to={"/home"}>
        <button>Regresar</button>
      </Link>
      <h1>Registra el nuevo Pokemon que acabas de descubrir</h1>
      <form action="">
        <div>
          <label>Nombre:</label>
          <input type="text" value={input.name} name="name" />
        </div>
        <div>
          <label>Vida:</label>
          <input type="number" value={input.hp} name="hp" />
        </div>
        <div>
          <label>Ataque:</label>
          <input type="number" value={input.atk} name="atk" />
        </div>
        <div>
          <label>Defensa:</label>
          <input type="number" value={input.def} name="def" />
        </div>
        <div>
          <label>Ataque especial:</label>
          <input type="number" value={input.spatk} name="spatk" />
        </div>
        <div>
          <label>Defensa especial:</label>
          <input type="number" value={input.spdef} name="spdef" />
        </div>
        <div>
          <label>Velocidad:</label>
          <input type="number" value={input.speed} name="speed" />
        </div>
        <div>
          <label>Altura:</label>
          <input type="number" value={input.height} name="height" />
        </div>
        <div>
          <label>Peso:</label>
          <input type="number" value={input.weight} name="weight" />
        </div>
        <div>
          <label>Apariencia:</label>
          <input type="number" value={input.img} name="img" />
        </div>
        <div>
          <label>Tipos:</label>
          <input type="checkbox" value={input.types} name="types" />
        </div>
      </form>
    </div>
  );
};  

export default CreatePokemon;
