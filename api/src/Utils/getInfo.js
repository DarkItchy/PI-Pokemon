const axios = require("axios");
const { Pokemon, Type } = require("../db");

const pokemonInfoById = async (id) => {
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
      img: info.sprites.other["official-artwork"].front_default
        ? info.sprites.other["official-artwork"].front_default
        : "https://i.ytimg.com/vi/3cLbFhxYPFY/maxresdefault.jpg",
      types: info.types.map((t) => t.type.name),
    };
  } catch (e) {
    console.log(e, "Error en la llamada a api por id");
  }
};

const apiInfo = async () => {
  try {
    let id = 252;
    let arr = [];
    while (id > 251 && id < 293) {
      /*id > 251 && id < 387 para traer toda la generación*/ arr.push(
        await pokemonInfoById(id)
      );
      id++;
    }
    return arr;
  } catch (e) {
    console.log(e, "Error en las llamadas a api");
  }
};

const dbInfo = async () => {
  try {
    return await Pokemon.findAll({
      include: {
        model: Type,
      },
    });
  } catch (e) {
    console.log(e, "Error en llamada a db");
  }
};

const allInfo = async () => {
  try {
    const getApiInfo = await apiInfo();
    const getDbInfo = await dbInfo();
    const getAllInfo = getDbInfo ? [...getDbInfo, ...getApiInfo] : getApiInfo;
    return getAllInfo;
  } catch (e) {
    console.log(e, "Error en juntar información");
  }
};

const allTypes = async () => {
  try {
    const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
    const info = getTypes.data.results.map((t) => {
      return {
        name: t.name,
      };
    });
    info.forEach((el) => {
      Type.findOrCreate({
        where: {
          name: el.name,
        },
      });
    });
  } catch (e) {
    console.log(e, "Error al traet los types de la api");
  }
};

// const apiInfo = async () => {
//   try {
//     const response = await axios.get(
//       "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40",
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
//     console.log(e, "Error al llamar todos los pokemon de la api");
//   }
// };

module.exports = { allInfo, allTypes };
