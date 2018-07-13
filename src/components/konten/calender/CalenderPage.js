import React        from 'react';
import $            from 'jquery/dist/jquery';
import M            from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import CalenderMonthView    from './../../common/CalenderMonthView';
import CalenderWeekView     from './../../common/CalenderWeekView';
import CalenderDayView      from './../../common/CalenderDayView';

class CalenderPage extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            
        }
        
    }
    
    componentDidMount(){
        M.Tabs.init($('.tabs'), {});
    }
    
    render(){
        return(
            <div className="grey lighten-1">
                <div className="card">
                    <div className="card-tabs">
                      <ul className="tabs tabs-fixed-width black-text text-darken-2">
                        <li className="tab"><a href="#month" className="active">Month</a></li>
                        <li className="tab"><a href="#day">Day</a></li>
                      </ul>
                    </div>
                    <div className="card-content">
                      <div id="month"><CalenderMonthView /></div>
                      <div id="day"><CalenderDayView /></div>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default CalenderPage;