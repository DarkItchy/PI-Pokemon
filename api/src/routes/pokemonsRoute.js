const express = require("express");
const router = express.Router();
const {
  getPokemons,
  getPokemonsById,
} = require("../controllers/pokemonsControllers");

router.get("", getPokemons);

router.get("/:id", getPokemonsById);

module.exports = router;
