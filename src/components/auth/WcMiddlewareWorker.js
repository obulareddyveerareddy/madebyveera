import {take, put, call}    from 'redux-saga/effects';
import  * as authApiCalls   from './../../apis/AuthApiCalls';

export const REQ_AUTH_REGISTER_NEWUSER  = "REQ_AUTH_REGISTER_NEWUSER";
export const RES_AUTH_REGISTER_NEWUSER  = "RES_AUTH_REGISTER_NEWUSER";
export const ERR_AUTH_REGISTER_NEWUSER  = "ERR_AUTH_REGISTER_NEWUSER";

export const REQ_AUTH_LOGIN_USER        = "REQ_AUTH_LOGIN_USER";
export const RES_AUTH_LOGIN_USER        = "RES_AUTH_LOGIN_USER";
export const ERR_AUTH_LOGIN_USER        = "ERR_AUTH_LOGIN_USER";

export const REQ_KONTEN_TOKEN_USERDETAILS  = "REQ_KONTEN_TOKEN_USERDETAILS";
export const RES_KONTEN_TOKEN_USERDETAILS  = "RES_KONTEN_TOKEN_USERDETAILS";
export const ERR_KONTEN_TOKEN_USERDETAILS  = "ERR_KONTEN_TOKEN_USERDETAILS";

export function actionAuthRegisterNewUser(payload){
    return { type: REQ_AUTH_REGISTER_NEWUSER, payload};
}

export function actionGetKontenTokenUserDetails(){
    return { type: REQ_KONTEN_TOKEN_USERDETAILS};
}

export function actionAuthLoginUser(payload){
    return { type: REQ_AUTH_LOGIN_USER, payload};
}

export function authReducer(state = {}, action){
    switch(action.type){
        case RES_AUTH_REGISTER_NEWUSER:
            return action.payload;
        case RES_AUTH_LOGIN_USER:
            return action.payload;
        case RES_KONTEN_TOKEN_USERDETAILS:
            return action.payload;
        default:
            return state;
    }
};

export function* sagaAuthRegisterNewUser(){
    try{
        const { payload } = yield take('REQ_AUTH_REGISTER_NEWUSER');
        let response = yield call(authApiCalls.registerNewUser, payload);
        yield put({type: 'RES_AUTH_REGISTER_NEWUSER', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_AUTH_REGISTER_NEWUSER', error});
    }
}

export function* sagaAuthLoginUser(){
    try{
        const { payload } = yield take('REQ_AUTH_LOGIN_USER');
        let response = yield call(authApiCalls.validateLoginUser, payload);
        yield put({type: 'RES_AUTH_LOGIN_USER', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_AUTH_LOGIN_USER', error});
    }
}

export function* sagaGetKontenTokenUserDetails(){
    try{
        yield take('REQ_KONTEN_TOKEN_USERDETAILS');
        let response = yield call(authApiCalls.getLoginUserDetails);
        yield put({type: 'RES_KONTEN_TOKEN_USERDETAILS', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_401_UNAUTHORIZED', error});
    }
}