import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state ={
        calenderFocused: null
    };

    onDatesChange =({startDate, endDate}) =>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange =(calenderFocused) =>{
        this.setState( ()=> ({ calenderFocused }));
    };

    render() {
        return (
            <div>
                <input type="text" defaultValue="Please input search" onChange={ (e) => {
                    props.dispatch(setTextFilter(e.target.value));
                    //console.log();
                   }}
                />
                <select
                  value={this.props.filters.sortBy}
                  onChange={ (e) => {
                      if (e.target.value ==='date'){
                        this.props.dispatch( sortByDate() );
                      } else if (e.target.value === 'amount'){
                        this.props.dispatch( sortByAmount() );
                      }
                  }
    
                  }
                >
                  <option value="amount">by Amount</option>
                  <option value="date">by Date</option>
                  <option value="date1">by random</option>
                </select>
                <DateRangePicker 
                  startDate={this.props.filters.startDate}
                  endDate={this.props.filters.endDate}
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.calenderFocused}
                  onFocusChange={this.onFocusChange}
                  showClearDates={true}
                  numberOfMonths={1}
                  isOutsideRange={ ()=> false}
                />
            
    
            </div>
        );
    };

    
};



const mapStateToProps = (state) => {
    return {        
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
