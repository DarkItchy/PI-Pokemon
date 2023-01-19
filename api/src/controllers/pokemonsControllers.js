const { filterByName, filterById } = require("../Utils/pokeFilters");
const { newPokemon } = require("../Utils/createPokemon");

const getPokemons = async (req, res) => {
  try {
    const name = req.query.name;

    const result = await filterByName(name);

    res.json(result);
  } catch (e) {
    res.statu(400).send(e.toString()),
      console.log(e, "Error en el controller get pokemons");
  }
};

const getPokemonsById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await filterById(id);

    res.json(result);
  } catch (e) {
    res.status(400).send(e.toString()),
      console.log(e, "Error en el controller get pokemonsById");
  }
};

const postPokemon = async (req, res) => {
  try {
    await newPokemon(req.body);
    res.json("Pokemón creado con exito");
  } catch (e) {
    res.status(400).send(e.toString()),
      console.log(e, "Error en el controller de post pokemon");
  }
};

module.exports = { getPokemons, getPokemonsById, postPokemon };
