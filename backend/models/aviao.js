"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aviao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Aviao.belongsTo(models.Hangar);
      models.Hangar.hasMany(Aviao);
    }
  }
  Aviao.init(
    {
      modeloAviao: DataTypes.STRING,
      msnAviaoPK: DataTypes.INTEGER,
    },

    {
      sequelize,
      modelName: "Aviao",
    }
  );
  return Aviao;
};
