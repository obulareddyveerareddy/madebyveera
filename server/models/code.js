'use strict';

module.exports = function(sequelize, DataTypes) {
    var Code = sequelize.define("Code", {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });
    return Code;
};