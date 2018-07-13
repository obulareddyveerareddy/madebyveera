import {take, put, call}            from 'redux-saga/effects';
import  * as organizationApiCalls   from './../../../apis/OrganizationApiCalls';

export const REQ_KONTEN_FETCH_ORGANIZATION  = "REQ_KONTEN_FETCH_ORGANIZATION";
export const RES_KONTEN_FETCH_ORGANIZATION  = "RES_KONTEN_FETCH_ORGANIZATION";
export const ERR_KONTEN_ORGANIZATION        = "ERR_KONTEN_ORGANIZATION";

export function fetchOrganizationDetails(auth){
    return { type: REQ_KONTEN_FETCH_ORGANIZATION};
}

export function kontenOrganizationReduce(state = {}, action){
    switch(action.type){
        case RES_KONTEN_FETCH_ORGANIZATION:
            return action.payload;
        default:
            return state;
    }
};

export function* sagaFetchOrganizationDetails(action){
    try{
        let auth = yield take('REQ_KONTEN_FETCH_ORGANIZATION');
        let response = yield call(organizationApiCalls.fetchOrganizationDetails, auth);
        yield put({type: 'RES_KONTEN_FETCH_ORGANIZATION', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_KONTEN_ORGANIZATION', error});
    }
}