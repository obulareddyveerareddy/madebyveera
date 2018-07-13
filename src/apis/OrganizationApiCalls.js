import axios from 'axios';

export function fetchOrganizationDetails(userId){
    return axios.post('/api/org/fetch/users/'+userId)
}