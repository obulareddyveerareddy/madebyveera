import {take, put, call}    from 'redux-saga/effects';
import  * as authApiCalls   from './../../apis/AuthApiCalls';

export const REQ_KONTEN_TOKEN_USERDETAILS  = "REQ_KONTEN_TOKEN_USERDETAILS";
export const RES_KONTEN_TOKEN_USERDETAILS  = "RES_KONTEN_TOKEN_USERDETAILS";
export const ERR_KONTEN_TOKEN_USERDETAILS  = "ERR_KONTEN_TOKEN_USERDETAILS";

export function actionGetKontenTokenUserDetails(){
    return { type: REQ_KONTEN_TOKEN_USERDETAILS};
}

export function kontenDashboardReduce(state = {}, action){
    switch(action.type){
        case RES_KONTEN_TOKEN_USERDETAILS:
            return action.payload;
        default:
            return state;
    }
};

export function* sagaGetKontenTokenUserDetails(){
    try{
        yield take('REQ_KONTEN_TOKEN_USERDETAILS');
        let response = yield call(authApiCalls.getLoginUserDetails);
        yield put({type: 'RES_KONTEN_TOKEN_USERDETAILS', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_401_UNAUTHORIZED', error});
    }
}