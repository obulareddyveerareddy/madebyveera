import React        from 'react';
import {toast}      from 'react-toastify';
import WebAppTitle  from './../common/WebAppTitle';
import KontenTitle  from './../common/KontenTitle';

class LoginPage extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            email:"veerareddy.obula@gmail.com",
            password:"veera@8080"
        }
        
        this.userLoginHandler   = this.userLoginHandler.bind(this);
        this.updateState        = this.updateState.bind(this);
    }
    
    userLoginHandler(event){
        event.preventDefault();
        this.props.userLoginHandler(this.state);
    }
    
    updateState(event, key){
        let changeVals = {};
        changeVals[key] = event.target.value;
        this.setState(changeVals);
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.auth){
            switch(nextProps.auth.status){
                case 422:
                    toast.error(nextProps.auth.message, {autoClose: false, draggable: true});
                break;
                case 200:
                    sessionStorage.setItem('token', nextProps.auth.token);
                    this.props.history.push('/konten/dashboard');
                break;
                default:
                break;
            }
        }
    }
    
    render(){
        return(
            <div className="cyan loaded" style={{height:'100vh'}}>
                <div id="login-page" className="row" style={{paddingTop:'6rem'}}>
                    <div className="col offset-s4 s4 z-depth-4 card-panel">
                        <form className="login-form">
                            <div className="row">
                                <div className="input-field col s12 center" style={{marginTop: '1rem', color:'black'}}>
                                    <WebAppTitle />
                                    <KontenTitle />
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="fa fa-envelope prefix"></i>
                                    <input id="email" type="email" value={this.state.email} onChange={(event)=> this.updateState(event, 'email')} />
                                    <label htmlFor="email" className="center-align">Email</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="fa fa-lock prefix"></i>
                                    <input id="password" type="password" value={this.state.password} onChange={(event)=> this.updateState(event, 'password')} />
                                    <label htmlFor="password" className="">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 m6 l6">
                                    <a href="#/auth/register" className="btn red lighten-1 col s12">Register</a>
                                </div>
                                <div className="input-field col s6 m6 l6">
                                    <button className="btn waves-effect waves-light col s12" onClick={(event)=>this.userLoginHandler(event)}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default LoginPage;