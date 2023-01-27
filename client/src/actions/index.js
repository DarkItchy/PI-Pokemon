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

export const orderByAttack = (payload) => {
  return {
    type: "ORDER_BY_ATTACK",
    payload,
  };
};

export const getPokemonDetail = (id) => {
  return async (dispatch) => {
    const pokemonDetail = await axios.get(
      `http://localhost:3001/pokemons/${id}`
    );
    return dispatch({
      type: "GET_POKEMON_DETAIL",
      payload: pokemonDetail.data[0],
    });
  };
};

export const empty = () => {
  return {
    type: "EMPTY",
  };
};
