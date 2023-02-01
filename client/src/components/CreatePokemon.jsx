import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes, empty } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validate/validate";
import "./css/CreatePokemon.css";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokeTypes);
  const pokemon = useSelector((state) => state.allPokemon);
  const history = useHistory();

  const [error, setError] = useState({
    name: "",
    hp: "",
    atk: "",
    def: "",
    spatk: "",
    spdef: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

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
    setError(validate({ ...input, [e.target.name]: e.target.value }, pokemon));
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
      setError(
        validate({ ...input, types: [...input.types, e.target.value] }, pokemon)
      );
    } else {
      setInput({
        ...input,
        types: input.types.filter(
          (c) => input.types.indexOf(c) !== input.types.indexOf(e.target.value)
        ),
      });
      setError(
        validate(
          {
            ...input,
            types: input.types.filter(
              (c) =>
                input.types.indexOf(c) !== input.types.indexOf(e.target.value)
            ),
          },
          pokemon
        )
      );
    }
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
    <div className="createPokemonContainer">
      <Link to={"/home"}>
        <button className="buttonBack">Regresar</button>
      </Link>
      <img
        className="img"
        src="https://fontmeme.com/permalink/230201/af944febd0bb0722310f90e0725d11e2.png"
        alt="Algo"
      />
      <div className="formContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form" >
          <div>
            <label className="formLabel">Nombre:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder="Nombremon"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="formLabel">Vida:</label>
            <input
              type="number"
              value={input.hp}
              name="hp"
              placeholder="1-255"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="formLabel">Ataque:</label>
            <input
              type="number"
              value={input.atk}
              name="atk"
              placeholder="5-190"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="formLabel">Defensa:</label>
            <input
              type="number"
              value={input.def}
              name="def"
              placeholder="5-250"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="formLabel">Ataque especial:</label>
            <input
              type="number"
              value={input.spatk}
              name="spatk"
              placeholder="10-165"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="formLabel">Defensa especial:</label>
            <input
              type="number"
              value={input.spdef}
              name="spdef"
              placeholder="20-250"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="formLabel">Velocidad:</label>
            <input
              type="number"
              value={input.speed}
              name="speed"
              placeholder="5-200"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="formLabel">Altura(dm):</label>
            <input
              type="number"
              value={input.height}
              name="height"
              placeholder="1-200"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="formLabel">Peso(hg):</label>
            <input
              type="number"
              value={input.weight}
              name="weight"
              placeholder="1-1000"
              required
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="formLabel">Apariencia:</label>
            <input
              type="text"
              value={input.img}
              name="img"
              placeholder="URL de la imagen"
              onChange={handleChange}
            />
          </div>
          </div>
          <h3 className="typesTittle">Tipos:</h3>
          <div className="typesCreate">
            {types.map((t) => (
              <div className="typeCreate" key={t.id}>
                <label >{t.name}</label>
                <input
                  type={"checkbox"}
                  value={t.name}
                  name={t.name}
                  onChange={(e) => handleCheck(e)}
                />
              </div>
            ))}
          </div>
          <div>
          {error.name && <p className="pStyled">{error.name}</p>}
          {error.hp && <p className="pStyled">{error.hp}</p>}
          {error.atk && <p className="pStyled">{error.atk}</p>}
          {error.def && <p className="pStyled">{error.def}</p>}
          {error.spatk && <p className="pStyled">{error.spatk}</p>}
          {error.spdef && <p className="pStyled">{error.spdef}</p>}
          {error.speed && <p className="pStyled">{error.speed}</p>}
          {error.height && <p className="pStyled">{error.height}</p>}
          {error.weight && <p className="pStyled">{error.weight}</p>}
          {error.types && <p className="pStyled">{error.types}</p>}
          </div>
          <button
          className="submitButton"
            type="submit"
            disabled={
              // !input.name ||
              // !input.hp ||
              // !input.atk ||
              // !input.def ||
              // !input.spatk ||
              // !input.spdef ||
              // !input.speed ||
              // !input.height ||
              // !input.weight ||
              error.name ||
              error.hp ||
              error.atk ||
              error.def ||
              error.spatk ||
              error.spdef ||
              error.speed ||
              error.height ||
              error.weight ||
              error.types
            }
          >
            Registrar Pokemon
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePokemon;
