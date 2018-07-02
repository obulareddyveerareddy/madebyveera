import axios from 'axios';

export function registerNewUser(newUser){
    console.log('3.0) WcMiddlewareWorker <::> registerNewUser(.) ', newUser);
    return axios.post('/api/auth/add/users', newUser)
}



export function validateLoginUser(newUser){
    console.log('3.0) WcMiddlewareWorker <::> registerNewUser(.) ', newUser);
    return axios.post('/api/auth/validate/users', newUser)
}

export function getLoginUserDetails(){
    let tokenStr = sessionStorage.getItem('token');
    return axios.get('/api/auth/details/user', { headers: {"Authorization" : `Bearer ${tokenStr}`}});
}