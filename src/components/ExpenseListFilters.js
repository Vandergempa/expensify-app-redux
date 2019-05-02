import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';


export class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null,
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = ( focusedInput ) => {
        this.setState(() => ({ focusedInput: focusedInput }))
    };
    onTextChange = (e) => {
            this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate();
        } else if (e.target.value === "amount") {
            this.props.sortByAmount();
        }
    }
    render() {
        return(
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange} 
                >
                <option value="date">Date</option> 
                <option value="amount">Amount</option> 
                </select>
                    <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        startDateId="your_unique_start_date_id"
                        endDate={this.props.filters.endDate}
                        endDateId="your_unique_end_date_id"
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
            </div>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

// It is a way to return the dispatcher functions allowing to obsctruct away from the component itself.
const mapDispatchToProps = (dispatch, props) => {
    return {
       setTextFilter: (text) => dispatch(setTextFilter(text)),
       sortByDate: () => dispatch(sortByDate()),
       sortByAmount: () => dispatch(sortByAmount()),
       setStartDate: (startDate) => dispatch(setStartDate(startDate)),
       setEndDate: (endDate) => dispatch(setEndDate(endDate))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);