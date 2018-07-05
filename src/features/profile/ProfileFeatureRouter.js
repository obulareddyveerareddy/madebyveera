import React    from 'react';
import $        from 'jquery/dist/jquery';
import M        from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


import WebAppTitle                from './../../components/common/WebAppTitle';
import AboutPage                  from './pages/AboutPage';
import ContactPage                from './pages/ContactPage';
import ResumePage                 from './pages/ResumePage';
import ProjectsLink               from './pages/ProjectsLink';

class ProfileFeatureRouter extends React.Component{

  componentDidMount(){
    M.Tabs.init($('.tabs'), {});
  }

  render(){
    return(
      <div className="container-on">
        <div className="navbar-fixed">
            <nav style={{backgroundImage:"url('./assets/user-profile-bg.jpg')", backgroundRepeat:"no-repeat"}}>
                <div id="profile-page-header" className="card">
                  <div className="card-content" style={{padding:'0px'}}>
                    <div className="row" style={{display:'flex'}}>
                        <div className="card-profile-image" style={{position: 'absolute'}}>
                          <img src="./assets/avatar.jpg" alt="Veera" className="circle z-depth-2 responsive-img activator" />
                        </div>
                        <div className="col s12 m12">
                            <div className="col offset-s2 s10 offset-m2 m10" style={{display:'flex', justifyContent: 'space-between'}}>
                                <WebAppTitle />
                                <div style={{display:'flex', margin: '1rem'}}>
                                    <a className="btn-floating activator waves-effect waves-light yellow darken-4 right">
                                        <i className="fa fa-user"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="card-reveal black-text">
                        <div style={{display:'flex', height: '6rem', marginTop: '-3rem', justifyContent: 'space-around'}}>
                            <p><i className="fa fa-user"></i> Veera Reddy ObulaReddy</p>
                            <p><i className="fa fa-envelope-o"></i> veerareddy.obula@gmail.com</p>
                            <p><i className="fa fa-mobile"></i> +91-8105555322, +91-9440949111</p>
                            <p className="card-title" style={{fontSize: "16px", fontWeight: "200", marginTop: '0.3rem'}}><i className="fa fa-times"></i></p>
                        </div>
                  </div>
                </div>
            </nav>
        </div>
        <div className="section main-section" style={{paddingTop:'4rem'}}>
            <div className="row">
                <ul id="tabs-swipe-demo" className="tabs">
                    <li className="tab col s3 m3"><a href="#about-page">About</a></li>
                    <li className="tab col s3 m3"><a className="active" href="#projects-page">Projects</a></li>
                    <li className="tab col s3 m3"><a href="#resume-page">Resume</a></li>
                    <li className="tab col s3 m3"><a href="#contact-page">Contact</a></li>
                </ul>
            </div>
            <div id="profile-page-content" className="row">
                <div id="about-page" className="col s12"><AboutPage /></div>
                <div id="projects-page" className="col s12"><ProjectsLink title="Konten" /></div>
                <div id="resume-page" className="col s12"><ResumePage /></div>
                <div id="contact-page" className="col s12"><ContactPage /></div>
            </div>
        </div>
      </div>
    );
  }

}

export default ProfileFeatureRouter;