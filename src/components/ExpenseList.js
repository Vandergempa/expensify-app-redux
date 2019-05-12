import React from 'react';
import { connect } from 'react-redux';
import ExpenseListitem from './ExpenseListitem';
import selectExpenses from '../selectors/expenses';

// we are exporting it for testing
export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>There are no expenses to show</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListitem key={expense.id} {...expense}/>;
        // Or spreading can be used {...expense}, then ExpenseListitem can be written without using {expense}
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
}

export default connect(mapStateToProps)(ExpenseList);
