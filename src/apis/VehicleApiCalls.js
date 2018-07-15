import axios from 'axios';

export function fetchVehicleMetaData(userId){
    let tokenStr = sessionStorage.getItem('token');
    return axios.get('/api/metadata/org/vehicle'+userId, { headers: {"Authorization" : `Bearer ${tokenStr}`}});
}