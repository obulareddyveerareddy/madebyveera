import { connect }      from 'react-redux';
import WcRouter         from './WcRouter';
import {actionGetKontenTokenUserDetails}  from './../auth/WcMiddlewareWorker';

const mapStateToProps = (state, ownProps) => {
  return {
    errorHandler:state.errorHandler,
    auth:state.auth
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

const WcLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(WcRouter)

export default WcLink