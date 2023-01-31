const { Pokemon, Type } = require("../db");

const newPokemon = async (params) => {
  const createdPokemon = await Pokemon.create({
    name: params.name,
    hp: params.hp,
    atk: params.atk,
    def: params.def,
    spatk: params.spatk,
    spdef: params.spdef,
    speed: params.speed,
    height: params.height,
    weight: params.weight,
    img: params.img ? params.img : "https://i.ytimg.com/vi/3cLbFhxYPFY/maxresdefault.jpg",
  });

  const typesDb = await Type.findAll({
    where: {name: params.types}
  })

  createdPokemon.addType(typesDb);
};

module.exports = { newPokemon };
