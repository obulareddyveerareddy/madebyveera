import { connect }                  from 'react-redux';
import RegistrationPage             from './RegistrationPage';
import {actionAuthRegisterNewUser}  from './WcMiddlewareWorker';

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    registerNewUser:(newUser)=>{
      dispatch(actionAuthRegisterNewUser(newUser));
    }
  }
}

const RegistrationLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage)

export default RegistrationLink
