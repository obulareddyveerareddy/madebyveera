import React            from 'react';
import {Switch, Route}  from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginLink        from './LoginLink';
import RegistrationLink from './RegistrationLink';

export default class AuthComponentRouter extends React.Component {
    render() {
        return (
            <div>
                <ToastContainer/>
                <Switch>
                    <Route path="/auth/login"       exact component={LoginLink} />
                    <Route path="/auth/register"    exact component={RegistrationLink} />
                </Switch>
            </div>
        );
    }
}