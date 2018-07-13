import React        from 'react';
import {toast}      from 'react-toastify';
import $            from 'jquery/dist/jquery';
import M            from "materialize-css/dist/js/materialize.min.js";
import './OrgDashboardPage.scss';
import AddEditOrganization  from './../common/AddEditOrganization';
import AppService           from './../common/AppService';

class OrgDashboardPage extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            auth:this.props.auth,
            org:{}
        }
    }
    componentWillMount(){
        console.log('Organization componentWillMount --- ',this.state);
        $(document).ready(function() {
            M.updateTextFields();
        });
        this.props.fetchOrganizationDetails(this.state.auth);
    }
    
    componentWillReceiveProps(nextProps){
        console.log('Organization componentWillReceiveProps --- ',nextProps);
        if(nextProps.auth){
            console.log('1 Organization componentWillReceiveProps(.) --- ',nextProps.auth);
            this.setState({auth: nextProps.auth});
            console.log('2 Organization componentWillReceiveProps(.) --- ',this.state);
        }
    }
    
    render(){
        const {auth, org} = this.state;
        return(
            <div id="OrgDashboardPage">
                <div className="row">
                    <div className="col s12 m4">
                        <AddEditOrganization authData={auth} orgData={org} />
                    </div>
                    <div className="col s12 m8">
                        <AppService  authData={auth} orgData={org} />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default OrgDashboardPage;