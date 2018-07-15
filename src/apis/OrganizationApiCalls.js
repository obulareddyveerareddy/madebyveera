import axios from 'axios';

export function fetchOrganizationDetails(userId){
    let tokenStr = sessionStorage.getItem('token');
    return axios.get('/api/org/fetch/users/'+userId, { headers: {"Authorization" : `Bearer ${tokenStr}`}});
}

export function addOrganizationDetails(payload){
    let tokenStr = sessionStorage.getItem('token');
    return axios.post('/api/org/add', payload, { headers: {"Authorization" : `Bearer ${tokenStr}`}});
}