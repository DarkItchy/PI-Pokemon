import { filterType, filterCreated, orderName, orderAttack } from "./Utils";
const initialState = {
  pokemon: [],
  allPokemon: [],
  pokeFilter: [],
  pokeDetail: {},
  pokeTypes: [],
  error: false,
};

const rootReducer = (state = initialState, action) => {
  const allPokemon = state.allPokemon;
  const pokemon = state.pokeFilter;
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
        allPokemon: action.payload,
        pokeFilter: action.payload,
      };

    case "FILTER_BY_TYPE":
      const statusFilteredT = filterType(action, allPokemon);
      return {
        ...state,
        pokeFilter: statusFilteredT,
        error: !statusFilteredT.length ? true : false,
      };

    case "FILTER_BY_CREATED":
      const statusFilteredC = filterCreated(action, allPokemon);
      return {
        ...state,
        pokeFilter: statusFilteredC,
        error: !statusFilteredC.length ? true : false,
      };

    case "ORDER_BY_NAME":
      const statusOrderedN = orderName(action, pokemon);
      return {
        ...state,
        pokeFilter: statusOrderedN,
      };

    case "ORDER_BY_ATTACK":
      const statusOrderedA = orderAttack(action, pokemon);
      return {
        ...state,
        pokeFilter: statusOrderedA,
      };

    case "GET_POKEMON_DETAIL":
      return {
        ...state,
        pokeDetail: { ...action.payload },
      };

    case "EMPTY":
      return {
        ...state,
        pokemon: [],
        allPokemon: [],
        pokeFilter: [],
        pokeDetail: {},
        pokeTypes: [],
        error: false,
      };

    case "CLEAR_DETAIL":
      return {
        ...state,
        pokeDetail: {},
      };
    default:
      return state;
  }
};

export default rootReducer;
