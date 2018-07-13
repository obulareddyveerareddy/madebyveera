import { connect }      from 'react-redux';
import OrgDashboardPage from './OrgDashboardPage';
import {fetchOrganizationDetails}  from './WcMiddlewareWorker';

const mapStateToProps = (state, ownProps) => {
  return {
    errorHandler:state.errorHandler,
    auth:state.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchOrganizationDetails:function(auth){
      console.log('~~~~~~~~~~~~~~~~~ 1) fetchOrganizationDetails ~~~~~~~~~~~~~~~~~', auth);
      dispatch(fetchOrganizationDetails(auth));
    }
  }
}

const OrgDashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrgDashboardPage)

export default OrgDashboardLink