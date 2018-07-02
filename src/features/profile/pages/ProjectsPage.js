import React from 'react';

const ProjectsPage = ({title})=>{
    return(
        <div style={{display:'flex', flexDirection:'column', margin:'2rem'}}>
            <div className="row">
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img className="img-thumbnail rounded" alt="Konten" src="./assets/own-account-projects-page-card-header.jpg" />
                            <div className="card-title col s12 m12 black-text text-darken-2 grey lighten-3">{title}</div>
                        </div>
                        <div className="card-content">
                            <p>Konten helps you to create a monthly budget so you can achieve your money goals. The application help to configure remainders. The application provides plug-ins for small businesses like Travels, Farming... to maintain & plan.</p>
                        </div>
                        <div className="card-action">
                            <div style={{display:'flex', justifyContent:'flex-end'}}>
                                <a  href='#/auth/login'  className="waves-effect waves-light btn red lighten-1"><i className="fa fa-user"></i> Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;