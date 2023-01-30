import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes, empty } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokeTypes);
  const history = useHistory();

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

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    } else
      setInput({
        ...input,
        types: input.types.filter(
          (c) => input.types.indexOf(c) !== input.types.indexOf(e.target.value)
        ),
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(postPokemon(input));
    alert("Pokemon registrado con exito");
    setInput({
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
    dispatch(empty());
    history.push("/home");
  };

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return (
    <div>
      <Link to={"/home"}>
        <button>Regresar</button>
      </Link>
      <h1>Registra el nuevo Pokemon descubierto</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Vida:</label>
          <input
            type="number"
            value={input.hp}
            name="hp"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ataque:</label>
          <input
            type="number"
            value={input.atk}
            name="atk"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Defensa:</label>
          <input
            type="number"
            value={input.def}
            name="def"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ataque especial:</label>
          <input
            type="number"
            value={input.spatk}
            name="spatk"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Defensa especial:</label>
          <input
            type="number"
            value={input.spdef}
            name="spdef"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Velocidad:</label>
          <input
            type="number"
            value={input.speed}
            name="speed"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Altura:</label>
          <input
            type="number"
            value={input.height}
            name="height"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Peso:</label>
          <input
            type="number"
            value={input.weight}
            name="weight"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apariencia:</label>
          <input
            type="text"
            value={input.img}
            name="img"
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Tipos:</h3>
          {types.map((t) => (
            <div key={t.id}>
              <label>{t.name}</label>
              <input
                type={"checkbox"}
                value={t.name}
                name={t.name}
                onChange={(e) => handleCheck(e)}
              />
            </div>
          ))}
          <button type="submit">Registrar Pokemon</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePokemon;
