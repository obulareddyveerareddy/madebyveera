'use strict';
var metaDataService = require("./../services/MetaDataService");

module.exports = function () {
    return [
        {
            method:'GET',
            path:'/api/metadata/org/vehicle',
            handler:async function(request, reply){
                console.log('1) ~~~~~~~~~~~~~ fetchOrgVehicleMetadata ~~~~~~~~~~~~~');
                let vehicleTypeResponse = await metaDataService.fetchOrgVehicleMetadata();
                let serviceTypeResponse = await metaDataService.fetchOrgVehicleMetadata();
                return {vehicleType:vehicleTypeResponse, serviceType:serviceTypeResponse}
            }
        }
    ];
}();