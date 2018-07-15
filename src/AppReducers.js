import {combineReducers}        from 'redux';
import {authReducer as auth}    from './components/auth/WcMiddlewareWorker';
import {errorHandler}           from './components/konten/WCErrorHandleWorker';
import {organizationReduce      as organization}    from './components/konten/organization/WcMiddlewareWorker';
import {vehicleReduce           as vehicle}         from './components/konten/organization/WcMiddlewareWorker';
import {kontenDashboardReduce   as dashboard}       from './components/konten/WcMiddlewareWorker';

const rootReducer = combineReducers({
    auth, dashboard, errorHandler, organization, vehicle
});

export default rootReducer;