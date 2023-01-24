const initialState = {
  pokemon: [],
  allPokemon: [],
};

const filterByType = (act, allP) => {
  act.payload === "All"
    ? allP
    : allP.filter((p) =>
        typeof p.types === "object"
          ? p.types === act.payload
          : p.types === act.payload
      );
};
const rootReducer = (state = initialState, action) => {
  const allPokemon = state.allPokemon;
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
        allPokemon: action.payload,
      };

    case "FILTER_BY_TYPE":
      const statusFiltered = filterByType(action, allPokemon);
      return {
        ...state,
        pokemon: statusFiltered
      };
    default:
      return state;
  }
};

export default rootReducer;
