'use strict';
module.exports = (sequelize, DataTypes) => {
  var Codes = sequelize.define('Codes', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    refId: DataTypes.INTEGER
  }, {});
  Codes.associate = function(models) {
    // associations can be defined here
  };
  return Codes;
};