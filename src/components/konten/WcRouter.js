import React            from 'react';
import $                from 'jquery/dist/jquery';
import M                from "materialize-css/dist/js/materialize.min.js";
import {Switch, Route}  from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import * as _           from 'lodash';
import bootstrap        from 'bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import './konten.scss';

import SideNav          from './../common/SideNav';
import Breadcrumbs      from './../common/Breadcrumbs';
import DashboardLink    from './dashboard/DashboardLink';
import CalenderLink     from './calender/CalenderLink';
import OrgDashboardLink from './organization/OrgDashboardLink';

export default class AuthComponentRouter extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            auth:this.props.auth,
            activeItem:'/konten/dashboard',
            breadcrumbEntities:[]
        }
        
        this.setBreadCrumbs = this.setBreadCrumbs.bind(this);
    }
    
    componentWillMount() {
        if(this.props.history && this.props.history.location){
            this.setState({activeItem:this.props.history.location.pathname});
            this.setBreadCrumbs(this.props.history.location);
        }
        this.unlisten = this.props.history.listen((location, action) => {
            this.setState({activeItem: location.pathname});
            this.setBreadCrumbs(this.props.history.location);
        });
        this.props.getTokenUserDetails();
    }
    
    setBreadCrumbs(location){
        let breadcrumbEntitiesCopy = [];
        
        _.forEach(this.state.breadcrumbEntitiesCopy, (item)=>{
            item.isActive = false;
            breadcrumbEntitiesCopy.push(item);
        });
        var lastIndexValue  = _.lastIndexOf(location.pathname.toLowerCase().split(""), '/') + 1;
        var breadcrumbWords = _.words(location.pathname);
        var displayName     = breadcrumbWords[breadcrumbWords.length - 1];
        breadcrumbEntitiesCopy.push({isActive:true, pathname:location.pathname, displayName:_.startCase(displayName)});
        this.setState({breadcrumbEntities:breadcrumbEntitiesCopy})
    }
    
    componentWillUnmount() {
        this.unlisten();
    }
    
    componentDidMount(){
        M.Sidenav.init($('.sidenav'), {});
    }
    
    componentWillReceiveProps(nextProps){
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

    render() {
        const {auth} = this.state;
        return (
            <div id="konten">
                <ToastContainer/>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <SideNav auth={auth} activeItem={this.state.activeItem} />
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <Breadcrumbs entities={this.state.breadcrumbEntities} />
                        <div className="content-container">
                            <Switch>
                                <Route path="/konten/config/organization"     exact component={OrgDashboardLink} />
                                <Route path="/konten/dashboard"               exact component={DashboardLink} />
                                <Route path="/konten/calender"                exact component={CalenderLink} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}