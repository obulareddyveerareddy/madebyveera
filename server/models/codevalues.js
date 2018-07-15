'use strict';
module.exports = (sequelize, DataTypes) => {
  var CodeValues = sequelize.define('CodeValues', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    codeId: DataTypes.INTEGER
  }, {});
  CodeValues.associate = function(models) {
    // associations can be defined here
  };
  return CodeValues;
};