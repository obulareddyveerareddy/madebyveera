"use strict";
module.exports = function(sequelize, DataTypes) {
    var Organization = sequelize.define("Organization", {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        pin: DataTypes.STRING,
        place: DataTypes.STRING,
        userId: DataTypes.INTEGER
    });
    return Organization;
};