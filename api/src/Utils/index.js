const axios = require("axios");
const { Pokemon, Type } = require("../db");

const apiInfo = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=26"
    );
    const allInfo = await Promise.all(
      response.data.results.map(async (el) => {
        const info = await axios.get(el.url);
        const data = info.data;
        const pokemon = {
          name: data.name,
          id: data.id,
          hp: data.stats[0].base_stat,
          atk: data.stats[1].base_stat,
          def: data.stats[2].base_stat,
          spatk: data.stats[3].base_stat,
          spdef: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
          height: data.height,
          weight: data.weight,
          img: data.sprites.other["official-artwork"].front_default,
        };
        return pokemon;
      })
    );
    return allInfo;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { apiInfo };
