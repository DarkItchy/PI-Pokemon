const express = require("express");
const router = express.Router();
const {
  getPokemons,
  getPokemonsById,
  postPokemon,
} = require("../controllers/pokemonsControllers");

router.get("", getPokemons);

router.get("/:id", getPokemonsById);

router.post("", postPokemon);

module.exports = router;
