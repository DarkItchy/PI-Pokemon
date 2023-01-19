const { allInfo } = require("./getInfo");

const filterByName = async (name) => {
  try {
    const allPokemon = await allInfo();
    if (name) {
      const pokemonByName = allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name)
      );
      if (pokemonByName.length) return pokemonByName;
      else return "No se encuentra un Pokemón con ese nombre";
    } else return allPokemon;
  } catch (e) {
    console.log(e, "Error al filtrar por nombre");
  }
};

const filterById = async (id) => {
  try {
    const allPokemon = await allInfo();
    if (id) {
      const pokemonById = allPokemon.filter(
        (pokemon) => pokemon.id.toString() === id
      );
      if (pokemonById.length) return pokemonById;
      else return "No hay ningun Pokemón con ese id";
    }
  } catch (e) {
    console.log(e, "Error al filtrar por id");
  }
};

module.exports = { filterByName, filterById };
