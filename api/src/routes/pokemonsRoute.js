const express = require("express");
const router = express.Router();
const { getPokemons } = require("../controllers/pokemonsControllers");

router.get("", getPokemons);

module.exports = router;
