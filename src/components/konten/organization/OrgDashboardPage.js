import React        from 'react';
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
            organization:this.props.organization,
            vehicle:this.props.vehicle
        }
        
        this.onStateChanges         = this.onStateChanges.bind(this);
        this.addUpdateOrganization  = this.addUpdateOrganization.bind(this);
    }
    
    componentWillMount(){
        $(document).ready(function() {
            M.updateTextFields();
            M.Collapsible.init($('.collapsible'), {});
        });
        this.props.fetchVehicleMetaData();
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.auth){
            this.setState({auth: nextProps.auth});
            this.props.fetchOrganizationDetails(nextProps.auth);
        }
        
        if(nextProps.organization){
            this.setState({organization: nextProps.organization});
        }
    }
    
    componentDidMount(){
        $(document).ready(function() {
            M.updateTextFields();
        });
    }
    
    onStateChanges(event, key){
        let org     = this.state.organization;
        org[key]    = event.target.value;
        this.setState({organization:org});
    }
    
    addUpdateOrganization(event){
        this.props.addOrganizationDetails(this.state.auth, this.state.organization);
    }
    
    render(){
        const {auth, organization, vehicle} = this.state;
        return(
            <div id="OrgDashboardPage">
                <div className="row">
                    <div className="col s12 m4">
                        <AddEditOrganization authData={auth} orgData={organization} onStateChanges={this.onStateChanges} addUpdateOrganization={this.addUpdateOrganization} />
                    </div>
                    <div className="col s12 m8">
                        <AppService  authData={auth} orgData={organization} vehicleData={vehicle} />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default OrgDashboardPage;