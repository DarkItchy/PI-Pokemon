const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      atk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      def: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      spatk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      spdef: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      img: {
        type: DataTypes.STRING,
        defaultValue: "https://i.ytimg.com/vi/3cLbFhxYPFY/maxresdefault.jpg",
      },

      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
