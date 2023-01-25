import axios from "axios";

export const getPokemon = () => {
  return async function (dispatch) {
    const pokemon = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type: "GET_POKEMON",
      payload: pokemon.data,
    });
  };
};

export const filterByType = (payload) => {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
};

export const filterByCreated = (payload) => {
  return {
    type: "FILTER_BY_CREATED",
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
};

export const empty = () => {
  return {
    type: "EMPTY",
  };
};
