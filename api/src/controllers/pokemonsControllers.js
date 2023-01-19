const { filterByName, filterById } = require("../Utils/pokeFilters");
const { Pokemon, Type } = require("../db");

const getPokemons = async (req, res) => {
  try {
    const name = req.query.name;

    const result = await filterByName(name);

    res.json(result);
  } catch (e) {
    res.send(e.toString()), console.log("Error en el controller get pokemons");
  }
};

const getPokemonsById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await filterById(id);

    res.json(result);
  } catch (e) {
    console.log(e, "Error en el controller get pokemonsById");
  }
};

module.exports = { getPokemons, getPokemonsById };
