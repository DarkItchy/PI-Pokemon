import axios from "axios";

export const getPokemon = () => {
  return async function (dispatch) {
    try {
      const pokemon = await axios.get("http://localhost:3001/pokemons");
      return dispatch({
        type: "GET_POKEMON",
        payload: pokemon.data,
      });
    } catch (e) {
      console.log(e, "Error al traer todos los Pokemon del back");
    }
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
    try {
      const pokemonDetail = await axios.get(
        `http://localhost:3001/pokemons/${id}`
      );
      return dispatch({
        type: "GET_POKEMON_DETAIL",
        payload: pokemonDetail.data[0],
      });
    } catch (e) {
      console.log(e, "Error al traer el detalle del Pokemon del back");
    }
  };
};

export const getPokemonByName = (name) => {
  return {
    type: "GET_POKEMON_BY_NAME",
    payload: name,
  };
};

// export const getPokemonByName = (name) => {
//   return async (dispatch) => {
//     try {
//       const pokemonName = await axios.get(
//         `http://localhost:3001/pokemons?name=${name}`
//       );
//       return dispatch({
//         type: "GET_POKEMON_BY_NAME",
//         payload: pokemonName.data,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };
// };

export const getTypes = () => {
  return async (dispatch) => {
    try {
      const types = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: "GET_TYPES",
        payload: types.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const postPokemon = (payload) => {
  try {
    return async (dispatch) => {
      const crear = axios.post("http://localhost:3001/pokemons", payload);
      return crear;
    };
  } catch (e) {
    console.log(e, "Error en la acción de crear al personaje");
  }
};

export const empty = () => {
  return {
    type: "EMPTY",
  };
};

export const clearDetail = () => {
  return {
    type: "CLEAR_DETAIL",
  };
};
