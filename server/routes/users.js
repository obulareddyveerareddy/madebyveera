'use strict';
var authService = require("./../services/AuthService");

module.exports = function () {
    return [
        {
            method:'POST',
            path:'/api/auth/add/users',
            config: { auth: false },
            handler:async function(request, reply){
                let response = await authService.checkIsEmailExists(request.payload.email);
                if(response === 0){
                    response = await authService.addNewUser(request.payload);
                    response.status = 200;
                    response.message = "Registration completed successfuly. Please login again.";
                }else{
                    response = {status:422, message:"Email Id Already Exists"}
                }
                return response
            }
        },{
            method:'POST',
            path:'/api/auth/validate/users',
            config: { auth: false },
            handler:async function(request, reply){
                let response = await authService.validateLoginUser(request.payload);
                if(response > 0){
                    response = {status:200, message:"Validation Success."};
                    response.token      = await authService.getToken(request.payload);
                }else{
                    response = {status:500, message:"Wrong Email Address & Password"}
                }
                return response
            }
        },{
            method:'GET',
            path:'/api/auth/details/user',
            handler:async function(request, reply){
                let response = await authService.fetchUserDetailByEmail(request.auth.credentials);
                return response
            }
        }
    ];
}();