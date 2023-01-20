const initialState = {
  pokemon: [],
  allPokemon: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
        allPokemon: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
