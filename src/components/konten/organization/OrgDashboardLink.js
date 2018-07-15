import { connect }                  from 'react-redux';
import OrgDashboardPage             from './OrgDashboardPage';
import {fetchOrganizationDetails}   from './WcMiddlewareWorker';
import {addOrganizationDetails}     from './WcMiddlewareWorker';
import {fetchVehicleMetaData}       from './WcMiddlewareWorker';

const mapStateToProps = (state, ownProps) => {
  return {
    errorHandler:state.errorHandler,
    auth:state.auth,
    organization:state.organization
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchOrganizationDetails:function(auth){
      dispatch(fetchOrganizationDetails(auth));
    },
    addOrganizationDetails:function(auth, organization){
      organization.userId = auth.id;
      dispatch(addOrganizationDetails(organization));
    },
    fetchVehicleMetaData:function(){
      dispatch(fetchVehicleMetaData());
    }
  }
}

const OrgDashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrgDashboardPage)

export default OrgDashboardLink