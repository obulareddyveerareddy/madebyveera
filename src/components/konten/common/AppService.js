import React from 'react';
import $     from 'jquery/dist/jquery';
import M     from "materialize-css/dist/js/materialize.min.js";

import RentalTransportAccounts from './RentalTransportAccounts';

const AppService = ({authData, orgData, vehicleData}) =>{
    return(
            <ul className="collapsible">
                <li className="active">
                    <div className="collapsible-header blue lighten-3">
                        <label style={{marginTop:'0.75rem'}}>
                            <input type="checkbox" />
                            <span></span>
                        </label>
                        <h6><i className="fa fa-bus" aria-hidden="true"></i>Manage Accounts for Rental Transport Businesses</h6>
                    </div>
                    <div className="collapsible-body lime lighten-5">
                        <RentalTransportAccounts authData={authData} orgData={orgData} vehicleData={vehicleData} />
                    </div>
                </li>
                <li>
                    <div className="collapsible-header green lighten-3">
                        <label style={{marginTop:'0.75rem'}}>
                            <input type="checkbox" disabled />
                            <span></span>
                        </label>
                        <h6><i className="fa fa-pagelines" aria-hidden="true"></i>Manage Accounts for Farming Businesses</h6>
                    </div>
                    <div className="collapsible-body green lighten-3"><span>Under Construction</span></div>
                </li>
            </ul> 
        )
}
export default AppService;