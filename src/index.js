import React            from 'react';
import ReactDOM         from 'react-dom';
import {Provider}       from 'react-redux';
import {HashRouter, Switch, Route}      from 'react-router-dom';
import './index.scss';
import 'font-awesome/scss/font-awesome.scss';

import ProfileFeatureRouter from './features/profile/ProfileFeatureRouter';
import AuthWcRouter         from './components/auth/WcRouter';
import KontenWcRouter       from './components/konten/WcRouterLink';
import configureStore       from './AppStore';
const store = configureStore();

export default class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/konten/*" component={KontenWcRouter}  exact />
                        <Route path="/auth/*"   component={AuthWcRouter}    exact />
                        <Route path="/"         component={ProfileFeatureRouter} />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);