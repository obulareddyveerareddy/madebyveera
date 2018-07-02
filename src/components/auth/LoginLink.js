import { connect }  from 'react-redux';
import LoginPage    from './LoginPage';
import {actionAuthLoginUser}  from './WcMiddlewareWorker';

const mapStateToProps = (state, ownProps) => {
  return {
    auth:state.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLoginHandler:(params)=>{
      dispatch(actionAuthLoginUser(params));
    }
  }
}

const LoginLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginLink