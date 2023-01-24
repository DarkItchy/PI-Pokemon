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
