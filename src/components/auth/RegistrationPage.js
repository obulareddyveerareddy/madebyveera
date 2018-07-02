import React        from 'react';
import {toast}      from 'react-toastify';
import WebAppTitle  from './../common/WebAppTitle';
import KontenTitle  from './../common/KontenTitle';

class RegistrationPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            firstName:'Veera Reddy'
            ,lastName:'Obulareddy'
            ,mobileNum:9440949111
            ,email:'veerareddy.obula@gmail.com'
            ,password:'veera@8080'
            ,repassword:'veera@8080'
        }
        
        this.updateState        = this.updateState.bind(this);
        this.registerNewUser    = this.registerNewUser.bind(this);
    }
    
    updateState(event, key){
        let changeVals = {};
        changeVals[key] = event.target.value;
        this.setState(changeVals);
        console.log(this.state);
    }
    
    registerNewUser(event){
        event.preventDefault();
        this.props.registerNewUser(this.state);
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.auth){
            switch(nextProps.auth.status){
                case 422:
                    toast.error(nextProps.auth.message, {autoClose: false, draggable: true});
                break;
                case 200:
                    toast.success(nextProps.auth.message, {hideProgressBar: true, autoClose: 5000});
                    this.props.history.push('/auth/login');
                break;
                default:
                break;
            }
        }
        
    }
    
    render(){
        return(
            <div className="cyan loaded" style={{height:'100vh'}}>
                <div id="login-page" className="row" style={{paddingTop:'4rem'}}>
                    <div className="col offset-s3 s6 z-depth-4 card-panel">
                        <form className="login-form">
                            <div className="row">
                                <div className="input-field col s12 center">
                                    <WebAppTitle />
                                    <KontenTitle />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6 m6 l6">
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <i className="fa fa-user prefix"></i>
                                            <input id="firstName" value={this.state.firstName} type="text" onChange={(event)=> this.updateState(event, 'firstName')} />
                                            <label htmlFor="firstName" className="center-align">First Name</label>
                                        </div>
                                    </div>
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <i className="fa fa-user prefix"></i>
                                            <input id="lastName" type="text" value={this.state.lastName} onChange={(event)=> this.updateState(event, 'lastName')} />
                                            <label htmlFor="lastName" className="">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <i className="fa fa-mobile prefix"></i>
                                            <input id="mobileNum" type="number" value={this.state.mobileNum} onChange={(event)=> this.updateState(event, 'mobileNum')} />
                                            <label htmlFor="mobileNum" className="">Mobile Number</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s6 m6 l6">
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
                                            <input id="password" type="password" value={this.state.password}  onChange={(event)=> this.updateState(event, 'password')} />
                                            <label htmlFor="password" className="">Password</label>
                                        </div>
                                    </div>
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <i className="fa fa-lock prefix"></i>
                                            <input id="repassword" type="password" value={this.state.repassword}  onChange={(event)=> this.updateState(event, 'repassword')} />
                                            <label htmlFor="repassword" className="">Re Enter Password</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 m6 l6">
                                    <a href="#/auth/login" className="btn yellow darken-1 col s12">Cancel</a>
                                </div>
                                <div className="input-field col s6 m6 l6">
                                    <button onClick={(event)=>this.registerNewUser(event)} className="btn red lighten-1 col s12">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default RegistrationPage;