import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// to export the unconnected component too
export class AddExpense extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        //* props.dispatch is changed so that testing can be done... as a result mapDispatchToProps
        //* is created with the dispatch logic
        this.props.startAddExpense(expense);
        //switching to homepage using browser routing
        this.props.history.push('/');
    };
    render() {
        return (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add expense</h1>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm 
                buttonText= "Add Expense"
                onSubmit={this.onSubmit}
            />
        </div>
    </div>
        )
    }
}

// It is a way to return the dispatcher functions allowing to obsctruct away from the component itself.
const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpense);