import axios from 'axios';

export function fetchOrganizationDetails(userId){
    console.log('3.0) WcMiddlewareWorker <::> fetchOrganizationDetails(.) ');
    return axios.post('/api/org/fetch/users/'+userId)
}