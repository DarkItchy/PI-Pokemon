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
const filterType = (act, allP) => {
  return act.payload === "All"
    ? allP
    : allP.filter((p) => {
        const type = typesNames(p);
        const filterParam = type.includes(act.payload);
        return filterParam;
      });
};

const filterCreated = (act, allP) => {
  if (act.payload === "All") return allP;
  else if (act.payload === "Db") return allP.filter((p) => p.createdInDb);
  else if (act.payload === "Api") return allP.filter((p) => !p.createdInDb);
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
        return{
          ...state,
        }

    case "EMPTY":
      return {
        ...state,
        pokemon: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
