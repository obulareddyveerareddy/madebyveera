import { connect }      from 'react-redux';
import DashboardPage    from './DashboardPage';
import {actionGetKontenTokenUserDetails}  from './../WcMiddlewareWorker';

const mapStateToProps = (state, ownProps) => {
  return {
    dashboard:state.dashboard
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTokenUserDetails:()=>{
      console.log('~~~~~~~~~~~ >>> getTokenUserDetails <<< ~~~~~~~~~~~');
      dispatch(actionGetKontenTokenUserDetails());
    }
  }
}

const DashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)

export default DashboardLink