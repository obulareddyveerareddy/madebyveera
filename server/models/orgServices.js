'use strict';

module.exports = function(sequelize, DataTypes) {
    var OrgServices = sequelize.define("OrgServices", {
        orgId: DataTypes.INTEGER,
        serviceId: DataTypes.INTEGER
    });
    return OrgServices;
};