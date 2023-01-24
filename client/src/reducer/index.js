const initialState = {
  pokemon: [],
  allPokemon: [],
  pokeFilter: [],
  pokeDetail: {},
  pokeTypes: [],
  error: false,
};

const typesNames = (p) => {
  return p.types.map((t) => {
    const name = typeof t === "object" ? t.name : t;
    return name;
  });
};
const filterByType = (act, allP) => {
  return act.payload === "All"
    ? allP
    : allP.filter((p) => {
        const type = typesNames(p);
        const filterParam = type.includes(act.payload);
        return filterParam;
      });
};

const rootReducer = (state = initialState, action) => {
  const allPokemon = state.allPokemon;
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
        allPokemon: action.payload,
        pokeFilter: action.payload,
        error: false,
      };

    case "FILTER_BY_TYPE":
      const statusFiltered = filterByType(action, allPokemon);
      return {
        ...state,
        pokeFilter: statusFiltered,
        error: !statusFiltered.length ? true : false,
      };
    default:
      return state;
  }
};

export default rootReducer;
