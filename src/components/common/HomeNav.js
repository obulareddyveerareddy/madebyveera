import React        from 'react';
import WebAppTitle  from './WebAppTitle';
import "materialize-css/dist/css/materialize.min.css";

const HomeNav = ()=>{
  return(
      <div id="profile-page-header" className="card" style={{backgroundImage:"url('./assets/user-profile-bg.jpg')", backgroundRepeat:"no-repeat", height:'5rem'}}>
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
    )
}

export default HomeNav;