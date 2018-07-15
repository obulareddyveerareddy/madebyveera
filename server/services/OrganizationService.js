var models  = require('../models');
var jwt     = require("jsonwebtoken");
let organizationService = {};

organizationService.fetchOrgDetailsByUserId = async function(payload){
    console.log('2) ~~~~~~~~~~~~~ organizationService ',payload);
    return models.Organization.find({
        where: {
            userId: payload.id
        }
    });
}

organizationService.addOrgDetailsByUserId = async function(payload){
    return models.Organization.create({
                name: payload.name,
                address: payload.address,
                zipCode: payload.zipCode,
                place: payload.place,
                userId: payload.userId
            });
}

module.exports = organizationService;