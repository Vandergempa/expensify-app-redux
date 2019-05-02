import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { addLocale } from 'core-js';


// action generators!
const addExpense = (
     { 
         description = '', 
         note = '', 
         amount = 0,
         createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
   type: 'REMOVE_EXPENSE',
   id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = "") => ({
    type: 'SETTEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT',
});

const sortByDate = () => ({
    type: 'SORTBY_DATE',
});

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

//Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
// spreading operators can be used instead of concat so that the array is not reused
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(( { id } ) => {
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map(( expense ) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            })
        default: 
            return state;
    }
};

//Filter reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SETTEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORTBY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state;
    }
}

// Timestamps - january 1st 1970 (unix epoch)

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt  <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense( {description: 'Rent', amount: 100, createdAt: -21000 } ));
const expenseTwo = store.dispatch(addExpense( {description: 'Loan', amount: 1500, createdAt: -1000 } ));

// store.dispatch(removeExpense( { id: expenseOne.expense.id } ));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 10000 } ));

store.dispatch(setTextFilter('loan'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [ {
        id: 'aadadada',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined  
    }
};
