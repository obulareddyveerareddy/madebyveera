import {createStore, applyMiddleware}   from 'redux';
import createSagaMiddleware             from 'redux-saga';
import {appSagas}                       from './AppSagas';
import rootReducers                     from './AppReducers';

export default function configureStore(initialState){
    const sagaMiddleware = createSagaMiddleware()
    const store          = createStore(
        rootReducers,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
    appSagas(sagaMiddleware);
    return store;
}