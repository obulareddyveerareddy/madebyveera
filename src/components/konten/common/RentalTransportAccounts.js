import React from 'react';
import $     from 'jquery/dist/jquery';
import M     from "materialize-css/dist/js/materialize.min.js";

class RentalTransportAccounts extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            showAddVehicle:false
        }
    }
    
    componentWillMount(){
        $(document).ready(function() {
            M.FormSelect.init($('select'), {});
            M.Modal.init($('.modal'), {});
            M.Timepicker.init($('.datepicker'), {});
        });
    }
    
    closeAddVechicleModal(event){
        event.preventDefault();
        let instance = M.Modal.getInstance($('.modal'));
        instance.close();
    }
    
    addVehicle(event){
        event.preventDefault();
        let temp = this.state.showAddVehicle;
        this.setState({showAddVehicle:!temp})
    }
    
    render(){
        return(
            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', justifyContent:'flex-end', paddingBottom:'10px'}}>
                    <button type="button" style={this.state.showAddVehicle?{display:'none'}:{display:'block'}} className="waves-effect waves-light btn pink" onClick={(event)=>this.addVehicle(event)}>Add Vehicle</button>
                    <div className="row" style={this.state.showAddVehicle?{display:'block', paddingTop:'2px'}:{display:'none'}}>
                        <form className="col s12 m6">
                            <div className="input-field col s12">
                                <select>
                                    <option value="" disabled>Select Vechicle Type</option>
                                    <option value="1">Bus</option>
                                    <option value="2">Mini Van</option>
                                    <option value="3">Car</option>
                                </select>
                                <label forhtml="vechicleType">Vechicle Type</label>
                            </div>
                            <div className="input-field col s12">
                                <select>
                                    <option value="" disabled>Service Type</option>
                                    <option value="1">Rental Service</option>
                                    <option value="2">Lease  Service</option>
                                    <option value="3">Daily  Service</option>
                                </select>
                                <label forhtml="service">Service</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="manufactureCompany" type="text" className="validate" />
                                <label forhtml="manufactureCompany">Manufacture Company</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="manufacturedYear" type="text" className="datepicker validate" />
                                <label forhtml="manufacturedYear">Manufactured Year</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="serviceIntervalByDate" type="text" className="validate" />
                                <label forhtml="serviceIntervalByDate">Service Interval By Days</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="serviceIntervalByKm" type="text" className="validate" />
                                <label forhtml="serviceIntervalByKm">Service Interval By KM</label>
                            </div>
                        </form>
                        <form className="col s12 m6">
                            <div className="input-field col s12">
                                <input id="regYear" type="text" className="validate" />
                                <label forhtml="regYear">Reg. Year</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="regNumber" type="text" className="validate" />
                                <label forhtml="regNumber">Reg. Number</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="seatingCapacity" type="text" className="validate" />
                                <label forhtml="seatingCapacity">Seating Capacity</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="odometer" type="number" className="validate" />
                                <label forhtml="odometer">Odometer Reading</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="lastService" type="number" className="validate" />
                                <label forhtml="lastService">Last Service Date</label>
                            </div>
                        </form>
                        <div style={{display:'flex', justifyContent:'flex-end', width:'100%'}}>
                            <button type="button" style={this.state.showAddVehicle?{display:'block', marginRight:'10px'}:{display:'none'}} className="waves-effect waves-light btn grey" onClick={(event)=>this.addVehicle(event)}>Cancel</button>
                            <button type="button" style={this.state.showAddVehicle?{display:'block'}:{display:'none'}} className="waves-effect waves-light btn pink" onClick={(event)=>this.addVehicle(event)}>Save</button>
                        </div>
                    </div>
                </div>
                <div style={this.state.showAddVehicle?{display:'none'}:{display:'block'}}>
                    <table className="striped highlight centered responsive-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Vehicle Type</th>
                                <th>Reg. Number</th>
                                <th>Service</th>
                                <th>Seating Capacity</th>
                                <th>Odometer</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="7">Please add vechicles</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}

export default RentalTransportAccounts;