var models  = require('../models');
var jwt     = require("jsonwebtoken");
let organizationService = {};

organizationService.fetchOrgVehicleTypeMetadata = async function(){
    console.log('2) ~~~~~~~~~~~~~ fetchOrgVehicleTypeMetadata ');
    return models.CodeValues.find({
        where: {
            codeId: 301
        }
    });
}

organizationService.fetchOrgVehicleSericeMetadata = async function(){
    console.log('2) ~~~~~~~~~~~~~ fetchOrgVehicleSericeMetadata ');
    return models.CodeValues.find({
        where: {
            codeId: 302
        }
    });
}

module.exports = organizationService;