import React    from 'react';
import $        from 'jquery/dist/jquery';
import M        from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import HomeNav                    from './../../components/common/HomeNav.js';
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
          <nav>
            <HomeNav />
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