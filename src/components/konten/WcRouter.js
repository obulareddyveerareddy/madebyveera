import React            from 'react';
import $                from 'jquery/dist/jquery';
import M                from "materialize-css/dist/js/materialize.min.js";
import {Switch, Route}  from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import WebAppTitle      from './../common/WebAppTitle';
import SubTitle         from './../common/SubTitle';
import * as _           from 'lodash';
import 'react-toastify/dist/ReactToastify.css';
import './konten.scss';

import DashboardLink    from './dashboard/DashboardLink';

export default class AuthComponentRouter extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            auth:this.props.auth
        }
    }
    
    componentDidMount(){
        M.Sidenav.init($('.sidenav'), {});
    }
    
    componentWillReceiveProps(nextProps){
        console.log('~~~~~~~~~~~ >>> errorHandler <<< ~~~~~~~~~~~',nextProps);
        
        if(_.has(nextProps, 'errorHandler')){
            switch(nextProps.errorHandler.statusCode){
                case 401:
                    this.props.history.push('/auth/login');
                    break;
                default:
                    break;
            }
        }
        if(_.has(nextProps, 'auth')){
            this.setState({auth:nextProps.auth});
        }
        
    }
    
    
    componentWillMount(){
        console.log('~~~~~~~~~~~~~~~~~~>>> dashboardpage@componentWillMount <<<~~~~~~~~~~~~~~~~~~');
        this.props.getTokenUserDetails();
    }

    render() {
        const {auth} = this.state;
        console.log('~~~~~~~~~~~~~>>> ', auth);
        return (
            <div id="konten">
                <ToastContainer/>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div className="navbar-fixed">
                        <nav style={{backgroundImage:'url("./assets/user-profile-bg.jpg")', backgroundRepeat:'no-repeat'}}>
                            <div className="nav-wrapper">
                                <span className="brand-logo" style={{fontSize:'1rem', display:'flex', justifyContent:'space-between', width:'100%', marginLeft:'0.4rem'}}>
                                    <WebAppTitle />
                                    <a href="#" data-target="slide-out" class="sidenav-trigger sidenav-bars" style={{color:'#000'}}><i class="fa fa-bars fa-3x"></i></a>
                                </span>
                            </div>
                            <ul id="slide-out" className="sidenav sidenav-fixed">
                                <li>
                                    <div className="user-view" style={{backgroundImage:'url("./assets/tab-bg.jpg")', backgroundRepeat:'no-repeat'}}>
                                        <SubTitle title="Konten" iconClass="fa fa-university" />
                                        <div style={{paddingLeft:'4rem'}}>
                                            <a href="#user"><img className="circle" src="./assets/avatar.jpg" /></a>
                                        </div>
                                        <div style={{paddingLeft:'1rem'}}>
                                        <a href="#name"><span className="white-text name">{auth.firstName+' '+auth.lastName}</span></a>
                                        <a href="#email"><span className="white-text email">{auth.email}</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#!">First Link With Icon</a></li>
                                <li><a href="#!">Second Link</a></li>
                                <li><div className="divider"></div></li>
                                <li><a className="subheader">Subheader</a></li>
                                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="content-container">
                        
                        <Switch>
                            <Route path="/konten/dashboard"       exact component={DashboardLink} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}