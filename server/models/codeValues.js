'use strict';

module.exports = function(sequelize, DataTypes) {
    var CodeValues = sequelize.define("CodeValues", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        codeId:DataTypes.INTEGER
    });
    return CodeValues;
};