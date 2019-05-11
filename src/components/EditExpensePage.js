import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
         // props.dispatch(editExpense(props.expense.id, expense));
        //* props.dispatch is changed so that testing can be done... as a result mapDispatchToProps
        //* is created with the dispatch logic
        this.props.startEditExpense(this.props.expense.id, expense);
        //switching to homepage using browser routing
        this.props.history.push('/');    
    };
    onRemove = () => {
       this.props.startRemoveExpense({ id: this.props.expense.id });
       this.props.history.push('/');    
   };

    render() {
        return (
            <div>
                <ExpenseForm
                    buttonText= "Edit Expense"
                    expense= {this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick= {this.onRemove} >Remove</button>
            </div>
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

// It is a way to return the dispatcher functions allowing to obsctruct away from the component itself.
const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
