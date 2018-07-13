import React from 'react';
import $            from 'jquery/dist/jquery';
import M            from "materialize-css/dist/js/materialize.min.js";
import moment       from 'moment';
import * as _       from 'lodash';

class CalenderDayView extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
        }
    }
    
    render(){
        return(
            <div>
                This is Day view
            </div>
        )
    }
}

export default CalenderDayView;