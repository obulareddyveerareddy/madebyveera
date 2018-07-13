import React from 'react';
import $            from 'jquery/dist/jquery';
import M            from "materialize-css/dist/js/materialize.min.js";
import moment       from 'moment';
import * as _       from 'lodash';

class CalenderMonthView extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            months: [],
            selectedYear:null,
            selectedMonth:null,
            selectedDay:null,
            noOfDaysInSelectedMonth:null,
            monthStartDayIndex:0,
            showCalDropdownOptions:false
        }
        
        this.nextMonth      = this.nextMonth.bind(this);
        this.updateState    = this.updateState.bind(this);
        this.setMonthlyCalenderParams       = this.setMonthlyCalenderParams.bind(this);
        this.toggleShowCalDropdownOptions   = this.toggleShowCalDropdownOptions.bind(this);
    }
    
    componentWillMount(){
        var dateStart = moment('2018-1-1');
        var dateEnd = moment('2018-12-25');
        var timeValues = [];
        while (dateEnd > dateStart || dateStart.format('M') === dateEnd.format('M')) {
           timeValues.push(dateStart.format('MMMM'));
           dateStart.add(1,'month');
        }
        this.setState({months:timeValues});
        
        var currentYear     = moment(new Date().getTime()).format('YYYY');
        var currentMonth    = moment(new Date().getTime()).format('MMMM');
        this.setState({selectedYear:currentYear});
        this.setState({selectedMonth:currentMonth});
        
        this.setMonthlyCalenderParams(currentYear, currentMonth);
    }
    
    componentDidMount(){
        this.yearOption     = M.FormSelect.init($('#yearOptionSelect'));
        this.monthOption    = M.FormSelect.init($('#monthOptionSelect'));
    }
    
    updateState(instance){
        switch(instance){
            case 'yearOptionSelect':
                this.setState({selectedYear:$('#'+instance).val()});
                this.setMonthlyCalenderParams($('#'+instance).val(), this.state.selectedMonth)
            break;
            case 'monthOptionSelect':
                this.setState({selectedMonth:$('#'+instance).val()});
                this.setMonthlyCalenderParams(this.state.selectedYear, $('#'+instance).val())
            break;
            default:
            break;
        }
        
    }
    
    setMonthlyCalenderParams(currentYear, currentMonth){
        var noOfDaysByMonth = [];
        var noOfDays        = moment(currentYear+"-"+moment().month(currentMonth).format("M"), "YYYY-MM").daysInMonth();
        var startDayIndex   = moment(currentYear+'-'+moment().month(currentMonth).format("M").toString()+'-01').day();
        for(let index=0; index<startDayIndex; index++){
            noOfDaysByMonth.push('--');
        }
        for(let idx=1; idx <= noOfDays; idx++){
            noOfDaysByMonth.push(idx);
        }
        
        this.setState({monthStartDayIndex:startDayIndex});
        this.setState({noOfDaysInSelectedMonth:noOfDaysByMonth});
    }
    
    
    
    toggleShowCalDropdownOptions(event){
        event.preventDefault();
        this.setState({showCalDropdownOptions:!this.state.showCalDropdownOptions});
    }
    
    nextMonth(event, type){
        
        event.preventDefault();
        let monthIndex  = this.state.months.indexOf(this.state.selectedMonth);
        let currentYear = this.state.selectedYear;
        switch(type){
            case 'forward':
                monthIndex++;
                if(monthIndex === this.state.months.length){
                    currentYear++;
                    monthIndex = 0;
                }
                break;
            case 'backward':
                if(monthIndex === 0){
                    currentYear--;
                    monthIndex = this.state.months.length-1;
                }else{
                    monthIndex--;
                }
                break;
            default:
            break;
        }
        let currentMonth = this.state.months[monthIndex];
        this.setState({selectedYear:currentYear});
        this.setState({selectedMonth:currentMonth});
        this.setMonthlyCalenderParams(currentYear, currentMonth);
    }
    
    render(){
        return(
            <div>
                <div className="white" style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{display:'flex'}}>
                        <button type="button" className="waves-effect waves-teal btn-flat" onClick={(event)=>this.nextMonth(event, 'backward')}><i className="fa fa-backward fa-3x" /></button>
                        <div style={{fontSize:'22px', fontWeight:'bold', marginLeft:'1rem', marginRight:'1rem', display:'flex'}}>
                            <span style={this.state.selectedDay ? {display: 'block'} : {display: 'none'}}>{this.state.selectedDay} -</span>
                            <span>{this.state.selectedMonth} - {this.state.selectedYear}</span>
                        </div>
                        <button type="button" className="waves-effect waves-teal btn-flat" onClick={(event)=>this.nextMonth(event, 'forward')}><i className="fa fa-forward fa-3x" /></button>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div style={this.state.showCalDropdownOptions ? {display: 'block'} : {display: 'none'}}>
                            <div className="input-field">
                                <select id="yearOptionSelect" value={this.state.selectedYear} onChange={(event)=>this.updateState('yearOptionSelect')}>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                </select>
                                <label>Year</label>
                            </div>
                        </div>
                        <div style={this.state.showCalDropdownOptions ? {display: 'block', marginLeft:'1rem'} : {display: 'none'}}>
                            <div className="input-field">
                                <select id="monthOptionSelect" value={this.state.selectedMonth} onChange={(event)=>this.updateState('monthOptionSelect')}>
                                    {
                                        this.state.months.map(function(entity, index){
                                            return <option value={entity} key={index}>{entity}</option>
                                        })
                                    }
                                </select>
                                <label>Month</label>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <button type="button" className="waves-effect waves-teal btn-flat" onClick={(event)=>this.toggleShowCalDropdownOptions(event)} style={this.state.showCalDropdownOptions ? {display: 'none'} : {display: 'block'}}><i className="fa fa-pencil fa-3x" /></button>
                            <button type="button" className="waves-effect waves-teal btn-flat" onClick={(event)=>this.toggleShowCalDropdownOptions(event)} style={this.state.showCalDropdownOptions ? {display: 'block'} : {display: 'none'}}><i className="fa fa-times fa-3x" /></button>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div>
                    <ul className="weekdays">
                        {
                            moment.weekdays().map(function(entity, index){
                                return <li key={index}>{entity}</li>;    
                            })
                        }
                    </ul>
                    <ul className="days">
                        {
                            this.state.noOfDaysInSelectedMonth.map(function(entity, index){
                                if(entity === '--'){
                                    return <li key={index} style={{backgroundColor:'transparent', color:'white'}}>{entity}</li>
                                }else{
                                    return <li key={index}>{entity}</li>    
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CalenderMonthView;