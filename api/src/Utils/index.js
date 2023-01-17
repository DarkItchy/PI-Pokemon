const axios = require("axios");
const { Pokemon, Type } = require("../db");

// const apiInfo = async () => {
//   try {
//     const response = await axios.get(
//       "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30",
//       { headers: { "Accept-Encoding": "gzip,deflate,compress" } }
//     );
//     const allInfo = await Promise.all(
//       response.data.results.map(async (el) => {
//         const info = await axios.get(el.url);
//         const data = info.data;
//         return {
//           name: data.name,
//           id: data.id,
//           hp: data.stats[0].base_stat,
//           atk: data.stats[1].base_stat,
//           def: data.stats[2].base_stat,
//           spatk: data.stats[3].base_stat,
//           spdef: data.stats[4].base_stat,
//           speed: data.stats[5].base_stat,
//           height: data.height,
//           weight: data.weight,
//           img: data.sprites.other["official-artwork"].front_default,
//         };
//       })
//     );
//     return allInfo;
//   } catch (e) {
//     console.log(e), "Error en la lógica";
//   }
// };

const apiInfo = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const info = response.data;
    return {
      name: info.name,
      id: info.id,
      hp: info.stats[0].base_stat,
      atk: info.stats[1].base_stat,
      def: info.stats[2].base_stat,
      spatk: info.stats[3].base_stat,
      spdef: info.stats[4].base_stat,
      speed: info.stats[5].base_stat,
      height: info.height,
      weight: info.weight,
      img: info.sprites.other["official-artwork"].front_default,
    };
  } catch (e) {
    console.log(e), "Error en la lógica";
  }
};

const counter = async () => {
  try {
    let id = 1;
    let arr = [];
    while (id < 41) {
      arr.push(await apiInfo(id));
      id++;
    }
    return arr;
  } catch (e) {
    console.log(e), "Error en las llamadas";
  }
};

module.exports = { apiInfo, counter };
