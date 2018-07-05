import {combineReducers}        from 'redux';
import {authReducer as auth}    from './components/auth/WcMiddlewareWorker';
import {errorHandler}           from './components/konten/WCErrorHandleWorker';
import {kontenDashboardReduce as dashboard}     from './components/konten/WcMiddlewareWorker';

const rootReducer = combineReducers({
    auth, dashboard, errorHandler
});

export default rootReducer;