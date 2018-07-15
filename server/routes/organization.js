'use strict';
var organizationService = require("./../services/OrganizationService");

module.exports = function () {
    return [
        {
            method:'GET',
            path:'/api/org/fetch/users/{id}',
            handler:async function(request, reply){
                console.log('1) ~~~~~~~~~~~~~ organizationService ',request.params);
                let response = await organizationService.fetchOrgDetailsByUserId(request.params);
                return response
            }
        },{
            method:'POST',
            path:'/api/org/add',
            config: { auth: false },
            handler:async function(request, reply){
                console.log('~~~~~~~~~~~ /api/org/add >>> ', request.payload);
                let response = await organizationService.addOrgDetailsByUserId(request.payload);
                return response
            }
        }
        
    ];
}();