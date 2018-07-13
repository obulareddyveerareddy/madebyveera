import {take, put, call}            from 'redux-saga/effects';
import  * as organizationApiCalls   from './../../../apis/OrganizationApiCalls';

export const REQ_KONTEN_FETCH_ORGANIZATION  = "REQ_KONTEN_FETCH_ORGANIZATION";
export const RES_KONTEN_FETCH_ORGANIZATION  = "RES_KONTEN_FETCH_ORGANIZATION";
export const ERR_KONTEN_ORGANIZATION        = "ERR_KONTEN_ORGANIZATION";

export function fetchOrganizationDetails(auth){
    console.log('2) WcMiddlewareWorker <::> fetchOrganizationDetails ~~~ REQ_KONTEN_FETCH_ORGANIZATION ', auth);
    return { type: REQ_KONTEN_FETCH_ORGANIZATION};
}

export function kontenOrganizationReduce(state = {}, action){
    switch(action.type){
        case RES_KONTEN_FETCH_ORGANIZATION:
            console.log('4) WcMiddlewareWorker <::> kontenOrganizationReduce ~~~ RES_KONTEN_FETCH_ORGANIZATION ', action.payload);
            return action.payload;
        default:
            return state;
    }
};

export function* sagaFetchOrganizationDetails(action){
    try{
        console.log('~~~~~~~~~~~~~ >>> sagaFetchOrganizationDetails >>> ', action);
        let auth = yield take('REQ_KONTEN_FETCH_ORGANIZATION');
        console.log('3) WcMiddlewareWorker <::> sagaFetchOrganizationDetails     ~~~ REQ_KONTEN_FETCH_ORGANIZATION ', auth);
        let response = yield call(organizationApiCalls.fetchOrganizationDetails, auth);
        console.log('3.1) WcMiddlewareWorker <::> fetchOrganizationDetails   ~~~ call(registerNewUser(payload)) ', response);
        yield put({type: 'RES_KONTEN_FETCH_ORGANIZATION', payload:response.data});
    }catch(error){
        console.log('3.2) WcMiddlewareWorker <::> sagaFetchOrganizationDetails ~~~ ERR_KONTEN_ORGANIZATION ');
        yield put({type: 'ERR_KONTEN_ORGANIZATION', error});
    }
}