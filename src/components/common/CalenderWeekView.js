import React from 'react';
import $            from 'jquery/dist/jquery';
import M            from "materialize-css/dist/js/materialize.min.js";
import moment       from 'moment';
import * as _       from 'lodash';

class CalenderWeekView extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
        }
    }
    
    render(){
        return(
            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div>
                        
                    </div>
                    <div></div>
                </div>
                <div className="divider"></div>
                <div></div>
            </div>
        )
    }
}

export default CalenderWeekView;