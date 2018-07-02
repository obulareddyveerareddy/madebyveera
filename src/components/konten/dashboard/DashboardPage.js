import React        from 'react';
import {toast}      from 'react-toastify';
import WebAppTitle  from './../../common/WebAppTitle';
import KontenTitle  from './../../common/KontenTitle';

class DashboardPage extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            dashboard:this.props.dashboard
        }
    }
    
    componentWillMount(){
        console.log('~~~~~~~~~~~~~~~~~~>>> dashboardpage@componentWillMount <<<~~~~~~~~~~~~~~~~~~');
        this.props.getTokenUserDetails();
    }
    
    render(){
        return(
            <div className="cyan loaded" style={{height:'100vh'}}>
                This is Konten Dashboard
            </div>
        )
    }
    
}

export default DashboardPage;