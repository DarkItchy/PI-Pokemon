const { allTypes } = require("../Utils/getInfo");
const { Type} = require("../db")

const getTypes = async (req, res) => {
  try {
    await allTypes();

    const types = await Type.findAll();

    res.json(types);
  } catch (e) {
    res.status(400).send(e.toString()), console.log(e, "Error en el controller getTypes");
  }
};

module.exports = { getTypes };
