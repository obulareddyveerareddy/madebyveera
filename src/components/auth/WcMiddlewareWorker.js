import {take, put, call}    from 'redux-saga/effects';
import  * as authApiCalls   from './../../apis/AuthApiCalls';

export const REQ_AUTH_REGISTER_NEWUSER  = "REQ_AUTH_REGISTER_NEWUSER";
export const RES_AUTH_REGISTER_NEWUSER  = "RES_AUTH_REGISTER_NEWUSER";
export const ERR_AUTH_REGISTER_NEWUSER  = "ERR_AUTH_REGISTER_NEWUSER";

export const REQ_AUTH_LOGIN_USER        = "REQ_AUTH_LOGIN_USER";
export const RES_AUTH_LOGIN_USER        = "RES_AUTH_LOGIN_USER";
export const ERR_AUTH_LOGIN_USER        = "ERR_AUTH_LOGIN_USER";

export function actionAuthRegisterNewUser(payload){
    console.log('2) WcMiddlewareWorker <::> actionAuthRegisterNewUser ~~~ REQ_AUTH_REGISTER_NEWUSER ', payload);
    return { type: REQ_AUTH_REGISTER_NEWUSER, payload};
}

export function actionAuthLoginUser(payload){
    console.log('2) WcMiddlewareWorker <::> actionAuthRegisterNewUser ~~~ REQ_AUTH_REGISTER_NEWUSER ', payload);
    return { type: REQ_AUTH_LOGIN_USER, payload};
}

export function authReducer(state = {}, action){
    switch(action.type){
        case RES_AUTH_REGISTER_NEWUSER:
            console.log('4) WcMiddlewareWorker <::> authReducer ~~~ RES_AUTH_REGISTER_NEWUSER ', action.payload);
            return action.payload;
        case RES_AUTH_LOGIN_USER:
            console.log('4) WcMiddlewareWorker <::> authReducer ~~~ RES_AUTH_LOGIN_USER ', action.payload);
            return action.payload;
        default:
            return state;
    }
};

export function* sagaAuthRegisterNewUser(){
    try{
        const { payload } = yield take('REQ_AUTH_REGISTER_NEWUSER');
        console.log('3) WcMiddlewareWorker <::> sagaAuthRegisterNewUser     ~~~ REQ_AUTH_REGISTER_NEWUSER ', payload);
        let response = yield call(authApiCalls.registerNewUser, payload);
        console.log('3.1) WcMiddlewareWorker <::> sagaAuthRegisterNewUser   ~~~ call(registerNewUser(payload)) ', response);
        yield put({type: 'RES_AUTH_REGISTER_NEWUSER', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_AUTH_REGISTER_NEWUSER', error});
    }
}

export function* sagaAuthLoginUser(){
    try{
        const { payload } = yield take('REQ_AUTH_LOGIN_USER');
        console.log('3) WcMiddlewareWorker <::> sagaAuthRegisterNewUser     ~~~ REQ_AUTH_LOGIN_USER ', payload);
        let response = yield call(authApiCalls.validateLoginUser, payload);
        console.log('3.1) WcMiddlewareWorker <::> sagaAuthRegisterNewUser   ~~~ call(validateLoginUser(payload)) ', response);
        yield put({type: 'RES_AUTH_LOGIN_USER', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_AUTH_LOGIN_USER', error});
    }
}