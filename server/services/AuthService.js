var models  = require('../models');
var jwt     = require("jsonwebtoken");
let authService = {};

authService.validateLoginUser = async function(payload){
    return models.User.count({
        where: {
            email: payload.email,
            password:payload.password
        },
        distinct: true,
        col: 'User.email'
    });
}

authService.getToken = async function(payload){
    return jwt.sign(payload, 'madeby949111veera@5322', { algorithm: 'HS256', expiresIn: "1h" } );
}

authService.validateToken = async function(email, password){
    return models.User.count({
        where: {
            email: email,
            password:password
        },
        distinct: true,
        col: 'User.email'
    });
}

authService.getUserDetailsByEmail = async function(emailParam){
    return models.User.find({
        where: {
            email: emailParam
        }
    });
}

authService.checkIsEmailExists = async function(emailParam){
    return models.User.count({
        where: {
            email: emailParam
        },
        distinct: true,
        col: 'User.email'
    });
}

authService.addNewUser = async function(payload){
    return  models.User.create({
                firstName: payload.firstName,
                lastName: payload.lastName,
                mobile: payload.mobile,
                email: payload.email,
                password: payload.password
            });
}

authService.fetchUserDetailByEmail = async function(credentials){
    return models.User.find({
        where: {
            email: credentials.email
        }
    });
}

module.exports = authService;