const { apiInfo, counter } = require("../Utils");
const { Pokemon, Type} = require("../db");

const getPokemons = async (req, res) => {
  const name = req.query
  try {
    const result = await counter();
    res.json(result);
  } catch (e) {
    res.send(e.toString()),
    "Error en el controller"
  }
};

module.exports = { getPokemons };
