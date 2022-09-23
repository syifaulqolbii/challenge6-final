'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_history.init({
    lamabermain: DataTypes.INTEGER,
    ranking: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_history',
  });
  return user_history;
};