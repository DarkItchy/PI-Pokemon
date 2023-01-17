const { apiInfo } = require("../Utils");

const getPokemons = async (req, res) => {
  try {
    const result = await apiInfo();
    res.json(result);
  } catch (e) {
    res.send(e.toString());
  }
};

module.exports = { getPokemons };
