import React from 'react';
import { connect } from 'react-redux';
import ExpenseListitem from './ExpenseListitem';
import selectExpenses from '../selectors/expenses';

// we are exporting it for testing
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>There are no expenses to show</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListitem key={expense.id} {...expense}/>;
    // Or spreading can be used {...expense}, then ExpenseListitem can be written without using {expense}
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
}

export default connect(mapStateToProps)(ExpenseList);
