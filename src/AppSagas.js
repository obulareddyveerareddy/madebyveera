import * as sagas from './sagas';

export const appSagas = (sagaMiddleware) =>{
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}