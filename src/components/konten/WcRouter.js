import React            from 'react';
import {Switch, Route}  from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DashboardLink    from './dashboard/DashboardLink';

export default class AuthComponentRouter extends React.Component {
    render() {
        return (
            <div>
                <ToastContainer/>
                <Switch>
                    <Route path="/konten/dashboard"       exact component={DashboardLink} />
                </Switch>
            </div>
        );
    }
}