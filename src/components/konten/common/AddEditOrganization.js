import React from 'react';

const addEditOrganization = ({authData, orgData}) =>{
    return(
        <div className="card">
            <div className="info-box bg-pink hover-expand-effect">
                <div className="icon">
                    <i className="fa fa-sitemap fa-3x" aria-hidden="true"></i>
                </div>
                <div className="content">
                    <div className="text">ORGANIZATION NAME</div>
                    <div style={orgData.name?{display:'none'}:{display:'block'}}>To start register an organization!!</div>
                    <div style={orgData.name?{display:'block'}:{display:'none'}}>{orgData.name}</div>
                </div>
            </div>
            <div className="card-action lime lighten-5" style={{height: '30rem', color:'#fff'}}>
                <div className="row">
                    <form className="col s12">
                        <div className="input-field col s12">
                            <input id="org_Name" type="text" className="validate" />
                            <label forhtml="org_Name">Organization Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="org_Name" type="text" value={authData.firstName+' '+authData.lastName} className="validate" disabled />
                            <label forhtml="org_Name">Primary Contact</label>
                        </div>
                        <div>
                            <div className="input-field col s6">
                                <input id="address" type="text" className="validate" />
                                <label forhtml="address">Address</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="zipCode" type="text" className="validate" />
                                <label forhtml="zipCode">Zip Code</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field col s6">
                                <input id="place" type="text" className="validate" />
                                <label forhtml="place">Place</label>
                            </div>
                        </div>
                        <div>
                            <div className="col offset-s6 s6">
                                <button type="button" className="waves-effect waves-light btn pink pull--right">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default addEditOrganization;