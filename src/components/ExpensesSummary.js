import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesHidden, expensesTotal }) => {
    const expenseOrExpenses = expenseCount === 1 ? 'expense' : 'expenses';
    const expenseOrExpensesNonVisible = expensesHidden === 1 ? 'expense' : 'expenses';
    const isOrAre = expensesHidden === 1 ? 'is' : 'are';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0.00');
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseOrExpenses} totalling <span>{formattedExpensesTotal}</span></h1>
                    <h3 className="page-header__title"><span>{expensesHidden}</span> {expenseOrExpensesNonVisible} {isOrAre} hidden due to filter settings</h3>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
            </div>
        )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses),
        expensesHidden: state.expenses.length - visibleExpenses.length
    }
};

export default connect(mapStateToProps)(ExpensesSummary);