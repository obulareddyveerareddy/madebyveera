import React from 'react';
import WebAppTitle      from './WebAppTitle';
import SubTitle         from './SubTitle';


const webAppTitle = ({auth, activeItem}) =>{
    
    var setActiveItem = (tag) =>{
        console.log('setActiveItem ~~~>>> ', activeItem, tag);
        if(activeItem === tag){
            return {backgroundColor:'#129dde'};
        }
        return {backgroundColor:'transparent'};
    }
    
    return(
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <span className="brand-logo" style={{fontSize:'1rem', display:'flex', justifyContent:'space-between', width:'100%', marginLeft:'0.4rem'}}>
                        <WebAppTitle />
                        <a href="#" data-target="slide-out" className="sidenav-trigger sidenav-bars" style={{color:'#000'}}><i className="fa fa-bars fa-3x"></i></a>
                    </span>
                </div>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li>
                        <div className="user-view" style={{backgroundImage:'url("./assets/user-profile-bg.jpg")', backgroundRepeat:'no-repeat', backgroundSize: '250%'}}>
                            <SubTitle title="Konten" iconClass="fa fa-university" />
                            <div style={{paddingLeft:'1rem'}}>
                                <a href="#user"><img className="circle" src="./assets/avatar.jpg" /></a>
                            </div>
                            <div id="user">
                            <a href="#name" style={{lineHeight:'22px'}}><span className="fullName">{auth.firstName+' '+auth.lastName}</span></a>
                            <a href="#email"><span className="email">{auth.email}</span></a>
                            </div>
                        </div>
                    </li>
                    <li style={setActiveItem('/konten/dashboard')}>
                        <a href="#/konten/dashboard">
                            <div className="d-flex justify-content-between" style={{width: '7rem'}}>
                                <div><i className="fa fa-tachometer" aria-hidden="true"></i></div>
                                <div>Dashboard</div>
                            </div>
                        </a>
                    </li>
                    <li style={setActiveItem('/konten/calender')}>
                        <a href="#/konten/calender">
                            <div className="d-flex justify-content-between" style={{width: '6rem'}}>
                                <div><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                <div>Calender</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#/konten/config" className="menu-toggle" data-toggle="collapse" data-target="#demo">
                            <div className="d-flex justify-content-between" style={{width: '8rem'}}>
                                <div><i className="fa fa-sitemap" aria-hidden="true"></i></div>
                                <div>Configuration</div>
                            </div>
                            <div><i className="fa fa-chevron-down" /></div>
                        </a>
                        <ul className="menu-toggle-sub collapse" id="demo">
                            <li style={setActiveItem('/konten/config/organization')}>
                                <a href="#/konten/config/organization" className="menu-toggle-sub">Organization Setup</a>
                            </li>
                            <li>
                                <a href="#" className="menu-toggle-sub">Manage Users</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default webAppTitle;

