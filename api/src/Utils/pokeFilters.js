const { allInfo, pokemonInfoById, dbInfoById } = require("./getInfo");

const filterByName = async (name) => {
  try {
    const allPokemon = await allInfo();
    if (name) {
      const pokemonByName = allPokemon.filter(
        (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
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
    const byDb = await dbInfoById(id);
    if (!byDb) {
      return await pokemonInfoById(id);
    } else return byDb.dataValues;
  } catch (e) {
    console.log(e, "Error al filtrar por id");
  }
};

module.exports = { filterByName, filterById };
