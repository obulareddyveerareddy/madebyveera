import {take, put, call}            from 'redux-saga/effects';
import  * as organizationApiCalls   from './../../../apis/OrganizationApiCalls';
import  * as vehicleApiCalls        from './../../../apis/VehicleApiCalls';

export const ERR_KONTEN_ORGANIZATION            = "ERR_KONTEN_ORGANIZATION";
/**
*
*
* ------------ Fetch/Add/Update/Delete Organization 
* 
*/
export const REQ_KONTEN_FETCH_ORGANIZATION  = "REQ_KONTEN_FETCH_ORGANIZATION";
export const RES_KONTEN_FETCH_ORGANIZATION  = "RES_KONTEN_FETCH_ORGANIZATION";
export const REQ_KONTEN_ADD_ORGANIZATION    = "REQ_KONTEN_ADD_ORGANIZATION";
export const RES_KONTEN_ADD_ORGANIZATION    = "RES_KONTEN_ADD_ORGANIZATION";

export function fetchOrganizationDetails(payload){
    return { type: REQ_KONTEN_FETCH_ORGANIZATION, payload};
}
export function addOrganizationDetails(payload){
    return { type: REQ_KONTEN_ADD_ORGANIZATION, payload};
}

export function organizationReduce(state = {name:'', address:'', zipCode:'', place:''}, action){
    switch(action.type){
        case RES_KONTEN_FETCH_ORGANIZATION:
            return action.payload;
        default:
            return state;
    }
};

export function* sagaFetchOrganizationDetails(){
    try{
        const {payload}   = yield take('REQ_KONTEN_FETCH_ORGANIZATION');
        let response    = yield call(organizationApiCalls.fetchOrganizationDetails, payload.id);
        yield put({type: 'RES_KONTEN_FETCH_ORGANIZATION', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_KONTEN_ORGANIZATION', error});
    }
}

export function* sagaAddOrganizationDetails(){
    try{
        const {payload} = yield take('REQ_KONTEN_ADD_ORGANIZATION');
        let response    = yield call(organizationApiCalls.addOrganizationDetails, payload);
        response        = yield call(organizationApiCalls.fetchOrganizationDetails, payload.userId);
        yield put({type: 'RES_KONTEN_FETCH_ORGANIZATION', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_KONTEN_ORGANIZATION', error});
    }
}

/**
*
*
* ------------ Fetch/Add/Update/Delete Vehicle 
* 
*/
export const REQ_KONTEN_FETCH_VEHICLE       = "REQ_KONTEN_FETCH_VEHICLE";
export const RES_KONTEN_FETCH_VEHICLE       = "RES_KONTEN_FETCH_VEHICLE";
export const REQ_KONTEN_FETCH_VEHICLE_META  = "REQ_KONTEN_FETCH_VEHICLE_META";
export const RES_KONTEN_FETCH_VEHICLE_META  = "RES_KONTEN_FETCH_VEHICLE_META";
export const REQ_KONTEN_ADD_VEHICLE         = "REQ_KONTEN_ADD_VEHICLE";
export const RES_KONTEN_ADD_VEHICLE         = "RES_KONTEN_ADD_VEHICLE";
export const REQ_KONTEN_UPDATE_VEHICLE      = "REQ_KONTEN_UPDATE_VEHICLE";
export const RES_KONTEN_UPDATE_VEHICLE      = "RES_KONTEN_UPDATE_VEHICLE";
export const REQ_KONTEN_DELETE_VEHICLE      = "REQ_KONTEN_DELETE_VEHICLE";
export const RES_KONTEN_DELETE_VEHICLE      = "RES_KONTEN_DELETE_VEHICLE";
export const RES_KONTEN_ORG_VEHICLE         = "RES_KONTEN_ORG_VEHICLE";

export function fetchVehicleMetaData(){
    return { type: REQ_KONTEN_FETCH_VEHICLE_META};
}

export function vehicleReduce(state = {}, action){
    switch(action.type){
        case RES_KONTEN_ORG_VEHICLE:
            return action.payload;
        default:
            return state;
    }
};

export function* sagaFetchVehicleMetaData(){
    try{
        yield take('REQ_KONTEN_FETCH_VEHICLE_META');
        let response    = yield call(vehicleApiCalls.fetchVehicleMetaData);
        yield put({type: 'RES_KONTEN_ORG_VEHICLE', payload:response.data});
    }catch(error){
        yield put({type: 'ERR_KONTEN_ORGANIZATION', error});
    }
}